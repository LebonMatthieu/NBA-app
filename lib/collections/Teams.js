teams = new Meteor.Collection('teams');

Meteor.methods({
    "insert_teams":function(){
      teams.insert ({
          name:"Cleveland Cavaliers",
          nbplayers:"",
        });
    }
  });
