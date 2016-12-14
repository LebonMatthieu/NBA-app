Template.register.events({
  'submit form.register' : function(e){
    e.preventDefault();
    var username = $('[name=username]').val();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();

    // Because of accounts-password
    Accounts.createUser({
      username: username,
      email: email,
      password: password,
    }, function(error){
    if(error){
        console.log(error.reason); // Output error if registration fails
    } else {
        Router.go("home"); // Redirect user if registration succeeds
    }
  });
    Router.go('home');
  }
});
