import { renderComponent } from './themeWrapper';

describe('themeWrapper test set', () => {
  test('Should render an html element as a child', () => {
    const { container } = renderComponent(<div />);

    expect(container.children.length).toBe(1);
    expect(container.children[0].tagName).toBe('DIV');
  });
});
