# DCase.io — yeni site tasarımı

Statik yapı; ek bir derleme adımı yok. GitHub Pages'te doğrudan yayınlanır.

## Yayınlama
1. Bu klasörü bir GitHub deposuna gönderin (`uploads/` klasörü eski site ekran görüntüleridir; depoya eklemek zorunlu değildir).
2. Depo ayarları → **Pages** → Source: *Deploy from a branch* → Branch: `main`, Folder: `/ (root)`.
3. Site adresi: `https://<kullanici>.github.io/<depo>/` → `index.html` seçici sayfayı açar.

## Dosyalar
- `index.html` — üç ana sayfa yönünü canlı önizlemeyle listeleyen seçici.
- `home-a.dc.html` · `home-b.dc.html` · `home-c.dc.html` — Komuta Merkezi (koyu) · Editoryal · Bento.
- `SiteNav.dc.html`, `SiteFooter.dc.html` — ortak üst menü (mega menü, EN/TR anahtarı) ve alt bilgi.
- `MockConsole`, `MockWorkflow`, `MockSla`, `MockAnalytics` (`.dc.html`) — canlı ürün ekranı bileşenleri.
- `copy.js` — tüm EN/TR metinler tek yerde. `site.js` — scroll-reveal, sayaç, parallax yardımcıları.
- `support.js` — bileşen çalışma zamanı (React'i CDN'den yükler). `assets/` — logo dosyaları.

Dil tercihi tarayıcıda saklanır (`localStorage: dcase_lang`).
