Template.index.helpers({
  Players: function(){
    return Players.find();
  }
})

Template.index.events = {
  'submit #btn':function(e){
    e.preventDefault();
    console.log("test");
    Meteor.call("insert_players");
  },
  'click #deletebtn':function(e){
    e.preventDefault();
    console.log("test_delete");
    Meteor.call("delete_player");
  }

}
