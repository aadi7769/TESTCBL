
////////////////////////question 2 //////Obeject Manipulation /////////////////////////////////////
const students =[
    {name:'Alice',score:85},
    {name:'Bob',score:60},
    {name:'Charlie',score:92},
    {name:'David',score:75}
   
   ];
   
   function getHighScores(students,a)
   {
     let t= students.filter((num)=>(num.score>a)).map((num)=>{return num.name});
     return t;
   }
   
   console.log(getHighScores(students,70));
   
   