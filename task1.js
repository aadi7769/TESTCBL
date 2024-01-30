


//////////////////////////question 1 ///ARRAY MANIPULATION /////////////////////////////////////

const arr=[-2,5,3,-8,10,-4,7,-9];
/////filter the positive values and summ them

function sumOfPosiives(arr)
{
const num=arr.filter((num)=>(num>0)).reduce((acc,t)=>(acc+t),0);          //// first filter the positive values  
return num;                                                               //////then add these value using reduce function 
}

console.log(sumOfPosiives(arr));


