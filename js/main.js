// ===========================
// Portfolio Main Script
// ===========================
// プロフィールの変更 → data/profile.js を編集
// アプリの追加     → data/apps.js に項目を追加

// ===========================
// 年齢・誕生日フォーマット
// ===========================
function calcAge(birthdayStr) {
  const today = new Date();
  const bday  = new Date(birthdayStr);
  let age = today.getFullYear() - bday.getFullYear();
  const m = today.getMonth() - bday.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < bday.getDate())) age--;
  return age;
}

function formatBirthday(birthdayStr) {
  const bday = new Date(birthdayStr);
  const age  = calcAge(birthdayStr);
  return `${bday.getFullYear()}年${bday.getMonth() + 1}月生まれ（${age}歳）`;
}

// ===========================
// 資格カラー定義
// ===========================
const ORG_COLOR = {
  AWS:    { bg: 'rgba(255,153,0,0.12)',  text: '#FF9900', border: 'rgba(255,153,0,0.3)'   },
  Azure:  { bg: 'rgba(0,120,212,0.12)',  text: '#5ea8f0', border: 'rgba(0,120,212,0.3)'   },
  IPA:    { bg: 'rgba(108,99,255,0.12)', text: '#a78bfa', border: 'rgba(108,99,255,0.3)'  },
  Oracle: { bg: 'rgba(248,64,0,0.12)',   text: '#f87171', border: 'rgba(248,64,0,0.3)'    },
};

// ===========================
// Profile Renderer
// ===========================
function renderProfile(p) {
  document.getElementById('avatar-initials').textContent =
    (p.name || p.nameEn || '?')[0];

  document.getElementById('profile-name').textContent = p.name || p.nameEn;

  const nameEnEl = document.getElementById('profile-name-en');
  if (nameEnEl) nameEnEl.textContent = p.nameEn || '';

  document.getElementById('profile-title').textContent = p.title || '';

  const bdEl = document.getElementById('profile-birthday');
  if (bdEl && p.birthday) bdEl.textContent = formatBirthday(p.birthday);

  const navLogo = document.getElementById('nav-logo');
  if (navLogo) navLogo.textContent = p.nameEn || p.name || 'Portfolio';

  document.getElementById('profile-tagline').textContent = p.tagline || '';
  document.getElementById('profile-bio').textContent     = p.bio     || '';

  const skillsEl = document.getElementById('skills-list');
  if (skillsEl && Array.isArray(p.skills)) {
    skillsEl.innerHTML = p.skills
      .map(s => `<span class="skill-tag">${s}</span>`)
      .join('');
  }

  // GitHub リンク
  const linksEl = document.getElementById('profile-links');
  if (linksEl && p.links?.github) {
    linksEl.innerHTML = `
      <a href="${p.links.github}" target="_blank" rel="noopener" class="profile-link-btn primary">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
        ソースコードを見る (GitHub)
      </a>`;
  }

  renderCerts(p.certifications);
}

// ===========================
// Certifications Renderer
// ===========================
function renderCerts(certs) {
  const section = document.getElementById('certs-section');
  const list    = document.getElementById('certs-list');
  if (!section || !list || !Array.isArray(certs) || certs.length === 0) return;

  list.innerHTML = certs.map(c => {
    const col = ORG_COLOR[c.org] || ORG_COLOR.IPA;
    return `
      <div class="cert-item" style="background:${col.bg};border:1px solid ${col.border}">
        <span class="cert-org" style="color:${col.text}">${c.org}</span>
        <div class="cert-names">
          <span class="cert-formal">${c.formal}</span>
          <span class="cert-common">${c.common}</span>
        </div>
      </div>`;
  }).join('');

  section.style.display = '';
}

// ===========================
// Apps Renderer
// ===========================
function renderApps(apps) {
  const grid = document.getElementById('apps-grid');
  if (!grid) return;

  if (!apps || apps.length === 0) {
    grid.innerHTML = '<p class="loading-placeholder">アプリはまだありません。</p>';
    return;
  }

  const tabsContainer = document.createElement('div');
  tabsContainer.className = 'filter-tabs';
  grid.parentNode.insertBefore(tabsContainer, grid);

  const gameCount = apps.filter(a => a.category === 'game').length;
  const toolCount = apps.filter(a => a.category === 'tool').length;

  tabsContainer.innerHTML = [
    { key: 'all',  label: 'すべて',    count: apps.length },
    { key: 'game', label: '🎮 ゲーム', count: gameCount   },
    { key: 'tool', label: '🔧 ツール', count: toolCount   },
  ].map(t => `
    <button class="filter-tab ${t.key === 'all' ? 'active' : ''}" data-filter="${t.key}">
      ${t.label} <span class="tab-count">${t.count}</span>
    </button>`
  ).join('');

  grid.innerHTML = apps.map(cardHTML).join('');

  tabsContainer.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      tabsContainer.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      grid.querySelectorAll('.app-card').forEach(card => {
        card.style.display =
          (filter === 'all' || card.dataset.category === filter) ? '' : 'none';
      });
    });
  });
}

function cardHTML(app) {
  const accent = app.accent || '#6c63ff';
  const isGame = app.category === 'game';
  const cta    = isGame ? '▶ 遊ぶ' : '→ 使う';

  const r = parseInt(accent.slice(1, 3), 16);
  const g = parseInt(accent.slice(3, 5), 16);
  const b = parseInt(accent.slice(5, 7), 16);

  const tags = (app.tags || []).map(t => `<span class="app-tag">${t}</span>`).join('');

  return `
    <a class="app-card" href="${app.path}" target="_blank" rel="noopener"
       data-category="${app.category}">
      <div class="card-header"
           style="background:linear-gradient(135deg,rgba(${r},${g},${b},0.12),rgba(${r},${g},${b},0.22))">
        <span class="card-emoji">${app.thumbnail || '📦'}</span>
        <span class="card-badge ${isGame ? 'game' : 'tool'}">${isGame ? 'ゲーム' : 'ツール'}</span>
      </div>
      <div class="card-body">
        <div class="card-title">${app.title}</div>
        <div class="card-desc">${app.description}</div>
        <div class="card-footer">
          <div class="card-tags">${tags}</div>
          <span class="card-cta" style="color:${accent}">${cta}</span>
        </div>
      </div>
    </a>`;
}

// ===========================
// Footer Renderer
// ===========================
function renderFooter(p) {
  const footerEl = document.getElementById('footer-copy');
  if (footerEl) {
    footerEl.textContent =
      `© ${new Date().getFullYear()} ${p.name || p.nameEn}. All rights reserved.`;
  }
}

// ===========================
// 初期化（必ずファイル末尾に置く）
// const ORG_COLOR などが初期化されてから実行するため
// ===========================
(function () {
  renderProfile(PROFILE);
  renderApps(APPS);
  renderFooter(PROFILE);
})();
