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
    getStarted: "Commencer",
  },
  hero: {
    badge: "Open Source · Apache 2.0",
    kicker: "Visioconférences auto-hébergées. 200 Mo de RAM. Un binaire.",
    headline: "Visioconférences auto-hébergées en moins d'une minute",
    subtitle:
      "Un seul binaire, 200 Mo de RAM, utilisateurs illimités. Votre serveur, vos règles, vos données.",
    tryDemo: "Essayer la démo",
    installNow: "Copier la commande d'installation",
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
    meet: {
      title: "Rencontrer",
      description:
        "Vidéo et audio WebRTC cristallins avec suppression de bruit intégrée. Juste parler.",
    },
    scale: {
      title: "Évoluer",
      description:
        "Auto-hébergez pour un contrôle complet ou utilisez Bedrud Cloud. Utilisateurs illimités, aucune tarification par siège, jamais.",
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
    rows: {
      deploy: "Complexité de déploiement",
      deployBedrud: "Binaire unique",
      deployJitsi: "Docker Compose (8+ conteneurs)",
      deployBbb: "Serveur minimum 8 Go RAM",
      ram: "Utilisation RAM",
      ramBedrud: "~200Mo",
      ramJitsi: "~2Go",
      ramBbb: "~4Go+",
      install: "Temps d'installation",
      installBedrud: "< 1 minute",
      installJitsi: "~15 minutes",
      installBbb: "~30 minutes + config",
      nativeClients: "Clients natifs",
      nativeBedrud: "Web, Android, iOS",
      nativeJitsi: "Web, Android, iOS",
      nativeBbb: "Web uniquement",
      guestJoin: "Invité (Sans compte)",
      guestBedrud: "Oui",
      guestJitsi: "Oui",
      guestBbb: "Oui (approbation modérateur)",
      audioProcessing: "Traitement audio (Suppression bruit)",
      audioBedrud: "RNNoise / Krisp",
      audioJitsi: "Basique",
      audioBbb: "Basique",
      license: "Licence",
      licenseBedrud: "Apache 2.0",
      licenseJitsi: "Apache 2.0",
      licenseBbb: "LGPL 3.0",
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
      "Fonctionne sur n'importe quel Linux 64 bits, macOS ou Windows avec 200 Mo de RAM.",
  },
  platforms: {
    title: "Des apps natives, pas des wrappers web",
    subtitle:
      "De vraies apps natives — React sur le web, Kotlin sur Android, Swift sur iOS, Go sur le serveur. Pas d'Electron, pas de Cordova.",
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
      title: "Serveur",
      tech: "Go + WebRTC",
    },
    bots: {
      title: "Bots",
      tech: "Go SDK",
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
    title: "Prêt à posséder vos réunions?",
    subtitle:
      "Rejoignez des milliers de développeurs fatigués des prix par siège et du verrouillage fournisseur. Commencez en moins d'une minute.",
    installNow: "Copier la commande d'installation",
    readDocs: "Lire la documentation",
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
        "On a remplacé notre installation Jitsi par Bedrud en un après-midi. Un seul binaire, 200 Mo de RAM, et nos réunions sonnent même mieux.",
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
    product: "Produit",
    features: "Fonctionnalités",
    compare: "Comparaison",
    platforms: "Plateformes",
    openSource: "Open Source",
    selfHosted: "Auto-hébergé vs Cloud",
    demo: "Démo en direct",
    changelog: "Journal des modifications",
    developers: "Développeurs",
    quickstart: "Guide de démarrage rapide",
    docs: "Documentation",
    architecture: "Guide d'architecture",
    api: "Référence API",
    openSourceSection: "Open Source",
    contribute: "Contribuer",
    reportIssue: "Signaler un problème",
    resources: "Ressources",
    contributors: "Contributeurs",
    github: "GitHub",
    releases: "Versions",
    discord: "Discord",
    legal: "Juridique",
    license: "Licence",
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
    contact: "Contact",
    madeBy: "Créé avec soin par",
    backToTop: "Retour en haut",
    languages: "Langues",
  },
  privacy: {
    meta: {
      title: "Politique de confidentialité — Bedrud",
      description:
        "Découvrez comment Bedrud collecte, utilise et protège vos informations personnelles.",
    },
    title: "Politique de confidentialité",
    lastUpdated: "Dernière mise à jour : 20 février 2026",
    intro:
      "Chez Bedrud, nous prenons votre vie privée au sérieux. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre plateforme de visioconférence et les services associés.",
    dataCollection: {
      title: "Collecte de données",
      content:
        "Nous collectons les informations que vous nous fournissez directement, par exemple lorsque vous créez un compte, utilisez nos services ou nous contactez pour obtenir de l'aide. Cela peut inclure votre nom, votre adresse e-mail et vos données d'utilisation. Lorsque vous utilisez Bedrud en mode auto-hébergé, vos données restent entièrement sur votre propre infrastructure.",
    },
    dataUsage: {
      title: "Utilisation de vos données",
      content:
        "Nous utilisons les informations collectées pour fournir, maintenir et améliorer nos services, pour communiquer avec vous au sujet de votre compte et pour vous envoyer des avis techniques et des messages de support. Nous ne vendons pas vos informations personnelles à des tiers.",
    },
    dataStorage: {
      title: "Stockage et sécurité des données",
      content:
        "Nous mettons en œuvre des mesures de sécurité conformes aux normes de l'industrie pour protéger vos données. Pour les instances hébergées dans le cloud, les données sont chiffrées en transit et au repos. Les déploiements auto-hébergés vous donnent un contrôle total sur le stockage des données et les configurations de sécurité.",
    },
    thirdParties: {
      title: "Services tiers",
      content:
        "Nous pouvons utiliser des services tiers pour l'analyse, le signalement d'erreurs et l'infrastructure. Ces services ont leurs propres politiques de confidentialité. Nous ne partageons que les données minimales nécessaires au fonctionnement de ces services.",
    },
    cookies: {
      title: "Cookies et suivi",
      content:
        "Nous utilisons des cookies essentiels pour maintenir votre session et vos préférences. Nous n'utilisons pas de cookies de suivi tiers ni de traceurs publicitaires. Vous pouvez configurer votre navigateur pour refuser les cookies, bien que certaines fonctionnalités puissent ne pas fonctionner correctement.",
    },
    yourRights: {
      title: "Vos droits",
      content:
        "Vous avez le droit d'accéder à vos données personnelles, de les corriger ou de les supprimer. Vous pouvez exporter vos données à tout moment ou demander la suppression de votre compte. Pour les instances auto-hébergées, vous avez un contrôle complet sur toutes les données de vos serveurs.",
    },
    changes: {
      title: "Modifications de cette politique",
      content:
        "Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique sur cette page et en mettant à jour la date de dernière mise à jour. L'utilisation continue du service vaut acceptation de la politique mise à jour.",
    },
    contact: {
      title: "Nous contacter",
      content:
        "Si vous avez des questions concernant cette politique de confidentialité ou nos pratiques en matière de données, contactez-nous via notre dépôt GitHub ou écrivez-nous à privacy@bedrud.com.",
    },
  },
  terms: {
    meta: {
      title: "Conditions d'utilisation — Bedrud",
      description:
        "Lisez les conditions d'utilisation de la plateforme de visioconférence Bedrud.",
    },
    title: "Conditions d'utilisation",
    lastUpdated: "Dernière mise à jour : 20 février 2026",
    intro:
      "Ces conditions d'utilisation régissent votre utilisation de la plateforme de visioconférence Bedrud et des services associés. En accédant à ou en utilisant Bedrud, vous acceptez d'être lié par ces conditions.",
    acceptance: {
      title: "Acceptation des conditions",
      content:
        "En accédant à ou en utilisant Bedrud, vous acceptez de vous conformer à ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, vous ne pouvez pas accéder à nos services. Nous nous réservons le droit de modifier ces conditions à tout moment.",
    },
    services: {
      title: "Description des services",
      content:
        "Bedrud fournit une plateforme de visioconférence disponible en tant que service cloud et solution auto-hébergée. La plateforme comprend la visioconférence, la communication en temps réel et des outils de collaboration associés via des applications web, mobiles et serveur.",
    },
    accounts: {
      title: "Comptes utilisateurs",
      content:
        "Vous êtes responsable du maintien de la confidentialité de vos identifiants de compte et de toutes les activités qui se produisent sous votre compte. Vous devez fournir des informations exactes et complètes lors de la création d'un compte et les maintenir à jour.",
    },
    acceptableUse: {
      title: "Utilisation acceptable",
      content:
        "Vous acceptez de ne pas utiliser Bedrud à des fins illégales ou d'une manière qui pourrait endommager, désactiver ou altérer le service. Vous ne devez pas tenter d'obtenir un accès non autorisé à toute partie du service, à d'autres comptes ou aux systèmes informatiques connectés au service.",
    },
    intellectualProperty: {
      title: "Propriété intellectuelle",
      content:
        "Bedrud est un logiciel open source sous licence AGPLv3. Votre utilisation du logiciel est soumise aux termes de cette licence. Le nom Bedrud, le logo et l'identité visuelle sont des marques de theMadOrg et ne peuvent être utilisés sans autorisation.",
    },
    termination: {
      title: "Résiliation",
      content:
        "Nous pouvons résilier ou suspendre votre accès au service cloud à tout moment en cas de violation de ces conditions. En cas de résiliation, votre droit d'utilisation du service cesse immédiatement. Pour les instances auto-hébergées, vous conservez l'accès au logiciel selon les termes de la licence AGPLv3.",
    },
    liability: {
      title: "Limitation de responsabilité",
      content:
        "Dans toute la mesure permise par la loi, Bedrud et ses contributeurs ne seront pas responsables des dommages indirects, accessoires, spéciaux ou consécutifs découlant de votre utilisation du service. Le service est fourni « tel quel » sans garantie d'aucune sorte.",
    },
    governingLaw: {
      title: "Droit applicable",
      content:
        "Ces conditions sont régies par le droit applicable, sans tenir compte des principes de conflit de lois. Tout litige découlant de ces conditions sera résolu par négociation de bonne foi ou, si nécessaire, par arbitrage contraignant.",
    },
    changes: {
      title: "Modifications des conditions",
      content:
        "Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. Les changements importants seront communiqués via le service ou par e-mail. Votre utilisation continue de Bedrud après la publication des modifications vaut acceptation des conditions modifiées.",
    },
    contact: {
      title: "Nous contacter",
      content:
        "Si vous avez des questions concernant ces conditions d'utilisation, contactez-nous via notre dépôt GitHub ou écrivez-nous à legal@bedrud.com.",
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
    ready: "Prêt?",
    readyCta: "Commencer",
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
  },
  demoPage: {
    meta: {
      title: "Démo en direct — Bedrud",
      description:
        "Essayez Bedrud sans rien installer. Rejoignez une réunion démo en direct maintenant.",
    },
    title: "Essayer sans installer",
    subtitle:
      "Rejoignez une réunion Bedrud en direct maintenant. Pas de compte nécessaire.",
    tryNow: "Ouvrir la démo",
    noInstall:
      "Pas d'installation, pas de compte, pas d'engagement. Cliquez et rencontrez.",
    orSelfHost: "Préférez l'auto-hébergement?",
    installCta: "Lire le guide d'installation",
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
