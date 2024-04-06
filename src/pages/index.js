import BannerSection from "@/components/BannerSection/BannerSection";
import React from "react";
import bannerImage1 from "../../public/banner/teal-gradient.svg"
export default function Home() {

const bannerData1 = {
  bgImage: bannerImage1?.src
}

  return (
    <>
    <BannerSection data={bannerData1} />
    </>
  );
}
