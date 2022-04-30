import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Typography, { Types } from '../Typography';
import { TagWrapper } from './Tag.styled';

export type TagProps = {
  children: React.ReactNode;
  dataTestId?: string;
};

const Tag: React.FC<TagProps> = ({ children, dataTestId = 'tag', ...otherProps }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <TagWrapper data-testid={dataTestId} {...otherProps}>
      <Typography color={themeContext.gray200} type={Types.P} style={{ margin: '0' }}>
        {children}
      </Typography>
    </TagWrapper>
  );
};

export default Tag;
