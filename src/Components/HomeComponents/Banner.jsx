import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";

const Banner = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <div className="relative w-full select-none rounded-2xl overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: ".nextBtn",
          prevEl: ".prevBtn",
        }}
        loop={true}
        speed={800}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="h-[300px] md:h-[500px] lg:h-[600px]"
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full">
              <img src={image} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-br from-black/50 to-black/30"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Text*/}
      <div className="absolute top-1/2 left-24 -translate-y-1/2 z-20 text-white space-y-8">
        <h1 className="text-6xl font-bold">
          Affordable <br /> Price For Car <br /> Servicing
        </h1>
        <p>
          There are many variations of passages of available, but <br />
          the majority have suffered alteration in some form
        </p>
        <div className="flex gap-2">
          <button className="btn">Discover More</button>
          <button className="btn btn-outline">Latest Project</button>
        </div>
      </div>

      {/* custom navigation btn */}
      <div className="absolute bottom-12 right-12 z-10 flex gap-5">
        <div className="prevBtn bg-black/50 text-white p-3 rounded-full cursor-pointer hover:bg-black">
          <GrFormPreviousLink size={24} />
        </div>
        <div className="nextBtn bg-black/50 text-white p-3 rounded-full cursor-pointer hover:bg-black">
          <GrFormNextLink size={24} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
