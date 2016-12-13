Players = new Meteor.Collection('Players');

Meteor.methods({
    "insert_players":function(){
      Players.insert ({
          name:"Lebron James",
          age:"32 ans",
          mvp: "oui",
        });
    },
    "delete_player":function(){
      Players.remove ({
        _id:"ZnxwR8xbSRfCDJBvA"
      })
    }
  });
