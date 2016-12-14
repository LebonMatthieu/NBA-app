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
  'click .xml-import-players' : function(e){
    e.preventDefault();
    Meteor.call("xmlPlayerDatas");
  },
  'submit #form-insert':function(e){
    e.preventDefault();

    var firstname = document.getElementById('firstname').value,
        lastname = document.getElementById('lastname').value,
        number = document.getElementById('number').value,
        age = document.getElementById('age').value,
        weight = document.getElementById('weight').value,
        born = document.getElementById('born').value,
        exp = document.getElementById('exp').value,
        team = document.getElementById('team').value;

    var player = {
          firstname : firstname,
          lastname : lastname,
          number : number,
          age : age,
          weight : weight,
          born : born,
          exp : exp,
          team : team,
    }

    if (firstname != '' && lastname != '' && number != '' && age != '' && weight != '' && born != '' && exp != '' && team != '') {
      console.log("PLayer created !");
      Meteor.call("insertPlayer" , player );
      document.getElementById('firstname').value = '';
      document.getElementById('lastname').value = '';
      document.getElementById('number').value = '';
      document.getElementById('age').value = '';
      document.getElementById('weight').value = '';
      document.getElementById('born').value = '';
      document.getElementById('exp').value = '';
      document.getElementById('team').value = '';
    }else{
      console.log('empty fields !')
    }
  },
  'click #delete-btn':function(e){
    e.preventDefault();
    var playerId = this._id;

    console.log("PLayer deleted !");
    Meteor.call("deletePlayer" , playerId);
  }
}
