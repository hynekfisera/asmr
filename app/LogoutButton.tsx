"use client";
import { logout } from "@/utils/auth.functions";
import React from "react";

export default function LogoutButton() {
  return (
    <button onClick={() => logout()} className="btn-sm btn-purple-secondary">
      Logout
    </button>
  );
}
