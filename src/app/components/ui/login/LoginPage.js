"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
	const router = useRouter();

	async function submitHandler(event) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);

		const result = await signIn("credentials", {
			redirect: false,
			username: data.get("username"),
			password: data.get("password"),
		});

		if (!result.error) {
			router.replace("/backend");
		} else {
			alert("user atau password salah");
		}
	}

	return (
		<section>
			<h1>Login Page</h1>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor="username">User Name</label>
					<input type="text" name="username" required />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" required />
				</div>
				<div>
					<button>Login</button>
				</div>
			</form>
		</section>
	);
}
