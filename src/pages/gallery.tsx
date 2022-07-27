import React, { useState } from "react";
import Layout from "../components/Layout";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { RiCloseCircleFill } from "react-icons/ri";

const Gallery = () => {
  const galleryImages = [
    {
      img: "http://placeimg.com/640/480/animals",
    },
    {
      img: "http://placeimg.com/640/480/arch",
    },
    {
      img: "http://placeimg.com/640/480/nature",
    },
    {
      img: "http://placeimg.com/640/480/people",
    },
    {
      img: "http://placeimg.com/640/480/tech",
    },
    {
      img: "http://placeimg.com/640/480/any",
    },
  ];

  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index: number) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <Layout>
      <section className="page">
        <h1 className="text-center text-4xl mb-6">Image Gallery</h1>
        {openModal && (
          <div className="fixed inset-0 z-50 bg-black opacity-95 flex items-center justify-center w-full h-full">
            <RiCloseCircleFill
              className="fixed cursor-pointer opacity-60 text-white z-50 hover:opacity-100 top-10 right-10 text-4xl"
              onClick={handleCloseModal}
            />
            <FaChevronCircleLeft
              className="fixed cursor-pointer opacity-60 text-white z-50 hover:opacity-100 inset-y-auto left-10 text-4xl"
              onClick={prevSlide}
            />
            <FaChevronCircleRight
              className="fixed cursor-pointer opacity-60 text-white z-50 hover:opacity-100 inset-y-auto right-10 text-4xl"
              onClick={nextSlide}
            />
            <div className="flex items-center justify-center w-[calc(100% - 40-x)] h-[calc(100% - 40-x)]">
              <img
                src={galleryImages[slideNumber].img}
                alt=""
                className="max-w-full max-h-full pointer-events-none select-none !opacity-100"
              />
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-3 items-center justify-center max-w-3xl mx-auto">
          {galleryImages &&
            galleryImages.map((slide, index) => {
              return (
                <div
                  key={index}
                  className="w-48 cursor-pointer"
                  onClick={() => handleOpenModal(index)}
                >
                  <img
                    src={slide.img}
                    alt=""
                    className="max-w-full hover:scale-105"
                  />
                </div>
              );
            })}
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
