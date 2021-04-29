var str="";
var operator=false;
var toEpt=false;

var input=document.querySelector('.screen');
var items=Array.from(document.querySelectorAll('.button'));
items.forEach(function(btn){
    btn.addEventListener('click',function(){
        if(input.innerHTML=='0'){
            input.innerHTML='0';
            str='0';
        }
        if(btn.innerHTML=='AC'){
            input.innerHTML='0';
            str="0";
            operator=false;
            toEpt=false;
            
        }
        else if(btn.innerHTML=='='){
            if(str.charAt(str.length-1)=='+'||str.charAt(str.length-1)=='-'||str.charAt(str.length-1)=='*'||str.charAt(str.length-1)=='/')
                str = str.substring(0, str.length - 1);
            str=eval(str);
            str+='';
            if(str.length>8){
                var a= parseFloat(str).toExponential(5);
                str=a.toString();
                toEpt=true;
            }          
            input.innerHTML=str;
            str+='';
            operator=false;
        }
        else if(str.length<13 ){
        if(btn.innerHTML=='%'){
            input.innerHTML=input.innerHTML+btn.innerHTML;
            str+='/100';
            str=eval(str);
            str+='';
            if(str.length>8){
                var a= parseFloat(str).toExponential(5);
                str=a.toString();
            } 
            input.innerHTML=str;
        }
        else if(btn.innerHTML=='+/-'){
            input.innerHTML=(input.innerHTML)*(-1);
            str=str*(-1);
        }                
        else if(btn.innerHTML=='x'){
            if(str.charAt(str.length-1)=='+'||str.charAt(str.length-1)=='-'||str.charAt(str.length-1)=='*'||str.charAt(str.length-1)=='/')
                str=str.substring(0, str.length - 1);
            str=eval(str);
            str+='';
            if(str.length>8){
                var a= parseFloat(str).toExponential(5);
                str=a.toString();
            } 
            input.innerHTML=str+'x';
            str=str+'*';
            operator=true;
        }
        else if(btn.innerHTML=='÷'){
            if(str.charAt(str.length-1)=='+'||str.charAt(str.length-1)=='-'||str.charAt(str.length-1)=='*'||str.charAt(str.length-1)=='/')
                str = str.substring(0, str.length - 1);
        
            str=eval(str);
            str+='';
            if(str.length>8){
                var a= parseFloat(str).toExponential(5);
                str=a.toString();
            } 
            input.innerHTML=str+'÷';
            str+='/';
            operator=true;
        }
        else if(btn.innerHTML=='-'){
            if(str.charAt(str.length-1)=='+'||str.charAt(str.length-1)=='-'||str.charAt(str.length-1)=='*'||str.charAt(str.length-1)=='/')
                str=str.substring(0, str.length -1);
            str=eval(str);
            str+='';
            if(str.length>8){
                var a= parseFloat(str).toExponential(5);
                str=a.toString();
            } 
            input.innerHTML=str+'-';
            str+='-';
            operator=true;
        }
        else if(btn.innerHTML=='+'){
            if(str.charAt(str.length-1)=='+'||str.charAt(str.length-1)=='-'||str.charAt(str.length-1)=='*'||str.charAt(str.length-1)=='/')
                str=str.substring(0, str.length - 1);
            str=eval(str);
            str+='';
            if(str.length>8){
                var a= parseFloat(str).toExponential(5);
                str=a.toString();
            } 
            input.innerHTML=str+'+';
            str+='+';
            operator=true;
        }
        else if(btn.innerHTML==','){
            input.innerHTML=(input.innerHTML)+'.';
            str=str+'.';
        }
        else if(btn.innerHTML!="AC" && btn.innerHTML!='=')
         {
            if(input.innerHTML=='0')
                input.innerHTML='';
            if( (str.length>9) && (operator ==false) ){
                var b= parseFloat(btn.innerHTML);
                if(toEpt==true){
                    var a = (parseFloat(str)*10+b);
                    a=a.toExponential(5);
                    str = a.toString();
                }
                else{
                    str=str+btn.innerHTML;
                    var a= parseFloat(str).toExponential(5);
                    toEpt=true;
                    str=a.toString();
                }
                input.innerHTML=str;
            }
            else{
                input.innerHTML+=btn.innerHTML;
                str=str+btn.innerHTML;
            }

                
            
        }
        }
        else
            alert("Full screen")
       
    })
})