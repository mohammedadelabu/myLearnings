const anObject = {
    first: 123,
    second: 'string',
    third: {
        fourth: {
            fifth: {
                sixth: {
                    seventh: 5,
                },
                eight: 10,
            }
        }
    }
}


function printAllObjectValues(obj, key){
    if(typeof obj[key] === 'object'){
        return printAllObjectValues(obj[key], key)
    }
    return obj[key]
}
