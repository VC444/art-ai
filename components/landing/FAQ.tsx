"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Everything you need to know about ArtifyAI
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl">
                How do I use ArtifyAI?
              </AccordionTrigger>
              <AccordionContent>
                Upload your image, pick an art style, and our AI transforms it
                in seconds. Each transformation uses 1 credit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl">
                What image formats are supported?
              </AccordionTrigger>
              <AccordionContent>
                JPG, PNG, and WEBP — up to 20MB per image.
              </AccordionContent>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl">
                  How do credits work?
                </AccordionTrigger>
                <AccordionContent>
                  Each image transformation costs 1 credit. You can buy 20
                  credits for $2.99 or 50 credits for $4.99 — the more you get,
                  the better the value.
                </AccordionContent>
              </AccordionItem>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl">
                Do credits expire?
              </AccordionTrigger>
              <AccordionContent>
                No, your credits never expire. Once purchased, they remain in
                your account until used, so you can take your time experimenting
                with different styles and images.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-xl">
                What resolution are the transformed images?
              </AccordionTrigger>
              <AccordionContent>
                ArtifyAI generates high-resolution outputs that match your input
                image's resolution, up to 2048x2048 pixels. This ensures your
                transformed images are suitable for printing, social media, and
                professional use.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-xl">
                Is my data private and secure?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we take privacy seriously. Your original images are
                processed securely and not stored in our database.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-xl">
                Do I own the images I create?
              </AccordionTrigger>
              <AccordionContent>
                Yes, you retain all rights to both your original images and the
                transformed versions created with ArtifyAI. You're free to use
                the transformed images for personal or commercial purposes,
                subject to the rights you hold for the original images.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
