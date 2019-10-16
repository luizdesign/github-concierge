import React from 'react';

interface Props {
  user: string;
}

function User({ user }: Props): JSX.Element {
  return (
    <section>
      <div>{user}</div>
    </section>
  );
}

export default User;
