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
    },
    "xmlPlayerDatas" : function(){
      HTTP.get('https://www.fantasybasketballnerd.com/service/players' , {}, function(xmlError,xmlResponse){
        if( xmlError ){
          console.log('xmlError',xmlError);
        }else{
          xml2js.parseString(xmlResponse.content, {explicitArray:false, emptyTag:undefined}, function (jsError, jsResult) {
            if(jsError){
                console.log('xml2js error',jsError);
            }else{
              _.each(jsResult.FantasyBasketballNerd.Player,function(player){
                  Players.insert(player);
                  console.log('Player imported !');
              })
            }
          })
        }
      })
    }
    });
