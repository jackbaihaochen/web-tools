export default {
  brand: 'オンラインツールボックス',
  nav: {
    home: 'ホーム',
    json: 'JSON フォーマッタ',
    faq: 'FAQ',
    privacy: 'プライバシー'
  },
  theme: {
    toLight: 'ライトモードに切替',
    toDark: 'ダークモードに切替'
  },
  lang: {
    zh: '中文',
    en: 'English',
    ja: '日本語'
  },
  home: {
    title: 'オンラインツールボックス',
    subtitle: 'フロントエンドのみ・プライバシー重視・継続拡張',
    catalog: 'ツール一覧',
    faqTitle: 'FAQ',
    faqMore: 'FAQ 全文',
    tools: {
      json: {
        name: 'JSON フォーマッタ',
        desc: 'オンラインで整形／圧縮／検証／コピー／ダウンロード',
        tagDev: '開発者',
        tagFmt: '整形'
      }
    }
  },
  json: {
    title: 'JSON フォーマッタ',
    subtitle: '整形・圧縮・検証・コピー・ダウンロード',
    input: '入力',
    output: '出力',
    beautify: '整形',
    minify: '圧縮',
    validate: '検証',
    clear: 'クリア',
    copy: 'コピー',
    download: 'ダウンロード .json',
    ok: '完了',
    valid: '有効な JSON',
    placeholder: '{"hello":"world"}',
    note: '本ツールはブラウザ内で JSON.parse と JSON.stringify を用いてローカルに処理します。データは送信されません。'
  },
  faq: {
    title: 'FAQ',
    subtitle: 'プライバシー・セキュリティ・ロードマップ',
    q1: 'なぜプライバシーに配慮しているのですか？',
    a1: 'すべてのツールはブラウザ内で完結します。データは保存・送信されません。',
    q2: '対応ブラウザは？',
    a2: 'Chrome / Edge / Firefox / Safari の直近2メジャー、モバイルも対応。',
    q3: '今後追加予定のツールは？',
    a3: 'JSON↔YAML、Base64、正規表現テスター、ハッシュ・エンコード、テキスト/画像ユーティリティなど。',
    q4: 'オープンソースですか？',
    a4: 'フロントエンドは GitHub で公開しています。貢献を歓迎します。'
  },
  privacy: {
    title: 'プライバシーポリシー',
    subtitle: 'フロントエンドのみ・ゼロアップロード・プライバシー重視',
    h1: 'データの取り扱い',
    p1: '当サイトのツールはすべてブラウザ内で動作し、処理（解析・変換・整形）は端末のメモリ上で行われます。',
    li1: '入力内容は収集しません',
    li2: 'データをサーバーへ送信しません',
    li3: '永続的に保存しません（明示的なダウンロードを除く）',
    h2: 'Cookie とトラッキング',
    p2: 'デフォルトで Cookie を使用せず、解析/広告トラッキングも内蔵していません。',
    h3: 'サードパーティ依存',
    p3: '現行バージョンはブラウザのネイティブ機能のみを使用し、バックエンドや外部 API は不要です。',
    h4: 'お問い合わせ',
    p4: 'ご質問は GitHub の Issue でご連絡ください。'
  }
};

