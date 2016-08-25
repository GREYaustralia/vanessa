$.validator.addMethod('phonenumber', function (value) {
    return /^0[0-9]{9}/.test(value);
});

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
      },
      messages: {
        name: "Please enter your firstname",
        surname: "Please enter your lastname",
        phone_number: "Please enter a valid Phone Number Including Area Code",
        email: "Please enter a valid email address"
      },
      submitHandler: function(form) {
        form.submit();
      }
    }
  );
// ^0[0-9]{9}