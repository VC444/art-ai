"use client";
import { useState, useEffect } from "react";
import {
  createClientForBrowser,
  SupabaseBrowserClientType,
} from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";

export function useSupabase() {
  const [supabase, setSupabase] = useState<SupabaseBrowserClientType | null>(
    null
  );

  useEffect(() => {
    async function initSupabase() {
      const client = await createClientForBrowser();
      setSupabase(client);
    }

    initSupabase();
  }, []);

  return supabase;
}

export function useUser() {
  const supabase = useSupabase();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function getUser() {
      if (!supabase) return;

      try {
        const { data } = await supabase.auth.getUser();
        setUser(data.user || null);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }

    getUser();
  }, [supabase]);

  return user;
}
