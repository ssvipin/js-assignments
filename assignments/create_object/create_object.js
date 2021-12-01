function CreateObject(arr) {
    // Write your code here
    result = {};
    for(var i=0; i<arr.length; i+=2)
    {
        result[arr[i]] = arr[i+1];
    }
    return result;
}

module.exports = CreateObject;
