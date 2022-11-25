import Response from './response';

enum HttpVerbs{
    GET = 'GET',
    POST = 'POST'
}

export class Http {
    get(url: string): Promise<Response>{
        let xhttp = this.createXhttp(HttpVerbs.GET, url)
        return new Promise((resolve, reject) => {
            let xhttp = this.createXhttp(HttpVerbs.GET, url);
            this.configureCallbacks(xhttp, resolve, reject);
            xhttp.send();
        });
        
    }

    private createXhttp(verb: HttpVerbs, url:string){
        let xhttp = new XMLHttpRequest();
        xhttp.open(verb, url, true);
        return xhttp;
    }

    private configureCallbacks(xhttp, resolve, reject){
        xhttp.onreadystatechange = function (){
            if (this.readyState == 4){
                const response = new Response(this.responseText, this.status)
                    if (this.status == 200){
                        resolve(response);
                    }
            }
            if(this.readyState == 4 && this.status == 200){
                resolve(this.responseText);
            }
           //reject(this.responseText)
        };

    }
}