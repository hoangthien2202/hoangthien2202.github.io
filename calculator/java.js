var str="";
var input=document.querySelector('.screen');
var items=Array.from(document.querySelectorAll('.button'));
items.forEach(function(btn){
    btn.addEventListener('click',function(){
        if(input.innerHTML=='0'){
            input.innerHTML='0';
            str='';
        }
        
        if(btn.innerHTML=='AC'){
            input.innerHTML='0';
            str='';
        }
        else if(btn.innerHTML=='%'){
            input.innerHTML=input.innerHTML+btn.innerHTML;
            str+='/100';
            str=eval(str);
            input.innerHTML=str;
        }
        
        else if(btn.innerHTML=='='){
            str=eval(str);
            input.innerHTML=str;
        }
        else if(btn.innerHTML=='+/-'){
            input.innerHTML=(input.innerHTML)*(-1);
            str=str*(-1);
        }                
        else if(btn.innerHTML=='x'){
            input.innerHTML=(input.innerHTML)+'x';
            str=str+'*';
        }
        else if(btn.innerHTML==','){
            input.innerHTML=(input.innerHTML)+'.';
            str=str+'.';
        }
        else {
            if(input.innerHTML=='0')
                input.innerHTML='';
            input.innerHTML+=btn.innerHTML;
            str=str+btn.innerHTML;
        }
    })
})
