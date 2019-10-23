import { Response, Request } from 'express';
import { Mock } from 'ts-mockery';
import { GithubAccessData } from '../../types/github';
import { User } from '../../types/user';
import { OrgsList } from '../../types/org';
import GithubRepository from '../../repositories/github';
import UserController from '../../controllers/user';

Mock.configure('jest');

const mockRequest = {
  params: {
    oauth: '123',
  },
};

const mockResponse = {
  render: jest.fn(),
};

const createInstance = (
  repositoryMock: GithubRepository,
): UserController => new UserController(
  {
    name: 'Unit Test',
    clientId: 'sa0dsa',
    redirectUrl: 'http://unit.test/oauth/redirect',
    clientSecretId: 'sa165sa16sa51d',
    scope: 'read:org',
  },
  repositoryMock,
);

describe('Testing the User Controller', () => {
  // @ts-ignore
  const requestMock: Request = { ...mockRequest };
  // @ts-ignore
  const responseMock: Response = { ...mockResponse };

  const userMock = {
    name: 'Unit test',
    login: 'unitest',
    avatarUrl: 'http://unit.test/avatar.jpg',
    homepage: 'http://unit.test/',
  };
  const orgsMock = [
    {
      name: 'testing',
      description: 'unit test case',
      avatarUrl: 'http://unit.test/organization/',
    },
  ];

  it('Testing the mainAction method', async () => {
    const repository = Mock.of<GithubRepository>({
      getAccessToken: (): Promise<GithubAccessData> => Promise.resolve({
        accessToken: '32v4j2v423v',
        scope: 'read:org',
        tokenType: 'bearer',
      }),
      getUserData: (): Promise<User> => Promise.resolve(userMock),
      getOrgs: (): Promise<OrgsList> => Promise.resolve(orgsMock),
    });
    const instance = createInstance(repository);

    await instance.mainAction(
      requestMock,
      responseMock,
    );

    expect(responseMock.render)
      .toHaveBeenCalledTimes(1);
    expect(responseMock.render)
      .toHaveBeenCalledWith(
        'user',
        {
          user: { ...userMock },
          orgs: orgsMock,
        },
      );
  });
});
