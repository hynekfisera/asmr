import { getUser } from "@/utils/auth.functions";
import React from "react";
import { redirect } from "next/navigation";
import Layout from "@/components/layout/Layout";
import LoginButton from "../LoginButton";
import Container from "@/components/layout/Container";

export default async function Account() {
  const user = await getUser();
  if (user) redirect("/account");

  return (
    <Layout>
      <Container>
        <div className="w-full mx-auto max-w-xs flex flex-col gap-4">
          <h1 className="text-center text-gray-200 text-xl sm:text-2xl lg:text-3xl">Login</h1>
          <p className="text-center text-gray-400 font-medium lg:text-lg">Save favourite triggers</p>
          <LoginButton />{" "}
        </div>
      </Container>
    </Layout>
  );
}
