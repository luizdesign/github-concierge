import { Response, Request } from 'express';
import { GithubOauthApp } from '../../types/github';
import Home from '../../controllers/home';

const createInstance = (config: GithubOauthApp): Home => new Home(config);
const mock = {
  render: jest.fn(),
};

describe(
  'Test the Home Controller',
  () => {
    it(
      'Testing the mainAction',
      () => {
        // @ts-ignore
        const responseMock: Response = { ...mock };
        const instance = createInstance({
          name: 'Unit test',
          clientId: 'sa51sd561f6sd1f6s',
          redirectUrl: 'http://unit.test/oauth/redirect',
          clientSecretId: 'ads61fsd651f65df1sd65f1s6d1fsfs',
          scope: 'read:org',
        });

        instance.mainAction({} as Request, responseMock);

        expect(responseMock.render)
          .toBeCalledTimes(1);
      },
    );
  },
);
