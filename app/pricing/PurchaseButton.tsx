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
    if (!supabase || !user?.id) {
      throw new Error("Supabase client or user ID not available");
    }

    setLoading(true);

    try {
      const { error } = await supabase.from("credit_balances").upsert({
        user_id: user.id,
        credits: creditBalance + credits,
      });

      if (error) {
        throw error;
      }

      await queryClient.invalidateQueries(["credit-balance", user?.id]);
      toast.success(`${credits} credits added to your account!`);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        className="w-full"
        variant="default"
        onClick={handlePurchase}
        disabled={loading}
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
    </>
  );
}
