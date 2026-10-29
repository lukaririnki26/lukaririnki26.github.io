# Portofolio

Situs portofolio statis (HTML, CSS, JavaScript tanpa framework dan tanpa build). Dipublikasikan lewat GitHub Pages.

## Struktur

```
index.html            Halaman utama (semua konten ada di sini)
404.html              Halaman tidak ditemukan
assets/css/style.css  Gaya, termasuk mode terang/gelap
assets/js/i18n.js     Teks bahasa Inggris
assets/js/main.js     Menu ponsel, tema, animasi, filter proyek, salin email
assets/img/           Favicon dan gambar
assets/cv.pdf         (tambahkan sendiri) CV untuk tautan "CV (PDF)"
vercel.json           Konfigurasi bila dideploy ke Vercel
robots.txt, sitemap.xml
```

## Yang perlu diganti

- `assets/cv.pdf` adalah CV yang sudah ada di situs lama. Ganti dengan versi terbaru bila perlu.
- Angka di ringkasan (5+ tahun, 1.400+ commit di luar merge, 9 layanan) dihitung dari CV dan commit GitHub per Oktober 2026.

## Bahasa (ID/EN) dan tema (terang/gelap)

- Tombol **ID/EN** dan tombol tema ada di menu. Pilihan pengunjung disimpan di browser. Kunjungan pertama
  mengikuti bahasa browser (Indonesia → ID, selain itu EN) dan tema sistem.
- Teks **Indonesia** = isi asli `index.html`. Teks **Inggris** ada di `assets/js/i18n.js` (objek `EN`).
- Setiap teks yang bisa diterjemahkan punya atribut `data-i18n="kunci"` (isi elemen) atau
  `data-i18n-attr="aria-label:kunci"` (atribut). Saat mengubah teks Indonesia, ubah juga kunci yang sama di `EN`.
- Kunci yang tidak ada di `EN` tetap tampil dalam bahasa Indonesia.

## Jalankan di lokal

```bash
python3 -m http.server 4321
```

lalu buka http://localhost:4321.

## Deploy

Situs ini dipublikasikan lewat GitHub Pages di https://lukaririnki26.github.io/ (repo `lukaririnki26/lukaririnki26.github.io`,
branch `master`, folder root). Salin isi folder ini ke repo tersebut lalu push; Pages membangun ulang dalam 1-2 menit.
File `.nojekyll` membuat Pages menyajikan file apa adanya.

`vercel.json` tetap disimpan bila suatu saat ingin pindah ke Vercel (Framework Preset: Other, tanpa build command).
