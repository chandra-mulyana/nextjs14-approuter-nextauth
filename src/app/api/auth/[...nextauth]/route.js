import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
	providers: [
		CredentialsProvider({
			async authorize(credentials, req) {
				// sementara dibuat simple dulu
				if (
					credentials.username === "admin" &&
					credentials.password === "test"
				) {
					// variabel hasil ini yang akan menjadi isi session
					const hasil = {
						email: "Isi alamat email",
						nik: "Isi NIK",
						comp_code: "Isi Company Code",
						token: "Isi Token",
					};
					return hasil;
				}

				// Jika login nya gagal
				return null;
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			user && (token.user = user);
			return token;
		},
		async session({ session, token }) {
			session.user = token.user;
			return session;
		},
	},
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
