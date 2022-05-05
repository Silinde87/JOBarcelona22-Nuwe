import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Tag from './../../atoms/Tag';
import { Types, Weights } from './../../atoms/Typography';
import { GiftContainer, TagsWrapper, Title, Description } from './Gift.styled';
import { GiftProps } from './Gift.types';

/**
 * Component used to render a Gift
 *
 * @component
 * @example
 * const tags = TagProps[];
 * <Gift title={'title'} description={'description'} onClick={() => {}} tags={tags} />
 */
const Gift: React.FC<GiftProps> = ({
  dataTestId = 'gift-component',
  title,
  description,
  tags = [],
  ...otherProps
}) => {
  const themeContext = useContext(ThemeContext);
  return (
    <GiftContainer data-testid={dataTestId} {...otherProps}>
      <Title color={themeContext.gray900} type={Types.H3}>
        {title}
      </Title>
      <Description color={themeContext.gray900} weight={Weights.LIGHT}>
        {description}
      </Description>
      <TagsWrapper data-testid="tags-wrapper">
        {tags.map(({ text, id }) => {
          return <Tag text={text} key={id} id={id} />;
        })}
      </TagsWrapper>
    </GiftContainer>
  );
};

export default Gift;
