Ext.define('RecetteDIY.controller.RechercheController', {
     extend: 'Ext.app.Controller', 
     config: {
        
    },
    
    init: function() {
      
    },  
    searchPlats : function() {  

            var picker_piment = Ext.getCmp('epice-select');
            var piment  =  picker_piment.getValue();  
            var picker_difficulty = Ext.getCmp('difficulte-select');
            var difficulty  =  picker_difficulty.getValue();
            var picker_time = Ext.getCmp('time-select');
            var time  =  picker_time.getValue();
            var store = Ext.getStore('platstore');
            store.clearFilter();
            store.filter([
                                                
                            { 
                               filterFn: function(item) { 
                                  if (item.get("piment") != null)
                                      return item.get("piment").indexOf(piment) > -1 ;
                                  else
                                      return true;
                               }
                            },
                            { 
                               filterFn: function(item) { 
                                if (item.get("difficulty") != null)
                                    return item.get("difficulty").indexOf(difficulty) > -1 ;
                                else
                                    return true;

                               }
                            }, 
                             { 
                               filterFn: function(item) { 
                                  if (item.get("time") != null)
                                      return item.get("time").indexOf(time) > -1 ;
                                  else
                                      return true;
                               }
                            } 
                        ]);  
    }
 
});
