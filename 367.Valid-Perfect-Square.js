/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    var d=0;
    var returnF=false;
    if(num==1){
       returnF=true; 
    }
    for(var i=2;i<=num/2;i++){
        d=num/i;
        if(d*d==num){
            returnF=true;
            break;
        }
    }
  return returnF;  
};
