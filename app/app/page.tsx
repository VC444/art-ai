"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  AlertCircle,
  CheckIcon,
  Download,
  ImageIcon,
  Maximize2,
  Upload,
  Wand2,
} from "lucide-react";
import imageCompression from "browser-image-compression";
import { useDropzone } from "react-dropzone";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { artStyles } from "@/utils/art-styles";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { createClientForBrowser } from "@/utils/supabase/client";
import { UserAvatar } from "@/components/UserAvatar";
import { APP_NAME } from "@/strings";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { LoginModal } from "./LoginModal";
import { ArtzieFrontendError } from "@/utils/sentry/error-structure";

export default function Home() {
  return (
    <Suspense>
      <HomeContent />
    </Suspense>
  );
}

function HomeContent() {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [transformedImage, setTransformedImage] = useState<string | null>(null);
  const [isTransforming, setIsTransforming] = useState(false);
  const [fileRejected, setFileRejected] = useState(false);
  const [showOriginalFullscreen, setShowOriginalFullscreen] = useState(false);
  const [showTransformedFullscreen, setShowTransformedFullscreen] =
    useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const styleFromQuery = searchParams.get("style");

    if (
      styleFromQuery &&
      artStyles.some((style) => style.id === styleFromQuery)
    ) {
      setSelectedStyle(styleFromQuery);
    }
  }, [searchParams]);

  const handleStyleSelect = (styleId: string) => {
    setSelectedStyle(styleId);
  };

  const handleTransform = async () => {
    if (!selectedStyle || !uploadedImage) return;

    setIsTransforming(true);

    try {
      const supabase = createClientForBrowser();

      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        setShowLoginModal(true);
        return;
      }

      const originalFile = await imageCompression.getFilefromDataUrl(
        uploadedImage,
        "uploaded.jpg",
      );

      // Compress the file to be <5MB
      const compressedFile = await imageCompression(originalFile, {
        maxSizeMB: 5,
        useWebWorker: true,
      });

      // Convert back to Data URL for backend
      const compressedDataUrl =
        await imageCompression.getDataUrlFromFile(compressedFile);

      const {
        data: { session },
      } = await supabase.auth.getSession();

      const response = await fetch(
        "https://qfqadnaxevzfvxbkjfae.supabase.co/functions/v1/transform-image",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.access_token}`,
          },
          body: JSON.stringify({
            image: compressedDataUrl,
            style: selectedStyle,
          }),
        },
      );

      const json = await response.json();

      if (json.error) {
        throw new ArtzieFrontendError(json.error);
      }

      // Convert base64 to data URL for image display
      const imageData = `data:image/png;base64,${json.image}`;
      setTransformedImage(imageData);

      queryClient.invalidateQueries({ queryKey: ["credit-balance"] });
    } catch (error: any) {
      toast.error(
        error.message ||
          "An error occurred while transforming the image. Please try again.",
      );

      throw new ArtzieFrontendError(error);
    } finally {
      setIsTransforming(false);
    }
  };

  const handleDownload = () => {
    if (!transformedImage) return;

    const link = document.createElement("a");
    link.href = transformedImage;
    link.download = `artzie-${selectedStyle}-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
    // Reset error state
    setFileRejected(false);

    // Handle rejected files
    if (rejectedFiles.length > 0) {
      setFileRejected(true);
      return;
    }

    // Process the accepted file
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target && typeof event.target.result === "string") {
          setUploadedImage(event.target.result);
          setTransformedImage(null);
        }
      };

      reader.readAsDataURL(file);
    }
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp"],
    },
    maxFiles: 1,
    multiple: false,
  });

  // Determine the border color based on drag state
  const getBorderColor = () => {
    if (isDragAccept) return "border-green-500";
    if (isDragReject || fileRejected) return "border-destructive";
    if (isDragActive) return "border-primary";
    return "border-muted";
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="relative flex items-center justify-center">
        <div className="flex items-center gap-2 mb-8">
          <Wand2 className="h-6 w-6 text-primary" />
          <h1 className="font-bold text-3xl">{APP_NAME}</h1>
        </div>

        <UserAvatar />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="overflow-hidden">
          <CardHeader className="pb-0">
            <CardTitle>Original Image</CardTitle>
            <CardDescription>
              Upload or drag an image to transform
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors min-h-[350px] flex items-center justify-center ${getBorderColor()} ${
                isDragActive ? "bg-muted/50" : ""
              }`}
            >
              <input {...getInputProps()} />

              {uploadedImage ? (
                <div className="flex flex-col items-center w-full">
                  <div className="relative w-full mb-4">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                      <Image
                        src={uploadedImage || "/placeholder.svg"}
                        alt="Uploaded image"
                        fill
                        className="object-contain rounded-md"
                      />
                    </AspectRatio>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowOriginalFullscreen(true);
                      }}
                    >
                      <Maximize2 className="h-4 w-4" />
                      <span className="sr-only">View full screen</span>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Click or drag to replace
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setUploadedImage(null);
                    }}
                  >
                    Remove image
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center py-8">
                  <div className="mb-4 bg-muted rounded-full p-4">
                    <Upload className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <p className="text-lg font-medium mb-1">
                    {isDragActive
                      ? isDragAccept
                        ? "Drop the image here"
                        : "This file type is not supported"
                      : "Drag and drop an image here"}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    or click to browse files
                  </p>
                  {fileRejected && (
                    <Alert variant="destructive" className="mb-4">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        Please select a valid image file
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-0">
            <CardTitle>Transformed Image</CardTitle>
            <CardDescription>
              Your image with the selected style applied
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="min-h-[350px] flex items-center justify-center bg-muted/30 rounded-lg">
              {isTransforming ? (
                <div className="text-center">
                  <div className="space-y-2 mb-4">
                    <Skeleton className="h-[200px] w-[300px] mx-auto rounded-lg" />
                  </div>
                  <div className="flex items-center justify-center">
                    Image transformation started. You'll get an email when it's
                    ready.
                    <CheckIcon className="ml-1" color="green" />
                  </div>
                </div>
              ) : transformedImage ? (
                <div className="text-center w-full p-4 relative">
                  <AspectRatio ratio={16 / 9} className="bg-muted mb-2">
                    <Image
                      src={transformedImage || "/placeholder.svg"}
                      alt={`Transformed image in ${selectedStyle} style`}
                      fill
                      className="object-contain rounded-md"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm z-10"
                      onClick={() => setShowTransformedFullscreen(true)}
                    >
                      <Maximize2 className="h-4 w-4" />
                      <span className="sr-only">View full screen</span>
                    </Button>
                  </AspectRatio>
                </div>
              ) : (
                <div className="text-center text-muted-foreground p-4">
                  <ImageIcon className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
                  <p className="text-lg">Transformed image will appear here</p>
                  {uploadedImage ? (
                    <p className="mt-2">Select a style and click "Transform"</p>
                  ) : (
                    <p className="mt-2">Upload an image first</p>
                  )}
                </div>
              )}
            </div>
          </CardContent>
          {transformedImage && (
            <CardFooter className="flex justify-center pt-0">
              <Button
                variant="outline"
                onClick={handleDownload}
                className="gap-2"
              >
                <>
                  <Download className="h-4 w-4" />
                  Download Image
                </>
              </Button>
            </CardFooter>
          )}
        </Card>
      </div>

      {uploadedImage && selectedStyle && (
        <div className="flex justify-center mb-8">
          <Button
            size="lg"
            onClick={handleTransform}
            disabled={!selectedStyle || isTransforming || !uploadedImage}
          >
            {isTransforming ? "Transforming..." : "Transform Image"}
          </Button>
        </div>
      )}

      <StyleSelector
        selectedStyle={selectedStyle}
        handleStyleSelect={handleStyleSelect}
      />

      <Dialog
        open={showOriginalFullscreen}
        onOpenChange={setShowOriginalFullscreen}
      >
        <DialogContent className="!container w-[90vw] h-[90vh] p-0 overflow-hidden">
          <DialogTitle className="sr-only">Original Image</DialogTitle>
          <div className="relative w-full h-full flex items-center justify-center bg-black">
            {uploadedImage && (
              <Image
                src={uploadedImage || "/placeholder.svg"}
                alt="Original image full screen"
                fill
                className="object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={showTransformedFullscreen}
        onOpenChange={setShowTransformedFullscreen}
      >
        <DialogContent className="!container w-[90vw] h-[90vh] p-0 overflow-hidden">
          <DialogTitle className="sr-only">Transformed Image</DialogTitle>
          <div className="relative w-full h-full flex items-center justify-center bg-black">
            {transformedImage && (
              <Image
                src={transformedImage || "/placeholder.svg"}
                alt={`Transformed image in ${selectedStyle} style full screen`}
                fill
                className="object-contain"
              />
            )}
            <Button
              variant="outline"
              onClick={handleDownload}
              className="absolute bottom-4 right-4 bg-black/50 text-white border-white/20 hover:bg-black/70 hover:text-white gap-2"
            >
              <Download className="h-4 w-4" />
              Download
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <LoginModal
        open={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </div>
  );
}

interface StyleSelectorProps {
  selectedStyle: string | null;
  handleStyleSelect: (styleId: string) => void;
}

const StyleSelector = ({
  selectedStyle,
  handleStyleSelect,
}: StyleSelectorProps) => {
  return (
    <div className="mb-8">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
        Choose an Art Style
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {artStyles.map((style) => (
          <Card
            key={style.id}
            className={`cursor-pointer transition-all hover:shadow-md ${
              selectedStyle === style.id ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => handleStyleSelect(style.id)}
          >
            <CardContent className="p-4">
              <AspectRatio
                ratio={2.5 / 3}
                className="bg-muted mb-2 rounded-md overflow-hidden"
              >
                <Image
                  src={style.previewSrc || "/placeholder.svg"}
                  alt={style.name}
                  fill
                  className="object-cover transition-all hover:scale-105"
                  style={style.positioning}
                />
              </AspectRatio>
              <h3 className="font-medium">{style.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">
                {style.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
