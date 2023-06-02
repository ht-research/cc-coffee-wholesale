import $ from 'jquery';
const GriListSwitch = (function(){


    const init = function(){    
        gridListLayoutSwitch();
    }


    const gridListLayoutSwitch = function(){
        $('.layout-switch-btn').on('click', function(){
            $(this).addClass('switch__active')
            $(this).siblings().removeClass('switch__active');
        
            let currentViewSelected = $(this).attr('data-switch')

            $('.js-collection-list.collection-grid--container').animate({opacity: 0}, 400)
        
            if(currentViewSelected == 'list'){
               
               setTimeout(function(){
                $('.js-collection-list.collection-grid--container').animate({opacity: 1}, 400)
                $('.js-collection-list.collection-grid--container').addClass('list-view-active')
                $('.js-collection-list.collection-grid--container').children('ul').addClass('grid-cols-1').removeClass('xl:grid-cols-3') 
                //$('.product-card--img-container').children('img').removeClass('product-coffee-image')
               }, 400)
               }
            else{
                setTimeout(function(){
                $('.js-collection-list.collection-grid--container').animate({opacity: 1}, 400)
                $('.js-collection-list.collection-grid--container').removeClass('list-view-active')
                $('.js-collection-list.collection-grid--container').children('ul').removeClass('grid-cols-1').addClass('xl:grid-cols-3')
                }, 400)
            }  
        })
    }
    


    return { init }

})()
 

export default GriListSwitch;  





