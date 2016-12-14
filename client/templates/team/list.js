Template.teamList.helpers({
  teams: function(){
    return Teams.find();
  }
})

Template.teamList.events = {
  'click #delete-team-btn':function(e){
    e.preventDefault();
    var teamId = this._id;

    console.log("Team deleted !");
    Meteor.call("deleteTeam" , teamId);
  }
}
