export default {
  meta: {
    title: "Bedrud — あなたらしいビデオ会議",
    description:
      "Bedrud はオープンソースのビデオ会議プラットフォームです。セルフホストまたはクラウドで利用可能。Web UI、REST API、WebRTC メディアサーバーを単一バイナリに統合。",
  },
  nav: {
    home: "ホーム",
    features: "機能",
    compare: "比較",
    platforms: "プラットフォーム",
    openSource: "オープンソース",
    docs: "ドキュメント",
    community: "コミュニティ",
    demo: "デモ",
    getStarted: "はじめる",
  },
  hero: {
    badge: "オープンソース · Apache 2.0",
    kicker: "セルフホスト動画会議。200MB RAM。バイナリ1つ。",
    headline: "1分未満で立ち上げるセルフホスト型ビデオ会議",
    subtitle:
      "単一バイナリ、200MB RAM、ユーザー無制限。あなたのサーバー、あなたのルール、あなたのデータ。",
    tryDemo: "デモを試す",
    installNow: "インストールコマンドをコピー",
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
    meet: {
      title: "ミーティング",
      description:
        "ノイズキャンセル内蔵のクリスタルクリアなWebRTCビデオとオーディオ。ただ話すだけ。",
    },
    scale: {
      title: "スケール",
      description:
        "完全制御のためにセルフホスト、またはBedrud Cloudを使用。無制限ユーザー、シートごとの課金はなし、いつでも。",
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
    rows: {
      deploy: "デプロイの複雑さ",
      deployBedrud: "単一バイナリ",
      deployJitsi: "Docker Compose (8+コンテナ)",
      deployBbb: "最小8GB RAMサーバー",
      ram: "RAM使用量",
      ramBedrud: "~200MB",
      ramJitsi: "~2GB",
      ramBbb: "~4GB+",
      install: "インストール時間",
      installBedrud: "< 1分",
      installJitsi: "~15分",
      installBbb: "~30分 + 設定",
      nativeClients: "ネイティブクライアント",
      nativeBedrud: "Web、Android、iOS",
      nativeJitsi: "Web、Android、iOS",
      nativeBbb: "Webのみ",
      guestJoin: "ゲスト参加（アカウント不要）",
      guestBedrud: "はい",
      guestJitsi: "はい",
      guestBbb: "はい（モデレーター承認）",
      audioProcessing: "オーディオ処理（ノイズキャンセル）",
      audioBedrud: "RNNoise / Krisp",
      audioJitsi: "基本",
      audioBbb: "基本",
      license: "ライセンス",
      licenseBedrud: "Apache 2.0",
      licenseJitsi: "Apache 2.0",
      licenseBbb: "LGPL 3.0",
    },
  },
  features: {
    title: "すべて同梱",
    subtitle:
      "ビデオ、音声、認証、ボット — すべて含まれています。マイクロサービスアーキテクチャ不要。",
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
      "任意の64ビット Linux、macOS、Windowsで動作。200MB RAMのみ必要。",
  },
  platforms: {
    title: "Webラッパーではないネイティブアプリ",
    subtitle:
      "本当のネイティブアプリ — WebはReact、AndroidはKotlin、iOSはSwift、サーバーはGo。Electronなし、Cordovaなし。",
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
    server: {
      title: "サーバー",
      tech: "Go + WebRTC",
    },
    bots: {
      title: "ボット",
      tech: "Go SDK",
    },
    status: "本番環境",
  },
  openSource: {
    title: "ソースコードを読む。主導権を握る。",
    subtitle:
      "すべてのコードが公開されています。検査、監査、貢献、またはフォーク可能。Apache 2.0ライセンス — 商用・個人利用自由。",
    license: "Apache 2.0",
    github: "GitHub で見る",
    docs: "ドキュメントを読む",
  },
  cta: {
    title: "ミーティングを所有する準備はできましたか？",
    subtitle:
      "シート課金とベンダーロックインにうんざりした何千もの開発者に参加。1分未満で始められます。",
    installNow: "インストールコマンドをコピー",
    readDocs: "ドキュメントを読む",
    starGithub: "GitHubでスター",
  },
  faq: {
    title: "よくある質問",
    subtitle: "技術的な質問に直接お答えします。",
    updates: {
      question: "アップデートはどうやって行いますか？",
      answer:
        "インストールコマンドを再実行してください。Bedrudはバイナリをその場で置き換えます — パッケージマネージャーなし、依存関係チェーンなし。単一の設定フラグで自動アップデートを有効にすることもできます。",
    },
    encryption: {
      question: "エンドツーエンド暗号化されていますか？",
      answer:
        "すべてのメディアはDTLSとSRTP（WebRTC標準）により転送中に暗号化されます。セルフホストデプロイメントでは、サーバーとすべてのデータをあなたが管理します。ピアツーピア通話のエンドツーエンド暗号化はロードマップにあります。",
    },
    network: {
      question: "ネットワークとポートの要件は？",
      answer:
        "HTTP/WebSocket用にポート80/443、WebRTCメディア用に設定可能なUDP範囲（デフォルト50000–60000）。NATの背後ではSTUN/TURNサーバーを設定してください — Bedrudにはcoturnのセットアップドキュメントが含まれています。",
    },
    proxy: {
      question: "リバースプロキシの背後で実行できますか？",
      answer:
        "はい。Nginx、Caddy、Traefik — すべて対応。ドキュメントにはそれぞれのコピペ設定が含まれています。WebSocket接続を転送し、適切なヘッダーを設定してください。",
    },
    cloudVsSelfHosted: {
      question: "セルフホストとBedrud Cloudの違いは？",
      answer:
        "同じ製品、同じ機能。セルフホストはお客様のインフラでフルデータコントロール。Bedrud Cloudは運用、アップデート、スケーリングを代行。ベンダーロックインなし — いつでも移行可能。",
    },
  },
  testimonials: {
    title: "開発者に選ばれています",
    subtitle: "Bedrudについての声。",
    one: {
      quote:
        "Jitsiのセットアップを午後だけでBedrudに置き換えました。バイナリ1つ、200MB RAMで、ミーティングの音質まで良くなりました。",
      name: "Lena K.",
      role: "ヨーロッパのSaaS企業 DevOpsリード",
      initials: "LK",
    },
    two: {
      quote:
        "シート課金なし — これが決め手でした。20人から200人に増えてもライセンスメールは1通も来ませんでした。",
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
    product: "製品",
    features: "機能",
    compare: "比較",
    platforms: "プラットフォーム",
    openSource: "オープンソース",
    selfHosted: "セルフホスト vs クラウド",
    demo: "ライブデモ",
    changelog: "変更履歴",
    developers: "開発者",
    quickstart: "クイックスタートガイド",
    docs: "ドキュメント",
    architecture: "アーキテクチャガイド",
    api: "APIリファレンス",
    openSourceSection: "オープンソース",
    contribute: "貢献する",
    reportIssue: "問題を報告",
    resources: "リソース",
    contributors: "貢献者",
    github: "GitHub",
    releases: "リリース",
    discord: "Discord",
    legal: "法的情報",
    license: "ライセンス",
    privacy: "プライバシーポリシー",
    terms: "利用規約",
    contact: "お問い合わせ",
    madeBy: "心を込めて制作",
    backToTop: "トップに戻る",
    languages: "言語",
  },
  privacy: {
    meta: {
      title: "プライバシーポリシー — Bedrud",
      description:
        "Bedrud がお客様の個人情報をどのように収集、使用、保護するかをご確認ください。",
    },
    title: "プライバシーポリシー",
    lastUpdated: "最終更新日：2026年2月20日",
    intro:
      "Bedrud では、お客様のプライバシーを真剣に考えています。このプライバシーポリシーは、お客様が当社のビデオ会議プラットフォームおよび関連サービスを使用する際に、当社がどのように情報を収集、使用、開示、保護するかを説明しています。",
    dataCollection: {
      title: "データ収集",
      content:
        "当社は、アカウントの作成時、サービスの利用時、またはサポートへのお問い合わせ時など、お客様が直接提供する情報を収集します。これには、お名前、メールアドレス、利用データが含まれる場合があります。セルフホストモードで Bedrud を使用する場合、お客様のデータは完全にお客様自身のインフラストラクチャ上に保持されます。",
    },
    dataUsage: {
      title: "データの使用方法",
      content:
        "当社は収集した情報を、サービスの提供、維持、改善、アカウントに関するお客様との連絡、および技術的な通知やサポートメッセージの送信に使用します。当社はお客様の個人情報を第三者に販売することはありません。",
    },
    dataStorage: {
      title: "データの保存とセキュリティ",
      content:
        "当社はお客様のデータを保護するために業界標準のセキュリティ対策を実施しています。クラウドホストインスタンスでは、データは転送中および保存中に暗号化されます。セルフホストデプロイメントでは、データの保存とセキュリティ設定を完全にコントロールできます。",
    },
    thirdParties: {
      title: "第三者サービス",
      content:
        "当社は分析、エラーレポート、インフラストラクチャのために第三者サービスを使用する場合があります。これらのサービスには独自のプライバシーポリシーがあります。当社はこれらのサービスが機能するために必要な最小限のデータのみを共有します。",
    },
    cookies: {
      title: "Cookie とトラッキング",
      content:
        "当社はお客様のセッションと設定を維持するために必要な Cookie を使用します。第三者のトラッキング Cookie や広告トラッカーは使用しません。ブラウザで Cookie を拒否するように設定できますが、一部の機能が正常に動作しない場合があります。",
    },
    yourRights: {
      title: "お客様の権利",
      content:
        "お客様には個人データへのアクセス、修正、または削除の権利があります。いつでもデータをエクスポートしたり、アカウントの削除をリクエストしたりできます。セルフホストインスタンスでは、サーバー上のすべてのデータを完全にコントロールできます。",
    },
    changes: {
      title: "本ポリシーの変更",
      content:
        "当社は本プライバシーポリシーを随時更新する場合があります。変更がある場合は、このページに新しいポリシーを掲載し、「最終更新日」を更新することでお知らせします。サービスの継続的な使用は、更新されたポリシーの受諾を意味します。",
    },
    contact: {
      title: "お問い合わせ",
      content:
        "本プライバシーポリシーまたは当社のデータ取り扱いについてご質問がある場合は、GitHub リポジトリからお問い合わせいただくか、privacy@bedrud.com までご連絡ください。",
    },
  },
  terms: {
    meta: {
      title: "利用規約 — Bedrud",
      description:
        "Bedrud ビデオ会議プラットフォームの利用規約をお読みください。",
    },
    title: "利用規約",
    lastUpdated: "最終更新日：2026年2月20日",
    intro:
      "本利用規約は、Bedrud ビデオ会議プラットフォームおよび関連サービスの使用を規定します。Bedrud にアクセスまたは使用することにより、お客様はこれらの規約に拘束されることに同意するものとします。",
    acceptance: {
      title: "規約の承諾",
      content:
        "Bedrud にアクセスまたは使用することにより、お客様は本利用規約を遵守し、これに拘束されることに同意するものとします。これらの規約に同意しない場合、当社のサービスにアクセスまたは使用することはできません。当社はいつでもこれらの規約を変更する権利を留保します。",
    },
    services: {
      title: "サービスの説明",
      content:
        "Bedrud はクラウドホストサービスおよびセルフホストソリューションとして利用可能なビデオ会議プラットフォームを提供します。プラットフォームには、Web、モバイル、サーバーアプリケーションを通じて提供されるビデオ会議、リアルタイムコミュニケーション、および関連コラボレーションツールが含まれます。",
    },
    accounts: {
      title: "ユーザーアカウント",
      content:
        "お客様はアカウントの資格情報の機密性を維持し、アカウントで発生するすべての活動に対して責任を負います。アカウント作成時には正確かつ完全な情報を提供し、最新の状態に保つ必要があります。",
    },
    acceptableUse: {
      title: "許容される使用",
      content:
        "お客様は、Bedrud を違法な目的で使用したり、サービスを損傷、無効化、または機能低下させる可能性のある方法で使用しないことに同意します。サービスの一部、他のアカウント、またはサービスに接続されたコンピューターシステムへの不正アクセスを試みてはなりません。",
    },
    intellectualProperty: {
      title: "知的財産権",
      content:
        "Bedrud は AGPLv3 ライセンスの下でライセンスされたオープンソースソフトウェアです。ソフトウェアの使用はそのライセンスの条件に従います。Bedrud の名称、ロゴ、ブランディングは theMadOrg の商標であり、許可なく使用することはできません。",
    },
    termination: {
      title: "終了",
      content:
        "これらの規約に違反した場合、当社はいつでもクラウドサービスへのアクセスを終了または停止することがあります。終了後、サービスを使用する権利は直ちに停止します。セルフホストインスタンスについては、AGPLv3 ライセンスの条件の下でソフトウェアへのアクセスを保持します。",
    },
    liability: {
      title: "責任の制限",
      content:
        "法律で許される最大限の範囲において、Bedrud およびその貢献者は、お客様のサービス使用から生じる間接的、付随的、特別、または結果的損害について責任を負いません。サービスはいかなる種類の保証もなく「現状のまま」提供されます。",
    },
    governingLaw: {
      title: "準拠法",
      content:
        "本規約は、法の抵触に関する原則にかかわらず、適用される法律に準拠し、それに従って解釈されるものとします。本規約に起因する紛争は、誠実な交渉により、または必要に応じて拘束力のある仲裁により解決されるものとします。",
    },
    changes: {
      title: "規約の変更",
      content:
        "当社は本利用規約をいつでも変更する権利を留保します。重要な変更は、サービスまたはメールを通じてお知らせします。変更の掲載後に Bedrud を継続して使用することは、変更された規約の受諾を意味します。",
    },
    contact: {
      title: "お問い合わせ",
      content:
        "本利用規約についてご質問がある場合は、GitHub リポジトリからお問い合わせいただくか、legal@bedrud.com までご連絡ください。",
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
  skipToContent: "コンテンツへスキップ",
  mobileNav: {
    navigation: "Navigation",
    language: "Language",
    getStarted: "はじめる",
  },
  featuresPage: {
    meta: {
      title: "機能 — Bedrud",
      description:
        "Bedrud の機能をご紹介：単一バイナリ、WebRTC 品質、ゲスト参加、パスキー、管理者コントロール、オーディオ処理、ボットエージェント、マルチプラットフォーム対応。",
    },
    title: "機能",
    subtitle: "各機能が本当の問題を解決します。",
    ready: "準備完了？",
    readyCta: "始める",
    guestJoin: {
      pain: "15分の通話のためにゲストにアカウント作成を強要するのにうんざりしていませんか？",
      title: "ゲスト参加 — アカウント不要",
      description:
        "リンクを共有、クリック、参加完了。登録フォームなし、パスワードなし、摩擦なし。セキュリティ用オプションのパスコード。",
    },
    singleBinary: {
      pain: "ビデオインフラのセットアップにDevOpsの学位が必要なはずがありません。",
      title: "単一バイナリデプロイ",
      description:
        "1回のダウンロード、1つのコマンド、実行中。Docker Composeなし、Kubernetesマニフェストなし、12ステップガイドなし。動作するバイナリだけ。",
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
        "ルーム管理、ユーザー管理、使用分析、設定 — すべてクリーンなWeb UIから。CLI推測なし。",
    },
    audio: {
      pain: "ミーティングの背景ノイズは気を散らし、非プロフェッショナルです。",
      title: "オーディオ処理",
      description:
        "RNNoise駆動の内蔵ノイズ抑制。プレミアムAIノイズ抑制用のオプションKrisp統合。すべての通話でクリーンなオーディオ。",
    },
    bots: {
      pain: "手動の会議タスクは時間を浪費します — 録画、文字起こし、メモ。",
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
  },
  demoPage: {
    meta: {
      title: "ライブデモ — Bedrud",
      description:
        "インストール不要で Bedrud をお試しください。今すぐライブデモ会議に参加できます。",
    },
    title: "インストールなしで試す",
    subtitle: "今すぐライブBedrud会議に参加。アカウント不要。",
    tryNow: "デモを開く",
    noInstall:
      "インストールなし、アカウントなし、コミットメントなし。クリックして会議するだけ。",
    orSelfHost: "セルフホストをお好み？",
    installCta: "インストールガイドを読む",
  },
  changelogPage: {
    meta: {
      title: "変更履歴 — Bedrud",
      description: "Bedrud のリリース履歴とアップデート情報。",
    },
    title: "変更履歴",
    subtitle: "Bedrudの新機能。アクティビティ = 信頼。",
    viewOnGithub: "GitHub で見る",
    noReleases: "リリースはまだありません。すぐにお戻りください！",
  },
  contributorsPage: {
    meta: {
      title: "コントリビューター — Bedrud",
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
      title: "お問い合わせ — Bedrud",
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
};
