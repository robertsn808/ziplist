// Function combines two arrays into a single array by alternating elements from each array

function zipList<A, B>(array1: (A & B)[], array2: (A & B)[]): (A & B)[] {
  const result: (A & B)[] = [];

  // Get the minimum length of the two arrays
  const minLength = Math.min(array1.length, array2.length);

  // Loop through the arrays and add elements to the result array
  for (let i = 0; i < minLength; i++) {
    result.push(array1[i], array2[i]);
  }

  console.log(result);
  return result;
}
// Functional way
const zipListTheFunctionalWay = <A, B>(array1: (A & B)[], array2: (A & B)[]): (A & B)[] => {

  // result being used for console.log()..Use the reduce method to combine the two arrays
  const result = array1.reduce<(A & B)[]>((acc, _, index) => {
      
    // Add the elements from the two arrays to the acc array    
      acc.push(array1[index], array2[index]);
      return acc;
  }, []);

  console.log(result);
  return result;
}
  // Test the functions
  zipList([1, 2, 3], ['a', 'b', 'c']);
  zipListTheFunctionalWay([1, 2, 3], ['a', 'b', 'c']);

