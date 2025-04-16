"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Wand2,
  Zap,
  Image as ImageIcon,
  Share2,
  Star,
  ArrowRight,
  Check,
} from "lucide-react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import { ExamplesSection } from "./ExampleSection";

const features = [
  {
    title: "High-resolution outputs",
    description: "Get crystal clear transformations that preserve every detail",
    icon: Zap,
  },
  {
    title: "Multiple art styles",
    description: "Choose from a variety of unique artistic styles",
    icon: ImageIcon,
  },
  {
    title: "Instant results",
    description: "Transform your photos in seconds with our advanced AI",
    icon: Share2,
  },
];

const artStyleExamples = [
  {
    name: "Caricature",
    before: "/caricature-convert.webp",
    after: "/caricature.png",
    description: "Transform photos into expressive caricatures",
  },
  {
    name: "Puppet Style",
    before: "/puppet-convert.webp",
    after: "/puppet.png",
    description: "Convert images into charming puppet-like artwork",
  },
  {
    name: "Pixel",
    before: "/pixel-convert.jpg",
    after: "/pixel.png",
    description: "Pixel art",
  },
];

const testimonials = [
  {
    quote:
      "This app has completely transformed how I create digital art. The results are simply amazing!",
    author: "Sarah Johnson",
    title: "Digital Artist",
    rating: 5,
  },
  {
    quote:
      "I've tried many AI art tools, but this one stands out for its quality and ease of use.",
    author: "Michael Chen",
    title: "Professional Photographer",
    rating: 5,
  },
  {
    quote:
      "The variety of styles is incredible. My clients love the unique artwork it creates.",
    author: "Alex Rivera",
    title: "Creative Director",
    rating: 5,
  },
];

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

export default function Home() {
  return (
    <div className="min-h-screen bg-background bg-gradient-to-b from-violet-50 via-white to-blue-50">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wand2 className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">ArtifyAI</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#examples"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Examples
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Pricing
            </a>
            <Button variant="default">Get Started</Button>
          </div>
          <Button variant="outline" size="icon" className="md:hidden">
            <Wand2 className="h-5 w-5" />
          </Button>
        </nav>
      </header>
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-violet-100 via-white to-blue-100">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Transform Your
                <br />
                Photos Into
                <br />
                <span className="text-primary">Stunning Art</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Turn ordinary images into extraordinary artwork. Choose from a
                variety of artistic styles in just a few clicks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg" asChild>
                  <Link href="/">Get Started</Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg group"
                  asChild
                >
                  <Link href="#examples">
                    See Examples
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 ">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex flex-col items-start"
                  >
                    <Check className="h-5 w-5 text-primary mb-2" />
                    <p className="text-sm font-medium">{feature.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-6">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-sm font-medium mb-2">Original Image</p>
                    <AspectRatio ratio={2.5 / 3}>
                      <Image
                        src="/sketch-og.jpg"
                        alt="Original"
                        className="object-cover rounded-md"
                        style={{ objectPosition: "left 10% top 0" }}
                        fill
                        priority
                      />
                    </AspectRatio>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">
                      Transformed Image
                    </p>
                    <AspectRatio ratio={2.5 / 3}>
                      <Image
                        src="/sketch.png"
                        alt="Transformed"
                        className="object-cover rounded-md"
                        style={{ objectPosition: "left 0 top 0" }}
                        fill
                        priority
                      />
                    </AspectRatio>
                  </div>
                </div>
                <p className="text-sm text-center mt-4 text-muted-foreground">
                  Sketch Style
                </p>
                <Button variant="outline" className="w-full mt-4">
                  <Link href="#examples">Try Different Style</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExamplesSection />

      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                What Our Users Say
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Don't just take our word for it. Here's what our users have to
                say about ArtifyAI.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 py-12">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-lg mb-4">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Photos?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied users and start creating stunning
            artwork today.
          </p>
          <Button size="lg" variant="secondary" className="text-lg">
            <Link href="/">Get Started Now</Link>
          </Button>
        </div>
      </section>
      <footer className="w-full border-t py-8 bg-white flex justify-center">
        <div className="container flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <Wand2 className="h-6 w-6 text-violet-600" />
            <span className="text-lg font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              ArtifyAI
            </span>
          </div>
          <nav className="flex flex-wrap gap-6 justify-center">
            <Link
              href="#"
              className="text-sm font-medium text-slate-500 hover:text-violet-600"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-slate-500 hover:text-violet-600"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-slate-500 hover:text-violet-600"
            >
              FAQ
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-slate-500 hover:text-violet-600"
            >
              Contact
            </Link>
          </nav>
          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} ArtifyAI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
