"use server";

import { redirect } from "next/navigation";
import { createClientForServer } from "./supabase/server";

const signInWithGoogle = async () => {
  const supabase = await createClientForServer();
  const callbackUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/callback`;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: callbackUrl,
    },
  });

  if (error) {
    console.error("Error signing in with Google:", error);
    return;
  }

  console.log(data);

  if (data.url) {
    redirect(data.url); // use the redirect API for your server framework
  }
};

export { signInWithGoogle };
