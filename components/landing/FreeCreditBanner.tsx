import { Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FreeCreditBanner() {
  return (
    <div className="w-full bg-primary/5 border-y border-primary/10 mt-16">
      <div className="container mx-auto py-3 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-primary/10 p-1.5">
              <Gift className="h-4 w-4 text-primary" />
            </div>
            <p className="text-sm font-medium">
              <span className="font-bold">New users get 1 free credit!</span>{" "}
              Sign up today and transform your first image on us.
            </p>
          </div>
          <Button
            size="sm"
            asChild
            variant="outline"
            className="border border-primary/20"
          >
            <Link href="/app">Claim Your Free Credit</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
