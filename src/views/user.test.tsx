import React from 'react';
import { render } from '@testing-library/react';
import User from './user';


describe('<User />', () => {
  const user = {
    name: 'Unit test',
    login: 'unittest',
    avatarUrl: 'http://unit.test/avatar.jpg',
    homepage: 'http://unit.test/',
  };
  const org = {
    name: 'testing',
    description: 'unit test case',
    avatarUrl: 'http://unit.test/organization/',
  };

  it('Test the User page render', () => {
    const { container } = render(
      <User user={user} orgs={[org]} />,
    );

    expect(container.querySelector('h1')!.textContent)
      .toBe('Hello Unit test(unittest)!');
    expect(container.querySelector('ul')!.innerHTML)
      .toBe('<li><a href="/testing/"><img src="http://unit.test/organization/" alt="Avatar to testing organization">Organization testing</a></li>');
  });
});
