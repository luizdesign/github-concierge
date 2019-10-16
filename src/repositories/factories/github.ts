import Axios from 'axios';
import GithubRepository from '../github';

class GithubRepositoryFactory {
  static make(): GithubRepository {
    return new GithubRepository(
      Axios,
    );
  }
}

export default GithubRepositoryFactory;
