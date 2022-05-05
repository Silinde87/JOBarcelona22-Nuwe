import { Story, Meta } from '@storybook/react/types-6-0';
import Typography, { Types } from './Typography';
import { TypographyProps } from './Typography.types';
import { theme } from '../../themes/theme';
import { getColorsFromTheme } from '../../shared/utils/getColorsFromTheme';

export default {
  title: 'Atoms/Typography',
  component: Typography,
} as Meta;

const Template: Story<TypographyProps> = (args) => {
  return <Typography {...args}>Aceptar</Typography>;
};

export const Default = Template.bind({});

Default.args = {
  type: Types.H1,
  color: theme.gray800,
};

Default.argTypes = {
  style: { table: { disable: true } },
  weight: { table: { disable: true } },
  size: { table: { disable: true } },
  color: {
    control: { type: 'select', options: getColorsFromTheme() },
  },
};

Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
