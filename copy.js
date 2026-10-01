// DCase site copy — EN / TR. Product UI mock text stays English (the product's UI language).
const P = { home:'index.html', product:'Product.dc.html', solutions:'Solutions.dc.html', industries:'Industries.dc.html', customers:'Customers.dc.html', resources:'Resources.dc.html', about:'About.dc.html', contact:'Contact.dc.html' };

export const PAGES = P;

export const COPY = {
en: {
  nav: {
    items: [
      { key:'product', label:'Product', href:P.product, menu:true },
      { key:'solutions', label:'Solutions', href:P.solutions, menu:true },
      { key:'customers', label:'Customers', href:P.customers },
      { key:'resources', label:'Resources', href:P.resources, menu:true },
      { key:'company', label:'Company', href:P.about, menu:true },
    ],
    menus: {
      product: [
        { heading:'Manage', links:[ ['Ticket & Incident Management','Fast-track resolution with smart automation', P.product+'#tickets'], ['SLA & OLA Management','Automated monitoring and escalation', P.product+'#sla'], ['Asset & Configuration','One source of truth for every dependency', P.product+'#assets'] ] },
        { heading:'Automate', links:[ ['Workflow Automation','BPMN-based, rule-driven processes', P.product+'#workflow'], ['Form & Template Designer','No-code forms and dynamic fields', P.product+'#forms'], ['API Integrations','REST API, connectors and webhooks', P.product+'#api'] ] },
        { heading:'Measure & secure', links:[ ['Reporting & Analytics','Dashboards, trends and scheduled reports', P.product+'#analytics'], ['Role-Based Access','Multi-tenant RBAC and audit logging', P.product+'#access'] ] },
      ],
      solutions: [
        { heading:'By team', links:[ ['IT Operations','Unify incidents, changes and requests', P.solutions+'#it'], ['HR & Finance','Automate approvals and requests', P.solutions+'#hr'], ['Customer Experience','Monitor support in real time', P.solutions+'#cx'] ] },
        { heading:'By industry', links:[ ['Telecommunications & Media','', P.industries+'#telecom'], ['Financial Services','', P.industries+'#finance'], ['Government','', P.industries+'#government'], ['Service Providers','', P.industries+'#providers'], ['Education','', P.industries+'#education'] ] },
      ],
      resources: [
        { heading:'Learn', links:[ ['Use Cases','Industry playbooks', P.industries], ['Success Stories','Measured results from customers', P.customers], ['Product Demo','See DCase in action', P.contact] ] },
      ],
      company: [
        { heading:'Company', links:[ ['About DCase','25+ years of collective experience', P.about], ['Contact','Tallinn · Istanbul', P.contact] ] },
      ],
    },
    cta:'Request a demo', menuLabel:'Menu',
  },
  hero: {
    eyebrow:'Next-generation service management',
    title1:'Service management,', title2:'reengineered.',
    sub:'DCase brings incidents, requests, workflows and SLAs together on one modular, API-driven platform — so IT and business teams resolve faster, automate more and stay ahead of disruptions.',
    primary:'Request a demo', secondary:'Explore the platform',
    note:'Trusted by leaders in telecommunications, healthcare and government.',
    chips:['SLA breach prevented','Auto-routed to Network team','Root cause: DNS'],
  },
  sectors:['Telecommunications','Financial Services','Government','Healthcare','Genetic Laboratory','Service Providers','Education','Media & Technology'],
  metrics:[
    { value:35, suffix:'%', label:'faster incident resolution', note:'Telecommunications provider' },
    { value:42, suffix:'%', label:'faster test completion', note:'Genetic laboratory' },
    { value:100, suffix:'%', label:'audit traceability', note:'Government institution' },
    { value:45, suffix:'%', label:'less manual IT workload', note:'With intelligent automation' },
  ],
  modules: {
    eyebrow:'Platform', title:'One platform. Every service.', sub:'Modular by design: start with tickets, add automation, SLAs and analytics as you grow.',
    more:['Form & template designer','Role-based access','REST API & connectors','Asset & configuration'],
    tabs:[
      { key:'tickets', label:'Tickets & incidents', title:'Incident & Request Management', tag:'Fast-track resolution with smart automation', bullets:['Automated ticket categorization cuts manual triage','Real-time incident alerts detect disruptions instantly','Root-cause analysis reveals patterns behind recurring issues','Self-service portals guide users to resolution'] },
      { key:'workflow', label:'Workflows', title:'Advanced Workflow Management', tag:'Transform operations with automation', bullets:['Pre-built BPMN integrations define automated workflows','Rule-based execution for routing, approvals and escalations','Event-driven triggers react to ticket status changes','Custom API integrations extend automation beyond DCase'] },
      { key:'sla', label:'SLA & OLA', title:'SLA & OLA Management', tag:'Service continuity with automated monitoring', bullets:['SLA templates and time-based rules automate tracking and breach escalation','Auto-triggered notifications alert teams before deadlines are missed','Escalation workflows redirect unresolved issues automatically','Compliance dashboards show SLA adherence in real time'] },
      { key:'analytics', label:'Analytics', title:'Embedded Reporting & Analytics', tag:'Turn data into actionable insight', bullets:['Custom dashboard builder with flexible widgets','Trend analysis and predictive insights surface bottlenecks','Scheduled reports delivered to stakeholders automatically','Multi-level filtering drills into ticket and SLA data instantly'] },
    ],
  },
  outcomes: {
    eyebrow:'Outcomes', title:'Drive tangible results', sub:'Measurable impact across your entire organization.',
    pillars:[
      { n:'01', title:'From operations to business acceleration', items:[ ['Break down silos','Connect IT and business workflows in one intelligent ecosystem.'], ['Automate and scale with confidence','Streamline repetitive tasks and focus on innovation-driven growth.'], ['From cost center to value driver','Turn IT into a business enabler that accelerates outcomes.'] ] },
      { n:'02', title:'Predict, prevent and evolve', items:[ ['Stay ahead of disruptions','Predictive insights prevent incidents before they impact the business.'], ['AI-driven service continuity','Automate problem resolution and incident response in real time.'], ['Minimize downtime','Every second matters: keep critical systems at peak efficiency.'] ] },
      { n:'03', title:'Optimize, automate and elevate', items:[ ['Maximize productivity','Eliminate up to 45% of manual IT workloads with intelligent automation.'], ['Modular and future-ready','Deploy a platform that grows with your organization.'], ['Cost-optimized, flexible growth','Scalable pricing with predictable outcomes.'] ] },
    ],
  },
  teams: {
    eyebrow:'Teams', title:'Service management for every team', sub:'Same platform, different playbooks.',
    items:[
      { title:'IT Operations', desc:'Unify incidents, changes and requests for efficient IT service management.', stat:'Incidents · Changes · Requests' },
      { title:'HR & Finance', desc:'Automate approvals and requests to streamline HR and finance processes.', stat:'Approvals · Onboarding · Procurement' },
      { title:'Customer Experience', desc:'Monitor support in real time for faster, better customer service.', stat:'Support · SLAs · Satisfaction' },
    ],
  },
  customers: {
    eyebrow:'Customers', title:'Proven in demanding environments', sub:'Already trusted by leaders in telecommunications, healthcare and government.',
    stories:[
      { sector:'Telecommunications provider', value:'35%', label:'faster incident resolution', desc:'One operational view for 200+ agents managing 2,500+ monthly tickets.' },
      { sector:'Genetic laboratory', value:'42%', label:'faster test completion', desc:'1,000+ test processes a month with a full audit trail.' },
      { sector:'Government institution', value:'100%', label:'audit traceability', desc:'Migrated from legacy systems within one week.' },
    ],
    quotes:[
      { text:'Partnering with DCase has profoundly enhanced our IT operations. The remarkable efficiency improvements and transparency in service management have exceeded our expectations.', name:'L. Thompson', role:'Chief Information Officer · Finance' },
      { text:'Implementing DCase\u2019s solutions has completely redefined our operations. Our team now functions with heightened precision and agility, consistently delivering exceptional customer satisfaction.', name:'Z. Cetintas', role:'Director of Operations · Telco' },
    ],
    more:'Read all success stories',
  },
  cta: {
    title:'Let\u2019s build your ideal service management solution together.',
    sub:'Tell us about your challenges. Our experts will design a tailored solution that fits your existing ecosystem.',
    bullets:['Personalized roadmap based on your business challenges','Optimized automation and service workflows','Seamless integration with your current tools'],
    button:'Request a demo', secondary:'Talk to an expert',
  },
  footer: {
    tagline:'Next-generation, modular, API-driven service management.',
    cols:[
      { heading:'Product', links:[ ['Ticket & Incident Management',P.product+'#tickets'], ['Workflow Automation',P.product+'#workflow'], ['SLA & OLA Management',P.product+'#sla'], ['Reporting & Analytics',P.product+'#analytics'], ['Form & Template Designer',P.product+'#forms'], ['Role-Based Access',P.product+'#access'], ['API Integrations',P.product+'#api'] ] },
      { heading:'Solutions', links:[ ['IT Operations',P.solutions+'#it'], ['HR & Finance',P.solutions+'#hr'], ['Customer Experience',P.solutions+'#cx'], ['Telecommunications',P.industries+'#telecom'], ['Financial Services',P.industries+'#finance'], ['Government',P.industries+'#government'], ['Education',P.industries+'#education'] ] },
      { heading:'Resources', links:[ ['Use Cases',P.industries], ['Success Stories',P.customers], ['Product Demo',P.contact] ] },
      { heading:'Company', links:[ ['About',P.about], ['Contact',P.contact], ['Request a demo',P.contact] ] },
    ],
    hq:'Headquarters', hqv:'DCase OÜ · Tallinn, Estonia', office:'Regional office', officev:'Istanbul, Türkiye',
    email:'info@dcase.com', phone:'+90 216 455 44 10',
    legal:['Privacy','Terms','Cookies'], rights:'© 2026 DCase OÜ. All rights reserved.',
  },
},

tr: {
  nav: {
    items: [
      { key:'product', label:'Ürün', href:P.product, menu:true },
      { key:'solutions', label:'Çözümler', href:P.solutions, menu:true },
      { key:'customers', label:'Müşteriler', href:P.customers },
      { key:'resources', label:'Kaynaklar', href:P.resources, menu:true },
      { key:'company', label:'Şirket', href:P.about, menu:true },
    ],
    menus: {
      product: [
        { heading:'Yönetin', links:[ ['Bilet ve Olay Yönetimi','Akıllı otomasyonla hızlı çözüm', P.product+'#tickets'], ['SLA ve OLA Yönetimi','Otomatik izleme ve eskalasyon', P.product+'#sla'], ['Varlık ve Konfigürasyon','Her bağımlılık için tek doğru kaynak', P.product+'#assets'] ] },
        { heading:'Otomatikleştirin', links:[ ['İş Akışı Otomasyonu','BPMN tabanlı, kural güdümlü süreçler', P.product+'#workflow'], ['Form ve Şablon Tasarımcısı','Kodsuz formlar, dinamik alanlar', P.product+'#forms'], ['API Entegrasyonları','REST API, bağlayıcılar ve webhook\u2019lar', P.product+'#api'] ] },
        { heading:'Ölçün ve koruyun', links:[ ['Raporlama ve Analitik','Panolar, trendler, zamanlanmış raporlar', P.product+'#analytics'], ['Rol Tabanlı Erişim','Çok kiracılı RBAC ve denetim günlüğü', P.product+'#access'] ] },
      ],
      solutions: [
        { heading:'Ekibe göre', links:[ ['BT Operasyonları','Olay, değişiklik ve talepleri birleştirin', P.solutions+'#it'], ['İK ve Finans','Onay ve talepleri otomatikleştirin', P.solutions+'#hr'], ['Müşteri Deneyimi','Desteği gerçek zamanlı izleyin', P.solutions+'#cx'] ] },
        { heading:'Sektöre göre', links:[ ['Telekomünikasyon ve Medya','', P.industries+'#telecom'], ['Finansal Hizmetler','', P.industries+'#finance'], ['Kamu','', P.industries+'#government'], ['Hizmet Sağlayıcılar','', P.industries+'#providers'], ['Eğitim','', P.industries+'#education'] ] },
      ],
      resources: [
        { heading:'Öğrenin', links:[ ['Kullanım Senaryoları','Sektörel rehberler', P.industries], ['Başarı Hikâyeleri','Müşterilerden ölçülmüş sonuçlar', P.customers], ['Ürün Demosu','DCase\u2019i iş başında görün', P.contact] ] },
      ],
      company: [
        { heading:'Şirket', links:[ ['DCase Hakkında','25+ yıllık ortak deneyim', P.about], ['İletişim','Tallinn · İstanbul', P.contact] ] },
      ],
    },
    cta:'Demo talep et', menuLabel:'Menü',
  },
  hero: {
    eyebrow:'Yeni nesil hizmet yönetimi',
    title1:'Hizmet yönetimi,', title2:'yeniden tasarlandı.',
    sub:'DCase; olayları, talepleri, iş akışlarını ve SLA\u2019ları modüler, API öncelikli tek bir platformda birleştirir. BT ve iş ekipleri daha hızlı çözer, daha çok otomatikleştirir ve kesintilerin önüne geçer.',
    primary:'Demo talep et', secondary:'Platformu keşfet',
    note:'Telekomünikasyon, sağlık ve kamu sektörünün liderleri tarafından tercih ediliyor.',
    chips:['SLA ihlali önlendi','Ağ ekibine otomatik yönlendirildi','Kök neden: DNS'],
  },
  sectors:['Telekomünikasyon','Finansal Hizmetler','Kamu','Sağlık','Genetik Laboratuvarı','Hizmet Sağlayıcılar','Eğitim','Medya ve Teknoloji'],
  metrics:[
    { value:35, suffix:'%', label:'daha hızlı olay çözümü', note:'Telekom operatörü' },
    { value:42, suffix:'%', label:'daha hızlı test tamamlama', note:'Genetik laboratuvarı' },
    { value:100, suffix:'%', label:'denetim izlenebilirliği', note:'Kamu kurumu' },
    { value:45, suffix:'%', label:'daha az manuel BT iş yükü', note:'Akıllı otomasyonla' },
  ],
  modules: {
    eyebrow:'Platform', title:'Tek platform. Her hizmet.', sub:'Tasarımı gereği modüler: biletlerle başlayın; büyüdükçe otomasyon, SLA ve analitiği ekleyin.',
    more:['Form ve şablon tasarımcısı','Rol tabanlı erişim','REST API ve bağlayıcılar','Varlık ve konfigürasyon'],
    tabs:[
      { key:'tickets', label:'Bilet ve olaylar', title:'Olay ve Talep Yönetimi', tag:'Akıllı otomasyonla hızlı çözüm', bullets:['Otomatik bilet sınıflandırma manuel triyajı azaltır','Gerçek zamanlı uyarılar kesintileri anında tespit eder','Kök neden analizi tekrarlayan sorunların örüntüsünü ortaya çıkarır','Self-servis portallar kullanıcıları çözüme yönlendirir'] },
      { key:'workflow', label:'İş akışları', title:'Gelişmiş İş Akışı Yönetimi', tag:'Operasyonları otomasyonla dönüştürün', bullets:['Hazır BPMN entegrasyonlarıyla otomatik iş akışları tanımlayın','Kural tabanlı yürütme: yönlendirme, onay ve eskalasyon','Olay güdümlü tetikleyiciler bilet durumundaki değişimlere anında tepki verir','Özel API entegrasyonları otomasyonu DCase\u2019in ötesine taşır'] },
      { key:'sla', label:'SLA ve OLA', title:'SLA ve OLA Yönetimi', tag:'Otomatik izlemeyle hizmet sürekliliği', bullets:['SLA şablonları ve zaman tabanlı kurallar takibi ve ihlal eskalasyonunu otomatikleştirir','Otomatik bildirimler ekipleri son tarihlerden önce uyarır','Eskalasyon akışları çözülmeyen sorunları otomatik yeniden yönlendirir','Uyumluluk panoları SLA uyumunu gerçek zamanlı gösterir'] },
      { key:'analytics', label:'Analitik', title:'Gömülü Raporlama ve Analitik', tag:'Veriyi eyleme dönüştürün', bullets:['Esnek bileşenlerle özel pano oluşturucu','Trend analizi ve öngörüler darboğazları ortaya çıkarır','Zamanlanmış raporlar paydaşlara otomatik iletilir','Çok seviyeli filtreleme bilet ve SLA verisine anında iner'] },
    ],
  },
  outcomes: {
    eyebrow:'Sonuçlar', title:'Somut sonuçlar üretin', sub:'Tüm organizasyonunuzda ölçülebilir etki.',
    pillars:[
      { n:'01', title:'Operasyondan iş hızlandırmaya', items:[ ['Siloları kırın','BT ve iş akışlarını merkezi, akıllı bir ekosistemde birleştirin.'], ['Güvenle otomatikleştirin ve ölçeklenin','Tekrarlayan işleri sadeleştirin, inovasyona odaklanın.'], ['Maliyet merkezinden değer üreticisine','BT\u2019yi sonuçları hızlandıran bir iş ortağına dönüştürün.'] ] },
      { n:'02', title:'Öngörün, önleyin, gelişin', items:[ ['Kesintilerin önüne geçin','Öngörüsel içgörülerle olayları işinizi etkilemeden önce önleyin.'], ['Yapay zekâ destekli hizmet sürekliliği','Sorun çözümünü ve olay müdahalesini gerçek zamanlı otomatikleştirin.'], ['Kesinti süresini en aza indirin','Her saniye önemli: kritik sistemleri en yüksek verimde çalıştırın.'] ] },
      { n:'03', title:'Optimize edin, otomatikleştirin, yükseltin', items:[ ['Verimliliği en üst düzeye çıkarın','Manuel BT iş yükünün %45\u2019ine kadarını akıllı otomasyonla ortadan kaldırın.'], ['Modüler ve geleceğe hazır','Organizasyonunuzla birlikte büyüyen bir platform kurun.'], ['Maliyet odaklı, esnek büyüme','Ölçeklenebilir fiyatlandırma, öngörülebilir sonuçlar.'] ] },
    ],
  },
  teams: {
    eyebrow:'Ekipler', title:'Her ekip için hizmet yönetimi', sub:'Aynı platform, farklı oyun planları.',
    items:[
      { title:'BT Operasyonları', desc:'Olayları, değişiklikleri ve talepleri tek yerde birleştirin; BT hizmetini verimli yönetin.', stat:'Olaylar · Değişiklikler · Talepler' },
      { title:'İK ve Finans', desc:'Onayları ve talepleri otomatikleştirerek İK ve finans süreçlerini hızlandırın.', stat:'Onaylar · İşe alım · Satın alma' },
      { title:'Müşteri Deneyimi', desc:'Desteği gerçek zamanlı izleyin; daha hızlı, daha iyi müşteri hizmeti verin.', stat:'Destek · SLA · Memnuniyet' },
    ],
  },
  customers: {
    eyebrow:'Müşteriler', title:'Zorlu ortamlarda kanıtlanmış', sub:'Telekomünikasyon, sağlık ve kamu sektörünün liderleri DCase\u2019e güveniyor.',
    stories:[
      { sector:'Telekom operatörü', value:'%35', label:'daha hızlı olay çözümü', desc:'Ayda 2.500+ bilet yöneten 200+ temsilci için tek operasyonel görünüm.' },
      { sector:'Genetik laboratuvarı', value:'%42', label:'daha hızlı test tamamlama', desc:'Ayda 1.000+ test süreci, tam denetim iziyle.' },
      { sector:'Kamu kurumu', value:'%100', label:'denetim izlenebilirliği', desc:'Eski sistemlerden geçiş bir haftada tamamlandı.' },
    ],
    quotes:[
      { text:'DCase ile iş birliğimiz BT operasyonlarımızı köklü biçimde geliştirdi. Hizmet yönetimindeki verimlilik artışı ve şeffaflık beklentilerimizi aştı.', name:'L. Thompson', role:'Bilgi Teknolojileri Direktörü · Finans' },
      { text:'DCase çözümlerini uygulamak operasyonlarımızı tamamen yeniden tanımladı. Ekibimiz artık daha yüksek hassasiyet ve çeviklikle çalışıyor; müşteri memnuniyetini istikrarlı biçimde en üst düzeyde tutuyor.', name:'Z. Çetintaş', role:'Operasyon Direktörü · Telekom' },
    ],
    more:'Tüm başarı hikâyelerini okuyun',
  },
  cta: {
    title:'İdeal hizmet yönetimi çözümünüzü birlikte kuralım.',
    sub:'Zorluklarınızı anlatın; uzmanlarımız mevcut ekosisteminize uyan, size özel bir çözüm tasarlasın.',
    bullets:['İş zorluklarınıza göre kişiselleştirilmiş yol haritası','Optimize edilmiş otomasyon ve hizmet akışları','Mevcut araçlarınızla sorunsuz entegrasyon'],
    button:'Demo talep et', secondary:'Bir uzmanla görüşün',
  },
  footer: {
    tagline:'Yeni nesil, modüler, API öncelikli hizmet yönetimi.',
    cols:[
      { heading:'Ürün', links:[ ['Bilet ve Olay Yönetimi',P.product+'#tickets'], ['İş Akışı Otomasyonu',P.product+'#workflow'], ['SLA ve OLA Yönetimi',P.product+'#sla'], ['Raporlama ve Analitik',P.product+'#analytics'], ['Form ve Şablon Tasarımcısı',P.product+'#forms'], ['Rol Tabanlı Erişim',P.product+'#access'], ['API Entegrasyonları',P.product+'#api'] ] },
      { heading:'Çözümler', links:[ ['BT Operasyonları',P.solutions+'#it'], ['İK ve Finans',P.solutions+'#hr'], ['Müşteri Deneyimi',P.solutions+'#cx'], ['Telekomünikasyon',P.industries+'#telecom'], ['Finansal Hizmetler',P.industries+'#finance'], ['Kamu',P.industries+'#government'], ['Eğitim',P.industries+'#education'] ] },
      { heading:'Kaynaklar', links:[ ['Kullanım Senaryoları',P.industries], ['Başarı Hikâyeleri',P.customers], ['Ürün Demosu',P.contact] ] },
      { heading:'Şirket', links:[ ['Hakkımızda',P.about], ['İletişim',P.contact], ['Demo talep et',P.contact] ] },
    ],
    hq:'Genel merkez', hqv:'DCase OÜ · Tallinn, Estonya', office:'Bölge ofisi', officev:'İstanbul, Türkiye',
    email:'info@dcase.com', phone:'+90 216 455 44 10',
    legal:['Gizlilik','Şartlar','Çerezler'], rights:'© 2026 DCase OÜ. Tüm hakları saklıdır.',
  },
},
};

export function getLang(){ try { return localStorage.getItem('dcase_lang') || 'en'; } catch(e){ return 'en'; } }
export function setLangStored(l){ try { localStorage.setItem('dcase_lang', l); } catch(e){} }
