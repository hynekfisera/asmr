"use server";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { getAppUrl } from "./app.functions";
import { prisma } from "@/lib/prisma/client";
import { User } from "@prisma/client";

export const login = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: getAppUrl() + "/auth/callback?next=/account",
    },
  });
  if (data.url) {
    redirect(data.url);
  }
};

export const logout = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
};

export const getUser = async (): Promise<User | null> => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (!data || error) return null;

  const supabaseUser = data.user;
  const email = supabaseUser.email!;
  const picture = supabaseUser.user_metadata.avatar_url!;
  const user = await prisma.user.upsert({
    where: { email },
    update: { picture },
    create: {
      email,
      picture,
    },
  });
  return user;
};
