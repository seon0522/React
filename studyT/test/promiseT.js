let promisesss= new Promise(function(resolve, reject){
    // setTimeout(resolve("done"), 3000);
    setTimeout(reject(new Error("에러 발생")), 3000);
    });
    
    promisesss.then(
        function(result){ console.log("결과")},
        function(error){console.log("에러 then")}
    );
    
    promisesss.then(
        function(result){ console.log("결과")}
       
    ).catch(
        function(error){console.log("에러 catch")}
    );