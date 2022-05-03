import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Types } from '../Typography';
import { TagText, TagWrapper } from './Tag.styled';

export type TagProps = {
  /** Assigns data-testid of the component */
  dataTestId?: string;
  /** Text label of Tag component */
  text: string;
  /** Unique id of Tag component */
  id: string;
};

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
