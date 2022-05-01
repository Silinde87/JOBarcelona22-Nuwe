import { fireEvent } from '@testing-library/react';
import { renderComponent } from '../../shared/test/themeWrapper';
import GiftList from './GiftList';

describe('Gift Component', () => {
  test('should render a GiftList component with a title and some gift components', () => {
    const { queryByTestId } = renderComponent(<GiftList {...args} />);
    const giftListComponent = queryByTestId('giftList-component');

    const titleComponent = giftListComponent.querySelector('h2');
    const giftsComponents = giftListComponent.querySelectorAll('[data-testid="gift-component"]');

    expect(titleComponent.innerHTML).toBe(args.title);
    expect(giftsComponents.length).toBe(args.gifts.length);
  });

  test('should render a GiftList component with a title and without gift components', () => {
    const { queryByTestId } = renderComponent(<GiftList {...args} gifts={[]} />);
    const giftListComponent = queryByTestId('giftList-component');

    const titleComponent = giftListComponent.querySelector('h2');
    const giftsComponents = giftListComponent.querySelectorAll('[data-testid="gift-component"]');

    expect(titleComponent.innerHTML).toBe(args.title);
    expect(giftsComponents.length).toBe(0);
  });

  test('should render a GiftList component with a title and some gift components', () => {
    const onClick = jest.fn();
    const customGifts = [
      {
        title: 'title',
        description: 'description',
        tags: [],
        onClick: onClick,
      },
    ];
    const { queryByTestId } = renderComponent(<GiftList {...args} gifts={customGifts} />);
    const giftListComponent = queryByTestId('giftList-component');
    const giftComponent = giftListComponent.querySelectorAll('[data-testid="gift-component"]')[0];

    expect(onClick).not.toHaveBeenCalled();
    fireEvent.click(giftComponent);
    expect(onClick).toHaveBeenCalled();
  });
});

const args = {
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
