import React from 'react';
import { User } from '../types/user';
import { Org } from '../types/org';

interface Props {
  user: User;
  orgs: [Org];
}

function UserPage({ user, orgs }: Props): JSX.Element {
  return (
    <section>
      <a href={user.homepage}><img src={user.avatarUrl} alt={`User ${user.login} Avatar`} /></a>
      <h1>Hello {user.name}({user.login})!</h1>

      <ul>
        {
          orgs.map(
            (org: Org): JSX.Element => (
              <li key={org.name}>
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

export default UserPage;
