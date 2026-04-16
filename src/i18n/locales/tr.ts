export default {
  meta: {
    title: "Bedrud — İstediğiniz Gibi Video Toplantıları",
    description:
      "Bedrud, açık kaynaklı bir video toplantı platformudur. Kendi sunucunuzda barındırın veya bulutumuzda kullanın — web arayüzü, REST API ve WebRTC medya sunucusunu tek bir dosyada sunar.",
  },
  nav: {
    home: "Ana Sayfa",
    features: "Özellikler",
    compare: "Karşılaştır",
    platforms: "Platformlar",
    openSource: "Açık Kaynak",
    docs: "Belgeler",
    community: "Topluluk",
    demo: "Demo",
    getStarted: "Başlayın",
  },
  hero: {
    badge: "Açık Kaynak · Apache 2.0",
    kicker: "Self-hosted video toplantıları. 200MB RAM. Tek binary.",
    headline: "Bir dakikadan kısa sürede kendi sunucunuzda video toplantıları",
    subtitle:
      "Tek bir ikili dosya, 200MB RAM, sınırsız kullanıcı. Sizin sunucunuz, sizin kurallarınız, sizin verileriniz.",
    tryDemo: "Demoyu Dene",
    installNow: "Kurulum komutunu kopyala",
    getStarted: "Başlayın",
    viewOnGithub: "GitHub'da Görüntüle",
    copied: "Kopyalandı!",
    stars: "1.2k",
    starsLabel: "GitHub yıldızları",
    contributorsLabel: "katkıda bulunan",
    license: "Apache 2.0 Lisanslı",
  },
  journey: {
    title: "Sıfırdan Dakikalar İçinde Toplantı",
    subtitle:
      "Kurun. Bir bağlantı paylaşın. Konuşmaya başlayın. İşte böyle görünüyor.",
    install: {
      title: "Yükle",
      description:
        "Tek bir dosya indirin veya Docker imajı çekin. Bir komut, sıfır bağımlılık. Bir dakikadan kısa sürede çalışıyor.",
    },
    invite: {
      title: "Davet et",
      description:
        "Bir bağlantı paylaşın. Kayıt yok, indirme yok, sürtünme yok. Misafirler herhangi bir tarayıcıdan anında katılır.",
    },
    meet: {
      title: "Toplan",
      description:
        "Yerleşik gürültü engelleme ile kristal netliğinde WebRTC video ve ses. Sadece konuşun.",
    },
    scale: {
      title: "Ölçekle",
      description:
        "Tam kontrol için kendi sunucunuzda barındırın veya Bedrud Cloud kullanın. Sınırsız kullanıcı, asla koltuk başı fiyatlandırma.",
    },
  },
  whyBedrud: {
    title: "Farklı İnşa Edildi",
    subtitle: "Bağlılık yok. Şişirme yok. Fatura sürprizi yok.",
    noLockIn: {
      title: "Satıcı Kilidi Yok",
      description:
        "Altyapınız. Verileriniz. Kurallarınız. Herhangi bir sunucuya dağıtın, istediğiniz zaman taşıyın. Özel format yok, çıkış ücreti yok, bulut bağımlılığı yok.",
    },
    singleBinary: {
      title: "Tek Dosya",
      description:
        "Bir dosya. Bir komut. Sıfır bağımlılık. Docker yok, Kubernetes yok, Cuma öğleden sonra dağıtım kabusları yok.",
    },
    noPerSeat: {
      title: "Koltuk Başı Fiyatlandırma Yok",
      description:
        "5 kullanıcı veya 5.000. Fiyat aynı: sıfır. Lisans anahtarı yok, kullanıcı sayacı yok, 'satış ekibiyle iletişime geçin' butonu yok.",
    },
  },
  comparison: {
    title: "Bedrud Karşılaştırmasını Gör",
    subtitle:
      "Karmaşıklık olmadan kendi sunucunuzda barındırılan video toplantıları.",
    feature: "Özellik",
    bedrud: "Bedrud",
    jitsi: "Jitsi Meet",
    bbb: "BigBlueButton",
    rows: {
      deploy: "Dağıtım Karmaşıklığı",
      deployBedrud: "Tek dosya",
      deployJitsi: "Docker Compose (8+ konteyner)",
      deployBbb: "Minimum 8GB RAM sunucu",
      ram: "RAM Kullanımı",
      ramBedrud: "~200MB",
      ramJitsi: "~2GB",
      ramBbb: "~4GB+",
      install: "Yükleme Süresi",
      installBedrud: "< 1 dakika",
      installJitsi: "~15 dakika",
      installBbb: "~30 dakika + yapılandırma",
      nativeClients: "Yerel İstemciler",
      nativeBedrud: "Web, Android, iOS",
      nativeJitsi: "Web, Android, iOS",
      nativeBbb: "Sadece Web",
      guestJoin: "Misafir Katılımı (Hesapsız)",
      guestBedrud: "Evet",
      guestJitsi: "Evet",
      guestBbb: "Evet (moderatör onayı)",
      audioProcessing: "Ses İşleme (Gürültü Engelleme)",
      audioBedrud: "RNNoise / Krisp",
      audioJitsi: "Temel",
      audioBbb: "Temel",
      license: "Lisans",
      licenseBedrud: "Apache 2.0",
      licenseJitsi: "Apache 2.0",
      licenseBbb: "LGPL 3.0",
    },
  },
  features: {
    title: "Her Şey Dahil",
    subtitle:
      "Video, ses, kimlik doğrulama, botlar — hepsi dahil. Mikroservis mimarisi gerekmez.",
    e2eEncryption: {
      title: "Varsayılan Olarak Şifreli",
      description:
        "Tüm medya DTLS ve SRTP üzerinden şifrelenerek iletilir. Self-hosted modunda verileriniz kendi sunucularınızda kalır. Üçüncü taraf telemetri yok, veri toplama yok.",
    },
    webrtcVideo: {
      title: "WebRTC Video",
      description:
        "Dahili WebRTC medya sunucusuyla bir saniyenin altında gecikmeli video aramaları. Kararsız bağlantılarda uyumlu bit hızı.",
    },
    multiPlatform: {
      title: "Çoklu Platform",
      description:
        "Web, Android ve iOS için yerel uygulamalar. Sadece sarmalayıcı değil — gerçek yerel uygulamalar. Otomasyon için sunucu tarafı SDK dahil.",
    },
    flexibleAuth: {
      title: "Esnek Kimlik Doğrulama",
      description:
        "Kutudan çıktığı gibi çalışan yerleşik kimlik doğrulama, artı SSO ve OAuth entegrasyonu. Mevcut kimlik sağlayıcınıza dakikalar içinde bağlanın.",
    },
    botAgents: {
      title: "Bot Ajanları",
      description:
        "Botlar katılımcı olarak toplantılara katılır. Görüşmeleri transkribe eder, gerçek zamanlı çevirir, CRM'nize gönderir veya Go SDK ile özel iş akışları oluşturur.",
    },
    selfHosted: {
      title: "Sizin altyapınız veya bizimki",
      description:
        "Kendi sunucularınızda tam kontrolle çalıştırın. Veya Bedrud Cloud kullanın ve ops hakkında düşünmeyin. Aynı ürün, aynı özellikler.",
    },
  },
  install: {
    title: "Tek Komut. Bitti.",
    subtitle: "Kopyala. Yapıştır. Çalışıyor. Kurulum bu kadar.",
    command: "curl -fsSL https://get.bedrud.org | bash",
    dockerCommand: "docker run -d -p 8080:8080 bedrud/bedrud",
    or: "veya",
    requirements:
      "200MB RAM ile herhangi bir 64-bit Linux, macOS veya Windows'ta çalışır.",
  },
  platforms: {
    title: "Web Sarıcı Değil, Yerel Uygulamalar",
    subtitle:
      "Gerçek yerel uygulamalar — Web'de React, Android'de Kotlin, iOS'ta Swift, sunucuda Go. Electron yok, Cordova yok.",
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
      title: "Sunucu",
      tech: "Go + WebRTC",
    },
    bots: {
      title: "Botlar",
      tech: "Go SDK",
    },
    status: "Üretim",
  },
  openSource: {
    title: "Kaynak kodu oku. Kontrolü ele al.",
    subtitle:
      "Her kod satırı kamu açık. İnceleyin, denetleyin, katkıda bulunun veya çatallayın. Apache 2.0 lisanslı — ticari veya başka şekilde kullanın.",
    license: "Apache 2.0",
    github: "GitHub'da Görüntüle",
    docs: "Belgeleri Oku",
  },
  cta: {
    title: "Toplantılarınızı Sahiplenmeye Hazır Mısınız?",
    subtitle:
      "Kullanıcı başı fiyatlandırma ve satıcı bağlılığından bıkan binlerce geliştiriciye katılın. Bir dakikadan kısa sürede başlayın.",
    installNow: "Kurulum komutunu kopyala",
    readDocs: "Belgeleri Oku",
    starGithub: "GitHub'da Yıldız Ver",
  },
  faq: {
    title: "Sıkça Sorulan Sorular",
    subtitle: "Teknik sorular, doğrudan cevaplar.",
    updates: {
      question: "Güncellemeler nasıl çalışır?",
      answer:
        "Kurulum komutunu tekrar çalıştırın. Bedrud ikili dosyayı yerinde değiştirir — paket yöneticisi yok, bağımlılık zincirleri yok. Tek bir yapılandırma bayrağıyla otomatik güncellemeleri de etkinleştirebilirsiniz.",
    },
    encryption: {
      question: "Uçtan uca şifreli mi?",
      answer:
        "Tüm medya DTLS ve SRTP (WebRTC standardı) üzerinden şifrelenerek iletilir. Self-hosted dağıtımlarında sunucuyu ve tüm verileri siz kontrol edersiniz. Eşler arası aramalar için uçtan uca şifreleme yol haritasındadır.",
    },
    network: {
      question: "Ağ ve port gereksinimleri nelerdir?",
      answer:
        "HTTP/WebSocket için 80/443 portları ve WebRTC medyası için yapılandırılabilir UDP aralığı (varsayılan 50000–60000). NAT arkasında STUN/TURN sunucusu kurun — Bedrud coturn kurulum belgelerini içerir.",
    },
    proxy: {
      question: "Ters proxy arkasında çalıştırabilir miyim?",
      answer:
        "Evet. Nginx, Caddy, Traefik — hepsi çalışır. Belgeler her biri için kopyala-yapıştır yapılandırmaları içerir. WebSocket bağlantılarını iletmeniz ve uygun başlıkları ayarlamanız yeterli.",
    },
    cloudVsSelfHosted: {
      question: "Self-hosted ve Bedrud Cloud arasındaki fark nedir?",
      answer:
        "Aynı ürün, aynı özellikler. Self-hosted altyapınızda tam veri kontrolüyle çalışır. Bedrud Cloud operasyon, güncelleme ve ölçeklendirmeyi sizin için halleder. Satıcı kilidi yok — istediğiniz zaman geçiş yapın.",
    },
  },
  testimonials: {
    title: "Geliştiricilerin Güvendiği",
    subtitle: "İnsanlar Bedrud hakkında ne diyor.",
    one: {
      quote:
        "Jitsi kurulumumuzu bir öğleden sonra Bedrud ile değiştirdik. Tek ikili dosya, 200MB RAM ve toplantılarımız artık daha iyi sesleniyor.",
      name: "Lena K.",
      role: "Avrupalı bir SaaS şirketinde DevOps Lideri",
      initials: "LK",
    },
    two: {
      quote:
        "Kullanıcı başı fiyat yok bizi ikna etti. 20'den 200 kullanıcıya tek bir lisans e-postası almadan geçtik.",
      name: "Marcus T.",
      role: "Uzaktan çalışan bir startup'ın CTO'su",
      initials: "MT",
    },
    three: {
      quote:
        "Bedrud'u $5 VPS'e dağıttım ve hemen çalıştı. Bot SDK ile bir günde toplantı transkriptlerini CRM'imize entegre ettik.",
      name: "Priya S.",
      role: "Bir fintech şirketinde Kıdemli Mühendis",
      initials: "PS",
    },
  },
  footer: {
    brand: "Bedrud",
    tagline:
      "Gizliliğe önem veren ekipler için video toplantıları. Kendi sunucunuzda veya bulutta.",
    product: "Ürün",
    features: "Özellikler",
    compare: "Karşılaştırma",
    platforms: "Platformlar",
    openSource: "Açık Kaynak",
    selfHosted: "Kendi Sunucunuz vs. Bulut",
    demo: "Canlı Demo",
    changelog: "Değişiklik Günlüğü",
    developers: "Geliştiriciler",
    quickstart: "Hızlı Başlangıç Kılavuzu",
    docs: "Belgeler",
    architecture: "Mimari Kılavuzu",
    api: "API Referansı",
    openSourceSection: "Açık Kaynak",
    contribute: "Katkıda Bulun",
    reportIssue: "Sorun Bildir",
    resources: "Kaynaklar",
    contributors: "Katkıda Bulunanlar",
    github: "GitHub",
    releases: "Sürümler",
    discord: "Discord",
    legal: "Hukuki",
    license: "Lisans",
    privacy: "Gizlilik Politikası",
    terms: "Hizmet Şartları",
    contact: "İletişim",
    madeBy: "Özenle yapılmıştır,",
    backToTop: "Başa dön",
    languages: "Diller",
  },
  privacy: {
    meta: {
      title: "Gizlilik Politikası — Bedrud",
      description:
        "Bedrud'un kişisel bilgilerinizi nasıl topladığını, kullandığını ve koruduğunu öğrenin.",
    },
    title: "Gizlilik Politikası",
    lastUpdated: "Son güncelleme: 20 Şubat 2026",
    intro:
      "Bedrud olarak gizliliğinizi ciddiye alıyoruz. Bu Gizlilik Politikası, video toplantı platformumuzu ve ilgili hizmetleri kullandığınızda bilgilerinizi nasıl topladığımızı, kullandığımızı, ifşa ettiğimizi ve koruduğumuzu açıklar.",
    dataCollection: {
      title: "Veri Toplama",
      content:
        "Hesap oluşturduğunuzda, hizmetlerimizi kullandığınızda veya destek için bize ulaştığınızda bize doğrudan sağladığınız bilgileri toplarız. Bu, adınızı, e-posta adresinizi ve kullanım verilerinizi içerebilir. Bedrud'u kendi sunucunuzda barındırma modunda kullandığınızda, verileriniz tamamen kendi altyapınızda kalır.",
    },
    dataUsage: {
      title: "Verilerinizi nasıl kullanıyoruz",
      content:
        "Topladığımız bilgileri hizmetlerimizi sunmak, sürdürmek ve iyileştirmek, hesabınız hakkında sizinle iletişim kurmak ve size teknik bildirimler ve destek mesajları göndermek için kullanırız. Kişisel bilgilerinizi üçüncü taraflara satmayız.",
    },
    dataStorage: {
      title: "Veri Depolama ve Güvenlik",
      content:
        "Verilerinizi korumak için endüstri standardı güvenlik önlemleri uyguluyoruz. Bulutta barındırılan örnekler için veriler aktarım sırasında ve beklemedeyken şifrelenir. Kendi sunucunuzda barındırma dağıtımları, veri depolama ve güvenlik yapılandırmaları üzerinde tam kontrol sağlar.",
    },
    thirdParties: {
      title: "Üçüncü Taraf Hizmetleri",
      content:
        "Analitik, hata raporlama ve altyapı için üçüncü taraf hizmetlerini kullanabiliriz. Bu hizmetlerin kendi gizlilik politikaları vardır. Bu hizmetlerin çalışması için gerekli minimum veriyi paylaşırız.",
    },
    cookies: {
      title: "Çerezler ve İzleme",
      content:
        "Oturumunuzu ve tercihlerinizi sürdürmek için temel çerezleri kullanırız. Üçüncü taraf izleme çerezleri veya reklam izleyicileri kullanmayız. Tarayıcınızı çerezleri reddetmek için yapılandırabilirsiniz, ancak bazı özellikler düzgün çalışmayabilir.",
    },
    yourRights: {
      title: "Haklarınız",
      content:
        "Kişisel verilerinize erişme, düzeltme veya silme hakkına sahipsiniz. Verilerinizi istediğiniz zaman dışa aktarabilir veya hesap silme talebinde bulunabilirsiniz. Kendi sunucunuzda barındırılan örnekler için, sunucularınızdaki tüm veriler üzerinde tam kontrole sahipsiniz.",
    },
    changes: {
      title: "Bu politikadaki değişiklikler",
      content:
        "Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Yeni politikayı bu sayfada yayınlayarak ve 'son güncelleme' tarihini güncelleyerek değişiklikleri size bildireceğiz. Hizmeti kullanmaya devam etmeniz, güncellenmiş politikanın kabul edildiği anlamına gelir.",
    },
    contact: {
      title: "Bize Ulaşın",
      content:
        "Bu Gizlilik Politikası veya veri uygulamalarımız hakkında sorularınız varsa, lütfen GitHub deposu üzerinden bize ulaşın veya privacy@bedrud.com adresinden iletişime geçin.",
    },
  },
  terms: {
    meta: {
      title: "Hizmet Şartları — Bedrud",
      description:
        "Bedrud video toplantı platformunu kullanma şartlarını ve koşullarını okuyun.",
    },
    title: "Hizmet Şartları",
    lastUpdated: "Son güncelleme: 20 Şubat 2026",
    intro:
      "Bu Hizmet Şartları, Bedrud video toplantı platformunu ve ilgili hizmetleri kullanımınızı düzenler. Bedrud'a erişerek veya kullanarak bu şartlara bağlı olmayı kabul edersiniz.",
    acceptance: {
      title: "Şartların kabulü",
      content:
        "Bedrud'a erişerek veya kullanarak bu Hizmet Şartlarına uymayı ve bunlara bağlı olmayı kabul edersiniz. Bu şartları kabul etmiyorsanız, hizmetlerimize erişemez veya kullanamaz olursunuz. Bu şartları herhangi bir zamanda değiştirme hakkımızı saklı tutarız.",
    },
    services: {
      title: "Hizmet açıklaması",
      content:
        "Bedrud, hem bulutta barındırılan bir hizmet hem de kendi sunucunuzda barındırılan bir çözüm olarak sunulan bir video toplantı platformu sağlar. Platform, web, mobil ve sunucu uygulamaları aracılığıyla sunulan video konferans, gerçek zamanlı iletişim ve ilgili iş birliği araçlarını içerir.",
    },
    accounts: {
      title: "Kullanıcı hesapları",
      content:
        "Hesap kimlik bilgilerinizin gizliliğini korumaktan ve hesabınız altında gerçekleşen tüm faaliyetlerden siz sorumlusunuz. Hesap oluştururken doğru ve eksiksiz bilgi sağlamalı ve güncel tutmalısınız.",
    },
    acceptableUse: {
      title: "Kabul edilebilir kullanım",
      content:
        "Bedrud'u herhangi bir yasadışı amaçla veya hizmete zarar verebilecek, devre dışı bırakabilecek veya bozabilecek herhangi bir şekilde kullanmamayı kabul edersiniz. Hizmetin herhangi bir bölümüne, diğer hesaplara veya hizmete bağlı bilgisayar sistemlerine yetkisiz erişim elde etmeye çalışmamalısınız.",
    },
    intellectualProperty: {
      title: "Fikri mülkiyet",
      content:
        "Bedrud, AGPLv3 lisansı altında lisanslanan açık kaynaklı bir yazılımdır. Yazılımı kullanımınız bu lisansın şartlarına tabidir. Bedrud adı, logosu ve markası theMadOrg'un ticari markalarıdır ve izinsiz kullanılamaz.",
    },
    termination: {
      title: "Fesih",
      content:
        "Bu şartların ihlali durumunda bulut hizmetine erişiminizi herhangi bir zamanda sonlandırabilir veya askıya alabiliriz. Fesihten sonra hizmeti kullanma hakkınız derhal sona erer. Kendi sunucunuzda barındırılan örnekler için AGPLv3 lisans şartları kapsamında yazılıma erişiminizi korursunuz.",
    },
    liability: {
      title: "Sorumluluk sınırlaması",
      content:
        "Yasaların izin verdiği azami ölçüde, Bedrud ve katkıda bulunanlar, hizmeti kullanımınızdan kaynaklanan dolaylı, arızi, özel veya sonuç olarak ortaya çıkan zararlardan sorumlu olmayacaktır. Hizmet herhangi bir garanti olmaksızın 'olduğu gibi' sağlanır.",
    },
    governingLaw: {
      title: "Geçerli hukuk",
      content:
        "Bu şartlar, kanunlar ihtilafı ilkelerine bakılmaksızın geçerli yasalara göre yönetilecek ve yorumlanacaktır. Bu şartlardan kaynaklanan herhangi bir anlaşmazlık, iyi niyetli müzakere yoluyla veya gerekirse bağlayıcı tahkim yoluyla çözülecektir.",
    },
    changes: {
      title: "Şartlardaki değişiklikler",
      content:
        "Bu Hizmet Şartlarını herhangi bir zamanda değiştirme hakkımızı saklı tutarız. Önemli değişiklikler hizmet aracılığıyla veya e-posta ile bildirilecektir. Değişikliklerin yayınlanmasından sonra Bedrud'u kullanmaya devam etmeniz, değiştirilen şartların kabul edildiği anlamına gelir.",
    },
    contact: {
      title: "Bize Ulaşın",
      content:
        "Bu Hizmet Şartları hakkında sorularınız varsa, lütfen GitHub deposu üzerinden bize ulaşın veya legal@bedrud.com adresinden iletişime geçin.",
    },
  },
  docs: {
    documentation: "Belgeler",
    onThisPage: "Bu sayfada",
    previous: "Önceki",
    next: "Sonraki",
    backToHome: "Ana sayfaya dön",
    searchPlaceholder: "Doküman ara…",
    searchButton: "Ara",
    noResults: "Sonuç bulunamadı",
    loading: "Yükleniyor…",
    pressShortcut: "Basın",
    clearSearch: "Aramayı temizle",
    searchDocs: "Doküman ara",
    notFound: "Belge bulunamadı",
    sections: {
      gettingStarted: "Başlarken",
      architecture: "Mimari",
      backend: "Backend",
      api: "API",
      guides: "Kılavuzlar",
      contributing: "Katkıda Bulunma",
    },
  },
  skipToContent: "İçeriğe geç",
  mobileNav: {
    navigation: "Navigation",
    language: "Language",
    getStarted: "Başlayın",
  },
  featuresPage: {
    meta: {
      title: "Özellikler — Bedrud",
      description:
        "Bedrud'un özelliklerini keşfedin: tek binary, WebRTC kalitesi, misafir katılımı, passkeys, yönetici kontrolleri, ses işleme, bot ajanları ve çoklu platform desteği.",
    },
    title: "Özellikler",
    subtitle: "Her özellik gerçek bir sorunu çözer.",
    ready: "Hazır mısınız?",
    readyCta: "Başlayın",
    guestJoin: {
      pain: "Sadece 15 dakikalık bir arama için misafirleri hesap oluşturmaya zorlamaktan yoruldunuz mu?",
      title: "Misafir Katılımı — Hesap Gerekmez",
      description:
        "Bir bağlantı paylaşın, tıklayınlar, içeride. Kayıt formu yok, şifre yok, sürtünme yok. Güvenlik için isteğe bağlı şifre.",
    },
    singleBinary: {
      pain: "Video altyapısı kurmak bir DevOps diploması gerektirmemeli.",
      title: "Tek Binary Dağıtımı",
      description:
        "Tek indirme, tek komut, çalışıyor. Docker Compose yok, Kubernetes manifesti yok, 12 adımlı rehberler yok. Sadece çalışan bir dosya.",
    },
    webrtc: {
      pain: "Yavaşlayan, donan veya kesilen video aramaları toplantıları mahveder.",
      title: "WebRTC Kalitesi",
      description:
        "Uyarlanabilir bit hızı, simultan yayın ve SVC içeren yerleşik WebRTC medya sunucusu. Her bağlantıda kristal netliğinde video ve ses.",
    },
    passkeys: {
      pain: "Şifreler sızar. MFA tokenları phishing'e uğrar.",
      title: "Passkeys + OAuth",
      description:
        "Şifresiz kimlik doğrulama için FIDO2 passkeys. Mevcut kimlik sağlayıcınızla SSO için OAuth 2.0 / OIDC. İhlal edilecek şifre veritabanı yok.",
    },
    admin: {
      pain: "İyi araçlar olmadan bir toplantı platformunu yönetmek acı vericidir.",
      title: "Yönetici Paneli",
      description:
        "Oda yönetimi, kullanıcı yönetimi, kullanım analitiği ve yapılandırma — hepsi temiz bir web arayüzünden. CLI tahmini yok.",
    },
    audio: {
      pain: "Toplantılarda arka plan gürültüsü dikkati dağıtır ve profesyonel değildir.",
      title: "Ses İşleme",
      description:
        "RNNoise ile çalışan yerleşik gürültü engelleme. Premium AI gürültü engelleme için isteğe bağlı Krisp entegrasyonu. Her aramada temiz ses.",
    },
    bots: {
      pain: "Manuel toplantı görevleri zamanı boşa harcar — kayıt, transkripsiyon, notlar.",
      title: "Bot Ajanları",
      description:
        "Programlanabilir botlar Go SDK aracılığıyla toplantılara katılır. Transkripsiyon, çeviri, kayıt, CRM entegrasyonları ve özel iş akışlarını otomatikleştirir.",
    },
    multiPlatform: {
      pain: "Ekibiniz farklı cihazlar kullanıyor. Toplantı platformunuz da öyle olmalı.",
      title: "Çoklu Platform",
      description:
        "Web (React), Android (Kotlin) ve iOS (Swift) için yerel uygulamalar. Tutarlı deneyim, platform yerel performansı.",
    },
  },
  demoPage: {
    meta: {
      title: "Canlı Demo — Bedrud",
      description:
        "Bedrud'u kurmadan deneyin. Şimdi canlı bir demo toplantısına katılın.",
    },
    title: "Kurulmadan Deneyin",
    subtitle: "Şimdi canlı bir Bedrud toplantısına katılın. Hesap gerekmez.",
    tryNow: "Demoyu Aç",
    noInstall:
      "Kurulum yok, hesap yok, taahhüt yok. Sadece tıklayın ve toplanın.",
    orSelfHost: "Kendi sunucunuzda barındırmayı mı tercih edersiniz?",
    installCta: "Kurulum rehberini okuyun",
  },
  changelogPage: {
    meta: {
      title: "Değişiklik Günlüğü — Bedrud",
      description: "Bedrud için sürüm geçmişi ve güncellemeler.",
    },
    title: "Değişiklik Günlüğü",
    subtitle: "Bedrud'da yeni olanlar. Aktivite = güven.",
    viewOnGithub: "GitHub'da Görüntüle",
    noReleases: "Henüz sürüm yok. Yakında tekrar kontrol edin!",
  },
  contributorsPage: {
    meta: {
      title: "Katkıda Bulunanlar — Bedrud",
      description: "Bedrud'u geliştiren insanlarla tanışın.",
    },
    title: "Katkıda Bulunanlar",
    subtitle: "Bedrud topluluk tarafından geliştirilir.",
    joinThem: "Onlara Katılın",
    joinCta: "GitHub'da Katkıda Bulunun",
    contributions: "katkı",
  },
  contactPage: {
    meta: {
      title: "İletişim — Bedrud",
      description: "Bedrud ekibiyle iletişime geçin.",
    },
    title: "İletişim",
    subtitle: "Bu kanallardan herhangi birinden bizimle iletişime geçin.",
    github: {
      title: "GitHub Sorunları",
      description: "Hata raporları, özellik istekleri ve kod katkıları.",
      cta: "Bir Sorun Açın",
    },
    discord: {
      title: "Topluluk Sohbeti",
      description:
        "Sorular sorun, fikirleri paylaşın ve topluluktan yardım alın.",
      cta: "Discord'a Katılın",
    },
    email: {
      title: "E-posta",
      description: "Ortaklıklar, güvenlik sorunları veya özel sorular için.",
      cta: "E-posta Gönder",
    },
  },
};
