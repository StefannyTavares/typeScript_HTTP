import {Http} from './http';
import Response from './response';
export class PostHttp{
     
    private http: Http;
    constructor(){
        this.http = new Http();
    }

    query() {
        this.http.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(response: Response){
            console.log(JSON.parse(response.body));
        })
    }
}