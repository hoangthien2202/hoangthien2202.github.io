
            $(document).ready(function(){
                var n = 1;
                var x1=document.getElementById("img1");
                var x2=document.getElementById("img2");
                var x3=document.getElementById("img3");
                $("#btn1").click(function(){
                    if(n=1){
                        x1.src="./img/katlimine2.png"
                        x2.src="./img/bgr5.png"
                        x3.src="./img/bgr4.png"
                    }   
                    if(n=2){
                        x1.src="./img/bgr5.png"
                        x2.src="./img/bgr4.png"
                        x3.src="./img/katlimine2.png"
                    } 
    
                    if(n=3){
                        n=1;
                    }
                    else n++;
                }) 
                $("#btn2").click(function(){
                    if(n=1){
                        x1.src="./img/bgr5.png"
                        x2.src="./img/bgr4.png"
                        x3.src="./img/katlimine2.png"
                    }   
                    if(n=2){
                        x1.src="./img/katlimine2.png"
                        x2.src="./img/bgr5.png"
                        x3.src="./img/bgr4.png"
                    } 
                    if(n=1){
                        n=3;
                    }
                    else n--;
                }) 
             })
             $('#slider_2').owlCarousel({
                
                nav:true,
                lop:true,
                rewind:true,
                dots:false,
                margin: 5,
                navText: ["<img src='img/trai.png' width='25px' >","<img src='img/phai.png ' width='25px'>"],
                responsive:{
                  0:{
                  items:1
                 },
                 600:{
                items:3
                  },
                 1000:{
                  items:5
                }
            }       
         });
         $('#slider_3').owlCarousel({
                
            nav:true,
            lop:true,
            rewind:true,
            dots:false,
            margin: 1,
            navText: ["<img src='img/trai.png' width='25px' >","<img src='img/phai.png ' width='25px'>"],
            responsive:{
              0:{
              items:1
             },
             600:{
            items:1
              },
             1000:{
              items:1
            }
        }       
     });
         