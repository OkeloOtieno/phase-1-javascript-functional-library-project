function eitherInput(collection){
   return (collection instanceof Array) ? collection.slice() : Object.values(collection)
}
function myEach(collection, cb){
    const newCollection = eitherInput(collection)
    for(let i = 0; i < newCollection.length; i++ ){
        cb(newCollection[i])
    }
  return collection
}

function myMap(collection, cb){
    const newCollection = eitherInput(collection)

    const newArray = []
    for(let i = 0; i < newCollection.length; i++ ){
        newArray.push(cb(newCollection[i]))
    }
    return newArray
}
function myReduce(collection, cb, accumulator){
    let newCollection = eitherInput(collection)
    if(!accumulator){
        accumulator=newCollection[0]
        newCollection=newCollection.slice(1)
    }
    for(let i=0; i<newCollection.length; i++){
        accumulator = cb(accumulator, newCollection[i], newCollection)
    }
    return accumulator
}
function myFind(collection, predicate) {
    const newCollection = eitherInput(collection);
    for (let i = 0; i < newCollection.length; i++) {
    if (predicate(newCollection[i])) return newCollection[i];
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const newCollection = eitherInput(collection);
    const newArray = [];
    for (let i = 0; i < newCollection.length; i++) {
    if (predicate(newCollection[i])) newArray.push(newCollection[i]);
    }
    return newArray;
}
function mySize(collection) {
    const newCollection = eitherInput(collection);
    return newCollection.length;
}
function myFirst(arr, stop = false) {
    return (stop) ? arr.slice(0, stop) : arr[0];
}


function myLast(arr, start = false) {
    return (start) ? arr.slice(arr.length - start, arr.length) : arr[arr.length - 1];
}
function unpack(receiver, arr) {
    for (let val of arr) {
    receiver.push(val);
    }
}
function mySortBy(arr, cb) {
    const newArr = [...arr];
    return newArr.sort(function(a, b) {
    if (cb(a) > cb(b)) {
        return 1;
    } else if (cb(b) > cb(a)) {
        return -1;
    } else {
        return 0;
    }
    });
}
function myKeys(obj) {
    const keys = [];
    for (let key in obj) {
    keys.push(key);
    }
    return keys;
}
function myValues(obj) {
    const values = [];
    for (let key in obj){
    values.push(obj[key]);
    }
    return values;
}