Teams = new Meteor.Collection('teams');

Meteor.methods({
    "insertTeam":function( team ){
      Teams.insert ({
          team,
          time: Date.now(),
        });
    },
    "deleteTeam":function( teamId ){
      Teams.remove ({
        _id: teamId
      })
    }
  });
