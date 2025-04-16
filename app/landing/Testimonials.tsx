import { Card } from "@/components/ui/card";
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
              about ArtifyAI.
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
