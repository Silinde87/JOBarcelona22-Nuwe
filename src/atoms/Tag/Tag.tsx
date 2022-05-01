import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Types } from '../Typography';
import { TagText, TagWrapper } from './Tag.styled';

export type TagProps = {
  children: React.ReactNode;
  dataTestId?: string;
};

const Tag: React.FC<TagProps> = ({ children, dataTestId = 'tag', ...otherProps }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <TagWrapper data-testid={dataTestId} {...otherProps}>
      <TagText color={themeContext.gray200} type={Types.P}>
        {children}
      </TagText>
    </TagWrapper>
  );
};

export default Tag;
