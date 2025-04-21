import { redirect } from "next/navigation";

import { stripe } from "../../lib/stripe";
import { CheckCircle2, HelpCircle, Mail, Wand2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Stripe from "stripe";
import { toast } from "sonner";

interface PageProps {
  searchParams: {
    session_id?: string;
  };
}

export default async function Success({ searchParams }: PageProps) {
  const { session_id } = await searchParams;

  if (!session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["line_items", "payment_intent"],
    });

    if (session.status === "open") {
      return redirect("/");
    }

    const paymentIntent = session.payment_intent as Stripe.PaymentIntent;
    const [lineItem] = session.line_items?.data ?? [];

    const paymentDetails = {
      orderId: paymentIntent.id,
      date: new Date(paymentIntent.created * 1000).toLocaleDateString(),
      package: lineItem.description,
      credits:
        (lineItem.quantity || 0) *
        Number(lineItem.price?.metadata.credits || 0),
      amount: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format((paymentIntent.amount_received || 0) / 100),
      email: session.customer_details?.email ?? "N/A",
    };

    if (status === "complete") {
      return (
        <div className="flex min-h-screen flex-col bg-background ">
          <main className="flex-1 flex justify-center">
            <div className="container max-w-4xl py-12 md:py-24">
              <div className="mb-8 flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <CheckCircle2 className="h-12 w-12 text-primary" />
                </div>
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Payment Successful!
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                  Thank you for your purchase. Your credits have been added to
                  your account.
                </p>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Order Details</CardTitle>
                  <CardDescription>
                    Order #{paymentDetails.orderId} • {paymentDetails.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Package</span>
                      <span>{paymentDetails.package}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Credits Added</span>
                      <span>{paymentDetails.credits} credits</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Amount Paid</span>
                      <span className="text-lg font-bold">
                        {paymentDetails.amount}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Receipt sent to</span>
                      <span>{paymentDetails.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold">Next Steps</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Wand2 className="h-5 w-5 text-primary" />
                        Start Transforming
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Your credits are ready to use. Upload an image and
                        choose from our collection of artistic styles to create
                        stunning transformations.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/app">Go to App Dashboard</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <HelpCircle className="h-5 w-5 text-primary" />
                        Need Help?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        If you have any questions about your purchase or how to
                        use our service, our support team is here to help.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        <Mail className="mr-2 h-4 w-4" />
                        Contact Support
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </div>
      );
    }
  } catch (error) {
    console.log(error);
  }
}
