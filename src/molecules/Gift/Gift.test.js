import Gift from './Gift';
import { renderComponent } from '../../shared/test/themeWrapper';
import { theme } from '../../themes/theme';
import { fireEvent } from '@testing-library/react';

const args = {
  title: 'Crew 🎉',
  description: 'Lista de regalos para el grupo crew 🎉',
  tags: [
    { id: '0001', text: 'Deportes de riesgo' },
    { id: '0002', text: 'Libros' },
  ],
};

describe('Gift Component', () => {
  test('should render a Gift component with a title, description and tags', () => {
    const { queryByTestId } = renderComponent(<Gift {...args} />);
    const giftComponent = queryByTestId('gift-component');

    const titleComponent = giftComponent.querySelector('h3');
    const descriptionComponent = giftComponent.querySelector('p');
    const tagsWrapper = giftComponent.querySelector('[data-testid="tags-wrapper"]');
    const tagsComponents = [...tagsWrapper.children];

    expect(titleComponent.innerHTML).toBe(args.title);
    expect(descriptionComponent.innerHTML).toBe(args.description);
    expect(tagsComponents.length).toBe(args.tags.length);
    tagsComponents.forEach((tagComponent, index) =>
      expect(tagComponent.children[0].innerHTML).toBe(args.tags[index].text)
    );
  });

  test('should render a Gift component without tags', () => {
    const { queryByTestId } = renderComponent(<Gift {...args} tags={[]} />);
    const giftComponent = queryByTestId('gift-component');

    const tagsWrapper = giftComponent.querySelector('[data-testid="tags-wrapper"]');
    const tagsComponents = [...tagsWrapper.children];

    expect(tagsComponents.length).toBe(0);
  });

  test('should execute a function onClick', () => {
    const onClick = jest.fn();
    const { queryByTestId } = renderComponent(<Gift onClick={onClick} {...args} />);
    const giftComponent = queryByTestId('gift-component');

    expect(onClick).not.toHaveBeenCalled();
    fireEvent.click(giftComponent);
    expect(onClick).toHaveBeenCalled();
  });

  test('should render a Gift component with right style', () => {
    const { queryByTestId } = renderComponent(<Gift {...args} />);
    const giftComponent = queryByTestId('gift-component');

    expect(giftComponent).toHaveStyle(`
        max-width: 360px;
        max-height: 170px;
        cursor: pointer;
        border: 1.5px solid ${theme.gray500};
        background-color: ${theme.gray200};
    `);
  });
});
