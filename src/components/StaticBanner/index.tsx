import Image from "next/image";
import * as S from "./styles";

interface StaticBannerProps {
  URI: string;
  imgTitle: string;
}

export function StaticBanner({ URI, imgTitle }: StaticBannerProps) {
  return (
    <S.Container>
      <Image
        src={URI}
        alt={imgTitle}
        width={0}
        height={0}
        sizes="(max-width: 768px)50vw, (min-width: 769px)100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </S.Container>
  );
}
