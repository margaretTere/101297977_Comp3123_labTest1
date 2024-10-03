const resolvedPromise = () =>{
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            let success = {'message': 'delayed success!'};
            resolve(success);

        }, 500);
    });

    return promise
};

const rejectedPromise = () =>{
    const promise = new Promise((resolve, reject) => {
        setTimeout(() =>{
                reject({'error': 'delayed exception!'});
            
        }, 500);
    });
    return promise;
}


resolvedPromise()
.then(data => console.log(data));

rejectedPromise()
.catch(err => console.log(err));
