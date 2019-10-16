import React from 'react';

interface User {
  homepage: string;
  avatarUrl: string;
  login: string;
  name: string;
}
interface Props {
  user: User;
}

function User({ user }: Props): JSX.Element {
  return (
    <section>
      <a href={user.homepage}><img src={user.avatarUrl} alt={`User ${user.login} Avatar`} /></a>
      <h1>Hello {user.name}({user.login})!</h1>
    </section>
  );
}

export default User;
