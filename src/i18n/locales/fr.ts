export default {
  meta: {
    title: "Bedrud — Visioconférences, à votre façon",
    description:
      "Bedrud est une plateforme de visioconférence open source. Auto-hébergez-la ou utilisez notre cloud — un seul binaire incluant l'interface web, l'API REST et le serveur multimédia WebRTC.",
  },
  nav: {
    home: "Accueil",
    features: "Fonctionnalités",
    compare: "Comparaison",
    platforms: "Plateformes",
    openSource: "Open Source",
    docs: "Documentation",
    community: "Communauté",
    demo: "Démo",
    install: "Installer",
    download: "Télécharger",
    blog: "Blog",
    getStarted: "Commencer",
  },
  hero: {
    badge: "Open Source · Apache 2.0",
    kicker: "Alternative open source à Zoom. Tourne sur un VPS à 5€.",
    headline: "Vos réunions. Votre serveur. Vos règles.",
    subheadline:
      "Visioconférences auto-hébergées sur votre propre matériel. Un seul binaire, 512 Mo RAM, déploiement en 60 secondes. Des appels privés aux diffusions avec des milliers de spectateurs.",
    trustBar:
      "Approuvé par plus de 10 000 développeurs et équipes soucieux de leur confidentialité dans le monde entier.",
    installMicrocopy: "Collez dans votre terminal. Déployé en 60 secondes.",
    tryDemo: "Essayer sans installer",
    installNow: "Copier la commande d'installation",
    objectionBullets: {
      screenSharing: "Partage d'écran et enregistrement",
      sso: "Intégration SSO et OIDC",
      webrtc: "Propulsé par WebRTC, latence inférieure à une seconde",
    },
    getStarted: "Commencer",
    viewOnGithub: "Voir sur GitHub",
    copied: "Copié!",
    stars: "1.2k",
    starsLabel: "étoiles GitHub",
    contributorsLabel: "contributeurs",
    license: "Licencé Apache 2.0",
  },
  journey: {
    title: "De zéro à la réunion en quelques minutes",
    subtitle:
      "Installez. Partagez un lien. Commencez à parler. Voici comment ça se passe.",
    install: {
      title: "Installer",
      description:
        "Téléchargez un seul binaire ou tirez une image Docker. Une commande, zéro dépendance. Fonctionne en moins d'une minute.",
    },
    invite: {
      title: "Inviter",
      description:
        "Partagez un lien. Aucune inscription, aucun téléchargement, aucune friction. Les invités rejoignent instantanément depuis n'importe quel navigateur.",
    },
    host: {
      title: "Rencontrer",
      description:
        "Vidéo et audio WebRTC cristallins avec suppression de bruit intégrée. Partage d'écran, enregistrement et chat inclus.",
    },
  },
  whyBedrud: {
    title: "Conçu autrement",
    subtitle:
      "Pas de verrouillage. Pas de surcharge. Pas de surprises sur la facture.",
    noLockIn: {
      title: "Pas de verrouillage fournisseur",
      description:
        "Votre infrastructure. Vos données. Vos règles. Déployez sur n'importe quel serveur, migrez quand vous voulez. Pas de formats propriétaires, pas de frais de sortie, pas de dépendance cloud.",
    },
    singleBinary: {
      title: "Binaire unique",
      description:
        "Un fichier. Une commande. Zéro dépendance. Pas de Docker, pas de Kubernetes, pas de cauchemars de déploiement le vendredi après-midi.",
    },
    noPerSeat: {
      title: "Pas de tarification par siège",
      description:
        "5 utilisateurs ou 5 000. Le prix est le même : zéro. Pas de clés de licence, pas de compteurs de sièges, pas de boutons 'contacter les ventes'.",
    },
  },
  comparison: {
    title: "Comparez Bedrud aux alternatives",
    subtitle: "Visioconférences auto-hébergées sans complexité.",
    feature: "Fonctionnalité",
    bedrud: "Bedrud",
    jitsi: "Jitsi Meet",
    bbb: "BigBlueButton",
    sections: {
      deployment: "Déploiement",
      features: "Fonctionnalités",
      integrations: "Intégrations & Évolutivité",
      licensing: "Licence & Communauté",
    },
    rows: {
      deploy: "Complexité de déploiement",
      deployBedrud: "Binaire unique",
      deployJitsi: "Docker Compose (8+ conteneurs)",
      deployBbb: "Serveur minimum 8 Go RAM",
      ram: "Utilisation RAM",
      ramBedrud: "512 Mo",
      ramJitsi: "~2Go",
      ramBbb: "~4Go+",
      install: "Temps d'installation",
      installBedrud: "< 1 minute",
      installJitsi: "~15 minutes",
      installBbb: "~30 minutes + config",
      nativeClients: "Clients natifs",
      nativeClientsBedrud: "Web, Android, iOS",
      nativeClientsJitsi: "Web, Android, iOS",
      nativeClientsBbb: "Web uniquement",
      guestJoin: "Invité (Sans compte)",
      guestJoinBedrud: "Oui",
      guestJoinJitsi: "Oui",
      guestJoinBbb: "Oui (approbation modérateur)",
      audioProcessing: "Traitement audio (Suppression bruit)",
      audioProcessingBedrud: "RNNoise / Krisp",
      audioProcessingJitsi: "Basique",
      audioProcessingBbb: "Basique",
      screenShare: "Partage d'écran",
      screenShareBedrud: "Intégré",
      screenShareJitsi: "Intégré",
      screenShareBbb: "Intégré",
      recording: "Enregistrement",
      recordingBedrud: "Enregistrement côté serveur",
      recordingJitsi: "Via Jibri (configuration supplémentaire)",
      recordingBbb: "Intégré + export de notes",
      sipIntegration: "SIP / Appel téléphonique",
      sipIntegrationBedrud: "Non",
      sipIntegrationJitsi: "Passerelle SIP/Jibri",
      sipIntegrationBbb: "Passerelle SIP",
      whiteboard: "Tableau blanc",
      whiteboardBedrud: "Non",
      whiteboardJitsi: "Non",
      whiteboardBbb: "Tableau blanc intégré",
      maxUsers: "Utilisateurs simultanés max",
      maxUsersBedrud: "50+ par salle",
      maxUsersJitsi: "100+ avec optimisation",
      maxUsersBbb: "300+ par salle",
      license: "Licence",
      licenseBedrud: "Apache 2.0",
      licenseJitsi: "Apache 2.0",
      licenseBbb: "LGPL 3.0",
      communitySize: "Communauté & Écosystème",
      communitySizeBedrud: "En croissance",
      communitySizeJitsi: "Grande, mature",
      communitySizeBbb: "Grande, académique",
    },
  },
  features: {
    title: "Tout est inclus",
    subtitle:
      "Vidéo, audio, auth, bots — tout est inclus. Pas besoin d'architecture microservices.",
    e2eEncryption: {
      title: "Chiffré par défaut",
      description:
        "Tous les médias sont chiffrés en transit via DTLS et SRTP. Vos données restent sur vos serveurs en mode auto-hébergé. Aucune télémétrie tierce, aucune collecte de données.",
    },
    webrtcVideo: {
      title: "Vidéo WebRTC",
      description:
        "Appels vidéo avec moins d'une seconde de latence grâce au serveur média WebRTC intégré. Débit adaptatif pour les connexions instables.",
    },
    multiPlatform: {
      title: "Multiplateforme",
      description:
        "Applications natives pour Web, Android et iOS. Pas des wrappers — de vraies applications natives. Plus un SDK côté serveur pour l'automatisation.",
    },
    flexibleAuth: {
      title: "Authentification flexible",
      description:
        "Authentification intégrée qui fonctionne immédiatement, plus intégration SSO et OAuth. Connectez votre fournisseur d'identité en quelques minutes.",
    },
    botAgents: {
      title: "Agents bots",
      description:
        "Les bots rejoignent les réunions en tant que participants. Transcription, traduction en temps réel, envoi vers votre CRM ou création de workflows personnalisés avec le SDK Go.",
    },
    selfHosted: {
      title: "Votre infrastructure ou la nôtre",
      description:
        "Exécutez sur vos serveurs et gardez le contrôle total. Ou utilisez Bedrud Cloud sans vous soucier de l'ops. Même produit, mêmes fonctionnalités.",
    },
  },
  install: {
    title: "Une commande. Terminé.",
    subtitle: "Copiez. Collez. Ça tourne. C'est tout.",
    command: "curl -fsSL https://get.bedrud.org | bash",
    dockerCommand: "docker run -d -p 8080:8080 bedrud/bedrud",
    or: "ou",
    requirements:
      "Fonctionne sur n'importe quel Linux 64 bits, macOS ou Windows avec 512 Mo de RAM (~200 Mo au repos).",
  },
  platforms: {
    title: "Des apps natives, pas des wrappers web",
    subtitle:
      "De vraies apps natives — React sur le web, Kotlin sur Android, Swift sur iOS, Rust sur le bureau, Go sur le serveur. Pas d'Electron, pas de Cordova.",
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
      title: "Serveur",
      tech: "Go + WebRTC",
    },
    bots: {
      title: "Bots",
      tech: "Python SDK",
    },
    status: "Production",
  },
  openSource: {
    title: "Lisez le code source. Prenez le contrôle.",
    subtitle:
      "Chaque ligne de code est publique. Inspectez, auditez, contribuez ou forkez. Licence Apache 2.0 — utilisation commerciale ou autre.",
    license: "Apache 2.0",
    github: "Voir sur GitHub",
    docs: "Lire la documentation",
  },
  cta: {
    title: "Arrêtez de louer vos réunions",
    subtitle:
      "Déployez sur n'importe quel VPS à 5$ en 60 secondes. Sans carte bancaire, sans verrou fournisseur, sans serveurs tiers.",
    installNow: "Déployer votre serveur",
    getStarted: "Lire le Quickstart",
    readDocs: "Voir le Quickstart",
    starGithub: "Étoile sur GitHub",
  },
  faq: {
    title: "Questions fréquentes",
    subtitle: "Des questions techniques, des réponses directes.",
    updates: {
      question: "Comment fonctionnent les mises à jour ?",
      answer:
        "Relancez la commande d'installation. Bedrud remplace le binaire en place — pas de gestionnaires de paquets, pas de chaînes de dépendances. Vous pouvez aussi activer les mises à jour automatiques via un seul flag de configuration.",
    },
    encryption: {
      question: "Est-ce chiffré de bout en bout ?",
      answer:
        "Tous les médias sont chiffrés en transit via DTLS et SRTP (le standard WebRTC). Pour les déploiements auto-hébergés, vous contrôlez le serveur et toutes les données. Le chiffrement de bout en bout pour les appels pair-à-pair est en préparation.",
    },
    network: {
      question: "Quelle est la configuration réseau et ports requise ?",
      answer:
        "Port 80/443 pour HTTP/WebSocket et une plage UDP configurable (par défaut 50000–60000) pour les médias WebRTC. Derrière un NAT, configurez un serveur STUN/TURN — Bedrud inclut la documentation pour coturn.",
    },
    proxy: {
      question: "Puis-je l'utiliser derrière un proxy inverse ?",
      answer:
        "Oui. Nginx, Caddy, Traefik — tous fonctionnent. La documentation inclut des configurations copier-coller pour chacun. Transférez simplement les connexions WebSocket et définissez les en-têtes appropriés.",
    },
    cloudVsSelfHosted: {
      question:
        "Quelle est la différence entre l'auto-hébergement et Bedrud Cloud ?",
      answer:
        "Même produit, mêmes fonctionnalités. L'auto-hébergement fonctionne sur votre infrastructure avec un contrôle total des données. Bedrud Cloud gère l'exploitation, les mises à jour et la mise à l'échelle pour vous. Sans verrouillage — migrez à tout moment.",
    },
  },
  testimonials: {
    title: "Adopté par les développeurs",
    subtitle: "Ce que les gens disent de Bedrud.",
    one: {
      quote:
        "On a remplacé notre installation Jitsi par Bedrud en un après-midi. Un seul binaire, 512 Mo de RAM, et nos réunions sonnent même mieux.",
      name: "Lena K.",
      role: "Lead DevOps dans une entreprise SaaS européenne",
      initials: "LK",
    },
    two: {
      quote:
        "Pas de tarif par siège — c'est ce qui a convaincu. On est passé de 20 à 200 utilisateurs sans un seul email de licence.",
      name: "Marcus T.",
      role: "CTO dans une startup 100% remote",
      initials: "MT",
    },
    three: {
      quote:
        "J'ai déployé Bedrud sur un VPS à 5€ et ça marchait directement. Le SDK bot nous a permis d'intégrer les transcriptions dans notre CRM en une journée.",
      name: "Priya S.",
      role: "Ingénieure senior dans une fintech",
      initials: "PS",
    },
  },
  footer: {
    brand: "Bedrud",
    tagline:
      "Visioconférences pour les équipes qui se soucient de la confidentialité. Auto-hébergé ou cloud.",
    platform: "Plateforme",
    features: "Fonctionnalités",
    compare: "Comparaison",
    demo: "Démo en direct",
    docs: "Documentation",
    api: "Référence API",
    download: "Télécharger",
    about: "À propos",
    resources: "Ressources",
    blog: "Blog",
    changelog: "Journal des modifications",
    contribute: "Contribuer",
    reportIssue: "Signaler un problème",
    contact: "Contact",
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
  },
  privacy: {
    meta: {
      title: "Politique de confidentialité — Bedrud",
      description:
        "Comment Bedrud gère vos données. Version courte : auto-hébergé signifie que vos données restent sur votre serveur.",
    },
    title: "Politique de confidentialité",
    lastUpdated: "Dernière mise à jour : 17 avril 2026",
    intro:
      "Bedrud est un logiciel open source de visioconférence. Quand vous l'auto-hébergez, vos données ne touchent jamais nos serveurs. Cette politique couvre le site bedrud.org et l'instance de démo publique. Si vous auto-hébergez Bedrud, vous contrôlez vos propres données.",
    dataCollection: {
      title: "Ce que nous collectons",
      content:
        "Sur le site web (bedrud.org) : rien. Pas de cookies, pas de traqueurs, pas d'analytics. Sur la démo publique : votre nom d'affichage et votre adresse IP tant que vous êtes connecté. C'est tout. Pas d'e-mail, pas de téléphone, pas de données personnelles. Quand vous auto-hébergez Bedrud, toutes les données restent sur votre infrastructure. Nous ne les voyons jamais.",
    },
    dataUsage: {
      title: "Comment nous utilisons les données",
      content:
        "Les données de connexion à la démo servent uniquement à acheminer votre vidéo et audio en temps réel. Elles ne sont ni enregistrées, ni stockées, ni analysées. Nous ne construisons pas de profils utilisateurs, ne servons pas de publicité ciblée, et ne vendons pas de données. Jamais.",
    },
    dataStorage: {
      title: "Stockage des données",
      content:
        "La démo publique ne persiste aucune donnée. Déconnectez-vous et votre session disparaît — pas d'enregistrements, pas d'historique de chat. Les instances auto-hébergées stockent les données dans SQLite sur votre serveur. Vous choisissez la stratégie de sauvegarde et de rétention. Nous n'avons aucun accès.",
    },
    thirdParties: {
      title: "Services tiers",
      content:
        "Aucun. Bedrud n'envoie aucune requête sortante après le téléchargement. Pas d'analytics, pas de rapports de crash, pas de télémétrie. Le site ne charge aucun script tiers. Vérifiez par vous-même — le code source est sur GitHub.",
    },
    cookies: {
      title: "Cookies et stockage local",
      content:
        "Le site utilise localStorage pour votre préférence de thème (sombre/clair) et votre choix de langue. C'est tout. Pas de cookies de suivi, pas d'identifiants publicitaires. La démo utilise un cookie de session qui expire quand vous fermez l'onglet.",
    },
    yourRights: {
      title: "Vos droits",
      content:
        "Puisque nous ne collectons pas de données personnelles, il n'y a rien à consulter, corriger ou supprimer de notre côté. Fermez l'onglet de la démo et vos données de session ont déjà disparu. Les utilisateurs auto-hébergés ont un contrôle total sur toutes les données de leurs serveurs — export, sauvegarde, suppression, ce dont vous avez besoin.",
    },
    changes: {
      title: "Modifications de cette politique",
      content:
        "Nous mettrons à jour cette page si nos pratiques de données changent. Étant donné que nous collectons presque rien, des modifications sont improbables. La date en haut de la page reflète la révision la plus récente.",
    },
    contact: {
      title: "Contact",
      content:
        "Des questions ? Ouvrez un ticket sur GitHub ou écrivez à privacy@bedrud.com. Nous sommes aussi sur Discord si vous préférez le chat en direct.",
    },
  },
  terms: {
    meta: {
      title: "Conditions d'utilisation — Bedrud",
      description:
        "Conditions d'utilisation du site bedrud.org et de la démo publique. Les utilisateurs auto-hébergés sont soumis à la licence Apache 2.0.",
    },
    title: "Conditions d'utilisation",
    lastUpdated: "Dernière mise à jour : 17 avril 2026",
    intro:
      "Ces conditions couvrent le site bedrud.org et l'instance de démo publique à demo.bedrud.org. Si vous téléchargez et auto-hébergez Bedrud, la licence Apache 2.0 régit votre utilisation du logiciel.",
    acceptance: {
      title: "Utiliser Bedrud signifie que vous acceptez ces conditions",
      content:
        "En visitant bedrud.org ou en utilisant la démo publique, vous acceptez ces conditions. Si vous n'êtes pas d'accord, n'utilisez pas la démo. C'est simple.",
    },
    services: {
      title: "Ce que Bedrud propose",
      content:
        "Nous proposons ce site avec de la documentation et des liens de téléchargement, ainsi qu'une instance de démo publique pour évaluer le logiciel. Le logiciel de visioconférence proprement dit est open source sous licence Apache 2.0. Téléchargez-le, modifiez-le, faites-le tourner vous-même.",
    },
    accounts: {
      title: "Comptes",
      content:
        "Le site ne nécessite pas de compte. La démo ne nécessite pas de compte. Les instances auto-hébergées peuvent avoir leur propre système de comptes — c'est votre choix, puisque c'est vous qui gérez le serveur.",
    },
    acceptableUse: {
      title: "N'abusez pas de la démo",
      content:
        "N'utilisez pas la démo publique pour du contenu illégal, du spam, du harcèlement ou quoi que ce soit qui dégrade l'expérience des autres. Nous nous réservons le droit d'exclure les utilisateurs abusifs du salon de démo. Cela ne s'applique pas aux instances auto-hébergées — vous fixez vos propres règles.",
    },
    intellectualProperty: {
      title: "Licence open source",
      content:
        "Bedrud est sous licence Apache 2.0. Utilisez-le, modifiez-le, distribuez-le — y compris commercialement. Le nom et le logo Bedrud sont des marques de theMadOrg. Vous pouvez les utiliser pour faire référence au logiciel, mais pas pour tromper sur votre relation avec le projet.",
    },
    termination: {
      title: "Accès",
      content:
        "Nous pouvons révoquer l'accès à la démo publique à tout moment en cas d'abus. Nous pouvons mettre hors ligne le site si nécessaire. Mais une fois le binaire téléchargé, il est vôtre sous la licence Apache 2.0. Nous ne pouvons pas révoquer cela.",
    },
    liability: {
      title: "Pas de garantie",
      content:
        "Bedrud est fourni tel quel. Nous ne garantissons pas qu'il fonctionne parfaitement dans tous les environnements. Nous ne sommes pas responsables des temps d'arrêt, des pertes de données ou de tout dommage lié à l'utilisation du logiciel. Consultez la licence Apache 2.0 pour le texte juridique complet.",
    },
    governingLaw: {
      title: "Droit applicable",
      content:
        "Ces conditions sont régies par le droit applicable. En cas de litige, nous préférons résoudre les choses via les issues GitHub ou une communication directe avant de faire appel aux avocats.",
    },
    changes: {
      title: "Mises à jour",
      content:
        "Nous pouvons mettre à jour ces conditions. Si oui, nous modifierons la date sur cette page. L'utilisation continue de la démo ou du site après les modifications signifie que vous les acceptez.",
    },
    contact: {
      title: "Contact",
      content:
        "Des questions sur ces conditions ? Écrivez à legal@bedrud.com ou ouvrez un ticket sur GitHub.",
    },
  },
  docs: {
    documentation: "Documentation",
    onThisPage: "Sur cette page",
    previous: "Précédent",
    next: "Suivant",
    backToHome: "Retour à l'accueil",
    searchPlaceholder: "Rechercher…",
    searchButton: "Rechercher",
    noResults: "Aucun résultat",
    loading: "Chargement…",
    pressShortcut: "Appuyez sur",
    clearSearch: "Effacer",
    searchDocs: "Rechercher dans la documentation",
    notFound: "Document non trouvé",
    sections: {
      gettingStarted: "Premiers pas",
      architecture: "Architecture",
      backend: "Backend",
      api: "API",
      guides: "Guides",
      contributing: "Contribution",
    },
  },
  installPage: {
    meta: {
      title: "Installer Bedrud — Déploiement en une commande",
      description:
        "Déployez Bedrud sur votre serveur en moins d'une minute. Binaire unique, 512 Mo de RAM, sans Docker.",
    },
    title: "Installer Bedrud",
    subtitle:
      "Déployez la visioconférence sur votre serveur en moins d'une minute. Un binaire, zéro dépendance.",
  },
  downloadPage: {
    meta: {
      title: "Télécharger Bedrud — Applications Desktop & Mobile",
      description:
        "Téléchargez Bedrud pour Linux, macOS, Windows, Android ou iOS. Applications natives ou accès navigateur sans installation.",
    },
    title: "Télécharger Bedrud",
    subtitle:
      "Applications natives pour chaque plateforme. Ou ouvrez simplement un lien de réunion dans votre navigateur.",
    noInstall:
      "Aucune installation nécessaire. Téléchargez, rendez exécutable, lancez.",
    flathub: "Installer depuis Flathub",
    brew: "Installer via Homebrew",
    winget: "Installer via le gestionnaire de paquets Windows",
    installer: "Installateur",
    portable: "Portable",
    playStore: "Disponible sur Google Play",
    appStore: "Disponible sur l'App Store",
    sideload: "Télécharger APK/IPA depuis GitHub Releases",
    browserZero: "Sans installation",
    browserDesc:
      "Ouvrez n'importe quel lien de réunion dans Chrome, Firefox, Edge ou Safari. Aucun téléchargement requis.",
    tryDemo: "Essayer la démo en direct",
    otherPlatforms: "Voir toutes les plateformes et gestionnaires de paquets",
    server: "Installation du serveur",
    serverDesc: "Déployez le serveur Bedrud sur votre propre matériel.",
    serverGuide: "Guide d'installation du serveur",
    platform: {
      linux: "Linux",
      mac: "macOS",
      windows: "Windows",
      android: "Android",
      ios: "iOS",
      browser: "Navigateur",
    },
  },
  aboutPage: {
    meta: {
      title: "À propos de Bedrud",
      description:
        "Découvrez l'équipe et la mission derrière Bedrud — visioconférence open source pour tous.",
    },
    title: "À propos de Bedrud",
    subtitle:
      "Visioconférence open source créée par des personnes qui croient que la confidentialité devrait être la norme.",
    mission: {
      title: "Notre mission",
      text: "Bedrud existe car les visioconférences ne devraient pas nécessiter de confier vos données à la Big Tech. Nous croyons qu'un seul binaire, un VPS abordable et du code open source peuvent remplacer des contrats SaaS à des millions — sans sacrifier la qualité ni les fonctionnalités. La confidentialité n'est pas une fonctionnalité. C'est le fondement.",
    },
    team: {
      title: "Équipe principale",
      subtitle: "Les personnes derrière Bedrud.",
    },
  },
  blog: {
    meta: {
      title: "Blog — Bedrud",
      description:
        "Mises à jour, analyses techniques et guides de l'équipe Bedrud.",
    },
    title: "Blog",
    subtitle: "Mises à jour, analyses techniques et guides de l'équipe Bedrud.",
    noPosts: "Pas encore d'articles. Revenez bientôt!",
    backToBlog: "Retour au Blog",
  },
  skipToContent: "Aller au contenu",
  mobileNav: {
    navigation: "Navigation",
    language: "Language",
    getStarted: "Commencer",
  },
  featuresPage: {
    meta: {
      title: "Fonctionnalités — Bedrud",
      description:
        "Découvrez les fonctionnalités de Bedrud : binaire unique, qualité WebRTC, accès invité, passkeys, contrôle admin, traitement audio, agents bots et support multiplateforme.",
    },
    title: "Fonctionnalités",
    subtitle: "Chaque fonction résout un problème réel.",
    sectionTitle: "Tout ce dont vous avez besoin, rien de superflu",
    sectionSubtitle:
      "L'infrastructure de visioconférence en un seul binaire. Pas de dépendances externes, pas de tarification par siège, pas de verrouillage fournisseur.",
    groups: {
      infra: "Déploiement & Infrastructure",
      media: "Réunions & Médias",
      access: "Accès & Contrôle",
      extend: "Étendre",
    },
    learnMore: "En savoir plus",
    stats: {
      ram: "512 Mo RAM",
      binary: "1 Binaire",
      auth: "6 Méthodes d'auth",
      platforms: "5 Plateformes",
    },
    guestJoin: {
      pain: "Fatigué de forcer les invités à créer des comptes juste pour un appel de 15 minutes?",
      title: "Invité — Pas de compte nécessaire",
      description:
        "Partagez un lien, ils cliquent, ils entrent. Pas de formulaires d'inscription, pas de mots de passe, pas de friction. Code d'accès facultatif pour la sécurité.",
    },
    singleBinary: {
      pain: "L'installation de l'infrastructure vidéo ne devrait pas nécessiter un diplôme en DevOps.",
      title: "Déploiement binaire unique",
      description:
        "Un téléchargement, une commande, en cours d'exécution. Pas de Docker Compose, pas de manifests Kubernetes, pas de guides en 12 étapes. Juste un binaire qui fonctionne.",
      snippet: "$ curl -sSL bedrud.dev/install.sh | sh",
    },
    webrtc: {
      pain: "Les appels vidéo qui laguent, gèlent ou se coupent ruinent les réunions.",
      title: "Qualité WebRTC",
      description:
        "Serveur média WebRTC intégré avec débit binaire adaptatif, simulcast et SVC. Vidéo et audio cristallins sur n'importe quelle connexion.",
    },
    passkeys: {
      pain: "Les mots de passe fuient. Les jetons MFA sont phishés.",
      title: "Passkeys + OAuth",
      description:
        "Passkeys FIDO2 pour l'authentification sans mot de passe. OAuth 2.0 / OIDC pour SSO avec votre fournisseur d'identité existant. Pas de bases de données de mots de passe à compromettre.",
    },
    admin: {
      pain: "Gérer une plateforme de réunion sans bons outils est douloureux.",
      title: "Tableau de bord admin",
      description:
        "Gestion des salles, des utilisateurs, des analyses d'utilisation et de la configuration — le tout depuis une interface web propre. Pas de devinage CLI.",
    },
    audio: {
      pain: "Le bruit de fond dans les réunions est distrayant et non professionnel.",
      title: "Traitement audio",
      description:
        "Suppression de bruit intégrée propulsée par RNNoise. Intégration Krisp facultative pour la suppression de bruit IA premium. Audio propre, chaque appel.",
    },
    bots: {
      pain: "Les tâches manuelles de réunion gaspillent du temps — enregistrement, transcription, notes.",
      title: "Agents bots",
      description:
        "Bots programmables rejoignent les réunions via le Go SDK. Automatisez la transcription, la traduction, l'enregistrement, les intégrations CRM et les workflows personnalisés.",
    },
    multiPlatform: {
      pain: "Votre équipe utilise différents appareils. Votre plateforme de réunion aussi.",
      title: "Multiplateforme",
      description:
        "Applications natives pour Web (React), Android (Kotlin) et iOS (Swift). Expérience cohérente, performance native de la plateforme.",
    },
    e2eEncryption: {
      pain: "Le contenu des réunions transitant par votre serveur doit rester privé.",
      title: "Chiffrement de bout en bout",
      description:
        "Chiffrement E2E optionnel pour les salles. Le serveur relaie les médias chiffrés — seuls les participants peuvent déchiffrer.",
    },
    autoTls: {
      pain: "Les certificats SSL ne devraient pas nécessiter un tutoriel.",
      title: "TLS automatique et HTTPS",
      description:
        "Provisionnement et renouvellement automatiques Let's Encrypt. Certificats auto-signés pour les réseaux internes.",
    },
    airGapped: {
      pain: "Et si vos serveurs ne pouvaient pas accéder à internet?",
      title: "Prêt pour l'air-gap et le hors-ligne",
      description:
        "Aucune requête sortante après le téléchargement. SQLite intégré. Fonctionne sur une infrastructure qui ne touche jamais l'internet public.",
    },
  },
  demoPage: {
    meta: {
      title: "Démo en direct — Bedrud",
      description:
        "Essayez Bedrud sans rien installer. Rejoignez une réunion démo en direct maintenant.",
    },
    hero: {
      headline: "Essayez Bedrud maintenant",
      subtitle:
        "Rejoignez une réunion en direct dans votre navigateur. Pas de compte, pas de téléchargement, pas d'attente.",
    },
    cta: {
      tryNow: "Ouvrir la démo en direct",
      noInstall:
        "Pas d'installation. Pas de compte. Pas d'engagement. Cliquez et rejoignez.",
    },
    preview: {
      caption: "Ce que vous verrez en rejoignant la démo",
    },
    features: {
      instantJoin: {
        title: "Rejoindre instantanément",
        description:
          "Cliquez sur le lien et vous êtes dans le salon. Pas de formulaires d'inscription, pas de vérification par e-mail, pas d'app à installer. Fonctionne dans tous les navigateurs modernes.",
      },
      noAccount: {
        title: "Pas de compte requis",
        description:
          "Choisissez un nom d'affichage et commencez à discuter. Quand vous avez terminé, fermez l'onglet. Rien ne persiste.",
      },
      webrtc: {
        title: "Qualité WebRTC réelle",
        description:
          "La démo utilise le même moteur que Bedrud en auto-hébergement. Latence sub-seconde, débit adaptatif, audio cristallin.",
      },
      e2e: {
        title: "Chiffrage de bout en bout",
        description:
          "Activez le chiffrement E2E dans les paramètres du salon. Votre vidéo et audio sont chiffrés avant de quitter votre navigateur.",
      },
    },
    faq: {
      whatHappens: {
        question: "Que se passe-t-il dans la démo ?",
        answer:
          "Vous rejoignez un salon de réunion partagé exécutant la pile Bedrud complète. Testez la vidéo, l'audio, le partage d'écran, le chat et les contrôles de réunion — identique à une instance auto-hébergée.",
      },
      dataSaved: {
        question: "Mes données sont-elles sauvegardées ?",
        answer:
          "Non. La démo ne persiste aucune donnée. Quand vous partez, votre session disparaît — pas d'enregistrements, pas d'historique de chat, rien de stocké.",
      },
      duration: {
        question: "Combien de temps puis-je utiliser la démo ?",
        answer:
          "Pas de limite de temps. Utilisez la démo aussi longtemps que nécessaire pour évaluer Bedrud. Quand vous voulez un setup permanent, l'auto-hébergement prend 60 secondes.",
      },
      inviteOthers: {
        question: "Puis-je inviter d'autres personnes à la démo ?",
        answer:
          "Oui. Partagez le lien de démo avec vos collègues et tout le monde rejoint le même salon. Idéal pour tester Bedrud avec votre équipe avant le déploiement.",
      },
    },
    selfHost: {
      text: "Préférez faire tourner votre propre serveur ?",
      cta: "Lire le guide d'installation",
    },
  },
  changelogPage: {
    meta: {
      title: "Journal des modifications — Bedrud",
      description: "Historique des versions et mises à jour de Bedrud.",
    },
    title: "Journal des modifications",
    subtitle: "Quoi de neuf dans Bedrud. Activité = confiance.",
    viewOnGithub: "Voir sur GitHub",
    noReleases: "Aucune release encore. Revenez bientôt!",
  },
  contributorsPage: {
    meta: {
      title: "Contributeurs — Bedrud",
      description: "Découvrez les personnes qui construisent Bedrud.",
    },
    title: "Contributeurs",
    subtitle: "Bedrud est construit par la communauté.",
    joinThem: "Rejoignez-les",
    joinCta: "Contribuer sur GitHub",
    contributions: "contributions",
  },
  contactPage: {
    meta: {
      title: "Contact — Bedrud",
      description: "Contactez l'équipe Bedrud.",
    },
    title: "Contact",
    subtitle: "Contactez-nous par l'un de ces canaux.",
    github: {
      title: "Issues GitHub",
      description:
        "Rapports de bugs, demandes de fonctionnalités et contributions de code.",
      cta: "Ouvrir une issue",
    },
    discord: {
      title: "Chat communautaire",
      description:
        "Posez des questions, partagez des idées et obtenez de l'aide de la communauté.",
      cta: "Rejoindre Discord",
    },
    email: {
      title: "Email",
      description:
        "Pour les partenariats, problèmes de sécurité ou demandes privées.",
      cta: "Envoyer un email",
    },
  },
};
