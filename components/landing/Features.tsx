import { Card, CardContent } from "@/components/ui/card";
import { Download, ShieldCheck, Wand2, Zap } from "lucide-react";
import React from "react";

export const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Powerful Image Transformation
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Our AI-powered platform offers a range of features to help you
              create stunning artwork from your photos.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="flex flex-col items-center space-y-2 p-6">
              <div className="rounded-full bg-primary/10 p-3">
                <Wand2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Multiple Styles</h3>
              <p className="text-center text-sm text-muted-foreground">
                Transform your photos with styles like Cyberpunk, Puppet art,
                Caricature, and more.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center space-y-2 p-6">
              <div className="rounded-full bg-primary/10 p-3">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Fast Results</h3>
              <p className="text-center text-sm text-muted-foreground">
                Get high-quality transformations in just a few minutes.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center space-y-2 p-6">
              <div className="rounded-full bg-primary/10 p-3">
                <Download className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">High Resolution</h3>
              <p className="text-center text-sm text-muted-foreground">
                Download your transformed images in high resolution, perfect for
                printing or sharing.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center space-y-2 p-6">
              <div className="rounded-full bg-primary/10 p-3">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Privacy First</h3>
              <p className="text-center text-sm text-muted-foreground">
                Your images are processed securely and never stored in our
                database.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
