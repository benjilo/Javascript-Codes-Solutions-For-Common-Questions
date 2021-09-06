<script>
 
// JavaScript program to find first
// non-repeating character
// using 1D array and one
// traversal.
     
    /* The function returns index
of the first non-repeating
character in a string. If
all characters are repeating
then returns INT_MAX */
    function firstNonRepeating(str)
    {
        let NO_OF_CHARS = 256;
      
    // Initialize all characters
    // as absent.
    let arr = new Array(NO_OF_CHARS);
    for (let i = 0;
             i < NO_OF_CHARS; i++)
        arr[i] = -1;
  
    // After below loop, the
    // value of arr[x] is going
    // to be index of x if x
    // appears only once. Else
    // the value is going to be
    // either -1 or -2.
    for (let i = 0;
             i < str.length; i++)
    {
        if (arr[str[i].charCodeAt(0)] == -1)
            arr[str[i].charCodeAt(0)] = i;
        else
            arr[str[i].charCodeAt(0)] = -2;
    }
  
    let res = Number.MAX_VALUE;
    for (let i = 0; i < NO_OF_CHARS; i++)
  
        // If this character occurs
        // only once and appears before
        // the current result, then
        // update the result
        if (arr[i] >= 0)
            res = Math.min(res, arr[i]);
  
    return res;
    }
     
    // Driver Code
    let str = "gotoschool";
    let index = firstNonRepeating(str);
    if (index == Number.MAX_VALUE)
        document.write("Either all characters are " +
                       "repeating or string is empty");
    else
        document.write("First non-repeating character"+
                             " is " + str[index]);
     
     
// This code is contributed by patel2127
 
</script>