import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import LoginPage from "@/app/components/ui/login/LoginPage";

export default async function Login() {
	// Jika sudah login maka akan di redirect ke /backend
	const session = await getServerSession();
	if (session) {
		redirect("/backend");
	}

	return (
		<div>
			<LoginPage />
		</div>
	);
}
