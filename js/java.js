$('#slider_2').owlCarousel({   
    nav:true,
    startPosition:2,
    lop:true,
    rewind:true,
    center:true,
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
 