import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Photo {
  id: string;
  url: string;
}

const BACKEND_URL = "https://functions.poehali.dev/fba7f495-b7c5-481a-a485-57d522e0d47b";

export default function PhotoGalleryWidget() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    setIsUploading(true);

    try {
      const photosData = await Promise.all(
        Array.from(files).map(async (file) => ({
          name: file.name,
          data: await convertToBase64(file),
        }))
      );

      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ photos: photosData }),
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const result = await response.json();
      const newPhotos: Photo[] = result.urls.map((url: string) => ({
        id: Math.random().toString(36).substr(2, 9),
        url,
      }));

      setPhotos((prev) => [...prev, ...newPhotos]);
    } catch (error) {
      console.error("Error uploading photos:", error);
      alert("Ошибка при загрузке фото. Попробуйте еще раз.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleDeletePhoto = (id: string) => {
    setPhotos((prev) => prev.filter((p) => p.id !== id));
    if (selectedPhoto?.id === id) {
      setSelectedPhoto(null);
    }
  };

  return (
    <div className="w-full space-y-6">
      <Card className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl font-semibold">Фото галерея</h3>
          <Button
            onClick={handleUploadClick}
            disabled={isUploading}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Icon name="Upload" size={16} className="mr-2" />
            {isUploading ? "Загружаю..." : "Загрузить фото"}
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileSelect}
            className="hidden"
            disabled={isUploading}
          />
        </div>

        {photos.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="Image" size={32} className="text-primary" />
            </div>
            <p className="text-muted-foreground">
              Загрузите фотографии для создания галереи
            </p>
          </div>
        )}

        {photos.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="relative group cursor-pointer aspect-square"
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.url}
                  alt="Gallery"
                  className="w-full h-full object-cover rounded-lg border-2 border-border hover:border-primary transition-all"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeletePhoto(photo.id);
                  }}
                  className="absolute top-2 right-2 bg-destructive text-destructive-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Icon name="Trash2" size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </Card>

      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <Icon name="X" size={32} />
            </button>
            <img
              src={selectedPhoto.url}
              alt="Full size"
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
