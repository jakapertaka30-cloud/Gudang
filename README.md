# WMS Mattress — Warehouse Management System

## Struktur
- `index.html` — shell aplikasi
- `login.html` — dapat ditambahkan saat Supabase Auth diaktifkan
- `css/` — UI, dashboard, responsive
- `js/app.js` — state, transaksi demo, validasi, dashboard, audit, export
- `supabase/schema.sql` — PostgreSQL schema untuk Supabase
- `assets/` — favicon

## Menjalankan demo
1. Extract ZIP.
2. Buka `index.html` melalui VS Code Live Server atau static hosting.
3. Demo berjalan dengan data lokal dan localStorage.
4. Semua perubahan transaksi demo tersimpan di browser.

## Supabase
1. Buat project Supabase.
2. Buka SQL Editor.
3. Jalankan `supabase/schema.sql`.
4. Buat user melalui Supabase Authentication.
5. Isi tabel `profiles` dan role.
6. Tambahkan Supabase JS client pada `js/auth.js`/`js/app.js`.
7. Gunakan RLS berbasis role. Jangan pernah menaruh service_role key di frontend.

## Business rules utama
- Receiving menambah stock.
- Issuing mengurangi stock dan tidak boleh melebihi available stock.
- Stock opname hanya menghitung selisih.
- Selisih menghasilkan adjustment request.
- Adjustment mengubah stock hanya setelah approval.
- Supervisor tidak boleh approve request miliknya sendiri.
- Semua perubahan stock memiliki stock movement.
- Material bertransaksi tidak dihapus permanen; gunakan Active/Inactive.
- Audit trail bersifat append-only secara aplikasi.

## Demo data
Material seed mengikuti kebutuhan WMS mattress: Kain Topper, Kain Bottom, Kain Side, Busa Density 17, Busa D18, Busa D25, Kawat 1.8/2.0/2.2 mm, Benang Hitam/Putih, dan Pita Webbing Hitam.

## Catatan
Versi ini sengaja dibuat sebagai MVP yang langsung dapat diuji tanpa kredensial Supabase. Lapisan database dan Auth sudah disiapkan melalui schema; koneksi production perlu diisi dengan project Supabase milik perusahaan.
