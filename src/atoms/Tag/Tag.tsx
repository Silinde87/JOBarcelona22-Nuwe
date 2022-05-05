import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Types } from '../Typography';
import { TagText, TagWrapper } from './Tag.styled';
import { TagProps } from './Tag.types';

/**
 * Component used to render a Tag
 *
 * @component
 * @example
 * <Tag id={'id'} text={'text} dataTestId={'tag'} />
 */
const Tag: React.FC<TagProps> = ({ text, id, dataTestId = 'tag', ...otherProps }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <TagWrapper data-testid={dataTestId} id={id} {...otherProps}>
      <TagText color={themeContext.gray200} type={Types.P}>
        {text}
      </TagText>
    </TagWrapper>
  );
};

export default Tag;
