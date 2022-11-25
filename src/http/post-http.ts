import {Http} from './http';
import Response from './response';
import PostTable from '../components/post-table';
export class PostHttp{
     
    private http: Http;
    constructor(){
        this.http = new Http();
    }

    query() {
        this.http.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(response: Response){
            //console.log(JSON.parse(response.body));
            new PostTable('#my-table>tbody', JSON.parse(response.body), ['title', 'body']).make();
        })
    }
}