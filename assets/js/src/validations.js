  // if($('main').has('form')){
    $.validator.addMethod('phonenumber', function (value) {
      return /^0[0-9]{9}/.test(value);
    });
    $.validator.methods.email = function( value, element ) {
      return this.optional( element ) || /[a-z]+@[a-z]+\.[a-z]+/.test( value );
    }

  $('body').children().not('nav').find('form').validate(
    {
      rules: {
        name: "required",
        surname: "required",
        phone_number:{
          required: true,
          phonenumber: true
        },
        email: {
          required: true,
          email: true
        },
        message: "required",
      },
      messages: {
        name: "Please enter your first name",
        surname: "Please enter your surname",
        phone_number: "Please enter a valid Phone Number Including Area Code",
        email: "Please enter a valid email address",
        message: "You Need to write something!"
      },
      // submitHandler: function(form) {
      //   // form.submit();
      // }
    }
  );
// }