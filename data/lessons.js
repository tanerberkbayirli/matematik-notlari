window.MATH_LESSONS = {
  'taban-aritmetigi': {
    summary: 'Farklı sayı tabanlarında rakam kümelerini tanıma, 10’luk tabana ve 10’luk tabandan diğer tabanlara geçiş, tabanlar arası doğrudan olmayan dönüşümler ve dört işlem kuralları.',
    sections: [
      {
        title: '1. Sayı Tabanı ve Kullanılabilecek Rakamlar',
        body: `
          <p>Bir $n$ tabanında ($n \\ge 2$) yazılabilecek rakamlar kümesi $0$'dan $n-1$'e kadardır. <strong>Hiçbir basamakta tabanın kendisi veya daha büyük bir rakam yazılamaz!</strong></p>
          <div class="concept-grid">
            <div class="concept-card">
              <div class="concept-card-title">10'luk Sistem (Onluk)</div>
              <p>$\\{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\\}$</p>
            </div>
            <div class="concept-card">
              <div class="concept-card-title">5'lik Sistem</div>
              <p>$\\{0, 1, 2, 3, 4\\}$</p>
              <div class="example-line"><em>Örn:</em> $5$ rakamı yazılamaz; $4$'ten sonra $10_5$ gelir.</div>
            </div>
            <div class="concept-card">
              <div class="concept-card-title">3'lük Sistem</div>
              <p>$\\{0, 1, 2\\}$</p>
              <div class="example-line"><em>Sayılar:</em> $0, 1, 2, 10, 11, 12, 20, 21, 22, 100, \\dots$</div>
            </div>
            <div class="concept-card">
              <div class="concept-card-title">2'lik Sistem (İkilik)</div>
              <p>$\\{0, 1\\}$</p>
              <div class="example-line"><em>Sayılar:</em> $0, 1, 10, 11, 100, 101, 110, 111, \\dots$</div>
            </div>
          </div>
        `
      },
      {
        title: '2. Tabanlar Arası Geçiş (Çözümleme ve Sürekli Bölme)',
        body: `
          <div class="lesson-grid-2">
            <div class="rule-box">
              <h4>A) $n$ Tabanından $10$'luk Tabana Geçiş</h4>
              <p>Sağdan sola doğru basamakları $n^0, n^1, n^2, \\dots$ ile çarpıp toplarız:</p>
              <div class="formula-box">$$(abc)_n = a \\cdot n^2 + b \\cdot n^1 + c \\cdot n^0$$</div>
              <div class="example-line"><em>Örnek:</em> $(342)_5 = 3\\cdot 5^2 + 4\\cdot 5^1 + 2\\cdot 5^0 = 75 + 20 + 2 = 97_{10}$</div>
            </div>
            <div class="rule-box">
              <h4>B) $10$'luk Tabandan $n$ Tabanına Geçiş</h4>
              <p>Sayıyı bölüm $n$'den küçük olana kadar sürekli $n$'ye böleriz. <strong>Son bölümü ve kalanları sondan başa</strong> yazarız.</p>
              <div class="example-line"><em>Örnek:</em> $72_{10} \\to 72 \\div 7 = 10$ (kalan $2$), $10 \\div 7 = 1$ (kalan $3$) $\\implies (132)_7$</div>
            </div>
          </div>
          <div class="callout-tip">
            <strong>Altın Kural ($a$ tabanından $b$ tabanına geçiş):</strong> $(52)_6 = (?)_2$ veya $(1001)_2 = (?)_5$ gibi sorularda <strong>önce 10'luk tabana çevir</strong>, ardından çıkan onluk sayıyı hedef tabana bölerek dönüştür.
          </div>
        `
      },
      {
        title: '3. Taban Aritmetiğinde Toplama, Çıkarma ve Çarpma',
        body: `
          <div class="concept-stack">
            <div class="concept-card">
              <div class="concept-card-title">Toplama</div>
              <p>Alt alta rakamları topla. Toplam $T$, taban $n$'den büyük veya eşitse $T$'nin içinde kaç tane $n$ olduğunu bulup elde olarak sola aktar, kalanı aşağı yaz.</p>
              <div class="example-line"><em>Örnek (6'lık taban):</em> $5 + 5 + 5 = 15 = 2 \\cdot 6 + 3 \\implies 3$ yaz, <strong>elde var 2</strong>!</div>
            </div>
            <div class="concept-card">
              <div class="concept-card-title">Çıkarma</div>
              <p>Üstteki rakam alttakinden küçükse komşudan $1$ onluk değil, <strong>taban kadar ($n$ kadar)</strong> ödünç alınır.</p>
              <div class="example-line"><em>Örnek (6'lık taban):</em> Komşudan $6$ alınır; yan basamak $0$ ise bir soldan $6$ alınıp komşuya geçerken ortada $6 - 1 = 5$ kalır.</div>
            </div>
            <div class="concept-card">
              <div class="concept-card-title">Çarpma</div>
              <p>Normal çarpma yapılır; ancak her çarpım ve ara toplam taban $n$'ye bölünerek kalan yazılır, bölüm elde tutulur. Alt satırları toplarken de yine $n$ tabanı kuralı uygulanır ("5'lik tabanda 5 yazamam!").</p>
            </div>
          </div>
        `
      }
    ]
  },

  'rasyonel-sayilar': {
    summary: 'Kesir türleri arası dönüşüm, pay/payda eşitleyerek ve negatif sayılarda sıralama, işlem önceliği ve çok katmanlı parantezli kesir işlemleri.',
    sections: [
      {
        title: '1. Kesir Türleri ve Dönüşümler',
        body: `
          <div class="concept-stack">
            <div class="concept-card">
              <div class="concept-card-title">Bileşik Kesirden Tam Sayılıya</div>
              <p>Pay paydaya bölünür. Bölüm tam kısım, kalan ise yeni paydır.</p>
              <div class="formula-box">$$\\frac{50}{17} \\implies 50 = 2 \\cdot 17 + 16 \\implies 2\\frac{16}{17}$$</div>
            </div>
            <div class="concept-card">
              <div class="concept-card-title">Tam Sayılıdan Bileşiğe</div>
              <p>Tam kısım ile payda çarpılıp pay eklenir:</p>
              <div class="formula-box">$$a\\frac{b}{c} = a + \\frac{b}{c} = \\frac{a \\cdot c + b}{c}$$</div>
              <div class="example-line"><em>Örnek:</em> $10\\dfrac{3}{8} = \\dfrac{10 \\cdot 8 + 3}{8} = \\dfrac{83}{8}$</div>
            </div>
            <div class="concept-card">
              <div class="concept-card-title">Tam Kısımlı Toplama Kısayolu</div>
              <p>Tüm kesirleri bileşiğe çevirmek yerine tam kısımları kendi arasında, kesir kısımlarını kendi arasında toplayabilirsin:</p>
              <div class="formula-box">$$2\\frac{1}{3} + 4\\frac{2}{5} = (2 + 4) + \\left(\\frac{1}{3} + \\frac{2}{5}\\right)$$</div>
              <div class="mini-note"><strong>Dikkat:</strong> Çıkarma işleminde işaret hatası yapmamak için bileşik kesre çevirmek daha güvenlidir!</div>
            </div>
          </div>
        `
      },
      {
        title: '2. Rasyonel Sayılarda Sıralama Stratejileri',
        body: `
          <div class="concept-stack">
            <div class="concept-card">
              <div class="concept-card-title">1. Paydalar Eşitleniyorsa</div>
              <p>Payı büyük olan pozitif kesir daha büyüktür.</p>
            </div>
            <div class="concept-card">
              <div class="concept-card-title">2. Paylar Eşitlenebiliyorsa</div>
              <p>Pozitif kesirlerde paylar eşitlendiğinde <strong>paydası küçük olan kesir daha büyüktür</strong>!</p>
              <div class="formula-box">$$\\frac{12}{36} < \\frac{12}{30} < \\frac{12}{28} < \\frac{12}{27}$$</div>
            </div>
            <div class="concept-card">
              <div class="concept-card-title">3. Negatif Kesirler Varsa</div>
              <p>Önce işaretsiz (mutlak değerce) sırala, ardından işaretler negatif olduğu için <strong>sıralamayı tamamen ters çevir</strong>! Sayı doğrusu üzerinde $0$'dan sola gidildikçe değer küçülür.</p>
            </div>
          </div>
        `
      },
      {
        title: '3. İşlem Önceliği ve Bölme Kuralı',
        body: `
          <div class="callout-tip">
            <strong>İşlem Önceliği Sırası:</strong><br>
            1) İçten dışa doğru parantezler: $( \\dots ) \\to [ \\dots ]$<br>
            2) Çarpma ve Bölme (aynı önceliktedirler, <strong>soldan sağa</strong> sırayla yapılır!)<br>
            3) Toplama ve Çıkarma
          </div>
          <div class="concept-card">
            <div class="concept-card-title">Kesirlerde Bölme ($:$ veya $\\div$)</div>
            <p>Birinci kesir aynen yazılır, ikinci kesir <strong>ters çevrilip çarpılır</strong>:</p>
            <div class="formula-box">$$\\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c}$$</div>
            <div class="example-line"><strong>İpucu:</strong> Çarpma sırasında çapraz sadeleştirme yapmak büyük sayılarla boğuşmayı önler.</div>
          </div>
        `
      }
    ]
  },

  'ondalik-ve-uslu': {
    summary: 'Kesirleri ondalık/devirli sayıya çevirme, devirli ondalık sayıları rasyonel kesre dönüştürme formülü, onluk çözümleme ve üslü sayılarda tüm işaret/kuvvet kuralları.',
    sections: [
      {
        title: '1. Ondalık ve Devirli Ondalık Sayılar',
        body: `
          <div class="concept-stack">
            <div class="concept-card">
              <div class="concept-card-title">Kesri Ondalığa Çevirme</div>
              <p>Paydayı $10, 100, 1000$ yapmaya çalış; yapılamıyorsa payı paydaya böl (tekrarlayan blok devirli olur).</p>
              <div class="example-line"><em>Örnekler:</em> $\\dfrac{9}{25} = \\dfrac{36}{100} = 0{,}36$ &nbsp;·&nbsp; $12\\dfrac{3}{7} = 12{,}\\overline{428571}$</div>
            </div>
            <div class="concept-card">
              <div class="concept-card-title">Devirli Sayıyı Rasyonel Kesre Çevirme Formülü</div>
              <div class="formula-box">$$\\text{Sayı} = \\frac{\\text{Tamamı (virgülsüz)} - \\text{Devretmeyen kısım (virgülsüz)}}{\\text{Virgülden sonra: devreden kadar } 9,\\ \\text{devretmeyen kadar } 0}$$</div>
              <div class="mini-note"><strong>Dikkat:</strong> Payda yalnızca <strong>virgülden sonraki</strong> basamaklara göre yazılır! Örn: $10{,}\\overline{17} = \\dfrac{1017 - 10}{99} = \\dfrac{1007}{99}$.</div>
            </div>
            <div class="concept-card">
              <div class="concept-card-title">Onluk Çözümleme</div>
              <p>Virgülün solundaki basamaklar $10^0, 10^1, 10^2, \\dots$; sağındaki basamaklar ise $10^{-1}, 10^{-2}, 10^{-3}, \\dots$ ile çarpılır.</p>
              <div class="example-line"><strong>Not:</strong> Olmayan basamağın yerine $0$ yazılır!</div>
            </div>
          </div>
        `
      },
      {
        title: '2. Üslü Sayıların Temel Kuralları',
        body: `
          <div class="lesson-grid-2">
            <div class="rule-box">
              <h4>Üs Özellikleri</h4>
              <ul>
                <li>$a^0 = 1 \\ (a \\neq 0)$</li>
                <li>$a^{-n} = \\dfrac{1}{a^n}$ ve $\\left(\\dfrac{a}{b}\\right)^{-n} = \\left(\\dfrac{b}{a}\\right)^n$</li>
                <li>$a^m \\cdot a^n = a^{m+n}$ ve $\\dfrac{a^m}{a^n} = a^{m-n}$</li>
                <li>$(a^m)^n = a^{m\\cdot n}$</li>
                <li>$(a\\cdot b)^n = a^n \\cdot b^n$</li>
              </ul>
            </div>
            <div class="rule-box">
              <h4>İşaret Tuzakları (Çok Kritik!)</h4>
              <ul>
                <li>$(-2)^4 = +16$ (Parantez dışı çift üs artı yapar)</li>
                <li>$-2^4 = -16$ (Parantez yoksa eksi dışarıda kalır)</li>
                <li>$(-5^2)^2 = (-25)^2 = +625$ (Dikkat: $-5^2$ içeride $-25$'tir!)</li>
                <li>$(-2)^3 = -8$ (Tek üs eksiyi korur)</li>
              </ul>
            </div>
          </div>
          <div class="concept-grid">
            <div class="concept-card">
              <div class="concept-card-title">Ondalık Tabanları Kesre Çevir</div>
              <p>İşlemleri kolaylaştırmak için ondalık tabanları kesir olarak yazıp sadeleştir:</p>
              <div class="formula-box">$1{,}2 = \\dfrac{6}{5}, \\quad 1{,}5 = \\dfrac{3}{2}, \\quad 0{,}5 = \\dfrac{1}{2}, \\quad 0{,}1 = \\dfrac{1}{10}$</div>
            </div>
            <div class="concept-card">
              <div class="concept-card-title">Toplama / Çıkarmada Ortak Parantez</div>
              <p>$4\\cdot 3^5 + 7\\cdot 3^5 - 10\\cdot 3^5$ gibi ifadelerde daima <strong>en küçük üslü terimin</strong> ($3^5$ veya $5^6$) ortak parantezine al!</p>
            </div>
          </div>
        `
      }
    ]
  },

  'koklu-ve-tanim-kumesi': {
    summary: 'Köklü ifadeleri üslü biçime dönüştürme, kök derecelerini eşitleyerek sıralama ve çarpma, iç içe kökler, cebirsel ifadelerin tanım kümesi ve ortak çarpan parantezine alma.',
    sections: [
      {
        title: '1. Köklü Sayılar ve Üslü Dönüşüm',
        body: `
          <div class="concept-grid">
            <div class="concept-card">
              <div class="concept-card-title">Temel Dönüşüm</div>
              <p>Rasyonel üslerde önce tabanı asal çarpanlara ayır:</p>
              <div class="formula-box">$$\\sqrt[a]{x^b} = x^{b/a}$$</div>
              <div class="example-line"><em>Örnek:</em> $16^{3/4} = (2^4)^{3/4} = 2^3$</div>
            </div>
            <div class="concept-card">
              <div class="concept-card-title">Kök Derecesini Genişletme &amp; Sıralama</div>
              <p>Farklı dereceli kökleri karşılaştırmak veya çarpmak için dereceleri EKOK'ta birleştir:</p>
              <div class="formula-box">$$\\sqrt[n]{a^m} = \\sqrt[n\\cdot k]{a^{m\\cdot k}}$$</div>
              <div class="example-line"><em>Örn:</em> $2, 3, 6 \\to 6$'da; $2, 4, 8, 16 \\to 16$'da eşitlenir.</div>
            </div>
            <div class="concept-card">
              <div class="concept-card-title">Kök Dışındaki Sayıyı İçeri Alma</div>
              <p>Dışarıdaki sayının üssünü kök derecesiyle çarpıp içeri al:</p>
              <div class="formula-box">$$a\\sqrt[n]{b} = \\sqrt[n]{a^n \\cdot b}$$</div>
              <div class="example-line"><em>Örnek:</em> $2\\sqrt[4]{5} = \\sqrt[4]{2^4 \\cdot 5} = \\sqrt[4]{80}$</div>
            </div>
            <div class="concept-card">
              <div class="concept-card-title">İç İçe Kökler</div>
              <p>Her sayıyı kendi üzerindeki kök derecelerinin çarpımına bölerek üslü yaz veya tek kökte birleştir:</p>
              <div class="formula-box">$$\\sqrt[m]{a\\sqrt[n]{b}} = \\sqrt[m\\cdot n]{a^n \\cdot b}$$</div>
            </div>
          </div>
        `
      },
      {
        title: '2. Cebirsel İfadelerde Tanım Kümesi (T.K.)',
        body: `
          <p>Bir cebirsel ifadenin reel sayılarda ($\\mathbb{R}$) tanımlı olması için şu iki şarta bakılır:</p>
          <div class="concept-stack">
            <div class="concept-card">
              <div class="concept-card-title">1. Kesirli İfade (Payda)</div>
              <p>Payda sıfır olamaz! Paydayı $0$ yapan değerler reel sayılardan çıkarılır:</p>
              <div class="formula-box">$$\\text{T.K.} = \\mathbb{R} - \\{\\text{paydayı } 0 \\text{ yapan değerler}\\}$$</div>
              <div class="example-line"><em>Not:</em> Payda $x^2 + 1$ gibi hiçbir reel sayı için $0$ olmuyorsa $\\text{T.K.} = \\mathbb{R}$ olur.</div>
            </div>
            <div class="concept-card">
              <div class="concept-card-title">2. Çift Dereceli Kök ($\\sqrt{\\dots}, \\sqrt[4]{\\dots}$)</div>
              <p>Kökün içi sıfırdan büyük veya eşit olmalıdır ($\\text{İç} \\ge 0$). Kök paydadansa $\\text{İç} > 0$ şartı aranır.</p>
              <div class="example-line"><strong>Not:</strong> Tek dereceli köklerde ($\\sqrt[3]{\\dots}$) böyle bir kısıt yoktur!</div>
            </div>
          </div>
        `
      },
      {
        title: '3. Ortak Çarpan Parantezine Alma',
        body: `
          <div class="concept-card">
            <p>Tüm terimlerde ortak olan sayıların EBOB'unu, ortak değişkenlerin ise <strong>en küçük üssünü</strong> parantez dışına alırız. Kalanları bulmak için her terimi dışarı aldığımız ifadeye böleriz.</p>
            <div class="example-line"><em>Hatırlatma (üslü bölmede üs çıkarılır):</em> $x^1 : x^{1/2} = x^{1/2}$</div>
          </div>
        `
      }
    ]
  },

  'ozdeslik-carpanlara-ayirma': {
    summary: 'İki kare farkı, tam kareye tamamlama, küp toplamı/farkı, yüksek dereceli açılımlar, kesir sadeleştirme, köklü payda eşleniği ve çarpanlara ayırma.',
    sections: [
      {
        title: '1. Temel Özdeşlikler Tablosu',
        body: `
          <div class="lesson-grid-2">
            <div class="rule-box">
              <h4>Kare Özdeşlikleri</h4>
              <ul>
                <li>$(a + b)^2 = a^2 + 2ab + b^2$</li>
                <li>$(a - b)^2 = a^2 - 2ab + b^2$</li>
                <li>$a^2 - b^2 = (a - b)(a + b)$ (İki kare farkı!)</li>
                <li><em>Özel:</em> $a - b = (\\sqrt{a} - \\sqrt{b})(\\sqrt{a} + \\sqrt{b})$</li>
              </ul>
            </div>
            <div class="rule-box">
              <h4>Küp ve Yüksek Derece Özdeşlikleri</h4>
              <ul>
                <li>$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$</li>
                <li>$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$</li>
                <li>$(x - 1)(x^4 + x^3 + x^2 + x + 1) = x^5 - 1$</li>
                <li>$(x + 1)(x^3 - x^2 + x - 1) = x^4 - 1$</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: '2. Tam Kareye Tamamlama Tekniği',
        body: `
          <div class="concept-card">
            <p>$A^2 \\pm k\\cdot A + x$ ifadesinin tam kare olması için ortadaki terimin katsayısının ($k$'nın) <strong>yarısının karesi</strong> sabit terim olmalıdır:</p>
            <div class="formula-box">$$\\text{Sabit terim} = \\left(\\frac{\\text{Ortadaki terim}}{2 \\cdot \\text{Birinci terim}}\\right)^2$$</div>
            <div class="example-line"><em>Örnek:</em> $m^2 + \\dfrac{1}{2}mn + x \\implies$ Ortadaki katsayı $\\dfrac{1}{2}n$, yarısı $\\dfrac{n}{4}$, karesi $\\dfrac{n^2}{16}$.</div>
            <div class="mini-note"><strong>Dikkat:</strong> Eğer soru $-x$ biçimindeyse $-x = \\text{karesi}$ diyerek $x$'in işaretine mutlaka dikkat et!</div>
          </div>
        `
      },
      {
        title: '3. Paydayı Rasyonel Yapma (Eşlenik) & Üç Terimli Çarpanlara Ayırma',
        body: `
          <div class="concept-stack">
            <div class="concept-card">
              <div class="concept-card-title">Kareköklü Eşlenik</div>
              <p>$\\sqrt{a} + \\sqrt{b}$ ifadesinin eşleniği $\\sqrt{a} - \\sqrt{b}$'dir. Çarpımları $a - b$ olur.</p>
            </div>
            <div class="concept-card">
              <div class="concept-card-title">Küpköklü Eşlenik</div>
              <p>$\\sqrt[3]{a} - 1$ ifadesini rasyonel yapmak için küp farkı özdeşliğinden yararlanılır:</p>
              <div class="formula-box">$$(t - 1)(t^2 + t + 1) = t^3 - 1$$</div>
              <div class="example-line"><em>Örnek:</em> $t = \\sqrt[3]{2}$ ise eşlenik $\\sqrt[3]{4} + \\sqrt[3]{2} + 1$ olur!</div>
            </div>
            <div class="concept-card">
              <div class="concept-card-title">$ax^2 + bx + c$ Çarpanlara Ayırma</div>
              <p><strong>Çapraz çarpım yöntemi:</strong> $ax^2$ iki parçaya, $c$ iki parçaya ayrılır; çapraz çarpımların toplamı ortadaki $bx$'i veriyorsa düz olarak parantezlere yazılır.</p>
            </div>
          </div>
        `
      }
    ]
  },

  'polinomlar': {
    summary: 'Polinomlarda toplama, çıkarma, çarpma, uzun bölme algoritması (A = B·C + K) ve bölmeden kalan bulma (Kalan Teoremi).',
    sections: [
      {
        title: '1. Polinomlarda Dört İşlem',
        body: `
          <div class="concept-grid">
            <div class="concept-card">
              <div class="concept-card-title">Toplama / Çıkarma</div>
              <p>Aynı dereceli terimlerin katsayıları toplanır veya çıkarılır.</p>
              <div class="mini-note"><strong>Dikkat:</strong> Parantez önünde eksi varsa parantez içindeki <strong>tüm terimlerin işareti değişir</strong>!</div>
            </div>
            <div class="concept-card">
              <div class="concept-card-title">Çarpma</div>
              <p>İlk parantezdeki her terim, ikinci parantezdeki her terimle tek tek çarpılır (dağılma özelliği), sonra benzer terimler toplanır.</p>
            </div>
          </div>
        `
      },
      {
        title: '2. Polinomlarda Uzun Bölme ve $A = B \\cdot C + K$ Eşitliği',
        body: `
          <div class="callout-tip">
            <strong>Bölme Algoritması:</strong> $P(x)$ (Bölünen $A$), $Q(x)$'e (Bölen $B$) bölündüğünde Bölüm $B(x)$ ($C$) ve Kalan $K(x)$ ($K$) ise:
            <div class="formula-box">$$A = B \\cdot C + K \\qquad \\text{ve} \\qquad \\text{der}(K) < \\text{der}(B)$$</div>
          </div>
          <p><strong>Uzun Bölme Adımları:</strong></p>
          <ol>
            <li>Bölünen ve böleni büyük dereceden küçük dereceye sırala (eksik derece varsa boşluk bırak).</li>
            <li>Bölünenin en büyük dereceli terimini, bölenin en büyük dereceli terimine böl → Bölüme yaz.</li>
            <li>Bulduğun terimi bölenin <strong>tamamıyla</strong> çarp ve bölünenin altına yazıp <strong>işaret değiştirerek çıkar</strong>.</li>
            <li>Kalanın derecesi bölenin derecesinden küçük olana kadar tekrarla.</li>
          </ol>
          <div class="callout-tip">
            <strong>Kalan Bulma Kısayolu:</strong> $P(x)$ polinomunun $(x - a)$ ile bölümünden kalanı bulmak için $x - a = 0 \\implies x = a$ yazılır ve $P(a)$ hesaplanır.
          </div>
        `
      }
    ]
  },

  'denklemler-mutlak-problemler': {
    summary: 'Rasyonel ve parametreli 1. derece denklemler, kesir/yaş/geometri/ardışık sayı/akıntı problemleri, mutlak değerli denklemler ve 2. derece denklemler.',
    sections: [
      {
        title: '1. Birinci Dereceden ve Rasyonel Denklemler',
        body: `
          <div class="concept-stack">
            <div class="concept-card">
              <div class="concept-card-title">Çözüm Yöntemi</div>
              <p>Rasyonel denklemlerde paydalar eşitlenir veya içler-dışlar çarpımı yapılır.</p>
              <div class="mini-note"><strong>Çok Kritik Kontrol:</strong> Bulduğun $x$ değeri başlangıçtaki herhangi bir <strong>paydayı sıfır yapıyorsa</strong> o değer kök olarak kabul edilmez!</div>
            </div>
            <div class="concept-card">
              <div class="concept-card-title">Özel Çözüm Kümeleri</div>
              <p>Değişkenler yok olduğunda kalan sonuca göre karar verilir:</p>
              <div class="formula-box">
                $0 = 0$ (doğru eşitlik) $\\implies \\text{Ç.K.} = \\mathbb{R}$ (tanımsız yapanlar hariç)<br>
                $-1 = 6$ (çelişki) $\\implies \\text{Ç.K.} = \\emptyset$ (boş küme)
              </div>
            </div>
          </div>
        `
      },
      {
        title: '2. Mutlak Değerli Denklemler',
        body: `
          <div class="concept-stack">
            <div class="concept-card">
              <div class="concept-card-title">Sabit Sayıya Eşitlik: $|A| = c$</div>
              <p>$c \\ge 0$ ise iki durum çözülür; $c < 0$ ise çözüm yoktur!</p>
              <div class="formula-box">$$|A| = c \\implies A = c \\quad \\text{veya} \\quad A = -c$$</div>
            </div>
            <div class="concept-card">
              <div class="concept-card-title">Mutlak Değerlerin Toplamı Sıfırsa</div>
              <p>Her mutlak değer en az $0$ olabileceği için ikisi <strong>aynı anda</strong> sıfır olmak zorundadır:</p>
              <div class="formula-box">$$|A| + |B| = 0 \\iff A = 0 \\text{ ve } B = 0$$</div>
              <div class="example-line"><em>Not:</em> Farklı $x$ değerleri çıkıyorsa $\\text{Ç.K.} = \\emptyset$ olur.</div>
            </div>
            <div class="concept-card">
              <div class="concept-card-title">Değişkenli Eşitlik: $|f(x)| = g(x)$</div>
              <p>$f(x) = g(x)$ ve $f(x) = -g(x)$ denklemleri ayrı ayrı çözülür.</p>
              <div class="mini-note"><strong>Zorunlu Kontrol:</strong> Bulunan her $x$ değeri için mutlaka <strong>$g(x) \\ge 0$</strong> şartı kontrol edilmelidir! Sağlamayan kök elenir.</div>
            </div>
          </div>
        `
      },
      {
        title: '3. Problem Kurma Şablonları (Bölüm 3.2 Dahil)',
        body: `
          <div class="concept-grid">
            <div class="concept-card">
              <div class="concept-card-title">Kesrin Kesri</div>
              <p>Bir $x$ sayısının önce $\\frac{a}{b}$'si, sonra çıkan sonucun $\\frac{c}{d}$'si alınırsa kesirler çarpılır:</p>
              <div class="formula-box">$$x \\cdot \\frac{a}{b} \\cdot \\frac{c}{d}$$</div>
            </div>
            <div class="concept-card">
              <div class="concept-card-title">Kalanın Harcanması</div>
              <p>Her adımda bütünden harcanan kesri çıkarıp kalan oranları çarp:</p>
              <div class="formula-box">
                $\\dfrac{1}{5}$'i harcanırsa $\\dfrac{4}{5}$'i kalır.<br>
                Sonra kalanın $\\dfrac{3}{8}$'i harcanırsa kalanın $\\dfrac{5}{8}$'i kalır.
              </div>
            </div>
            <div class="concept-card">
              <div class="concept-card-title">Ardışık Sayılar</div>
              <p>En küçük sayıya $x$ denir; sayılar birer birer artarak yazılır:</p>
              <div class="formula-box">$$x,\\quad x + 1,\\quad x + 2,\\quad x + 3$$</div>
            </div>
            <div class="concept-card">
              <div class="concept-card-title">Dikdörtgen &amp; Pisagor</div>
              <p>Çevre $2(a + b)$ olduğundan yarı çevre $a + b$ olur. Kenarlar $x$ ve $(\\text{yarı çevre} - x)$ seçilir; köşegen $d$ ise:</p>
              <div class="formula-box">$$x^2 + (\\text{yarı çevre} - x)^2 = d^2$$</div>
            </div>
          </div>
          <div class="concept-card" style="margin-top: 12px;">
            <div class="concept-card-title">Nehir / Akıntı Problemi</div>
            <p>Durgun sudaki hız $x$, akıntı hızı $v_a$ ise akıntı yönünde gidiş hızı $(x + v_a)$, akıntıya karşı dönüş hızı $(x - v_a)$ olur.</p>
            <div class="formula-box">$$\\frac{\\text{Yol}}{x + v_a} + \\frac{\\text{Yol}}{x - v_a} = t_{\\text{toplam}}$$</div>
            <div class="mini-note"><strong>Birim Uyarısı:</strong> Dakikayı mutlaka saate çevir! Örn: $20\\text{ dk} = \\dfrac{20}{60} = \\dfrac{1}{3}\\text{ sa}$.</div>
          </div>
        `
      }
    ]
  },

  'sistemler-ve-esitsizlikler': {
    summary: 'İki bilinmeyenli doğrusal denklem sistemlerinde yok etme yöntemi, kesirli sistemler, eşitsizliklerde işaret değiştirme kuralı, aralık gösterimi ve bileşik/sistem eşitsizlikler.',
    sections: [
      {
        title: '1. İki Bilinmeyenli Denklem Sistemleri (Bölüm 3.3)',
        body: `
          <ol>
            <li><strong>Kesirden kurtul:</strong> Paydalar varsa tüm denklemi paydaların EKOK'u ile çarparak tam sayılı hale getir.</li>
            <li><strong>Yok Etme Yöntemi:</strong> Bilinmeyenlerden birinin ($x$ veya $y$) katsayılarını zıt işaretli ve eşit yapacak şekilde denklemleri uygun sayılarla çarp, taraf tarafa topla.</li>
            <li>Bulduğun ilk bilinmeyeni kolay olan denklemde yerine koyarak diğerini bul ve $(x, y)$ sıralı ikilisi olarak yaz.</li>
          </ol>
        `
      },
      {
        title: '2. Birinci Dereceden Eşitsizlikler ve Aralıklar (Bölüm 3.4)',
        body: `
          <div class="callout-warning">
            <strong>En Büyük Tuzak:</strong> Bir eşitsizliğin her iki tarafı <strong>negatif bir sayı ile çarpılır veya bölünürse</strong> eşitsizlik yön değiştirir ($<$ ise $>$, $\\ge$ ise $\\le$ olur)!
          </div>
          <svg viewBox="0 0 560 95" class="math-diagram is-wide" aria-label="Sayı doğrusu aralık gösterimi">
            <line x1="30" y1="45" x2="530" y2="45" stroke="currentColor" stroke-width="2" />
            <polygon points="530,45 520,40 520,50" fill="currentColor" />
            <polygon points="30,45 40,40 40,50" fill="currentColor" />
            <line x1="170" y1="45" x2="380" y2="45" stroke="#2563eb" stroke-width="5" />
            <circle cx="170" cy="45" r="6" fill="#2563eb" />
            <circle cx="380" cy="45" r="6" fill="#ffffff" stroke="#2563eb" stroke-width="3" />
            <text x="170" y="74" text-anchor="middle" font-size="13" fill="currentColor">a (dahil: [a )</text>
            <text x="380" y="74" text-anchor="middle" font-size="13" fill="currentColor">b (hariç: b) )</text>
            <text x="275" y="24" text-anchor="middle" font-size="13" font-weight="600" fill="#2563eb">a ≤ x &lt; b  ↔  [a, b)</text>
          </svg>
          <div class="concept-grid">
            <div class="concept-card">
              <div class="concept-card-title">Eşitsizlik Sistemi</div>
              <p>İki ayrı eşitsizliğin aynı anda sağlanması gerekiyorsa her ikisi ayrı ayrı çözülür ve çözümlerin <strong>kesişimi</strong> alınır. Kesişim yoksa $\\text{Ç.K.} = \\emptyset$.</p>
            </div>
            <div class="concept-card">
              <div class="concept-card-title">Üçlü (Çift Yönlü) Eşitsizlik</div>
              <p>$A < B < C$ ifadesinde ortada $x$ yalnız bırakılır; veya $A < B$ ve $B < C$ şeklinde iki eşitsizliğe bölünerek kesişim alınır.</p>
              <div class="mini-note"><strong>Dikkat:</strong> $\\dfrac{5}{x}$ gibi ifadelerde ters çevirirken pozitif/negatif duruma ve yön değiştirmeye dikkat et!</div>
            </div>
          </div>
        `
      }
    ]
  },

  'trigonometri': {
    summary: 'Sınav sonrası (23.11.2026) işlenen Trigonometri konusu: Dik üçgende 6 trigonometrik fonksiyon, birim çember, saat yönünün tersinde açı okuma, tanım aralığı, Bütün Sınıf Kara Tahtada Coştu işaret tablosu ve özdeşlik sadeleştirme.',
    sections: [
      {
        title: '1. Dik Üçgende 6 Trigonometrik Fonksiyon',
        body: `
          <div class="lesson-grid-2 is-center">
            <div>
              <svg viewBox="0 0 300 200" class="math-diagram" aria-label="Dik üçgende trigonometrik oranlar">
                <polygon points="88,160 250,160 88,35" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="2.5" />
                <polyline points="88,142 106,142 106,160" fill="none" stroke="currentColor" stroke-width="1.8" />
                <path d="M 215 160 A 35 35 0 0 1 222 139" fill="none" stroke="#dc2626" stroke-width="2" />
                <text x="202" y="149" font-size="14" font-weight="700" fill="#dc2626">x</text>
                <text x="80" y="102" text-anchor="end" font-size="13" font-weight="600" fill="currentColor">a (Karşı)</text>
                <text x="169" y="182" text-anchor="middle" font-size="13" font-weight="600" fill="currentColor">b (Komşu)</text>
                <text x="180" y="86" font-size="13" font-weight="600" fill="#2563eb">c (Hipotenüs)</text>
              </svg>
            </div>
            <div class="rule-box">
              <ul>
                <li>$\\sin x = \\dfrac{\\text{Karşı}}{\\text{Hipotenüs}} = \\dfrac{a}{c}$</li>
                <li>$\\cos x = \\dfrac{\\text{Komşu}}{\\text{Hipotenüs}} = \\dfrac{b}{c}$</li>
                <li>$\\tan x = \\dfrac{\\text{Karşı}}{\\text{Komşu}} = \\dfrac{a}{b} = \\dfrac{\\sin x}{\\cos x}$</li>
                <li>$\\cot x = \\dfrac{\\text{Komşu}}{\\text{Karşı}} = \\dfrac{b}{a} = \\dfrac{\\cos x}{\\sin x}$</li>
                <li>$\\sec x = \\dfrac{c}{b} = \\dfrac{1}{\\cos x}$</li>
                <li>$\\csc x = \\dfrac{c}{a} = \\dfrac{1}{\\sin x}$</li>
              </ul>
              <div class="example-line"><em>Not:</em> Bir oran verildiğinde ($0 < x < 90^\\circ$) hemen dik üçgen çiz, Pisagor ($a^2 + b^2 = c^2$) ile 3. kenarı bul ve diğer tüm oranları oku!</div>
            </div>
          </div>
        `
      },
      {
        title: '2. Birim Çember, Açı Yönü ve Değer Aralığı',
        body: `
          <div class="lesson-grid-2 is-center">
            <div>
              <svg viewBox="0 0 260 240" class="math-diagram" aria-label="Birim çember">
                <line x1="20" y1="120" x2="240" y2="120" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" />
                <line x1="130" y1="15" x2="130" y2="225" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" />
                <circle cx="130" cy="120" r="75" fill="none" stroke="#2563eb" stroke-width="2" />
                <line x1="130" y1="120" x2="183" y2="67" stroke="#0f766e" stroke-width="2.2" />
                <line x1="183" y1="67" x2="183" y2="120" stroke="#dc2626" stroke-dasharray="4 3" stroke-width="2" />
                <line x1="130" y1="120" x2="183" y2="120" stroke="#7c3aed" stroke-width="2.5" />
                <circle cx="183" cy="67" r="4" fill="#0f766e" />
                <text x="188" y="60" font-size="12" font-weight="700" fill="#0f766e">(cos x, sin x)</text>
                <text x="155" y="135" font-size="12" font-weight="600" fill="#7c3aed">cos x</text>
                <text x="188" y="98" font-size="12" font-weight="600" fill="#dc2626">sin x</text>
                <text x="148" y="108" font-size="12" font-weight="700" fill="currentColor">1</text>
                <text x="118" y="135" font-size="12" fill="currentColor">O</text>
                <text x="234" y="114" font-size="11" fill="currentColor">cos</text>
                <text x="136" y="25" font-size="11" fill="currentColor">sin</text>
              </svg>
            </div>
            <div>
              <ul>
                <li><strong>Birim Çember Denklemi:</strong> Merkezi $(0,0)$ orijin ve yarıçapı $r=1$ olan çemberdir. Üzerindeki her $(p, r)$ noktası <strong>$p^2 + r^2 = 1$</strong> eşitliğini sağlar!</li>
                <li><strong>Koordinat Anlamı:</strong> $x$ ekseni <strong>kosinüs</strong>, $y$ ekseni <strong>sinüs</strong> eksenidir. Açı bitim noktası $(\\cos x, \\sin x)$ olur.</li>
                <li><strong>Açı Okuma Kuralı:</strong> Şekilde başka bir eksenle yapılan açı verilse bile, daima $+x$ ekseninden başlayarak <strong>saat yönünün tersinde</strong> yapılan açıyı al!</li>
                <li><strong>Değer Aralığı:</strong> Daima $-1 \\le \\sin x \\le 1$ ve $-1 \\le \\cos x \\le 1$. Örneğin $\\sin x = \\frac{4}{3}$ gibi $1$'den büyük bir değer <strong>tanımsız/imkânsızdır</strong>, üçgen çizilemez!</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: '3. Bölgelere Göre İşaretler: "Bütün Sınıf Kara Tahtada Coştu"',
        body: `
          <div class="lesson-grid-2 is-center">
            <div>
              <svg viewBox="0 0 260 230" class="math-diagram" aria-label="Bölgelere göre işaretler">
                <line x1="20" y1="115" x2="240" y2="115" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" />
                <line x1="130" y1="15" x2="130" y2="215" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" />
                <circle cx="130" cy="115" r="75" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" />
                <text x="182" y="65" text-anchor="middle" font-size="13" font-weight="700" fill="#16a34a">1. BÖLGE</text>
                <text x="182" y="83" text-anchor="middle" font-size="12" fill="#16a34a">BÜTÜN (+)</text>
                <text x="78" y="65" text-anchor="middle" font-size="13" font-weight="700" fill="#2563eb">2. BÖLGE</text>
                <text x="78" y="83" text-anchor="middle" font-size="12" fill="#2563eb">SINIF (sin +)</text>
                <text x="78" y="155" text-anchor="middle" font-size="13" font-weight="700" fill="#d97706">3. BÖLGE</text>
                <text x="78" y="173" text-anchor="middle" font-size="12" fill="#d97706">KARA TAHTA</text>
                <text x="78" y="189" text-anchor="middle" font-size="11" fill="#d97706">(tan, cot +)</text>
                <text x="182" y="155" text-anchor="middle" font-size="13" font-weight="700" fill="#7c3aed">4. BÖLGE</text>
                <text x="182" y="173" text-anchor="middle" font-size="12" fill="#7c3aed">COŞTU (cos +)</text>
              </svg>
            </div>
            <div>
              <table class="mini-table">
                <thead>
                  <tr><th>Bölge</th><th>Açı Aralığı</th><th>sin</th><th>cos</th><th>tan</th><th>cot</th></tr>
                </thead>
                <tbody>
                  <tr><td>1. (Bütün)</td><td>$0^\\circ - 90^\\circ$</td><td>$+$</td><td>$+$</td><td>$+$</td><td>$+$</td></tr>
                  <tr><td>2. (Sınıf)</td><td>$90^\\circ - 180^\\circ$</td><td>$+$</td><td>$-$</td><td>$-$</td><td>$-$</td></tr>
                  <tr><td>3. (Kara Tahta)</td><td>$180^\\circ - 270^\\circ$</td><td>$-$</td><td>$-$</td><td>$+$</td><td>$+$</td></tr>
                  <tr><td>4. (Coştu)</td><td>$270^\\circ - 360^\\circ$</td><td>$-$</td><td>$+$</td><td>$-$</td><td>$-$</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        `
      },
      {
        title: '4. Temel Trigonometrik Özdeşlikler ve Sadeleştirme Stratejisi',
        body: `
          <div class="concept-stack">
            <div class="concept-grid">
              <div class="concept-card">
                <div class="concept-card-title">Pisagor Özdeşliği</div>
                <div class="formula-box">$$\\sin^2 x + \\cos^2 x = 1$$</div>
                <div class="example-line">$1 - \\cos^2 x = \\sin^2 x$ &nbsp;·&nbsp; $1 - \\sin^2 x = \\cos^2 x$</div>
              </div>
              <div class="concept-card">
                <div class="concept-card-title">Çarpım Özdeşliği</div>
                <div class="formula-box">$$\\tan x \\cdot \\cot x = 1$$</div>
                <div class="example-line">$\\tan x = \\dfrac{\\sin x}{\\cos x}$ &nbsp;·&nbsp; $\\cot x = \\dfrac{\\cos x}{\\sin x}$</div>
              </div>
            </div>
            <div class="callout-tip">
              <strong>Sadeleştirme Altın Kuralı:</strong> İfadede $\\tan x, \\cot x, \\sec x, \\csc x$ gördüğünde hepsini <strong>$\\sin x$ ve $\\cos x$ cinsinden yaz</strong>! Kesirli toplama varsa payda eşitle ve $(1 - \\sin^2 x) = (1 - \\sin x)(1 + \\sin x)$ gibi iki kare farkı açılımlarını kullan.
            </div>
          </div>
        `
      }
    ]
  }
};
