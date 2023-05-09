let demo=document.querySelector('.demo');
let no0=document.querySelector('#no0');
let no1=document.querySelector('#no1');
let no2=document.querySelector('#no2');
let no3=document.querySelector('#no3');
let no4 =document.querySelector('#no4');
let no5=document.querySelector('#no5');
let no6=document.querySelector('#no6');
let no7=document.querySelector('#no7');
let no8=document.querySelector('#no8');
let no9=document.querySelector('#no9');
let equals=document.querySelector('#equals');
let clear=document.querySelector('#clear');
let add=document.querySelector('#add');
let substract=document.querySelector('#substract');
let multiply=document.querySelector('#multiply');
let divide=document.querySelector('#divide');
//everything is clear all all variables work


let answer=undefined;
let numbers=[...document.querySelectorAll(".number")];
let myArray=[];


numbers.forEach(number => {
    function printer(number)
    {
        //console.log(demo);
        //console.log(number.currentTarget.id);
        let current=document.querySelector(`#${number.currentTarget.id}`);
      //console.log(current.innerHTML);
        if(demo.innerText==answer)
        {
            demo.innerText='';
            demo.innerText=current.innerText;
            return
        }

        if(demo.innerText.length>=9)
        {  
            return
        }
        else if (demo.innerText==``)
        {
            demo.textContent=current.textContent;
            //console.log('print')
        }
        else{demo.textContent=`${demo.textContent}${current.textContent}`;
            //console.log('zrint')
        //console.log(demo.textContent)
    }
    };
    number.addEventListener('click',printer);
});

function reset()
{
    demo.innerText='';
    myArray[0]=null;
    myArray[1]=null;
    myArray[2]=null;
    answer=undefined;
}
clear.addEventListener('click',reset)


//


/*add.addEventListener('click',operate);
substract.addEventListener('click',operate);
multiply.addEventListener('click',operate);
divide.addEventListener('click',operate);*/

let operators=[...document.querySelectorAll('.operator')];

operators.forEach(operator => {

    operator.addEventListener('click',operate);


    function operate()
    {
        if(myArray[0]==null)//first operation
        {
            myArray[0]=demo.innerText;
            myArray[1]=operator.innerText;
            demo.innerText='';
        }    
        else{
            let initial;
        myArray[2]=demo.innerText;
              if(myArray[1]=='+'){initial=Number(myArray[0])+Number(myArray[2])};
              if(myArray[1]=='-'){initial=Number(myArray[0])-Number(myArray[2])};
              if(myArray[1]=='*'){initial=Number(myArray[0])*Number(myArray[2])};
              if(myArray[1]=='/'){initial=Number(myArray[0])/Number(myArray[2])};
              demo.innerText=initial;
          myArray[0]=initial;
          myArray[1]=operator.innerText;
          myArray[2]=null;
          answer=initial;
          console.log(initial,myArray,answer);
        }//when its being pressed again (multi operation)*/
       
    }
    }
    
    );










equals.addEventListener('click',()=>
{
    if(myArray[0]==null||myArray[1]==null){return}
    else
    {
        let initial;
        myArray[2]=demo.innerText;
              if(myArray[1]=='+'){initial=Number(myArray[0])+Number(myArray[2]) ;demo.innerText=initial;answer=initial;};
              if(myArray[1]=='-'){initial=Number(myArray[0])-Number(myArray[2]);demo.innerText=initial;answer=initial;};
              if(myArray[1]=='*'){initial=Number(myArray[0])*Number(myArray[2]);demo.innerText=initial;answer=initial;};
              if(myArray[1]=='/'){initial=Number(myArray[0])/Number(myArray[2]);demo.innerText=initial;answer=initial;};

              myArray[0]=null;
              myArray[1]=null;
              myArray[2]=null;
              console.log(answer);
    };
})

