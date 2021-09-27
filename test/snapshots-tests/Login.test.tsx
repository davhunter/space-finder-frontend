import { Login } from '../../src/components/Login';
import TestRenderer from 'react-test-renderer';

describe('Login component snapshot testing', () => {
  test('initial test', () => {
    const snap = TestRenderer.create(
      <Login authService={{} as any} setUser={{} as any} />
    );
    expect(snap).toMatchSnapshot();
  });
});
