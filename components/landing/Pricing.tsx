"use client";

import { useState } from "react";
import Link from "next/link";
import { CreditCard, Check, Zap, Gift } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

// Promo codes recognized at checkout. Percent off is applied to every package.
const PROMO_CODES: Record<string, number> = {
  PIXAR20: 0.2,
};

function formatPrice(base: number, discount: number): string {
  return `$${(base * (1 - discount)).toFixed(2)}`;
}

export const Pricing = () => {
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState<{
    kind: "success" | "error";
    text: string;
  } | null>(null);

  const applyCode = () => {
    const normalized = code.trim().toUpperCase();
    const match = PROMO_CODES[normalized];
    if (match) {
      setDiscount(match);
      setMessage({
        kind: "success",
        text: `${Math.round(match * 100)}% off applied`,
      });
    } else {
      setDiscount(0);
      setMessage({ kind: "error", text: "Invalid promo code" });
    }
  };

  const renderPrice = (base: number) => {
    if (discount > 0) {
      return (
        <div className="mb-6 flex items-baseline gap-2">
          <span className="text-4xl font-bold">
            {formatPrice(base, discount)}
          </span>
          <span className="text-lg text-muted-foreground line-through">
            {formatPrice(base, 0)}
          </span>
        </div>
      );
    }
    return <div className="text-4xl font-bold mb-6">{formatPrice(base, 0)}</div>;
  };

  return (
    <section id="pricing" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Purchase AI Credits
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Transform images into masterpieces with one click.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-black">
              <Gift className="h-4 w-4" />
              <span>
                Start with a free transformation, then choose your plan
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-md">
          <form
            className="flex items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              applyCode();
            }}
          >
            <Input
              type="text"
              aria-label="Promo code"
              placeholder="Promo code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <Button type="submit" variant="outline">
              Apply
            </Button>
          </form>
          {message && (
            <p
              role="status"
              className={`mt-2 text-center text-sm font-medium ${
                message.kind === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {message.text}
            </p>
          )}
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto mt-8">
          {/* Basic Package */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Basic Package</span>
                <CreditCard className="h-5 w-5 text-primary" />
              </CardTitle>
              <CardDescription>
                Perfect for trying out the service
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              {renderPrice(4.99)}

              <div className="space-y-2">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>10 AI transformation credits</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>All art styles included</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>High-resolution outputs</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Download transformed images</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/pricing">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Premium Package */}
          <Card className="flex flex-col border-primary">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  Premium Package
                  <Badge className="ml-2 bg-primary" variant="default">
                    Best Value
                  </Badge>
                </CardTitle>
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <CardDescription>More credits at a better price</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              {renderPrice(9.99)}

              <div className="space-y-2">
                <div className="flex items-center ">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="font-semibold">
                    25 AI transformation credits
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>All art styles included</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>High-resolution outputs</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Download transformed images</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="font-semibold">5 FREE CREDITS</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/pricing">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
