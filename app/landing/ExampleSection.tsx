"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function ExamplesSection() {
  return (
    <section id="examples" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Examples
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              See the Magic in Action
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Browse through our gallery of transformations to see the
              incredible possibilities.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl py-12">
          <Tabs defaultValue="sketch" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-neutral-200">
              <TabsTrigger value="sketch">Sketch</TabsTrigger>
              <TabsTrigger value="caricature">Caricature</TabsTrigger>
              <TabsTrigger value="pixel">Pixel Art</TabsTrigger>
              <TabsTrigger value="puppet">Puppet Art</TabsTrigger>
            </TabsList>
            <TabsContent value="sketch" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-lg border">
                  <div className="p-2">
                    <h3 className="font-medium">Original</h3>
                  </div>
                  <div className="aspect-[4/3] bg-muted">
                    <Image
                      src="/sketch-og.jpg"
                      alt="Original portrait"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg border">
                  <div className="p-2">
                    <h3 className="font-medium">Sketch Style</h3>
                  </div>
                  <div className="aspect-[4/3] bg-muted">
                    <Image
                      src="/sketch.png"
                      alt="Sketch style portrait"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Pencil-like drawing with emphasis on lines and shading
              </p>
            </TabsContent>
            <TabsContent value="caricature" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-lg border">
                  <div className="p-2">
                    <h3 className="font-medium">Original</h3>
                  </div>
                  <div className="aspect-[4/3] bg-muted">
                    <Image
                      src="/caricature-convert.webp"
                      alt="Original couple selfie"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg border">
                  <div className="p-2">
                    <h3 className="font-medium">Caricature Style</h3>
                  </div>
                  <div className="aspect-[4/3] bg-muted">
                    <Image
                      src="/caricature.png"
                      alt="Caricature style couple"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Cartoon-style illustration with exaggerated features and vibrant
                colors
              </p>
            </TabsContent>
            <TabsContent value="pixel" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-lg border">
                  <div className="p-2">
                    <h3 className="font-medium">Original</h3>
                  </div>
                  <div className="aspect-[4/3] bg-muted">
                    <Image
                      src="/pixel-convert.jpg"
                      alt="Original cat photo"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg border">
                  <div className="p-2">
                    <h3 className="font-medium">Pixel Art Style</h3>
                  </div>
                  <div className="aspect-[4/3] bg-muted">
                    <Image
                      src="/pixel.png"
                      alt="Pixel art style cat"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Digital art created using pixel-by-pixel editing technique
              </p>
            </TabsContent>
            <TabsContent value="puppet" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-lg border">
                  <div className="p-2">
                    <h3 className="font-medium">Original</h3>
                  </div>
                  <div className="aspect-[4/3] bg-muted">
                    <Image
                      src="/puppet-convert.webp"
                      alt="Original warrior photo"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg border">
                  <div className="p-2">
                    <h3 className="font-medium">Puppet Art Style</h3>
                  </div>
                  <div className="aspect-[4/3] bg-muted">
                    <Image
                      src="/puppet.png"
                      alt="Puppet art style warrior"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Textured puppet-like illustration with vibrant colors and
                simplified forms
              </p>
            </TabsContent>
          </Tabs>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="overflow-hidden pt-0">
              <AspectRatio ratio={1}>
                <Image
                  src="/oil-convert.avif"
                  alt="Oil painting style"
                  fill
                  className="object-cover"
                />
              </AspectRatio>
              <CardContent className="p-4">
                <h3 className="font-bold">Oil Painting</h3>
                <p className="text-xs text-muted-foreground">
                  Classic oil painting effect with rich textures and warm tones
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden pt-0">
              <AspectRatio ratio={1}>
                <Image
                  src="/caricature.png"
                  alt="Cartoon style"
                  fill
                  className="object-cover"
                />
              </AspectRatio>
              <CardContent className="p-4">
                <h3 className="font-bold">Cartoon</h3>
                <p className="text-xs text-muted-foreground">
                  Playful cartoon style with bold outlines and simplified
                  features
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden pt-0">
              <AspectRatio ratio={1}>
                <Image
                  src="/pixel.png"
                  alt="Pixel Art style"
                  fill
                  className="object-cover"
                />
              </AspectRatio>
              <CardContent className="p-4">
                <h3 className="font-bold">Pixel Art</h3>
                <p className="text-xs text-muted-foreground">
                  Retro pixel art style reminiscent of classic video games
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden pt-0">
              <AspectRatio ratio={1}>
                <Image
                  src="/sketch.png"
                  alt="Sketch style"
                  fill
                  className="object-cover"
                />
              </AspectRatio>
              <CardContent className="p-4">
                <h3 className="font-bold">Sketch</h3>
                <p className="text-xs text-muted-foreground">
                  Detailed pencil sketch with fine lines and realistic shading
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="#pricing">Transform Your Images Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
