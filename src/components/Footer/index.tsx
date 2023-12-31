import { useState } from "react";
import * as S from "./styles";

export interface ItemsChildren {
  title: string;
  URL: string;
}

interface FooterProps {
  Institucional: ItemsChildren[];
  Social: ItemsChildren[];
  Help: ItemsChildren[];
}

export function Footer({ Help, Institucional, Social }: FooterProps) {
  return (
    <S.Container>
      <S.FooterOptions>
        <S.FooterItemsContainer>
          <S.FooterItemsTitle>Institucional</S.FooterItemsTitle>
          {Institucional.map((instItems, idx) => (
            <S.FooterItems key={idx}>{instItems.title}</S.FooterItems>
          ))}
        </S.FooterItemsContainer>
        <S.FooterItemsContainer>
          <S.FooterItemsTitle>Help</S.FooterItemsTitle>
          {Help.map((helpItems, idx) => (
            <S.FooterItems key={idx}>{helpItems.title}</S.FooterItems>
          ))}
        </S.FooterItemsContainer>
        <S.FooterItemsContainer>
          <S.FooterItemsTitle>Social</S.FooterItemsTitle>
          {Social.map((socialItems, idx) => (
            <S.FooterItems key={idx}>{socialItems.title}</S.FooterItems>
          ))}
        </S.FooterItemsContainer>
      </S.FooterOptions>
      <S.PaymentsOptions>
        <S.PaymentsImage src="//img.ltwebstatic.com/images2_pi/2018/06/06/15282732803587566708.png" />
        <S.PaymentsImage src="//img.ltwebstatic.com/images2_pi/2018/06/06/15282732983375743706.png" />
        <S.PaymentsImage src="//img.ltwebstatic.com/images2_pi/2018/06/06/15282731342688549608.png" />
        <S.PaymentsImage src="//img.ltwebstatic.com/images2_pi/2018/06/06/1528273036537082707.png" />
        <S.PaymentsImage src="//img.ltwebstatic.com/images2_pi/2018/11/14/1542165929465511500.png" />
        <S.PaymentsImage src="//img.ltwebstatic.com/images2_pi/2018/11/14/15421659553667383771.png" />
        <S.PaymentsImage src="//img.ltwebstatic.com/images2_pi/2018/08/15/1534311470399498284.png" />
        <S.PaymentsImage src="//img.ltwebstatic.com/images3_pi/2021/08/10/16285753252c1e710a326167c3218f7485c76887a8.png" />
        <S.PaymentsImage src="//img.ltwebstatic.com/images2_pi/2018/08/31/15356946304173589516.png" />
      </S.PaymentsOptions>
    </S.Container>
  );
}
