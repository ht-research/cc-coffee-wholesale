import $ from 'jquery';
const QuickOrder = (function(){


    const init = function(){    
        quickOrderOpen();
        quickOrderClose();
    }


    const quickOrderOpen = function(){
        $('.quick-order-btn').each(function(){
            $(this).on('click', function(e){
              e.preventDefault();
              $(this).siblings('.product--buy-panel-quick-order').fadeIn()
              $('.quick-order-overlay').removeClass('hidden')
            })
        })
    }
    
      
    const quickOrderClose = function(){
      $('.quick-order-close').each(function(){
        $(this).on('click', function(e){
          e.preventDefault();
          $(this).parents('.product--buy-panel-quick-order').fadeOut()
          $('.quick-order-overlay').addClass('hidden')
        })
      })
    }


    return { init }

})()
 

export default QuickOrder;  





