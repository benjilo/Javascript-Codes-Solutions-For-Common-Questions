function burst3Inplace(str) {
            var i, j, repeat = 0;
            i = 0, j = 1;
            while (j <= str.length) {
                cur = str[j];
                cur = cur || " ";
                if (cur === str[i]) {
                    j++;
                } else {
                    if (j - i >2) {
                        // burst i to j - 1
                        for (k = 0; k < j - i; k++) {
                            
                        }
                        
                        str = str.substring(0, i) + str.substring(j);
                        j = i;
                        
                        // check if there is any chaining
                        k = i - 1;
                        if (k < 0) {
                            // bbbc
                            j++;
                        } else if (str[k] !== str[j]) {
                            // abbbc
                            i = k;
                        } else {
                            // ccbbbc
                            while (k >= 0 && str[k] === str[j]) {
                                k--;
                            }

                            k++;
                            i = k;
                        }
                    } else {
                        i = j;
                        j++;
                    }
                }
            }
            
            return str;
        }
      
      console.log(burst3Inplace("abdccce"));
      console.log(burst3Inplace("abcccb"));
      console.log(burst3Inplace("abcccbb"));
      console.log(burst3Inplace("abcccbbbaad"));