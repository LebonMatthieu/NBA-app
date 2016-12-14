Template.playersList.helpers({
  players: function(){
    return Players.find();
  },
  splitName : function( name ){
    var splitName = name.split();

    var lastname = String(splitName[0]).toLowerCase();
    var firstname = String(splitName[1]).toLowerCase();

    return playerName = {
      lastname : lastname,
      firstname : firstname,
    }
  }
})

Template.playersList.events = {
  'click #delete-btn':function(e){
    e.preventDefault();
    var playerId = this._id;

    console.log("PLayer deleted !");
    Meteor.call("deletePlayer" , playerId);
  }
}
