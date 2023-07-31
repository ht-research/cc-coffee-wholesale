import $ from 'jquery';

const contactForm = (function() {	
    const selectors = {	
        contactFirstNameError: ".contact-first-name-error",	
        contactLastNameError: ".contact-last-name-error",	
        contactEmailError: ".contact-email-error",	
        contactTextboxError: ".contact-textbox-error",	
        firstNameInputID: "#contact-first-name",	
        lastNameInputID: "#contact-last-name",	
        emailInputID: "#contact-email",	
        textboxInputID: "#contact-body",	
        contactSubmitBtn: ".contact-form-submit",	
    }	
  const init = function(){	
    initEventListeners()	
  }	
  const initEventListeners = function(){	
    $(selectors.contactSubmitBtn).on('click', validateContactForm)	
  }	
  const validateContactForm = function(e){	
    e.preventDefault();	
    let firstNameVal = $(selectors.firstNameInputID).val();	
    let lastNameVal = $(selectors.lastNameInputID).val();	
    let emailVal = $(selectors.emailInputID).val();	
    let textboxVal = $(selectors.textboxInputID).val();	
    const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;	
    if(firstNameVal.length === 0 || lastNameVal.length === 0 || emailVal.length === 0 || textboxVal.length === 0){	
        if(firstNameVal.length === 0){	
            $(selectors.contactFirstNameError).removeClass('hidden')	
        }	
        else{	
            $(selectors.contactFirstNameError).addClass('hidden')	
        }	
        if(lastNameVal.length === 0){	
            $(selectors.contactLastNameError).removeClass('hidden')	
        }else{	
            $(selectors.contactLastNameError).addClass('hidden')	
        }	
        if(emailVal.length === 0){	
            $(selectors.contactEmailError).removeClass('hidden')	
        }	
        else{	
            $(selectors.contactEmailError).addClass('hidden')	
        }	
        if(textboxVal.length === 0){	
            $(selectors.contactTextboxError).removeClass('hidden')	
        }	
        else{	
            $(selectors.contactTextboxError).addClass('hidden')	
        }	
        return;	
    }	
    else{	
        //pattern test email	
        if (!pattern.test(emailVal)){	
            $(selectors.contactEmailError).text('Please enter correct email')	
            $(selectors.contactEmailError).removeClass('hidden')	
            return false;	
        }	
        $('#contact_form').trigger('submit');	
    }	
    	
  } 	
  return { init }	
})()


export default contactForm;  