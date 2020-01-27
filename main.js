function getdata(method,url){
    return new Promise(function(resolve,reject){
      let xhr = new XMLHttpRequest();
      xhr.open(method,url);
    xhr.onload = function(){
        if(this.status === 200 )
            resolve(xhr.response)
        else{ 
            reject({
                status: this.status,
                statusText: this.responseText
            });
        }
    };    
        xhr.onerror = function(){
           reject({
                status: this.status,
                statusText: this.responseText
            });
        }
        xhr.send(); 
      });
}

getdata('GET','https://jsonplaceholder.typicode.com/todos').then(function(data){
   //console.log(data);
    let todos = JSON.parse(data);
    let out = '';
    for(let todo of todos){
        out += `
        <li>
            <h2>${todo.title}</h2>
            <p>completed : ${todo.completed}</p>
        </il>
    `
    }
document.getElementById('output').innerHTML = out;
    
}).catch(function(err){
    console.log(err);
});
