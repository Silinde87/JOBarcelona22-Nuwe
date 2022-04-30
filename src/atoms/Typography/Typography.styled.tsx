import styled from 'styled-components';
import { TypographyProps, Weights, Sizes } from './Typography';

const Typographys = {
  H1: styled.h1<TypographyProps>`
    font-size: ${({ size }) => getFontSize(size) || getFontSize(Sizes.XL)};
    line-height: ${({ size }) => getFontHeight(size) || getFontHeight(Sizes.XL)};
    font-weight: ${({ weight }) => getFontWeight(weight) || getFontWeight(Weights.SEMIBOLD)};
    color: ${({ color }) => color};
  `,
  H2: styled.h2<TypographyProps>`
    font-size: ${({ size }) => getFontSize(size) || getFontSize(Sizes.L)};
    line-height: ${({ size }) => getFontHeight(size) || getFontHeight(Sizes.L)};
    font-weight: ${({ weight }) => getFontWeight(weight) || getFontWeight(Weights.SEMIBOLD)};
    color: ${({ color }) => color};
  `,
  H3: styled.h3<TypographyProps>`
    font-size: ${({ size }) => getFontSize(size) || getFontSize(Sizes.M)};
    line-height: ${({ size }) => getFontHeight(size) || getFontHeight(Sizes.M)};
    font-weight: ${({ weight }) => getFontWeight(weight) || getFontWeight(Weights.SEMIBOLD)};
    color: ${({ color }) => color};
  `,
  P: styled.p<TypographyProps>`
    font-size: ${({ size }) => getFontSize(size) || getFontSize(Sizes.S)};
    line-height: ${({ size }) => getFontHeight(size) || getFontHeight(Sizes.S)};
    font-weight: ${({ weight }) => getFontWeight(weight) || getFontWeight(Weights.REGULAR)};
    color: ${({ color }) => color};
  `,
  CAPTION: styled.p<TypographyProps>`
    font-size: ${({ size }) => getFontSize(size) || getFontSize(Sizes.XS)};
    line-height: ${({ size }) => getFontHeight(size) || getFontHeight(Sizes.XS)};
    font-weight: ${({ weight }) => getFontWeight(weight) || getFontWeight(Weights.LIGHT)};
    color: ${({ color }) => color};
  `,
};

const getFontWeight = (weight: string): string => {
  switch (weight) {
    case Weights.LIGHT:
      return '300';
    case Weights.REGULAR:
      return '400';
    case Weights.SEMIBOLD:
      return '600';
  }
};

const getFontSize = (size: string): string => {
  switch (size) {
    case Sizes.XS:
      return '14px';
    case Sizes.S:
      return '18px';
    case Sizes.M:
      return '24px';
    case Sizes.L:
      return '32px';
    case Sizes.XL:
      return '40px';
  }
};

const getFontHeight = (size: string): string => {
  switch (size) {
    case Sizes.XS:
      return '16px';
    case Sizes.S:
      return '20px';
    case Sizes.M:
      return '28px';
    case Sizes.L:
      return '36px';
    case Sizes.XL:
      return '42px';
  }
};

export { Typographys };
