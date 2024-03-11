import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/modal";
import type { PixabayImage } from "@/types/PixabayImage";

export default function ImageGallery({ images }: { images: PixabayImage[] }) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [singleImageData, setSingleImageData] = useState<PixabayImage | null>(
    null
  );

  if (!images) return null;

  return (
    <div className="gap-8 columns-1 md:columns-3">
      {images.map((image: PixabayImage) => (
        <a
          type="button"
          className="mb-8 cursor-pointer"
          key={image.id}
          onClick={() => {
            setShowModal(true);
            setSingleImageData(image);
          }}
        >
          <div className="relative">
            <Image
              src={image.webformatURL}
              alt={`${image.type} of ${image.tags} from ${image.user}`}
              width={image.webformatWidth}
              height={image.webformatHeight}
              placeholder="blur"
              blurDataURL={image.base64}
            />
            <div className="absolute flex items-end bottom-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
              <p
                className="p-2 bg-black-500/[0.4] text-white-500"
                style={{ width: `${image.webformatWidth}px` }}
              >
                <span>Pixabay-Image from {image.user}</span>
                <br />
                <a
                  href={image.pageURL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-vanilla-300"
                >
                  View on Pixabay
                </a>
              </p>
            </div>
          </div>
        </a>
      ))}
      {showModal && (
        <Modal setShowModal={setShowModal} singleImageData={singleImageData} />
      )}
    </div>
  );
}
