import { Story } from '@storybook/react/types-6-0';
import Tag from './Tag';

export default {
  title: 'Atoms/Tag',
  component: Tag,
};

const Template: Story = (args) => {
  return <Tag text={args.text} id={args.id} />;
};

export const Default = Template.bind({});

Default.args = {
  text: 'This is a tag',
  id: '01',
};

Default.argTypes = {};

Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
