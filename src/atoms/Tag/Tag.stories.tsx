import { Story, Meta } from '@storybook/react/types-6-0';
import Tag from './Tag';

export default {
  title: 'Atoms/Tag',
  component: Tag,
} as Meta;

const Template: Story = (args) => {
  return <Tag>This is a Tag</Tag>;
};

export const Default = Template.bind({});

Default.args = {};

Default.argTypes = {
  datTestId: { table: { disable: true } },
};

Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
