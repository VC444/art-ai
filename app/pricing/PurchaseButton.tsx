"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUser } from "@/components/hooks/useSupabase";
import { toast } from "sonner";

interface PurchaseButtonProps {
  credits: number;
}

export default function PurchaseButton({ credits }: PurchaseButtonProps) {
  const user = useUser();
  const [loading, setLoading] = useState(false);

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
