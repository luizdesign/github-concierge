import React from 'react';

interface User {
  homepage: string;
  avatarUrl: string;
  login: string;
  name: string;
}
interface Org {
  name: string;
  avatarUrl: string;
}
interface Props {
  user: User;
  orgs: Array<Org>;
}

function User({ user, orgs }: Props): JSX.Element {
  return (
    <section>
      <a href={user.homepage}><img src={user.avatarUrl} alt={`User ${user.login} Avatar`} /></a>
      <h1>Hello {user.name}({user.login})!</h1>

      <ul>
        {
          orgs.map(
            (org: Org): JSX.Element => (
              <li>
                <a href={`/${org.name}/`}>
                  <img src={org.avatarUrl} alt={`Avatar to ${org.name} organization`} />
                  {`Organization ${org.name}`}
                </a>
              </li>
            ),
          )
        }
      </ul>
    </section>
  );
}

export default User;
