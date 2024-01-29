# P3-Challenge-2 (Next.js Project)

## W2D1

### Setup Project: Tema Aplikasi

Silahkan setup project aplikasi kamu:

- [X] Pilih tema sesuai kesepakatan bersama  instructor, tuliskan dalam README github kamu
- [X] Membuat layout aplikasi sesuai tema yang dipilih
- [X] Membuat initial data/seeder sesuai struktur data yang ditentukan (Kalian bisa check `db.json` sebagai referensi atau bisa digunakan sebagai data awal)
  - [X] Halaman auth
    - [X] Register
    - [X] Login
  - [X] Halaman home
    - [X] Komponen Banner
    - [X] Komponen Detail info Ecommerce
    - [X] Komponen Featured Product (50-10 product) + “see-all”
  - [X] Halaman product
    - [X] Komponen List Product
    - [X] Komponen Search
    - [] Komponen Pagination
    - [] Komponen Add to wishlist
  - [X] Halaman detail product
    - [X] Komponen Add to wishlist
  - [X] Halaman Wishlist
    - [X] Komponen list Wishlist (bisa menggunakan card yang sama dengan halaman list product)
    - [X] Komponen Remove Wishlist

## W2D2

### NEXT.js Intro

- [X] Setup NEXT.js project yang menggunakan typescript
- [X] Convert halaman-halaman dan komponen-komponen yang dibuat sebelumnya menjadi  pages dan components pada NEXT.js:
  - [X] Halaman register: /register
  - [X] Halaman login: /login
  - [X] Halaman home: /
    - [X] Komponen Banner
    - [] Komponen Detail info Ecommerce
    - [X] Komponen Featured Product (5-10 product) + “see-all”
  - [X] Halaman product: /products
    - [X] Komponen List Product
    - [X] Komponen Search
    - [] Komponent Pagination
    - [X] Komponen Add to wishlist
  - [X] Halaman detail product: /products/:slug
    - [X] Komponen Add to wishlist
  - [X] Halaman wishlist: /wishlist
    - [X] Komponen List Wishlist (bisa menggunakan card yang sama dengan halaman list product)
    - [] Komponen Remove Wishlist

> Catatan: Kamu bisa menambahkan halaman sesuai kebutuhan aplikasi kamu

### NEXT.js CSR & SSR

Implementasikan CSR dan SSR pada pada halaman-halaman dan komponen-komponen yang sudah dibuat dengan detail sebagai berikut:

- [X] Halaman register: /register
- [X] Halaman login: /login
- [ ] Halaman home: / (SSR)
- [ ] Halaman product: /products (CSR)
  - [ ] Komponen List Product (CSR)
  - [ ] Komponen Search (CSR)
  - [ ] Komponen Pagination (CSR)
  - [ ] Komponen Add to Wishlist (CSR)
- [ ] Halaman detail product: /products/:slug (SSR)
  - [ ] Komponen Add to Wishlist (CSR)
- [ ] Halaman wishlist: /wishlist
  - [ ] Komponen List Wishlist (CSR)
  - [ ] Komponen Remove Wishlist (CSR)

> Catatan: Disini belum perlu melakukan fetching atau request data

## W2D3

### NEXT.js Route Handler

- [X] Install MongoDB database pada komputer kamu atau menggunakan MongoDB Atlas
- [X] Lakukan wiring dan validasi terhadap halaman-halaman dan komponen-komponen yang sudah dibuat.
  - [X] Halaman register: /register
    - [X] username:string (validation: required, unique)
    - [X] email:string  (validation: required, unique, email format)
    - [X] password:string  (validation: required, length min 5)
  - [X] Halaman login: /login
    - [X] email:string  (validation: required, email format)
    - [X] password:string  (validation: required)
  - [X] Halaman home: / (SSR)
    - [X] Halaman product: /products
    - [X] Fitur List Product
    - [X] Fitur Search
    - [] Fitur Pagination
    - [] Untuk menerapakan infinite scroll salah satu package yang bisa digunakan: react-infinite-scroll
  - [] Fitur Add to Wishlist
    - [ ] userId: ObjectId  (validation: required)
    - [ ] productId: ObjectId  (validation: required)
  - [ ] Halaman detail product: /products/:slug
    - [ ] Fitur Add to Wishlist
      - [ ] userId: ObjectId  (validation: required)
      - [ ] productId: ObjectId  (validation: required)
  - [ ] Halaman Wishlist
    - [ ] Fitur List Wishlist
    - [ ] Fitur Remove to Wishlist
      - [ ] userId: ObjectId  (validation: required)
      - [ ] productId: ObjectId  (validation: required)

### NEXT.js Auth

Implementasikan autentikasi pada aplikasi NEXT.js yang sudah dibuat dengan detail sebagai berikut:

- [ ] Hanya user yang sudah login yang bisa menambahkan wishlist produk
- [ ] Hanya user yang sudah login yang bisa menghapus wishlist produk

## W2D4

### Deploy Project

Lakukan deployment pada project ini agar aplikasi bisa dilihat oleh user lain

- [ ] Deploy client

## Day 5 - 6

### Buddy Session

- [ ] Silahkan cek tugas/aplikasi yang kamu buat ke instruktur/buddy untuk memastikan aplikasi yang dibuat sudah sesuai requirement.
