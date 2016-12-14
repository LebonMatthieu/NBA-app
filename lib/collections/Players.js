Players = new Meteor.Collection('players');

Meteor.methods({
    "insertPlayer":function( player ){
      Players.insert ({
          player,
          time: Date.now(),
        });
    },
    "deletePlayer":function( playerId ){
      Players.remove ({
        _id: playerId
      })
    }
  });
