import React from 'react';
import { render } from 'react-testing-library';
import { Modal } from '../';
import { ThemeProvider, theme } from '../';

const customRender = (node, ...options) => {
  const rendered = render(
    <ThemeProvider theme={theme}>{node}</ThemeProvider>,
    options
  );

  return {
    ...rendered,
    rerender: (ui, options) =>
      customRender(ui, { container: rendered.container, ...options })
  };
};

describe('Modal', () => {
  const { rerender } = customRender(
    <Modal width={['100px', '200px', '500px']}>
      <div />
    </Modal>
  );
  test('renders when close', () => {
    const { queryByText } = rerender(
      <ThemeProvider>
        <Modal width={['100px', '200px', '500px']}>
          <div data-content>Content</div>
        </Modal>
      </ThemeProvider>
    );
    expect(queryByText('Content')).toBeFalsy();
  });
  test('renders when open', () => {
    const { queryAllByText, container } = rerender(
      <ThemeProvider>
        <Modal width={['100px', '200px', '500px']} isOpen>
          <div data-content>Content</div>
        </Modal>
      </ThemeProvider>
    );
    expect(queryAllByText('Content')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
  test('renders when enable overflow and disable close button', () => {
    const { queryAllByText, getByTestId, container } = rerender(
      <ThemeProvider>
        <Modal
          width={['100px', '200px', '500px']}
          isOpen
          enableOverflow
          imgMode
        >
          <div data-content>Content</div>
        </Modal>
      </ThemeProvider>
    );
    expect(queryAllByText('Content')).toBeTruthy();
    expect(getByTestId('pcln-modal-close')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
  test('renders when enable header close button', () => {
    const { queryAllByText } = rerender(
      <ThemeProvider>
        <Modal
          width={['100px', '200px', '500px']}
          isOpen
          header={<div>header</div>}
        >
          <div data-content>Content</div>
        </Modal>
      </ThemeProvider>
    );
    expect(queryAllByText('header')).toBeTruthy();
  });
});
