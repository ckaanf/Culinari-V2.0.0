import React, { useState } from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

import './MySwiper.css';

import bannerImage1 from "../assets/banner-image1.jpg";
import bannerImage2 from "../assets/banner-image2.jpg";
import bannerImage3 from "../assets/banner-image3.jpg";

const Image = styled.img`
	display: block;
	margin: 0 auto;
	width: 100%;
	height: 100%;

	object-fit: cover;
`;

function MainBanner() {
	const srcArr = [bannerImage1, bannerImage2, bannerImage3];

	return (
		<>
			<Swiper
				pagination={{
					type: "fraction",
				}}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				{srcArr.map((src, index) => {
					return <SwiperSlide key={index}><Image src={src} key={index} alt="배너이미지" /></SwiperSlide>;
				})}
			</Swiper>
		</>
	);
}

export default MainBanner;
