import React from 'react';
import { render } from '@testing-library/react';
import Home from './home';


describe('<Home />', () => {
  const clientIdMock = '12345678';
  const scopeMock = 'read:org';
  const redirectUrlMock = 'http://unit.test/oauth/redirect/';

  it('Test the Home page render', () => {
    const { container } = render(
      <Home clientId={clientIdMock} scope={scopeMock} redirectUrl={redirectUrlMock} />,
    );

    const link = container.querySelector('.login');
    expect(link!.textContent)
      .toBe('Log in on GitHub');
    expect(link!.getAttribute('href'))
      .toBe(`https://github.com/login/oauth/authorize?scope=${scopeMock}&client_id=${clientIdMock}&redirect_uri=${redirectUrlMock}`);
  });
});
