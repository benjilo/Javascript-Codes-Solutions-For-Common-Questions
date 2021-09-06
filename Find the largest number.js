/*Find the largest number that can be formed with the given digits


Given an array of integers arr[] representing digits of a number. The task is to write a program to generate the largest number possible using these digits.
Note: The digits in the array are in between 0 and 9. That is, 0<arr[i]<9.
Examples: 
 

Input : arr[] = {4, 7, 9, 2, 3}
Output : Largest number: 97432 

Input : arr[] = {8, 6, 0, 4, 6, 4, 2, 7}
Output : Largest number: 87664420 

Efficient Approach: An efficient approach is to observe that we have to form the number using only digits from 0-9. Hence we can create a hash of size 10 to store the number of occurrences of the digits in the given array into the hash table. Where the key in the hash table will be digits from 0 to 9 and their values will be the count of their occurrences in the array.
Finally, print the digits the number of times they occur in descending order starting from the digit 9.
Below is the implementation of above approach: 
 

*/

<script>
 
// Javascript program to generate largest possible
// number with given digits
 
// Function to generate largest possible
// number with given digits
function findMaxNum( arr, n)
{
    // Declare a hash array of size 10
    // and initialize all the elements to zero
    var hash = Array(10).fill(0);
     
    // store the number of occurrences of the digits
    // in the given array into the hash table
    for(var i=0; i<n; i++)
    {
        hash[arr[i]]++;
    }
     
    // Traverse the hash in descending order
    // to print the required number
    for(var i=9; i>=0; i--)
    {
        // Print the number of times a digits occurs
        for(var j=0; j<hash[i]; j++)
            document.write(i);
    }
}
 
// Driver code
var arr = [1, 2, 3, 4, 5, 0];
 
var n = arr.length;
 
findMaxNum(arr,n);
 
</script>