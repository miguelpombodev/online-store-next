import { Carousel } from "@/components/Carousel";
import { Footer, ItemsChildren } from "@/components/Footer";
import { ProductGallery } from "@/components/ProductGallery";
import { StaticBanner } from "@/components/StaticBanner";
import { api } from "@/lib/axios";
import { Product } from "@/models/Products/product.interface";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
interface SliderItem {
  url: string;
  imageAlt: string;
}

interface BannerProps {
  URI: string;
  imgTitle: string;
}

interface FooterProps {
  Institucional: ItemsChildren[];
  Social: ItemsChildren[];
  Help: ItemsChildren[];
}

interface HomeProps {
  sliderItems: SliderItem[];
  banner: BannerProps;
  footerItems: FooterProps;
  products: Product[];
}

const carouselBannersConfig: SwiperOptions = {
  slidesPerView: 1,
  autoplay: {
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  loop: true,
  speed: 1000,
  modules: [Autoplay],
};

export default function Home({
  sliderItems,
  banner,
  footerItems,
  products,
}: HomeProps) {
  return (
    <>
      <Carousel config={carouselBannersConfig}>
        {sliderItems.map((item) => (
          <SwiperSlide key={item.imageAlt}>
            <Image
              src={item.url}
              alt={item.imageAlt}
              width={0}
              height={0}
              sizes="(max-width: 768px)50vw, (min-width: 769px)100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
        ))}
      </Carousel>
      <ProductGallery products={products} />
      <StaticBanner URI={banner.URI} imgTitle={banner.imgTitle} />
      <Footer
        Help={footerItems.Help}
        Institucional={footerItems.Institucional}
        Social={footerItems.Social}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await api.get<Product[]>("/products", {
    params: {
      orderBy: "asc",
    },
  });

  return {
    props: {
      products: response.data,
      sliderItems: [
        {
          url: "https://static.netshoes.com.br/bnn/l_netshoes/2023-06-30/9940_2006_NS_PROMO_1920X504_CAMPANHA_EXCLUSIVA.gif",
          imageAlt: "slide_1",
        },
        {
          url: "https://static.netshoes.com.br/bnn/l_netshoes/2023-07-13/4031_full_desk.jpg",
          imageAlt: "slide_2",
        },
        {
          url: "https://static.netshoes.com.br/bnn/l_netshoes/2023-07-21/8947_elas.gif",
          imageAlt: "slide_3",
        },
      ],
      banner: {
        URI: "https://static.zattini.com.br/bnn/l_zattini/2023-06-15/3231_1306x350_full2_generica_230614.gif",
        imgTitle: "Outlet Banner",
      },
      footerItems: {
        Institucional: [
          {
            title: "About Us",
            URL: "",
          },
          {
            title: "Blog",
            URL: "",
          },
          {
            title: "Work With Us",
            URL: "",
          },
          {
            title: "Customer Service",
            URL: "",
          },
          {
            title: "Q&A",
            URL: "",
          },
        ],
        Help: [
          {
            title: "My Account",
            URL: "",
          },
          {
            title: "My Orders",
            URL: "",
          },
          {
            title: "Shippings",
            URL: "",
          },
          {
            title: "Payments",
            URL: "",
          },
        ],
        Social: [
          {
            title: "Instagram",
            URL: "",
          },
          {
            title: "Twitter",
            URL: "",
          },
          {
            title: "Facebook",
            URL: "",
          },
        ],
      },
    },
  };
};
