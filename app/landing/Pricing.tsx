import Link from "next/link";
import { CreditCard, Check, Zap } from "lucide-react";
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
              Transform images into masterpieces with one click.
            </p>
          </div>
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
              <div className="text-4xl font-bold mb-6">$2.99</div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>20 AI transformation credits</span>
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
              <div className="text-4xl font-bold mb-6">$4.99</div>

              <div className="space-y-2">
                <div className="flex items-center font-medium">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>50 AI transformation credits</span>
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
                  <span>50% more value</span>
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
