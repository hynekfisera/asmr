"use client";
import { login } from "@/utils/auth.functions";
import React from "react";

export default function LoginButton() {
  return (
    <button onClick={() => login()} className="btn btn-purple">
      Login with Google
    </button>
  );
}
