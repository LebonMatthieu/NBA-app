Template.config.events = {
  'click .xml-import-teams' : function(e){
    e.preventDefault();
    Meteor.call("xmlTeamDatas");
  },
  'click .xml-import-players' : function(e){
    e.preventDefault();
    Meteor.call("xmlPlayerDatas");
  }
}
