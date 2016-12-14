Template.formAddTeam.events = {
  'click .xml-import-teams' : function(e){
    e.preventDefault();
    Meteor.call("xmlTeamDatas");
  },
  'submit #form-insert-team':function(e){
    e.preventDefault();

    var name = document.getElementById('team-name').value,
        number = document.getElementById('team-number').value,
        city = document.getElementById('team-city').value;

    var team = {
          name : name,
          number : number,
          city : city,
    }

    if (name != '' && number != '' && city != '') {
      console.log("Team created !");
      Meteor.call("insertTeam" , team );
      document.getElementById('team-name').value = '';
      document.getElementById('team-number').value = '';
      document.getElementById('team-city').value = '';
    }else{
      console.log('empty fields !')
    }
  }
}
