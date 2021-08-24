console.log('hello');

setTimeout(function(){
    console.log('2');
}, 3000);

console.log('Hello Again');

new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(1);
    }, 4000)
}).then(function(result){
    console.log(result + "then2");
    return result + 1;
}).then(function(result){
    console.log(result + "then");

});

