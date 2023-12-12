import { getServerSession } from "next-auth";
import SessionProvider from "./components/SessionProvider";

export const metadata = {
	title: "Nextjs14 App Router + NextAuth",
	description: "Contoh program Nextjs14 App Router + NextAuth",
};

export default async function RootLayout({ children }) {
	const session = await getServerSession();

	return (
		<html lang="en">
			<body>
				<SessionProvider session={session}>{children}</SessionProvider>
			</body>
		</html>
	);
}
