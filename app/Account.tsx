import React from "react";
import LoginButton from "./LoginButton";
import { getUser } from "@/utils/auth.functions";
import Image from "next/image";
import LogoutButton from "./LogoutButton";

export default async function Account() {
  const user = await getUser();
  if (!user) return <LoginButton />;
  return (
    <div className="flex items-center gap-2">
      <Image src={user.picture} alt="Profile picture" width={48} height={48} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
      <div className="hidden sm:block text-gray-200">My Account</div>
      <LogoutButton />
    </div>
  );
}
