export default {
  meta: {
    title: "Bedrud - あなたらしいビデオ会議",
    description:
      "Bedrud はオープンソースのビデオ会議プラットフォームです。セルフホストまたはクラウドで利用可能。Web UI、REST API、WebRTC メディアサーバーを単一バイナリに統合。",
  },
  nav: {
    home: "ホーム",
    features: "機能",
    compare: "Feature",
    platforms: "プラットフォーム",
    openSource: "オープンソース",
    docs: "ドキュメント",
    community: "コミュニティ",
    demo: "デモ",
    getStarted: "はじめる",
    install: "インストール",
    blog: "ブログ",
  },
  hero: {
    badge: "オープンソース · Apache 2.0",
    kicker: "オープンソースの Zoom 代替。$5 VPS で稼働。",
    headline: "あなたのミーティング。あなたのサーバー。あなたのルール。",
    subheadline:
      "独自のハードウェアでセルフホスト型ビデオ会議。単一バイナリ、512MB RAM、60秒デプロイ。プライベート通話から数千視聴者のライブ配信まで。",
    trustBar:
      "世界中で10,000人以上のプライバシー重視の開発者とチームに信頼されています。",
    installMicrocopy: "ターミナルに貼り付けるだけ。60秒でデプロイ完了。",
    tryDemo: "インストールなしで試す",
    installNow: "インストールコマンドをコピー",
    objectionBullets: {
      screenSharing: "画面共有・録画機能",
      sso: "SSO・OIDC 連携",
      webrtc: "WebRTC 搭載、サブ秒レイテンシ",
    },
    getStarted: "はじめる",
    viewOnGithub: "GitHub で見る",
    copied: "コピーしました!",
    stars: "1.2k",
    starsLabel: "GitHub スター",
    contributorsLabel: "貢献者",
    license: "Apache 2.0 ライセンス",
  },
  journey: {
    title: "ゼロからミーティングまで数分で",
    subtitle: "インストール。リンクを共有。通話開始。実際の流れはこちら。",
    install: {
      title: "インストール",
      description:
        "単一バイナリをダウンロードするか、Dockerイメージをプルします。1つのコマンド、依存関係ゼロ。1分以内で実行。",
    },
    invite: {
      title: "招待",
      description:
        "リンクを共有。登録なし、ダウンロードなし、摩擦なし。ゲストは任意のブラウザから即座に参加。",
    },
    host: {
      title: "ミーティング",
      description:
        "ノイズキャンセル内蔵のクリスタルクリアなWebRTCビデオとオーディオ。画面共有、録画、チャットも完備。",
    },
  },
  whyBedrud: {
    title: "異なる設計",
    subtitle: "ロックインなし。無駄なし。請求の驚きなし。",
    noLockIn: {
      title: "ベンダーロックインなし",
      description:
        "あなたのインフラ。あなたのデータ。あなたのルール。任意のサーバーにデプロイ、いつでも移行可能。独自フォーマットなし、退出費用なし、クラウド依存なし。",
    },
    singleBinary: {
      title: "単一バイナリ",
      description:
        "ファイル1つ。コマンド1つ。依存関係ゼロ。Dockerなし、Kubernetesなし、金曜午後のデプロイ悪夢なし。",
    },
    noPerSeat: {
      title: "シートごとの課金なし",
      description:
        "5ユーザーでも5,000ユーザーでも。価格は同じ：ゼロ。ライセンスキーなし、シートカウンターなし、「営業に連絡」ボタンなし。",
    },
  },
  comparison: {
    title: "Bedrudの比較を見る",
    subtitle: "複雑さのないセルフホストビデオ会議。",
    feature: "機能",
    bedrud: "Bedrud",
    jitsi: "Jitsi Meet",
    bbb: "BigBlueButton",
    sections: {
      deployment: "デプロイ",
      features: "機能",
      integrations: "統合とスケール",
      licensing: "ライセンスとコミュニティ",
    },
    rows: {
      deploy: "デプロイの複雑さ",
      deployBedrud: "単一バイナリ",
      deployJitsi: "Docker Compose (8+コンテナ)",
      deployBbb: "最小8GB RAMサーバー",
      ram: "RAM使用量",
      ramBedrud: "512MB",
      ramJitsi: "~2GB",
      ramBbb: "~4GB+",
      install: "インストール時間",
      installBedrud: "< 1分",
      installJitsi: "~15分",
      installBbb: "~30分 + 設定",
      nativeClients: "ネイティブクライアント",
      nativeClientsBedrud: "Web、Android、iOS",
      nativeClientsJitsi: "Web、Android、iOS",
      nativeClientsBbb: "Webのみ",
      guestJoin: "ゲスト参加（アカウント不要）",
      guestJoinBedrud: "はい",
      guestJoinJitsi: "はい",
      guestJoinBbb: "はい（モデレーター承認）",
      audioProcessing: "オーディオ処理（ノイズキャンセル）",
      audioProcessingBedrud: "RNNoise / Krisp",
      audioProcessingJitsi: "基本",
      audioProcessingBbb: "基本",
      screenShare: "画面共有",
      screenShareBedrud: "内蔵",
      screenShareJitsi: "内蔵",
      screenShareBbb: "内蔵",
      recording: "録画",
      recordingBedrud: "サーバー側録画",
      recordingJitsi: "Jibri経由（追加設定）",
      recordingBbb: "内蔵 + ノートエクスポート",
      sipIntegration: "SIP / 電話ダイヤルイン",
      sipIntegrationBedrud: "なし",
      sipIntegrationJitsi: "SIP/Jibriゲートウェイ",
      sipIntegrationBbb: "SIPゲートウェイ",
      whiteboard: "ホワイトボード",
      whiteboardBedrud: "なし",
      whiteboardJitsi: "なし",
      whiteboardBbb: "内蔵ホワイトボード",
      maxUsers: "最大同時ユーザー",
      maxUsersBedrud: "50+ ルームあたり",
      maxUsersJitsi: "100+ チューニング必要",
      maxUsersBbb: "300+ ルームあたり",
      license: "ライセンス",
      licenseBedrud: "Apache 2.0",
      licenseJitsi: "Apache 2.0",
      licenseBbb: "LGPL 3.0",
      communitySize: "コミュニティとエコシステム",
      communitySizeBedrud: "成長中",
      communitySizeJitsi: "大規模、成熟",
      communitySizeBbb: "大規模、学術",
    },
  },
  features: {
    title: "すべて同梱",
    subtitle:
      "ビデオ、音声、認証、ボット - すべて含まれています。マイクロサービスアーキテクチャ不要。",
    e2eEncryption: {
      title: "デフォルトで暗号化",
      description:
        "すべてのメディアはDTLSとSRTPで暗号化されて転送されます。セルフホストモードではデータはあなたのサーバーに留まります。サードパーティのテレメトリなし、データ収集なし。",
    },
    webrtcVideo: {
      title: "WebRTC ビデオ",
      description:
        "内蔵WebRTCメディアサーバーによるサブ秒レイテンシのビデオ通話。不安定な接続でも適応ビットレートで対応。",
    },
    multiPlatform: {
      title: "マルチプラットフォーム",
      description:
        "Web、Android、iOSのネイティブアプリ。ラッパーではなく、本当のネイティブアプリ。自動化用のサーバーサイドSDKも付属。",
    },
    flexibleAuth: {
      title: "柔軟な認証",
      description:
        "すぐに使える内蔵認証に、SSO・OAuth統合をプラス。既存のIDプロバイダーに数分で接続。",
    },
    botAgents: {
      title: "ボットエージェント",
      description:
        "ボットが参加者としてミーティングに参加。会話の文字起こし、リアルタイム翻訳、CRM連携、Go SDKでカスタムワークフローを構築。",
    },
    selfHosted: {
      title: "あなたのインフラ、または私たちのインフラ",
      description:
        "自社サーバーでフルコントロールで運用。またはBedrud Cloudで運用を気にせず。同じ製品、同じ機能。",
    },
  },
  install: {
    title: "1つのコマンド。完了。",
    subtitle: "コピー。ペースト。実行中。セットアップはこれだけ。",
    command: "curl -fsSL https://get.bedrud.org | bash",
    dockerCommand: "docker run -d -p 8080:8080 bedrud/bedrud",
    or: "または",
    requirements:
      "任意の64ビット Linux、macOS、Windowsで動作。512MB RAMのみ必要。",
  },
  platforms: {
    title: "Webラッパーではないネイティブアプリ",
    subtitle:
      "本当のネイティブアプリ - WebはReact、AndroidはKotlin、iOSはSwift、デスクトップはRust、サーバーはGo。Electronなし、Cordovaなし。",
    web: {
      title: "Web",
      tech: "React + TypeScript",
    },
    android: {
      title: "Android",
      tech: "Kotlin + Compose",
    },
    ios: {
      title: "iOS",
      tech: "Swift + SwiftUI",
    },
    desktop: {
      title: "デスクトップ",
      tech: "Rust + Slint",
    },
    server: {
      title: "サーバー",
      tech: "Go + WebRTC",
    },
    bots: {
      title: "ボット",
      tech: "Python SDK",
    },
    status: "本番環境",
  },
  openSource: {
    title: "ソースコードを読む。主導権を握る。",
    subtitle:
      "すべてのコードが公開されています。検査、監査、貢献、またはフォーク可能。Apache 2.0ライセンス - 商用・個人利用自由。",
    license: "Apache 2.0",
    github: "GitHub で見る",
    docs: "ドキュメントを読む",
  },
  cta: {
    title: "ミーティングをレンタルするのは終わり",
    subtitle:
      "任意の $5 VPS に 60 秒でデプロイ。クレジットカード不要、ベンダーロックインなし、サードパーティサーバーなし。",
    installNow: "サーバーをデプロイ",
    getStarted: "クイックスタートを読む",
    readDocs: "クイックスタートを見る",
    starGithub: "GitHubでスター",
  },
  faq: {
    title: "よくある質問",
    subtitle: "技術的な質問に直接お答えします。",
    updates: {
      question: "アップデートはどうやって行いますか？",
      answer:
        "インストールコマンドを再実行してください。Bedrudはバイナリをその場で置き換えます - パッケージマネージャーなし、依存関係チェーンなし。単一の設定フラグで自動アップデートを有効にすることもできます。",
    },
    encryption: {
      question: "エンドツーエンド暗号化されていますか？",
      answer:
        "すべてのメディアはDTLSとSRTP（WebRTC標準）により転送中に暗号化されます。セルフホストデプロイメントでは、サーバーとすべてのデータをあなたが管理します。ピアツーピア通話のエンドツーエンド暗号化はロードマップにあります。",
    },
    network: {
      question: "ネットワークとポートの要件は？",
      answer:
        "HTTP/WebSocket用にポート80/443、WebRTCメディア用に設定可能なUDP範囲（デフォルト50000–60000）。NATの背後ではSTUN/TURNサーバーを設定してください - Bedrudにはcoturnのセットアップドキュメントが含まれています。",
    },
    proxy: {
      question: "リバースプロキシの背後で実行できますか？",
      answer:
        "はい。Nginx、Caddy、Traefik - すべて対応。ドキュメントにはそれぞれのコピペ設定が含まれています。WebSocket接続を転送し、適切なヘッダーを設定してください。",
    },
    cloudVsSelfHosted: {
      question: "セルフホストとBedrud Cloudの違いは？",
      answer:
        "同じ製品、同じ機能。セルフホストはお客様のインフラでフルデータコントロール。Bedrud Cloudは運用、アップデート、スケーリングを代行。ベンダーロックインなし - いつでも移行可能。",
    },
  },
  testimonials: {
    title: "開発者に選ばれています",
    subtitle: "Bedrudについての声。",
    one: {
      quote:
        "Jitsiのセットアップを午後だけでBedrudに置き換えました。バイナリ1つ、512MB RAMで、ミーティングの音質まで良くなりました。",
      name: "Lena K.",
      role: "ヨーロッパのSaaS企業 DevOpsリード",
      initials: "LK",
    },
    two: {
      quote:
        "シート課金なし - これが決め手でした。20人から200人に増えてもライセンスメールは1通も来ませんでした。",
      name: "Marcus T.",
      role: "リモートファーストスタートアップ CTO",
      initials: "MT",
    },
    three: {
      quote:
        "$5のVPSにBedrudをデプロイしたら、すぐ動きました。Bot SDKで1日でミーティングの文字起こしをCRMに連携できました。",
      name: "Priya S.",
      role: "フィンテック企業 シニアエンジニア",
      initials: "PS",
    },
  },
  footer: {
    brand: "Bedrud",
    tagline:
      "プライバシーを大切にするチームのためのビデオ会議。セルフホストまたはクラウド。",
    platform: "プラットフォーム",
    features: "機能",
    compare: "比較",
    demo: "ライブデモ",
    docs: "ドキュメント",
    api: "APIリファレンス",
    download: "ダウンロード",
    about: "概要",
    resources: "リソース",
    blog: "ブログ",
    changelog: "変更履歴",
    contribute: "貢献する",
    reportIssue: "問題を報告",
    contact: "お問い合わせ",
    privacy: "プライバシーポリシー",
    terms: "利用規約",
  },
  privacy: {
    meta: {
      title: "プライバシーポリシー - Bedrud",
      description:
        "Bedrud がデータをどのように扱うか。一言で言えば：セルフホストならデータはあなたのサーバーに残ります。",
    },
    title: "プライバシーポリシー",
    lastUpdated: "最終更新日：2026年4月17日",
    intro:
      "Bedrud はオープンソースのビデオ会議ソフトウェアです。セルフホストする場合、データは当方のサーバーを経由しません。本ポリシーは bedrud.org ウェブサイトと公開デモインスタンスを対象としています。Bedrud をセルフホストする場合、データはあなたが管理します。",
    dataCollection: {
      title: "収集する情報",
      content:
        "ウェブサイト（bedrud.org）：何も収集しません。Cookie なし、トラッカーなし、アナリティクスなし。公開デモ：接続中の表示名と IP アドレスのみ。それだけです。メール、電話、個人情報は一切不要。Bedrud をセルフホストする場合、すべてのデータはあなたのインフラ上に残ります。当方は一切見ません。",
    },
    dataUsage: {
      title: "データの使用方法",
      content:
        "デモの接続データは、リアルタイムでのビデオと音声のルーティングにのみ使用されます。ログ保存、データ保存、分析は一切しません。ユーザープロファイルの構築、ターゲット広告の配信、データの販売はしません。絶対に。",
    },
    dataStorage: {
      title: "データ保存",
      content:
        "公開デモはデータを永続化しません。切断するとセッションは消滅します。録画もチャット履歴もありません。セルフホストインスタンスでは SQLite にデータが保存されます。バックアップ戦略と保持ポリシーはあなたが選択します。当方にはアクセスできません。",
    },
    thirdParties: {
      title: "サードパーティサービス",
      content:
        "なし。Bedrud はダウンロード後に外部へのリクエストを一切行いません。アナリティクス、クラッシュレポート、テレメトリもありません。ウェブサイトもサードパーティスクリプトを読み込みません。GitHub のソースコードでご確認ください。",
    },
    cookies: {
      title: "Cookie とローカルストレージ",
      content:
        "ウェブサイトはテーマ設定（ダーク/ライト）と言語選択に localStorage を使用するだけです。それだけです。トラッキング Cookie、広告 ID もありません。デモはタブを閉じると失効するセッション Cookie を使用します。",
    },
    yourRights: {
      title: "あなたの権利",
      content:
        "個人情報を収集していないため、アクセス、修正、削除の対象となるデータはありません。デモのタブを閉じればセッションデータは既に消滅しています。セルフホストユーザーはサーバー上のすべてのデータを完全に制御できます。エクスポート、バックアップ、削除、必要に応じて。",
    },
    changes: {
      title: "本ポリシーの変更",
      content:
        "データ取り扱い方法が変更された場合、このページを更新します。ほとんどデータを収集していないため、変更の可能性は低いです。ページ上部の日付が最新の改訂を反映しています。",
    },
    contact: {
      title: "お問い合わせ",
      content:
        "ご質問がありますか？GitHub で Issue を開くか、privacy@bedrud.com までメールしてください。リアルタイムチャットをご希望なら Discord にもいます。",
    },
  },
  terms: {
    meta: {
      title: "利用規約 - Bedrud",
      description:
        "bedrud.org ウェブサイトと公開デモの利用規約。セルフホストユーザーは Apache 2.0 ライセンスに従います。",
    },
    title: "利用規約",
    lastUpdated: "最終更新日：2026年4月17日",
    intro:
      "本規約は bedrud.org ウェブサイトと demo.bedrud.org の公開デモインスタンスを対象としています。Bedrud をダウンロードしてセルフホストする場合、Apache 2.0 ライセンスが適用されます。",
    acceptance: {
      title: "Bedrud を使用することで本規約に同意したとみなされます",
      content:
        "bedrud.org にアクセスするか、公開デモを使用することで、本規約に同意したことになります。同意しない場合、デモを使用しないでください。シンプルです。",
    },
    services: {
      title: "Bedrud が提供するもの",
      content:
        "当方はドキュメントとダウンロードリンクがあるウェブサイトと、ソフトウェア評価用の公開デモインスタンスを提供しています。ビデオ会議ソフトウェア自体は Apache 2.0 ライセンスのオープンソースです。ダウンロード、改変、自前での実行が可能です。",
    },
    accounts: {
      title: "アカウント",
      content:
        "ウェブサイトはアカウント不要です。デモもアカウント不要です。セルフホストインスタンスには独自のアカウントシステムを設定できます。サーバーを運用するのはあなたなので、判断はあなた次第です。",
    },
    acceptableUse: {
      title: "デモを悪用しないでください",
      content:
        "公開デモを違法なコンテンツ、スパム、ハラスメント、または他者の体験を損なう目的で使用しないでください。悪質なユーザーをデモルームから削除する権利を留保します。これはセルフホストインスタンスには適用されません。ルールはあなたが決められます。",
    },
    intellectualProperty: {
      title: "オープンソースライセンス",
      content:
        "Bedrud は Apache 2.0 ライセンスです。商用を含めて使用、改変、配布が可能です。Bedrud の名前とロゴは theMadOrg の商標です。ソフトウェアを指す用途には使用できますが、プロジェクトとの関係を誤って表現する目的には使用できません。",
    },
    termination: {
      title: "アクセス",
      content:
        "悪用があった場合、公開デモへのアクセスをいつでも取り消すことができます。必要に応じてウェブサイトを閉鎖することもあります。ただし、バイナリをダウンロードした時点で、Apache 2.0 ライセンスに基づきあなたのものになります。これは取り消せません。",
    },
    liability: {
      title: "無保証",
      content:
        "Bedrud は現状のまま提供されます。すべての環境で完璧に動作することを保証しません。ダウンタイム、データ損失、ソフトウェア使用に起因する損害について責任を負いません。完全な法的テキストは Apache 2.0 ライセンスをご覧ください。",
    },
    governingLaw: {
      title: "準拠法",
      content:
        "本規約は適用される法律に準拠します。紛争については、弁護士を介入させる前に GitHub Issue または直接のコミュニケーションでの解決を希望します。",
    },
    changes: {
      title: "更新",
      content:
        "本規約を更新する場合があります。更新した場合、このページの日付を変更します。変更後もデモやウェブサイトを継続して使用することは、変更に同意したことを意味します。",
    },
    contact: {
      title: "お問い合わせ",
      content:
        "本規約についてご質問がありますか？legal@bedrud.com にメールするか、GitHub で Issue を開いてください。",
    },
  },
  docs: {
    documentation: "ドキュメント",
    onThisPage: "このページ",
    previous: "前へ",
    next: "次へ",
    backToHome: "ホームに戻る",
    searchPlaceholder: "ドキュメントを検索…",
    searchButton: "検索",
    noResults: "結果なし",
    loading: "読み込み中…",
    pressShortcut: "押す",
    clearSearch: "検索をクリア",
    searchDocs: "ドキュメントを検索",
    notFound: "ドキュメントが見つかりません",
    sections: {
      gettingStarted: "はじめに",
      architecture: "アーキテクチャ",
      backend: "バックエンド",
      api: "API",
      guides: "ガイド",
      contributing: "貢献する",
    },
  },
  installPage: {
    meta: {
      title: "インストール - Bedrud - ワンコマンドデプロイ",
      description:
        "Bedrud をサーバーに1分以内でデプロイ。単一バイナリ、512MB RAM、Docker 不要。",
    },
    title: "Bedrud をインストール",
    subtitle:
      "サーバーにビデオ会議を1分以内でデプロイ。1つのバイナリ、依存関係ゼロ。",
  },
  blog: {
    meta: {
      title: "ブログ - Bedrud",
      description:
        "Bedrud チームによるアップデート、エンジニアリングの深掘り、ガイド。",
    },
    title: "ブログ",
    subtitle:
      "Bedrud チームによるアップデート、エンジニアリングの深掘り、ガイド。",
    noPosts: "まだ投稿がありません。また後でチェックしてください！",
    backToBlog: "ブログに戻る",
  },
  skipToContent: "コンテンツへスキップ",
  mobileNav: {
    navigation: "Navigation",
    language: "Language",
    getStarted: "はじめる",
  },
  featuresPage: {
    meta: {
      title: "機能 - Bedrud",
      description:
        "Bedrud の機能をご紹介：単一バイナリ、WebRTC 品質、ゲスト参加、パスキー、管理者コントロール、オーディオ処理、ボットエージェント、マルチプラットフォーム対応。",
    },
    title: "機能",
    subtitle: "各機能が本当の問題を解決します。",
    sectionTitle: "必要なものだけ、余計なものは一切なし",
    sectionSubtitle:
      "単一バイナリのビデオ会議インフラ。外部依存なし、シート課金なし、ベンダーロックインなし。",
    groups: {
      infra: "デプロイ & インフラ",
      media: "ミーティング & メディア",
      access: "アクセス & コントロール",
      extend: "拡張",
    },
    learnMore: "詳細を見る",
    stats: {
      ram: "512MB RAM",
      binary: "1 バイナリ",
      auth: "6 認証方式",
      platforms: "5 プラットフォーム",
    },
    guestJoin: {
      pain: "15分の通話のためにゲストにアカウント作成を強要するのにうんざりしていませんか？",
      title: "ゲスト参加 - アカウント不要",
      description:
        "リンクを共有、クリック、参加完了。登録フォームなし、パスワードなし、摩擦なし。セキュリティ用オプションのパスコード。",
    },
    singleBinary: {
      pain: "ビデオインフラのセットアップにDevOpsの学位が必要なはずがありません。",
      title: "単一バイナリデプロイ",
      description:
        "1回のダウンロード、1つのコマンド、実行中。Docker Composeなし、Kubernetesマニフェストなし、12ステップガイドなし。動作するバイナリだけ。",
      snippet: "$ curl -sSL bedrud.dev/install.sh | sh",
    },
    webrtc: {
      pain: "ラグ、フリーズ、または切断するビデオ通話はミーティングを台無しにします。",
      title: "WebRTC品質",
      description:
        "アダプティブビットレート、simulcast、SVC内蔵のWebRTCメディアサーバー。どの接続でもクリスタルクリアなビデオとオーディオ。",
    },
    passkeys: {
      pain: "パスワードは漏洩します。MFAトークンはフィッシングされます。",
      title: "パスキー + OAuth",
      description:
        "パスワードレス認証用のFIDO2パスキー。既存のIDプロバイダーでのSSO用のOAuth 2.0 / OIDC。侵害されるパスワードデータベースなし。",
    },
    admin: {
      pain: "良いツールなしで会議プラットフォームを管理するのは苦痛です。",
      title: "管理ダッシュボード",
      description:
        "ルーム管理、ユーザー管理、使用分析、設定 - すべてクリーンなWeb UIから。CLI推測なし。",
    },
    audio: {
      pain: "ミーティングの背景ノイズは気を散らし、非プロフェッショナルです。",
      title: "オーディオ処理",
      description:
        "RNNoise駆動の内蔵ノイズ抑制。プレミアムAIノイズ抑制用のオプションKrisp統合。すべての通話でクリーンなオーディオ。",
    },
    bots: {
      pain: "手動の会議タスクは時間を浪費します - 録画、文字起こし、メモ。",
      title: "ボットエージェント",
      description:
        "プログラマブルボットがGo SDK経由で会議に参加。文字起こし、翻訳、録画、CRM統合、カスタムワークフローを自動化。",
    },
    multiPlatform: {
      pain: "チームは異なるデバイスを使用しています。会議プラットフォームもそうあるべきです。",
      title: "マルチプラットフォーム",
      description:
        "Web (React)、Android (Kotlin)、iOS (Swift) のネイティブアプリ。一貫したエクスペリエンス、プラットフォームネイティブパフォーマンス。",
    },
    e2eEncryption: {
      pain: "サーバーを経由する会議内容はプライベートであるべきです。",
      title: "エンドツーエンド暗号化",
      description:
        "ルームのオプション E2E 暗号化。サーバーは暗号化メディアを中継するだけ - 参加者のみが復号できます。",
    },
    autoTls: {
      pain: "SSL証明書の設定にチュートリアルは不要なはずです。",
      title: "自動 TLS と HTTPS",
      description:
        "Let's Encrypt の自動プロビジョニングと更新。内部ネットワーク用の自己署名証明書。",
    },
    airGapped: {
      pain: "サーバーがインターネットに接続できない場合はどうしますか？",
      title: "エアギャップ＆オフライン対応",
      description:
        "ダウンロード後の外部リクエストゼロ。SQLite 内蔵。公共インターネットに接続しないインフラで動作。",
    },
  },
  demoPage: {
    meta: {
      title: "ライブデモ - Bedrud",
      description:
        "インストール不要で Bedrud をお試しください。今すぐライブデモ会議に参加できます。",
    },
    hero: {
      headline: "今すぐ Bedrud を試す",
      subtitle:
        "ブラウザでライブ会議に参加。アカウント不要、ダウンロード不要、待ち時間なし。",
    },
    cta: {
      tryNow: "ライブデモを開く",
      noInstall:
        "インストール不要。アカウント不要。コミットメント不要。クリックして参加。",
    },
    preview: {
      caption: "デモに参加すると表示される画面",
    },
    features: {
      instantJoin: {
        title: "即座に参加",
        description:
          "リンクをクリックするだけで参加できます。登録フォーム、メール認証、アプリのインストールは一切不要。すべてのモダンブラウザで動作します。",
      },
      noAccount: {
        title: "アカウント不要",
        description:
          "表示名を選んですぐに会話を始められます。終わったらタブを閉じるだけ。何も残りません。",
      },
      webrtc: {
        title: "本物の WebRTC 品質",
        description:
          "デモはセルフホスト版の Bedrud と同じエンジンを使用。サブ秒レイテンシ、アダプティブビットレート、クリスタルクリアな音声。",
      },
      e2e: {
        title: "エンドツーエンド暗号化",
        description:
          "ルーム設定で E2E 暗号化を有効にできます。動画と音声はブラウザを離れる前に暗号化されます。",
      },
    },
    faq: {
      whatHappens: {
        question: "デモで何ができますか？",
        answer:
          "Bedrud のフルスタックが稼働する共有会議ルームに参加します。ビデオ、音声、画面共有、チャット、会議コントロールをテストできます。セルフホスト版と全く同じです。",
      },
      dataSaved: {
        question: "データは保存されますか？",
        answer:
          "いいえ。デモではデータを永続化しません。退出するとセッションは消滅します。録画もチャット履歴も保存されません。",
      },
      duration: {
        question: "デモはどのくらい使えますか？",
        answer:
          "時間制限はありません。Bedrud を評価するのに必要なだけデモをご利用ください。永続的なセットアップが必要なら、セルフホストは60秒で完了します。",
      },
      inviteOthers: {
        question: "他の人をデモに招待できますか？",
        answer:
          "はい。デモリンクをチームメンバーと共有すれば、全員が同じルームに参加できます。デプロイ前にチームで Bedrud をテストするのに最適です。",
      },
    },
    selfHost: {
      text: "自分でサーバーを運用したいですか？",
      cta: "インストールガイドを読む",
    },
  },
  changelogPage: {
    meta: {
      title: "変更履歴 - Bedrud",
      description: "Bedrud のリリース履歴とアップデート情報。",
    },
    title: "変更履歴",
    subtitle: "Bedrudの新機能。アクティビティ = 信頼。",
    viewOnGithub: "GitHub で見る",
    noReleases: "リリースはまだありません。すぐにお戻りください！",
  },
  contributorsPage: {
    meta: {
      title: "コントリビューター - Bedrud",
      description: "Bedrud を開発している人々を紹介します。",
    },
    title: "コントリビューター",
    subtitle: "Bedrud はコミュニティによって構築されています。",
    joinThem: "彼らに参加",
    joinCta: "GitHubで貢献",
    contributions: "貢献",
  },
  contactPage: {
    meta: {
      title: "お問い合わせ - Bedrud",
      description: "Bedrud チームにお問い合わせください。",
    },
    title: "お問い合わせ",
    subtitle: "これらのチャネルのいずれかからお問い合わせください。",
    github: {
      title: "GitHub Issues",
      description: "バグ報告、機能リクエスト、コード貢献。",
      cta: "Issueを開く",
    },
    discord: {
      title: "コミュニティチャット",
      description:
        "質問をし、アイデアを共有し、コミュニティから助けを得てください。",
      cta: "Discordに参加",
    },
    email: {
      title: "メール",
      description:
        "パートナーシップ、セキュリティ問題、またはプライベートなお問い合わせ用。",
      cta: "メール送信",
    },
  },
  notFound: {
    title: "ページが見つかりません",
    description: "お探しのページは存在しないか、移動されました。",
    backToHome: "ホームに戻る",
  },
};
