import { Mock } from 'ts-mockery';
import axios, { AxiosStatic } from 'axios';
import GithubRepository from '../../repositories/github';

Mock.configure('jest');

const createInstance = (mock: AxiosStatic): GithubRepository => new GithubRepository(mock);

describe(
  'Testing the Github Repository',
  () => {
    const GithubOauthConfigMock = {
      name: 'Unit Test',
      clientId: 'sa0dsa',
      redirectUrl: 'http://unit.test/oauth/redirect',
      clientSecretId: 'sa165sa16sa51d',
      scope: 'read:org',
    };
    const codeAuthorizationMock = '12345678';
    const accessTokenMock = '43ln53jn645kj6n4j5n63l4n3234n';
    const tokenTypeMock = 'bearer';
    const scopeMock = 'read:org';

    it(
      'Testing the getAccessToken method',
      async () => {
        const mockedAxios = Mock.of<AxiosStatic>({
          request: jest.fn().mockResolvedValue({
            data: {
              /* eslint-disable @typescript-eslint/camelcase */
              access_token: accessTokenMock,
              token_type: tokenTypeMock,
              /* eslint-enable @typescript-eslint/camelcase */
              scope: scopeMock,
            },
          }),
        });

        const instance = createInstance(mockedAxios);
        const data = await instance.getAccessToken(
          codeAuthorizationMock,
          GithubOauthConfigMock,
        );

        expect(data).toEqual({
          accessToken: accessTokenMock,
          scope: scopeMock,
          tokenType: tokenTypeMock,
        });
      },
    );

    it(
      'Testing the getUserData method',
      async () => {
        const mockedAxios = Mock.of<AxiosStatic>({
          request: jest.fn().mockResolvedValue({
            data: {
              name: 'Unit test',
              login: 'unittest',
              /* eslint-disable @typescript-eslint/camelcase */
              avatar_url: 'http://unit.test/avatar.jpg',
              html_url: 'http://unit.test/unittest',
              /* eslint-enable @typescript-eslint/camelcase */
            },
          }),
        });
        const instance = createInstance(mockedAxios);
        const data = await instance.getUserData(accessTokenMock);

        expect(data)
          .toEqual({
            name: 'Unit test',
            login: 'unittest',
            avatarUrl: 'http://unit.test/avatar.jpg',
            homepage: 'http://unit.test/unittest',
          });
      },
    );

    it(
      'Testing the getOrgs method',
      async () => {
        const mockedAxios = Mock.of<AxiosStatic>({
          request: jest.fn().mockResolvedValue({
            data: [
              {
                login: 'unittest',
                description: 'Unit test description',
                /* eslint-disable @typescript-eslint/camelcase */
                avatar_url: 'http://unit.test/avatar.jpg',
                /* eslint-enable @typescript-eslint/camelcase */
              },
              {
                login: 'unittest01',
                description: 'Unit test description 01',
                /* eslint-disable @typescript-eslint/camelcase */
                avatar_url: 'http://unit.test/avatar_01.jpg',
                /* eslint-enable @typescript-eslint/camelcase */
              },
            ],
          }),
        });
        const instance = createInstance(mockedAxios);
        const data = await instance.getOrgs(accessTokenMock);

        expect(data)
          .toEqual([
            {
              name: 'unittest',
              description: 'Unit test description',
              avatarUrl: 'http://unit.test/avatar.jpg',
            },
            {
              name: 'unittest01',
              description: 'Unit test description 01',
              avatarUrl: 'http://unit.test/avatar_01.jpg',
            },
          ]);
      },
    );
  },
);
