let myPromise = new Promise(args)
        function args(myResolve, myReject) {
               let numb1 = +prompt ("Enter number 3:");
               let numb2 = +prompt ("Enter number 7:");
               checkNumbers(userInput1, userInput2)
               .then(result => {
                 console.log(`Calculation result: ${result}`);
               })
               .catch(error => {
                 console.error(`Error: ${error}`);
               });
        if(typeof numb1 + numb2 == 'numbers')
              
        
             myResolve(`the numbers entered is equal to 10`) 
          myReject(`unfortunately the numbers entered is not a equal to 10`)  
        };
        myPromise.then(
            myResolve=> console.log(myResolve),
            myRejected=> console.log(myRejected)
           )

  
 





           