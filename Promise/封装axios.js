function Axios(options){
    let {url,method,data} = options;
    if(method==='get'){
        url = url +'?'
        for(let k in data){
            url = url +k +'='+data[k] +'&'
        }
        url = this.baseURL+ url.slice(0,url.length-1);
    }
    return new Promise((resolve,reject)=>{
       let xhr = new XMLHttpRequest();
       xhr.open(method,url);
       xhr.onreadystatechange=function(){
           if(xhr.readyState !=4){
               return;
           }
           if(xhr.status === 200){
               resolve(xhr.responseText);
           }else{
               reject(xhr);
           }
       }
       xhr.send();
    })
}
Axios.prototype.baseURL = 'http://49.232.47.192:9527/api'

Axios.prototype.get = function(url,data){
    let request = new Axios({
        url:url,
        method:'get',
        data,
    })
    return request;
}


// 应用
Axios.prototype.get('/goodList', {
    page: 1,
}).then(res=>{
    let data = JSON.parse(res);
    console.log(data);
})
