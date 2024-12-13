import { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Button } from "@nextui-org/react";
function Carousel() {
  const CarouselData = [
    {
      id: 1,
      image: "/Carousel1.png",
      heading: "Wizkid made in lagos tour",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      id: 2,
      image: "/Carousel1.png",
      heading: "Wizkid made in jarman tour",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      id: 3,
      image: "/Carousel1.png",
      heading: "Wizkid made in japan tour",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
  ];
  const TagData = [
    {
      id: 1,
      img: "/Calendar.png",
      title: "Dec 13 2024",
    },
    {
      id: 1,
      img: "/Mark.png",
      title: "TBS  Lagos",
    },
    {
      id: 3,
      img: "/Clock.png",
      title: "9:00 PM ",
    },
    {
      id: 4,
      img: "/Tag.png",
      title: "N20,000",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlider = CarouselData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? CarouselData.length - 1 : prev - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((next) =>
      next === CarouselData.length - 1 ? 0 : next + 1
    );
  };

  const handleClick = (index) => setCurrentIndex(index);
  return (
    <>
      <section className="md:mx-[50px] lg:mx-[100px]">
        <h1 className="text-center text-2xl lg:text-5xl text-normal mt-24 mb-12 font-semibold">
          See How People are Chilling On Chillsbay
        </h1>
        <div className="relative w-full max-w-screen-2xl mx-auto">
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrev}
              className="absolute left-0 transform lg:translate-x-6 flex items-center justify-center rounded-full text-4xl md:text-5xl lg:text-6xl text-[#26395C] border-none outline-none"
            >
              <GoChevronLeft />
            </button>
            <div className="flex flex-col lg:flex-row items-center gap-6 w-full px-12">
              {/* left side */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl text-normal font-semibold lg:ms-10">
                  Upcoming events this weekend
                </h3>
                <img
                  className="object-cover h-auto"
                  src={currentSlider.image}
                  alt=""
                />
              </div>
              {/* right side */}
              <div className="w-full lg:w-1/2 flex-col gap-4">
                <h2 className="text-2xl lg:text-5xl font-bold lg:w-1/2 leading-tight">
                  {currentSlider.heading}
                </h2>
                <p className="text-gray-700 lg:w-[70%] text-xl">
                  {currentSlider.des}
                </p>
                <div className="grid grid-cols-2 lg:w-[60%]">
                  {TagData.map((value, index) => (
                    <div key={index} className="flex items-center mt-5 mb-5">
                      <img src={value.img} alt="" />
                      <p className="ms-4 text-lg font-semibold">
                        {value.title}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="md:w-1/2 flex items-center gap-4">
                  <Button
                    color="primary"
                    variant="bordered"
                    size="lg"
                    className="md:w-1/2"
                  >
                    Add To Cart
                  </Button>
                  <Button color="primary" size="lg" className="md:w-1/2">
                    Book Now
                  </Button>
                </div>
                <div className="flex items-center gap-3 mt-[30px]">
                  <p>Connect with us on:</p>
                  <div className="flex gap-5">
                    <FaTwitter className="text-[#0E8BFF] text-xl" />
                    <RiInstagramFill className="text-[#0E8BFF] text-xl" />
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-0 transform lg:translate-x-6 flex items-center justify-center rounded-full text-4xl md:text-5xl lg:text-6xl text-[#26395C] border-none outline-none"
            >
              <GoChevronRight />
            </button>
          </div>
          <div className="flex justify-center items-center gap-2 mt-6">
            {CarouselData.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-[#26395C]" : "bg-gray-300"
                }`}
                onClick={() => handleClick(index)}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Carousel;
