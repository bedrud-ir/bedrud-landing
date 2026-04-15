export default {
  meta: {
    title: "Bedrud — Talk to people, not the platform",
    description:
      "Self-hosted video meetings. Single binary. 200MB RAM. Open source under Apache 2.0.",
  },
  nav: {
    home: "Home",
    features: "Features",
    platforms: "Platforms",
    openSource: "Open Source",
    docs: "Docs",
    demo: "Demo",
    getStarted: "Get Started",
  },
  hero: {
    badge: "Open Source · Apache 2.0",
    headline: "Talk to people, not the platform.",
    subtitle:
      "Self-hosted video meetings. Single binary. 200MB RAM. No vendor lock-in, no per-seat pricing.",
    tryDemo: "Try Demo",
    installNow: "Install Now",
    viewOnGithub: "View on GitHub",
    copied: "Copied!",
    stars: "1.2k",
    starsLabel: "GitHub stars",
    contributorsLabel: "contributors",
    license: "Apache 2.0 Licensed",
  },
  whyBedrud: {
    noLockIn: {
      title: "No Vendor Lock-In",
      description:
        "Your servers, your rules. Full control over data, config, and deployment. No cloud dependency.",
    },
    singleBinary: {
      title: "Single Binary",
      description:
        "Download, run, done. No Docker, no Kubernetes, no 12-step setup guides.",
    },
    noPerSeat: {
      title: "No Per-Seat Pricing",
      description:
        "Unlimited users, zero cost. Open source means no license meters, no surprise invoices.",
    },
  },
  comparison: {
    title: "How Bedrud Compares",
    subtitle: "Self-hosted video meetings without the complexity.",
    feature: "Feature",
    bedrud: "Bedrud",
    jitsi: "Jitsi Meet",
    bbb: "BigBlueButton",
    rows: {
      deploy: "Deploy Complexity",
      deployBedrud: "Single binary",
      deployJitsi: "Docker Compose (8+ containers)",
      deployBbb: "Minimum 8GB RAM server",
      ram: "RAM Usage",
      ramBedrud: "~200MB",
      ramJitsi: "~2GB",
      ramBbb: "~4GB+",
      install: "Install Time",
      installBedrud: "< 1 minute",
      installJitsi: "~15 minutes",
      installBbb: "~30 minutes + config",
      nativeClients: "Native Clients",
      nativeBedrud: "Web, Android, iOS",
      nativeJitsi: "Web, Android, iOS",
      nativeBbb: "Web only",
      guestJoin: "Guest Join (No Account)",
      guestBedrud: "Yes",
      guestJitsi: "Yes",
      guestBbb: "Yes (moderator approval)",
      audioProcessing: "Audio Processing (Noise Cancel)",
      audioBedrud: "RNNoise / Krisp",
      audioJitsi: "Basic",
      audioBbb: "Basic",
      license: "License",
      licenseBedrud: "Apache 2.0",
      licenseJitsi: "Apache 2.0",
      licenseBbb: "LGPL 3.0",
    },
  },
  features: {
    title: "Everything You Need",
    subtitle:
      "Bedrud ships as a single, self-contained binary with everything built in.",
    singleBinary: {
      title: "Single Binary",
      description:
        "One binary, zero dependencies. Download, run, done. No Docker, no Kubernetes, no fuss.",
    },
    webrtcVideo: {
      title: "WebRTC Video",
      description:
        "Low-latency, peer-to-peer video and audio powered by a built-in WebRTC media server.",
    },
    multiPlatform: {
      title: "Multi-Platform",
      description:
        "Native clients for Web, Android, and iOS — plus server-side bots for automation.",
    },
    flexibleAuth: {
      title: "Flexible Auth",
      description:
        "Built-in authentication with support for SSO, OAuth, and custom identity providers.",
    },
    botAgents: {
      title: "Bot Agents",
      description:
        "Programmable bots that can join meetings, transcribe, translate, and integrate with your tools.",
    },
    selfHosted: {
      title: "Your Infrastructure or Ours",
      description:
        "Self-host for full control over your data, or use Bedrud Cloud and let us handle the ops. Your choice.",
    },
  },
  install: {
    title: "One Command. Done.",
    subtitle: "Get Bedrud running in under a minute.",
    command: "curl -fsSL https://get.bedrud.org | bash",
    dockerCommand: "docker run -d -p 8080:8080 bedrud/bedrud",
    or: "or",
    copy: "Copy",
    copied: "Copied!",
    requirements:
      "Requires: 64-bit Linux, macOS, or Windows. 200MB RAM minimum.",
  },
  platforms: {
    title: "One Platform, Every Device",
    subtitle:
      "Native experiences across all platforms, built with modern tech stacks.",
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
    title: "Open Source, Open Future",
    subtitle:
      "Bedrud is fully open source under the Apache 2.0 license. Inspect the code, contribute, or fork it — it's yours.",
    license: "Apache 2.0",
    github: "View on GitHub",
    docs: "Read the Docs",
  },
  cta: {
    title: "Ready to Own Your Meetings?",
    subtitle: "Star us on GitHub, read the docs, or join the community.",
    starGithub: "Star on GitHub",
    readDocs: "Read the Docs",
    joinCommunity: "Join Community",
  },
  footer: {
    brand: "Bedrud",
    tagline:
      "Video meetings for teams that care about privacy. Self-hosted or cloud.",
    product: "Product",
    features: "Features",
    platforms: "Platforms",
    openSource: "Open Source",
    demo: "Live Demo",
    resources: "Resources",
    docs: "Documentation",
    changelog: "Changelog",
    contributors: "Contributors",
    discord: "Discord",
    github: "GitHub",
    releases: "Releases",
    legal: "Legal",
    license: "License",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    community: "Community",
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
    searchDocs: "Search docs...",
    notFound: "Doc not found",
  },
  skipToContent: "Skip to content",
  mobileNav: {
    navigation: "Navigation",
    language: "Language",
    tryDemo: "Try Demo",
  },
};
