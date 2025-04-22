import { Card } from "@/components/ui/card";
import { APP_NAME } from "@/strings";
import { Star } from "lucide-react";
import React from "react";

export const Testimonials = () => {
  return (
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
              Don't just take our word for it. Here's what our users have to say
              about {APP_NAME}.
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
  );
};

export const testimonials = [
  {
    quote:
      "Was just messing around and ended up turning a random photo into frame-worthy art. Wildly good.",
    author: "Maya S.",
    title: "Content Creator",
    rating: 5,
  },
  {
    quote:
      "Tried the Cyberpunk style on a random street photo and it came out looking like Blade Runner. Insanely cool.",
    author: "David K.",
    title: "Indie Developer",
    rating: 5,
  },
  {
    quote:
      "Finally an AI art tool that doesn’t make me click through 10 steps. Just upload, pick a style, done. Love it.",
    author: "Priya R.",
    title: "Hobbyist Artist",
    rating: 5,
  },
];
