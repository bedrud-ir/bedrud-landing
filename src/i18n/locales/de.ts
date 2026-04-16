export default {
  meta: {
    title: "Bedrud — Videokonferenzen, wie Sie es wollen",
    description:
      "Bedrud ist eine quelloffene Videokonferenz-Plattform. Selbst hosten oder unsere Cloud nutzen — eine einzelne Binärdatei mit Web-UI, REST-API und WebRTC-Medienserver.",
  },
  nav: {
    home: "Startseite",
    features: "Funktionen",
    compare: "Vergleich",
    platforms: "Plattformen",
    openSource: "Open Source",
    docs: "Dokumentation",
    community: "Community",
    demo: "Demo",
  },
  hero: {
    badge: "Open Source · Apache 2.0",
    kicker: "Selbst-gehostete Videokonferenzen. 200MB RAM. Ein Binary.",
    headline: "Selbstgehostete Videokonferenzen in unter einer Minute",
    subtitle:
      "Eine Binärdatei, 200MB RAM, unbegrenzte Nutzer. Ihr Server, Ihre Regeln, Ihre Daten.",
    tryDemo: "Demo starten",
    installNow: "Installationsbefehl kopieren",
    viewOnGithub: "Auf GitHub ansehen",
    copied: "Kopiert!",
    stars: "1.2k",
    starsLabel: "GitHub-Sterne",
    contributorsLabel: "Mitwirkende",
    license: "Apache 2.0 lizenziert",
  },
  journey: {
    title: "Von Null bis zur Besprechung in Minuten",
    subtitle: "Installieren. Link teilen. Loslegen. So sieht das aus.",
    install: {
      title: "Installieren",
      description:
        "Laden Sie eine einzelne Binärdatei herunter oder ziehen Sie ein Docker-Image. Ein Befehl, keine Abhängigkeiten. Läuft in unter einer Minute.",
    },
    invite: {
      title: "Einladen",
      description:
        "Teilen Sie einen Link. Keine Anmeldung, keine Downloads, keine Reibung. Gäste treten sofort von jedem Browser aus bei.",
    },
    meet: {
      title: "Besprechen",
      description:
        "Kristallklares WebRTC-Video und -Audio mit integrierter Geräuschunterdrückung. Einfach sprechen.",
    },
    scale: {
      title: "Skalieren",
      description:
        "Selbst hosten für volle Kontrolle oder Bedrud Cloud nutzen. Unbegrenzte Benutzer, keine Sitzungsgebühren, niemals.",
    },
  },
  whyBedrud: {
    title: "Anders gebaut",
    subtitle: "Kein Lock-in. Kein Bloat. Keine Rechnungsüberraschungen.",
    noLockIn: {
      title: "Kein Vendor-Lock-In",
      description:
        "Ihre Infrastruktur. Ihre Daten. Ihre Regeln. Auf jedem Server bereitstellen, jederzeit migrieren. Keine proprietären Formate, keine Exit-Gebühren, keine Cloud-Abhängigkeit.",
    },
    singleBinary: {
      title: "Einzelne Binärdatei",
      description:
        "Eine Datei. Ein Befehl. Keine Abhängigkeiten. Kein Docker, kein Kubernetes, keine Freitagnachmittag-Deployment-Albträume.",
    },
    noPerSeat: {
      title: "Keine Sitzungsgebühren",
      description:
        "5 Nutzer oder 5.000. Der Preis bleibt gleich: null. Keine Lizenzschlüssel, keine Nutzerzähler, keine 'Vertrieb kontaktieren'-Buttons.",
    },
  },
  comparison: {
    title: "So schneidet Bedrud im Vergleich ab",
    subtitle: "Selbstgehostete Videokonferenzen ohne Komplexität.",
    feature: "Funktion",
    bedrud: "Bedrud",
    jitsi: "Jitsi Meet",
    bbb: "BigBlueButton",
    rows: {
      deploy: "Bereitstellungskomplexität",
      deployBedrud: "Einzelne Binärdatei",
      deployJitsi: "Docker Compose (8+ Container)",
      deployBbb: "Server mit mindestens 8 GB RAM",
      ram: "RAM-Verbrauch",
      ramBedrud: "~200MB",
      ramJitsi: "~2GB",
      ramBbb: "~4GB+",
      install: "Installationszeit",
      installBedrud: "< 1 Minute",
      installJitsi: "~15 Minuten",
      installBbb: "~30 Minuten + Konfiguration",
      nativeClients: "Native Clients",
      nativeBedrud: "Web, Android, iOS",
      nativeJitsi: "Web, Android, iOS",
      nativeBbb: "Nur Web",
      guestJoin: "Gastbeitritt (Kein Konto)",
      guestBedrud: "Ja",
      guestJitsi: "Ja",
      guestBbb: "Ja (Moderator-Genehmigung)",
      audioProcessing: "Audioverarbeitung (Geräuschunterdrückung)",
      audioBedrud: "RNNoise / Krisp",
      audioJitsi: "Basis",
      audioBbb: "Basis",
      license: "Lizenz",
      licenseBedrud: "Apache 2.0",
      licenseJitsi: "Apache 2.0",
      licenseBbb: "LGPL 3.0",
    },
  },
  features: {
    title: "Alles ist dabei",
    subtitle:
      "Video, Audio, Auth, Bots — alles enthalten. Keine Microservices-Architektur nötig.",
    e2eEncryption: {
      title: "Standardmäßig verschlüsselt",
      description:
        "Alle Medien werden über DTLS und SRTP verschlüsselt übertragen. Ihre Daten bleiben im Self-Hosted-Modus auf Ihren Servern. Keine Drittanbieter-Telemetrie, keine Datenerhebung.",
    },
    webrtcVideo: {
      title: "WebRTC-Video",
      description:
        "Videoanrufe mit unter einer Sekunde Latenz durch einen integrierten WebRTC-Mediaserver. Adaptive Bitrate für instabile Verbindungen.",
    },
    multiPlatform: {
      title: "Multiplattform",
      description:
        "Native Apps für Web, Android und iOS. Keine Hüllen — echte native Apps. Plus ein serverseitiges SDK für Automatisierung.",
    },
    flexibleAuth: {
      title: "Flexible Authentifizierung",
      description:
        "Integrierte Authentifizierung, die sofort funktioniert, plus SSO- und OAuth-Integration. Verbinden Sie sich in Minuten mit Ihrem Identitätsanbieter.",
    },
    botAgents: {
      title: "Bot-Agenten",
      description:
        "Bots treten als Teilnehmer an Meetings bei. Transkribieren, übersetzen in Echtzeit, ins CRM übertragen oder eigene Workflows mit dem Go-SDK erstellen.",
    },
    selfHosted: {
      title: "Ihre Infrastruktur oder unsere",
      description:
        "Auf eigenen Servern mit voller Kontrolle betreiben. Oder Bedrud Cloud nutzen und sich nicht um Ops kümmern. Gleiches Produkt, gleiche Funktionen.",
    },
  },
  install: {
    title: "Ein Befehl. Fertig.",
    subtitle: "Kopieren. Einfügen. Läuft. Das war's.",
    command: "curl -fsSL https://get.bedrud.org | bash",
    dockerCommand: "docker run -d -p 8080:8080 bedrud/bedrud",
    or: "oder",
    requirements:
      "Funktioniert auf jedem 64-Bit Linux, macOS oder Windows mit 200MB RAM.",
  },
  platforms: {
    title: "Native Apps, keine Web-Wrapper",
    subtitle:
      "Echte native Apps — React im Web, Kotlin auf Android, Swift auf iOS, Go auf dem Server. Kein Electron, kein Cordova.",
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
    status: "Produktion",
  },
  openSource: {
    title: "Lies den Quellcode. Übernimm die Kontrolle.",
    subtitle:
      "Jede Codezeile ist öffentlich. Inspizieren, prüfen, beitragen oder forken. Apache 2.0 lizenziert — kommerziell oder anderweitig nutzbar.",
    license: "Apache 2.0",
    github: "Auf GitHub ansehen",
    docs: "Dokumentation lesen",
  },
  cta: {
    title: "Bereit, Ihre Besprechungen zu besitzen?",
    subtitle:
      "Schließen Sie sich Tausenden Entwicklern an, die per-Seat-Preise und Vendor-Lock-in satt haben. In unter einer Minute starten.",
    installNow: "Installationsbefehl kopieren",
    readDocs: "Dokumentation lesen",
    starGithub: "Stern auf GitHub",
  },
  faq: {
    title: "Häufig gestellte Fragen",
    subtitle: "Technische Fragen, direkt beantwortet.",
    updates: {
      question: "Wie funktionieren Updates?",
      answer:
        "Führen Sie den Installationsbefehl erneut aus. Bedrud ersetzt die Binärdatei direkt — keine Paketmanager, keine Abhängigkeitsketten. Sie können auch automatische Updates über ein einzelnes Konfigurations-Flag aktivieren.",
    },
    encryption: {
      question: "Ist es Ende-zu-Ende verschlüsselt?",
      answer:
        "Alle Medien werden über DTLS und SRTP (den WebRTC-Standard) verschlüsselt übertragen. Bei Self-Hosted-Bereitstellungen kontrollieren Sie den Server und alle Daten. Ende-zu-Ende-Verschlüsselung für Peer-to-Peer-Anrufe ist in Planung.",
    },
    network: {
      question: "Welche Netzwerk- und Portanforderungen gibt es?",
      answer:
        "Port 80/443 für HTTP/WebSocket und ein konfigurierbarer UDP-Bereich (Standard 50000–60000) für WebRTC-Medien. Hinter NAT richten Sie einen STUN/TURN-Server ein — Bedrud enthält Dokumentation für coturn.",
    },
    proxy: {
      question: "Kann ich es hinter einem Reverse-Proxy betreiben?",
      answer:
        "Ja. Nginx, Caddy, Traefik — alle funktionieren. Die Dokumentation enthält Copy-Paste-Konfigurationen für jedes. Leiten Sie einfach WebSocket-Verbindungen weiter und setzen Sie die entsprechenden Header.",
    },
    cloudVsSelfHosted: {
      question:
        "Was ist der Unterschied zwischen Self-Hosted und Bedrud Cloud?",
      answer:
        "Gleiches Produkt, gleiche Funktionen. Self-Hosted läuft auf Ihrer Infrastruktur mit voller Datenkontrolle. Bedrud Cloud übernimmt Betrieb, Updates und Skalierung für Sie. Kein Vendor-Lock-In — jederzeit migrierbar.",
    },
  },
  testimonials: {
    title: "Entwicklern vertraut",
    subtitle: "Was Leute über Bedrud sagen.",
    one: {
      quote:
        "Wir haben unser Jitsi-Setup an einem Nachmittag durch Bedrud ersetzt. Eine Binärdatei, 200MB RAM, und unsere Meetings klingen jetzt sogar besser.",
      name: "Lena K.",
      role: "DevOps-Lead bei einem europäischen SaaS-Unternehmen",
      initials: "LK",
    },
    two: {
      quote:
        "Keine Preiserhöhung pro Nutzer war für uns der Ausschlag. Wir sind von 20 auf 200 Nutzer gewachsen ohne eine einzige Lizenz-E-Mail.",
      name: "Marcus T.",
      role: "CTO bei einem Remote-Startup",
      initials: "MT",
    },
    three: {
      quote:
        "Bedrud auf einem $5 VPS deployed — es hat einfach funktioniert. Mit dem Bot-SDK hatten wir Meeting-Transkripte in unserem CRM innerhalb eines Tages.",
      name: "Priya S.",
      role: "Senior Engineer bei einem Fintech-Unternehmen",
      initials: "PS",
    },
  },
  footer: {
    brand: "Bedrud",
    tagline:
      "Videokonferenzen für Teams, denen Datenschutz wichtig ist. Selbstgehostet oder Cloud.",
    product: "Produkt",
    features: "Funktionen",
    compare: "Vergleich",
    platforms: "Plattformen",
    openSource: "Open Source",
    selfHosted: "Self-Hosted vs. Cloud",
    demo: "Live-Demo",
    changelog: "Änderungsprotokoll",
    developers: "Entwickler",
    quickstart: "Schnellstart-Anleitung",
    docs: "Dokumentation",
    architecture: "Architektur-Anleitung",
    api: "API-Referenz",
    openSourceSection: "Open Source",
    contribute: "Beitragen",
    reportIssue: "Problem melden",
    resources: "Ressourcen",
    contributors: "Mitwirkende",
    github: "GitHub",
    releases: "Versionen",
    discord: "Discord",
    legal: "Rechtliches",
    license: "Lizenz",
    privacy: "Datenschutzrichtlinie",
    terms: "Nutzungsbedingungen",
    contact: "Kontakt",
    madeBy: "Mit Sorgfalt erstellt von",
    backToTop: "Nach oben",
    languages: "Sprachen",
  },
  privacy: {
    meta: {
      title: "Datenschutzrichtlinie — Bedrud",
      description:
        "Erfahren Sie, wie Bedrud Ihre persönlichen Daten erhebt, verwendet und schützt.",
    },
    title: "Datenschutzrichtlinie",
    lastUpdated: "Zuletzt aktualisiert: 20. Februar 2026",
    intro:
      "Bei Bedrud nehmen wir Ihren Datenschutz ernst. Diese Datenschutzrichtlinie erklärt, wie wir Ihre Daten erheben, verwenden, weitergeben und schützen, wenn Sie unsere Videokonferenz-Plattform und zugehörige Dienste nutzen.",
    dataCollection: {
      title: "Datenerhebung",
      content:
        "Wir erheben Informationen, die Sie uns direkt bereitstellen, z. B. wenn Sie ein Konto erstellen, unsere Dienste nutzen oder den Support kontaktieren. Dies kann Ihren Namen, Ihre E-Mail-Adresse und Nutzungsdaten umfassen. Wenn Sie Bedrud im selbstgehosteten Modus verwenden, verbleiben Ihre Daten vollständig auf Ihrer eigenen Infrastruktur.",
    },
    dataUsage: {
      title: "Verwendung Ihrer Daten",
      content:
        "Wir verwenden die erhobenen Daten, um unsere Dienste bereitzustellen, zu pflegen und zu verbessern, um mit Ihnen über Ihr Konto zu kommunizieren und um Ihnen technische Hinweise und Supportnachrichten zu senden. Wir verkaufen Ihre persönlichen Daten nicht an Dritte.",
    },
    dataStorage: {
      title: "Datenspeicherung & Sicherheit",
      content:
        "Wir setzen branchenübliche Sicherheitsmaßnahmen zum Schutz Ihrer Daten ein. Bei Cloud-gehosteten Instanzen werden Daten bei der Übertragung und im Ruhezustand verschlüsselt. Selbstgehostete Bereitstellungen geben Ihnen die volle Kontrolle über Datenspeicherung und Sicherheitskonfigurationen.",
    },
    thirdParties: {
      title: "Drittanbieter-Dienste",
      content:
        "Wir können Drittanbieter-Dienste für Analysen, Fehlermeldungen und Infrastruktur nutzen. Diese Dienste haben eigene Datenschutzrichtlinien. Wir teilen nur die minimal notwendigen Daten, damit diese Dienste funktionieren.",
    },
    cookies: {
      title: "Cookies & Tracking",
      content:
        "Wir verwenden essenzielle Cookies, um Ihre Sitzung und Einstellungen aufrechtzuerhalten. Wir verwenden keine Tracking-Cookies von Drittanbietern oder Werbe-Tracker. Sie können Ihren Browser so konfigurieren, dass Cookies abgelehnt werden, obwohl einige Funktionen möglicherweise nicht ordnungsgemäß funktionieren.",
    },
    yourRights: {
      title: "Ihre Rechte",
      content:
        "Sie haben das Recht, auf Ihre persönlichen Daten zuzugreifen, diese zu berichtigen oder zu löschen. Sie können Ihre Daten jederzeit exportieren oder die Kontolöschung beantragen. Bei selbstgehosteten Instanzen haben Sie die vollständige Kontrolle über alle Daten auf Ihren Servern.",
    },
    changes: {
      title: "Änderungen dieser Richtlinie",
      content:
        "Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wir werden Sie über Änderungen informieren, indem wir die neue Richtlinie auf dieser Seite veröffentlichen und das Datum der letzten Aktualisierung ändern. Die weitere Nutzung des Dienstes gilt als Zustimmung zur aktualisierten Richtlinie.",
    },
    contact: {
      title: "Kontakt",
      content:
        "Wenn Sie Fragen zu dieser Datenschutzrichtlinie oder unseren Datenpraktiken haben, kontaktieren Sie uns über unser GitHub-Repository oder schreiben Sie uns an privacy@bedrud.com.",
    },
  },
  terms: {
    meta: {
      title: "Nutzungsbedingungen — Bedrud",
      description:
        "Lesen Sie die Bedingungen für die Nutzung der Bedrud-Videokonferenz-Plattform.",
    },
    title: "Nutzungsbedingungen",
    lastUpdated: "Zuletzt aktualisiert: 20. Februar 2026",
    intro:
      "Diese Nutzungsbedingungen regeln Ihre Nutzung der Bedrud-Videokonferenz-Plattform und zugehörigen Dienste. Durch den Zugriff auf oder die Nutzung von Bedrud stimmen Sie diesen Bedingungen zu.",
    acceptance: {
      title: "Annahme der Bedingungen",
      content:
        "Durch den Zugriff auf oder die Nutzung von Bedrud erklären Sie sich mit diesen Nutzungsbedingungen einverstanden. Wenn Sie diesen Bedingungen nicht zustimmen, dürfen Sie unsere Dienste nicht nutzen. Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern.",
    },
    services: {
      title: "Beschreibung der Dienste",
      content:
        "Bedrud bietet eine Videokonferenz-Plattform als Cloud-gehosteten Dienst und als selbstgehostete Lösung. Die Plattform umfasst Videokonferenzen, Echtzeitkommunikation und zugehörige Kollaborationstools über Web-, Mobil- und Serveranwendungen.",
    },
    accounts: {
      title: "Benutzerkonten",
      content:
        "Sie sind für die Geheimhaltung Ihrer Kontodaten und für alle Aktivitäten verantwortlich, die unter Ihrem Konto stattfinden. Sie müssen bei der Kontoerstellung genaue und vollständige Angaben machen und diese aktuell halten.",
    },
    acceptableUse: {
      title: "Akzeptable Nutzung",
      content:
        "Sie stimmen zu, Bedrud nicht für rechtswidrige Zwecke oder auf eine Weise zu nutzen, die den Dienst beschädigen, deaktivieren oder beeinträchtigen könnte. Sie dürfen nicht versuchen, unbefugten Zugriff auf Teile des Dienstes, andere Konten oder verbundene Computersysteme zu erlangen.",
    },
    intellectualProperty: {
      title: "Geistiges Eigentum",
      content:
        "Bedrud ist Open-Source-Software unter der AGPLv3-Lizenz. Ihre Nutzung der Software unterliegt den Bedingungen dieser Lizenz. Der Name Bedrud, das Logo und das Branding sind Marken von theMadOrg und dürfen nicht ohne Genehmigung verwendet werden.",
    },
    termination: {
      title: "Kündigung",
      content:
        "Wir können Ihren Zugang zum Cloud-Dienst jederzeit bei Verstoß gegen diese Bedingungen kündigen oder sperren. Bei Kündigung erlischt Ihr Recht zur Nutzung des Dienstes sofort. Bei selbstgehosteten Instanzen behalten Sie den Zugang zur Software gemäß den Bedingungen der AGPLv3-Lizenz.",
    },
    liability: {
      title: "Haftungsbeschränkung",
      content:
        "Soweit gesetzlich zulässig, haften Bedrud und seine Mitwirkenden nicht für indirekte, zufällige, besondere oder Folgeschäden, die aus Ihrer Nutzung des Dienstes entstehen. Der Dienst wird ohne Gewährleistungen jeglicher Art bereitgestellt.",
    },
    governingLaw: {
      title: "Anwendbares Recht",
      content:
        "Diese Bedingungen unterliegen dem anwendbaren Recht, ohne Berücksichtigung kollisionsrechtlicher Grundsätze. Streitigkeiten aus diesen Bedingungen werden durch Verhandlung in gutem Glauben oder, falls erforderlich, durch verbindliche Schlichtung beigelegt.",
    },
    changes: {
      title: "Änderungen der Bedingungen",
      content:
        "Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. Wesentliche Änderungen werden über den Dienst oder per E-Mail kommuniziert. Ihre fortgesetzte Nutzung von Bedrud nach Veröffentlichung von Änderungen gilt als Zustimmung zu den geänderten Bedingungen.",
    },
    contact: {
      title: "Kontakt",
      content:
        "Wenn Sie Fragen zu diesen Nutzungsbedingungen haben, kontaktieren Sie uns über unser GitHub-Repository oder schreiben Sie uns an legal@bedrud.com.",
    },
  },
  docs: {
    documentation: "Dokumentation",
    onThisPage: "Auf dieser Seite",
    previous: "Zurück",
    next: "Weiter",
    backToHome: "Zurück zur Startseite",
    searchPlaceholder: "Dokumentation durchsuchen…",
    searchButton: "Suche",
    noResults: "Keine Ergebnisse",
    loading: "Laden…",
    pressShortcut: "Drücken",
    clearSearch: "Suche löschen",
    searchDocs: "Dokumentation durchsuchen",
    notFound: "Dokument nicht gefunden",
    sections: {
      gettingStarted: "Erste Schritte",
      architecture: "Architektur",
      backend: "Backend",
      api: "API",
      guides: "Anleitungen",
      contributing: "Mitwirken",
    },
  },
  skipToContent: "Zum Inhalt springen",
  mobileNav: {
    navigation: "Navigation",
    language: "Language",
    getStarted: "Loslegen",
  },
  featuresPage: {
    meta: {
      title: "Funktionen — Bedrud",
      description:
        "Entdecken Sie Bedruds Funktionen: Einzelne Binärdatei, WebRTC-Qualität, Gastzugang, Passkeys, Admin-Steuerung, Audioverarbeitung, Bot-Agenten und Multi-Plattform-Support.",
    },
    title: "Funktionen",
    subtitle: "Jede Funktion löst ein echtes Problem.",
    ready: "Bereit?",
    readyCta: "Loslegen",
    guestJoin: {
      pain: "Waren Sie schon einmal genervt, Gäste nur für einen 15-minütigen Anruf zur Kontoerstellung zu zwingen?",
      title: "Gastbeitritt — Kein Konto erforderlich",
      description:
        "Teilen Sie einen Link, sie klicken, sie sind drin. Keine Anmeldeformulare, keine Passwörter, keine Reibung. Optionale Passcode-Sicherheit.",
    },
    singleBinary: {
      pain: "Die Einrichtung von Videoinfrastruktur sollte keinen DevOps-Abschluss erfordern.",
      title: "Einzelne Binärdatei bereitstellen",
      description:
        "Ein Download, ein Befehl, läuft. Kein Docker Compose, keine Kubernetes-Manifeste, keine 12-Schritt-Anleitungen. Nur eine funktionierende Binärdatei.",
    },
    webrtc: {
      pain: "Videoanrufe mit Verzögerungen, Einfrierungen oder Unterbrechungen ruinieren Besprechungen.",
      title: "WebRTC-Qualität",
      description:
        "Integrierter WebRTC-Mediaserver mit adaptiver Bitrate, Simulcast und SVC. Kristallklares Video und Audio bei jeder Verbindung.",
    },
    passkeys: {
      pain: "Passwörter werden geleakt. MFA-Tokens werden phishend.",
      title: "Passkeys + OAuth",
      description:
        "FIDO2-Passkeys für passwortlose Authentifizierung. OAuth 2.0 / OIDC für SSO mit Ihrem bestehenden Identitätsanbieter. Keine Passwortdatenbanken zum Knacken.",
    },
    admin: {
      pain: "Die Verwaltung einer Besprechungsplattform ohne gute Tools ist schmerzhaft.",
      title: "Admin-Dashboard",
      description:
        "Raumverwaltung, Benutzerverwaltung, Nutzungsanalysen und Konfiguration — alles über eine saubere Web-Benutzeroberfläche. Kein CLI-Raten.",
    },
    audio: {
      pain: "Hintergrundgeräusche in Besprechungen sind ablenkend und unprofessionell.",
      title: "Audioverarbeitung",
      description:
        "Integrierte Geräuschunterdrückung durch RNNoise. Optionale Krisp-Integration für Premium-KI-Geräuschunterdrückung. Sauberes Audio, jeder Anruf.",
    },
    bots: {
      pain: "Manuelle Besprechungsaufgaben verschwenden Zeit — Aufzeichnung, Transkription, Notizen.",
      title: "Bot-Agenten",
      description:
        "Programmierbare Bots treten über Go SDK Besprechungen bei. Automatisieren Sie Transkription, Übersetzung, Aufzeichnung, CRM-Integrationen und benutzerdefinierte Workflows.",
    },
    multiPlatform: {
      pain: "Ihr Team verwendet verschiedene Geräte. Ihre Besprechungsplattform sollte das auch tun.",
      title: "Multiplattform",
      description:
        "Native Apps für Web (React), Android (Kotlin) und iOS (Swift). Konsistente Erfahrung, plattformnative Leistung.",
    },
  },
  demoPage: {
    meta: {
      title: "Live-Demo — Bedrud",
      description:
        "Testen Sie Bedrud ohne Installation. Treten Sie jetzt einer Live-Demo-Besprechung bei.",
    },
    title: "Ohne Installation testen",
    subtitle:
      "Treten Sie jetzt einer Live-Bedrud-Besprechung bei. Kein Konto erforderlich.",
    tryNow: "Demo öffnen",
    noInstall:
      "Keine Installation, kein Konto, keine Verpflichtung. Nur klicken und besprechen.",
    orSelfHost: "Bevorzugen Sie Self-Hosting?",
    installCta: "Installationsanleitung lesen",
  },
  changelogPage: {
    meta: {
      title: "Änderungsprotokoll — Bedrud",
      description: "Versionsgeschichte und Updates für Bedrud.",
    },
    title: "Änderungsprotokoll",
    subtitle: "Was gibt es Neues bei Bedrud. Aktivität = Vertrauen.",
    viewOnGithub: "Auf GitHub ansehen",
    noReleases: "Noch keine Releases. Schauen Sie bald wieder vorbei!",
  },
  contributorsPage: {
    meta: {
      title: "Mitwirkende — Bedrud",
      description: "Lernen Sie die Menschen kennen, die Bedrud entwickeln.",
    },
    title: "Mitwirkende",
    subtitle: "Bedrud wird von der Community entwickelt.",
    joinThem: "Machen Sie mit",
    joinCta: "Auf GitHub beitragen",
    contributions: "Beiträge",
  },
  contactPage: {
    meta: {
      title: "Kontakt — Bedrud",
      description: "Kontaktieren Sie das Bedrud-Team.",
    },
    title: "Kontakt",
    subtitle: "Erreichen Sie uns über einen dieser Kanäle.",
    github: {
      title: "GitHub-Issues",
      description: "Fehlerberichte, Funktionsanfragen und Code-Beiträge.",
      cta: "Ein Issue öffnen",
    },
    discord: {
      title: "Community-Chat",
      description:
        "Stellen Sie Fragen, teilen Sie Ideen und erhalten Sie Hilfe aus der Community.",
      cta: "Discord beitreten",
    },
    email: {
      title: "E-Mail",
      description:
        "Für Partnerschaften, Sicherheitsprobleme oder private Anfragen.",
      cta: "E-Mail senden",
    },
  },
};
