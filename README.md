# Nextjs14 + App Router + NextAuth

## Cara menjalankan:

Gunakan perintah

```
npm install
npm run dev
```

Nanti akan ada 2 halaman

-   Login
-   Halaman Backend (hanya bisa diakses setelah login)

Gunakan

```
user : admin
password : test

```

Saat masuk backend, nanti akan terlihat session nya :

```
Isi Session Backend {
  user: {
    email: 'Isi alamat email',
    nik: 'Isi NIK',
    comp_code: 'Isi Company Code',
    token: 'Isi Token'
  }
}
```

## Instalasi secara manual adalah sebagai berikut :

Jalankan perintah

### Install latest version Nextjs

```
npx create-next-app@latest
√ What is your project named? ... nextjs14-approuter-nextauth
√ Would you like to use TypeScript? ... No
√ Would you like to use ESLint? ...  Yes
√ Would you like to use Tailwind CSS? ... No
√ Would you like to use `src/` directory? ... Yes
√ Would you like to use App Router? (recommended) ...  Yes
√ Would you like to customize the default import alias (@/*)? ... No
```

Kemudian samakan isi folder src seperti repo ini

### Install NextAuth

```
npm install next-auth
```
