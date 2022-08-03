//-------------------------------------nav-kv-------------------------
$(window).scroll(function(){
    $('html, body').addClass('nav-scroll');
    // console.log('.nav offset top:',$('.nav').offset().top);
    // console.log('$(window).scrollTop():',$(window).scrollTop());

    if($(window).scrollTop() == 0){
        $('html, body').removeClass('nav-scroll');
    }
})


$('.nav>li>a').hover(function(){
    $(this).addClass('color-change');
},function(){
    $(this).removeClass('color-change');
})



$('.nav>li>a').on('click',function(){
    $(this).addClass('current').parent().siblings().children().removeClass('current');
})


$(window).scroll(function(){
    // console.log('section1 offset().top:',$('#top').offset().top);
    // console.log('scrollTop:',$(window).scrollTop());
    console.log('section2 offset().top:',$('#about-us').offset().top);
    console.log('scrollTop:',$(window).scrollTop());
    // console.log('section3 offset().top:',$('#our-classes').offset().top);
    
    if($(window).scrollTop() >= $('#top').offset().top - $(window).height()*3/4 && $(window).scrollTop() <= $('#about-us').offset().top - $(window).height()*3/4){
        $('.nav>li:nth-child(1)>a').addClass('current color-change').parent().siblings().children().removeClass('current color-change');
       
    }
    else if($(window).scrollTop() >= $('#about-us').offset().top - $(window).height()*3/4 && $(window).scrollTop() <= $('#our-classes').offset().top - $(window).height()*3/4){
        $('.nav>li:nth-child(2)>a').addClass('current color-change').parent().siblings().children().removeClass('current color-change');
        
    }
    else if($(window).scrollTop() >= $('#our-classes').offset().top - $(window).height()*3/4 && $(window).scrollTop() <= $('#teachers').offset().top - $(window).height()*3/4){
        $('.nav>li:nth-child(3)>a').addClass('current color-change').parent().siblings().children().removeClass('current color-change');
        
    }
    else if($(window).scrollTop() >= $('#teachers').offset().top - $(window).height()*3/4 && $(window).scrollTop() <= $('#contact').offset().top - $(window).height()*3/4){
        $('.nav>li:nth-child(4)>a').addClass('current color-change').parent().siblings().children().removeClass('current color-change');
        
    }
    else if($(window).scrollTop() >= $('#contact').offset().top - $(window).height()*3/4){
        $('.nav>li:nth-child(5)>a').addClass('current color-change').parent().siblings().children().removeClass('current color-change');
        
    }

})

$('.nav>li:eq(0)>a').click(function(){
    $('html, body').animate({'scrollTop':$('#top').offset().top},2000);
   
})
$('.nav>li:eq(1)>a').click(function(){
    $('html, body').animate({'scrollTop':$('#about-us').offset().top},2000);
   
})
$('.nav>li:eq(2)>a').click(function(){
    $('html, body').animate({'scrollTop':$('#our-classes').offset().top},2000);
    
})
$('.nav>li:eq(3)>a').click(function(){
    $('html, body').animate({'scrollTop':$('#teachers').offset().top},2000);
    
})
$('.nav>li:eq(4)>a').click(function(){
    $('html, body').animate({'scrollTop':$('#contact').offset().top},2000);
 
})

// ---------------------------------------------menu-mobile------------

$('.menu-button').click(function(){
    $('#Menu').removeClass('menu-close');
    // console.log("Clicked menu");
    $('#Menu').toggleClass('menu-open');
    $('.menu-button>span').toggleClass('menu-open');
    
})
$('#menuList>li>a').click(function(){
    $('#Menu').removeClass('menu-close');
    $('#Menu').removeClass('menu-open');
    $('#Menu').addClass('menu-close');

})
$('#menuList>li:eq(0)>a').click(function(){
    $('html, body').animate({'scrollTop':$('#top').offset().top},2000);
    // $('#Menu').removeClass('menu-open');
})
$('#menuList>li:eq(1)>a').click(function(){
    $('html, body').animate({'scrollTop':$('#about-us').offset().top},2000);
    // $('#Menu').removeClass('menu-open');
})
$('#menuList>li:eq(2)>a').click(function(){
    $('html, body').animate({'scrollTop':$('#our-classes').offset().top},2000);
    
})
$('#menuList>li:eq(3)>a').click(function(){
    $('html, body').animate({'scrollTop':$('#teachers').offset().top},2000);
    
})
$('#menuList>li:eq(4)>a').click(function(){
    $('html, body').animate({'scrollTop':$('#contact').offset().top},2000);
 
})

// -----------------------------about us-----------------------------
$(window).scroll(function(){
    $('.cube').removeClass('ani');
    if($(window).scrollTop() >= $('#about-us').offset().top - $(window).height()*1/4 && $(window).scrollTop() <= $('#our-classes').offset().top - $(window).height()){
        console.log('ani');
        $('.cube').addClass('ani');
    }
})


// ----------------------------------our classes---------------------
$('.lable1').click(function(){
            $('.tab-yoga').toggleClass('changePage');
            $('.fa-angles-right').toggleClass('opr');
            $('.fa-angles-left').toggleClass('opl');
            $('.classes-pilates').toggleClass('opacity')
            // $('.classes-pilates').remove();
        })



        $('.yoga-class-name:nth-child(1)').on('mouseenter', function() {
            $('.yoga-class-name.active').removeClass('active');
            $('.yoga-class-images li.show').removeClass('show');
            $('.yoga-class-images li:nth-child(1)').addClass('show');
            $('.yoga-class-name:nth-child(1)').addClass('active');
                    
        })
        $('.yoga-class-name:nth-child(1)').on('click', function(){
            $('.yoga-class-images li.textShow').removeClass('textShow');
            $('.yoga-class-images li:nth-child(1)').addClass('textShow');
        })
        $('.yoga-class-name:nth-child(2)').on('mouseenter', function() {
            $('.yoga-class-name.active').removeClass('active');
            $('.yoga-class-images li.show').removeClass('show');
            $('.yoga-class-images li:nth-child(2)').addClass('show');
            $('.yoga-class-name:nth-child(2)').addClass('active');
                    
        })
        $('.yoga-class-name:nth-child(2)').on('click', function(){
            $('.yoga-class-images li.textShow').removeClass('textShow');
            $('.yoga-class-images li:nth-child(2)').addClass('textShow');
        })
        $('.yoga-class-name:nth-child(3)').on('mouseenter', function() {
            $('.yoga-class-name.active').removeClass('active');
            $('.yoga-class-images li.show').removeClass('show');
            $('.yoga-class-images li:nth-child(3)').addClass('show');
            $('.yoga-class-name:nth-child(3)').addClass('active');
                    
        })
        $('.yoga-class-name:nth-child(3)').on('click', function(){
            $('.yoga-class-images li.textShow').removeClass('textShow');
            $('.yoga-class-images li:nth-child(3)').addClass('textShow');
        })

        $('.yoga-class-name:nth-child(1)').trigger('mouseenter');   
        $('.yoga-class-name:nth-child(1)').trigger('click'); 
        

        $('.pilates-class-name:nth-child(1)').on('mouseenter', function() {
            $('.pilates-class-name.active').removeClass('active');
            $('.pilates-class-images li.show').removeClass('show');
            $('.pilates-class-images li:nth-child(1)').addClass('show');
            $('.pilates-class-name:nth-child(1)').addClass('active');
                    
        })
        $('.pilates-class-name:nth-child(1)').on('click', function(){
            $('.pilates-class-images li.textShow').removeClass('textShow');
            $('.pilates-class-images li:nth-child(1)').addClass('textShow');
        })
        $('.pilates-class-name:nth-child(2)').on('mouseenter', function() {
            $('.pilates-class-name.active').removeClass('active');
            $('.pilates-class-images li.show').removeClass('show');
            $('.pilates-class-images li:nth-child(2)').addClass('show');
            $('.pilates-class-name:nth-child(2)').addClass('active');
                    
        })
        $('.pilates-class-name:nth-child(2)').on('click', function(){
            $('.pilates-class-images li.textShow').removeClass('textShow');
            $('.pilates-class-images li:nth-child(2)').addClass('textShow');
        })
        $('.pilates-class-name:nth-child(3)').on('mouseenter', function() {
            $('.pilates-class-name.active').removeClass('active');
            $('.pilates-class-images li.show').removeClass('show');
            $('.pilates-class-images li:nth-child(3)').addClass('show');
            $('.pilates-class-name:nth-child(3)').addClass('active');
                    
        })
        $('.pilates-class-name:nth-child(3)').on('click', function(){
            $('.pilates-class-images li.textShow').removeClass('textShow');
            $('.pilates-class-images li:nth-child(3)').addClass('textShow');
        })

        $('.pilates-class-name:nth-child(1)').trigger('mouseenter');  
        $('.pilates-class-name:nth-child(1)').trigger('click'); 
        


