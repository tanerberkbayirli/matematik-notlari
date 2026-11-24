window.MATH_QUESTIONS = window.MATH_QUESTIONS || [];

window.MATH_QUESTIONS.push(
  // =========================================================
  // 9. TRİGONOMETRİ — SINAV SONRASI (23.11.2026)
  // =========================================================
  {
    id: 'tr-01',
    topicId: 'trigonometri',
    phase: 'after',
    section: 'Dik Üçgende Trigonometrik Oranlar',
    sourceImage: 'sınrav sonrası/WhatsApp Image 2026-11-23 at 12.38.38.jpeg',
    prompt: 'Örnek 1: $0 < x < 90^\\circ$ ve $\\sin x = \\dfrac{12}{13}$ ise $\\cos x$, $\\tan x$, $\\cot x$, $\\sec x$ ve $\\csc x$ değerlerini bulunuz.',
    answer: '$\\cos x = \\dfrac{5}{13},\\ \\tan x = \\dfrac{12}{5},\\ \\cot x = \\dfrac{5}{12},\\ \\sec x = \\dfrac{13}{5},\\ \\csc x = \\dfrac{13}{12}$',
    steps: [
      { title: 'Dik üçgeni çiz ve komşu kenarı bul', detail: '$\\sin x = \\dfrac{\\text{Karşı}}{\\text{Hipotenüs}} = \\dfrac{12}{13}$. 5-12-13 özel dik üçgeninden (veya $5^2 + 12^2 = 13^2$) komşu dik kenar $5$ bulunur.' },
      { title: 'Diğer 5 oranı yaz', detail: '• $\\cos x = \\dfrac{\\text{Komşu}}{\\text{Hipotenüs}} = \\dfrac{5}{13}$<br>• $\\tan x = \\dfrac{\\text{Karşı}}{\\text{Komşu}} = \\dfrac{12}{5}$<br>• $\\cot x = \\dfrac{\\text{Komşu}}{\\text{Karşı}} = \\dfrac{5}{12}$<br>• $\\sec x = \\dfrac{1}{\\cos x} = \\dfrac{13}{5}$<br>• $\\csc x = \\dfrac{1}{\\sin x} = \\dfrac{13}{12}$' }
    ]
  },
  {
    id: 'tr-02',
    topicId: 'trigonometri',
    phase: 'after',
    section: 'Birim Çember',
    sourceImage: 'sınrav sonrası/WhatsApp Image 2026-11-23 at 12.38.38.jpeg',
    prompt: 'Örnek 2: Aşağıdaki noktalardan hangileri birim çember üzerindedir?<br>$A(0,\\ 1),\\quad B\\left(\\dfrac{1}{\\sqrt{2}},\\ -\\dfrac{1}{\\sqrt{2}}\\right),\\quad C\\left(\\dfrac{3}{4},\\ \\dfrac{\\sqrt{7}}{4}\\right)$',
    answer: '$A$, $B$ ve $C$ noktalarının <strong>üçü de</strong> birim çember üzerindedir.',
    steps: [
      { title: 'Birim çember şartı ($x^2 + y^2 = 1$)', detail: 'Bir $(p, r)$ noktasının birim çember üzerinde olması için $p^2 + r^2 = 1$ sağlanmalıdır.' },
      { title: '$A(0, 1)$ kontrolü', detail: '$0^2 + 1^2 = 0 + 1 = 1$ ✓ (Üzerindedir).' },
      { title: '$B\\left(\\frac{1}{\\sqrt{2}}, -\\frac{1}{\\sqrt{2}}\\right)$ kontrolü', detail: '$\\left(\\dfrac{1}{\\sqrt{2}}\\right)^2 + \\left(-\\dfrac{1}{\\sqrt{2}}\\right)^2 = \\dfrac{1}{2} + \\dfrac{1}{2} = 1$ ✓ (Üzerindedir).' },
      { title: '$C\\left(\\frac{3}{4}, \\frac{\\sqrt{7}}{4}\\right)$ kontrolü', detail: '$\\left(\\dfrac{3}{4}\\right)^2 + \\left(\\dfrac{\\sqrt{7}}{4}\\right)^2 = \\dfrac{9}{16} + \\dfrac{7}{16} = \\dfrac{16}{16} = 1$ ✓ (Üzerindedir).' }
    ]
  },
  {
    id: 'tr-03',
    topicId: 'trigonometri',
    phase: 'after',
    section: 'Birim Çemberde Açı Yönü',
    sourceImage: 'sınrav sonrası/WhatsApp Image 2026-11-23 at 12.38.38 (2).jpeg',
    prompt: 'Örnek 3: Birim çemberde $2.$ bölgede $-x$ ekseniyle $50^\\circ$ (veya $+y$ ekseniyle $40^\\circ$) açı yapan bitim noktasının koordinatlarını bulunuz.',
    answer: '$(\\cos 130^\\circ,\\ \\sin 130^\\circ)$',
    steps: [
      { title: 'Saat yönünün tersinde açıyı hesapla', detail: 'Defter notu: <em>"Verilen açıya göre değil de saat yönünün tersinde yaptığı açıyı al!"</em> $+x$ ekseninden saat yönünün tersine gidildiğinde $180^\\circ - 50^\\circ = 130^\\circ$ (veya $90^\\circ + 40^\\circ = 130^\\circ$) olur.' },
      { title: 'Koordinatı yaz', detail: 'Noktanın koordinatları $(\\cos 130^\\circ,\\ \\sin 130^\\circ)$ olarak yazılır.' }
    ]
  },
  {
    id: 'tr-04',
    topicId: 'trigonometri',
    phase: 'after',
    section: 'Tanım Aralığı Kuralı',
    sourceImage: 'sınrav sonrası/WhatsApp Image 2026-11-23 at 12.38.38 (2).jpeg',
    prompt: 'Not Sorusu: $\\sin x = \\dfrac{4}{3}$ verildiğinde $\\cos x = ?$ ve $\\tan x = ?$ değerleri bulunabilir mi? Açıklayınız.',
    answer: '<strong>Bulunamaz!</strong> (Çünkü $-1 \\le \\sin x \\le 1$ olmalıdır.)',
    steps: [
      { title: 'Değer aralığı kuralı', detail: 'Her reel $x$ açısı için $-1 \\le \\sin x \\le 1$ ve $-1 \\le \\cos x \\le 1$ geçerlidir.' },
      { title: 'Üçgen yorumu', detail: '$\\sin x = \\dfrac{4}{3} > 1$ olması dik üçgende karşı dik kenarın ($4$) hipotenüsten ($3$) büyük olması anlamına gelir ki bu imkânsızdır. Kural bu durumu engeller.' }
    ]
  },
  {
    id: 'tr-05',
    topicId: 'trigonometri',
    phase: 'after',
    section: 'Bölge İşaretleri — Sinüs',
    sourceImage: 'sınrav sonrası/WhatsApp Image 2026-11-23 at 12.38.38 (2).jpeg',
    prompt: '$\\sin 10^\\circ$, $\\sin 120^\\circ$, $\\sin 250^\\circ$ ve $\\sin 310^\\circ$ değerlerinin işaretlerini bulunuz.',
    answer: '$\\sin 10^\\circ (+),\\ \\sin 120^\\circ (+),\\ \\sin 250^\\circ (-),\\ \\sin 310^\\circ (-)$',
    steps: [
      { title: 'Açıları bölgelere yerleştir', detail: '$10^\\circ \\to 1.\\text{ Bölge}$, $120^\\circ \\to 2.\\text{ Bölge}$, $250^\\circ \\to 3.\\text{ Bölge}$, $310^\\circ \\to 4.\\text{ Bölge}$.' },
      { title: 'Sinüs işaretlerini oku ($y$ ekseni)', detail: '1. ve 2. bölgede $y > 0$ olduğundan $\\sin 10^\\circ (+)$ ve $\\sin 120^\\circ (+)$; 3. ve 4. bölgede $y < 0$ olduğundan $\\sin 250^\\circ (-)$ ve $\\sin 310^\\circ (-)$.' }
    ]
  },
  {
    id: 'tr-06',
    topicId: 'trigonometri',
    phase: 'after',
    section: 'Bölge İşaretleri — Kosinüs',
    sourceImage: 'sınrav sonrası/WhatsApp Image 2026-11-23 at 12.38.38 (2).jpeg',
    prompt: '$\\cos 10^\\circ$, $\\cos 120^\\circ$, $\\cos 250^\\circ$ ve $\\cos 310^\\circ$ değerlerinin işaretlerini bulunuz.',
    answer: '$\\cos 10^\\circ (+),\\ \\cos 120^\\circ (-),\\ \\cos 250^\\circ (-),\\ \\cos 310^\\circ (+)$',
    steps: [
      { title: 'Kosinüs işaretlerini oku ($x$ ekseni)', detail: '1. ve 4. bölgede $x > 0$ olduğu için $\\cos 10^\\circ (+)$ ve $\\cos 310^\\circ (+)$; 2. ve 3. bölgede $x < 0$ olduğu için $\\cos 120^\\circ (-)$ ve $\\cos 250^\\circ (-)$.' }
    ]
  },
  {
    id: 'tr-07',
    topicId: 'trigonometri',
    phase: 'after',
    section: 'Bölge İşaretleri — Tanjant & Kotanjant',
    sourceImage: 'sınrav sonrası/WhatsApp Image 2026-11-23 at 12.38.38 (2).jpeg',
    prompt: '$\\tan 10^\\circ,\\ \\tan 120^\\circ,\\ \\tan 250^\\circ,\\ \\tan 310^\\circ$ ve $\\cot 10^\\circ,\\ \\cot 120^\\circ,\\ \\cot 250^\\circ,\\ \\cot 310^\\circ$ değerlerinin işaretlerini bulunuz.',
    answer: '$10^\\circ (+),\\ 120^\\circ (-),\\ 250^\\circ (+),\\ 310^\\circ (-)$ (hem $\\tan$ hem $\\cot$ için)',
    steps: [
      { title: '"Bütün Sınıf Kara Tahtada Coştu" kuralını uygula', detail: '• 1. Bölge ($10^\\circ$): $\\sin/\\cos = +/+ = (+)$<br>• 2. Bölge ($120^\\circ$): $+/- = (-)$<br>• 3. Bölge ($250^\\circ$): $-/- = (+)$ (Kara Tahtada $\\tan$ ve $\\cot$ artı!)<br>• 4. Bölge ($310^\\circ$): $-/+ = (-)$<br>$\\cot x = \\frac{1}{\\tan x}$ olduğu için aynı işaretlere sahiptir.' }
    ]
  },
  // --- Trigonometrik Özdeşlikler ---
  {
    id: 'tr-08',
    topicId: 'trigonometri',
    phase: 'after',
    section: 'Özdeşlikler (a–f)',
    sourceImage: 'sınrav sonrası/WhatsApp Image 2026-11-23 at 12.38.38 (1).jpeg',
    prompt: 'a) $\\dfrac{\\tan x}{\\sec x}$ ifadesini en sade şekline getiriniz.',
    answer: '$\\sin x$',
    steps: [
      { title: '$\\sin x$ ve $\\cos x$ cinsinden yaz', detail: '$\\tan x = \\dfrac{\\sin x}{\\cos x}$ ve $\\sec x = \\dfrac{1}{\\cos x}$.' },
      { title: 'Ters çevirip çarp', detail: '$\\dfrac{\\sin x}{\\cos x} \\cdot \\dfrac{\\cos x}{1} = \\sin x$.' }
    ]
  },
  {
    id: 'tr-09',
    topicId: 'trigonometri',
    phase: 'after',
    section: 'Özdeşlikler (a–f)',
    sourceImage: 'sınrav sonrası/WhatsApp Image 2026-11-23 at 12.38.38 (1).jpeg',
    prompt: 'b) $\\dfrac{1 - \\cos^2 x}{\\sin x}$ ifadesini sadeleştiriniz.',
    answer: '$\\sin x$',
    steps: [
      { title: '$1 = \\sin^2 x + \\cos^2 x$ özdeşliğini yaz', detail: '$\\dfrac{\\sin^2 x + \\cos^2 x - \\cos^2 x}{\\sin x} = \\dfrac{\\sin^2 x}{\\sin x}$.' },
      { title: 'Sadeleştir', detail: '$\\dfrac{\\sin^2 x}{\\sin x} = \\sin x$.' }
    ]
  },
  {
    id: 'tr-10',
    topicId: 'trigonometri',
    phase: 'after',
    section: 'Özdeşlikler (a–f)',
    sourceImage: 'sınrav sonrası/WhatsApp Image 2026-11-23 at 12.38.38 (1).jpeg',
    prompt: 'c) $\\dfrac{\\cos^2 x}{1 - \\sin x} - \\sin x$ ifadesini sadeleştiriniz.',
    answer: '$1$',
    steps: [
      { title: '$\\cos^2 x = 1 - \\sin^2 x$ yaz', detail: '$\\dfrac{1 - \\sin^2 x}{1 - \\sin x} - \\sin x$.' },
      { title: 'İki kare farkıyla çarpanlarına ayır', detail: '$\\dfrac{(1 - \\sin x)(1 + \\sin x)}{1 - \\sin x} - \\sin x$.' },
      { title: 'Sadeleştir', detail: '$(1 + \\sin x) - \\sin x = 1$.' }
    ]
  },
  {
    id: 'tr-11',
    topicId: 'trigonometri',
    phase: 'after',
    section: 'Özdeşlikler (a–f)',
    sourceImage: 'sınrav sonrası/WhatsApp Image 2026-11-23 at 12.38.38 (1).jpeg',
    prompt: 'd) $(1 + \\tan^2 x)(1 - \\sin^2 x)$ çarpımının sonucunu bulunuz.',
    answer: '$1$',
    steps: [
      { title: 'Özdeşlikleri dönüştür', detail: '$1 + \\tan^2 x = 1 + \\dfrac{\\sin^2 x}{\\cos^2 x} = \\dfrac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\dfrac{1}{\\cos^2 x}$.<br>Ayrıca $1 - \\sin^2 x = \\cos^2 x$.' },
      { title: 'Çarp ve sadeleştir', detail: '$\\dfrac{1}{\\cos^2 x} \\cdot \\dfrac{\\cos^2 x}{1} = 1$.' }
    ]
  },
  {
    id: 'tr-12',
    topicId: 'trigonometri',
    phase: 'after',
    section: 'Özdeşlikler (a–f)',
    sourceImage: 'sınrav sonrası/WhatsApp Image 2026-11-23 at 12.38.38 (1).jpeg',
    prompt: 'f) $\\dfrac{1 + \\cos x}{\\sin x} + \\dfrac{\\sin x}{1 + \\cos x}$ işlemini en sade haline getiriniz.',
    answer: '$2\\csc x$ ($= \\dfrac{2}{\\sin x}$)',
    steps: [
      { title: 'Payda eşitle', detail: 'İlk kesri $(1 + \\cos x)$ ile, ikinci kesri $\\sin x$ ile genişlet:<br>$\\dfrac{(1 + \\cos x)^2 + \\sin^2 x}{\\sin x(1 + \\cos x)}$' },
      { title: 'Payı aç ve $\\cos^2 x + \\sin^2 x = 1$ kullan', detail: '$\\dfrac{1 + 2\\cos x + \\cos^2 x + \\sin^2 x}{\\sin x(1 + \\cos x)} = \\dfrac{1 + 2\\cos x + 1}{\\sin x(1 + \\cos x)} = \\dfrac{2 + 2\\cos x}{\\sin x(1 + \\cos x)}$.' },
      { title: '2 parantezine alıp sadeleştir', detail: '$\\dfrac{2(1 + \\cos x)}{\\sin x(1 + \\cos x)} = \\dfrac{2}{\\sin x} = 2\\csc x$.' }
    ]
  }
);
