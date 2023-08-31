import { ReactNode } from "react";
import { Swiper, useSwiper } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import * as S from "./style";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

import "swiper/css";

interface CarouselProps {
  children: ReactNode;
  config: SwiperOptions;
}

export function Carousel({ children, config }: CarouselProps) {
  const swiper = useSwiper();

  return (
    <S.Container>
      <Swiper {...config}>
        {children}
        {config.navigation && (
          <S.SwiperNavButtons>
            <S.SwiperButton
              className="swiper-button-prev"
              onClick={() => swiper.slidePrev()}
            >
              <CaretLeft />
            </S.SwiperButton>
            <S.SwiperButton
              className="swiper-button-next"
              onClick={() => swiper.slideNext()}
            >
              <CaretRight />
            </S.SwiperButton>
          </S.SwiperNavButtons>
        )}
      </Swiper>
    </S.Container>
  );
}
