import React from "react";
import { getUser } from "@/utils/auth.functions";
import Image from "next/image";
import LogoutButton from "./LogoutButton";
import Link from "next/link";

export default async function Account() {
  const user = await getUser();
  if (!user)
    return (
      <Link href="/account" className="btn-sm btn-purple">
        Login
      </Link>
    );

  return (
    <div className="flex items-center gap-4">
      <Link href="/account" className="flex items-center gap-2 group">
        <Image src={user.picture} alt="Profile picture" width={48} height={48} className="w-8 h-8 rounded-full" />
        <div className="hidden sm:block text-sm text-gray-200 group-hover:text-gray-50 font-medium">My Account</div>
      </Link>
      <LogoutButton />
    </div>
  );
}
