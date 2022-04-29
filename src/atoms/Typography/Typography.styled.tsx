import styled from 'styled-components';
import { TypographyStyleProps, Weights, Sizes } from './Typography';

const Typographys = {
  H1: styled.h1<TypographyStyleProps>`
    font-size: ${({ size }) => fontSize[size] || fontSize[Sizes.XL]};
    line-height: ${({ size }) => fontHeight[size] || fontHeight[Sizes.XL]};
    font-weight: ${({ weight }) => fontWeight[weight] || fontWeight[Weights.SEMIBOLD]};
    color: ${({ color }) => color};
  `,
  H2: styled.h2<TypographyStyleProps>`
    font-size: ${({ size }) => fontSize[size] || fontSize[Sizes.L]};
    line-height: ${({ size }) => fontHeight[size] || fontHeight[Sizes.L]};
    font-weight: ${({ weight }) => fontWeight[weight] || fontWeight[Weights.SEMIBOLD]};
    color: ${({ color }) => color};
  `,
  H3: styled.h3<TypographyStyleProps>`
    font-size: ${({ size }) => fontSize[size] || fontSize[Sizes.M]};
    line-height: ${({ size }) => fontHeight[size] || fontHeight[Sizes.M]};
    font-weight: ${({ weight }) => fontWeight[weight] || fontWeight[Weights.SEMIBOLD]};
    color: ${({ color }) => color};
  `,
  P: styled.p<TypographyStyleProps>`
    font-size: ${({ size }) => fontSize[size] || fontSize[Sizes.S]};
    line-height: ${({ size }) => fontHeight[size] || fontHeight[Sizes.S]};
    font-weight: ${({ weight }) => fontWeight[weight] || fontWeight[Weights.SEMIBOLD]};
    color: ${({ color }) => color};
  `,
};

const fontWeight = {
  [Weights.LIGHT]: '300',
  [Weights.REGULAR]: '400',
  [Weights.SEMIBOLD]: '500',
};

const fontSize = {
  [Sizes.S]: '14px',
  [Sizes.M]: '16px',
  [Sizes.L]: '24px',
  [Sizes.XL]: '32px',
};

const fontHeight = {
  [Sizes.S]: '20px',
  [Sizes.M]: '22px',
  [Sizes.L]: '32px',
  [Sizes.XL]: '40px',
};

export { Typographys };
