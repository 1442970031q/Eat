import axios from 'axios'

export default function (url, param = {}, type = "GET") {
    let promise;
    if (type === "GET") {
        let urlStr = '';
        let obj = Object.keys(param);
        obj.forEach((key, index) => {
            urlStr += key + '=' + param[key] + '&';
        });
        if (obj.length>0) {
            urlStr = urlStr.substring(0, urlStr.lastIndexOf('&'));
            url=url+'?'+urlStr;
        }

        promise = axios.get(url);
    }

    if (type === "POST") {
        promise = axios.post(url, param);
    }

    let ajax = new Promise((res, rej) => {
        promise.then(
            (success) => {
                res(success.data);
            }
        ).catch(
            (error) => {
                rej(error);
            }
        )
    });

    return ajax
}