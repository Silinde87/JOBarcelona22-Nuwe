/* istanbul ignore file */
import { ThemeProvider } from 'styled-components';
import { Story, Meta } from '@storybook/react/types-6-0';
import { theme } from './../../themes/theme';
import Typography from './Typography';

export default {
  title: 'Atoms/Typography',
  component: Typography,
} as Meta;

const Template: Story = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography {...args}>This is a text a H1</Typography>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {};

Default.argTypes = {
  style: { table: { disable: true } },
  weight: { table: { disable: true } },
  size: { table: { disable: true } },
  theme: { table: { disable: true } },
};

Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
