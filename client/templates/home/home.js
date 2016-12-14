Template.home.helpers({
  teams: function(){
    return Teams.find();
  },
  players: function(){
    return Players.find();
  }
});

Template.home.events({
  'click .logout': function(e){
      e.preventDefault();
      Meteor.logout();
      Router.go('login');
  }
});
