/* eslint-disable no-console */
import { Story } from '@storybook/react/types-6-0';

import GiftList from './GiftList';
import { GiftListProps } from './GiftList.types';

export default {
  title: 'Organisms/GiftList',
  component: GiftList,
};

const Template: Story<GiftListProps> = (args) => {
  return <GiftList {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  title: 'Mis listas de regalos',
  gifts: [
    {
      title: 'Crew 🎉',
      description: 'Lista de regalos para el grupo crew 🎉',
      tags: [
        { id: '0001', text: 'Deportes de riesgo' },
        { id: '0002', text: 'Libros' },
      ],
      onClick: () => console.log('List 01'),
    },
    {
      title: 'School 🎉',
      description: 'Lista de regalos para el grupo school 🎉',
      tags: [
        { id: '0001', text: 'Deportes de equipo' },
        { id: '0002', text: 'Montaña' },
      ],
      onClick: () => console.log('List 02'),
    },
    {
      title: 'Family 🎉',
      description: 'Lista de regalos para el grupo Family 🎉',
      tags: [
        { id: '0003', text: 'Family' },
        { id: '0004', text: 'Sport' },
      ],
      onClick: () => console.log('List 03'),
    },
    {
      title: 'Work 🎉',
      description: 'Lista de regalos para el grupo work 🎉',
      tags: [
        { id: '0005', text: 'Deportes' },
        { id: '0006', text: 'Playa' },
      ],
      onClick: () => console.log('List 04'),
    },
  ],
};

Default.argTypes = {};

Default.parameters = {
  design: {
    type: 'figma',
    urls: '',
  },
};
