export default {
  meta: {
    title: "Bedrud - İstediğiniz Gibi Video Toplantıları",
    description:
      "Bedrud, açık kaynaklı bir video toplantı platformudur. Kendi sunucunuzda barındırın veya bulutumuzda kullanın - web arayüzü, REST API ve WebRTC medya sunucusunu tek bir dosyada sunar.",
  },
  nav: {
    home: "Ana Sayfa",
    features: "Özellikler",
    compare: "Feature",
    platforms: "Platformlar",
    openSource: "Açık Kaynak",
    docs: "Belgeler",
    community: "Topluluk",
    demo: "Demo",
    getStarted: "Başlayın",
    install: "Kurulum",
    blog: "Blog",
  },
  hero: {
    badge: "Açık Kaynak · Apache 2.0",
    kicker: "Açık kaynaklı Zoom alternatifi. $5 VPS'te çalışır.",
    headline: "Toplantılarınız. Sunucunuz. Kurallarınız.",
    subheadline:
      "Kendi donanımınızda kendi kendine barındırılan video toplantıları. Tek dosya, 512 MB RAM, 60 saniyede dağıtım. Özel görüşmelerden binlerce izleyiciye canlı yayın.",
    trustBar:
      "Dünya genelinde 10.000'den fazla gizlilik odaklı geliştirici ve takım tarafından güveniliyor.",
    installMicrocopy: "Terminalinize yapıştırın. 60 saniyede dağıtın.",
    tryDemo: "Yüklemeden Deneyin",
    installNow: "Kurulum komutunu kopyala",
    objectionBullets: {
      screenSharing: "Ekran paylaşımı ve kayıt",
      sso: "SSO ve OIDC entegrasyonu",
      webrtc: "WebRTC tabanlı, alt-saniye gecikme",
    },
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
    host: {
      title: "Toplan",
      description:
        "Yerleşik gürültü engelleme ile kristal netliğinde WebRTC video ve ses. Ekran paylaşımı, kayıt ve sohbet dahil.",
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
    sections: {
      deployment: "Dağıtım",
      features: "Özellikler",
      integrations: "Entegrasyonlar ve Ölçek",
      licensing: "Lisans ve Topluluk",
    },
    rows: {
      deploy: "Dağıtım Karmaşıklığı",
      deployBedrud: "Tek dosya",
      deployJitsi: "Docker Compose (8+ konteyner)",
      deployBbb: "Minimum 8GB RAM sunucu",
      ram: "RAM Kullanımı",
      ramBedrud: "512MB",
      ramJitsi: "~2GB",
      ramBbb: "~4GB+",
      install: "Yükleme Süresi",
      installBedrud: "< 1 dakika",
      installJitsi: "~15 dakika",
      installBbb: "~30 dakika + yapılandırma",
      nativeClients: "Yerel İstemciler",
      nativeClientsBedrud: "Web, Android, iOS",
      nativeClientsJitsi: "Web, Android, iOS",
      nativeClientsBbb: "Sadece Web",
      guestJoin: "Misafir Katılımı (Hesapsız)",
      guestJoinBedrud: "Evet",
      guestJoinJitsi: "Evet",
      guestJoinBbb: "Evet (moderatör onayı)",
      audioProcessing: "Ses İşleme (Gürültü Engelleme)",
      audioProcessingBedrud: "RNNoise / Krisp",
      audioProcessingJitsi: "Temel",
      audioProcessingBbb: "Temel",
      screenShare: "Ekran Paylaşımı",
      screenShareBedrud: "Yerleşik",
      screenShareJitsi: "Yerleşik",
      screenShareBbb: "Yerleşik",
      recording: "Kayıt",
      recordingBedrud: "Sunucu tarafı kayıt",
      recordingJitsi: "Jibri ile (ek kurulum)",
      recordingBbb: "Yerleşik + not dışa aktarımı",
      sipIntegration: "SIP / Telefon Araması",
      sipIntegrationBedrud: "Hayır",
      sipIntegrationJitsi: "SIP/Jibri ağ geçidi",
      sipIntegrationBbb: "SIP ağ geçidi",
      whiteboard: "Beyaz Tahta",
      whiteboardBedrud: "Hayır",
      whiteboardJitsi: "Hayır",
      whiteboardBbb: "Yerleşik beyaz tahta",
      maxUsers: "Maks. eşzamanlı kullanıcı",
      maxUsersBedrud: "50+ oda başına",
      maxUsersJitsi: "100+ ayar ile",
      maxUsersBbb: "300+ oda başına",
      license: "Lisans",
      licenseBedrud: "Apache 2.0",
      licenseJitsi: "Apache 2.0",
      licenseBbb: "LGPL 3.0",
      communitySize: "Topluluk ve Ekosistem",
      communitySizeBedrud: "Büyüyor",
      communitySizeJitsi: "Büyük, olgun",
      communitySizeBbb: "Büyük, akademik",
    },
  },
  features: {
    title: "Her Şey Dahil",
    subtitle:
      "Video, ses, kimlik doğrulama, botlar - hepsi dahil. Mikroservis mimarisi gerekmez.",
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
        "Web, Android ve iOS için yerel uygulamalar. Sadece sarmalayıcı değil - gerçek yerel uygulamalar. Otomasyon için sunucu tarafı SDK dahil.",
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
      "512MB RAM ile herhangi bir 64-bit Linux, macOS veya Windows'ta çalışır.",
  },
  platforms: {
    title: "Web Sarıcı Değil, Yerel Uygulamalar",
    subtitle:
      "Gerçek yerel uygulamalar - Web'de React, Android'de Kotlin, iOS'ta Swift, masaüstünde Rust, sunucuda Go. Electron yok, Cordova yok.",
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
      title: "Masaüstü",
      tech: "Rust + Slint",
    },
    server: {
      title: "Sunucu",
      tech: "Go + WebRTC",
    },
    bots: {
      title: "Botlar",
      tech: "Python SDK",
    },
    status: "Üretim",
  },
  openSource: {
    title: "Kaynak kodu oku. Kontrolü ele al.",
    subtitle:
      "Her kod satırı kamu açık. İnceleyin, denetleyin, katkıda bulunun veya çatallayın. Apache 2.0 lisanslı - ticari veya başka şekilde kullanın.",
    license: "Apache 2.0",
    github: "GitHub'da Görüntüle",
    docs: "Belgeleri Oku",
  },
  cta: {
    title: "Toplantılarınızı Kiralamayı Bırakın",
    subtitle:
      "Herhangi bir $5 VPS'ye 60 saniyede deploy edin. Kredi kartı gerekmez, satıcı bağımlılığı yok, üçüncü taraf sunucu yok.",
    installNow: "Sunucunuzu Dağıtın",
    getStarted: "Quickstart'ı Okuyun",
    readDocs: "Quickstart'i Görüntüle",
    starGithub: "GitHub'da Yıldız Ver",
  },
  faq: {
    title: "Sıkça Sorulan Sorular",
    subtitle: "Teknik sorular, doğrudan cevaplar.",
    updates: {
      question: "Güncellemeler nasıl çalışır?",
      answer:
        "Kurulum komutunu tekrar çalıştırın. Bedrud ikili dosyayı yerinde değiştirir - paket yöneticisi yok, bağımlılık zincirleri yok. Tek bir yapılandırma bayrağıyla otomatik güncellemeleri de etkinleştirebilirsiniz.",
    },
    encryption: {
      question: "Uçtan uca şifreli mi?",
      answer:
        "Tüm medya DTLS ve SRTP (WebRTC standardı) üzerinden şifrelenerek iletilir. Self-hosted dağıtımlarında sunucuyu ve tüm verileri siz kontrol edersiniz. Eşler arası aramalar için uçtan uca şifreleme yol haritasındadır.",
    },
    network: {
      question: "Ağ ve port gereksinimleri nelerdir?",
      answer:
        "HTTP/WebSocket için 80/443 portları ve WebRTC medyası için yapılandırılabilir UDP aralığı (varsayılan 50000–60000). NAT arkasında STUN/TURN sunucusu kurun - Bedrud coturn kurulum belgelerini içerir.",
    },
    proxy: {
      question: "Ters proxy arkasında çalıştırabilir miyim?",
      answer:
        "Evet. Nginx, Caddy, Traefik - hepsi çalışır. Belgeler her biri için kopyala-yapıştır yapılandırmaları içerir. WebSocket bağlantılarını iletmeniz ve uygun başlıkları ayarlamanız yeterli.",
    },
    cloudVsSelfHosted: {
      question: "Self-hosted ve Bedrud Cloud arasındaki fark nedir?",
      answer:
        "Aynı ürün, aynı özellikler. Self-hosted altyapınızda tam veri kontrolüyle çalışır. Bedrud Cloud operasyon, güncelleme ve ölçeklendirmeyi sizin için halleder. Satıcı kilidi yok - istediğiniz zaman geçiş yapın.",
    },
  },
  testimonials: {
    title: "Geliştiricilerin Güvendiği",
    subtitle: "İnsanlar Bedrud hakkında ne diyor.",
    one: {
      quote:
        "Jitsi kurulumumuzu bir öğleden sonra Bedrud ile değiştirdik. Tek ikili dosya, 512MB RAM ve toplantılarımız artık daha iyi sesleniyor.",
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
    platform: "Platform",
    features: "Özellikler",
    compare: "Karşılaştırma",
    demo: "Canlı Demo",
    docs: "Belgeler",
    api: "API Referansı",
    download: "İndir",
    about: "Hakkımızda",
    resources: "Kaynaklar",
    blog: "Blog",
    changelog: "Değişiklik Günlüğü",
    contribute: "Katkıda Bulun",
    reportIssue: "Sorun Bildir",
    contact: "İletişim",
    privacy: "Gizlilik Politikası",
    terms: "Hizmet Şartları",
  },
  privacy: {
    meta: {
      title: "Gizlilik Politikası - Bedrud",
      description:
        "Bedrud verilerinizi nasıl işler? Kısa versiyon: kendi sunucunuzda barındırmak verilerinizin sizde kalması demektir.",
    },
    title: "Gizlilik Politikası",
    lastUpdated: "Son güncelleme: 17 Nisan 2026",
    intro:
      "Bedrud açık kaynaklı video toplantı yazılımıdır. Kendi sunucunuzda barındırdığınızda verileriniz bizim sunucularımıza hiç dokunmaz. Bu politika bedrud.org web sitesini ve genel demo örneğini kapsar. Bedrud'u kendi sunucunuzda barındırırsanız kendi verilerinizi kontrol edersiniz.",
    dataCollection: {
      title: "Ne Topluyoruz",
      content:
        "Web sitesinde (bedrud.org): hiçbir şey. Çerez yok, izleyici yok, analiz yok. Genel demoda: bağlı kaldığınız sürece görünen adınız ve IP adresiniz. Bu kadar. E-posta, telefon, kişisel bilgi yok. Bedrud'u kendi sunucunuzda barındırdığınızda tüm veriler sizin altyapınızda kalır. Biz asla görmeyiz.",
    },
    dataUsage: {
      title: "Verileri Nasıl Kullanıyoruz",
      content:
        "Demo bağlantı verileri yalnızca gerçek zamanlı video ve ses yönlendirme için kullanılır. Günlüğe kaydedilmez, saklanmaz veya analiz edilmez. Kullanıcı profili oluşturmuyoruz, hedeflenmiş reklam sunmuyoruz, veri satmıyoruz. Asla.",
    },
    dataStorage: {
      title: "Veri Depolama",
      content:
        "Genel demo verileri kalıcı olarak saklamaz. Bağlantıyı kestiğinizde oturumunuz kaybolur - kayıt, sohbet geçmişi yok. Kendi sunucunuzda barındırılan örnekler verileri sunucunuzdaki SQLite'da saklar. Yedekleme stratejisini ve saklama politikasını siz seçersiniz. Erişimimiz yok.",
    },
    thirdParties: {
      title: "Üçüncü Taraf Hizmetleri",
      content:
        "Hiçbiri. Bedrud indirmeden sonra hiçbir giden istek göndermez. Analitik, çökme raporu, telemetri yok. Web sitesi üçüncü taraf betik yüklemez. Kendiniz doğrulayın - kaynak kod GitHub'da.",
    },
    cookies: {
      title: "Çerezler ve Yerel Depolama",
      content:
        "Web sitesi tema tercihiniz (karanlık/aydınlık) ve dil seçiminiz için localStorage kullanır. Bu kadar. İzleme çerezi, reklam kimliği yok. Demo, sekmeyi kapattığınızda sona eren bir oturum çerezi kullanır.",
    },
    yourRights: {
      title: "Haklarınız",
      content:
        "Kişisel veri toplamadığımız için bizden erişilecek, düzeltilecek veya silinecek bir şey yok. Demo sekmesini kapatın ve oturum verileriniz zaten kaybolmuştur. Kendi sunucunuzda barındıran kullanıcılar sunucularındaki tüm veriler üzerinde tam kontrole sahiptir - dışa aktarma, yedekleme, silme, ihtiyacınız olan her şey.",
    },
    changes: {
      title: "Bu Politikadaki Değişiklikler",
      content:
        "Veri uygulamalarımız değişirse bu sayfayı güncelleriz. Neredeyse hiç veri toplamadığımız için değişiklik olası değildir. Sayfanın en üstündeki tarih en son revizyonu yansıtır.",
    },
    contact: {
      title: "İletişim",
      content:
        "Sorularınız mı var? GitHub'da bir issue açın veya privacy@bedrud.com adresine e-posta gönderin. Gerçek zamanlı sohbeti tercih ederseniz Discord'da da bulunuyoruz.",
    },
  },
  terms: {
    meta: {
      title: "Hizmet Şartları - Bedrud",
      description:
        "bedrud.org web sitesi ve genel demo için hizmet şartları. Kendi sunucunuzda barındıran kullanıcılar Apache 2.0 lisansına tabidir.",
    },
    title: "Hizmet Şartları",
    lastUpdated: "Son güncelleme: 17 Nisan 2026",
    intro:
      "Bu şartlar bedrud.org web sitesini ve demo.bedrud.org adresindeki genel demo örneğini kapsar. Bedrud'u indirip kendi sunucunuzda barındırırsanız, Apache 2.0 lisansı yazılım kullanımınızı yönetir.",
    acceptance: {
      title: "Bedrud'u Kullanmak Bu Şartları Kabul Ettiğiniz Anlamına Gelir",
      content:
        "bedrud.org'u ziyaret ederek veya genel demoyu kullanarak bu şartları kabul etmiş olursunuz. Katılmıyorsanız, demoyu kullanmayın. Basit.",
    },
    services: {
      title: "Bedrud Ne Sunar",
      content:
        "Belgeler ve indirme bağlantıları içeren bu web sitesini ve yazılımı değerlendirmek için bir genel demo örneği sunuyoruz. Video toplantı yazılımı Apache 2.0 lisansı altında açık kaynaktır. İndirin, değiştirin, kendiniz çalıştırın.",
    },
    accounts: {
      title: "Hesaplar",
      content:
        "Web sitesi hesap gerektirmez. Demo hesap gerektirmez. Kendi sunucunuzda barındırılan örnekler kendi hesap sistemlerine sahip olabilir - sunucuyu siz yönettiğiniz için bu sizin kararınızdır.",
    },
    acceptableUse: {
      title: "Demoyu Kötüye Kullanmayın",
      content:
        "Genel demoyu yasadışı içerik, spam, taciz veya başkalarının deneyimini olumsuz etkileyen herhangi bir şey için kullanmayın. Kötüye kullanan kullanıcıları demo odasından kaldırma hakkını saklı tutarız. Bu, kendi sunucunuzda barındırılan örnekler için geçerli değildir - kendi kurallarınızı koyarsınız.",
    },
    intellectualProperty: {
      title: "Açık Kaynak Lisansı",
      content:
        "Bedrud Apache 2.0 lisansı altındadır. Ticari dahil olmak üzere kullanabilir, değiştirebilir ve dağıtabilirsiniz. Bedrud adı ve logosu theMadOrg'un ticari markalarıdır. Yazılıma atıfta bulunmak için kullanabilirsiniz, ancak projedeki ilişkinizi yanlış temsil etmek için kullanamazsınız.",
    },
    termination: {
      title: "Erişim",
      content:
        "Kötüye kullanım durumunda genel demoya erişimi istediğiniz zaman iptal edebiliriz. Gerekirse web sitesini kapatabiliriz. Ancak ikili dosyayı indirdiğinizde Apache 2.0 lisansı altında sizindir. Bunu iptal edemeyiz.",
    },
    liability: {
      title: "Garanti Yok",
      content:
        "Bedrud olduğu gibi sağlanır. Her ortamda kusursuz çalışacağını garanti etmiyoruz. Kesinti, veri kaybı veya yazılım kullanımından kaynaklanan herhangi bir zarar için sorumlu değiliz. Tam yasal metin için Apache 2.0 lisansına bakın.",
    },
    governingLaw: {
      title: "Geçerli Hukuk",
      content:
        "Bu şartlar geçerli yasalara tabidir. Anlaşmazlıklar için, avukatlara başvurmadan önce GitHub issue veya doğrudan iletişim yoluyla çözmeyi tercih ederiz.",
    },
    changes: {
      title: "Güncellemeler",
      content:
        "Bu şartları güncelleyebiliriz. Güncellersek bu sayfadaki tarihi değiştiririz. Değişikliklerden sonra demo veya web sitesini kullanmaya devam etmek değişiklikleri kabul ettiğiniz anlamına gelir.",
    },
    contact: {
      title: "İletişim",
      content:
        "Bu şartlarla ilgili sorularınız mı var? legal@bedrud.com adresine e-posta gönderin veya GitHub'da bir issue açın.",
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
  installPage: {
    meta: {
      title: "Kurulum - Bedrud - Tek Komutla Dağıtım",
      description:
        "Bedrud'u sunucunuza bir dakikadan kısa sürede dağıtın. Tek binary, 512MB RAM, Docker gerektirmez.",
    },
    title: "Bedrud'u Kurun",
    subtitle:
      "Sunucunuza video toplantılarını bir dakikadan kısa sürede dağıtın. Tek binary, sıfır bağımlılık.",
  },
  blog: {
    meta: {
      title: "Blog - Bedrud",
      description:
        "Bedrud ekibinden güncellemeler, mühendislik derinlemesine incelemeleri ve kılavuzlar.",
    },
    title: "Blog",
    subtitle:
      "Bedrud ekibinden güncellemeler, mühendislik derinlemesine incelemeleri ve kılavuzlar.",
    noPosts: "Henüz yazı yok. Yakında tekrar kontrol edin!",
    backToBlog: "Blog'a Dön",
  },
  skipToContent: "İçeriğe geç",
  mobileNav: {
    navigation: "Navigation",
    language: "Language",
    getStarted: "Başlayın",
  },
  featuresPage: {
    meta: {
      title: "Özellikler - Bedrud",
      description:
        "Bedrud'un özelliklerini keşfedin: tek binary, WebRTC kalitesi, misafir katılımı, passkeys, yönetici kontrolleri, ses işleme, bot ajanları ve çoklu platform desteği.",
    },
    title: "Özellikler",
    subtitle: "Her özellik gerçek bir sorunu çözer.",
    sectionTitle: "İhtiyacınız olan her şey, gereksiz hiçbir şey yok",
    sectionSubtitle:
      "Tek bir dosya içinde video toplantı altyapısı. Harici bağımlılık yok, koltuk başı fiyatlandırma yok, satıcı kilidi yok.",
    groups: {
      infra: "Dağıtım & Altyapı",
      media: "Toplantılar & Medya",
      access: "Erişim & Kontrol",
      extend: "Genişlet",
    },
    learnMore: "Daha fazla bilgi",
    stats: {
      ram: "512MB RAM",
      binary: "1 Binary",
      auth: "6 Auth Yöntemi",
      platforms: "5 Platform",
    },
    guestJoin: {
      pain: "Sadece 15 dakikalık bir arama için misafirleri hesap oluşturmaya zorlamaktan yoruldunuz mu?",
      title: "Misafir Katılımı - Hesap Gerekmez",
      description:
        "Bir bağlantı paylaşın, tıklayınlar, içeride. Kayıt formu yok, şifre yok, sürtünme yok. Güvenlik için isteğe bağlı şifre.",
    },
    singleBinary: {
      pain: "Video altyapısı kurmak bir DevOps diploması gerektirmemeli.",
      title: "Tek Binary Dağıtımı",
      description:
        "Tek indirme, tek komut, çalışıyor. Docker Compose yok, Kubernetes manifesti yok, 12 adımlı rehberler yok. Sadece çalışan bir dosya.",
      snippet: "$ curl -sSL bedrud.dev/install.sh | sh",
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
        "Oda yönetimi, kullanıcı yönetimi, kullanım analitiği ve yapılandırma - hepsi temiz bir web arayüzünden. CLI tahmini yok.",
    },
    audio: {
      pain: "Toplantılarda arka plan gürültüsü dikkati dağıtır ve profesyonel değildir.",
      title: "Ses İşleme",
      description:
        "RNNoise ile çalışan yerleşik gürültü engelleme. Premium AI gürültü engelleme için isteğe bağlı Krisp entegrasyonu. Her aramada temiz ses.",
    },
    bots: {
      pain: "Manuel toplantı görevleri zamanı boşa harcar - kayıt, transkripsiyon, notlar.",
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
    e2eEncryption: {
      pain: "Sunucunuzdan geçen toplantı içeriği gizli kalmalıdır.",
      title: "Uçtan Uca Şifreleme",
      description:
        "Odalar için isteğe bağlı E2E şifreleme. Sunucu şifrelenmiş medyayı sadece iletir - sadece katılımcılar çözebilir.",
    },
    autoTls: {
      pain: "SSL sertifikaları kurmak için rehber gerektirmemeli.",
      title: "Otomatik TLS ve HTTPS",
      description:
        "Otomatik Let's Encrypt sağlama ve yenileme. İç ağlar için kendi imzalı sertifikalar.",
    },
    airGapped: {
      pain: "Sunucularınız internete erişemezse ne olur?",
      title: "Air-Gapped ve Çevrimdışı Hazır",
      description:
        "İndirdikten sonra sıfır giden istek. Gömülü SQLite. Hiçbir zaman genel internete dokunmayan altyapıda çalışır.",
    },
  },
  demoPage: {
    meta: {
      title: "Canlı Demo - Bedrud",
      description:
        "Bedrud'u kurmadan deneyin. Şimdi canlı bir demo toplantısına katılın.",
    },
    hero: {
      headline: "Bedrud'u Şimdi Deneyin",
      subtitle:
        "Tarayıcınızda canlı bir toplantıya katılın. Hesap yok, indirme yok, bekleme yok.",
    },
    cta: {
      tryNow: "Canlı Demoyu Aç",
      noInstall: "Kurulum yok. Hesap yok. Taahhüt yok. Tıklayın ve katılın.",
    },
    preview: {
      caption: "Demoya katıldığınızda göreceğiniz şey",
    },
    features: {
      instantJoin: {
        title: "Anında Katılma",
        description:
          "Bağlantıya tıklayın ve içeri girin. Kayıt formu, e-posta doğrulaması, uygulama kurulumu yok. Tüm modern tarayıcılarda çalışır.",
      },
      noAccount: {
        title: "Hesap Gerekmez",
        description:
          "Bir görünen ad seçin ve konuşmaya başlayın. Bittiğinde sekmeyi kapatın. Hiçbir şey kalmaz.",
      },
      webrtc: {
        title: "Gerçek WebRTC Kalitesi",
        description:
          "Demo, kendi sunucunuzda barındırılan Bedrud ile aynı motoru kullanır. Alt saniye gecikme, uyarlanabilir bit hızı, kristal berraklığında ses.",
      },
      e2e: {
        title: "Uçtan Uca Şifreleme",
        description:
          "Oda ayarlarında E2E şifrelemeyi etkinleştirin. Videonuz ve sesiniz tarayıcınızı terk etmeden önce şifrelenir.",
      },
    },
    faq: {
      whatHappens: {
        question: "Demoda ne olur?",
        answer:
          "Tam Bedrud yığınını çalıştıran paylaşılan bir toplantı odasına katılırsınız. Video, ses, ekran paylaşımı, sohbet ve toplantı kontrollerini test edin - kendi sunucunuzda barındırılan bir örnekle aynı.",
      },
      dataSaved: {
        question: "Verilerim kaydedilir mi?",
        answer:
          "Hayır. Demo verileri kalıcı olarak saklamaz. Ayrıldığınızda oturumunuz kaybolur - kayıt, sohbet geçmişi, saklanan hiçbir şey yok.",
      },
      duration: {
        question: "Demoyu ne kadar süre kullanabilirim?",
        answer:
          "Süre sınırı yok. Bedrud'u değerlendirmek için ihtiyacınız kadar demo kullanın. Kalıcı bir kurulum istediğinizde, kendi sunucunuzda barındırma 60 saniye sürer.",
      },
      inviteOthers: {
        question: "Başkalarını demoya davet edebilir miyim?",
        answer:
          "Evet. Demo bağlantısını takım arkadaşlarınızla paylaşın ve herkes aynı odaya katılsın. Dağıtımdan önce takımınızla Bedrud'u test etmek için harika bir yol.",
      },
    },
    selfHost: {
      text: "Kendi sunucunuzu mu çalıştırmak istersiniz?",
      cta: "Kurulum rehberini okuyun",
    },
  },
  changelogPage: {
    meta: {
      title: "Değişiklik Günlüğü - Bedrud",
      description: "Bedrud için sürüm geçmişi ve güncellemeler.",
    },
    title: "Değişiklik Günlüğü",
    subtitle: "Bedrud'da yeni olanlar. Aktivite = güven.",
    viewOnGithub: "GitHub'da Görüntüle",
    noReleases: "Henüz sürüm yok. Yakında tekrar kontrol edin!",
  },
  contributorsPage: {
    meta: {
      title: "Katkıda Bulunanlar - Bedrud",
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
      title: "İletişim - Bedrud",
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
