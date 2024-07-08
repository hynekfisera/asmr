import { getUser } from "@/utils/auth.functions";
import React from "react";
import { redirect } from "next/navigation";
import Layout from "@/components/layout/Layout";
import Container from "@/components/layout/Container";
import LogoutButton from "../LogoutButton";
import Heading from "@/components/headings/Heading";
import SectionHeading from "@/components/headings/SectionHeading";

export default async function Account() {
  const user = await getUser();
  if (!user) redirect("/login");

  return (
    <Layout>
      <Container>
        <section>
          <Heading>Account</Heading>
          <div className="flex flex-col items-start gap-2">
            <div className="text-gray-300">
              Email: <strong className="font-medium text-purple-400">{user.email}</strong>
            </div>
            <LogoutButton />
          </div>
        </section>
        <section>
          <SectionHeading>Favourite triggers</SectionHeading>
        </section>
      </Container>
    </Layout>
  );
}
