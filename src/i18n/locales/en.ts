export default {
  meta: {
    title: "Bedrud — Talk to people, not the platform",
    description:
      "Self-hosted video meetings. Single binary. 200MB RAM. Open source under Apache 2.0.",
  },
  nav: {
    home: "Home",
    features: "Features",
    compare: "Compare",
    platforms: "Platforms",
    openSource: "Open Source",
    docs: "Docs",
    community: "Community",
    demo: "Demo",
    getStarted: "Get Started",
  },
  hero: {
    badge: "Open Source · Apache 2.0",
    kicker: "Self-hosted video meetings. 200MB RAM. One binary.",
    headline: "Self-Hosted Video Meetings in Under a Minute",
    subtitle:
      "One binary, 200MB RAM, unlimited users. Your server, your rules, your data.",
    tryDemo: "Try Demo Now",
    installNow: "Copy Install Command",
    viewOnGithub: "View on GitHub",
    copied: "Copied!",
    stars: "1.2k",
    starsLabel: "GitHub stars",
    contributorsLabel: "contributors",
    license: "Apache 2.0 Licensed",
  },
  journey: {
    title: "From Zero to Meeting in Minutes",
    subtitle:
      "Install. Share a link. Start talking. Here's what that looks like.",
    install: {
      title: "Install",
      description:
        "One command. Zero config. Running in under 60 seconds on any 64-bit Linux, macOS, or Windows machine.",
    },
    meet: {
      title: "Meet",
      description:
        "Share a link — no accounts, no app installs, no extensions. They click, they're in. WebRTC-powered video and audio with built-in noise suppression, even on slow connections.",
    },
    scale: {
      title: "Scale",
      description:
        "Run it on your server for total control, or let Bedrud Cloud handle the ops. Either way: unlimited users, no per-seat pricing, no usage caps.",
    },
  },
  whyBedrud: {
    title: "Built Different",
    subtitle: "No lock-in. No bloat. No billing surprises.",
    noLockIn: {
      title: "No Vendor Lock-In",
      description:
        "Your infrastructure. Your data. Your rules. Deploy on any server, migrate whenever you want. No proprietary formats, no exit fees, no cloud dependency.",
    },
    singleBinary: {
      title: "Single Binary",
      description:
        "One file. One command. Zero dependencies. No Docker, no Kubernetes, no Friday-afternoon deployment nightmares.",
    },
    noPerSeat: {
      title: "No Per-Seat Pricing",
      description:
        "Add 5 users or 5,000. The price is the same: zero. No license keys, no seat counters, no 'contact sales' buttons.",
    },
  },
  comparison: {
    title: "See How Bedrud Compares",
    subtitle: "One binary. A fraction of the resources. All the features.",
    feature: "Feature",
    bedrud: "Bedrud",
    jitsi: "Jitsi Meet",
    bbb: "BigBlueButton",
    rows: {
      deploy: "Setup",
      deployBedrud: "Single binary",
      deployJitsi: "Docker Compose (8+ containers)",
      deployBbb: "Minimum 8GB RAM server",
      ram: "RAM Usage",
      ramBedrud: "~200 MB",
      ramJitsi: "~2 GB",
      ramBbb: "~4 GB+",
      install: "Install Time",
      installBedrud: "< 1 minute",
      installJitsi: "~15 minutes",
      installBbb: "~30 minutes + config",
      nativeClients: "Platforms",
      nativeClientsBedrud: "Web, Android, iOS",
      nativeClientsJitsi: "Web, Android, iOS",
      nativeClientsBbb: "Web only",
      guestJoin: "Instant Guest Access",
      guestJoinBedrud: "Instant",
      guestJoinJitsi: "Yes",
      guestJoinBbb: "Moderator approval needed",
      audioProcessing: "Noise Cancellation",
      audioProcessingBedrud: "Advanced",
      audioProcessingJitsi: "Basic",
      audioProcessingBbb: "Basic",
      license: "License",
      licenseBedrud: "Apache 2.0",
      licenseJitsi: "Apache 2.0",
      licenseBbb: "LGPL 3.0",
    },
  },
  features: {
    title: "Everything Ships in the Box",
    subtitle:
      "Video, audio, auth, bots — all included. No microservices architecture required.",
    e2eEncryption: {
      title: "Encrypted by Default",
      description:
        "All media encrypted in transit via DTLS and SRTP. Your data stays on your servers in self-hosted mode. No third-party telemetry, no data harvesting.",
    },
    webrtcVideo: {
      title: "WebRTC Video",
      description:
        "Sub-second latency video calls powered by a built-in WebRTC media server. Adaptive bitrate handles spotty connections without dropping anyone.",
    },
    multiPlatform: {
      title: "Multi-Platform",
      description:
        "Native apps for Web, Android, and iOS. Not wrappers — real native apps. Plus a server-side SDK for automation.",
    },
    flexibleAuth: {
      title: "Flexible Auth",
      description:
        "Built-in auth that works out of the box, plus SSO and OAuth integration for when you need it. Connect to your existing identity provider in minutes, not days.",
    },
    botAgents: {
      title: "Bot Agents",
      description:
        "Bots join meetings as participants. Transcribe conversations, translate in real-time, push to your CRM, or build custom workflows with the Go SDK.",
    },
    selfHosted: {
      title: "Your Infrastructure or Ours",
      description:
        "Run it on your servers and keep full control. Or use Bedrud Cloud and never think about ops. Same product, same features, your choice.",
    },
  },
  install: {
    title: "One Command. Done.",
    subtitle: "One command. Sixty seconds. You're in.",
    command: "curl -fsSL https://get.bedrud.org | bash",
    dockerCommand: "docker run -d -p 8080:8080 bedrud/bedrud",
    or: "or",
    requirements:
      "Works on any 64-bit Linux, macOS, or Windows machine with 200MB RAM.",
  },
  platforms: {
    title: "Native Apps, Not Web Wrappers",
    subtitle:
      "Real native apps — React on web, Kotlin on Android, Swift on iOS, Go on the server. No Electron, no Cordova, no compromises.",
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
      title: "Server",
      tech: "Go + WebRTC",
    },
    bots: {
      title: "Bots",
      tech: "Go SDK",
    },
    status: "Production",
  },
  openSource: {
    title: "Read the Source. Run the Show.",
    subtitle:
      "Every line of code is public. Inspect it, audit it, contribute to it, or fork it and build your own. Apache 2.0 licensed — use it commercially or otherwise.",
    license: "Apache 2.0",
    github: "View on GitHub",
    docs: "Read the Docs",
  },
  cta: {
    title: "Ready to Own Your Meetings?",
    subtitle:
      "Join thousands of developers who got tired of per-seat pricing and vendor lock-in. Get started in under a minute.",
    installNow: "Copy Install Command",
    readDocs: "Read the Docs",
    starGithub: "Star on GitHub",
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Technical questions, answered directly.",
    updates: {
      question: "How do updates work?",
      answer:
        "Re-run the install command. Bedrud replaces the binary in-place — no package managers, no dependency chains. You can also enable automatic updates via a single config flag.",
    },
    encryption: {
      question: "Is it end-to-end encrypted?",
      answer:
        "All media is encrypted in transit via DTLS and SRTP (the WebRTC standard). For self-hosted deployments, you control the server and all data. End-to-end encryption for peer-to-peer calls is on the roadmap.",
    },
    network: {
      question: "What are the network and port requirements?",
      answer:
        "Port 80/443 for HTTP/WebSocket and a configurable UDP range (default 50000–60000) for WebRTC media. Behind NAT, set up a STUN/TURN server — Bedrud includes docs for coturn setup.",
    },
    proxy: {
      question: "Can I run it behind a reverse proxy?",
      answer:
        "Yes. Nginx, Caddy, Traefik — all work. The docs include copy-paste configs for each. Just forward WebSocket connections and set the appropriate headers.",
    },
    cloudVsSelfHosted: {
      question: "What's the difference between self-hosted and Bedrud Cloud?",
      answer:
        "Same product, same features. Self-hosted runs on your infrastructure with full data control. Bedrud Cloud handles ops, updates, and scaling for you. No vendor lock-in — migrate between them at any time.",
    },
  },
  testimonials: {
    title: "Trusted by Developers",
    subtitle: "What people are saying about Bedrud.",
    one: {
      quote:
        "We replaced our Jitsi setup with Bedrud in an afternoon. One binary, 200MB RAM, and our meetings actually sound better now.",
      name: "Lena K.",
      role: "DevOps Lead at a European SaaS company",
      initials: "LK",
    },
    two: {
      quote:
        "No per-seat pricing sealed it for us. We went from 20 to 200 users without a single license email.",
      name: "Marcus T.",
      role: "CTO at a remote-first startup",
      initials: "MT",
    },
    three: {
      quote:
        "I deployed Bedrud on a $5 VPS and it just worked. The bot SDK let us wire meeting transcripts into our CRM in a day.",
      name: "Priya S.",
      role: "Senior Engineer at a fintech company",
      initials: "PS",
    },
  },
  footer: {
    brand: "Bedrud",
    tagline:
      "Video meetings for teams that care about privacy. Self-hosted or cloud.",
    product: "Product",
    features: "Features",
    compare: "Comparison",
    platforms: "Platforms",
    openSource: "Open Source",
    selfHosted: "Self-Hosted vs. Cloud",
    demo: "Live Demo",
    changelog: "Changelog",
    developers: "Developers",
    quickstart: "QuickStart Guide",
    docs: "Documentation",
    architecture: "Architecture Guide",
    api: "API Reference",
    openSourceSection: "Open Source",
    contribute: "Contribute",
    reportIssue: "Report an Issue",
    resources: "Resources",
    contributors: "Contributors",
    github: "GitHub",
    releases: "Releases",
    discord: "Discord",
    legal: "Legal",
    license: "License",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    contact: "Contact",
    madeBy: "Made with care by",
    backToTop: "Back to top",
    languages: "Languages",
  },
  featuresPage: {
    meta: {
      title: "Features — Bedrud",
      description:
        "Explore Bedrud's features: single binary, WebRTC quality, guest join, passkeys, admin controls, audio processing, bot agents, and multi-platform support.",
    },
    title: "Features",
    subtitle: "Every feature solves a real pain point.",
    ready: "Ready?",
    readyCta: "Get Started",
    guestJoin: {
      pain: "Tired of forcing guests to create accounts just for a 15-minute call?",
      title: "Guest Join — No Account Needed",
      description:
        "Share a link, they click, they're in. No sign-up forms, no passwords, no friction. Optional passcode for security.",
    },
    singleBinary: {
      pain: "Setting up video infrastructure shouldn't take a DevOps degree.",
      title: "Single Binary Deploy",
      description:
        "One download, one command, running. No Docker Compose, no Kubernetes manifests, no 12-step guides. Just a binary that works.",
    },
    webrtc: {
      pain: "Video calls that lag, freeze, or drop ruin meetings.",
      title: "WebRTC Quality",
      description:
        "Built-in WebRTC media server with adaptive bitrate, simulcast, and SVC. Crystal-clear video and audio on any connection.",
    },
    passkeys: {
      pain: "Passwords get leaked. MFA tokens get phished.",
      title: "Passkeys + OAuth",
      description:
        "FIDO2 passkeys for passwordless auth. OAuth 2.0 / OIDC for SSO with your existing identity provider. No password databases to breach.",
    },
    admin: {
      pain: "Managing a meeting platform without good tools is painful.",
      title: "Admin Dashboard",
      description:
        "Room management, user management, usage analytics, and configuration — all from a clean web UI. No CLI guesswork.",
    },
    audio: {
      pain: "Background noise in meetings is distracting and unprofessional.",
      title: "Audio Processing",
      description:
        "Built-in noise suppression powered by RNNoise. Optional Krisp integration for premium AI noise cancellation. Clean audio, every call.",
    },
    bots: {
      pain: "Manual meeting tasks waste time — recording, transcription, notes.",
      title: "Bot Agents",
      description:
        "Programmable bots join meetings via Go SDK. Automate transcription, translation, recording, CRM integrations, and custom workflows.",
    },
    multiPlatform: {
      pain: "Your team uses different devices. Your meeting platform should too.",
      title: "Multi-Platform",
      description:
        "Native apps for Web (React), Android (Kotlin), and iOS (Swift). Consistent experience, platform-native performance.",
    },
  },
  demoPage: {
    meta: {
      title: "Live Demo — Bedrud",
      description:
        "Try Bedrud without installing anything. Join a live demo meeting right now.",
    },
    title: "Try Without Installing",
    subtitle: "Join a live Bedrud meeting right now. No account needed.",
    tryNow: "Open Demo",
    noInstall:
      "No installation, no account, no commitment. Just click and meet.",
    orSelfHost: "Prefer self-hosting?",
    installCta: "Read the install guide",
  },
  changelogPage: {
    meta: {
      title: "Changelog — Bedrud",
      description: "Release history and updates for Bedrud.",
    },
    title: "Changelog",
    subtitle: "What's new in Bedrud. Activity = trust.",
    viewOnGithub: "View on GitHub",
    noReleases: "No releases yet. Check back soon!",
  },
  contributorsPage: {
    meta: {
      title: "Contributors — Bedrud",
      description: "Meet the people building Bedrud.",
    },
    title: "Contributors",
    subtitle: "Bedrud is built by the community.",
    joinThem: "Join Them",
    joinCta: "Contribute on GitHub",
    contributions: "contributions",
  },
  contactPage: {
    meta: {
      title: "Contact — Bedrud",
      description: "Get in touch with the Bedrud team.",
    },
    title: "Contact",
    subtitle: "Reach out through any of these channels.",
    github: {
      title: "GitHub Issues",
      description: "Bug reports, feature requests, and code contributions.",
      cta: "Open an Issue",
    },
    discord: {
      title: "Community Chat",
      description:
        "Ask questions, share ideas, and get help from the community.",
      cta: "Join Discord",
    },
    email: {
      title: "Email",
      description: "For partnerships, security issues, or private inquiries.",
      cta: "Send Email",
    },
  },
  privacy: {
    meta: {
      title: "Privacy Policy — Bedrud",
      description:
        "Learn how Bedrud collects, uses, and protects your personal information.",
    },
    title: "Privacy Policy",
    lastUpdated: "Last updated: February 20, 2026",
    intro:
      "At Bedrud, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our video meeting platform and related services.",
    dataCollection: {
      title: "Data Collection",
      content:
        "We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include your name, email address, and usage data. When you use Bedrud in self-hosted mode, your data stays entirely on your own infrastructure.",
    },
    dataUsage: {
      title: "How We Use Your Data",
      content:
        "We use the information we collect to provide, maintain, and improve our services, to communicate with you about your account, and to send you technical notices and support messages. We do not sell your personal information to third parties.",
    },
    dataStorage: {
      title: "Data Storage & Security",
      content:
        "We implement industry-standard security measures to protect your data. For cloud-hosted instances, data is encrypted in transit and at rest. Self-hosted deployments give you full control over data storage and security configurations.",
    },
    thirdParties: {
      title: "Third-Party Services",
      content:
        "We may use third-party services for analytics, error reporting, and infrastructure. These services have their own privacy policies. We only share the minimum data necessary for these services to function.",
    },
    cookies: {
      title: "Cookies & Tracking",
      content:
        "We use essential cookies to maintain your session and preferences. We do not use third-party tracking cookies or advertising trackers. You can configure your browser to refuse cookies, though some features may not function properly.",
    },
    yourRights: {
      title: "Your Rights",
      content:
        "You have the right to access, correct, or delete your personal data. You can export your data at any time or request account deletion. For self-hosted instances, you have complete control over all data on your servers.",
    },
    changes: {
      title: "Changes to This Policy",
      content:
        "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the 'last updated' date. Continued use of the service constitutes acceptance of the updated policy.",
    },
    contact: {
      title: "Contact Us",
      content:
        "If you have any questions about this Privacy Policy or our data practices, please reach out to us through our GitHub repository or contact us at privacy@bedrud.com.",
    },
  },
  terms: {
    meta: {
      title: "Terms of Service — Bedrud",
      description:
        "Read the terms and conditions for using the Bedrud video meeting platform.",
    },
    title: "Terms of Service",
    lastUpdated: "Last updated: February 20, 2026",
    intro:
      "These Terms of Service govern your use of the Bedrud video meeting platform and related services. By accessing or using Bedrud, you agree to be bound by these terms.",
    acceptance: {
      title: "Acceptance of Terms",
      content:
        "By accessing or using Bedrud, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, you may not access or use our services. We reserve the right to modify these terms at any time.",
    },
    services: {
      title: "Description of Services",
      content:
        "Bedrud provides a video meeting platform available as both a cloud-hosted service and a self-hosted solution. The platform includes video conferencing, real-time communication, and related collaboration tools delivered through web, mobile, and server applications.",
    },
    accounts: {
      title: "User Accounts",
      content:
        "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate and complete information when creating an account and keep it up to date.",
    },
    acceptableUse: {
      title: "Acceptable Use",
      content:
        "You agree not to use Bedrud for any unlawful purpose or in any way that could damage, disable, or impair the service. You may not attempt to gain unauthorized access to any part of the service, other accounts, or computer systems connected to the service.",
    },
    intellectualProperty: {
      title: "Intellectual Property",
      content:
        "Bedrud is open-source software licensed under the Apache 2.0 license. Your use of the software is subject to the terms of that license. The Bedrud name, logo, and branding are trademarks of theMadOrg and may not be used without permission.",
    },
    termination: {
      title: "Termination",
      content:
        "We may terminate or suspend your access to the cloud service at any time for violation of these terms. Upon termination, your right to use the service will immediately cease. For self-hosted instances, you retain access to the software under the Apache 2.0 license terms.",
    },
    liability: {
      title: "Limitation of Liability",
      content:
        "To the maximum extent permitted by law, Bedrud and its contributors shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service. The service is provided 'as is' without warranties of any kind.",
    },
    governingLaw: {
      title: "Governing Law",
      content:
        "These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising from these terms shall be resolved through good-faith negotiation or, if necessary, binding arbitration.",
    },
    changes: {
      title: "Changes to Terms",
      content:
        "We reserve the right to modify these Terms of Service at any time. Material changes will be communicated through the service or via email. Your continued use of Bedrud after changes are posted constitutes acceptance of the modified terms.",
    },
    contact: {
      title: "Contact Us",
      content:
        "If you have any questions about these Terms of Service, please reach out to us through our GitHub repository or contact us at legal@bedrud.com.",
    },
  },
  docs: {
    documentation: "Documentation",
    onThisPage: "On this page",
    previous: "Previous",
    next: "Next",
    backToHome: "Back to home",
    searchPlaceholder: "Search docs\u2026",
    searchButton: "Search",
    noResults: "No results found",
    loading: "Loading\u2026",
    pressShortcut: "Press",
    clearSearch: "Clear search",
    searchDocs: "Search documentation",
    notFound: "Document not found",
    sections: {
      gettingStarted: "Getting Started",
      architecture: "Architecture",
      backend: "Backend",
      api: "API",
      guides: "Guides",
      contributing: "Contributing",
    },
  },
  skipToContent: "Skip to content",
  mobileNav: {
    navigation: "Navigation",
    language: "Language",
    getStarted: "Get Started",
  },
};
