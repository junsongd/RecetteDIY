Ext.define("RecetteDIY.view.CommunicationView", {
  extend: 'Ext.Container',
  xtype: 'communicationview',
  config: {
    id: 'communicationview',
    width: '100%',
    flex: 1, 
    layout: 'fit',
    
        items: [
          
          {
            title: 'Communication',
            xtype:'navigationview',
            id: "communication_navigation_view",
            defaultBackButtonText: ' ',
            navigationBar : {
              docked : 'top', 
              items : [
                {
                        xtype: 'button', 
                        iconCls:'refresh',
                        align : 'left',
                        listeners:{
                          tap : function () { 
                             RecetteDIY.app.getController('MainController').updateContent();
                          } 
                        }
                },
               
                { 
                            xtype: 'button',
                            id:'disscution-create-button',
                            iconCls: 'compose',
                            align: 'right',
                            listeners:{
                                        tap : function () {
                                           RecetteDIY.app.getController('DisscutionController').showOptions(this); 
                                           
                                        } 
                                      }
                         }
              ]
            },
             items : [ 
                  { 
                    xtype: 'communicationviewcontainer',
                    title: 'Communication'
                  } 
                ]
          }
        ]
    
  },

  initialize: function() {
  }
});