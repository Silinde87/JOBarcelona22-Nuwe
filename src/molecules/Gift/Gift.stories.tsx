import { Story } from '@storybook/react/types-6-0';
import Gift from './Gift';
import { GiftProps } from './Gift.types';

export default {
  title: 'Molecules/Gift',
  component: Gift,
};

const Template: Story<GiftProps> = (args) => {
  const handleClick = (): void => {};
  return <Gift onClick={handleClick} {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  title: 'Crew 🎉',
  description: 'Lista de regalos para el grupo crew 🎉',
  tags: [
    { id: '0001', text: 'Deportes de riesgo' },
    { id: '0002', text: 'Libros' },
  ],
};

Default.argTypes = {
  onClick: { table: { disable: true } },
};

Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
