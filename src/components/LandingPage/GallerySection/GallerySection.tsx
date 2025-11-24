import {
  Dialog,
  DialogClose,
  DialogContent,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { X } from "lucide-react";
import React, { useState } from "react";

const galleryImages = [
  "/assets/image/gallery-images/gallery-1.jpg",
  "/assets/image/gallery-images/gallery-2.jpg",
  "/assets/image/gallery-images/gallery-3.jpg",
  "/assets/image/gallery-images/gallery-4.jpg",
  "/assets/image/gallery-images/gallery-5.jpg",
  "/assets/image/gallery-images/gallery-6.jpg",
  "/assets/image/gallery-images/gallery-7.jpg",
  "/assets/image/gallery-images/gallery-8.jpg",
  "/assets/image/gallery-images/gallery-9.jpg",
  "/assets/image/gallery-images/gallery-10.jpg",
  "/assets/image/gallery-images/gallery-11.jpg",
  "/assets/image/gallery-images/gallery-12.jpg",
];

interface GalleryImageProps {
  image: string;
  index: number;
  onImageClick: (index: number) => void;
}

const GalleryImage: React.FC<GalleryImageProps> = ({
  image,
  index,
  onImageClick,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
      onClick={() => onImageClick(index)}
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundImage: !imageError ? `url(${image})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Fallback gradient when image fails to load */}
        {imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700" />
        )}

        {/* Hidden image to detect load errors */}
        {!imageError && (
          <img
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="absolute opacity-0 pointer-events-none"
            onError={() => setImageError(true)}
          />
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 z-10" />

      {/* Hover effect indicator */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const GallerySection = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handlePrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    } else if (selectedImageIndex === 0) {
      setSelectedImageIndex(galleryImages.length - 1);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < galleryImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    } else if (selectedImageIndex === galleryImages.length - 1) {
      setSelectedImageIndex(0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      handlePrevious();
    } else if (e.key === "ArrowRight") {
      handleNext();
    } else if (e.key === "Escape") {
      handleCloseModal();
    }
  };

  return (
    <>
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-50" id="gallery">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cascading-deep-navy">
              GALLERY
            </h2>
            <p className="text-3xl md:text-4xl font-serif italic text-cascading-medium-blue mb-8">
              A Glimpse Into Our Home
            </p>
          </div>

          <div className="mb-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto font-light">
              Step inside Cascading Grace and see the warm, welcoming spaces where
              our residents find comfort, community, and care. Each image reflects
              the peaceful, family-centered environment we've created.
            </p>
          </div>

          <div className="w-full max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {galleryImages.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <GalleryImage
                        image={image}
                        index={index}
                        onImageClick={handleImageClick}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 md:-left-12" />
              <CarouselNext className="right-0 md:-right-12" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <Dialog open={selectedImageIndex !== null} onOpenChange={handleCloseModal}>
          <DialogContent
            className="max-w-[95vw] max-h-[95vh] p-0 border-2 border-[var(--cascading-medium-blue)] overflow-hidden shadow-2xl bg-black/95"
            showCloseButton={false}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <DialogClose
                className="absolute top-4 right-4 z-50 rounded-full bg-white/10 hover:bg-white/20 text-white p-3 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black cursor-pointer"
                onClick={handleCloseModal}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </DialogClose>

              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 z-50 rounded-full bg-white/10 hover:bg-white/20 text-white p-3 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 z-50 rounded-full bg-white/10 hover:bg-white/20 text-white p-3 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Image */}
              <img
                src={galleryImages[selectedImageIndex]}
                alt={`Gallery image ${selectedImageIndex + 1}`}
                className="max-w-full max-h-[95vh] object-contain"
              />

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                {selectedImageIndex + 1} / {galleryImages.length}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default GallerySection;

