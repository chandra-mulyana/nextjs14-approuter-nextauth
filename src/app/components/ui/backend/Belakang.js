"use client";
import React from "react";
import { signOut } from "next-auth/react";

export default function Belakang() {
	return (
		<div>
			Halaman Belakang
			<br />
			<button
				onClick={() =>
					signOut({ callbackUrl: "http://localhost:3000" })
				}
			>
				Sign out
			</button>
		</div>
	);
}
