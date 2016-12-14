Template.login.events({
  'submit form.login' : function(e){
    e.preventDefault();
    var username = $('[name=username]').val();
    var password = $('[name=password]').val();
    Meteor.loginWithPassword(username, password, function( error ){
      if(error){
    console.log(error.reason);
      } else {
          Router.go("home");
      }
  });
  }
});
