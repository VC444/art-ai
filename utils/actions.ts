"use server";

import { redirect } from "next/navigation";
import { createClientForServer } from "./supabase/server";

const signInWithGoogle = async () => {
  const supabase = await createClientForServer();
  const callbackPrefix =
    process.env.NEXT_PUBLIC_SITE_URL ??
    `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}`;
  const callbackUrl = `${callbackPrefix}/auth/callback?next=/app`;

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

  if (data.url) {
    redirect(data.url); // use the redirect API for your server framework
  }
};

export { signInWithGoogle };
