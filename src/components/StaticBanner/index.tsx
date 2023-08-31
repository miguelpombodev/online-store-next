import Image from "next/image";
import * as S from "./styles";

interface StaticBannerProps {
  URI: string;
  imgTitle: string;
}

export function StaticBanner({ URI, imgTitle }: StaticBannerProps) {
  return (
    <S.Container>
      <S.ImageWrapper>
        <Image
          src={URI}
          alt={imgTitle}
          width={0}
          height={0}
          priority
          style={{ width: "100%", height: "auto" }}
        />
      </S.ImageWrapper>
    </S.Container>
  );
}
