import $ from 'jquery';
const GriListSwitch = (function(){


    const init = function(){   
        loadGridListLayout() 
        gridListLayoutSwitch();
    }

    const loadGridListLayout = function(){

        if(defaultActiveView == 'list'){
            $('.layout-switch-btn.list-button').addClass('switch__active')
            $('.layout-switch-btn.grid-button').removeClass('switch__active')
            setTimeout(function(){
                $('.js-collection-list.collection-grid--container').animate({opacity: 1}, 400)
                $('.js-collection-list.collection-grid--container').addClass('list-view-active')
                $('.js-collection-list.collection-grid--container').children('ul').addClass('grid-cols-1').removeClass('xl:grid-cols-3') 
            }, 400)
        }
        else{
            $('.layout-switch-btn.grid-button').addClass('switch__active')
            $('.layout-switch-btn.list-button').removeClass('switch__active')
            setTimeout(function(){
                $('.js-collection-list.collection-grid--container').animate({opacity: 1}, 400)
                $('.js-collection-list.collection-grid--container').removeClass('list-view-active')
                $('.js-collection-list.collection-grid--container').children('ul').removeClass('grid-cols-1').addClass('xl:grid-cols-3')
            }, 400)
        }

    }


    const gridListLayoutSwitch = function(){
        $('.layout-switch-btn').on('click', function(){
            let currentViewSelected = $(this).attr('data-switch')

            $('.js-collection-list.collection-grid--container').animate({opacity: 0}, 400)
            defaultActiveView = currentViewSelected
            loadGridListLayout(); 
        })
    }
    


    return { init, loadGridListLayout }

})()

const {
    init,
    loadGridListLayout
  } = GriListSwitch
  
  export {
    init,
    loadGridListLayout,
    GriListSwitch as default
  };
 

//export default GriListSwitch;  





