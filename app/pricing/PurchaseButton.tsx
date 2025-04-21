"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSupabase, useUser } from "@/components/hooks/useSupabase";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

interface PurchaseButtonProps {
  credits: number;
}

export default function PurchaseButton({ credits }: PurchaseButtonProps) {
  const supabase = useSupabase();
  const user = useUser();
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);

  const { data: creditBalance, error } = useQuery({
    queryKey: ["credit-balance", user?.id],
    queryFn: async () => {
      const creditsResp = await supabase
        ?.from("credit_balances")
        .select("credits")
        .eq("user_id", user?.id)
        .single();

      return creditsResp?.data?.credits ?? 0;
    },
    enabled: !!user?.id && !!supabase,
  });

  if (error) throw error;

  const handlePurchase = async () => {
    if (!user?.id) return;

    setLoading(true);

    try {
      const res = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ credits, userId: user.id }),
      });
      const { url } = await res.json();
      window.location.href = url;
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      className="w-full"
      variant="default"
      disabled={loading}
      onClick={handlePurchase}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        <>Buy {credits} Credits</>
      )}
    </Button>
  );
}
