"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { ImageIcon, Upload } from "lucide-react";
import { useDropzone } from "react-dropzone";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { artStyles } from "@/utils/art-styles";

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [transformedImage, setTransformedImage] = useState<string | null>(null);
  const [isTransforming, setIsTransforming] = useState(false);
  const [fileRejected, setFileRejected] = useState(false);

  const handleStyleSelect = (styleId: string) => {
    setSelectedStyle(styleId);
  };

  const handleTransform = () => {
    if (!selectedStyle || !uploadedImage) return;

    setIsTransforming(true);

    // Simulate image transformation with a delay
    setTimeout(() => {
      // In a real app, this would call an API to transform the image
      // For demo purposes, we're just showing the original image
      setTransformedImage(uploadedImage);
      setIsTransforming(false);
    }, 1500);
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
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    maxFiles: 1,
    multiple: false,
  });

  // Determine the border color based on drag state
  const getBorderColor = () => {
    if (isDragAccept) return "border-green-500 bg-green-50";
    if (isDragReject || fileRejected) return "border-red-500 bg-red-50";
    if (isDragActive) return "border-primary bg-primary/5";
    return "border-muted-foreground/20 hover:border-primary/50";
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Image Style Transformer
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div>
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors h-full min-h-[400px] flex items-center justify-center ${getBorderColor()}`}
          >
            <input {...getInputProps()} />

            {uploadedImage ? (
              <div className="flex flex-col items-center w-full">
                <div className="relative w-full h-[350px] mb-4">
                  <Image
                    src={uploadedImage || "/placeholder.svg"}
                    alt="Uploaded image"
                    fill
                    className="object-contain"
                  />
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
                    setTransformedImage(null);
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
                  <p className="text-sm text-red-500 mb-2">
                    Please select a valid image file
                  </p>
                )}
                <p className="text-xs text-muted-foreground">
                  Supports JPG, PNG, GIF, WEBP
                </p>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="border rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center p-4 min-h-[400px] h-full">
            {isTransforming ? (
              <div className="text-center">
                <div
                  className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
                <p className="mt-4 text-lg">Transforming image...</p>
              </div>
            ) : transformedImage ? (
              <div className="text-center w-full">
                <div className="relative w-full h-[350px] mb-2">
                  <Image
                    src={transformedImage || "/placeholder.svg"}
                    alt={`Transformed image in ${selectedStyle} style`}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  {selectedStyle &&
                    `Style: ${
                      artStyles.find((style) => style.id === selectedStyle)
                        ?.name
                    }`}
                </p>
              </div>
            ) : (
              <div className="text-center text-muted-foreground">
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
        </div>
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

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Choose an Art Style</h2>
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
                <div className="aspect-square mb-2 overflow-hidden rounded-md bg-muted">
                  <Image
                    src={style.previewSrc || "/placeholder.svg"}
                    alt={style.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <h3 className="font-medium">{style.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {style.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
