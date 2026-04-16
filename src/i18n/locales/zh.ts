export default {
  meta: {
    title: "Bedrud — 随心所欲的视频会议",
    description:
      "Bedrud 是一个开源视频会议平台。自行托管或使用我们的云服务——一个集成了 Web 界面、REST API 和 WebRTC 媒体服务器的单一二进制文件。",
  },
  nav: {
    home: "首页",
    features: "功能",
    compare: "对比",
    platforms: "平台",
    openSource: "开源",
    docs: "文档",
    community: "社区",
    demo: "演示",
    getStarted: "立即开始",
  },
  hero: {
    badge: "开源 · Apache 2.0",
    kicker: "自托管视频会议。200MB内存。单个二进制文件。",
    headline: "不到一分钟部署自有视频会议",
    subtitle:
      "单个二进制文件，200MB 内存，无限用户。你的服务器，你的规则，你的数据。",
    tryDemo: "试用演示",
    installNow: "复制安装命令",
    getStarted: "立即开始",
    viewOnGithub: "在 GitHub 上查看",
    copied: "已复制!",
    stars: "1.2k",
    starsLabel: "GitHub 星标",
    contributorsLabel: "贡献者",
    license: "Apache 2.0 许可",
  },
  journey: {
    title: "从零到会议只需几分钟",
    subtitle: "安装。分享链接。开始通话。就是这样。",
    install: {
      title: "安装",
      description:
        "下载单个二进制文件或拉取 Docker 镜像。一条命令，零依赖。一分钟内即可运行。",
    },
    invite: {
      title: "邀请",
      description:
        "分享链接。无需注册、无需下载、无障碍。客人可从任何浏览器即时加入。",
    },
    meet: {
      title: "会议",
      description: "内置降噪的清晰 WebRTC 视频和音频。只需交谈。",
    },
    scale: {
      title: "扩展",
      description:
        "自行托管以获得完全控制权，或使用 Bedrud Cloud。无限用户，永无按座位收费。",
    },
  },
  whyBedrud: {
    title: "天生不同",
    subtitle: "无锁定。无臃肿。无账单惊喜。",
    noLockIn: {
      title: "无供应商锁定",
      description:
        "你的基础设施。你的数据。你的规则。随时部署到任意服务器，随时迁移。无专有格式，无退出费用，无云依赖。",
    },
    singleBinary: {
      title: "单一二进制",
      description:
        "一个文件。一条命令。零依赖。不用 Docker，不用 Kubernetes，告别周五下午的部署噩梦。",
    },
    noPerSeat: {
      title: "无按座位收费",
      description:
        "5个用户或5000个。价格一样：零。没有许可证密钥，没有席位计数器，没有'联系销售'按钮。",
    },
  },
  comparison: {
    title: "看看 Bedrud 的对比",
    subtitle: "无复杂性的自托管视频会议。",
    feature: "功能",
    bedrud: "Bedrud",
    jitsi: "Jitsi Meet",
    bbb: "BigBlueButton",
    rows: {
      deploy: "部署复杂性",
      deployBedrud: "单一二进制",
      deployJitsi: "Docker Compose (8+ 容器)",
      deployBbb: "最低 8GB RAM 服务器",
      ram: "RAM 使用",
      ramBedrud: "~200MB",
      ramJitsi: "~2GB",
      ramBbb: "~4GB+",
      install: "安装时间",
      installBedrud: "< 1 分钟",
      installJitsi: "~15 分钟",
      installBbb: "~30 分钟 + 配置",
      nativeClients: "原生客户端",
      nativeBedrud: "Web、Android、iOS",
      nativeJitsi: "Web、Android、iOS",
      nativeBbb: "仅 Web",
      guestJoin: "客人加入 (无需账户)",
      guestBedrud: "是",
      guestJitsi: "是",
      guestBbb: "是 (需要主持人批准)",
      audioProcessing: "音频处理 (降噪)",
      audioBedrud: "RNNoise / Krisp",
      audioJitsi: "基础",
      audioBbb: "基础",
      license: "许可证",
      licenseBedrud: "Apache 2.0",
      licenseJitsi: "Apache 2.0",
      licenseBbb: "LGPL 3.0",
    },
  },
  features: {
    title: "开箱即用",
    subtitle: "视频、音频、认证、机器人——全部包含。无需微服务架构。",
    e2eEncryption: {
      title: "默认加密",
      description:
        "所有媒体通过 DTLS 和 SRTP 加密传输。自托管模式下数据保留在你的服务器上。无第三方遥测，无数据采集。",
    },
    webrtcVideo: {
      title: "WebRTC 视频",
      description:
        "内置 WebRTC 媒体服务器，亚秒级延迟视频通话。自适应码率应对不稳定网络。",
    },
    multiPlatform: {
      title: "多平台",
      description:
        "Web、Android 和 iOS 原生应用。不是套壳——是真正的原生应用。还有服务端 SDK 用于自动化。",
    },
    flexibleAuth: {
      title: "灵活认证",
      description:
        "开箱即用的内置认证，加上 SSO 和 OAuth 集成。几分钟内连接现有身份提供商。",
    },
    botAgents: {
      title: "机器人代理",
      description:
        "机器人以参与者身份加入会议。实时转录、翻译、推送到 CRM，或用 Go SDK 构建自定义工作流。",
    },
    selfHosted: {
      title: "你的基础设施或我们的",
      description:
        "在你自己的服务器上运行，完全掌控。或用 Bedrud Cloud 无需操心运维。同样的产品，同样的功能。",
    },
  },
  install: {
    title: "一条命令。完成。",
    subtitle: "复制。粘贴。运行。安装完成。",
    command: "curl -fsSL https://get.bedrud.org | bash",
    dockerCommand: "docker run -d -p 8080:8080 bedrud/bedrud",
    or: "或",
    requirements: "支持任何 64 位 Linux、macOS 或 Windows，仅需 200MB 内存。",
  },
  platforms: {
    title: "原生应用，不是网页套壳",
    subtitle:
      "真正的原生应用——Web 用 React、Android 用 Kotlin、iOS 用 Swift、服务端用 Go。不用 Electron，不用 Cordova.",
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
      title: "服务器",
      tech: "Go + WebRTC",
    },
    bots: {
      title: "机器人",
      tech: "Go SDK",
    },
    status: "生产环境",
  },
  openSource: {
    title: "阅读源码。掌控一切。",
    subtitle:
      "每一行代码都是公开的。审查、审计、贡献或 fork。Apache 2.0 许可——商业或个人使用皆可。",
    license: "Apache 2.0",
    github: "在 GitHub 上查看",
    docs: "阅读文档",
  },
  cta: {
    title: "准备好拥有你的会议了吗？",
    subtitle:
      "加入数千名厌倦了按席位收费和供应商锁定的开发者。不到一分钟即可开始。",
    installNow: "复制安装命令",
    readDocs: "阅读文档",
    starGithub: "在 GitHub 上星标",
  },
  faq: {
    title: "常见问题",
    subtitle: "技术问题，直接回答。",
    updates: {
      question: "更新是如何工作的？",
      answer:
        "重新运行安装命令即可。Bedrud 会原地替换二进制文件——无需包管理器，无需依赖链。你也可以通过单个配置标志启用自动更新。",
    },
    encryption: {
      question: "是否端到端加密？",
      answer:
        "所有媒体通过 DTLS 和 SRTP（WebRTC 标准）加密传输。对于自托管部署，你控制服务器和所有数据。点对点通话的端到端加密已在路线图中。",
    },
    network: {
      question: "网络和端口要求是什么？",
      answer:
        "端口 80/443 用于 HTTP/WebSocket，可配置的 UDP 范围（默认 50000–60000）用于 WebRTC 媒体。在 NAT 后面，需要设置 STUN/TURN 服务器——Bedrud 包含 coturn 设置文档。",
    },
    proxy: {
      question: "可以运行在反向代理后面吗？",
      answer:
        "可以。Nginx、Caddy、Traefik——都支持。文档中包含每个的即用配置。只需转发 WebSocket 连接并设置适当的头部。",
    },
    cloudVsSelfHosted: {
      question: "自托管和 Bedrud Cloud 有什么区别？",
      answer:
        "同样的产品，同样的功能。自托管在你自己的基础设施上运行，完全掌控数据。Bedrud Cloud 为你处理运维、更新和扩展。无供应商锁定——随时可以迁移。",
    },
  },
  testimonials: {
    title: "开发者信赖",
    subtitle: "听听大家怎么说 Bedrud。",
    one: {
      quote:
        "我们用一个下午就把 Jitsi 替换成了 Bedrud。单个二进制文件，200MB 内存，会议音质反而更好了。",
      name: "Lena K.",
      role: "欧洲某 SaaS 公司 DevOps 负责人",
      initials: "LK",
    },
    two: {
      quote:
        "没有按席位收费，这是打动我们的关键。从 20 人增长到 200 人，没有收到过一封许可证邮件。",
      name: "Marcus T.",
      role: "远程初创公司 CTO",
      initials: "MT",
    },
    three: {
      quote:
        "在一台 $5 VPS 上部署了 Bedrud，直接就能用。用 Bot SDK 一天内就把会议转录接入了 CRM。",
      name: "Priya S.",
      role: "某金融科技公司高级工程师",
      initials: "PS",
    },
  },
  footer: {
    brand: "Bedrud",
    tagline: "为重视隐私的团队打造的视频会议。自托管或云端。",
    product: "产品",
    features: "功能",
    compare: "对比",
    platforms: "平台",
    openSource: "开源",
    selfHosted: "自托管 vs 云端",
    demo: "在线演示",
    changelog: "更新日志",
    developers: "开发者",
    quickstart: "快速入门指南",
    docs: "文档",
    architecture: "架构指南",
    api: "API 参考",
    openSourceSection: "开源",
    contribute: "贡献",
    reportIssue: "报告问题",
    resources: "资源",
    contributors: "贡献者",
    github: "GitHub",
    releases: "版本发布",
    discord: "Discord",
    legal: "法律",
    license: "许可证",
    privacy: "隐私政策",
    terms: "服务条款",
    contact: "联系",
    madeBy: "用心制作，来自",
    backToTop: "回到顶部",
    languages: "语言",
  },
  privacy: {
    meta: {
      title: "隐私政策 — Bedrud",
      description: "了解 Bedrud 如何收集、使用和保护你的个人信息。",
    },
    title: "隐私政策",
    lastUpdated: "最后更新：2026 年 2 月 20 日",
    intro:
      "在 Bedrud，我们非常重视你的隐私。本隐私政策说明了当你使用我们的视频会议平台和相关服务时，我们如何收集、使用、披露和保护你的信息。",
    dataCollection: {
      title: "数据收集",
      content:
        "我们收集你直接提供给我们的信息，例如当你创建账户、使用我们的服务或联系我们寻求支持时。这可能包括你的姓名、电子邮件地址和使用数据。当你在自托管模式下使用 Bedrud 时，你的数据完全保留在你自己的基础设施上。",
    },
    dataUsage: {
      title: "我们如何使用你的数据",
      content:
        "我们使用收集的信息来提供、维护和改进我们的服务，与你就账户进行沟通，以及向你发送技术通知和支持消息。我们不会将你的个人信息出售给第三方。",
    },
    dataStorage: {
      title: "数据存储与安全",
      content:
        "我们实施行业标准的安全措施来保护你的数据。对于云托管实例，数据在传输和存储时均进行加密。自托管部署让你完全掌控数据存储和安全配置。",
    },
    thirdParties: {
      title: "第三方服务",
      content:
        "我们可能会使用第三方服务进行分析、错误报告和基础设施管理。这些服务有其自己的隐私政策。我们仅共享这些服务运行所需的最少数据。",
    },
    cookies: {
      title: "Cookie 与跟踪",
      content:
        "我们使用必要的 Cookie 来维持你的会话和偏好设置。我们不使用第三方跟踪 Cookie 或广告追踪器。你可以配置浏览器拒绝 Cookie，但某些功能可能无法正常运行。",
    },
    yourRights: {
      title: "你的权利",
      content:
        "你有权访问、更正或删除你的个人数据。你可以随时导出数据或请求删除账户。对于自托管实例，你对服务器上的所有数据拥有完全控制权。",
    },
    changes: {
      title: "本政策的变更",
      content:
        "我们可能会不时更新本隐私政策。我们将通过在此页面发布新政策并更新「最后更新」日期来通知你任何变更。继续使用服务即表示接受更新后的政策。",
    },
    contact: {
      title: "联系我们",
      content:
        "如果你对本隐私政策或我们的数据实践有任何疑问，请通过我们的 GitHub 仓库联系我们，或发送邮件至 privacy@bedrud.com。",
    },
  },
  terms: {
    meta: {
      title: "服务条款 — Bedrud",
      description: "阅读使用 Bedrud 视频会议平台的条款和条件。",
    },
    title: "服务条款",
    lastUpdated: "最后更新：2026 年 2 月 20 日",
    intro:
      "本服务条款约束你对 Bedrud 视频会议平台和相关服务的使用。访问或使用 Bedrud 即表示你同意受这些条款的约束。",
    acceptance: {
      title: "条款接受",
      content:
        "访问或使用 Bedrud 即表示你同意遵守并受本服务条款的约束。如果你不同意这些条款，则不得访问或使用我们的服务。我们保留随时修改这些条款的权利。",
    },
    services: {
      title: "服务描述",
      content:
        "Bedrud 提供视频会议平台，可作为云托管服务和自托管解决方案使用。该平台包括视频会议、实时通信和相关协作工具，通过 Web、移动和服务器应用程序提供。",
    },
    accounts: {
      title: "用户账户",
      content:
        "你有责任维护账户凭证的机密性以及在你账户下发生的所有活动。创建账户时，你必须提供准确、完整的信息并保持更新。",
    },
    acceptableUse: {
      title: "可接受的使用",
      content:
        "你同意不将 Bedrud 用于任何非法目的，也不以任何可能损害、禁用或损害服务的方式使用。你不得试图未经授权访问服务的任何部分、其他账户或与服务相连的计算机系统。",
    },
    intellectualProperty: {
      title: "知识产权",
      content:
        "Bedrud 是在 AGPLv3 许可下发布的开源软件。你对软件的使用受该许可条款的约束。Bedrud 名称、标志和品牌是 theMadOrg 的商标，未经许可不得使用。",
    },
    termination: {
      title: "终止",
      content:
        "如违反这些条款，我们可能随时终止或暂停你对云服务的访问。终止后，你使用服务的权利将立即终止。对于自托管实例，你在 AGPLv3 许可条款下仍保留对软件的访问权。",
    },
    liability: {
      title: "责任限制",
      content:
        "在法律允许的最大范围内，Bedrud 及其贡献者不对因你使用服务而产生的任何间接、附带、特殊或后果性损害承担责任。服务按「原样」提供，不附带任何形式的保证。",
    },
    governingLaw: {
      title: "适用法律",
      content:
        "本条款受适用法律管辖并据其解释，不考虑法律冲突原则。因本条款引起的任何争议应通过善意协商解决，如有必要，则通过有约束力的仲裁解决。",
    },
    changes: {
      title: "条款变更",
      content:
        "我们保留随时修改本服务条款的权利。重大变更将通过服务或电子邮件进行通知。在变更发布后继续使用 Bedrud 即表示接受修改后的条款。",
    },
    contact: {
      title: "联系我们",
      content:
        "如果你对本服务条款有任何疑问，请通过我们的 GitHub 仓库联系我们，或发送邮件至 legal@bedrud.com。",
    },
  },
  docs: {
    documentation: "文档",
    onThisPage: "本页",
    previous: "上一页",
    next: "下一页",
    backToHome: "返回首页",
    searchPlaceholder: "搜索文档…",
    searchButton: "搜索",
    noResults: "未找到结果",
    loading: "加载中…",
    pressShortcut: "按",
    clearSearch: "清除搜索",
    searchDocs: "搜索文档",
    notFound: "文档未找到",
    sections: {
      gettingStarted: "快速入门",
      architecture: "架构",
      backend: "后端",
      api: "API",
      guides: "指南",
      contributing: "贡献",
    },
  },
  skipToContent: "跳到内容",
  mobileNav: {
    navigation: "Navigation",
    language: "Language",
    getStarted: "立即开始",
  },
  featuresPage: {
    meta: {
      title: "功能 — Bedrud",
      description:
        "探索 Bedrud 的功能：单一二进制文件、WebRTC 质量、访客加入、通行密钥、管理员控制、音频处理、机器人和多平台支持。",
    },
    title: "功能",
    subtitle: "每个功能都解决一个真正的问题。",
    ready: "准备好了吗？",
    readyCta: "开始",
    guestJoin: {
      pain: "厌倦了仅仅为了 15 分钟的通话而强迫客人创建账户？",
      title: "访客加入 — 无需账户",
      description:
        "分享链接，他们点击，就进来了。没有注册表单，没有密码，无障碍。可选密码以确保安全。",
    },
    singleBinary: {
      pain: "设置视频基础设施不应该需要 DevOps 学位。",
      title: "单一二进制部署",
      description:
        "一次下载，一条命令，运行。没有 Docker Compose，没有 Kubernetes 清单，没有 12 步指南。只是一个能工作的二进制文件。",
    },
    webrtc: {
      pain: "延迟、冻结或断开的视频通话会破坏会议。",
      title: "WebRTC 质量",
      description:
        "内置 WebRTC 媒体服务器，具有自适应比特率、simulcast 和 SVC。任何连接上的清晰视频和音频。",
    },
    passkeys: {
      pain: "密码会泄露。MFA 令牌会被钓鱼。",
      title: "通行密钥 + OAuth",
      description:
        "FIDO2 通行密钥用于无密码身份验证。OAuth 2.0 / OIDC 用于与你现有的身份提供者进行 SSO。没有密码数据库可以泄露。",
    },
    admin: {
      pain: "没有好的工具，管理会议平台很痛苦。",
      title: "管理仪表板",
      description:
        "房间管理、用户管理、使用分析和配置 — 全部通过干净的 Web UI。没有 CLI 猜测。",
    },
    audio: {
      pain: "会议中的背景噪音让人分心且不专业。",
      title: "音频处理",
      description:
        "由 RNNoise 驱动的内置降噪。可选的 Krisp 集成，用于高级 AI 降噪。每次通话都有清晰的音频。",
    },
    bots: {
      pain: "手动的会议任务浪费时间 — 录制、转录、笔记。",
      title: "机器人代理",
      description:
        "可编程的机器人通过 Go SDK 加入会议。自动化转录、翻译、录制、CRM 集成和自定义工作流程。",
    },
    multiPlatform: {
      pain: "你的团队使用不同的设备。你的会议平台也应该如此。",
      title: "多平台",
      description:
        "用于 Web (React)、Android (Kotlin) 和 iOS (Swift) 的原生应用。一致的体验，平台原生性能。",
    },
  },
  demoPage: {
    meta: {
      title: "在线演示 — Bedrud",
      description: "无需安装即可试用 Bedrud。立即加入在线演示会议。",
    },
    title: "无需安装试用",
    subtitle: "立即加入在线 Bedrud 会议。无需账户。",
    tryNow: "打开演示",
    noInstall: "无需安装，无需账户，无需承诺。只需点击并会议。",
    orSelfHost: "更喜欢自托管？",
    installCta: "阅读安装指南",
  },
  changelogPage: {
    meta: {
      title: "更新日志 — Bedrud",
      description: "Bedrud 的版本历史和更新记录。",
    },
    title: "更新日志",
    subtitle: "Bedrud 有什么新功能。活动 = 信任。",
    viewOnGithub: "在 GitHub 上查看",
    noReleases: "还没有发布。请稍后再来！",
  },
  contributorsPage: {
    meta: {
      title: "贡献者 — Bedrud",
      description: "认识构建 Bedrud 的人们。",
    },
    title: "贡献者",
    subtitle: "Bedrud 由社区构建。",
    joinThem: "加入他们",
    joinCta: "在 GitHub 上贡献",
    contributions: "贡献",
  },
  contactPage: {
    meta: {
      title: "联系我们 — Bedrud",
      description: "与 Bedrud 团队取得联系。",
    },
    title: "联系",
    subtitle: "通过任何这些渠道联系我们。",
    github: {
      title: "GitHub 问题",
      description: "错误报告、功能请求和代码贡献。",
      cta: "打开问题",
    },
    discord: {
      title: "社区聊天",
      description: "提问、分享想法并从社区获得帮助。",
      cta: "加入 Discord",
    },
    email: {
      title: "电子邮件",
      description: "用于合作伙伴关系、安全问题或私人查询。",
      cta: "发送电子邮件",
    },
  },
};
