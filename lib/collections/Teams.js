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
    },
    "xmlTeamDatas" : function(){
      HTTP.get('https://www.fantasybasketballnerd.com/service/teams' , {}, function(xmlError,xmlResponse){
        if( xmlError ){
          console.log('xmlError',xmlError);
        }else{
          xml2js.parseString(xmlResponse.content, {explicitArray:false, emptyTag:undefined}, function (jsError, jsResult) {
            if(jsError){
                console.log('xml2js error',jsError);
            }else{
              _.each(jsResult.FantasyBasketballNerd.Team,function(team){
                  Teams.insert(team);
                  console.log('Team imported !');
              })
            }
          })
        }
      })
    }
  });
