// ===========================
// アプリ一覧設定
// ===========================
// 追加するときはこのファイルに1項目追記するだけでOKです。
// category: "game" または "tool"
// accent:   カードのアクセントカラー（16進数）

const APPS = [
  // ─── ゲーム ───────────────────────────────────────────
  {
    id: "snake",
    title: "スネークゲーム",
    description: "矢印キー / WASD で操作。食べるほど長くなる定番ゲーム。ハイスコアに挑戦！",
    tags: ["JavaScript", "Canvas"],
    thumbnail: "🐍",
    path: "apps/snake/index.html",
    category: "game",
    accent: "#6c63ff"
  },
  {
    id: "memory",
    title: "神経衰弱",
    description: "カードをめくって同じ絵柄のペアを揃えるメモリーゲーム。最少手数を目指せ。",
    tags: ["JavaScript", "CSS"],
    thumbnail: "🃏",
    path: "apps/memory/index.html",
    category: "game",
    accent: "#a78bfa"
  },
  {
    id: "invader",
    title: "インベーダーゲーム",
    description: "迫りくるエイリアンを撃退せよ。ステージが上がるほど敵が速くなる本格派。",
    tags: ["JavaScript", "Canvas"],
    thumbnail: "👾",
    path: "apps/invader/index.html",
    category: "game",
    accent: "#00d4aa"
  },
  {
    id: "tetris",
    title: "テトリス",
    description: "落下するブロックでラインを消すパズルゲーム。ゴーストブロック表示付き。",
    tags: ["JavaScript", "Canvas"],
    thumbnail: "🧩",
    path: "apps/tetris/index.html",
    category: "game",
    accent: "#e94560"
  },
  // ─── ツール ───────────────────────────────────────────
  {
    id: "calculator",
    title: "電卓",
    description: "四則演算に加えてパーセント計算にも対応。キーボード操作でサクサク使える。",
    tags: ["JavaScript"],
    thumbnail: "🔢",
    path: "apps/calculator/index.html",
    category: "tool",
    accent: "#6c63ff"
  },
  {
    id: "bmi",
    title: "BMI・代謝チェッカー",
    description: "身長・体重・年齢・性別を入力するだけで BMI・基礎代謝・TDEE を算出。",
    tags: ["JavaScript", "健康"],
    thumbnail: "⚖️",
    path: "apps/bmi/index.html",
    category: "tool",
    accent: "#0ea5e9"
  },
  {
    id: "pomodoro",
    title: "ポモドーロタイマー",
    description: "25分集中→5分休憩のサイクルで生産性を高める。セッション完了時に通知音あり。",
    tags: ["JavaScript", "生産性"],
    thumbnail: "🍅",
    path: "apps/pomodoro/index.html",
    category: "tool",
    accent: "#ef4444"
  },
  {
    id: "hash",
    title: "テキスト変換ツール",
    description: "Base64・URLエンコード・SHA-256/512・ROT13 などをリアルタイムで変換。コピーボタン付き。",
    tags: ["JavaScript", "開発"],
    thumbnail: "🔐",
    path: "apps/hash/index.html",
    category: "tool",
    accent: "#f59e0b"
  },
  {
    id: "ginga",
    title: "銀河鉄道の夜",
    description: "宮沢賢治の名作を現代語でノベルゲーム化。ジョバンニとカムパネルラの銀河の旅を体験する、約45分の物語。",
    tags: ["ゲーム", "ノベル", "文学"],
    thumbnail: "🚂",
    path: "apps/ginga/index.html",
    category: "game",
    accent: "#7a9ec8"
  },
  {
    id: "rpg",
    title: "深淵の怪談",
    description: "クトゥルフ神話TRPGをベースにしたドラクエ風RPG。理性（SAN）を削られながら、深海神官に挑め。",
    tags: ["ゲーム", "RPG", "JavaScript"],
    thumbnail: "🐙",
    path: "apps/rpg/index.html",
    category: "game",
    accent: "#4a8cc0"
  },
  {
    id: "shogi",
    title: "将棋",
    description: "コンピュータと対局できる本格将棋。持ち駒・成り・打ち歩詰めなど完全ルール対応。難易度3段階。",
    tags: ["ゲーム", "JavaScript", "AI"],
    thumbnail: "♟",
    path: "apps/shogi/index.html",
    category: "game",
    accent: "#f59e0b"
  },
  {
    id: "stopwatch",
    title: "ストップウォッチ",
    description: "ラップタイム記録付き。最速・最遅ラップを自動でカラー表示。",
    tags: ["ツール", "JavaScript"],
    thumbnail: "⏱️",
    path: "apps/stopwatch/index.html",
    category: "tool",
    accent: "#6c63ff"
  },
  {
    id: "calendar",
    title: "カレンダー",
    description: "祝日表示対応のカレンダー。日付をクリックしてメモを保存。ローカルに記録されます。",
    tags: ["ツール", "JavaScript"],
    thumbnail: "📅",
    path: "apps/calendar/index.html",
    category: "tool",
    accent: "#10b981"
  },
  {
    id: "poker",
    title: "ポーカー",
    description: "CPU2人と対戦する5枚交換ポーカー。チップをかけてベット・レイズ・フォールドで戦え。",
    tags: ["ゲーム", "JavaScript"],
    thumbnail: "♠️",
    path: "apps/poker/index.html",
    category: "game",
    accent: "#4ac860"
  },
  {
    id: "mahjong",
    title: "麻雀",
    description: "CPU3人と対戦する本格麻雀。断么・七対子・役牌など主要な役に対応。ロン・ツモ判定あり。",
    tags: ["ゲーム", "JavaScript"],
    thumbnail: "🀄",
    path: "apps/mahjong/index.html",
    category: "game",
    accent: "#e85050"
  },
  {
    id: "pathresolver",
    title: "パス変換ツール",
    description: "相対パスを絶対パスに変換。Windows / Unix / URL に対応。複数パスの一括変換・コピーも可能。",
    tags: ["JavaScript", "開発"],
    thumbnail: "🔗",
    path: "apps/pathresolver/index.html",
    category: "tool",
    accent: "#10b981"
  }
];
