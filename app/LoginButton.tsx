"use client";
import { login } from "@/utils/auth.functions";
import React from "react";

export default function LoginButton() {
  return (
    <button onClick={() => login()} className="btn-sm btn-purple">
      Login
    </button>
  );
}
