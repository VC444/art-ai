import Link from "next/link";
import { CreditCard, ArrowLeft, Check, Zap, Info } from "lucide-react";

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
import { Alert, AlertDescription } from "@/components/ui/alert";
import PurchaseButton from "./PurchaseButton";

export default function PricingPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center mb-6">
        <Link href="/app" className="mr-4">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to home</span>
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Pricing</h1>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-2">Purchase AI Credits</h2>
          <p className="text-muted-foreground">
            Transform images into masterpieces with one click.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-8">
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
              <PurchaseButton credits={20} />
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
              <PurchaseButton credits={50} />
            </CardFooter>
          </Card>
        </div>
        <ImageToCreditsInfo />
      </div>
    </div>
  );
}

const ImageToCreditsInfo = () => {
  return (
    <Alert className="bg-secondary">
      <Info />
      <AlertDescription>
        <p>
          <strong>Note:</strong> Each image transformation costs 1 credit.
          Credits are transferred to your account immediately after purchase.
        </p>
      </AlertDescription>
    </Alert>
  );
};
