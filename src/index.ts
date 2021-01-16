import {GithubApiService} from './GithubApiService';
import { User } from './User';

console.log('Hello!');

let svc = new GithubApiService();
svc.getUserInfo('mojodna', (user: User) => {
    console.log(user);
});

//https://github.com/StanAlexandru/github-report.git