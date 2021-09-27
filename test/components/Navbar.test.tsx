import { Navbar } from '../../src/components/Navbar';
import ReactDOM from 'react-dom';
import { User } from '../../src/model/Model';
import { StaticRouter } from 'react-router';
import { getByTestId, queryByTestId } from '@testing-library/react';

describe('Navbar test suite', () => {
  let container: HTMLDivElement;
  const someUser: User = {
    email: 'someEmail',
    userName: 'someUserName',
  };
  const baseLink = 'http://localhost';

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  test('Renders correctly with user', () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(
      <StaticRouter>
        <Navbar user={someUser} />
      </StaticRouter>,
      container
    );

    const links = container.querySelectorAll('a');
    expect(links[0].href).toBe(baseLink + '/');
    expect(links[1].href).toBe(baseLink + '/profile');
    expect(links[2].href).toBe(baseLink + '/spaces');
    expect(links[3].href).toBe(baseLink + '/logout');
  });

  test('Renders correctly with user using data test', () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(
      <StaticRouter>
        <Navbar user={someUser} />
      </StaticRouter>,
      container
    );

    const homeLink = getByTestId(container, 'home-link') as HTMLAnchorElement;
    expect(homeLink.href).toBe(baseLink + '/');

    const profileLink = getByTestId(
      container,
      'profile-link'
    ) as HTMLAnchorElement;
    expect(profileLink.href).toBe(baseLink + '/profile');

    const spacesLink = getByTestId(
      container,
      'spaces-link'
    ) as HTMLAnchorElement;
    expect(spacesLink.href).toBe(baseLink + '/spaces');

    const logoutLink = getByTestId(
      container,
      'logout-link'
    ) as HTMLAnchorElement;
    expect(logoutLink.href).toBe(baseLink + '/logout');

    const loginLink = queryByTestId(
      container,
      'login-link'
    ) as HTMLAnchorElement;
    expect(loginLink).not.toBeInTheDocument();
  });

  test('Renders correctly without user using data test', () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(
      <StaticRouter>
        <Navbar user={undefined} />
      </StaticRouter>,
      container
    );

    const homeLink = getByTestId(container, 'home-link') as HTMLAnchorElement;
    expect(homeLink.href).toBe(baseLink + '/');

    const profileLink = getByTestId(
      container,
      'profile-link'
    ) as HTMLAnchorElement;
    expect(profileLink.href).toBe(baseLink + '/profile');

    const spacesLink = getByTestId(
      container,
      'spaces-link'
    ) as HTMLAnchorElement;
    expect(spacesLink.href).toBe(baseLink + '/spaces');

    const logoutLink = queryByTestId(
      container,
      'logout-link'
    ) as HTMLAnchorElement;
    expect(logoutLink).not.toBeInTheDocument();

    const loginLink = getByTestId(container, 'login-link') as HTMLAnchorElement;
    expect(loginLink.href).toBe(baseLink + '/login');
  });
});
