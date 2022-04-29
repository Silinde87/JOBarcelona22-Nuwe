/* istanbul ignore file */
import { Story, Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from 'styled-components';
import { theme } from './../../themes/theme';

import Card from './Card';

export default {
  title: 'Atoms/Card',
  component: Card,
} as Meta;

const Template: Story = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <Card {...args}>
        <div style={{ textAlign: 'justify' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula mi non nisl
          vestibulum, pellentesque semper leo auctor. Sed tristique est vitae dui aliquam aliquam.
          Pellentesque sed varius urna, facilisis consequat diam. Nullam scelerisque mollis justo et
          faucibus. Vivamus venenatis, lorem ac tristique rhoncus, elit nulla pellentesque augue, at
          ultricies lectus turpis eget sapien. Morbi finibus euismod tincidunt. Ut et pretium neque,
          ac pharetra orci. Praesent ultrices sagittis semper. Nunc sit amet est eget erat accumsan
          vehicula. Integer feugiat sem nec nunc consequat, eget euismod libero pretium. Sed a urna
          augue. Phasellus purus augue, hendrerit in ultrices nec, volutpat eu nunc. Nullam id nulla
          hendrerit enim suscipit condimentum. Phasellus consequat ex nec turpis vestibulum, vitae
          fringilla lectus imperdiet.
        </div>
      </Card>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

Default.argTypes = {
  theme: { table: { disable: true } },
  dataTestId: { table: { disable: true } },
};

Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
