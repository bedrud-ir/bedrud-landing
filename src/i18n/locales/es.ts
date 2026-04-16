export default {
  meta: {
    title: "Bedrud — Videollamadas a tu manera",
    description:
      "Bedrud es una plataforma de videollamadas de código abierto. Alójala tú mismo o usa nuestra nube — un solo binario que empaqueta interfaz web, API REST y servidor de medios WebRTC.",
  },
  nav: {
    home: "Inicio",
    features: "Características",
    compare: "Comparar",
    platforms: "Plataformas",
    openSource: "Código Abierto",
    docs: "Documentación",
    community: "Comunidad",
    demo: "Demo",
    getStarted: "Comenzar",
  },
  hero: {
    badge: "Código Abierto · Apache 2.0",
    kicker: "Videollamadas autoalojadas. 200MB RAM. Un binario.",
    headline: "Videoconferencias self-hosted en menos de un minuto",
    subtitle:
      "Un binario, 200MB de RAM, usuarios ilimitados. Tu servidor, tus reglas, tus datos.",
    tryDemo: "Probar demo",
    installNow: "Copiar comando de instalación",
    getStarted: "Comenzar",
    viewOnGithub: "Ver en GitHub",
    copied: "¡Copiado!",
    stars: "1.2k",
    starsLabel: "Estrellas en GitHub",
    contributorsLabel: "colaboradores",
    license: "Licenciado Apache 2.0",
  },
  journey: {
    title: "De cero a reunir en minutos",
    subtitle: "Instala. Comparte un enlace. Empieza a hablar. Así de simple.",
    install: {
      title: "Instalar",
      description:
        "Descarga un solo binario o tira una imagen de Docker. Un comando, cero dependencias. Funciona en menos de un minuto.",
    },
    invite: {
      title: "Invitar",
      description:
        "Comparte un enlace. Sin registros, sin descargas, sin fricción. Los invitados se unen instantáneamente desde cualquier navegador.",
    },
    meet: {
      title: "Reunirse",
      description:
        "Video y audio WebRTC cristalinos con cancelación de ruido incorporada. Solo habla.",
    },
    scale: {
      title: "Escalar",
      description:
        "Aloja tú mismo para control total o usa Bedrud Cloud. Usuarios ilimitados, sin precios por asiento, nunca.",
    },
  },
  whyBedrud: {
    title: "Construido diferente",
    subtitle: "Sin lock-in. Sin exceso. Sin sorpresas en la factura.",
    noLockIn: {
      title: "Sin bloqueo de proveedor",
      description:
        "Tu infraestructura. Tus datos. Tus reglas. Despliega en cualquier servidor, migra cuando quieras. Sin formatos propietarios, sin tarifas de salida, sin dependencia de la nube.",
    },
    singleBinary: {
      title: "Binario único",
      description:
        "Un archivo. Un comando. Cero dependencias. Sin Docker, sin Kubernetes, sin pesadillas de despliegue los viernes por la tarde.",
    },
    noPerSeat: {
      title: "Sin precios por asiento",
      description:
        "5 usuarios o 5.000. El precio es el mismo: cero. Sin claves de licencia, sin contadores de usuarios, sin botones de 'contactar ventas'.",
    },
  },
  comparison: {
    title: "Mira cómo se compara Bedrud",
    subtitle: "Videollamadas autoalojadas sin complejidad.",
    feature: "Característica",
    bedrud: "Bedrud",
    jitsi: "Jitsi Meet",
    bbb: "BigBlueButton",
    rows: {
      deploy: "Complejidad de despliegue",
      deployBedrud: "Binario único",
      deployJitsi: "Docker Compose (8+ contenedores)",
      deployBbb: "Servidor mínimo 8GB RAM",
      ram: "Uso de RAM",
      ramBedrud: "~200MB",
      ramJitsi: "~2GB",
      ramBbb: "~4GB+",
      install: "Tiempo de instalación",
      installBedrud: "< 1 minuto",
      installJitsi: "~15 minutos",
      installBbb: "~30 minutos + config",
      nativeClients: "Clientes nativos",
      nativeBedrud: "Web, Android, iOS",
      nativeJitsi: "Web, Android, iOS",
      nativeBbb: "Solo Web",
      guestJoin: "Invitado (Sin cuenta)",
      guestBedrud: "Sí",
      guestJitsi: "Sí",
      guestBbb: "Sí (aprobación moderador)",
      audioProcessing: "Procesamiento de audio (Cancelación ruido)",
      audioBedrud: "RNNoise / Krisp",
      audioJitsi: "Básico",
      audioBbb: "Básico",
      license: "Licencia",
      licenseBedrud: "Apache 2.0",
      licenseJitsi: "Apache 2.0",
      licenseBbb: "LGPL 3.0",
    },
  },
  features: {
    title: "Todo incluido",
    subtitle:
      "Video, audio, autenticación, bots — todo incluido. Sin arquitectura de microservicios.",
    e2eEncryption: {
      title: "Cifrado por defecto",
      description:
        "Todos los medios se cifran en tránsito mediante DTLS y SRTP. Tus datos se quedan en tus servidores en modo self-hosted. Sin telemetría de terceros, sin recolección de datos.",
    },
    webrtcVideo: {
      title: "Vídeo WebRTC",
      description:
        "Videollamadas con menos de un segundo de latencia gracias al servidor de medios WebRTC integrado. Bitrate adaptativo para conexiones inestables.",
    },
    multiPlatform: {
      title: "Multiplataforma",
      description:
        "Apps nativas para Web, Android e iOS. No wrappers — apps nativas de verdad. Más un SDK del lado del servidor para automatización.",
    },
    flexibleAuth: {
      title: "Autenticación flexible",
      description:
        "Autenticación integrada que funciona de inmediato, más integración SSO y OAuth. Conecta tu proveedor de identidad en minutos.",
    },
    botAgents: {
      title: "Agentes Bot",
      description:
        "Los bots se unen a reuniones como participantes. Transcriben, traducen en tiempo real, envían a tu CRM o crean flujos personalizados con el SDK de Go.",
    },
    selfHosted: {
      title: "Tu infraestructura o la nuestra",
      description:
        "Ejecútalo en tus servidores con control total. O usa Bedrud Cloud y no pienses en ops. Mismo producto, mismas funcionalidades.",
    },
  },
  install: {
    title: "Un comando. Listo.",
    subtitle: "Copia. Pega. Funcionando. Eso es todo.",
    command: "curl -fsSL https://get.bedrud.org | bash",
    dockerCommand: "docker run -d -p 8080:8080 bedrud/bedrud",
    or: "o",
    requirements:
      "Funciona en cualquier Linux de 64 bits, macOS o Windows con 200MB de RAM.",
  },
  platforms: {
    title: "Apps nativas, no wrappers",
    subtitle:
      "Apps nativas de verdad — React en web, Kotlin en Android, Swift en iOS, Go en el servidor. Sin Electron, sin Cordova.",
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
      title: "Servidor",
      tech: "Go + WebRTC",
    },
    bots: {
      title: "Bots",
      tech: "Go SDK",
    },
    status: "Producción",
  },
  openSource: {
    title: "Lee el código fuente. Toma el control.",
    subtitle:
      "Cada línea de código es pública. Inspecciona, audita, contribuye o haz un fork. Licencia Apache 2.0 — uso comercial o personal.",
    license: "Apache 2.0",
    github: "Ver en GitHub",
    docs: "Leer la documentación",
  },
  cta: {
    title: "¿Listo para poseer tus reuniones?",
    subtitle:
      "Únete a miles de desarrolladores que se cansaron de precios por asiento y lock-in. Comienza en menos de un minuto.",
    installNow: "Copiar comando de instalación",
    readDocs: "Leer documentación",
    starGithub: "Estrella en GitHub",
  },
  faq: {
    title: "Preguntas frecuentes",
    subtitle: "Preguntas técnicas, respondidas directamente.",
    updates: {
      question: "¿Cómo funcionan las actualizaciones?",
      answer:
        "Vuelve a ejecutar el comando de instalación. Bedrud reemplaza el binario directamente — sin gestores de paquetes, sin cadenas de dependencias. También puedes activar las actualizaciones automáticas con un solo flag de configuración.",
    },
    encryption: {
      question: "¿Está cifrado de extremo a extremo?",
      answer:
        "Todos los medios se cifran en tránsito mediante DTLS y SRTP (el estándar WebRTC). En implementaciones self-hosted, tú controlas el servidor y todos los datos. El cifrado de extremo a extremo para llamadas peer-to-peer está en desarrollo.",
    },
    network: {
      question: "¿Cuáles son los requisitos de red y puertos?",
      answer:
        "Puerto 80/443 para HTTP/WebSocket y un rango UDP configurable (por defecto 50000–60000) para medios WebRTC. Detrás de NAT, configura un servidor STUN/TURN — Bedrud incluye documentación para coturn.",
    },
    proxy: {
      question: "¿Puedo ejecutarlo detrás de un proxy inverso?",
      answer:
        "Sí. Nginx, Caddy, Traefik — todos funcionan. Los documentos incluyen configuraciones de copiar y pegar para cada uno. Solo reenvía las conexiones WebSocket y configura los headers adecuados.",
    },
    cloudVsSelfHosted: {
      question: "¿Cuál es la diferencia entre self-hosted y Bedrud Cloud?",
      answer:
        "Mismo producto, mismas funciones. Self-hosted se ejecuta en tu infraestructura con control total de datos. Bedrud Cloud gestiona operaciones, actualizaciones y escalado por ti. Sin lock-in — migra entre ellos en cualquier momento.",
    },
  },
  testimonials: {
    title: "Usado por desarrolladores",
    subtitle: "Lo que la gente dice sobre Bedrud.",
    one: {
      quote:
        "Reemplazamos nuestra instalación de Jitsi con Bedrud en una tarde. Un binario, 200MB de RAM, y nuestras reuniones suenan mejor ahora.",
      name: "Lena K.",
      role: "Lead DevOps en una empresa SaaS europea",
      initials: "LK",
    },
    two: {
      quote:
        "Sin precio por usuario fue lo que nos convenció. Pasamos de 20 a 200 usuarios sin un solo email de licencia.",
      name: "Marcus T.",
      role: "CTO en una startup remota",
      initials: "MT",
    },
    three: {
      quote:
        "Desplegué Bedrud en un VPS de $5 y simplemente funcionó. Con el SDK de bots conectamos las transcripciones a nuestro CRM en un día.",
      name: "Priya S.",
      role: "Ingeniera senior en una fintech",
      initials: "PS",
    },
  },
  footer: {
    brand: "Bedrud",
    tagline:
      "Videollamadas para equipos que valoran la privacidad. Autoalojado o en la nube.",
    product: "Producto",
    features: "Características",
    compare: "Comparación",
    platforms: "Plataformas",
    openSource: "Código Abierto",
    selfHosted: "Autoalojado vs. Nube",
    demo: "Demo en vivo",
    changelog: "Registro de cambios",
    developers: "Desarrolladores",
    quickstart: "Guía de inicio rápido",
    docs: "Documentación",
    architecture: "Guía de arquitectura",
    api: "Referencia de API",
    openSourceSection: "Código Abierto",
    contribute: "Contribuir",
    reportIssue: "Reportar un problema",
    resources: "Recursos",
    contributors: "Colaboradores",
    github: "GitHub",
    releases: "Versiones",
    discord: "Discord",
    legal: "Legal",
    license: "Licencia",
    privacy: "Política de privacidad",
    terms: "Términos de servicio",
    contact: "Contacto",
    madeBy: "Hecho con cariño por",
    backToTop: "Volver arriba",
    languages: "Idiomas",
  },
  privacy: {
    meta: {
      title: "Política de privacidad — Bedrud",
      description:
        "Descubre cómo Bedrud recopila, utiliza y protege tu información personal.",
    },
    title: "Política de privacidad",
    lastUpdated: "Última actualización: 20 de febrero de 2026",
    intro:
      "En Bedrud, nos tomamos tu privacidad en serio. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos tu información cuando utilizas nuestra plataforma de videollamadas y servicios relacionados.",
    dataCollection: {
      title: "Recopilación de datos",
      content:
        "Recopilamos la información que nos proporcionas directamente, como cuando creas una cuenta, usas nuestros servicios o nos contactas para obtener soporte. Esto puede incluir tu nombre, dirección de correo electrónico y datos de uso. Cuando usas Bedrud en modo autoalojado, tus datos permanecen completamente en tu propia infraestructura.",
    },
    dataUsage: {
      title: "Cómo usamos tus datos",
      content:
        "Usamos la información que recopilamos para proporcionar, mantener y mejorar nuestros servicios, para comunicarnos contigo sobre tu cuenta y para enviarte avisos técnicos y mensajes de soporte. No vendemos tu información personal a terceros.",
    },
    dataStorage: {
      title: "Almacenamiento y seguridad de datos",
      content:
        "Implementamos medidas de seguridad estándar de la industria para proteger tus datos. Para instancias alojadas en la nube, los datos se cifran en tránsito y en reposo. Las implementaciones autoalojadas te dan control total sobre el almacenamiento y la configuración de seguridad.",
    },
    thirdParties: {
      title: "Servicios de terceros",
      content:
        "Podemos usar servicios de terceros para análisis, informes de errores e infraestructura. Estos servicios tienen sus propias políticas de privacidad. Solo compartimos los datos mínimos necesarios para que estos servicios funcionen.",
    },
    cookies: {
      title: "Cookies y seguimiento",
      content:
        "Usamos cookies esenciales para mantener tu sesión y preferencias. No usamos cookies de seguimiento de terceros ni rastreadores publicitarios. Puedes configurar tu navegador para rechazar cookies, aunque algunas funciones podrían no funcionar correctamente.",
    },
    yourRights: {
      title: "Tus derechos",
      content:
        "Tienes derecho a acceder, corregir o eliminar tus datos personales. Puedes exportar tus datos en cualquier momento o solicitar la eliminación de tu cuenta. Para instancias autoalojadas, tienes control total sobre todos los datos en tus servidores.",
    },
    changes: {
      title: "Cambios a esta política",
      content:
        "Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos de cualquier cambio publicando la nueva política en esta página y actualizando la fecha de 'última actualización'. El uso continuado del servicio constituye la aceptación de la política actualizada.",
    },
    contact: {
      title: "Contáctanos",
      content:
        "Si tienes alguna pregunta sobre esta Política de Privacidad o nuestras prácticas de datos, contáctanos a través de nuestro repositorio de GitHub o escríbenos a privacy@bedrud.com.",
    },
  },
  terms: {
    meta: {
      title: "Términos de servicio — Bedrud",
      description:
        "Lee los términos y condiciones para usar la plataforma de videollamadas Bedrud.",
    },
    title: "Términos de servicio",
    lastUpdated: "Última actualización: 20 de febrero de 2026",
    intro:
      "Estos Términos de Servicio rigen tu uso de la plataforma de videollamadas Bedrud y servicios relacionados. Al acceder o usar Bedrud, aceptas estar sujeto a estos términos.",
    acceptance: {
      title: "Aceptación de los términos",
      content:
        "Al acceder o usar Bedrud, aceptas cumplir y estar sujeto a estos Términos de Servicio. Si no estás de acuerdo con estos términos, no puedes acceder ni usar nuestros servicios. Nos reservamos el derecho de modificar estos términos en cualquier momento.",
    },
    services: {
      title: "Descripción de los servicios",
      content:
        "Bedrud proporciona una plataforma de videollamadas disponible como servicio en la nube y como solución autoalojada. La plataforma incluye videoconferencias, comunicación en tiempo real y herramientas de colaboración relacionadas, entregadas a través de aplicaciones web, móviles y de servidor.",
    },
    accounts: {
      title: "Cuentas de usuario",
      content:
        "Eres responsable de mantener la confidencialidad de las credenciales de tu cuenta y de todas las actividades que ocurran bajo tu cuenta. Debes proporcionar información precisa y completa al crear una cuenta y mantenerla actualizada.",
    },
    acceptableUse: {
      title: "Uso aceptable",
      content:
        "Aceptas no usar Bedrud para ningún propósito ilegal o de cualquier manera que pueda dañar, deshabilitar o deteriorar el servicio. No puedes intentar obtener acceso no autorizado a ninguna parte del servicio, otras cuentas o sistemas informáticos conectados al servicio.",
    },
    intellectualProperty: {
      title: "Propiedad intelectual",
      content:
        "Bedrud es software de código abierto licenciado bajo la licencia AGPLv3. Tu uso del software está sujeto a los términos de esa licencia. El nombre Bedrud, el logotipo y la marca son marcas registradas de theMadOrg y no pueden usarse sin permiso.",
    },
    termination: {
      title: "Terminación",
      content:
        "Podemos terminar o suspender tu acceso al servicio en la nube en cualquier momento por violación de estos términos. Tras la terminación, tu derecho a usar el servicio cesará inmediatamente. Para instancias autoalojadas, conservas el acceso al software bajo los términos de la licencia AGPLv3.",
    },
    liability: {
      title: "Limitación de responsabilidad",
      content:
        "En la máxima medida permitida por la ley, Bedrud y sus contribuyentes no serán responsables de ningún daño indirecto, incidental, especial o consecuente derivado de tu uso del servicio. El servicio se proporciona 'tal cual' sin garantías de ningún tipo.",
    },
    governingLaw: {
      title: "Ley aplicable",
      content:
        "Estos términos se regirán e interpretarán de acuerdo con las leyes aplicables, sin tener en cuenta los principios de conflicto de leyes. Cualquier disputa que surja de estos términos se resolverá mediante negociación de buena fe o, si es necesario, arbitraje vinculante.",
    },
    changes: {
      title: "Cambios a los términos",
      content:
        "Nos reservamos el derecho de modificar estos Términos de Servicio en cualquier momento. Los cambios materiales se comunicarán a través del servicio o por correo electrónico. Tu uso continuado de Bedrud después de la publicación de los cambios constituye la aceptación de los términos modificados.",
    },
    contact: {
      title: "Contáctanos",
      content:
        "Si tienes alguna pregunta sobre estos Términos de Servicio, contáctanos a través de nuestro repositorio de GitHub o escríbenos a legal@bedrud.com.",
    },
  },
  docs: {
    documentation: "Documentación",
    onThisPage: "En esta página",
    previous: "Anterior",
    next: "Siguiente",
    backToHome: "Volver al inicio",
    searchPlaceholder: "Buscar docs…",
    searchButton: "Buscar",
    noResults: "Sin resultados",
    loading: "Cargando…",
    pressShortcut: "Presione",
    clearSearch: "Borrar búsqueda",
    searchDocs: "Buscar documentación",
    notFound: "Documento no encontrado",
    sections: {
      gettingStarted: "Primeros pasos",
      architecture: "Arquitectura",
      backend: "Backend",
      api: "API",
      guides: "Guías",
      contributing: "Contribuir",
    },
  },
  skipToContent: "Saltar al contenido",
  mobileNav: {
    navigation: "Navigation",
    language: "Language",
    getStarted: "Comenzar",
  },
  featuresPage: {
    meta: {
      title: "Características — Bedrud",
      description:
        "Explora las características de Bedrud: binario único, calidad WebRTC, acceso de invitados, passkeys, controles de admin, procesamiento de audio, agentes bot y soporte multiplataforma.",
    },
    title: "Características",
    subtitle: "Cada característica resuelve un problema real.",
    ready: "¿Listo?",
    readyCta: "Comenzar",
    guestJoin: {
      pain: "¿Cansado de forzar a los invitados a crear cuentas solo para una llamada de 15 minutos?",
      title: "Invitado — Sin cuenta necesaria",
      description:
        "Comparte un enlace, hacen clic, entran. Sin formularios de registro, sin contraseñas, sin fricción. Código de acceso opcional para seguridad.",
    },
    singleBinary: {
      pain: "Configurar infraestructura de video no debería requerir un título en DevOps.",
      title: "Despliegue binario único",
      description:
        "Una descarga, un comando, ejecutándose. Sin Docker Compose, sin manifiestos de Kubernetes, sin guías de 12 pasos. Solo un binario que funciona.",
    },
    webrtc: {
      pain: "Las videollamadas que se retrasan, congelan o se cortan arruinan las reuniones.",
      title: "Calidad WebRTC",
      description:
        "Servidor de medios WebRTC incorporado con velocidad de bits adaptativa, simulcast y SVC. Video y audio cristalinos en cualquier conexión.",
    },
    passkeys: {
      pain: "Las contraseñas se filtran. Los tokens MFA son phisheados.",
      title: "Passkeys + OAuth",
      description:
        "Passkeys FIDO2 para autenticación sin contraseña. OAuth 2.0 / OIDC para SSO con tu proveedor de identidad existente. Sin bases de datos de contraseñas para comprometer.",
    },
    admin: {
      pain: "Gestionar una plataforma de reuniones sin buenas herramientas es doloroso.",
      title: "Panel de administración",
      description:
        "Gestión de salas, usuarios, análisis de uso y configuración — todo desde una interfaz web limpia. Sin adivinanzas de CLI.",
    },
    audio: {
      pain: "El ruido de fondo en las reuniones es distraído y poco profesional.",
      title: "Procesamiento de audio",
      description:
        "Supresión de ruido incorporada impulsada por RNNoise. Integración opcional de Krisp para supresión de ruido de IA premium. Audio limpio, cada llamada.",
    },
    bots: {
      pain: "Las tareas manuales de reuniones desperdician tiempo — grabación, transcripción, notas.",
      title: "Agentes bot",
      description:
        "Bots programables se unen a reuniones a través del Go SDK. Automatiza transcripción, traducción, grabación, integraciones CRM y flujos de trabajo personalizados.",
    },
    multiPlatform: {
      pain: "Tu equipo usa diferentes dispositivos. Tu plataforma de reuniones también debería.",
      title: "Multiplataforma",
      description:
        "Aplicaciones nativas para Web (React), Android (Kotlin) y iOS (Swift). Experiencia consistente, rendimiento nativo de la plataforma.",
    },
  },
  demoPage: {
    meta: {
      title: "Demo en vivo — Bedrud",
      description:
        "Prueba Bedrud sin instalar nada. Únete a una reunión demo en vivo ahora.",
    },
    title: "Probar sin instalar",
    subtitle: "Únete a una reunión Bedrud en vivo ahora. Sin cuenta necesaria.",
    tryNow: "Abrir demo",
    noInstall:
      "Sin instalación, sin cuenta, sin compromiso. Solo haz clic y reúnete.",
    orSelfHost: "¿Prefieres autoalojamiento?",
    installCta: "Leer la guía de instalación",
  },
  changelogPage: {
    meta: {
      title: "Registro de cambios — Bedrud",
      description: "Historial de versiones y actualizaciones de Bedrud.",
    },
    title: "Registro de cambios",
    subtitle: "Qué hay de nuevo en Bedrud. Actividad = confianza.",
    viewOnGithub: "Ver en GitHub",
    noReleases: "Sin releases aún. ¡Vuelve pronto!",
  },
  contributorsPage: {
    meta: {
      title: "Colaboradores — Bedrud",
      description: "Conoce a las personas que construyen Bedrud.",
    },
    title: "Colaboradores",
    subtitle: "Bedrud es construido por la comunidad.",
    joinThem: "Únete a ellos",
    joinCta: "Contribuir en GitHub",
    contributions: "contribuciones",
  },
  contactPage: {
    meta: {
      title: "Contacto — Bedrud",
      description: "Ponte en contacto con el equipo de Bedrud.",
    },
    title: "Contacto",
    subtitle: "Ponte en contacto a través de cualquiera de estos canales.",
    github: {
      title: "Issues de GitHub",
      description:
        "Reportes de errores, solicitudes de características y contribuciones de código.",
      cta: "Abrir un issue",
    },
    discord: {
      title: "Chat de comunidad",
      description:
        "Haz preguntas, comparte ideas y obtén ayuda de la comunidad.",
      cta: "Unirse a Discord",
    },
    email: {
      title: "Email",
      description:
        "Para colaboraciones, problemas de seguridad o consultas privadas.",
      cta: "Enviar email",
    },
  },
};
