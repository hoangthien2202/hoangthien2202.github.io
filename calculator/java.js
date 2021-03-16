var show= document.querySelector('.screen');
var str="";
var operator=false;
var input=document.querySelector('.screen');
var items=Array.from(document.querySelectorAll('.button'));
items.forEach(function(btn){
    btn.addEventListener('click',function(){
        if(input.innerHTML=='0'){
            str="";
        }
        if(btn.innerHTML=='AC'){
            input.innerHTML='0';
            str=""
        }
        
        else if(btn.innerHTML=='='){
            input.innerHTML=eval(str);
            str=input.innerHTML;
        }
        else if(btn.innerHTML=='+/-'){
            input.innerHTML=(str)*(-1);
        }                
        else if(this.id=='x'){
            input.innerHTML=(str)+'*';
        }
        else {
            if(input.innerHTML=="0")
                input.innerHTML="";
            str=str+btn.innerHTML;
            input.innerHTML=str;
        }
    })
})


