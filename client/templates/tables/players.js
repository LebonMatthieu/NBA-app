Template.playersTable.helpers({
  teamPlayers: function(){
    var selectedTeam = Session.get('selectedTeamCode');
    return Players.find({ team : selectedTeam });
  }
});

Template.playersTable.events = {
  'click #add-my-player' : function(){
    var myPlayer = this._id;
    Meteor.call('insertMyPlayer' , myPlayer);
  }
}
