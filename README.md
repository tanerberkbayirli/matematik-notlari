# Matematik Notları — Vize Öncesi & Vize Sonrası

**Manisa Celal Bayar Üniversitesi (MCBÜ) — Büyük Veri Analistliği 1. Sınıf Matematik Dersi** için hazırlanmış interaktif ders notları, konu anlatımları, **çıkmış sorular** ve adım adım soru çözümleri arşivi.

🌐 **Canlı Web Sitesi:** [tanerberkbayirli.github.io/matematik-notlari](https://tanerberkbayirli.github.io/matematik-notlari/)

---

## İçerik Hakkında

Bu çalışma, MCBÜ Büyük Veri Analistliği programı 1. sınıf Matematik dersinde **vize öncesi** ve **vize sonrası** işlenen tüm konuları, derste çözülen örnekleri ve **vizeye yönelik çıkmış soruları** tek bir arayüzde toplar.

### Öne Çıkan Özellikler

- **Çıkmış Sorular ve Adım Adım Çözümler:** 9 ana başlık altında toplam **148 soru**; her soru için ayrı açılabilen **Cevap**, **Not** ve **Adım Adım Çözüm** kartları.
- **Sade Konu Anlatımları:** Formül kutuları, dikkat edilmesi gereken tuzaklar ve SVG matematik diyagramları (sayı doğrusu, dik üçgen, birim çember, bölge işaret tablosu).
- **Orijinal Defter Fotoğrafları:** Her konunun sonunda ilgili el yazısı defter sayfalarını (`vize öncesi/` ve `vize sonrası/`) büyüterek inceleme imkânı.
- **KaTeX Matematik Dizgisi:** Kesirler, kökler, üslü ifadeler ve trigonometrik özdeşliklerin tarayıcıda net ve okunaklı gösterimi.
- **Anlık Arama & Açık/Koyu Tema:** Soru metinleri, konu başlıkları ve çözüm adımları içinde anında arama; tarayıcıda kaydedilen açık/koyu tema desteği.

---

## Kapsanan Konular (148 Soru)

| # | Dönem | Konu | Soru Sayısı | Kapsam |
|---:|---|---|---:|---|
| 01 | Vize Öncesi | Taban Aritmetiği | 17 | Sayı sistemleri, taban dönüşümleri ve dört işlem |
| 02 | Vize Öncesi | Rasyonel Sayılar | 11 | İşlem önceliği, kesir sıralama ve çok adımlı işlemler |
| 03 | Vize Öncesi | Ondalık, Devirli & Üslü Sayılar | 25 | Devirli kesirler, onluk çözümleme ve üslü ifadeler |
| 04 | Vize Öncesi | Köklü Sayılar & Tanım Kümesi | 17 | Üslü-köklü dönüşümler, iç içe kökler ve cebirsel tanım kümeleri |
| 05 | Vize Öncesi | Özdeşlikler & Çarpanlara Ayırma | 24 | Tam kareye tamamlama, sadeleştirme, eşlenik ve pratik hesap |
| 06 | Vize Öncesi | Polinomlar & Polinomda Bölme | 13 | Bölüm 2.5 — Toplama, çarpma, uzun bölme ve kalan bulma |
| 07 | Vize Öncesi | Denklemler, Mutlak Değer & Problemler | 13 | 1. ve 2. derece denklemler, mutlak değer ve Bölüm 3.2 problemleri |
| 08 | Vize Öncesi | Denklem Sistemleri & Eşitsizlikler | 16 | Bölüm 3.3 iki bilinmeyenli sistemler ve Bölüm 3.4 eşitsizlikler |
| 09 | Vize Sonrası | Trigonometri | 12 | Dik üçgen, birim çember, bölge işaretleri ve özdeşlikler |

---

## Dosya Yapısı

```text
├── index.html                  # Ana sayfa ve KaTeX / font bağlantıları
├── styles.css                  # Açık/koyu tema, kart düzeni ve animasyonlar
├── app.js                      # Navigasyon, arama, adım açma/kapama ve modal mantığı
├── data/
│   ├── topics-meta.js          # Konu başlıkları, dönem etiketleri ve defter görsel yolları
│   ├── lessons.js              # Konu anlatımı bölümleri ve SVG diyagramlar
│   ├── questions-before-1.js   # Vize öncesi sorular (Bölüm 1)
│   ├── questions-before-2.js   # Vize öncesi sorular (Bölüm 2)
│   └── questions-after.js      # Vize sonrası sorular (Trigonometri)
├── vize öncesi/                # Vize öncesi defter fotoğrafları
└── vize sonrası/               # Vize sonrası defter fotoğrafları
```

## Yerelde Çalıştırma

Proje tamamen statik HTML/CSS/JS dosyalarından oluşur; kurulum gerektirmez:

1. `index.html` dosyasını doğrudan tarayıcıda açabilirsin, **veya**
2. Basit bir yerel sunucu ile başlatabilirsin:
   ```bash
   python -m http.server 8000
   ```
   Ardından tarayıcıda `http://localhost:8000` adresine git.
