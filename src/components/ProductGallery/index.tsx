import { useState } from "react";
import * as S from "./styles";
import { SwiperOptions } from "swiper/types";
import { Carousel } from "../Carousel";
import { SwiperSlide } from "swiper/react";
import { ProductCard } from "../ProductCard";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Product } from "../../models/Products/product.interface";

const carouselProductsConfig: SwiperOptions = {
  loop: true,
  centeredSlides: true,
  spaceBetween: 40,
  breakpoints: {
    425: {
      slidesPerView: 1.5,
    },
    640: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3.5,
      navigation: {
        enabled: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
    1440: {
      slidesPerView: 4,
      navigation: {
        enabled: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  },
  modules: [Navigation, A11y, Pagination],
};

interface ProductGalleryProps {
  products: Array<Product>;
}

export function ProductGallery({ products }: ProductGalleryProps) {
  return (
    <S.Container>
      <S.Title>You might like'em</S.Title>
      <Carousel config={carouselProductsConfig}>
        {products.map((prod) => (
          <SwiperSlide key={prod.id}>
            <ProductCard product={prod} />
          </SwiperSlide>
        ))}
      </Carousel>
    </S.Container>
  );
}
