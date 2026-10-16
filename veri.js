/* PROJE SORGULAMA VERİLERİ. Ödeme aldıkça sadece bu dosyayı düzenleyin. */

// Proje durumu aşamaları ve ağırlıkları (toplam 100)
const STAGES = [
  {n:"Sözleşme ve ön görüşme", w:5},
  {n:"İmar durumu ve rölöve", w:10},
  {n:"Avan proje", w:20},
  {n:"Uygulama projesi (mimari)", w:20},
  {n:"Statik, mekanik ve elektrik projeleri", w:20},
  {n:"Belediye onayı ve ruhsat", w:15},
  {n:"Şantiye takibi ve iskân", w:10}
];

// Ödeme kalemleri. Projelerde pay:[[alınan, toplam], ...] bu sırayla yazılır (TL). Projede olmayan kalem için null yazın. Kalan tutar otomatik hesaplanır.
const PAY_ITEMS = ["Harita", "Mimari proje", "Elektrik projesi", "Mekanik projesi", "Statik proje", "Zemin etüdü", "Belediye harçları"];

// Her projede aşamaların ilerlemesi 0–100 arası yazılır (sırası STAGES ile aynı)
// docs: indirilebilir belgeler. Anahtar aşama numarasıdır (0'dan başlar: 0=Sözleşme, 1=İmar ve rölöve, 2=Avan proje ...).
// Belgeler sadece o aşama %100 olunca görünür. f: dosyanın index.html'e göre yolu (pdf veya dwg).
const PROJECTS = [
  {ada:156, parsel:2, mahalle:"", title:"GARAJ YAPIMI",
   stagesDef:[{n:"Harita",w:15},{n:"Mimari",w:25},{n:"Statik",w:15},{n:"Zemin etüdü",w:10},{n:"Elektrik",w:10},{n:"Mekanik",w:10},{n:"Belediye harçları",w:15}],
   stages:[0,0,0,0,0,0,0], updated:"2026-10-16",
   payItems:["Harita","Mimari","Statik","Zemin etüdü","Elektrik","Mekanik","Belediye harçları"],
   pay:[[0,44000],[0,65000],[0,45000],[0,45000],[0,25000],[0,15000],null],
   payNotes:{3:"Araştırma çukuru için 45.000 ₺ (kepçe dahil değildir). Sondaj yapılırsa 100.000 ₺."},
   note:"Zemin etüdü bedeli araştırma çukuru esas alınarak yazılmıştır. Sondaj yapılması durumunda 100.000 ₺ olur. Kepçe bedeli ayrıca ödenir."},
  {ada:604, parsel:44, mahalle:"Örnek Mah. / Kadıköy", title:"Yıldız Evleri, 6 katlı konut",
   stages:[100,100,100,70,40,0,0], updated:"2026-10-05",
   docs:{1:[{n:"Rölöve",f:"belgeler/604-44-k7x2m9/rolove.pdf"},{n:"Rölöve",f:"belgeler/604-44-k7x2m9/rolove.dwg"}],2:[{n:"Avan proje",f:"belgeler/604-44-k7x2m9/avan-proje.pdf"},{n:"Avan proje",f:"belgeler/604-44-k7x2m9/avan-proje.dwg"}]},
   pay:[[4000,4000],[60000,120000],[10000,25000],[0,25000],[20000,60000],[15000,15000],[30000,85000]],
   note:"Statik proje için mühendis ile koordinasyon sürüyor. Uygulama paftaları bu hafta tamamlanacak."},
  {ada:112, parsel:7, mahalle:"Bahçe Mah. / Üsküdar", title:"Bahçe Villa",
   stages:[100,100,100,100,100,100,35], updated:"2026-10-09",
   docs:{3:[{n:"Uygulama projesi",f:"belgeler/112-7-p4w8q1/uygulama.pdf"},{n:"Uygulama projesi",f:"belgeler/112-7-p4w8q1/uygulama.dwg"}],5:[{n:"Yapı ruhsatı",f:"belgeler/112-7-p4w8q1/ruhsat.pdf"}]},
   pay:[[3000,3000],[90000,90000],[20000,20000],[20000,20000],[45000,45000],[12000,12000],[40000,60000]],
   note:"Ruhsat alındı, kaba inşaat denetimleri devam ediyor."},
  {ada:2310, parsel:15, mahalle:"Çarşı Mah. / Beşiktaş", title:"Çarşı İş Merkezi",
   stages:[100,60,0,0,0,0,0], updated:"2026-10-02",
   pay:[[5000,8000],[30000,150000],[0,30000],[0,30000],[0,70000],null,[0,120000]],
   note:"Rölöve çalışması sürüyor, imar durumu belgesi bekleniyor."}
];
