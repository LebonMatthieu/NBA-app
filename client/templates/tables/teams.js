Template.TeamsTable.helpers({
  teams: function(){
    return Teams.find();
  }
})

Template.TeamsTable.events = {
  'click #read-team-btn' : function(){
    var teamCode = this.code;
    Session.set('selectedTeamCode', teamCode);
  }
}
