window.MATH_QUESTIONS = window.MATH_QUESTIONS || [];

window.MATH_QUESTIONS.push(
  // =========================================================
  // 5. ÖZDEŞLİKLER & ÇARPANLARA AYIRMA (21.40.34 (1), 21.40.33 (1), 21.40.34 (4), 21.40.34 (2))
  // =========================================================
  {
    id: 'oc-01',
    topicId: 'ozdeslik-carpanlara-ayirma',
    phase: 'before',
    section: 'Soru 7 — Özdeşlik Çarpımları',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (1).jpeg',
    prompt: '7a) $(x + y)(x - y)$ çarpımını özdeşlik olarak açınız.',
    answer: '$x^2 - y^2$',
    steps: [
      { title: 'İki kare farkı özdeşliği', detail: '$(x+y)(x-y) = x^2 - xy + xy - y^2 = x^2 - y^2$.' }
    ]
  },
  {
    id: 'oc-02',
    topicId: 'ozdeslik-carpanlara-ayirma',
    phase: 'before',
    section: 'Soru 7 — Özdeşlik Çarpımları',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (1).jpeg',
    prompt: '7b) $(2x - y)(2x + y)$ çarpımını hesaplayınız.',
    answer: '$4x^2 - y^2$',
    steps: [
      { title: 'İki kare farkı uygula', detail: '$(2x)^2 - y^2 = 4x^2 - y^2$.' }
    ]
  },
  {
    id: 'oc-03',
    topicId: 'ozdeslik-carpanlara-ayirma',
    phase: 'before',
    section: 'Soru 7 — Özdeşlik Çarpımları',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (1).jpeg',
    prompt: '7c) $(x + y)(x^2 - xy + y^2)$ çarpımının sonucunu bulunuz.',
    answer: '$x^3 + y^3$',
    steps: [
      { title: 'Dağılma özelliğini uygula', detail: '$x^3 - x^2y + xy^2 + yx^2 - xy^2 + y^3$' },
      { title: 'Sadeleştir', detail: '$-x^2y + yx^2 = 0$ ve $+xy^2 - xy^2 = 0$ gider, geriye $x^3 + y^3$ kalır.' }
    ]
  },
  {
    id: 'oc-04',
    topicId: 'ozdeslik-carpanlara-ayirma',
    phase: 'before',
    section: 'Soru 7 — Özdeşlik Çarpımları',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (1).jpeg',
    prompt: '7ç) $(x - y)(x^2 + xy + y^2)$ çarpımının sonucunu bulunuz.',
    answer: '$x^3 - y^3$',
    steps: [
      { title: 'Küp farkı özdeşliği', detail: 'Dağılma ile tüm ara terimler ($+x^2y - x^2y$ ve $+xy^2 - xy^2$) sıfırlanır, sonuç $x^3 - y^3$ olur.' }
    ]
  },
  {
    id: 'oc-05',
    topicId: 'ozdeslik-carpanlara-ayirma',
    phase: 'before',
    section: 'Soru 7 — Özdeşlik Çarpımları',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (1).jpeg',
    prompt: '7d) $(x + 1)(x^3 - x^2 + x - 1)$ çarpımını hesaplayınız.',
    answer: '$x^4 - 1$',
    steps: [
      { title: 'Terimleri dağıt', detail: '$x^4 - x^3 + x^2 - x + x^3 - x^2 + x - 1$' },
      { title: 'Zıt işaretlileri götür', detail: '$-x^3 + x^3 = 0$, $+x^2 - x^2 = 0$, $-x + x = 0 \\implies x^4 - 1$.' }
    ]
  },
  {
    id: 'oc-06',
    topicId: 'ozdeslik-carpanlara-ayirma',
    phase: 'before',
    section: 'Soru 7 — Özdeşlik Çarpımları',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (1).jpeg',
    prompt: '7e) $(x - 1)(x^4 + x^3 + x^2 + x + 1)$ çarpımını hesaplayınız.',
    answer: '$x^5 - 1$',
    steps: [
      { title: 'Teleskopik sadeleştirme', detail: '$x$ ile çarpım $x^5 + x^4 + x^3 + x^2 + x$, $-1$ ile çarpım $-x^4 - x^3 - x^2 - x - 1$ verir. Ortadakiler gider: $x^5 - 1$.' }
    ]
  },
  // --- Bölüm 2.4 Tam Kareye Tamamlama ---
  {
    id: 'oc-07',
    topicId: 'ozdeslik-carpanlara-ayirma',
    phase: 'before',
    section: 'Bölüm 2.4 — Tam Kareye Tamamlama',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (1).jpeg',
    prompt: 'Not Örnekleri: $x^2 - 4x + \\square$ ve $x^2 + 10x + \\square$ ifadelerinin tam kare olması için boşluklara ne gelmelidir?',
    answer: '$4$ ve $25$',
    steps: [
      { title: 'Ortadaki katsayının yarısının karesini al', detail: '$-4/2 = -2 \\implies (-2)^2 = 4 \\implies (x-2)^2 = x^2 - 4x + 4$.<br>$10/2 = 5 \\implies 5^2 = 25 \\implies (x+5)^2 = x^2 + 10x + 25$.' }
    ]
  },
  {
    id: 'oc-08',
    topicId: 'ozdeslik-carpanlara-ayirma',
    phase: 'before',
    section: 'Bölüm 2.4 — Tam Kareye Tamamlama',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (1).jpeg',
    prompt: 'a) $a^2 - 6ab + x$ ifadesinin tam kare olması için $x$ ne olmalıdır?',
    answer: '$x = 9b^2$',
    steps: [
      { title: 'İkinci terimi bul', detail: 'Ortadaki terim $-6ab = -2\\cdot a \\cdot (3b)$ olduğundan ifade $(a - 3b)^2$ olmalıdır.' },
      { title: 'Kare açılımını yaz', detail: '$(a - 3b)^2 = a^2 - 6ab + 9b^2 \\implies x = 9b^2$.' }
    ]
  },
  {
    id: 'oc-09',
    topicId: 'ozdeslik-carpanlara-ayirma',
    phase: 'before',
    section: 'Bölüm 2.4 — Tam Kareye Tamamlama',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (1).jpeg',
    prompt: 'b) $a^2 - 4b^2a - x$ ifadesinin tam kare olması için $x$ ne olmalıdır?',
    answer: '$x = -4b^4$',
    steps: [
      { title: 'Karekök ve iki kat analizi', detail: 'Ortadaki terim $-4b^2a = -2\\cdot a \\cdot (2b^2)$ olduğundan tam kare $(a - 2b^2)^2 = a^2 - 4b^2a + 4b^4$’tür.' },
      { title: '$-x$ ile eşitle', detail: '$-x = +4b^4 \\implies x = -4b^4$.' }
    ]
  },
  {
    id: 'oc-10',
    topicId: 'ozdeslik-carpanlara-ayirma',
    phase: 'before',
    section: 'Bölüm 2.4 — Tam Kareye Tamamlama',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (1).jpeg',
    prompt: 'c) $m^2 + \\dfrac{1}{2}mn + x$ ifadesinin tam kare olması için $x$ ne olmalıdır?',
    answer: '$x = \\dfrac{n^2}{16}$',
    steps: [
      { title: 'İkinci terimin yarısını al', detail: '$\\dfrac{1}{2}n$ değerinin yarısı $\\dfrac{n}{4}$’tür. Yani tam kare $\\left(m + \\dfrac{n}{4}\\right)^2$ olur.' },
      { title: 'Karesini al', detail: '$x = \\left(\\dfrac{n}{4}\\right)^2 = \\dfrac{n^2}{16}$.' }
    ]
  },
  {
    id: 'oc-11',
    topicId: 'ozdeslik-carpanlara-ayirma',
    phase: 'before',
    section: 'Bölüm 2.4 — Tam Kareye Tamamlama',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (1).jpeg',
    prompt: 'ç) $m^4 - \\dfrac{1}{4}m^2n^4 + x$ (veya $-x$ durumunda $-\\dfrac{n^8}{64}$) ifadesinin tam kare olması için $x$ nedir?',
    answer: '$x = \\dfrac{n^8}{64}$ (ifade $-x$ ise $-\\dfrac{n^8}{64}$)',
    note: 'Defterde sol tarafta +x yazılıp cevapta -n^8/64 belirtilmiş (soru kökünde -x olması durumu için). Tam kareyi sağlayan sabit terim daima +n^8/64’tür.',
    steps: [
      { title: 'Kare terimi bul', detail: 'Birinci terim $(m^2)^2$. Ortadaki terim $-\\dfrac{1}{4}m^2n^4 = -2\\cdot m^2 \\cdot \\left(\\dfrac{n^4}{8}\\right)$.' },
      { title: 'Karesini al', detail: '$\\left(m^2 - \\dfrac{n^4}{8}\\right)^2 = m^4 - \\dfrac{1}{4}m^2n^4 + \\dfrac{n^8}{64}$.' }
    ]
  },
  // --- Soru 2: Sadeleştirme ---
  {
    id: 'oc-12',
    topicId: 'ozdeslik-carpanlara-ayirma',
    phase: 'before',
    section: 'Soru 2 — Kesir Sadeleştirme',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (1).jpeg',
    prompt: '2a) $\\dfrac{a^2 - b^2}{a - b}$ ifadesini sadeleştiriniz ($a \\neq b$).',
    answer: '$a + b$',
    steps: [
      { title: 'Payı iki kare farkıyla aç', detail: '$\\dfrac{(a - b)(a + b)}{a - b} = a + b$.' }
    ]
  },
  {
    id: 'oc-13',
    topicId: 'ozdeslik-carpanlara-ayirma',
    phase: 'before',
    section: 'Soru 2 — Kesir Sadeleştirme',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (1).jpeg',
    prompt: '2b) $\\dfrac{a - b}{\\sqrt{a} - \\sqrt{b}}$ ifadesini sadeleştiriniz ($a,b \\ge 0, a \\neq b$).',
    answer: '$\\sqrt{a} + \\sqrt{b}$',
    steps: [
      { title: 'Payı $(\\sqrt{a})^2 - (\\sqrt{b})^2$ olarak yaz', detail: '$a - b = (\\sqrt{a} + \\sqrt{b})(\\sqrt{a} - \\sqrt{b})$.' },
      { title: 'Paydayla sadeleştir', detail: '$\\dfrac{(\\sqrt{a}+\\sqrt{b})(\\sqrt{a}-\\sqrt{b})}{\\sqrt{a}-\\sqrt{b}} = \\sqrt{a} + \\sqrt{b}$.' }
    ]
  },
  {
    id: 'oc-14',
    topicId: 'ozdeslik-carpanlara-ayirma',
    phase: 'before',
    section: 'Soru 2 — Kesir Sadeleştirme',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (1).jpeg',
    prompt: '2c) $\\dfrac{a^3 - b^3}{a - b}$ ifadesini sadeleştiriniz ($a \\neq b$).',
    answer: '$a^2 + ab + b^2$',
    steps: [
      { title: 'Küp farkı özdeşliğini aç', detail: '$\\dfrac{(a - b)(a^2 + ab + b^2)}{a - b} = a^2 + ab + b^2$.' }
    ]
  },
  {
    id: 'oc-15',
    topicId: 'ozdeslik-carpanlara-ayirma',
    phase: 'before',
    section: 'Soru 2 — Kesir Sadeleştirme',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (1).jpeg',
    prompt: '2g) $\\dfrac{8x^3 - 1}{2x - 1}$ ifadesini sadeleştiriniz ($x \\neq 1/2$).',
    answer: '$4x^2 + 2x + 1$',
    steps: [
      { title: 'Küp farkına benzet', detail: '$8x^3 - 1 = (2x)^3 - 1^3$.' },
      { title: 'Özdeşliği uygula ve sadeleştir', detail: '$\\dfrac{(2x - 1)(4x^2 + 2x + 1)}{2x - 1} = 4x^2 + 2x + 1$.' }
    ]
  },
  // --- Soru 3: Bölünebilme Özdeşliği ---
  {
    id: 'oc-16',
    topicId: 'ozdeslik-carpanlara-ayirma',
    phase: 'before',
    section: 'Soru 3 — Özdeşlikle Bölünebilme',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (1).jpeg',
    prompt: '3a) $n \\in \\mathbb{N}$ için $n^3 - n$ ifadesinin $6$’ya kalansız bölündüğünü kullanarak $n^3 + 5n$, $n^3 - 19n$, $n^3 + 11n$ ve $n^5 - 25n$ ifadelerinin $6$’ya kalansız bölünüp bölünmediğini gösteriniz.',
    answer: 'Dördü de $6$’ya kalansız bölünür.',
    steps: [
      { title: '$n^3 - n$ neden $6$’ya bölünür?', detail: '$n^3 - n = n(n^2 - 1) = (n-1)\\cdot n \\cdot (n+1)$. Ardışık 3 tam sayının çarpımı içinde mutlaka en az bir çift sayı (2’nin katı) ve bir 3’ün katı bulunduğu için çarpım $6$’nın katıdır.' },
      { title: '$n^3 + 5n$, $n^3 - 19n$, $n^3 + 11n$', detail: '• $n^3 + 5n = (n^3 - n) + 6n$ (her iki parça 6’nın katı)<br>• $n^3 - 19n = (n^3 - n) - 18n$ ($18n = 6\\cdot 3n$)<br>• $n^3 + 11n = (n^3 - n) + 12n$ ($12n = 6\\cdot 2n$)' },
      { title: '$n^5 - 25n$', detail: '$n^5 - 25n = (n^5 - n) - 24n = n(n^2-1)(n^2+1) - 24n = (n^3-n)(n^2+1) - 24n$. İlk kısım $(n^3-n)$ içerdiği için, ikinci kısım $24 = 6\\cdot 4$ olduğu için tamamı $6$’ya kalansız bölünür!' }
    ]
  },
  // --- Soru 4: Pratik Hesaplama ---
  {
    id: 'oc-17',
    topicId: 'ozdeslik-carpanlara-ayirma',
    phase: 'before',
    section: 'Soru 4 — Özdeşlikle Pratik Hesap',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (4).jpeg',
    prompt: '4a) $69 \\cdot 71$ çarpımını iki kare farkı özdeşliği kullanarak hesaplayınız.',
    answer: '$4899$',
    steps: [
      { title: 'Ortadaki sayı $x = 70$ seç', detail: '$69 \\cdot 71 = (70 - 1)(70 + 1) = 70^2 - 1^2 = 4900 - 1 = 4899$.' }
    ]
  },
  {
    id: 'oc-18',
    topicId: 'ozdeslik-carpanlara-ayirma',
    phase: 'before',
    section: 'Soru 4 — Özdeşlikle Pratik Hesap',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (4).jpeg',
    prompt: '4b) $89^2$ işlemini tam kare özdeşliği ile hesaplayınız.',
    answer: '$7921$',
    steps: [
      { title: '$(90 - 1)^2$ olarak yaz', detail: '$90^2 - 2\\cdot 90\\cdot 1 + 1^2 = 8100 - 180 + 1 = 7921$.' }
    ]
  },
  {
    id: 'oc-19',
    topicId: 'ozdeslik-carpanlara-ayirma',
    phase: 'before',
    section: 'Soru 4 — Özdeşlikle Pratik Hesap',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (4).jpeg',
    prompt: '4g) $164^2 - 136^2$ işlemini hesaplayınız.',
    answer: '$8400$',
    steps: [
      { title: 'İki kare farkı uygula', detail: '$(164 - 136)(164 + 136) = 28 \\cdot 300 = 8400$.' }
    ]
  },
  // --- Soru 6: Eşlenik ---
  {
    id: 'oc-20',
    topicId: 'ozdeslik-carpanlara-ayirma',
    phase: 'before',
    section: 'Soru 6 — Paydayı Rasyonel Yapma',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (4).jpeg',
    prompt: '6a) $\\dfrac{2}{\\sqrt{5} + 2}$ kesrinin paydasını rasyonel yapınız.',
    answer: '$2(\\sqrt{5} - 2)$',
    steps: [
      { title: 'Eşlenik ile genişlet', detail: 'Pay ve paydayı $(\\sqrt{5} - 2)$ ile çarp: $\\dfrac{2(\\sqrt{5} - 2)}{(\\sqrt{5})^2 - 2^2} = \\dfrac{2(\\sqrt{5} - 2)}{5 - 4} = 2(\\sqrt{5} - 2)$.' }
    ]
  },
  {
    id: 'oc-21',
    topicId: 'ozdeslik-carpanlara-ayirma',
    phase: 'before',
    section: 'Soru 6 — Paydayı Rasyonel Yapma',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (4).jpeg',
    prompt: '6b) $\\dfrac{5}{\\sqrt{3} + \\sqrt{2}}$ kesrinin paydasını rasyonel yapınız.',
    answer: '$5(\\sqrt{3} - \\sqrt{2})$',
    steps: [
      { title: '$(\\sqrt{3} - \\sqrt{2})$ ile genişlet', detail: '$\\dfrac{5(\\sqrt{3} - \\sqrt{2})}{3 - 2} = 5(\\sqrt{3} - \\sqrt{2})$.' }
    ]
  },
  {
    id: 'oc-22',
    topicId: 'ozdeslik-carpanlara-ayirma',
    phase: 'before',
    section: 'Soru 6 — Paydayı Rasyonel Yapma',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (4).jpeg',
    prompt: '6d) $\\dfrac{3}{\\sqrt[3]{2} - 1}$ kesrinin paydasını rasyonel yapınız.',
    answer: '$3(\\sqrt[3]{4} + \\sqrt[3]{2} + 1)$',
    steps: [
      { title: 'Küp farkı eşleniğini kullan', detail: '$a = \\sqrt[3]{2}$ dersek $(a - 1)(a^2 + a + 1) = a^3 - 1 = 2 - 1 = 1$.' },
      { title: '$\\sqrt[3]{4} + \\sqrt[3]{2} + 1$ ile genişlet', detail: '$\\dfrac{3(\\sqrt[3]{4} + \\sqrt[3]{2} + 1)}{2 - 1} = 3(\\sqrt[3]{4} + \\sqrt[3]{2} + 1)$.' }
    ]
  },
  // --- Soru 6 (21.40.34 (2)): Polinomları Çarpanlarına Ayırma ---
  {
    id: 'oc-23',
    topicId: 'ozdeslik-carpanlara-ayirma',
    phase: 'before',
    section: 'Üç Terimli Çarpanlara Ayırma',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (2).jpeg',
    prompt: '6a) $2x^2 + x - 3$ polinomunu çarpanlarına ayırınız.',
    answer: '$(2x + 3)(x - 1)$',
    steps: [
      { title: 'Çapraz çarpım kontrolü', detail: '$2x^2$ için $2x$ ve $x$; $-3$ için $+3$ ve $-1$ seçilir. Çapraz toplam: $2x\\cdot(-1) + x\\cdot 3 = -2x + 3x = +x$ (ortadaki terimi verir!).' },
      { title: 'Düz yaz', detail: '$(2x + 3)(x - 1)$.' }
    ]
  },
  {
    id: 'oc-24',
    topicId: 'ozdeslik-carpanlara-ayirma',
    phase: 'before',
    section: 'Üç Terimli Çarpanlara Ayırma',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (2).jpeg',
    prompt: '6b) $3x^2 + 2x - 1$ polinomunu çarpanlarına ayırınız.',
    answer: '$(3x - 1)(x + 1)$',
    steps: [
      { title: 'Çapraz çarpım kontrolü', detail: '$3x$ ile $+1$ ve $x$ ile $-1$ çapraz çarpılınca $3x - x = +2x$ verir.' },
      { title: 'Çarpanları yaz', detail: '$(3x - 1)(x + 1)$.' }
    ]
  },

  // =========================================================
  // 6. POLİNOMLAR & POLİNOMDA BÖLME (21.40.34 (4) & 21.40.33 (4))
  // =========================================================
  {
    id: 'po-01',
    topicId: 'polinomlar',
    phase: 'before',
    section: 'Polinomlarda Bölme (Giriş)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (4).jpeg',
    prompt: '$(2x - 1)$ polinomunun $(x + 2)$ ile bölümünden bölümü ve kalanı bulup $A = B\\cdot C + K$ şeklinde yazınız.',
    answer: '$2x - 1 = 2(x + 2) - 5$',
    steps: [
      { title: 'İlk terimleri böl', detail: '$2x \\div x = 2$ (Bölüm $= 2$).' },
      { title: 'Çarp ve çıkar', detail: '$2(x+2) = 2x + 4$. $(2x - 1) - (2x + 4) = -5$ (Kalan $= -5$).' },
      { title: 'Eşitlik olarak yaz', detail: '$2x - 1 = 2(x + 2) - 5$.' }
    ]
  },
  {
    id: 'po-02',
    topicId: 'polinomlar',
    phase: 'before',
    section: 'Polinomlarda Bölme (Giriş)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (4).jpeg',
    prompt: '$(2x^2 - 3x - 3)$ polinomunu $(x - 2)$ ile bölüp $A = B\\cdot C + K$ eşitliğini yazınız.',
    answer: '$2x^2 - 3x - 3 = (x - 2)(2x + 1) - 1$',
    steps: [
      { title: '1. Adım ($2x^2 \\div x = 2x$)', detail: '$2x(x-2) = 2x^2 - 4x$. Çıkarınca $(2x^2 - 3x - 3) - (2x^2 - 4x) = x - 3$ kalır.' },
      { title: '2. Adım ($x \\div x = +1$)', detail: '$1(x-2) = x - 2$. Çıkarınca $(x - 3) - (x - 2) = -1$ (Kalan).' },
      { title: 'Sonuç', detail: '$2x^2 - 3x - 3 = (x - 2)(2x + 1) - 1$.' }
    ]
  },
  {
    id: 'po-03',
    topicId: 'polinomlar',
    phase: 'before',
    section: 'Kalan Bulma Örneği',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (4).jpeg',
    prompt: 'Örn: $2x^2 - 3x - 3$ polinomunun $x - 2$ ile bölümünden kalanı kısa yoldan bulunuz.',
    answer: '$-1$',
    steps: [
      { title: 'Böleni sıfıra eşitle', detail: '$x - 2 = 0 \\implies x = 2$.' },
      { title: 'Polinomda yerine koy', detail: '$2\\cdot 2^2 - 3\\cdot 2 - 3 = 8 - 6 - 3 = -1$.' }
    ]
  },
  {
    id: 'po-04',
    topicId: 'polinomlar',
    phase: 'before',
    section: 'Uzun Bölme Örneği',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (4).jpeg',
    prompt: '$(4x^3 - 6x^2 + 3x + 4)$ polinomunun $(2x^2 - 5x + 1)$ polinomuna bölümünden Bölüm ve Kalanı bulunuz.',
    answer: 'Bölüm: $2x + 2$, Kalan: $11x + 2$',
    steps: [
      { title: '1. Adım ($4x^3 \\div 2x^2 = 2x$)', detail: '$2x(2x^2 - 5x + 1) = 4x^3 - 10x^2 + 2x$. Bölünenden çıkarılınca $4x^2 + x + 4$ kalır.' },
      { title: '2. Adım ($4x^2 \\div 2x^2 = +2$)', detail: '$2(2x^2 - 5x + 1) = 4x^2 - 10x + 2$. Çıkarılınca $(4x^2 + x + 4) - (4x^2 - 10x + 2) = 11x + 2$ kalır.' },
      { title: 'Durma şartı', detail: 'Kalan ($11x+2$) 1. dereceden, bölen ($2x^2-5x+1$) 2. dereceden olduğundan bölme biter.' }
    ]
  },
  {
    id: 'po-05',
    topicId: 'polinomlar',
    phase: 'before',
    section: 'Bölüm 2.5 — Giriş',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (4).jpeg',
    prompt: 'Bölüm 2.5 a) $P_1(x) = 3x - 2$ polinomu için $x = 0$ değeri ve $P_1(x) = 0$ kökü nedir?',
    answer: '$P_1(0) = -2$, kök $x = \\dfrac{2}{3}$',
    steps: [
      { title: '$x = 0$ için sabit terim', detail: '$P_1(0) = 3(0) - 2 = -2$.' },
      { title: '$P_1(x) = 0$ için kök', detail: '$3x - 2 = 0 \\implies x = \\dfrac{2}{3}$.' }
    ]
  },
  {
    id: 'po-06',
    topicId: 'polinomlar',
    phase: 'before',
    section: 'Bölüm 2.5 — Soru 4 (İşlemler)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (4).jpeg',
    prompt: '4a) $(4x - 3) + (3x + 4) - (5x - 6)$ işlemini yapınız.',
    answer: '$2x + 7$',
    steps: [
      { title: 'Parantezleri aç', detail: '$4x - 3 + 3x + 4 - 5x + 6$' },
      { title: 'Benzer terimleri topla', detail: '$(4x + 3x - 5x) + (-3 + 4 + 6) = 2x + 7$.' }
    ]
  },
  {
    id: 'po-07',
    topicId: 'polinomlar',
    phase: 'before',
    section: 'Bölüm 2.5 — Soru 4 (İşlemler)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (4).jpeg',
    prompt: '4b) $(3x^2 - 5x - 30) - (10x^2 - 3x - 14) + (4x^3 + 7x^2 + 2x + 16)$ işlemini yapınız.',
    answer: '$4x^3$',
    steps: [
      { title: 'Parantezleri aç', detail: '$3x^2 - 5x - 30 - 10x^2 + 3x + 14 + 4x^3 + 7x^2 + 2x + 16$' },
      { title: 'Derecelere göre grupla', detail: '• $x^3$: $4x^3$<br>• $x^2$: $3x^2 - 10x^2 + 7x^2 = 0$<br>• $x$: $-5x + 3x + 2x = 0$<br>• Sabit: $-30 + 14 + 16 = 0$<br>Sonuç: $4x^3$.' }
    ]
  },
  {
    id: 'po-08',
    topicId: 'polinomlar',
    phase: 'before',
    section: 'Bölüm 2.5 — Soru 4 (İşlemler)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (4).jpeg',
    prompt: '4c) $5(2x - 1) - 3(3x + 1) - x + 8$ işlemini yapınız.',
    answer: '$0$',
    steps: [
      { title: 'Dağılma özelliğini uygula', detail: '$10x - 5 - 9x - 3 - x + 8$' },
      { title: 'Topla', detail: '$(10x - 9x - x) + (-5 - 3 + 8) = 0 + 0 = 0$.' }
    ]
  },
  {
    id: 'po-09',
    topicId: 'polinomlar',
    phase: 'before',
    section: 'Bölüm 2.5 — Soru 4 (İşlemler)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (4).jpeg',
    prompt: '4d) $(2x - 1)(x^2 + 3x - 1)$ çarpımını hesaplayınız.',
    answer: '$2x^3 + 5x^2 - 5x + 1$',
    note: 'Defterde -1 ile çarpılırken işaretler (+x^2 + 3x - 1 şeklinde) kaymış ve 2x^3 + 7x^2 + x - 1 yazılmıştır; doğru çarpım 2x^3 + 5x^2 - 5x + 1’dir.',
    steps: [
      { title: '$2x$ ile çarp', detail: '$2x(x^2 + 3x - 1) = 2x^3 + 6x^2 - 2x$.' },
      { title: '$-1$ ile çarp', detail: '$-1(x^2 + 3x - 1) = -x^2 - 3x + 1$.' },
      { title: 'Benzer terimleri topla', detail: '$2x^3 + (6x^2 - x^2) + (-2x - 3x) + 1 = 2x^3 + 5x^2 - 5x + 1$.' }
    ]
  },
  {
    id: 'po-10',
    topicId: 'polinomlar',
    phase: 'before',
    section: 'Bölüm 2.5 — Soru 5 (Bölme Eşitlikleri)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (4).jpeg',
    prompt: '5a) $(3x - 1)$ polinomunu $(x + 2)$’ye bölüp $A = B\\cdot C + K$ şeklinde yazınız.',
    answer: '$3x - 1 = 3(x + 2) - 7$',
    steps: [
      { title: 'Bölümü bul', detail: '$3x \\div x = 3$. $3(x+2) = 3x + 6$.' },
      { title: 'Kalanı bul', detail: '$(3x - 1) - (3x + 6) = -7$. Eşitlik: $3x - 1 = 3(x + 2) - 7$.' }
    ]
  },
  {
    id: 'po-11',
    topicId: 'polinomlar',
    phase: 'before',
    section: 'Bölüm 2.5 — Soru 5 (Bölme Eşitlikleri)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (4).jpeg',
    prompt: '5b) $(4x^2 - 3x - 3)$ polinomunu $(x - 3)$’e bölüp $A = B\\cdot C + K$ şeklinde yazınız.',
    answer: '$4x^2 - 3x - 3 = (x - 3)(4x + 9) + 24$',
    steps: [
      { title: '1. Adım ($4x$)', detail: '$4x(x - 3) = 4x^2 - 12x$. Çıkarınca $9x - 3$ kalır.' },
      { title: '2. Adım ($+9$)', detail: '$9(x - 3) = 9x - 27$. Çıkarınca $(-3) - (-27) = +24$ kalır.' },
      { title: 'Eşitlik', detail: '$4x^2 - 3x - 3 = (x - 3)(4x + 9) + 24$.' }
    ]
  },
  {
    id: 'po-12',
    topicId: 'polinomlar',
    phase: 'before',
    section: 'Bölüm 2.5 — Soru 5 (Bölme Eşitlikleri)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (4).jpeg',
    prompt: '5c) $(2x^2 - 3x + 4)$ polinomunu $(x - 4)$’e bölüp $A = B\\cdot C + K$ şeklinde yazınız.',
    answer: '$2x^2 - 3x + 4 = (x - 4)(2x + 5) + 24$',
    steps: [
      { title: '1. Adım ($2x$)', detail: '$2x(x - 4) = 2x^2 - 8x$. Çıkarınca $5x + 4$ kalır.' },
      { title: '2. Adım ($+5$)', detail: '$5(x - 4) = 5x - 20$. Çıkarınca $4 - (-20) = 24$ kalır.' },
      { title: 'Eşitlik', detail: '$2x^2 - 3x + 4 = (x - 4)(2x + 5) + 24$.' }
    ]
  },
  {
    id: 'po-13',
    topicId: 'polinomlar',
    phase: 'before',
    section: 'Bölüm 2.5 — Soru 5 (Bölme Eşitlikleri)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33 (4).jpeg',
    prompt: '5ç) $(3x^3 - 6x^2 + 3x + 4)$ polinomunu $(x^2 + 5x + 1)$’e bölüp $A = B\\cdot C + K$ şeklinde yazınız.',
    answer: '$3x^3 - 6x^2 + 3x + 4 = (x^2 + 5x + 1)(3x - 21) + 105x + 25$',
    note: 'Defterde son çıkarma adımında -105x işaret değiştirilmeden -105x+25 yazılmıştır; çıkarma gereği (-(-105x)) = +105x olur, yani kalan 105x + 25’tir.',
    steps: [
      { title: '1. Adım ($3x$)', detail: '$3x(x^2 + 5x + 1) = 3x^3 + 15x^2 + 3x$. Çıkarınca $-21x^2 + 4$ kalır ($3x$’ler birbirini götürür).' },
      { title: '2. Adım ($-21$)', detail: '$-21(x^2 + 5x + 1) = -21x^2 - 105x - 21$.' },
      { title: 'Çıkarma ile kalanı bul', detail: '$(-21x^2 + 4) - (-21x^2 - 105x - 21) = 105x + 25$.' }
    ]
  },

  // =========================================================
  // 7. DENKLEMLER, MUTLAK DEĞER & PROBLEMLER (21.40.34 (2) & 21.40.33)
  // =========================================================
  {
    id: 'dm-01',
    topicId: 'denklemler-mutlak-problemler',
    phase: 'before',
    section: 'Denklemler',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (2).jpeg',
    prompt: 'f) $\\dfrac{1}{3x - 1} = \\dfrac{3}{2(x + 6)}$ denklemini çözünüz.',
    answer: '$x = \\dfrac{15}{7}$',
    note: 'Defterde 9x - 3 = 2x + 12 sonrasında 9x - 2x sehven 7x yazılıp sonda 15/17 yazılmıştır; doğrusu 15/7’dir.',
    steps: [
      { title: 'İçler-dışlar çarpımı yap', detail: '$3(3x - 1) = 1\\cdot 2(x + 6) \\implies 9x - 3 = 2x + 12$.' },
      { title: 'Bilinen ve bilinmeyenleri ayır', detail: '$9x - 2x = 12 + 3 \\implies 7x = 15 \\implies x = \\dfrac{15}{7}$. (Paydayı sıfır yapmaz, geçerli köktür.)' }
    ]
  },
  {
    id: 'dm-02',
    topicId: 'denklemler-mutlak-problemler',
    phase: 'before',
    section: 'Denklemler',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (2).jpeg',
    prompt: 'h) $\\dfrac{6 - x}{x - 5} - 6 = \\dfrac{1}{x - 5}$ denkleminin çözüm kümesini bulunuz.',
    answer: '$\\text{Ç.K.} = \\emptyset$',
    steps: [
      { title: 'Kesirleri aynı tarafa al', detail: '$\\dfrac{6 - x}{x - 5} - \\dfrac{1}{x - 5} = 6 \\implies \\dfrac{5 - x}{x - 5} = 6$.' },
      { title: 'Sadeleştir ve çelişkiyi gör', detail: '$x \\neq 5$ için $\\dfrac{-(x - 5)}{x - 5} = -1 = 6$, bu imkânsızdır! Dolayısıyla $\\text{Ç.K.} = \\emptyset$.' }
    ]
  },
  {
    id: 'dm-03',
    topicId: 'denklemler-mutlak-problemler',
    phase: 'before',
    section: 'Parametreli Denklemler',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (2).jpeg',
    prompt: 'j) $\\dfrac{x + a}{b} + \\dfrac{b - x}{a} = 2$ ($a \\neq 0,\\ b \\neq 0,\\ a \\neq b$) denkleminde $x$’i bulunuz.',
    answer: '$x = b - a$',
    steps: [
      { title: 'Payda eşitle ($ab$)', detail: '$\\dfrac{a(x + a) + b(b - x)}{ab} = 2 \\implies ax + a^2 + b^2 - bx = 2ab$.' },
      { title: 'Tam kareyi oluştur', detail: '$(a^2 - 2ab + b^2) + x(a - b) = 0 \\implies (a - b)^2 + x(a - b) = 0$.' },
      { title: '$(a-b)$ parantezine al', detail: '$(a - b)(a - b + x) = 0$. $a \\neq b$ olduğundan $a - b + x = 0 \\implies x = b - a$.' }
    ]
  },
  {
    id: 'dm-04',
    topicId: 'denklemler-mutlak-problemler',
    phase: 'before',
    section: 'Sayı Problemleri',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (2).jpeg',
    prompt: '5) Bir sayının $\\dfrac{1}{2}$’sinin $\\dfrac{3}{7}$’sinin $\\dfrac{3}{5}$’i $90$ ise, bu sayı kaçtır?',
    answer: '$700$',
    steps: [
      { title: 'Denklemi kur', detail: '$x \\cdot \\dfrac{1}{2} \\cdot \\dfrac{3}{7} \\cdot \\dfrac{3}{5} = 90$.' },
      { title: 'Çarp ve çöz', detail: '$\\dfrac{9x}{70} = 90 \\implies x = \\dfrac{90 \\cdot 70}{9} = 10 \\cdot 70 = 700$.' }
    ]
  },
  {
    id: 'dm-05',
    topicId: 'denklemler-mutlak-problemler',
    phase: 'before',
    section: 'Kesir Problemleri',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (2).jpeg',
    prompt: '6) İlkinin parasının önce $\\dfrac{1}{5}$’ini, sonra kalan parasının $\\dfrac{3}{8}$’ini harcayınca $300.000$ TL kalır. Harcamadan önce kaç lirası vardı?',
    answer: '$600.000$ TL',
    note: 'Defterde 300.000 sayısı bilimsel gösterimde sehven 3·10^6 yazılmış; 300.000 = 3·10^5 olduğundan cevap 6·10^5 = 600.000 TL’dir.',
    steps: [
      { title: 'İlk harcamadan sonra kalan', detail: 'Parası $x$ olsun. $\\dfrac{1}{5}$’ini harcayınca $x - \\dfrac{x}{5} = \\dfrac{4x}{5}$ kalır.' },
      { title: 'İkinci harcamadan sonra kalan', detail: 'Kalanın $\\dfrac{3}{8}$’ini harcayınca $\\left(1 - \\dfrac{3}{8}\\right) = \\dfrac{5}{8}$’i kalır: $\\dfrac{4x}{5} \\cdot \\dfrac{5}{8} = \\dfrac{4x}{8} = \\dfrac{x}{2}$.' },
      { title: 'Sonucu bul', detail: '$\\dfrac{x}{2} = 300.000 \\implies x = 600.000$ TL.' }
    ]
  },
  {
    id: 'dm-06',
    topicId: 'denklemler-mutlak-problemler',
    phase: 'before',
    section: 'Geometri Problemi',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (2).jpeg',
    prompt: '9) İkizkenar üçgenin kenar uzunluğu taban uzunluğunun iki katıdır. Üçgenin çevresi $80$ cm ise taban uzunluğu kaçtır?',
    answer: '$16$ cm',
    steps: [
      { title: 'Kenarları tanımla', detail: 'Taban $x$ ise iki eşit yan kenar $2x$ ve $2x$ olur.' },
      { title: 'Çevre denklemi', detail: '$2x + 2x + x = 80 \\implies 5x = 80 \\implies x = 16$ cm.' }
    ]
  },
  {
    id: 'dm-07',
    topicId: 'denklemler-mutlak-problemler',
    phase: 'before',
    section: 'Ardışık Sayılar',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (2).jpeg',
    prompt: '12) Ardışık gelen iki tam sayının çarpımı, bunlardan sonra gelen iki tam sayının çarpımından $46$ kadar küçüktür. Sayıları bulunuz.',
    answer: '$10$ ve $11$ (sonraki ikili $12$ ve $13$)',
    steps: [
      { title: 'Sayıları yaz', detail: 'İlk iki sayı $x$ ve $x+1$; sonraki iki sayı $x+2$ ve $x+3$.' },
      { title: 'Denklemi kur ve aç', detail: '$x(x + 1) + 46 = (x + 2)(x + 3) \\implies x^2 + x + 46 = x^2 + 5x + 6$.' },
      { title: 'Çöz', detail: '$x^2$’ler gider: $40 = 4x \\implies x = 10$. Sayılar $10$ ve $11$’dir.' }
    ]
  },
  // --- Mutlak Değer (Soru 13) ---
  {
    id: 'dm-08',
    topicId: 'denklemler-mutlak-problemler',
    phase: 'before',
    section: 'Soru 13 — Mutlak Değerli Denklemler',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (2).jpeg',
    prompt: '13a) $|x + 3| = 2$ denklemini çözünüz.',
    answer: '$\\text{Ç.K.} = \\{-5,\\ -1\\}$',
    steps: [
      { title: 'İki durumu çöz', detail: '$x + 3 = 2 \\implies x = -1$ veya $x + 3 = -2 \\implies x = -5$.' }
    ]
  },
  {
    id: 'dm-09',
    topicId: 'denklemler-mutlak-problemler',
    phase: 'before',
    section: 'Soru 13 — Mutlak Değerli Denklemler',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (2).jpeg',
    prompt: '13c) $|x + 1| + |x - 2| = 0$ denkleminin çözüm kümesini bulunuz.',
    answer: '$\\text{Ç.K.} = \\emptyset$',
    steps: [
      { title: 'Mutlak değer negatif olamaz', detail: 'İki negatif olmayan ifadenin toplamının $0$ olması için her ikisinin de ayrı ayrı $0$ olması gerekir: $x + 1 = 0 \\implies x = -1$ ve $x - 2 = 0 \\implies x = 2$.' },
      { title: 'Çelişki', detail: 'Bir sayı aynı anda hem $-1$ hem $2$ olamayacağından çözüm yoktur: $\\text{Ç.K.} = \\emptyset$.' }
    ]
  },
  {
    id: 'dm-10',
    topicId: 'denklemler-mutlak-problemler',
    phase: 'before',
    section: 'Soru 13 — Mutlak Değerli Denklemler',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33.jpeg',
    prompt: '13d) $|2x - 5| = x - 1$ denklemini çözünüz.',
    answer: '$\\text{Ç.K.} = \\{2,\\ 4\\}$',
    steps: [
      { title: 'Sağ taraf şartı ($x - 1 \\ge 0$)', detail: 'Mutlak değer sonucu negatif olamayacağı için $x \\ge 1$ olmalıdır.' },
      { title: 'İki durumu çöz', detail: '1) $2x - 5 = x - 1 \\implies x = 4$ ($4 \\ge 1$ sağlar).<br>2) $2x - 5 = -(x - 1) = -x + 1 \\implies 3x = 6 \\implies x = 2$ ($2 \\ge 1$ sağlar).' }
    ]
  },
  {
    id: 'dm-11',
    topicId: 'denklemler-mutlak-problemler',
    phase: 'before',
    section: 'Soru 13 — Mutlak Değerli Denklemler',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33.jpeg',
    prompt: '13f) $\\left|\\dfrac{x}{2} + 1\\right| = 2 - x$ denklemini çözünüz.',
    answer: '$\\text{Ç.K.} = \\left\\{\\dfrac{2}{3}\\right\\}$',
    note: 'Dikkat! Defterde x = 2/3 ve x = 6 bulunmuştur; ancak x = 6 için sağ taraf 2 - 6 = -4 < 0 olacağından x = 6 yalancı köktür ve elenmelidir!',
    steps: [
      { title: 'Sağ taraf şartı ($2 - x \\ge 0$)', detail: 'Mutlak değer $\\ge 0$ olduğu için $2 - x \\ge 0 \\implies x \\le 2$ şartı zorunludur.' },
      { title: '1. Durum', detail: '$\\dfrac{x}{2} + 1 = 2 - x \\implies \\dfrac{3x}{2} = 1 \\implies x = \\dfrac{2}{3}$. ($\\dfrac{2}{3} \\le 2$ olduğundan geçerlidir!)' },
      { title: '2. Durum ve eleme', detail: '$\\dfrac{x}{2} + 1 = -2 + x \\implies \\dfrac{x}{2} = 3 \\implies x = 6$. Yerine koyunca $|3 + 1| = 2 - 6 \\implies 4 = -4$ (yanlış!). $x = 6$ elenir.' }
    ]
  },
  // --- Bölüm 3.2 ---
  {
    id: 'dm-12',
    topicId: 'denklemler-mutlak-problemler',
    phase: 'before',
    section: 'Bölüm 3.2 — 2. Derece Problemler',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33.jpeg',
    prompt: '9) Çevresi $14$ cm, köşegeni $5$ cm olan dikdörtgenin kenar uzunlukları kaçtır?',
    answer: '$3$ cm ve $4$ cm',
    steps: [
      { title: 'Kenarları ifade et', detail: 'Çevre $2(a + b) = 14 \\implies a + b = 7$. Bir kenar $x$ ise diğer kenar $7 - x$ olur.' },
      { title: 'Pisagor teoremi kur', detail: '$x^2 + (7 - x)^2 = 5^2 \\implies x^2 + 49 - 14x + x^2 = 25$.' },
      { title: '2. derece denklemi çöz', detail: '$2x^2 - 14x + 24 = 0 \\implies x^2 - 7x + 12 = 0 \\implies (x - 3)(x - 4) = 0$. Kenarlar $3$ cm ve $4$ cm.' }
    ]
  },
  {
    id: 'dm-13',
    topicId: 'denklemler-mutlak-problemler',
    phase: 'before',
    section: 'Bölüm 3.2 — Akıntı Problemi',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.33.jpeg',
    prompt: '10) Nehir kıyısındaki iki kent arası uzaklık $80$ km’dir. Gemi bu yolu $8$ saat $20$ dakikada gidip geri döner. Nehrin akıntı hızı $4$ km/saat ise, geminin durgun sudaki hızı nedir?',
    answer: '$20$ km/saat',
    steps: [
      { title: 'Toplam süreyi saate çevir', detail: '$8\\text{ saat } 20\\text{ dk} = 8 + \\dfrac{20}{60} = 8 + \\dfrac{1}{3} = \\dfrac{25}{3}$ saat.' },
      { title: 'Gidiş ve dönüş sürelerini yaz', detail: 'Durgun sudaki hız $x$ olsun. Akıntıyla gidiş hızı $x + 4$, dönüş hızı $x - 4$.<br>$t_1 = \\dfrac{80}{x + 4}$ ve $t_2 = \\dfrac{80}{x - 4}$.' },
      { title: 'Denklemi kur ve düzenle', detail: '$\\dfrac{80}{x + 4} + \\dfrac{80}{x - 4} = \\dfrac{25}{3} \\implies \\dfrac{80(x - 4) + 80(x + 4)}{x^2 - 16} = \\dfrac{25}{3} \\implies \\dfrac{160x}{x^2 - 16} = \\dfrac{25}{3}$.' },
      { title: '5 ile sadeleştir ve çöz', detail: '$\\dfrac{32x}{x^2 - 16} = \\dfrac{5}{3} \\implies 5x^2 - 80 = 96x \\implies 5x^2 - 96x - 80 = 0 \\implies (5x + 4)(x - 20) = 0$. Hız pozitif olduğundan $x = 20$ km/saat.' },
      { title: 'Sağlama', detail: '$\\dfrac{80}{24} + \\dfrac{80}{16} = \\dfrac{10}{3} + 5 = \\dfrac{25}{3}$ saat.' }
    ]
  },

  // =========================================================
  // 8. SİSTEMLER VE EŞİTSİZLİKLER (21.40.34 (3) & 21.40.34 (5))
  // =========================================================
  {
    id: 'se-01',
    topicId: 'sistemler-ve-esitsizlikler',
    phase: 'before',
    section: 'Bölüm 3.3 — Denklem Sistemleri',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (3).jpeg',
    prompt: 'a) $\\begin{cases} x + y = 3 \\\\ x - y = 5 \\end{cases}$ denklem sistemini çözünüz.',
    answer: '$\\text{Ç.K.} = \\{(4,\\ -1)\\}$',
    steps: [
      { title: 'Taraf tarafa topla', detail: '$(x + y) + (x - y) = 3 + 5 \\implies 2x = 8 \\implies x = 4$.' },
      { title: '$y$’yi bul', detail: '$4 + y = 3 \\implies y = -1$.' }
    ]
  },
  {
    id: 'se-02',
    topicId: 'sistemler-ve-esitsizlikler',
    phase: 'before',
    section: 'Bölüm 3.3 — Denklem Sistemleri',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (3).jpeg',
    prompt: 'b) $\\begin{cases} x + 2y = 5 \\\\ 3x - y = 5 \\end{cases}$ denklem sistemini çözünüz.',
    answer: '$x = \\dfrac{15}{7},\\ y = \\dfrac{10}{7}$',
    steps: [
      { title: 'İkinci denklemi 2 ile çarp', detail: '$6x - 2y = 10$. İlk denklemle topla: $(x + 6x) = 5 + 10 \\implies 7x = 15 \\implies x = \\dfrac{15}{7}$.' },
      { title: '$y$’yi bul', detail: '$3\\cdot\\dfrac{15}{7} - y = 5 \\implies y = \\dfrac{45}{7} - \\dfrac{35}{7} = \\dfrac{10}{7}$.' }
    ]
  },
  {
    id: 'se-03',
    topicId: 'sistemler-ve-esitsizlikler',
    phase: 'before',
    section: 'Bölüm 3.3 — Denklem Sistemleri',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (3).jpeg',
    prompt: 'c) $\\begin{cases} x + y = 4 \\\\ x + 2y = 6 \\end{cases}$ denklem sistemini çözünüz.',
    answer: '$x = 2,\\ y = 2$',
    steps: [
      { title: 'Üstteki denklemi $-1$ ile çarpıp topla', detail: '$(x + 2y) - (x + y) = 6 - 4 \\implies y = 2$.' },
      { title: '$x$’i bul', detail: '$x + 2 = 4 \\implies x = 2$.' }
    ]
  },
  {
    id: 'se-04',
    topicId: 'sistemler-ve-esitsizlikler',
    phase: 'before',
    section: 'Bölüm 3.3 — Denklem Sistemleri',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (3).jpeg',
    prompt: 'ç) $\\begin{cases} x - 2y = 0 \\\\ x + y = 3 \\end{cases}$ denklem sistemini çözünüz.',
    answer: '$x = 2,\\ y = 1$',
    steps: [
      { title: 'İlk denklemi $-1$ ile çarpıp topla', detail: '$(x + y) - (x - 2y) = 3 - 0 \\implies 3y = 3 \\implies y = 1$.' },
      { title: '$x$’i bul', detail: '$x = 2y = 2$.' }
    ]
  },
  {
    id: 'se-05',
    topicId: 'sistemler-ve-esitsizlikler',
    phase: 'before',
    section: 'Bölüm 3.3 — Denklem Sistemleri',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (3).jpeg',
    prompt: 'd) $\\begin{cases} x - 4y = -3 \\\\ x + 5y = 6 \\end{cases}$ denklem sistemini çözünüz.',
    answer: '$x = 1,\\ y = 1$',
    steps: [
      { title: 'İlk denklemi $-1$ ile çarpıp topla', detail: '$9y = 9 \\implies y = 1$.' },
      { title: '$x$’i bul', detail: '$x + 5(1) = 6 \\implies x = 1$.' }
    ]
  },
  {
    id: 'se-06',
    topicId: 'sistemler-ve-esitsizlikler',
    phase: 'before',
    section: 'Bölüm 3.3 — Denklem Sistemleri',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (3).jpeg',
    prompt: 'r) $\\begin{cases} x - 5y = 10 \\\\ 3x - 2y = -9 \\end{cases}$ denklem sistemini çözünüz.',
    answer: '$x = -5,\\ y = -3$',
    note: 'Defterde 13y = -39 bulunduktan sonra işaret unutularak y = 3 ve x = 25 yazılmıştır; -39/13 = -3 ve x = 10 + 5(-3) = -5’tir.',
    steps: [
      { title: 'İlk denklemi $-3$ ile çarp', detail: '$-3x + 15y = -30$.' },
      { title: 'İkinci denklemle topla', detail: '$(-3x + 15y) + (3x - 2y) = -30 - 9 \\implies 13y = -39 \\implies y = -3$.' },
      { title: '$x$’i bul', detail: '$x - 5(-3) = 10 \\implies x + 15 = 10 \\implies x = -5$.' }
    ]
  },
  {
    id: 'se-07',
    topicId: 'sistemler-ve-esitsizlikler',
    phase: 'before',
    section: 'Bölüm 3.3 — Problemler',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (3).jpeg',
    prompt: '5) Biri diğerinin on katı olan iki sayının farkı $81$ ise, sayılar kaçtır?',
    answer: '$90$ ve $9$',
    steps: [
      { title: 'Denklemi kur', detail: 'Küçük sayı $x$, büyük sayı $10x$. $10x - x = 81 \\implies 9x = 81 \\implies x = 9$.' },
      { title: 'Sayıları yaz', detail: 'Büyük sayı $10\\cdot 9 = 90$, küçük sayı $9$.' }
    ]
  },
  {
    id: 'se-08',
    topicId: 'sistemler-ve-esitsizlikler',
    phase: 'before',
    section: 'Bölüm 3.3 — Problemler',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (3).jpeg',
    prompt: '6) Farkı $3$ olan iki sayıdan birincisinin yedi katı ile ikincisinin dört katının toplamı $76$ ise, sayılar kaçtır?',
    answer: '$8$ ve $5$',
    steps: [
      { title: 'Sayıları tanımla', detail: 'Küçük sayı $x$, büyük sayı $x + 3$.' },
      { title: 'Denklemi kur ve çöz', detail: '$7(x + 3) + 4x = 76 \\implies 7x + 21 + 4x = 76 \\implies 11x = 55 \\implies x = 5$. Sayılar $8$ ve $5$’tir.' }
    ]
  },
  {
    id: 'se-09',
    topicId: 'sistemler-ve-esitsizlikler',
    phase: 'before',
    section: 'Bölüm 3.3 — Kesirli Sistem',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (3).jpeg',
    prompt: 'ü) $\\begin{cases} \\dfrac{1}{5}x + \\dfrac{1}{3}y = 2 \\\\ \\dfrac{2}{3}x - \\dfrac{4}{5}y = \\dfrac{14}{15} \\end{cases}$ denklem sistemini çözünüz.',
    answer: '$x = 5,\\ y = 3$',
    note: 'Defterde 5y = 15 elde edildikten sonra altına sehven y = 2 yazılmıştır; 15/5 = 3 olmalıdır.',
    steps: [
      { title: 'Paydalardan kurtul (15 ile çarp)', detail: '1. denklem: $3x + 5y = 30$.<br>2. denklem: $10x - 12y = 14$.' },
      { title: '$y$’yi yok et (1. denklemi 12, 2. denklemi 5 ile çarp)', detail: '$36x + 60y = 360$ ve $50x - 60y = 70$. Topla: $86x = 430 \\implies x = 5$.' },
      { title: '$y$’yi bul', detail: '$3(5) + 5y = 30 \\implies 15 + 5y = 30 \\implies 5y = 15 \\implies y = 3$.' }
    ]
  },
  // --- Bölüm 3.4 Eşitsizlikler ---
  {
    id: 'se-10',
    topicId: 'sistemler-ve-esitsizlikler',
    phase: 'before',
    section: 'Bölüm 3.4 (Sayfa 117–118) — Eşitsizlikler',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (5).jpeg',
    prompt: 'c) $6x + 5 \\ge -1$ (defterde $6x \\ge -6$) eşitsizliğinin çözüm aralığını bulunuz.',
    answer: '$x \\ge -1 \\implies [-1,\\ \\infty)$',
    note: 'Defterde ilk satırda -1’in eksisi silik görünmekle birlikte hemen altında 6x ≥ -6 ve [-1, ∞) olarak çözülmüştür.',
    steps: [
      { title: 'Sabiti karşıya at ve böl', detail: '$6x \\ge -1 - 5 \\implies 6x \\ge -6 \\implies x \\ge -1$.' },
      { title: 'Aralık gösterimi', detail: '$-1$ dahil olduğu için köşeli parantez: $[-1,\\ \\infty)$.' }
    ]
  },
  {
    id: 'se-11',
    topicId: 'sistemler-ve-esitsizlikler',
    phase: 'before',
    section: 'Bölüm 3.4 — Eşitsizlikler',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (5).jpeg',
    prompt: 'g) $\\dfrac{2x}{5} - \\dfrac{4x}{3} > 14$ eşitsizliğini çözünüz.',
    answer: '$x < -15 \\implies (-\\infty,\\ -15)$',
    note: 'Defterde x < -15 doğru bulunup sayı doğrusunda -15 işaretlenmiş, ancak en alt aralıkta eksi unutularak (-∞, 15) yazılmıştır; doğrusu (-∞, -15)’tir.',
    steps: [
      { title: 'Payda eşitle (15)', detail: '$6x - 20x > 14\\cdot 15 \\implies -14x > 14\\cdot 15$.' },
      { title: '$-14$’e böl (YÖN DEĞİŞTİR!)', detail: 'Negatif sayıya böldüğümüz için $>$ işareti $<$ olur: $x < -15$.' },
      { title: 'Aralık', detail: '$(-\\infty,\\ -15)$.' }
    ]
  },
  {
    id: 'se-12',
    topicId: 'sistemler-ve-esitsizlikler',
    phase: 'before',
    section: 'Bölüm 3.4 — Soru 2 (En Büyük Tam Sayı)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (5).jpeg',
    prompt: '2a) $\\dfrac{9x}{5} + 0{,}1 > \\dfrac{8x + 15}{2} - \\dfrac{6x - 1}{5}$ eşitsizliğinin en büyük tam sayı çözümünü bulunuz.',
    answer: '$-8$ ($x < -7{,}6$)',
    steps: [
      { title: 'Paydaları $10$’da eşitle ($0{,}1 = \\frac{1}{10}$)', detail: '$\\dfrac{18x + 1}{10} > \\dfrac{5(8x + 15) - 2(6x - 1)}{10}$.' },
      { title: 'Paydaları at ve dağıt', detail: '$18x + 1 > 40x + 75 - 12x + 2 \\implies 18x + 1 > 28x + 77$.' },
      { title: '$x$’i çöz', detail: '$-76 > 10x \\implies x < -7{,}6$. $-7{,}6$’dan küçük en büyük tam sayı $-8$’dir.' }
    ]
  },
  {
    id: 'se-13',
    topicId: 'sistemler-ve-esitsizlikler',
    phase: 'before',
    section: 'Bölüm 3.4 — Soru 4 (Eşitsizlik Sistemleri)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (5).jpeg',
    prompt: '4a) $\\begin{cases} 3x - 7 > 0 \\\\ 2x + 3 < 0 \\end{cases}$ eşitsizlik sisteminin çözüm kümesini bulunuz.',
    answer: '$\\text{Ç.K.} = \\emptyset$',
    steps: [
      { title: 'Her iki eşitsizliği ayrı çöz', detail: '1) $3x > 7 \\implies x > \\dfrac{7}{3}$.<br>2) $2x < -3 \\implies x < -\\dfrac{3}{2}$.' },
      { title: 'Kesişim al', detail: 'Aynı anda hem $7/3$’ten büyük hem $-3/2$’den küçük bir reel sayı yoktur. $\\text{Ç.K.} = \\emptyset$.' }
    ]
  },
  {
    id: 'se-14',
    topicId: 'sistemler-ve-esitsizlikler',
    phase: 'before',
    section: 'Bölüm 3.4 — Soru 4 (Eşitsizlik Sistemleri)',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (5).jpeg',
    prompt: '4b) $\\begin{cases} 4x - 3 < 2x + 5 \\\\ x + 3 > 6 - 2x \\end{cases}$ eşitsizlik sisteminin çözüm kümesini bulunuz.',
    answer: '$(1,\\ 4)$',
    note: 'Defterde Ç.K. = {1, 4} küme parantezi ile gösterilmiş; sayı doğrusunda içleri boş çizildiğinden açık aralık (1, 4) olmalıdır.',
    steps: [
      { title: 'İlk eşitsizliği çöz', detail: '$4x - 2x < 5 + 3 \\implies 2x < 8 \\implies x < 4$.' },
      { title: 'İkinci eşitsizliği çöz', detail: '$x + 2x > 6 - 3 \\implies 3x > 3 \\implies x > 1$.' },
      { title: 'Kesiştir', detail: '$1 < x < 4 \\implies (1,\\ 4)$.' }
    ]
  },
  {
    id: 'se-15',
    topicId: 'sistemler-ve-esitsizlikler',
    phase: 'before',
    section: 'Bölüm 3.4 — Soru 8',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (5).jpeg',
    prompt: '8a) $-17 < 5 - 3x < 11{,}6$ eşitsizliğini çözünüz.',
    answer: '$-2{,}2 < x < \\dfrac{22}{3} \\implies \\left(-2{,}2,\\ \\dfrac{22}{3}\\right)$',
    steps: [
      { title: 'Her taraftan $5$ çıkar', detail: '$-22 < -3x < 6{,}6$.' },
      { title: '$-3$’e böl ve yönleri çevir', detail: '$\\dfrac{22}{3} > x > -2{,}2$, yani $-2{,}2 < x < \\dfrac{22}{3}$.' }
    ]
  },
  {
    id: 'se-16',
    topicId: 'sistemler-ve-esitsizlikler',
    phase: 'before',
    section: 'Bölüm 3.4 — Soru 8',
    sourceImage: 'sınav öncesi/WhatsApp Image 2026-11-16 at 21.40.34 (5).jpeg',
    prompt: '8e) $-\\dfrac{1}{3} < \\dfrac{2}{3} - \\dfrac{5}{x} < \\dfrac{1}{4}$ eşitsizliğini çözünüz.',
    answer: '$5 < x < 12 \\implies (5,\\ 12)$',
    steps: [
      { title: 'Her taraftan $\\dfrac{2}{3}$ çıkar', detail: '$-1 < -\\dfrac{5}{x} < \\dfrac{1}{4} - \\dfrac{2}{3} = -\\dfrac{5}{12}$.' },
      { title: '$-1$ ile çarp (yön değişir!)', detail: '$\\dfrac{5}{12} < \\dfrac{5}{x} < 1$. Bu ifade $\\dfrac{5}{x}$ pozitif olduğu için $x > 0$ olmasını gerektirir.' },
      { title: 'Ters çevir (pozitif sayılarda yön değişir) veya $5$’e bölüp çöz', detail: '$\\dfrac{1}{12} < \\dfrac{1}{x} < \\dfrac{1}{5} \\implies 5 < x < 12$, yani $(5,\\ 12)$.' }
    ]
  }
);
