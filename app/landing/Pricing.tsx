import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Pricing = () => {
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
              Transform images into masterpieces with one click. Each
              transformation costs 1 credit.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto py-8">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`p-6 ${
                plan.popular ? "border-primary/50 shadow-lg" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="mb-4 bg-primary">Most Popular</Badge>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-primary">
                  {plan.price}
                </span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                asChild
              >
                <Link href="/pricing">Get Started</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const pricingPlans = [
  {
    name: "Basic",
    price: "$9",
    period: "month",
    description: "Perfect for occasional use",
    features: [
      "10 transformations per month",
      "5 art styles",
      "Standard resolution output",
      "24-hour support",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "month",
    description: "Best for professionals",
    features: [
      "Unlimited transformations",
      "All art styles",
      "High resolution output",
      "Priority support",
      "Commercial usage rights",
      "API access",
    ],
    popular: true,
  },
];
