import JsonP from 'jsonp'
import axios from 'axios'
export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function (err, response) {
                if (response.status == 'success') {
                    resolve(response);
                } else {
                    reject(response.messsage);
                }
            })
        })
    }

    static ajax(options){

        let baseApi = 'https://api.github.com';
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseApi,
                timeout:5000,
                params: (options.data && options.data.params) || ''
            }).then((response)=>{

                if (response.status == '200'){
                    let res = response.data;
                    if (res.code == '0'){
                        resolve(res);
                    }else{
                      console.log(res.msg) 
                    }
                }else{
                    reject(response.data);
                }
            })
        });
    }
}