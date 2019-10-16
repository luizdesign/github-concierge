import GitHubConfig from '../../config/github';
import GitHubRepository from '../../repositories/factories/github';
import UserController from '../user';

class UserControllerFactory {
  static make(): UserController {
    return new UserController(
      GitHubConfig.get(),
      GitHubRepository.make(),
    );
  }
}

export default UserControllerFactory;
