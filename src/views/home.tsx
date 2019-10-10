import React from 'react';

interface Props {
  name: string;
  status?: boolean;
}

function Home({ name, status }: Props): JSX.Element {
  return (
    <section>
      <h1>Hello {name}</h1>
      <h2>Your status is {status ? 'enabled' : 'disabled'}</h2>
    </section>
  );
}

export default Home;
