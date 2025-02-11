// Function combines two arrays into a single array by alternating elements from each array
function zipList(array1, array2) {
    var result = [];
    // Get the minimum length of the two arrays
    var minLength = Math.min(array1.length, array2.length);
    // Loop through the arrays and add elements to the result array
    for (var i = 0; i < minLength; i++) {
        result.push(array1[i], array2[i]);
    }
    console.log(result);
    return result;
}
// Functional way
var zipListTheFunctionalWay = function (array1, array2) {
    // result being used for console.log()..Use the reduce method to combine the two arrays
    var result = array1.reduce(function (acc, _, index) {
        // Add the elements from the two arrays to the acc array    
        acc.push(array1[index], array2[index]);
        return acc;
    }, []);
    console.log(result);
    return result;
};
// Test the functions
zipList([1, 2, 3], ['a', 'b', 'c']);
zipListTheFunctionalWay([1, 2, 3], ['a', 'b', 'c']);
