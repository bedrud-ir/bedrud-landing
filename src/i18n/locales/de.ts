export default {
  meta: {
    title: "Bedrud - Videokonferenzen, wie Sie es wollen",
    description:
      "Bedrud ist eine quelloffene Videokonferenz-Plattform. Selbst hosten oder unsere Cloud nutzen - eine einzelne Binärdatei mit Web-UI, REST-API und WebRTC-Medienserver.",
  },
  nav: {
    home: "Startseite",
    features: "Funktionen",
    compare: "Feature",
    platforms: "Plattformen",
    openSource: "Open Source",
    docs: "Dokumentation",
    community: "Community",
    demo: "Demo",
    install: "Installieren",
    download: "Download",
    blog: "Blog",
    getStarted: "Loslegen",
  },
  hero: {
    badge: "Open Source · Apache 2.0",
    kicker: "Open-Source Zoom-Alternative. Läuft auf einem 5€-VPS.",
    headline: "Ihre Meetings. Ihr Server. Ihre Regeln.",
    subheadline:
      "Selbst gehostete Videokonferenzen auf Ihrer eigenen Hardware. Eine einzelne Binärdatei, 512 MB RAM, 60 Sekunden Deploy. Von privaten Anrufen bis zu Übertragungen mit tausenden Zuschauern.",
    trustBar:
      "Vertraut von über 10.000 datenschutzorientierten Entwicklern und Teams weltweit.",
    installMicrocopy: "Im Terminal einfügen. In 60 Sekunden bereit.",
    tryDemo: "Ohne Installation ausprobieren",
    installNow: "Installationsbefehl kopieren",
    objectionBullets: {
      screenSharing: "Bildschirmfreigabe & Aufzeichnung",
      sso: "SSO & OIDC-Integration",
      webrtc: "WebRTC-basiert, unter Sekunde Latenz",
    },
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
    host: {
      title: "Besprechen",
      description:
        "Kristallklares WebRTC-Video und -Audio mit integrierter Geräuschunterdrückung. Bildschirmfreigabe, Aufnahme und Chat inklusive.",
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
    sections: {
      deployment: "Bereitstellung",
      features: "Funktionen",
      integrations: "Integrationen & Skalierung",
      licensing: "Lizenzierung & Community",
    },
    rows: {
      deploy: "Bereitstellungskomplexität",
      deployBedrud: "Einzelne Binärdatei",
      deployJitsi: "Docker Compose (8+ Container)",
      deployBbb: "Server mit mindestens 8 GB RAM",
      ram: "RAM-Verbrauch",
      ramBedrud: "512MB",
      ramJitsi: "~2GB",
      ramBbb: "~4GB+",
      install: "Installationszeit",
      installBedrud: "< 1 Minute",
      installJitsi: "~15 Minuten",
      installBbb: "~30 Minuten + Konfiguration",
      nativeClients: "Native Clients",
      nativeClientsBedrud: "Web, Android, iOS",
      nativeClientsJitsi: "Web, Android, iOS",
      nativeClientsBbb: "Nur Web",
      guestJoin: "Gastbeitritt (Kein Konto)",
      guestJoinBedrud: "Ja",
      guestJoinJitsi: "Ja",
      guestJoinBbb: "Ja (Moderator-Genehmigung)",
      audioProcessing: "Audioverarbeitung (Geräuschunterdrückung)",
      audioProcessingBedrud: "RNNoise / Krisp",
      audioProcessingJitsi: "Basis",
      audioProcessingBbb: "Basis",
      screenShare: "Bildschirmfreigabe",
      screenShareBedrud: "Integriert",
      screenShareJitsi: "Integriert",
      screenShareBbb: "Integriert",
      recording: "Aufzeichnung",
      recordingBedrud: "Serverseitig",
      recordingJitsi: "Via Jibri (zusätzliche Einrichtung)",
      recordingBbb: "Integriert + Notizexport",
      sipIntegration: "SIP / Telefon-Einwahl",
      sipIntegrationBedrud: "Nein",
      sipIntegrationJitsi: "SIP/Jibri-Gateway",
      sipIntegrationBbb: "SIP-Gateway",
      whiteboard: "Whiteboard",
      whiteboardBedrud: "Nein",
      whiteboardJitsi: "Nein",
      whiteboardBbb: "Integriertes Whiteboard",
      maxUsers: "Max. gleichzeitige Nutzer",
      maxUsersBedrud: "50+ pro Raum",
      maxUsersJitsi: "100+ mit Optimierung",
      maxUsersBbb: "300+ pro Raum",
      license: "Lizenz",
      licenseBedrud: "Apache 2.0",
      licenseJitsi: "Apache 2.0",
      licenseBbb: "LGPL 3.0",
      communitySize: "Community & Ökosystem",
      communitySizeBedrud: "Wachsend",
      communitySizeJitsi: "Groß, etabliert",
      communitySizeBbb: "Groß, akademisch",
    },
  },
  features: {
    title: "Alles ist dabei",
    subtitle:
      "Video, Audio, Auth, Bots - alles enthalten. Keine Microservices-Architektur nötig.",
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
        "Native Apps für Web, Android und iOS. Keine Hüllen - echte native Apps. Plus ein serverseitiges SDK für Automatisierung.",
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
      "Funktioniert auf jedem 64-Bit Linux, macOS oder Windows mit 512MB RAM (~200MB idle).",
  },
  platforms: {
    title: "Native Apps, keine Web-Wrapper",
    subtitle:
      "Echte native Apps - React im Web, Kotlin auf Android, Swift auf iOS, Rust auf dem Desktop, Go auf dem Server. Kein Electron, kein Cordova.",
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
      title: "Desktop",
      tech: "Rust + Slint",
    },
    server: {
      title: "Server",
      tech: "Go + WebRTC",
    },
    bots: {
      title: "Bots",
      tech: "Python SDK",
    },
    status: "Produktion",
  },
  openSource: {
    title: "Lies den Quellcode. Übernimm die Kontrolle.",
    subtitle:
      "Jede Codezeile ist öffentlich. Inspizieren, prüfen, beitragen oder forken. Apache 2.0 lizenziert - kommerziell oder anderweitig nutzbar.",
    license: "Apache 2.0",
    github: "Auf GitHub ansehen",
    docs: "Dokumentation lesen",
  },
  cta: {
    title: "Hören Sie auf, Ihre Meetings zu mieten",
    subtitle:
      "Auf jedem $5 VPS in 60 Sekunden bereitstellen. Keine Kreditkarte, kein Vendor-Lock-in, keine Drittanbieter-Server.",
    installNow: "Server bereitstellen",
    getStarted: "Quickstart lesen",
    readDocs: "Quickstart ansehen",
    starGithub: "Stern auf GitHub",
  },
  faq: {
    title: "Häufig gestellte Fragen",
    subtitle: "Technische Fragen, direkt beantwortet.",
    updates: {
      question: "Wie funktionieren Updates?",
      answer:
        "Führen Sie den Installationsbefehl erneut aus. Bedrud ersetzt die Binärdatei direkt - keine Paketmanager, keine Abhängigkeitsketten. Sie können auch automatische Updates über ein einzelnes Konfigurations-Flag aktivieren.",
    },
    encryption: {
      question: "Ist es Ende-zu-Ende verschlüsselt?",
      answer:
        "Alle Medien werden über DTLS und SRTP (den WebRTC-Standard) verschlüsselt übertragen. Bei Self-Hosted-Bereitstellungen kontrollieren Sie den Server und alle Daten. Ende-zu-Ende-Verschlüsselung für Peer-to-Peer-Anrufe ist in Planung.",
    },
    network: {
      question: "Welche Netzwerk- und Portanforderungen gibt es?",
      answer:
        "Port 80/443 für HTTP/WebSocket und ein konfigurierbarer UDP-Bereich (Standard 50000–60000) für WebRTC-Medien. Hinter NAT richten Sie einen STUN/TURN-Server ein - Bedrud enthält Dokumentation für coturn.",
    },
    proxy: {
      question: "Kann ich es hinter einem Reverse-Proxy betreiben?",
      answer:
        "Ja. Nginx, Caddy, Traefik - alle funktionieren. Die Dokumentation enthält Copy-Paste-Konfigurationen für jedes. Leiten Sie einfach WebSocket-Verbindungen weiter und setzen Sie die entsprechenden Header.",
    },
    cloudVsSelfHosted: {
      question:
        "Was ist der Unterschied zwischen Self-Hosted und Bedrud Cloud?",
      answer:
        "Gleiches Produkt, gleiche Funktionen. Self-Hosted läuft auf Ihrer Infrastruktur mit voller Datenkontrolle. Bedrud Cloud übernimmt Betrieb, Updates und Skalierung für Sie. Kein Vendor-Lock-In - jederzeit migrierbar.",
    },
  },
  testimonials: {
    title: "Entwicklern vertraut",
    subtitle: "Was Leute über Bedrud sagen.",
    one: {
      quote:
        "Wir haben unser Jitsi-Setup an einem Nachmittag durch Bedrud ersetzt. Eine Binärdatei, 512MB RAM, und unsere Meetings klingen jetzt sogar besser.",
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
        "Bedrud auf einem $5 VPS deployed - es hat einfach funktioniert. Mit dem Bot-SDK hatten wir Meeting-Transkripte in unserem CRM innerhalb eines Tages.",
      name: "Priya S.",
      role: "Senior Engineer bei einem Fintech-Unternehmen",
      initials: "PS",
    },
  },
  footer: {
    brand: "Bedrud",
    tagline:
      "Videokonferenzen für Teams, denen Datenschutz wichtig ist. Selbstgehostet oder Cloud.",
    platform: "Plattform",
    features: "Funktionen",
    compare: "Vergleich",
    demo: "Live-Demo",
    docs: "Dokumentation",
    api: "API-Referenz",
    download: "Download",
    about: "Über uns",
    resources: "Ressourcen",
    blog: "Blog",
    changelog: "Änderungsprotokoll",
    contribute: "Beitragen",
    reportIssue: "Problem melden",
    contact: "Kontakt",
    privacy: "Datenschutzrichtlinie",
    terms: "Nutzungsbedingungen",
  },
  privacy: {
    meta: {
      title: "Datenschutzrichtlinie - Bedrud",
      description:
        "Wie Bedrud mit Ihren Daten umgeht. Kurzversion: selbstgehostet bedeutet, Ihre Daten bleiben auf Ihrem Server.",
    },
    title: "Datenschutzrichtlinie",
    lastUpdated: "Zuletzt aktualisiert: 17. April 2026",
    intro:
      "Bedrud ist Open-Source-Videokonferenz-Software. Wenn Sie es selbst hosten, berühren Ihre Daten niemals unsere Server. Diese Richtlinie deckt die Website bedrud.org und die öffentliche Demo-Instanz ab. Wenn Sie Bedrud selbst hosten, kontrollieren Sie Ihre eigenen Daten.",
    dataCollection: {
      title: "Was wir erheben",
      content:
        "Auf der Website (bedrud.org): nichts. Keine Cookies, keine Tracker, keine Analysen. Auf der öffentlichen Demo: Ihr Anzeigename und Ihre IP-Adresse, solange Sie verbunden sind. Das ist alles. Keine E-Mail, kein Telefon, keine persönlichen Daten. Wenn Sie Bedrud selbst hosten, bleiben alle Daten auf Ihrer Infrastruktur. Wir sehen sie nie.",
    },
    dataUsage: {
      title: "Wie wir Daten verwenden",
      content:
        "Demo-Verbindungsdaten werden ausschließlich für das Routing Ihres Videos und Audios in Echtzeit verwendet. Sie werden nicht protokolliert, gespeichert oder analysiert. Wir erstellen keine Benutzerprofile, schalten keine gezielte Werbung und verkaufen keine Daten. Niemals.",
    },
    dataStorage: {
      title: "Datenspeicherung",
      content:
        "Die öffentliche Demo speichert keine Daten dauerhaft. Wenn Sie sich abmelden, ist Ihre Sitzung weg - keine Aufzeichnungen, kein Chat-Verlauf. Selbstgehostete Instanzen speichern Daten in SQLite auf Ihrem Server. Sie wählen die Backup-Strategie und Aufbewahrungsrichtlinie. Wir haben keinen Zugriff.",
    },
    thirdParties: {
      title: "Drittanbieter-Dienste",
      content:
        "Keine. Bedrud sendet nach dem Download keine ausgehenden Anfragen. Keine Analysen, keine Absturzberichte, kein Telemetrie. Die Website lädt keine Drittanbieter-Skripte. Überprüfen Sie es selbst - der Quellcode ist auf GitHub.",
    },
    cookies: {
      title: "Cookies & Local Storage",
      content:
        "Die Website verwendet localStorage für Ihre Theme-Einstellung (dunkel/hell) und Sprachauswahl. Das ist alles. Keine Tracking-Cookies, keine Werbe-IDs. Die Demo verwendet ein Session-Cookie, das beim Schließen des Tabs abläuft.",
    },
    yourRights: {
      title: "Ihre Rechte",
      content:
        "Da wir keine persönlichen Daten erheben, gibt es nichts, auf das Sie zugreifen, das Sie korrigieren oder löschen müssten. Schließen Sie den Demo-Tab und Ihre Sitzungsdaten sind bereits weg. Selbstgehostete Nutzer haben die volle Kontrolle über alle Daten auf ihren Servern - Export, Backup, Löschung, was immer Sie brauchen.",
    },
    changes: {
      title: "Änderungen dieser Richtlinie",
      content:
        "Wir aktualisieren diese Seite, wenn sich unsere Datenpraktiken ändern. Da wir fast nichts erheben, sind Änderungen unwahrscheinlich. Das Datum oben rechts spiegelt die aktuellste Überarbeitung wider.",
    },
    contact: {
      title: "Kontakt",
      content:
        "Fragen? Öffnen Sie ein Issue auf GitHub oder schreiben Sie an privacy@bedrud.com. Wir sind auch auf Discord, wenn Sie lieber in Echtzeit chatten.",
    },
  },
  terms: {
    meta: {
      title: "Nutzungsbedingungen - Bedrud",
      description:
        "Bedingungen für die Nutzung der Bedrud-Website und der öffentlichen Demo. Selbstgehostete Nutzer unterliegen der Apache 2.0 Lizenz.",
    },
    title: "Nutzungsbedingungen",
    lastUpdated: "Zuletzt aktualisiert: 17. April 2026",
    intro:
      "Diese Bedingungen decken die Website bedrud.org und die öffentliche Demo-Instanz unter demo.bedrud.org ab. Wenn Sie Bedrud herunterladen und selbst hosten, gilt die Apache 2.0 Lizenz für Ihre Nutzung der Software.",
    acceptance: {
      title: "Bedrud zu nutzen bedeutet, Sie akzeptieren diese Bedingungen",
      content:
        "Durch den Besuch von bedrud.org oder die Nutzung der öffentlichen Demo stimmen Sie diesen Bedingungen zu. Wenn Sie nicht einverstanden sind, nutzen Sie die Demo nicht. Einfach.",
    },
    services: {
      title: "Was Bedrud bietet",
      content:
        "Wir bieten diese Website mit Dokumentation und Download-Links sowie eine öffentliche Demo-Instanz zur Evaluierung der Software. Die eigentliche Videokonferenz-Software ist Open Source unter der Apache 2.0 Lizenz. Laden Sie sie herunter, modifizieren Sie sie, betreiben Sie sie selbst.",
    },
    accounts: {
      title: "Accounts",
      content:
        "Die Website erfordert keine Accounts. Die Demo erfordert keine Accounts. Selbstgehostete Instanzen können eigene Kontosysteme haben - das liegt bei Ihnen, da Sie den Server betreiben.",
    },
    acceptableUse: {
      title: "Missbrauchen Sie die Demo nicht",
      content:
        "Nutzen Sie die öffentliche Demo nicht für illegale Inhalte, Spam, Belästigung oder alles, was die Erfahrung für andere beeinträchtigt. Wir behalten uns das Recht vor, missbräuchliche Nutzer aus dem Demo-Raum zu entfernen. Dies gilt nicht für selbstgehostete Instanzen - Sie legen Ihre eigenen Regeln fest.",
    },
    intellectualProperty: {
      title: "Open-Source-Lizenz",
      content:
        "Bedrud ist unter der Apache 2.0 Lizenz veröffentlicht. Sie können es nutzen, modifizieren und verbreiten - auch kommerziell. Der Bedrud-Name und das Logo sind Marken von theMadOrg. Sie dürfen sie nutzen, um auf die Software zu verweisen, aber nicht, um Ihre Beziehung zum Projekt falsch darzustellen.",
    },
    termination: {
      title: "Zugang",
      content:
        "Wir können den Zugang zur öffentlichen Demo bei Missbrauch jederzeit sperren. Wir können die Website bei Bedarf abschalten. Aber sobald Sie die Binary heruntergeladen haben, gehört sie Ihnen unter der Apache 2.0 Lizenz. Das können wir nicht widerrufen.",
    },
    liability: {
      title: "Keine Gewährleistung",
      content:
        "Bedrud wird wie besehen bereitgestellt. Wir garantieren nicht, dass es in jeder Umgebung einwandfrei funktioniert. Wir haften nicht für Ausfallzeiten, Datenverlust oder Schäden aus der Nutzung der Software. Siehe die Apache 2.0 Lizenz für den vollständigen Rechtstext.",
    },
    governingLaw: {
      title: "Anwendbares Recht",
      content:
        "Diese Bedingungen unterliegen dem geltenden Recht. Bei Streitigkeiten bevorzugen wir die Lösung über GitHub-Issues oder direkte Kommunikation, bevor Anwälte eingeschaltet werden.",
    },
    changes: {
      title: "Aktualisierungen",
      content:
        "Wir können diese Bedingungen aktualisieren. Wenn ja, ändern wir das Datum auf dieser Seite. Die fortgesetzte Nutzung der Demo oder Website nach Änderungen bedeutet, dass Sie sie akzeptieren.",
    },
    contact: {
      title: "Kontakt",
      content:
        "Fragen zu diesen Bedingungen? Schreiben Sie an legal@bedrud.com oder öffnen Sie ein Issue auf GitHub.",
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
  installPage: {
    meta: {
      title: "Bedrud installieren - Bereitstellung mit einem Befehl",
      description:
        "Stellen Sie Bedrud in unter einer Minute auf Ihrem Server bereit. Einzelne Binärdatei, 512MB RAM, kein Docker erforderlich.",
    },
    title: "Bedrud installieren",
    subtitle:
      "Stellen Sie Videokonferenzen in unter einer Minute auf Ihrem Server bereit. Eine Binärdatei, null Abhängigkeiten.",
  },
  downloadPage: {
    meta: {
      title: "Bedrud herunterladen - Desktop & Mobile Apps",
      description:
        "Bedrud für Linux, macOS, Windows, Android oder iOS herunterladen. Native Apps oder Browser-Zugang ohne Installation.",
    },
    title: "Bedrud herunterladen",
    subtitle:
      "Native Apps für jede Plattform. Oder einfach einen Meeting-Link im Browser öffnen.",
    noInstall:
      "Keine Installation nötig. Herunterladen, ausführbar machen, starten.",
    flathub: "Von Flathub installieren",
    brew: "Mit Homebrew installieren",
    winget: "Mit Windows Package Manager installieren",
    installer: "Installationsprogramm",
    portable: "Portabel",
    playStore: "Im Google Play Store laden",
    appStore: "Im App Store laden",
    sideload: "APK/IPA von GitHub Releases laden",
    browserZero: "Ohne Installation",
    browserDesc:
      "Beliebigen Meeting-Link in Chrome, Firefox, Edge oder Safari öffnen. Kein Download nötig.",
    tryDemo: "Live-Demo testen",
    otherPlatforms: "Alle Plattformen und Paketmanager anzeigen",
    server: "Server-Installation",
    serverDesc: "Bedrud-Server auf eigener Hardware bereitstellen.",
    serverGuide: "Server-Installationsanleitung",
    platform: {
      linux: "Linux",
      mac: "macOS",
      windows: "Windows",
      android: "Android",
      ios: "iOS",
      browser: "Browser",
    },
  },
  aboutPage: {
    meta: {
      title: "Über Bedrud",
      description:
        "Erfahren Sie mehr über das Team und die Mission hinter Bedrud - Open-Source-Videokonferenzen für alle.",
    },
    title: "Über Bedrud",
    subtitle:
      "Open-Source-Videokonferenzen von Menschen, die glauben, dass Datenschutz der Standard sein sollte.",
    mission: {
      title: "Unsere Mission",
      text: "Bedrud existiert, weil Videokonferenzen keine Weitergabe Ihrer Daten an Big Tech erfordern sollten. Wir glauben, dass ein einziges Binary, ein günstiger VPS und Open-Source-Code Millionen-Verträge ersetzen können - ohne Qualität oder Features zu opfern. Datenschutz ist kein Feature. Es ist das Fundament.",
    },
    team: {
      title: "Kernteam",
      subtitle: "Die Menschen hinter Bedrud.",
    },
  },
  blog: {
    meta: {
      title: "Blog - Bedrud",
      description:
        "Updates, technische Analysen und Anleitungen vom Bedrud-Team.",
    },
    title: "Blog",
    subtitle: "Updates, technische Analysen und Anleitungen vom Bedrud-Team.",
    noPosts: "Noch keine Beiträge. Schauen Sie bald wieder vorbei!",
    backToBlog: "Zurück zum Blog",
  },
  skipToContent: "Zum Inhalt springen",
  mobileNav: {
    navigation: "Navigation",
    language: "Language",
    getStarted: "Loslegen",
  },
  featuresPage: {
    meta: {
      title: "Funktionen - Bedrud",
      description:
        "Entdecken Sie Bedruds Funktionen: Einzelne Binärdatei, WebRTC-Qualität, Gastzugang, Passkeys, Admin-Steuerung, Audioverarbeitung, Bot-Agenten und Multi-Plattform-Support.",
    },
    title: "Funktionen",
    subtitle: "Jede Funktion löst ein echtes Problem.",
    sectionTitle: "Alles, was Sie brauchen - und nichts anderes",
    sectionSubtitle:
      "Video-Meetings-Infrastruktur in einer einzigen Binärdatei. Keine externen Abhängigkeiten, keine Sitzungsgebühren, kein Vendor-Lock-in.",
    groups: {
      infra: "Bereitstellung & Infrastruktur",
      media: "Meetings & Medien",
      access: "Zugang & Kontrolle",
      extend: "Erweitern",
    },
    learnMore: "Mehr erfahren",
    stats: {
      ram: "512MB RAM",
      binary: "1 Binärdatei",
      auth: "6 Auth-Methoden",
      platforms: "5 Plattformen",
    },
    guestJoin: {
      pain: "Waren Sie schon einmal genervt, Gäste nur für einen 15-minütigen Anruf zur Kontoerstellung zu zwingen?",
      title: "Gastbeitritt - Kein Konto erforderlich",
      description:
        "Teilen Sie einen Link, sie klicken, sie sind drin. Keine Anmeldeformulare, keine Passwörter, keine Reibung. Optionale Passcode-Sicherheit.",
    },
    singleBinary: {
      pain: "Die Einrichtung von Videoinfrastruktur sollte keinen DevOps-Abschluss erfordern.",
      title: "Einzelne Binärdatei bereitstellen",
      description:
        "Ein Download, ein Befehl, läuft. Kein Docker Compose, keine Kubernetes-Manifeste, keine 12-Schritt-Anleitungen. Nur eine funktionierende Binärdatei.",
      snippet: "$ curl -sSL bedrud.dev/install.sh | sh",
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
        "Raumverwaltung, Benutzerverwaltung, Nutzungsanalysen und Konfiguration - alles über eine saubere Web-Benutzeroberfläche. Kein CLI-Raten.",
    },
    audio: {
      pain: "Hintergrundgeräusche in Besprechungen sind ablenkend und unprofessionell.",
      title: "Audioverarbeitung",
      description:
        "Integrierte Geräuschunterdrückung durch RNNoise. Optionale Krisp-Integration für Premium-KI-Geräuschunterdrückung. Sauberes Audio, jeder Anruf.",
    },
    bots: {
      pain: "Manuelle Besprechungsaufgaben verschwenden Zeit - Aufzeichnung, Transkription, Notizen.",
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
    e2eEncryption: {
      pain: "Meeting-Inhalte, die durch Ihren Server laufen, sollten privat bleiben.",
      title: "Ende-zu-Ende-Verschlüsselung",
      description:
        "Optionale E2E-Verschlüsselung für Räume. Der Server leitet verschlüsselte Medien weiter - nur Teilnehmer können entschlüsseln.",
    },
    autoTls: {
      pain: "SSL-Zertifikate sollten kein Tutorial erfordern.",
      title: "Auto-TLS & HTTPS",
      description:
        "Automatische Let's Encrypt Bereitstellung und Erneuerung. Selbstsignierte Zertifikate für interne Netzwerke.",
    },
    airGapped: {
      pain: "Was, wenn Ihre Server das Internet nicht erreichen können?",
      title: "Air-Gapped & Offline bereit",
      description:
        "Keine ausgehenden Anfragen nach dem Download. SQLite eingebettet. Funktioniert auf Infrastruktur, die nie das öffentliche Internet berührt.",
    },
  },
  demoPage: {
    meta: {
      title: "Live-Demo - Bedrud",
      description:
        "Testen Sie Bedrud ohne Installation. Treten Sie jetzt einer Live-Demo-Besprechung bei.",
    },
    hero: {
      headline: "Testen Sie Bedrud jetzt",
      subtitle:
        "Nehmen Sie an einem Live-Meeting in Ihrem Browser teil. Kein Account, kein Download, kein Warten.",
    },
    cta: {
      tryNow: "Live-Demo öffnen",
      noInstall:
        "Keine Installation. Kein Account. Kein Risiko. Klicken und loslegen.",
    },
    preview: {
      caption: "Was Sie sehen werden, wenn Sie der Demo beitreten",
    },
    features: {
      instantJoin: {
        title: "Sofort beitreten",
        description:
          "Klicken Sie auf den Link und Sie sind drin. Keine Anmeldeformulare, keine E-Mail-Verifikation, keine App-Installation. Funktioniert in jedem modernen Browser.",
      },
      noAccount: {
        title: "Kein Account nötig",
        description:
          "Wählen Sie einen Anzeigenamen und fangen Sie an zu reden. Wenn Sie fertig sind, schließen Sie den Tab. Nichts bleibt zurück.",
      },
      webrtc: {
        title: "Echte WebRTC-Qualität",
        description:
          "Die Demo nutzt dieselbe Engine wie selbstgehostetes Bedrud. Subsekundenlatenz, adaptive Bitrate, kristallklarer Ton.",
      },
      e2e: {
        title: "Ende-zu-Ende verschlüsselt",
        description:
          "Aktivieren Sie E2E-Verschlüsselung in den Raumeinstellungen. Ihr Video und Audio werden verschlüsselt, bevor sie Ihren Browser verlassen.",
      },
    },
    faq: {
      whatHappens: {
        question: "Was passiert in der Demo?",
        answer:
          "Sie treten einem geteilten Meeting-Raum bei, der die vollständige Bedrud-Infrastruktur ausführt. Testen Sie Video, Audio, Bildschirmfreigabe, Chat und Meeting-Steuerung - genau wie bei einer selbstgehosteten Instanz.",
      },
      dataSaved: {
        question: "Werden meine Daten gespeichert?",
        answer:
          "Nein. Die Demo speichert keine Daten. Wenn Sie gehen, ist Ihre Sitzung weg - keine Aufzeichnungen, keine Chat-Verläufe, nichts gespeichert.",
      },
      duration: {
        question: "Wie lange kann ich die Demo nutzen?",
        answer:
          "Kein Zeitlimit. Nutzen Sie die Demo so lange, wie Sie Bedrud evaluieren möchten. Wenn Sie ein dauerhaftes Setup möchten, ist das Self-Hosting in 60 Sekunden erledigt.",
      },
      inviteOthers: {
        question: "Kann ich andere zur Demo einladen?",
        answer:
          "Ja. Teilen Sie den Demo-Link mit Teamkollegen, und alle treten dem gleichen Raum bei. Ideal, um Bedrud mit Ihrem Team zu testen, bevor Sie es deployen.",
      },
    },
    selfHost: {
      text: "Lieber Ihren eigenen Server betreiben?",
      cta: "Installationsanleitung lesen",
    },
  },
  changelogPage: {
    meta: {
      title: "Änderungsprotokoll - Bedrud",
      description: "Versionsgeschichte und Updates für Bedrud.",
    },
    title: "Änderungsprotokoll",
    subtitle: "Was gibt es Neues bei Bedrud. Aktivität = Vertrauen.",
    viewOnGithub: "Auf GitHub ansehen",
    noReleases: "Noch keine Releases. Schauen Sie bald wieder vorbei!",
  },
  contributorsPage: {
    meta: {
      title: "Mitwirkende - Bedrud",
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
      title: "Kontakt - Bedrud",
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
  notFound: {
    title: "Seite nicht gefunden",
    description:
      "Die Seite, die Sie suchen, existiert nicht oder wurde verschoben.",
    backToHome: "Zurück zur Startseite",
  },
};
