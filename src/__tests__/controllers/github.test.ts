import { Response, Request } from 'express';
import { Mock } from 'ts-mockery';
import GithubController from '../../controllers/github';
import GithubRepository from '../../repositories/github';
import { GithubAccessData } from '../../types/github';

Mock.configure('jest');

const mockResponse = {
  redirect: jest.fn(),
};

const mockRequest = {
  query: {
    code: '123',
  },
  session: {},
};

const createInstance = (
  repositoryMock: GithubRepository,
): GithubController => new GithubController(
  {
    name: 'Unit Test',
    clientId: 'sa0dsa',
    redirectUrl: 'http://unit.test/oauth/redirect',
    clientSecretId: 'sa165sa16sa51d',
    scope: 'read:org',
  },
  repositoryMock,
);

describe('Test the Github Controller', () => {
  it('Testing the mainAction', async () => {
    // @ts-ignore
    const responseMock: Response = { ...mockResponse };
    // @ts-ignore
    const requestMock: Request = { ...mockRequest };

    const repository = Mock.of<GithubRepository>({
      getAccessToken: (): Promise<GithubAccessData> => Promise.resolve({
        accessToken: '32v4j2v423v',
        scope: 'read:org',
        tokenType: 'bearer',
      }),
    });

    const instance = createInstance(repository);
    await instance.mainAction(requestMock, responseMock);

    expect(requestMock.session.accessToken)
      .toBe('32v4j2v423v');

    expect(responseMock.redirect)
      .toBeCalledTimes(1);
    expect(responseMock.redirect)
      .toHaveBeenCalledWith('/user/');
  });
});
