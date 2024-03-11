import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";
import type { PixabayImage } from "@/types/PixabayImage";

export default function Modal({
  setShowModal,
  singleImageData,
}: {
  setShowModal: (showModal: boolean) => void;
  singleImageData: PixabayImage | null;
}) {
  if (!singleImageData) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black-600/75 flex items-center justify-center z-50 transition duration-300 ease-in-out">
      <div className="w-full h-full md:w-3/4 md:h-3/4 flex flex-col md:flex-row bg-vanilla-100 p-5">
        <button
          type="button"
          className="md:hidden w-7 h-7 text-black-500 flex self-end"
          onClick={() => setShowModal(false)}
        >
          <XMarkIcon />
        </button>
        <div className="w-full h-full md:w-3/4 relative">
          <Image
            src={singleImageData.largeImageURL}
            alt={`${singleImageData.type} of ${singleImageData.tags} from ${singleImageData.user}`}
            fill={true}
            objectFit="contain"
            placeholder="blur"
            blurDataURL={singleImageData.base64}
          />
        </div>
        <div className="w-full md:w-1/4 relative p-5">
          <button
            type="button"
            className="hidden md:block absolute top-0 right-0 w-7 h-7 text-black-500"
            onClick={() => setShowModal(false)}
          >
            <XMarkIcon />
          </button>
          <h3 className="text-black-500 text-2xl mb-3">Information:</h3>
          <p className="text-black-500">Photo from {singleImageData.user}</p>
          <hr className="my-5" />
          <p className="text-black-500">
            <span>Likes : {singleImageData.likes}</span>
          </p>
          <p className="text-black-500">
            <span>Views : {singleImageData.views}</span>
          </p>
          <p className="text-black-500">
            <span>Downloads : {singleImageData.downloads}</span>
          </p>
          <p className="text-black-500">
            <span>Tags : {singleImageData.tags}</span>
          </p>
          <p className="text-black-500 mt-5">
            <a
              href={singleImageData.pageURL}
              target="_blank"
              rel="noreferrer noopener"
              className="text-black-500 underline"
            >
              View on Pixabay
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
