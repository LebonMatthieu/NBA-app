Template.home.events({
  'click .logout': function(e){
      e.preventDefault();
      Meteor.logout();
      Router.go('login');
  }
});
