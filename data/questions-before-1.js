window.MATH_QUESTIONS = window.MATH_QUESTIONS || [];

window.MATH_QUESTIONS.push(
  // =========================================================
  // 1. TABAN ARİTMETİĞİ (Görsel: 21.40.35 (1) & 21.40.35)
  // =========================================================
  {
    id: 'ta-01',
    topicId: 'taban-aritmetigi',
    phase: 'before',
    section: 'Tabanlarda Toplama',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.35 (1).jpeg',
    prompt: '$(23)_4 + (12)_4$ toplama işleminin sonucunu 4’lük tabanda bulunuz.',
    answer: '$(101)_4$',
    steps: [
      { title: 'Birler basamağını topla', detail: '$3 + 2 = 5$. Çalıştığımız taban $4$ olduğu için $5$ yazamayız.' },
      { title: '4’e göre eldeyi ayır', detail: '$5 - 4 = 1$ (birler basamağına $1$ yazılır, sol basamağa $1$ elde aktarılır).' },
      { title: 'Dörtler basamağını topla', detail: '$2 + 1 + 1\\text{ (elde)} = 4$. Yine $4$ yazamayız: $4 - 4 = 0$ yazılır, bir sonraki basamağa $1$ elde geçer.' },
      { title: 'Sonucu yaz', detail: 'Soldaki elde ile birlikte sonuç $(101)_4$ bulunur.' }
    ]
  },
  {
    id: 'ta-02',
    topicId: 'taban-aritmetigi',
    phase: 'before',
    section: 'Tabanlarda Toplama',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.35 (1).jpeg',
    prompt: '$(66)_9 + (13)_9$ işleminin sonucunu 9’luk tabanda bulunuz.',
    answer: '$(80)_9$',
    steps: [
      { title: 'Birler basamağını topla', detail: '$6 + 3 = 9$. Taban $9$ olduğu için $9 - 9 = 0$ yazılır, sola $1$ elde aktarılır.' },
      { title: 'Dokuzlar basamağını topla', detail: '$6 + 1 + 1\\text{ (elde)} = 8$. $8 < 9$ olduğundan doğrudan $8$ yazılır.' },
      { title: 'Sonucu yaz', detail: 'Sonuç $(80)_9$ olur.' }
    ]
  },
  {
    id: 'ta-03',
    topicId: 'taban-aritmetigi',
    phase: 'before',
    section: 'Tabanlarda Toplama',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.35 (1).jpeg',
    prompt: '$(55)_6 + (55)_6 + (55)_6$ işleminin sonucunu 6’lık tabanda bulunuz.',
    answer: '$(253)_6$',
    steps: [
      { title: 'Birler basamağını topla', detail: '$5 + 5 + 5 = 15$.' },
      { title: '6’lık tabana indirge', detail: '$15 - 6 = 9$, $9 - 6 = 3$ (yani $15 = 2\\cdot 6 + 3$). Birler basamağına $3$ yazılır, <strong>elde var 2</strong>!' },
      { title: 'Altılar basamağını topla', detail: '$5 + 5 + 5 + 2\\text{ (elde)} = 17$.' },
      { title: 'Tekrar 6’lık tabana indirge', detail: '$17 - 6 = 11$, $11 - 6 = 5$ (yani $17 = 2\\cdot 6 + 5$). Basamağa $5$ yazılır, en sola $2$ elde geçer: $(253)_6$.' }
    ]
  },
  {
    id: 'ta-04',
    topicId: 'taban-aritmetigi',
    phase: 'before',
    section: 'Tabanlarda Çıkarma',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.35 (1).jpeg',
    prompt: '$(23)_5 - (14)_5$ çıkarma işleminin sonucunu bulunuz.',
    answer: '$(4)_5$',
    steps: [
      { title: 'Birler basamağını kontrol et', detail: '$3$’ten $4$ çıkmaz. Komşudan $1$ tane beşlik ($5$) ödünç alınır.' },
      { title: 'Birler basamağını çıkar', detail: '$(3 + 5) - 4 = 8 - 4 = 4$.' },
      { title: 'Beşler basamağını çıkar', detail: 'Komşudaki $2$ bir azalarak $1$ oldu: $1 - 1 = 0$. Sonuç $(04)_5 = (4)_5$.' }
    ]
  },
  {
    id: 'ta-05',
    topicId: 'taban-aritmetigi',
    phase: 'before',
    section: 'Tabanlarda Çıkarma',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.35 (1).jpeg',
    prompt: '$(302)_6 - (105)_6$ işleminin sonucunu 6’lık tabanda bulunuz.',
    answer: '$(153)_6$',
    steps: [
      { title: 'Komşudan 6’lık ödünç al', detail: 'Birler basamağında $2$’den $5$ çıkmaz. Ortadaki basamak $0$ olduğu için en soldaki $3$’ten bir $6$’lık alınır ($3 \\to 2$). Ortaya geçen $6$’dan bir $6$’lık birlere verilir (ortada $6 - 1 = 5$ kalır).' },
      { title: 'Basamak basamak çıkar', detail: 'Birler: $(2 + 6) - 5 = 3$. Ortadaki: $5 - 0 = 5$. Soldaki: $2 - 1 = 1$.' },
      { title: 'Sonuç', detail: '$(153)_6$ elde edilir.' }
    ]
  },
  {
    id: 'ta-06',
    topicId: 'taban-aritmetigi',
    phase: 'before',
    section: 'Tabanlarda Çarpma',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.35 (1).jpeg',
    prompt: '$(14)_5 \\times (23)_5$ çarpma işleminin sonucunu 5’lik tabanda bulunuz.',
    answer: '$(432)_5$',
    steps: [
      { title: 'İlk satır: $3 \\times (14)_5$', detail: '$3\\cdot 4 = 12 = 2\\cdot 5 + 2 \\implies 2$ yaz, elde $2$. $3\\cdot 1 + 2 = 5 = 1\\cdot 5 + 0 \\implies 102_5$.' },
      { title: 'İkinci satır: $2 \\times (14)_5$', detail: '$2\\cdot 4 = 8 = 1\\cdot 5 + 3 \\implies 3$ yaz, elde $1$. $2\\cdot 1 + 1 = 3 \\implies 33_5$ (bir basamak sola kaydırılır).' },
      { title: '5’lik tabanda topla', detail: '$102_5 + 330_5 = (432)_5$ bulunur.' }
    ]
  },
  {
    id: 'ta-07',
    topicId: 'taban-aritmetigi',
    phase: 'before',
    section: 'Tabanlarda Çarpma',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.35 (1).jpeg',
    prompt: '$(32)_4 \\times (23)_4$ çarpma işleminin sonucunu 4’lük tabanda bulunuz.',
    answer: '$(2122)_4$',
    steps: [
      { title: 'İlk satır: $3 \\times (32)_4$', detail: '$3\\cdot 2 = 6 = 1\\cdot 4 + 2 \\implies 2$ yaz, elde $1$. $3\\cdot 3 + 1 = 10 = 2\\cdot 4 + 2 \\implies 222_4$.' },
      { title: 'İkinci satır: $2 \\times (32)_4$', detail: '$2\\cdot 2 = 4 = 1\\cdot 4 + 0 \\implies 0$ yaz, elde $1$. $2\\cdot 3 + 1 = 7 = 1\\cdot 4 + 3 \\implies 130_4$ (sola kaydır).' },
      { title: '4’lük tabanda topla', detail: 'Birler: $2$. Dörtler: $2+0=2$. Onaltılar: $2+3=5 = 1\\cdot 4 + 1 \\implies 1$ yaz, elde $1$. Altmışdörtler: $1+1=2$. Sonuç: $(2122)_4$.' }
    ]
  },
  {
    id: 'ta-08',
    topicId: 'taban-aritmetigi',
    phase: 'before',
    section: 'Tabanlarda Çarpma',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.35 (1).jpeg',
    prompt: '$(243)_5 \\times (24)_5$ işleminin sonucunu 5’lik tabanda bulunuz.',
    answer: '$(13042)_5$',
    steps: [
      { title: 'İlk satır: $4 \\times (243)_5$', detail: '$4\\cdot 3=12\\ (2\\text{ yaz, elde }2)$, $4\\cdot 4+2=18\\ (3\\text{ yaz, elde }3)$, $4\\cdot 2+3=11\\ (21\\text{ yaz}) \\implies 2132_5$.' },
      { title: 'İkinci satır: $2 \\times (243)_5$', detail: '$2\\cdot 3=6\\ (1\\text{ yaz, elde }1)$, $2\\cdot 4+1=9\\ (4\\text{ yaz, elde }1)$, $2\\cdot 2+1=5\\ (10\\text{ yaz}) \\implies 1041_5$.' },
      { title: 'Alt alta 5’lik tabanda topla', detail: '$2132_5 + 10410_5$: Birler $2$; $3+1=4$; $1+4=5 \\to 0$ (5 yazamam, elde $1$!); $2+0+1=3$; $1 \\implies (13042)_5$.' }
    ]
  },
  {
    id: 'ta-09',
    topicId: 'taban-aritmetigi',
    phase: 'before',
    section: 'Taban Dönüşümleri',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.35 (1).jpeg',
    prompt: '$(72)_{10}$ sayısını $7$’lik tabana çeviriniz.',
    answer: '$(132)_7$',
    steps: [
      { title: 'İlk bölme', detail: '$72 \\div 7 = 10$, kalan $= 2$.' },
      { title: 'İkinci bölme', detail: '$10 \\div 7 = 1$, kalan $= 3$. Bölüm ($1 < 7$) olduğundan durulur.' },
      { title: 'Sondan başa yaz', detail: 'Son bölüm $1$, kalanlar $3$ ve $2$ birleştirilerek $(132)_7$ bulunur.' }
    ]
  },
  {
    id: 'ta-10',
    topicId: 'taban-aritmetigi',
    phase: 'before',
    section: 'Taban Dönüşümleri',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.35 (1).jpeg',
    prompt: '$(132)_7$ sayısını $10$’luk tabana çeviriniz.',
    answer: '$(72)_{10}$',
    steps: [
      { title: 'Basamak kuvvetlerini yaz', detail: 'Sağdan sola $7^0, 7^1, 7^2$ ile çarpılır.' },
      { title: 'Hesapla', detail: '$1\\cdot 7^2 + 3\\cdot 7^1 + 2\\cdot 7^0 = 49 + 21 + 2 = 72$.' }
    ]
  },
  {
    id: 'ta-11',
    topicId: 'taban-aritmetigi',
    phase: 'before',
    section: 'Taban Dönüşümleri',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.35 (1).jpeg',
    prompt: '$(342)_5$ sayısının $10$’luk tabandaki değerini bulunuz.',
    answer: '$(97)_{10}$',
    steps: [
      { title: 'Çözümleme yap', detail: '$3\\cdot 5^2 + 4\\cdot 5^1 + 2\\cdot 5^0$' },
      { title: 'Topla', detail: '$3\\cdot 25 + 4\\cdot 5 + 2\\cdot 1 = 75 + 20 + 2 = 97$.' }
    ]
  },
  {
    id: 'ta-12',
    topicId: 'taban-aritmetigi',
    phase: 'before',
    section: 'Diğer Sistemlere Geçiş',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.35.jpeg',
    prompt: '$(52)_6$ sayısını $2$’lik (ikili) tabana çeviriniz.',
    answer: '$(100000)_2$',
    steps: [
      { title: 'Önce 10’luk tabana geç', detail: '$(52)_6 = 5\\cdot 6^1 + 2\\cdot 6^0 = 30 + 2 = (32)_{10}$.' },
      { title: 'Sürekli 2’ye böl', detail: '$32 \\div 2 = 16$ (kalan $0$), $16\\div 2=8$ (k:$0$), $8\\div 2=4$ (k:$0$), $4\\div 2=2$ (k:$0$), $2\\div 2=1$ (k:$0$).' },
      { title: 'Sonucu yaz', detail: '$32 = 2^5$ olduğundan sonuç $(100000)_2$ olur.' }
    ]
  },
  {
    id: 'ta-13',
    topicId: 'taban-aritmetigi',
    phase: 'before',
    section: 'Diğer Sistemlere Geçiş',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.35.jpeg',
    prompt: '$(110)_2 - (101)_2$ işleminin sonucunu 2’lik tabanda bulunuz.',
    answer: '$(1)_2$',
    steps: [
      { title: 'Basamak basamak çıkar', detail: 'Birler: $0$’dan $1$ çıkmaz, komşudan $2$ alınır: $2 - 1 = 1$. Ortadaki $1 \\to 0$ olur: $0 - 0 = 0$. En sol: $1 - 1 = 0$.' },
      { title: 'Sağlama', detail: '$(110)_2 = 6$, $(101)_2 = 5$, $6 - 5 = 1 = (1)_2$.' }
    ]
  },
  {
    id: 'ta-14',
    topicId: 'taban-aritmetigi',
    phase: 'before',
    section: 'Diğer Sistemlere Geçiş',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.35.jpeg',
    prompt: '$(443)_5 - (324)_5$ işleminin sonucunu 5’lik tabanda bulunuz.',
    answer: '$(114)_5$',
    steps: [
      { title: 'Birler basamağı', detail: '$3$’ten $4$ çıkmaz, komşu $4$’ten $5$ alınır ($4\\to 3$). $(3+5)-4 = 4$.' },
      { title: 'Diğer basamaklar', detail: 'Beşler: $3 - 2 = 1$. Yirmibeşler: $4 - 3 = 1$. Sonuç $(114)_5$.' }
    ]
  },
  {
    id: 'ta-15',
    topicId: 'taban-aritmetigi',
    phase: 'before',
    section: 'Diğer Sistemlere Geçiş',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.35.jpeg',
    prompt: '$(776)_8 - (367)_8$ işleminin sonucunu 8’lik tabanda bulunuz.',
    answer: '$(407)_8$',
    steps: [
      { title: 'Birler basamağı', detail: '$6$’dan $7$ çıkmaz, komşudan $8$ alınır ($7\\to 6$). $(6+8)-7 = 7$.' },
      { title: 'Diğer basamaklar', detail: 'Sekizler: $6 - 6 = 0$. Altmışdörtler: $7 - 3 = 4$. Sonuç $(407)_8$.' }
    ]
  },
  {
    id: 'ta-16',
    topicId: 'taban-aritmetigi',
    phase: 'before',
    section: 'Diğer Sistemlere Geçiş',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.35.jpeg',
    prompt: '$(444)_5 \\times (44)_5$ çarpma işleminin sonucunu 5’lik tabanda bulunuz.',
    answer: '$(43401)_5$',
    steps: [
      { title: 'İlk çarpım: $4 \\times (444)_5$', detail: '$4\\cdot 4=16\\ (1\\text{ yaz, elde }3)$, $4\\cdot 4+3=19\\ (4\\text{ yaz, elde }3)$, $4\\cdot 4+3=19\\ (34\\text{ yaz}) \\implies 3441_5$.' },
      { title: 'İkinci çarpım ve kaydırma', detail: 'Yine $4$ ile çarpıldığı için sola kaydırarak $34410_5$ yazılır.' },
      { title: '5’lik tabanda topla', detail: '$3441_5 + 34410_5$: $1$; $4+1=5\\to 0$ (elde 1); $4+4+1=9\\to 4$ (elde 1); $3+4+1=8\\to 3$ (elde 1); $3+1=4 \\implies (43401)_5$.' }
    ]
  },
  {
    id: 'ta-17',
    topicId: 'taban-aritmetigi',
    phase: 'before',
    section: 'Diğer Sistemlere Geçiş',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.35.jpeg',
    prompt: '$(1001)_2$ sayısını $5$’lik tabana çeviriniz.',
    answer: '$(14)_5$',
    steps: [
      { title: 'Önce 10’luk tabana çevir', detail: '$(1001)_2 = 1\\cdot 2^3 + 0\\cdot 2^2 + 0\\cdot 2^1 + 1\\cdot 2^0 = 8 + 1 = 9_{10}$.' },
      { title: '5’lik tabana çevir', detail: '$9 \\div 5 = 1$, kalan $= 4 \\implies (14)_5$.' }
    ]
  },

  // =========================================================
  // 2. RASYONEL SAYILAR (Görsel: 21.40.34, 21.40.35 (2), 21.40.35)
  // =========================================================
  {
    id: 'rs-01',
    topicId: 'rasyonel-sayilar',
    phase: 'before',
    section: 'İşlem Önceliği',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34.jpeg',
    prompt: '$41 - 17 + [25 - 3\\cdot (7 - 2)]$ işleminin sonucu kaçtır?',
    answer: '$34$',
    steps: [
      { title: 'İç parantezi hesapla', detail: '$7 - 2 = 5$.' },
      { title: 'Köşeli parantez içindeki çarpma ve çıkarmayı yap', detail: '$25 - 3\\cdot 5 = 25 - 15 = 10$.' },
      { title: 'Soldan sağa topla/çıkar', detail: '$41 - 17 + 10 = 24 + 10 = 34$.' }
    ]
  },
  {
    id: 'rs-02',
    topicId: 'rasyonel-sayilar',
    phase: 'before',
    section: 'Kesir Dönüşümleri',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34.jpeg',
    prompt: '$\\dfrac{50}{17}$ bileşik kesrini tam sayılı kesre çeviriniz.',
    answer: '$2\\dfrac{16}{17}$',
    steps: [
      { title: 'Payı paydaya böl', detail: '$50 \\div 17 = 2$ (tam kısım), kalan $= 50 - 34 = 16$.' },
      { title: 'Tam sayılı yaz', detail: 'Bölüm tam kısma, kalan paya yazılır: $2\\dfrac{16}{17}$.' }
    ]
  },
  {
    id: 'rs-03',
    topicId: 'rasyonel-sayilar',
    phase: 'before',
    section: 'Kesir Dönüşümleri',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34.jpeg',
    prompt: '$10\\dfrac{3}{8}$ tam sayılı kesrini bileşik kesre çeviriniz.',
    answer: '$\\dfrac{83}{8}$',
    steps: [
      { title: 'Tam kısmı payda ile çarpıp payı ekle', detail: '$\\dfrac{10 \\cdot 8 + 3}{8} = \\dfrac{80 + 3}{8} = \\dfrac{83}{8}$.' }
    ]
  },
  {
    id: 'rs-04',
    topicId: 'rasyonel-sayilar',
    phase: 'before',
    section: 'Sıralama',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34.jpeg',
    prompt: '$\\dfrac{1}{3},\\ \\dfrac{2}{5},\\ \\dfrac{3}{7},\\ \\dfrac{4}{9}$ kesirlerini küçükten büyüğe sıralayınız.',
    answer: '$\\dfrac{1}{3} < \\dfrac{2}{5} < \\dfrac{3}{7} < \\dfrac{4}{9}$',
    steps: [
      { title: 'Payları $12$’de eşitle', detail: 'Payların EKOK’u $\\text{EKOK}(1,2,3,4)=12$’dir. Kesirleri sırasıyla $12, 6, 4, 3$ ile genişletelim.' },
      { title: 'Genişletilmiş haller', detail: '$\\dfrac{12}{36},\\ \\dfrac{12}{30},\\ \\dfrac{12}{28},\\ \\dfrac{12}{27}$.' },
      { title: 'Karşılaştır', detail: 'Payları eşit pozitif kesirlerde paydası büyük olan daha küçüktür: $\\dfrac{1}{3} < \\dfrac{2}{5} < \\dfrac{3}{7} < \\dfrac{4}{9}$.' }
    ]
  },
  {
    id: 'rs-05',
    topicId: 'rasyonel-sayilar',
    phase: 'before',
    section: 'Sıralama',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34.jpeg',
    prompt: '$-\\dfrac{7}{3},\\ \\dfrac{8}{5},\\ \\dfrac{9}{4},\\ -\\dfrac{11}{6}$ sayılarını küçükten büyüğe sıralayınız.',
    answer: '$-\\dfrac{7}{3} < -\\dfrac{11}{6} < \\dfrac{8}{5} < \\dfrac{9}{4}$',
    steps: [
      { title: 'Negatifleri kendi arasında sırala', detail: '$-\\dfrac{7}{3} = -\\dfrac{14}{6}$ ve $-\\dfrac{11}{6}$. Sayı doğrusunda $-\\dfrac{14}{6} < -\\dfrac{11}{6}$.' },
      { title: 'Pozitifleri kendi arasında sırala', detail: '$\\dfrac{8}{5} = \\dfrac{32}{20}$ ve $\\dfrac{9}{4} = \\dfrac{45}{20} \\implies \\dfrac{8}{5} < \\dfrac{9}{4}$.' },
      { title: 'Birleştir', detail: '$-\\dfrac{7}{3} < -\\dfrac{11}{6} < \\dfrac{8}{5} < \\dfrac{9}{4}$.' }
    ]
  },
  {
    id: 'rs-06',
    topicId: 'rasyonel-sayilar',
    phase: 'before',
    section: 'Tam Sayılı Kesir İşlemleri',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34.jpeg',
    prompt: '$2\\dfrac{1}{3} + 4\\dfrac{2}{5} + 3\\dfrac{1}{6} + 9\\dfrac{9}{10}$ işleminin sonucu kaçtır?',
    answer: '$19\\dfrac{4}{5}$',
    steps: [
      { title: 'Tam kısımları ayrı topla', detail: '$2 + 4 + 3 + 9 = 18$.' },
      { title: 'Kesir kısımlarında payda eşitle (30)', detail: '$\\dfrac{1}{3} + \\dfrac{2}{5} + \\dfrac{1}{6} + \\dfrac{9}{10} = \\dfrac{10 + 12 + 5 + 27}{30} = \\dfrac{54}{30}$.' },
      { title: 'Sadeleştir ve tam kısma ekle', detail: '$\\dfrac{54}{30} = \\dfrac{9}{5} = 1\\dfrac{4}{5}$. Toplam: $18 + 1\\dfrac{4}{5} = 19\\dfrac{4}{5}$.' }
    ]
  },
  {
    id: 'rs-07',
    topicId: 'rasyonel-sayilar',
    phase: 'before',
    section: 'Tam Sayılı Kesir İşlemleri',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34.jpeg',
    prompt: '$5\\dfrac{1}{4} - 7\\dfrac{2}{3}$ işleminin sonucunu bulunuz.',
    answer: '$-\\dfrac{29}{12}$',
    steps: [
      { title: 'Bileşik kesre çevir', detail: '$5\\dfrac{1}{4} = \\dfrac{21}{4}$, $7\\dfrac{2}{3} = \\dfrac{23}{3}$.' },
      { title: 'Payda eşitle (12) ve çıkar', detail: '$\\dfrac{21\\cdot 3 - 23\\cdot 4}{12} = \\dfrac{63 - 92}{12} = -\\dfrac{29}{12}$.' }
    ]
  },
  {
    id: 'rs-08',
    topicId: 'rasyonel-sayilar',
    phase: 'before',
    section: 'Dört İşlem',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34.jpeg',
    prompt: '$5\\cdot 2\\dfrac{1}{2} + 3 : \\dfrac{3}{9} + 1\\dfrac{2}{3} + \\dfrac{1}{3}$ işleminin sonucunu bulunuz.',
    answer: '$\\dfrac{47}{2}$',
    steps: [
      { title: 'Çarpmayı yap', detail: '$5\\cdot \\dfrac{5}{2} = \\dfrac{25}{2}$.' },
      { title: 'Bölmeyi yap', detail: '$3 : \\dfrac{3}{9} = 3\\cdot \\dfrac{9}{3} = 9$.' },
      { title: 'Kesirleri topla', detail: '$1\\dfrac{2}{3} + \\dfrac{1}{3} = 2$. Sonra $9 + 2 = 11$.' },
      { title: 'Son toplam', detail: '$11 + \\dfrac{25}{2} = \\dfrac{22 + 25}{2} = \\dfrac{47}{2}$.' }
    ]
  },
  {
    id: 'rs-09',
    topicId: 'rasyonel-sayilar',
    phase: 'before',
    section: 'Dört İşlem',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34.jpeg',
    prompt: '$\\left(5 + \\dfrac{1}{2}\\right) : \\dfrac{11}{14} + 2\\dfrac{1}{3}\\cdot \\dfrac{1}{2} + \\dfrac{1}{4}\\cdot\\left(2\\dfrac{1}{3} - 1\\dfrac{1}{2}\\right)$ işleminin sonucu kaçtır?',
    answer: '$\\dfrac{67}{8} = 8\\dfrac{3}{8}$',
    note: 'Defterde sağ altta sonuç 257/24 yazılmıştır; ancak yazılı terimler adım adım hesaplandığında gerçek değer 201/24 = 67/8 çıkmaktadır.',
    steps: [
      { title: 'İlk bölme grubu', detail: '$\\left(5 + \\dfrac{1}{2}\\right) : \\dfrac{11}{14} = \\dfrac{11}{2} \\cdot \\dfrac{14}{11} = \\dfrac{154}{22} = 7$.' },
      { title: 'İkinci terim (çarpma)', detail: '$2\\dfrac{1}{3}\\cdot \\dfrac{1}{2} = \\dfrac{7}{3}\\cdot \\dfrac{1}{2} = \\dfrac{7}{6}$.' },
      { title: 'Üçüncü terim', detail: '$2\\dfrac{1}{3} - 1\\dfrac{1}{2} = \\dfrac{7}{3} - \\dfrac{3}{2} = \\dfrac{14-9}{6} = \\dfrac{5}{6}$. Önündeki $\\dfrac{1}{4}$ ile çarpılınca $\\dfrac{5}{24}$.' },
      { title: 'Hepsini topla', detail: '$7 + \\dfrac{7}{6} + \\dfrac{5}{24} = \\dfrac{168 + 28 + 5}{24} = \\dfrac{201}{24} = \\dfrac{67}{8}$.' }
    ]
  },
  {
    id: 'rs-10',
    topicId: 'rasyonel-sayilar',
    phase: 'before',
    section: 'Karmaşık Parantezli İşlem',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34.jpeg',
    prompt: '$\\left[\\left(3\\dfrac{1}{3} + 9\\dfrac{1}{4} - 6\\dfrac{5}{6}\\right) \\cdot \\left(4\\dfrac{3}{8} - 1\\dfrac{1}{4}\\right) : 3\\dfrac{1}{8} + 3\\dfrac{3}{4}\\right] : 6\\dfrac{1}{3} : 3\\dfrac{3}{4} + 5\\dfrac{1}{5}$ işleminin tamamını çözünüz.',
    answer: '$5\\dfrac{3}{5} = \\dfrac{28}{5}$',
    note: 'Defterde ilk iki parantez hesaplanıp devamı yarım kalmıştır; tüm adımlar aşağıda tamamlanmıştır.',
    steps: [
      { title: 'İlk parantezi hesapla', detail: '$\\dfrac{10}{3} + \\dfrac{37}{4} - \\dfrac{41}{6} = \\dfrac{40 + 111 - 82}{12} = \\dfrac{69}{12} = \\dfrac{23}{4}$.' },
      { title: 'İkinci parantezi hesapla', detail: '$4\\dfrac{3}{8} - 1\\dfrac{1}{4} = \\dfrac{35}{8} - \\dfrac{10}{8} = \\dfrac{25}{8} = 3\\dfrac{1}{8}$.' },
      { title: 'Köşeli parantez içini tamamla', detail: '$\\dfrac{23}{4} \\cdot \\dfrac{25}{8} : \\dfrac{25}{8} = \\dfrac{23}{4}$. Üzerine $3\\dfrac{3}{4} = \\dfrac{15}{4}$ eklenir: $\\dfrac{23+15}{4} = \\dfrac{38}{4} = \\dfrac{19}{2}$.' },
      { title: 'Soldan sağa bölmeleri yap', detail: '$\\dfrac{19}{2} : 6\\dfrac{1}{3} = \\dfrac{19}{2} \\cdot \\dfrac{3}{19} = \\dfrac{3}{2}$. Ardından $\\dfrac{3}{2} : 3\\dfrac{3}{4} = \\dfrac{3}{2} \\cdot \\dfrac{4}{15} = \\dfrac{2}{5}$.' },
      { title: 'Son toplama', detail: '$\\dfrac{2}{5} + 5\\dfrac{1}{5} = 5\\dfrac{3}{5} = \\dfrac{28}{5}$.' }
    ]
  },
  {
    id: 'rs-11',
    topicId: 'rasyonel-sayilar',
    phase: 'before',
    section: 'Büyük Karmaşık İşlem',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.35 (2).jpeg',
    prompt: '$\\left(3\\dfrac{1}{3} + 2\\dfrac{1}{2}\\right) : \\left(2\\dfrac{1}{2} - 1\\dfrac{1}{3}\\right) \\cdot \\left(4\\dfrac{3}{5} - 2\\dfrac{1}{3}\\right) : \\left(4\\dfrac{3}{5} + 2\\dfrac{1}{3}\\right) \\cdot 5\\dfrac{1}{5} : \\left[\\dfrac{1}{20} : \\left(\\dfrac{1}{7} - \\dfrac{1}{8}\\right) + 5\\dfrac{7}{10}\\right]$ işleminin sonucunu bulunuz.',
    answer: '$1$',
    steps: [
      { title: 'İlk dört parantezi bileşik kesre çevirip hesapla', detail: '1) $\\dfrac{10}{3} + \\dfrac{5}{2} = \\dfrac{35}{6}$.<br>2) $\\dfrac{5}{2} - \\dfrac{4}{3} = \\dfrac{7}{6}$.<br>3) $\\dfrac{23}{5} - \\dfrac{7}{3} = \\dfrac{34}{15}$.<br>4) $\\dfrac{23}{5} + \\dfrac{7}{3} = \\dfrac{104}{15}$.' },
      { title: 'Sağdaki köşeli parantezi hesapla', detail: '$\\dfrac{1}{7} - \\dfrac{1}{8} = \\dfrac{1}{56}$. Sonra $\\dfrac{1}{20} : \\dfrac{1}{56} = \\dfrac{56}{20} = \\dfrac{14}{5}$. Üzerine $5\\dfrac{7}{10} = \\dfrac{57}{10}$ eklenir: $\\dfrac{28 + 57}{10} = \\dfrac{85}{10} = \\dfrac{17}{2}$.' },
      { title: 'Bölmeleri ters çevirip çarp ve sadeleştir', detail: '$\\dfrac{35}{6} \\cdot \\dfrac{6}{7} \\cdot \\dfrac{34}{15} \\cdot \\dfrac{15}{104} \\cdot \\dfrac{26}{5} \\cdot \\dfrac{2}{17}$' },
      { title: 'Çapraz sadeleştirme', detail: '$6$’lar gider, $15$’ler gider, $35/7=5$ ve alttaki $5$ ile gider; $34/17=2$, $2\\cdot 2\\cdot 26 = 104$ paydadaki $104$ ile sadeleşir: $\\dfrac{104}{104} = 1$.' }
    ]
  },

  // =========================================================
  // 3. ONDALIK, DEVİRLİ VE ÜSLÜ SAYILAR (21.40.33 (3) & (2))
  // =========================================================
  {
    id: 'ou-01',
    topicId: 'ondalik-ve-uslu',
    phase: 'before',
    section: 'Ondalık Sayılar',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (3).jpeg',
    prompt: '$15\\dfrac{1}{2}$ kesrini ondalık sayı olarak yazınız.',
    answer: '$15{,}5$',
    steps: [
      { title: 'Kesri 10 tabanında genişlet', detail: '$\\dfrac{1}{2}$ kesrini $5$ ile genişletirsek $\\dfrac{5}{10} = 0{,}5$ olur.' },
      { title: 'Tam kısmı ekle', detail: '$15 + 0{,}5 = 15{,}5$.' }
    ]
  },
  {
    id: 'ou-02',
    topicId: 'ondalik-ve-uslu',
    phase: 'before',
    section: 'Ondalık Sayılar',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (3).jpeg',
    prompt: '$24\\dfrac{9}{25}$ kesrini ondalık sayı olarak yazınız.',
    answer: '$24{,}36$',
    steps: [
      { title: 'Paydayı 100 yap', detail: '$\\dfrac{9}{25}$ kesrini $4$ ile genişletirsek $\\dfrac{36}{100} = 0{,}36$ olur.' },
      { title: 'Tam kısmı ekle', detail: '$24 + 0{,}36 = 24{,}36$.' }
    ]
  },
  {
    id: 'ou-03',
    topicId: 'ondalik-ve-uslu',
    phase: 'before',
    section: 'Devirli Ondalık Sayılar',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (3).jpeg',
    prompt: '$12\\dfrac{3}{7}$ kesrini devirli ondalık sayı olarak yazınız.',
    answer: '$12{,}\\overline{428571}$',
    steps: [
      { title: '3’ü 7’ye böl', detail: '$3 \\div 7 = 0{,}428571428571\\dots$ şeklinde $428571$ bloğu sonsuza dek tekrar eder.' },
      { title: 'Devir çizgisiyle yaz', detail: 'Tam kısım $12$ ile birleştirilir: $12{,}\\overline{428571}$.' }
    ]
  },
  {
    id: 'ou-04',
    topicId: 'ondalik-ve-uslu',
    phase: 'before',
    section: 'Devirli Ondalık Sayılar',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (3).jpeg',
    prompt: '$12{,}\\overline{428571}$ devirli ondalık sayısını rasyonel kesre çeviriniz.',
    answer: '$12\\dfrac{3}{7} = \\dfrac{87}{7}$',
    note: 'Defterde başlıkta sehven "irresyonel sayıya çevirelim" yazılmıştır; devirli ondalıklar rasyoneldir.',
    steps: [
      { title: 'Formülü uygula', detail: '$\\dfrac{12428571 - 12}{999999} = \\dfrac{12428559}{999999}$.' },
      { title: '9 ile sadeleştir', detail: 'Pay ve paydayı $9$’a bölelim: $\\dfrac{1380951}{111111}$.' },
      { title: '$111111 = 111\\cdot 1001$ ($1001 = 7\\cdot 11\\cdot 13$) sadeleştirmesi', detail: '$111$ ile sadeleştirince $\\dfrac{12441}{1001}$, sonra $11$ ile sadeleştirince $\\dfrac{1131}{91}$, $13$ ile sadeleştirince $\\dfrac{87}{7} = 12\\dfrac{3}{7}$ elde edilir.' }
    ]
  },
  {
    id: 'ou-05',
    topicId: 'ondalik-ve-uslu',
    phase: 'before',
    section: 'Devirli Ondalık Sayılar',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (2).jpeg',
    prompt: '$5{,}\\overline{7}$ sayısını rasyonel kesir olarak yazınız.',
    answer: '$\\dfrac{52}{9}$',
    steps: [
      { title: 'Formülü uygula', detail: '$\\dfrac{57 - 5}{9} = \\dfrac{52}{9}$.' }
    ]
  },
  {
    id: 'ou-06',
    topicId: 'ondalik-ve-uslu',
    phase: 'before',
    section: 'Devirli Ondalık Sayılar',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (2).jpeg',
    prompt: '$15{,}\\overline{8}$ sayısını rasyonel kesir olarak yazınız.',
    answer: '$\\dfrac{143}{9}$',
    steps: [
      { title: 'Formülü uygula', detail: '$\\dfrac{158 - 15}{9} = \\dfrac{143}{9}$.' }
    ]
  },
  {
    id: 'ou-07',
    topicId: 'ondalik-ve-uslu',
    phase: 'before',
    section: 'Devirli Ondalık Sayılar',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (2).jpeg',
    prompt: '$10{,}\\overline{17}$ sayısını rasyonel kesir olarak yazınız.',
    answer: '$\\dfrac{1007}{99}$',
    note: 'Defterde pay kısmında 1017 - 10 = 1007 ve paydada 99 yazıldıktan sonra en sağda sehven /9 yazılmıştır; doğrusu 1007/99’dur.',
    steps: [
      { title: 'Pay ve paydayı kur', detail: 'Sayının tamamı $1017$, devretmeyen kısım $10$. Virgülden sonra $2$ basamak devrettiği için payda $99$ olur.' },
      { title: 'Hesapla', detail: '$\\dfrac{1017 - 10}{99} = \\dfrac{1007}{99}$.' }
    ]
  },
  {
    id: 'ou-08',
    topicId: 'ondalik-ve-uslu',
    phase: 'before',
    section: 'Onluk Çözümleme',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (2).jpeg',
    prompt: '$31{,}2003$ sayısını $10$’un kuvvetleri cinsinden çözümleyiniz.',
    answer: '$3\\cdot 10^1 + 1\\cdot 10^0 + 2\\cdot 10^{-1} + 3\\cdot 10^{-4}$',
    steps: [
      { title: 'Basamak değerlerini belirle', detail: '$3\\ (10^1)$, $1\\ (10^0)$, virgül sonrası: $2\\ (10^{-1})$, $0\\ (10^{-2})$, $0\\ (10^{-3})$, $3\\ (10^{-4})$.' },
      { title: 'Sıfır olmayanları yaz', detail: '$3\\cdot 10^1 + 1\\cdot 10^0 + 2\\cdot 10^{-1} + 3\\cdot 10^{-4}$.' }
    ]
  },
  {
    id: 'ou-09',
    topicId: 'ondalik-ve-uslu',
    phase: 'before',
    section: 'Onluk Çözümleme',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (2).jpeg',
    prompt: '$7\\cdot 10^3 + 2\\cdot 10^1 + 5\\cdot 10^{-2} + 3\\cdot 10^{-4}$ şeklinde çözümlenen sayıyı yazınız.',
    answer: '$7020{,}0503$',
    steps: [
      { title: 'Basamak şablonu kur', detail: '$10^3\\ (7),\\ 10^2\\ (0),\\ 10^1\\ (2),\\ 10^0\\ (0)\\ ,\\ 10^{-1}\\ (0),\\ 10^{-2}\\ (5),\\ 10^{-3}\\ (0),\\ 10^{-4}\\ (3)$.' },
      { title: 'Sayıyı oku', detail: '$7020{,}0503$.' }
    ]
  },
  // --- Üslü Sayılar 1..16 ---
  {
    id: 'ou-10',
    topicId: 'ondalik-ve-uslu',
    phase: 'before',
    section: 'Üslü Sayılar (1–16)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (2).jpeg',
    prompt: '1) $2^7 \\cdot 5^4 \\cdot (-2)^3 \\cdot (-5)^6$ işleminin sonucunu bulunuz.',
    answer: '$-10^{10}$',
    steps: [
      { title: 'Önce işareti belirle', detail: '$(-2)^3$ negatif, $(-5)^6$ pozitif olduğu için çarpımın işareti $(-)$ olur.' },
      { title: 'Aynı tabanları birleştir', detail: '$- (2^7 \\cdot 2^3) \\cdot (5^4 \\cdot 5^6) = -2^{10} \\cdot 5^{10}$.' },
      { title: 'Üsler eşitken tabanları çarp', detail: '$-(2\\cdot 5)^{10} = -10^{10}$.' }
    ]
  },
  {
    id: 'ou-11',
    topicId: 'ondalik-ve-uslu',
    phase: 'before',
    section: 'Üslü Sayılar (1–16)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (2).jpeg',
    prompt: '2) $(1{,}2)^5 \\cdot 5^4 \\cdot (-1{,}2)^8 \\cdot (-5)^9$ işleminin sonucunu bulunuz.',
    answer: '$-6^{13}$',
    steps: [
      { title: 'İşaret analizi', detail: '$(-1{,}2)^8$ pozitif, $(-5)^9$ negatiftir; sonuç $(-)$ olur.' },
      { title: 'Ondalıkları kesre çevir', detail: '$1{,}2 = \\dfrac{6}{5}$. Dolayısıyla $-\\left(\\dfrac{6}{5}\\right)^5 \\cdot \\left(\\dfrac{6}{5}\\right)^8 \\cdot 5^4 \\cdot 5^9 = -\\dfrac{6^{13}}{5^{13}} \\cdot 5^{13}$.' },
      { title: 'Sadeleştir', detail: '$5^{13}$’ler sadeleşir, sonuç $-6^{13}$ olur.' }
    ]
  },
  {
    id: 'ou-12',
    topicId: 'ondalik-ve-uslu',
    phase: 'before',
    section: 'Üslü Sayılar (1–16)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (2).jpeg',
    prompt: '3) $(2^2)^2 - [(-3)^2]^2 - (-5^2)^2$ işleminin sonucunu bulunuz.',
    answer: '$-690$',
    steps: [
      { title: 'Her terimi ayrı hesapla', detail: '$(2^2)^2 = 2^4 = 16$.<br>$[(-3)^2]^2 = 9^2 = 81$.<br>$(-5^2)^2 = (-25)^2 = 625$.' },
      { title: 'Çıkarma işlemlerini yap', detail: '$16 - 81 - 625 = -65 - 625 = -690$.' }
    ]
  },
  {
    id: 'ou-13',
    topicId: 'ondalik-ve-uslu',
    phase: 'before',
    section: 'Üslü Sayılar (1–16)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (2).jpeg',
    prompt: '4) $2^7 \\cdot (-1{,}5)^4 \\cdot (-2)^5 \\cdot (-1{,}5)^8$ işleminin sonucunu bulunuz.',
    answer: '$-3^{12}$',
    steps: [
      { title: 'İşareti belirle', detail: '$(-1{,}5)^4$ ve $(-1{,}5)^8$ pozitif, $(-2)^5$ negatiftir; sonuç $(-)$ olur.' },
      { title: '$1{,}5 = \\dfrac{3}{2}$ yaz', detail: '$-2^{7+5} \\cdot \\left(\\dfrac{3}{2}\\right)^{4+8} = -2^{12} \\cdot \\dfrac{3^{12}}{2^{12}}$.' },
      { title: 'Sadeleştir', detail: '$2^{12}$’ler sadeleşir: $-3^{12}$.' }
    ]
  },
  {
    id: 'ou-14',
    topicId: 'ondalik-ve-uslu',
    phase: 'before',
    section: 'Üslü Sayılar (1–16)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (2).jpeg',
    prompt: '5) $3^{-2} + 2^{-3} + [(-2)^3]^{-1}$ işleminin sonucunu bulunuz.',
    answer: '$\\dfrac{1}{9}$',
    steps: [
      { title: 'Negatif üsleri aç', detail: '$3^{-2} = \\dfrac{1}{9}$, $2^{-3} = \\dfrac{1}{8}$, $[(-2)^3]^{-1} = (-8)^{-1} = -\\dfrac{1}{8}$.' },
      { title: 'Topla', detail: '$\\dfrac{1}{9} + \\dfrac{1}{8} - \\dfrac{1}{8} = \\dfrac{1}{9}$.' }
    ]
  },
  {
    id: 'ou-15',
    topicId: 'ondalik-ve-uslu',
    phase: 'before',
    section: 'Üslü Sayılar (1–16)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (2).jpeg',
    prompt: '6) $(2^2)^3 - [(-2)^3]^2 + (-3)^{-2}$ işleminin sonucunu bulunuz.',
    answer: '$\\dfrac{1}{9}$',
    steps: [
      { title: 'Kuvvetleri hesapla', detail: '$(2^2)^3 = 2^6$, $[(-2)^3]^2 = (-8)^2 = 64 = 2^6$, $(-3)^{-2} = \\dfrac{1}{(-3)^2} = \\dfrac{1}{9}$.' },
      { title: 'Birleştir', detail: '$2^6 - 2^6 + \\dfrac{1}{9} = \\dfrac{1}{9}$.' }
    ]
  },
  {
    id: 'ou-16',
    topicId: 'ondalik-ve-uslu',
    phase: 'before',
    section: 'Üslü Sayılar (1–16)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (2).jpeg',
    prompt: '7) $[(0{,}5)^{-2}]^0 + [(3{,}5)^0]^4 - 2\\cdot[(0{,}1)^4]^0$ işleminin sonucunu bulunuz.',
    answer: '$0$',
    steps: [
      { title: 'Sıfırıncı kuvvet kuralı ($a^0 = 1$)', detail: '$[(0{,}5)^{-2}]^0 = 1$, $[(3{,}5)^0]^4 = 1^4 = 1$, $[(0{,}1)^4]^0 = 1$.' },
      { title: 'Hesapla', detail: '$1 + 1 - 2\\cdot 1 = 2 - 2 = 0$.' }
    ]
  },
  {
    id: 'ou-17',
    topicId: 'ondalik-ve-uslu',
    phase: 'before',
    section: 'Üslü Sayılar (1–16)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (2).jpeg',
    prompt: '8) $\\dfrac{2^5 \\cdot 3^5 \\cdot 1{,}5}{(1{,}5)^6 \\cdot 4^5}$ işleminin sonucunu bulunuz.',
    answer: '$1$',
    steps: [
      { title: '1,5 terimlerini sadeleştir', detail: '$\\dfrac{1{,}5}{(1{,}5)^6} = \\dfrac{1}{(1{,}5)^5}$. İfade $\\dfrac{2^5 \\cdot 3^5}{(1{,}5)^5 \\cdot 4^5}$ olur.' },
      { title: 'Tabanları 2 ve 3 cinsinden yaz', detail: '$(1{,}5)^5 = \\left(\\dfrac{3}{2}\\right)^5 = 3^5 \\cdot 2^{-5}$ ve $4^5 = (2^2)^5 = 2^{10}$.' },
      { title: 'Paydayı çarp ve sadeleştir', detail: 'Payda: $3^5 \\cdot 2^{-5} \\cdot 2^{10} = 3^5 \\cdot 2^5$. Pay da $2^5 \\cdot 3^5$ olduğundan oran $= 1$.' }
    ]
  },
  {
    id: 'ou-18',
    topicId: 'ondalik-ve-uslu',
    phase: 'before',
    section: 'Üslü Sayılar (1–16)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (2).jpeg',
    prompt: '9) $\\left(\\dfrac{3}{4}\\right)^{20} \\cdot \\left(\\dfrac{16}{9}\\right)^{10}$ işleminin sonucunu bulunuz.',
    answer: '$1$',
    steps: [
      { title: '$16/9$’u kare olarak yaz', detail: '$\\dfrac{16}{9} = \\left(\\dfrac{4}{3}\\right)^2$, dolayısıyla $\\left(\\dfrac{16}{9}\\right)^{10} = \\left(\\dfrac{4}{3}\\right)^{20}$.' },
      { title: 'Ortak üste al ve çarp', detail: '$\\left(\\dfrac{3}{4} \\cdot \\dfrac{4}{3}\\right)^{20} = 1^{20} = 1$.' }
    ]
  },
  {
    id: 'ou-19',
    topicId: 'ondalik-ve-uslu',
    phase: 'before',
    section: 'Üslü Sayılar (1–16)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (2).jpeg',
    prompt: '10) $\\left(\\dfrac{2}{3}\\right)^{-3} - \\left(\\dfrac{5}{2}\\right)^{-2} + \\left(-\\dfrac{2}{5}\\right)^2$ işleminin sonucunu bulunuz.',
    answer: '$\\dfrac{27}{8}$',
    steps: [
      { title: 'Kesir kuvvetlerini aç', detail: '$\\left(\\dfrac{2}{3}\\right)^{-3} = \\left(\\dfrac{3}{2}\\right)^3 = \\dfrac{27}{8}$; $\\left(\\dfrac{5}{2}\\right)^{-2} = \\dfrac{4}{25}$; $\\left(-\\dfrac{2}{5}\\right)^2 = \\dfrac{4}{25}$.' },
      { title: 'Sadeleştir', detail: '$\\dfrac{27}{8} - \\dfrac{4}{25} + \\dfrac{4}{25} = \\dfrac{27}{8}$.' }
    ]
  },
  {
    id: 'ou-20',
    topicId: 'ondalik-ve-uslu',
    phase: 'before',
    section: 'Üslü Sayılar (1–16)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (2).jpeg',
    prompt: '11) $\\left(5\\dfrac{1}{4}\\right)^0 + \\left[(1{,}2)^4 \\cdot \\left(\\dfrac{25}{36}\\right)^2\\right] : 6^2 - [(0{,}75)^2]^0$ işleminin sonucunu bulunuz.',
    answer: '$\\dfrac{1}{36}$',
    note: 'Defterde köşeli parantezin sonucu (6/5)^4 · (5/6)^4 = 1 bulunmuş fakat ": 6^2" bölmesi uygulanmadan 1 bırakılmıştır. Doğru işlem sırasıyla sonuç 1/36’dır.',
    steps: [
      { title: 'Sıfırıncı kuvvetleri sadeleştir', detail: '$\\left(5\\dfrac{1}{4}\\right)^0 = 1$ ve $-[(0{,}75)^2]^0 = -1$ birbirini götürür ($1 - 1 = 0$).' },
      { title: 'Köşeli parantez içini hesapla', detail: '$1{,}2 = \\dfrac{6}{5}$ ve $\\dfrac{25}{36} = \\left(\\dfrac{5}{6}\\right)^2$. Yani $\\left(\\dfrac{6}{5}\\right)^4 \\cdot \\left(\\dfrac{5}{6}\\right)^4 = 1$.' },
      { title: 'Bölmeyi uygula', detail: '$1 : 6^2 = \\dfrac{1}{36}$.' }
    ]
  },
  {
    id: 'ou-21',
    topicId: 'ondalik-ve-uslu',
    phase: 'before',
    section: 'Üslü Sayılar (1–16)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (2).jpeg',
    prompt: '12) $\\left(\\dfrac{1}{2}\\right)^3 + \\left(\\dfrac{3}{2}\\right)^4 - \\left[\\left(-\\dfrac{3}{2}\\right)^2\\right]^2$ işleminin sonucunu bulunuz.',
    answer: '$\\dfrac{1}{8}$',
    steps: [
      { title: 'Üsleri hesapla', detail: '$\\left(\\dfrac{1}{2}\\right)^3 = \\dfrac{1}{8}$, $\\left(\\dfrac{3}{2}\\right)^4 = \\dfrac{81}{16}$, $\\left[\\left(-\\dfrac{3}{2}\\right)^2\\right]^2 = \\left(-\\dfrac{3}{2}\\right)^4 = \\dfrac{81}{16}$.' },
      { title: 'İşlemi tamamla', detail: '$\\dfrac{1}{8} + \\dfrac{81}{16} - \\dfrac{81}{16} = \\dfrac{1}{8}$.' }
    ]
  },
  {
    id: 'ou-22',
    topicId: 'ondalik-ve-uslu',
    phase: 'before',
    section: 'Üslü Sayılar (1–16)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (2).jpeg',
    prompt: '13) $\\left(\\dfrac{5}{7}\\right)^{20} \\cdot \\left(\\dfrac{16}{9}\\right)^{10} \\cdot \\left(\\dfrac{49}{4}\\right)^{10}$ işleminin sonucunu bulunuz.',
    answer: '$\\left(\\dfrac{10}{3}\\right)^{20}$',
    steps: [
      { title: 'Kuvvetleri 20’ye eşitle', detail: '$\\left(\\dfrac{16}{9}\\right)^{10} = \\left(\\dfrac{4^2}{3^2}\\right)^{10} = \\left(\\dfrac{4}{3}\\right)^{20}$ ve $\\left(\\dfrac{49}{4}\\right)^{10} = \\left(\\dfrac{7^2}{2^2}\\right)^{10} = \\left(\\dfrac{7}{2}\\right)^{20}$.' },
      { title: 'Ortak üste alıp sadeleştir', detail: '$\\left(\\dfrac{5}{7} \\cdot \\dfrac{4}{3} \\cdot \\dfrac{7}{2}\\right)^{20} = \\left(\\dfrac{10}{3}\\right)^{20}$.' }
    ]
  },
  {
    id: 'ou-23',
    topicId: 'ondalik-ve-uslu',
    phase: 'before',
    section: 'Üslü Sayılar (1–16)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (2).jpeg',
    prompt: '14) $\\dfrac{\\left(\\dfrac{2}{3}\\right)^3 \\cdot \\left(-\\dfrac{4}{9}\\right)^3 \\cdot \\left(\\dfrac{3}{5}\\right)^5}{2^{-9} \\cdot \\left(\\dfrac{3}{5}\\right)^4 \\cdot \\left(\\dfrac{1}{3}\\right)^{-10}}$ ifadesini sadeleştiriniz.',
    answer: '$-\\dfrac{2^{18}}{3^{18}\\cdot 5}$ (Defter notu: $-\\dfrac{2^{14}}{3^{14}\\cdot 5}$)',
    note: 'Görselde payda veya pay üslerindeki küçük rakam farkı nedeniyle defterde sonuç -2^{14}/(3^{14}·5) olarak bulunmuştur; adımlar görseldeki üslerle tam olarak gösterilmiştir.',
    steps: [
      { title: 'İşaret ve tabanları ayır', detail: 'Payda negatif üssü $(-4/9)^3 = -2^6/3^6$ olduğundan ifade negatiftir.' },
      { title: 'Payı düzenle', detail: '$-\\dfrac{2^3}{3^3} \\cdot \\dfrac{2^6}{3^6} \\cdot \\dfrac{3^5}{5^5} = -\\dfrac{2^9}{3^4 \\cdot 5^5}$ (veya $(3/5)^3$ ise $-2^9 \\cdot 3^{-6} \\cdot 5^{-3}$).' },
      { title: 'Paydayı yukarı taşı', detail: '$\\dfrac{1}{2^{-9}} = 2^9$, $\\dfrac{1}{(1/3)^{-10}} = \\dfrac{1}{3^{10}}$ ve $(3/5)^5 / (3/5)^4 = 3/5$. Tüm üsler birleştirilerek sadeleştirilir.' }
    ]
  },
  {
    id: 'ou-24',
    topicId: 'ondalik-ve-uslu',
    phase: 'before',
    section: 'Üslü Sayılar (1–16)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (2).jpeg',
    prompt: '15) $\\dfrac{4\\cdot 3^5 + 7\\cdot 3^5 - 10\\cdot 3^5}{2\\cdot 3^5 - 3^6}$ işleminin sonucunu bulunuz.',
    answer: '$-1$',
    steps: [
      { title: 'Pay ve paydayı $3^5$ parantezine al', detail: 'Pay: $3^5(4 + 7 - 10) = 3^5 \\cdot 1$.<br>Payda: $2\\cdot 3^5 - 3\\cdot 3^5 = 3^5(2 - 3) = 3^5 \\cdot (-1)$.' },
      { title: 'Sadeleştir', detail: '$\\dfrac{3^5 \\cdot 1}{3^5 \\cdot (-1)} = -1$.' }
    ]
  },
  {
    id: 'ou-25',
    topicId: 'ondalik-ve-uslu',
    phase: 'before',
    section: 'Üslü Sayılar (1–16)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (2).jpeg',
    prompt: '16) $\\dfrac{4\\cdot 5^7 - 5^8 + 11\\cdot 5^6}{7\\cdot 5^6 - 5^6}$ işleminin sonucunu bulunuz.',
    answer: '$1$',
    steps: [
      { title: 'En küçük üs olan $5^6$ parantezine al', detail: 'Pay: $5^6(4\\cdot 5 - 5^2 + 11) = 5^6(20 - 25 + 11) = 5^6 \\cdot 6$.' },
      { title: 'Paydayı düzenle ve sadeleştir', detail: 'Payda: $5^6(7 - 1) = 5^6 \\cdot 6$. Oran $\\dfrac{6}{6} = 1$.' }
    ]
  },

  // =========================================================
  // 4. KÖKLÜ SAYILAR & TANIM KÜMESİ (21.40.34 (1))
  // =========================================================
  {
    id: 'kt-01',
    topicId: 'koklu-ve-tanim-kumesi',
    phase: 'before',
    section: 'Köklü Sayılar',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (1).jpeg',
    prompt: 'Kural Örneği: $3^{3/4}$ üslü ifadesini köklü biçimde yazınız.',
    answer: '$\\sqrt[4]{3^3} = \\sqrt[4]{27}$',
    steps: [
      { title: '$\\sqrt[a]{x^b} = x^{b/a}$ kuralını uygula', detail: 'Paydadaki $4$ kök derecesi, paydaki $3$ ise içerideki üs olur: $\\sqrt[4]{3^3}$.' }
    ]
  },
  {
    id: 'kt-02',
    topicId: 'koklu-ve-tanim-kumesi',
    phase: 'before',
    section: 'Köklü Sayılar',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (1).jpeg',
    prompt: 'a) $4^{1/2} \\cdot 9^{1/2} \\cdot 25^{1/2}$ işleminin sonucunu bulunuz.',
    answer: '$30$',
    steps: [
      { title: 'Tabanları kare olarak yaz', detail: '$(2^2)^{1/2} \\cdot (3^2)^{1/2} \\cdot (5^2)^{1/2}$' },
      { title: 'Üsleri çarp', detail: '$2 \\cdot 3 \\cdot 5 = 30$.' }
    ]
  },
  {
    id: 'kt-03',
    topicId: 'koklu-ve-tanim-kumesi',
    phase: 'before',
    section: 'Köklü Sayılar',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (1).jpeg',
    prompt: 'c) $16^{3/4} \\cdot 32^{4/5} \\cdot 27^{2/3} \\cdot 81^{3/4}$ işleminin sonucunu üslü biçimde yazınız.',
    answer: '$2^7 \\cdot 3^5$',
    note: 'Defterde son adımda 3^2 · 3^3 çarpımı sehven 3^7 yazılmıştır; doğrusu 3^{2+3} = 3^5’tir.',
    steps: [
      { title: 'Tabanları asal kuvvetlere çevir', detail: '$(2^4)^{3/4} \\cdot (2^5)^{4/5} \\cdot (3^3)^{2/3} \\cdot (3^4)^{3/4}$' },
      { title: 'Üsleri sadeleştir', detail: '$2^3 \\cdot 2^4 \\cdot 3^2 \\cdot 3^3$' },
      { title: 'Aynı tabanların üslerini topla', detail: '$2^{3+4} \\cdot 3^{2+3} = 2^7 \\cdot 3^5$.' }
    ]
  },
  {
    id: 'kt-04',
    topicId: 'koklu-ve-tanim-kumesi',
    phase: 'before',
    section: 'Köklü Sayılar (Derece Eşitleme)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (1).jpeg',
    prompt: 'a) $\\sqrt{2},\\ \\sqrt[3]{3},\\ \\sqrt[6]{5}$ köklü sayılarını ortak kök derecesinde yazınız.',
    answer: '$\\sqrt[6]{8},\\ \\sqrt[6]{9},\\ \\sqrt[6]{5}$',
    steps: [
      { title: 'Derecelerin EKOK’unu al', detail: '$\\text{EKOK}(2, 3, 6) = 6$.' },
      { title: 'Genişlet', detail: '$\\sqrt{2} = \\sqrt[6]{2^3} = \\sqrt[6]{8}$, $\\sqrt[3]{3} = \\sqrt[6]{3^2} = \\sqrt[6]{9}$, $\\sqrt[6]{5}$ aynen kalır.' }
    ]
  },
  {
    id: 'kt-05',
    topicId: 'koklu-ve-tanim-kumesi',
    phase: 'before',
    section: 'Köklü Sayılar (Sıralama)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (1).jpeg',
    prompt: 'c) $\\sqrt{6},\\ \\sqrt[4]{5},\\ \\sqrt[8]{15},\\ \\sqrt[16]{5}$ sayılarını büyükten küçüğe sıralayınız.',
    answer: '$\\sqrt{6} > \\sqrt[4]{5} > \\sqrt[8]{15} > \\sqrt[16]{5}$',
    steps: [
      { title: 'Kök derecelerini 16’da eşitle', detail: '$\\sqrt{6} = \\sqrt[16]{6^8}$, $\\sqrt[4]{5} = \\sqrt[16]{5^4} = \\sqrt[16]{625}$, $\\sqrt[8]{15} = \\sqrt[16]{15^2} = \\sqrt[16]{225}$, $\\sqrt[16]{5}$.' },
      { title: 'İçleri karşılaştır', detail: '$6^8 > 625 > 225 > 5 \\implies \\sqrt[16]{6^8} > \\sqrt[16]{625} > \\sqrt[16]{225} > \\sqrt[16]{5}$.' }
    ]
  },
  {
    id: 'kt-06',
    topicId: 'koklu-ve-tanim-kumesi',
    phase: 'before',
    section: 'Köklü Sayılar',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (1).jpeg',
    prompt: 'a) $\\sqrt[4]{3} \\cdot \\sqrt[4]{27}$ işleminin sonucunu bulunuz.',
    answer: '$3$',
    steps: [
      { title: 'Aynı kök altında çarp', detail: '$\\sqrt[4]{3 \\cdot 27} = \\sqrt[4]{81} = \\sqrt[4]{3^4} = 3$.' }
    ]
  },
  {
    id: 'kt-07',
    topicId: 'koklu-ve-tanim-kumesi',
    phase: 'before',
    section: 'Köklü Sayılar',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (1).jpeg',
    prompt: 'NOT Örneği: $2\\sqrt[4]{5}$ ifadesini tek kök içinde yazınız.',
    answer: '$\\sqrt[4]{80}$',
    steps: [
      { title: 'Katsayıyı kök derecesiyle üs alarak içeri sok', detail: '$2\\sqrt[4]{5} = \\sqrt[4]{2^4 \\cdot 5} = \\sqrt[4]{16 \\cdot 5} = \\sqrt[4]{80}$.' }
    ]
  },
  {
    id: 'kt-08',
    topicId: 'koklu-ve-tanim-kumesi',
    phase: 'before',
    section: 'İç İçe Kökler',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (1).jpeg',
    prompt: 'e) $\\sqrt[3]{16\\sqrt[4]{8\\sqrt{2}}}$ (ve defter notundaki $\\sqrt[8]{2^8}$ / $\\sqrt[24]{2^{39}}$ dönüşümü) ifadesini tek kök içinde sadeleştiriniz.',
    answer: '$\\sqrt[8]{2^{13}}$',
    steps: [
      { title: 'Tüm sayıları 2 tabanına çevir', detail: '$16 = 2^4$, $8 = 2^3$, $2 = 2^1$.' },
      { title: 'İçten dışa üslü birleştir veya kök derecelerini çarp', detail: 'En dış kök $3$, orta kök $4$, en iç kök $2$ derecelidir ($3\\cdot 4\\cdot 2 = 24$).<br>$16 = 2^4$ iki iç kökün ($4\\cdot 2 = 8$) dışındadır: içeri $(2^4)^8 = 2^{32}$ olarak girer. $8 = 2^3$ karekökün dışındadır: içeri $(2^3)^2 = 2^6$ girer. En içte $2^1$ var.' },
      { title: 'Üsleri topla ve sadeleştir', detail: '$\\sqrt[24]{2^{32 + 6 + 1}} = \\sqrt[24]{2^{39}}$. Hem $24$ hem $39$ üçe bölünür: $\\sqrt[8]{2^{13}}$.' }
    ]
  },
  // --- Cebirsel İfadeler Tanım Kümesi ---
  {
    id: 'kt-09',
    topicId: 'koklu-ve-tanim-kumesi',
    phase: 'before',
    section: 'Cebirsel İfadeler — Tanım Kümesi',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (1).jpeg',
    prompt: 'a) $\\dfrac{x+5}{x^2+1}$ ifadesinin tanım kümesini (T.K.) bulunuz.',
    answer: '$\\text{T.K.} = \\mathbb{R} = (-\\infty, +\\infty)$',
    steps: [
      { title: 'Paydayı sıfıra eşitle', detail: '$x^2 + 1 = 0 \\implies x^2 = -1$. Hiçbir reel sayının karesi $-1$ olamaz.' },
      { title: 'Sonuç', detail: 'Payda hiçbir zaman $0$ olmadığından tüm reel sayılar için tanımlıdır: $\\text{T.K.} = \\mathbb{R}$.' }
    ]
  },
  {
    id: 'kt-10',
    topicId: 'koklu-ve-tanim-kumesi',
    phase: 'before',
    section: 'Cebirsel İfadeler — Tanım Kümesi',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (1).jpeg',
    prompt: 'b) $\\dfrac{3}{x}$ ifadesinin tanım kümesini bulunuz.',
    answer: '$\\text{T.K.} = \\mathbb{R} - \\{0\\}$',
    steps: [
      { title: 'Payda sıfır olamaz', detail: '$x \\neq 0$ şartı vardır; dolayısıyla $\\text{T.K.} = \\mathbb{R} - \\{0\\}$.' }
    ]
  },
  {
    id: 'kt-11',
    topicId: 'koklu-ve-tanim-kumesi',
    phase: 'before',
    section: 'Cebirsel İfadeler — Tanım Kümesi',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (1).jpeg',
    prompt: 'c, ç, d, e, f) Defterde verilen tanım kümesi sonuçları: c) $\\mathbb{R}-\\{a\\}$, ç) $\\mathbb{R}-\\{-3,3\\}$, d) $\\mathbb{R}-\\{5/2\\}$, e) $a-2b=-3 \\implies \\mathbb{R}$, f) $\\mathbb{R}-\\{a\\}$. Her birinin paydayı sıfır yapan mantığını açıklayınız.',
    answer: 'Paydayı $0$ yapan kökler kümeden çıkarılır ($a$, $\\pm 3$, $5/2$).',
    steps: [
      { title: 'c ve f şıkları ($\\mathbb{R}-\\{a\\}$)', detail: 'Paydada $(x-a)$ çarpanı bulunduğundan $x = a$ değeri tanımsız yapar.' },
      { title: 'ç şıkkı ($\\mathbb{R}-\\{-3, 3\\}$)', detail: 'Paydada $x^2 - 9$ bulunur: $x^2 - 9 = 0 \\implies x = \\pm 3$ çıkarılır.' },
      { title: 'd şıkkı ($\\mathbb{R}-\\{5/2\\}$)', detail: 'Paydada $2x - 5$ bulunur: $2x - 5 = 0 \\implies x = 5/2$ çıkarılır.' },
      { title: 'e şıkkı ($\\mathbb{R}$)', detail: 'İfade $x$’e bağlı bir tanımsızlık (sıfır payda veya çift kök içi negatiflik) üretmediğinden tüm reel sayılarda tanımlıdır.' }
    ]
  },
  {
    id: 'kt-12',
    topicId: 'koklu-ve-tanim-kumesi',
    phase: 'before',
    section: 'Cebirsel İfadeler — Tanım Kümesi',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (1).jpeg',
    prompt: 'g) $\\dfrac{\\sqrt{x-4}}{\\sqrt[3]{2a+b}}$ (payı çift dereceli köklü) ifadesinin $x$ değişkenine göre tanım kümesini bulunuz.',
    answer: '$x \\ge 4$, yani $[4, \\infty)$',
    steps: [
      { title: 'Çift dereceli köke bak', detail: 'Paydaki $\\sqrt{x-4}$ karekökü çift dereceli ($2$) olduğundan içi negatif olamaz: $x - 4 \\ge 0$.' },
      { title: 'Aralığı yaz', detail: '$x \\ge 4 \\implies [4, \\infty)$.' }
    ]
  },
  // --- Ortak Çarpan Parantezine Alma ---
  {
    id: 'kt-13',
    topicId: 'koklu-ve-tanim-kumesi',
    phase: 'before',
    section: 'Ortak Çarpan Parantezi',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (1).jpeg',
    prompt: 'a) $xy - 3x$ ifadesini ortak çarpan parantezine alınız.',
    answer: '$x(y - 3)$',
    steps: [
      { title: 'Ortak terimi belirle', detail: 'Her iki terimde ortak çarpan $x$’tir. $x$ parantezine alınınca $x(y - 3)$ elde edilir.' }
    ]
  },
  {
    id: 'kt-14',
    topicId: 'koklu-ve-tanim-kumesi',
    phase: 'before',
    section: 'Ortak Çarpan Parantezi',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (1).jpeg',
    prompt: 'b) $2xy^2 - 4x^2y^3$ ifadesini ortak çarpan parantezine alınız.',
    answer: '$2xy^2(1 - 2xy)$',
    steps: [
      { title: 'En küçük üsleri ve EBOB’u al', detail: 'Katsayılarda $2$, $x$’lerde $x^1$, $y$’lerde $y^2$ ortaktır.' },
      { title: 'Paranteze al', detail: '$2xy^2(1 - 2xy)$.' }
    ]
  },
  {
    id: 'kt-15',
    topicId: 'koklu-ve-tanim-kumesi',
    phase: 'before',
    section: 'Ortak Çarpan Parantezi',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (1).jpeg',
    prompt: 'c) $3\\sqrt{x}\\,y^2 + 2xy^3 - 4x^2y^4$ ifadesini ortak çarpan parantezine alınız.',
    answer: '$x^{1/2}y^2(3 + 2x^{1/2}y - 4x^{3/2}y^2)$',
    steps: [
      { title: '$\\sqrt{x} = x^{1/2}$ yaz ve en küçük üsleri seç', detail: 'Ortak çarpan $x^{1/2}y^2$’dir.' },
      { title: 'Her terimi $x^{1/2}y^2$’ye böl', detail: '$x^1 : x^{1/2} = x^{1/2}$ ve $x^2 : x^{1/2} = x^{3/2}$ olduğundan $x^{1/2}y^2(3 + 2x^{1/2}y - 4x^{3/2}y^2)$ bulunur.' }
    ]
  },
  {
    id: 'kt-16',
    topicId: 'koklu-ve-tanim-kumesi',
    phase: 'before',
    section: 'Ortak Çarpan Parantezi',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (1).jpeg',
    prompt: 'ç) $\\dfrac{ax}{b} - \\dfrac{a^2x^3c}{b^2} + \\dfrac{3axc^3}{2b^2}$ ifadesini $\\dfrac{ax}{b}$ ortak parantezine alınız.',
    answer: '$\\dfrac{ax}{b}\\left(1 - \\dfrac{ax^2c}{b} + \\dfrac{3c^3}{2b}\\right)$',
    note: 'Defterde son terimin paydasında sehven 2b^2 yazılmıştır; b dışarı alındığı için 2b kalmalıdır.',
    steps: [
      { title: 'Ortak çarpanı belirle', detail: 'Her terimde $\\dfrac{ax}{b}$ çarpanı mevcuttur.' },
      { title: 'Her terimi $\\dfrac{ax}{b}$’ye böl', detail: '$1 - \\dfrac{ax^2c}{b} + \\dfrac{3c^3}{2b}$ kalır.' }
    ]
  },
  {
    id: 'kt-17',
    topicId: 'koklu-ve-tanim-kumesi',
    phase: 'before',
    section: 'Ortak Çarpan Parantezi',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (1).jpeg',
    prompt: 'd) $\\dfrac{x}{a+b} - \\dfrac{2xy}{3(a+b)} + \\dfrac{x^3y^2}{c(a+b)^2}$ ifadesini ortak paranteze alınız.',
    answer: '$\\dfrac{x}{a+b}\\left(1 - \\dfrac{2y}{3} + \\dfrac{x^2y^2}{c(a+b)}\\right)$',
    steps: [
      { title: 'Ortak çarpan $\\dfrac{x}{a+b}$’dir', detail: 'Payda ve paydan en küçük kuvvetler $\\dfrac{x}{a+b}$ olarak dışarı alınır.' },
      { title: 'Kalanları yaz', detail: '$\\dfrac{x}{a+b}\\left(1 - \\dfrac{2y}{3} + \\dfrac{x^2y^2}{c(a+b)}\\right)$.' }
    ]
  }
);
