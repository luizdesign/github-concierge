import GitHubConfig from '../../config/github';
import GitHubRepository from '../../repositories/github';
import UserController from '../user';

class UserControllerFactory {
  static make(): UserController {
    return new UserController(
      GitHubConfig.get(),
      GitHubRepository,
    );
  }
}

export default UserControllerFactory;
