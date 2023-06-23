import $ from 'jquery';
const QuickOrder = (function(){


    const init = function(){    
        quickOrderOpen();
        quickOrderClose();
    }


    const quickOrderOpen = function(){
        //$('.quick-order-btn').each(function(){ 
            $(document).on('click', '.quick-order-btn',  function(e){
              e.preventDefault();

              if($(this).siblings('.product--buy-panel-quick-order').find('[data-value="5 lb"]')){	
                $(this).siblings('.product--buy-panel-quick-order').find('[data-value="5 lb"]').trigger('click')	
              }
             
              $(this).siblings('.product--buy-panel-quick-order').css('display', 'block')
              $('.quick-order-overlay').removeClass('hidden')
            })
        //})
    }
    
      
    const quickOrderClose = function(){
     // $('.quick-order-close').each(function(){
        $(document).on('click','.quick-order-close', function(e){
          e.preventDefault(); 
          
          $(this).parents('.product--buy-panel-quick-order').fadeOut()
          $('.quick-order-overlay').addClass('hidden')
        })
     // })
    }


    return { init }

})()
 

export default QuickOrder;  





