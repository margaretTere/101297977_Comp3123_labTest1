const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

function lowerCaseWords(a){
    const promise = new Promise((resolve, reject) =>{
        try{
        const result = [];
        for(e of a){
            if(typeof e === "string"){
                result.push(e.toLowerCase());
            }
        }
            resolve(result);
    }catch(e){
        reject(new Error(e.message));
    }
    });
    return promise;
};

lowerCaseWords(mixedArray)
    .then(data => console.log('Resolved: ', data))
    .catch(err => console.log(`Rejected: ${err}`));