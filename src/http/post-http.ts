import {Http} from './http';

export class PostHttp{
     
    private http: Http;
    constructor(){
        this.http = new Http();
    }

    query() {
        this.http.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(responseText){
            console.log(JSON.parse(responseText));
        })
    }
}