import * as request from 'request';
import { User } from './User';

export class GithubApiService{
    getUserInfo(userName: string, 
        callback: (user: User) => any){

        let options: any = {
            headers: {
                'User-Agent': 'request'
            },
            json: true
        }  

        request.get("https://api.github.com/users/" + userName,
        options,
        (error: any, response: any, body: any) => {
            let user = new User(body);            
            callback(user);
        })
    }

    getRepos(){

    }
}