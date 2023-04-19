import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import ProductItem from "./ProductItem";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProductItemSlider({ data }) {
	return (
		<Swiper
			slidesPerView={5}
			spaceBetween={-10}
			slidesPerGroup={5}
			pagination={{
				clickable: true,
			}}
			speed={700}
			navigation={true}
			loop={true}
			modules={[Navigation]}
			className="mySwiper_productItem"
		>
			{data &&
				data.map((element) => (
					<SwiperSlide key={element.id}>
						<ProductItem
							id={element.id}
							imgUrl={element.productImageDtos[0]?.imgUrl}
							name={element.name}
							price={element.price}
							key={element.id}
						></ProductItem>
					</SwiperSlide>
				))}
		</Swiper>
	);
}

export default ProductItemSlider;
