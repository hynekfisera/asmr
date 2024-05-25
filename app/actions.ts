"use server";
import { revalidatePath } from "next/cache";

export default async function fetchNewTriggers() {
  revalidatePath("/[test]/test", "page");
}
