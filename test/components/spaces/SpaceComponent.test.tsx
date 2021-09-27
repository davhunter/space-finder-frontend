import { SpaceComponent } from '../../../src/components/spaces/SpaceComponent';
import ReactDOM from 'react-dom';
import { fireEvent } from '@testing-library/react';
import React from 'react';

describe('Space component test suite', () => {
  let container: HTMLDivElement;
  const reserveSpaceMock = jest.fn();

  function setUpTests(element: React.FunctionComponentElement<any>) {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(element, container);
  }

  function cleanUpTests() {
    document.body.removeChild(container);
    container.remove();
    jest.clearAllMocks();
  }

  describe('Tests with photo URL', () => {
    beforeEach(() => {
      setUpTests(
        <SpaceComponent
          location={'someLocation'}
          name={'someName'}
          reserveSpace={reserveSpaceMock}
          spaceId={'123'}
          photoUrl={'http://some.url/blah.jpg'}
        />
      );
    });

    afterEach(cleanUpTests);

    test('Show image correctly', () => {
      const image = container.querySelector('img');
      expect(image).toBeInTheDocument();
      expect(image!.src).toBe('http://some.url/blah.jpg');
    });

    test('Show labels correctly', () => {
      const labels = container.querySelectorAll('label');
      expect(labels[0]).toHaveTextContent('someName');
      expect(labels[1]).toHaveTextContent('123');
      expect(labels[2]).toHaveTextContent('someLocation');
    });

    test('Reserving spaces', () => {
      const btn = container.querySelector('button');
      fireEvent.click(btn!);
      expect(reserveSpaceMock).toBeCalledWith('123');
    });
  });

  describe('Tests without photo URL', () => {
    beforeEach(() => {
      setUpTests(
        <SpaceComponent
          location={'someLocation'}
          name={'someName'}
          reserveSpace={reserveSpaceMock}
          spaceId={'123'}
        />
      );
    });

    afterEach(cleanUpTests);

    test('Show image correctly', () => {
      const image = container.querySelector('img');
      expect(image).toBeInTheDocument();
      expect(image!.src).toBeFalsy();
    });
  });
});
