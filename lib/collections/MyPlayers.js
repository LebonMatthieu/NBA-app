MyPlayers = new Meteor.Collection('myPlayers');

Meteor.methods({
  'insertMyPlayer' : function( myPlayer ){
    MyPlayers.insert ({
        myPlayer,
        time: Date.now(),
      });
  }
})
