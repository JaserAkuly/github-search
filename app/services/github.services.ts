import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string;
    private client_id = "5f3dd0f40c25d0a8e935";
    private client_secret = "ab2437023283e61dfae2428a404097baeddef4a9";

    constructor(private _http: Http) {
        console.log("Github Service Ready..")
        this.username = 'jaserakuly';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' +this.username+ '?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());  
    }

        getRepos() {
        return this._http.get('http://api.github.com/users/' +this.username+ '/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());  
    }

    updateUser(username:string){
        this.username = username;
    }
}

