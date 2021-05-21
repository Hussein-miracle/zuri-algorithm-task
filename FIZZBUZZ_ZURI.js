function checkYuGiOh(n){
    //to verify if the values passed into the CheckYuGiOh is valid
    if (isNaN(n) === true) {
        return 'invalid parameter: ' + JSON.stringify(n);
    }
    else {
      const value = multipleFactors(n);
      return value;
    }
  
    // using functions to replace multiple factors (2, 3, 5) to phrases ('yu', 'gi', 'oh')
    function multipleFactors(params) {
      let localvar = [];
      
      for (k = 1; k <= params; k++) {
            if (k % 2 === 0 && k % 3 === 0 && k % 5 === 0) {
                localvar.push("yu-gi-oh");
            } 
            else if (k % 2 === 0 && k % 3 === 0) {
                localvar.push("yu-gi");
            } 
            else if (k % 2 === 0 && k % 5 === 0) {
                localvar.push("yu-oh");
            } 
            else if (k % 3 === 0 && k % 5 === 0) {
                localvar.push("gi-oh");
            } 
            else if (k % 5 === 0) {
                localvar.push("oh");
            } 
            else if (k % 3 === 0) {
                localvar.push("gi");
            } 
            else if (k % 2 === 0) {
                localvar.push("yu");
            } 
            else {
                localvar.push(k);
            }
        }
      
      return localvar;
    }
  };
  
  console.log(checkYuGiOh(10));
  console.log(checkYuGiOh('5'));
  console.log(checkYuGiOh('fizzbuzz is meh'))
