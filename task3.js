////////////////////////question 3 //////ASCENDING ORDER /////////////////////////////////////
let r=[];
let a=8046957321;
a=new String(a);
// console.log(a);
 for(let i=0;i<a.length;i++)
{
  r.push(Number(a[i]));

}

    let i, j, temp;
    for (i = 0; i < r.length - 1; i++) {
       
        for (j = 0; j < r.length - i - 1; j++) {
            if (r[j] > r[j + 1]) {
                 
        
                temp = r[j];
                r[j] = r[j + 1];
                r[j + 1] = temp;
            
            }
        }
    }
console.log(r);                ///[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]