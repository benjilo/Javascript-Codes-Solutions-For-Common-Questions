
    // A Javascript program to count number of
    // ways to express N as sum of
    // consecutive numbers.
     
    // Utility method to compute
    // number of ways in which N
    // can be represented as sum
    // of consecutive number
    function countConsecutive(N)
    {
           
        // constraint on values of L
        // gives us the time
        // Complexity as O(N^0.5)
        let count = 0;
        for (let L = 1; L * (L + 1) < 2 * N; L++)
        {
            let a = ((1.0 * N-(L * (L + 1)) / 2) / (L + 1));
                        
            if (a - parseInt(a, 10) == 0.0)
                count++;    
        }
           
        return count;
    }
     
    let N = 15;
    document.write(countConsecutive(N) + "</br>");
 
    N = 10;
    document.write(countConsecutive(N));
     
