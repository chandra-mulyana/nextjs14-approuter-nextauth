import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Belakang from "@/app/components/ui/backend/Belakang";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function BackendPage() {
	const session = await getServerSession(authOptions);
	console.log("Isi Session Backend", session);
	if (!session || !session.user) {
		redirect("/");
	}

	return (
		<div>
			<Belakang />
		</div>
	);
}
