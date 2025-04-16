"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function Examples() {
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
          <Tabs defaultValue="pixar" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-neutral-200">
              <TabsTrigger value="pixar">Pixar</TabsTrigger>
              <TabsTrigger value="ghibli">Ghibli</TabsTrigger>
              <TabsTrigger value="caricature">Caricature</TabsTrigger>
              <TabsTrigger value="puppet">Puppet</TabsTrigger>
            </TabsList>
            <TabsContent value="pixar" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-lg border">
                  <div className="p-2">
                    <h3 className="font-medium">Original</h3>
                  </div>
                  <div className="aspect-[2.5/3] bg-muted">
                    <Image
                      src="/pixar-convert.jpg"
                      alt="Original portrait"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                      style={{ objectPosition: "left 30% top 0" }}
                    />
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg border">
                  <div className="p-2">
                    <h3 className="font-medium">Pixar Style</h3>
                  </div>
                  <div className="aspect-[2.5/3] bg-muted">
                    <Image
                      src="/pixar.png"
                      alt="Pixar style art"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Pixar art style
              </p>
            </TabsContent>
            <TabsContent value="ghibli" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-lg border">
                  <div className="p-2">
                    <h3 className="font-medium">Original</h3>
                  </div>
                  <div className="aspect-[2.5/3] bg-muted">
                    <Image
                      src="/ghibli-convert-two.jpg"
                      alt="Original couple selfie"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg border">
                  <div className="p-2">
                    <h3 className="font-medium">Ghibli Style</h3>
                  </div>
                  <div className="aspect-[2.5/3] bg-muted">
                    <Image
                      src="/ghibli.png"
                      alt="Ghibli style couple"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                      style={{ objectPosition: "left 0 top 0" }}
                    />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Studio Ghibli-inspired art style with whimsical characters and
                landscapes
              </p>
            </TabsContent>
            <TabsContent value="caricature" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-lg border">
                  <div className="p-2">
                    <h3 className="font-medium">Original</h3>
                  </div>
                  <div className="aspect-[2.5/3] bg-muted">
                    <Image
                      src="/caricature-convert.webp"
                      alt="Original caricature photo"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                      style={{ objectPosition: "left 40% top 0" }}
                    />
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg border">
                  <div className="p-2">
                    <h3 className="font-medium">Caricature Art Style</h3>
                  </div>
                  <div className="aspect-[2.5/3] bg-muted">
                    <Image
                      src="/caricature.png"
                      alt="Caricature style couple photo"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Caricature art style with exaggerated features and playful
                elements
              </p>
            </TabsContent>
            <TabsContent value="puppet" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-lg border">
                  <div className="p-2">
                    <h3 className="font-medium">Original</h3>
                  </div>
                  <div className="aspect-[2.5/3] bg-muted">
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
                  <div className="aspect-[2.5/3] bg-muted">
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
              <AspectRatio ratio={2.5 / 3}>
                <Image
                  src="/cyberpunk.png"
                  alt="Cyberpunk style"
                  fill
                  className="object-cover"
                  // style={{ objectPosition: "left 50% top 50%" }}
                />
              </AspectRatio>
              <CardContent className="p-4">
                <h3 className="font-bold">Cyberpunk</h3>
                <p className="text-xs text-muted-foreground">
                  Cyberpunk-inspired art style with neon colors and futuristic
                  elements
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden pt-0">
              <AspectRatio ratio={2.5 / 3}>
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
              <AspectRatio ratio={2.5 / 3}>
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
              <AspectRatio ratio={2.5 / 3}>
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
