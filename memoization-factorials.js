const cache = {};

const factoFunc = n => {
    if(n===0){
        return 1
    }
    else{
        return n*factoFunc(n-1);
    }
}

const memoFunc = n => {
    if(n in cache){
        console.log('Retrieved from cache');
    }
    else{
        cache[n] = factoFunc(n);
        console.log('Newly created');
    }
    return cache[n];
}

console.log(memoFunc(7)); // New 5040
console.log(memoFunc(5)); // New 120
console.log(memoFunc(7)); // Cached 5040
console.log(memoFunc(4)); // New 24
console.log(memoFunc(5)); // Cached 120