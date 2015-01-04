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
            navigationBar : {
              docked : 'top',
              items : [
                {
                  xtype: 'button',
                  html: 'i',
                  cls:'buttoninfo',
                  align : 'right',
                  listeners:{
                    tap : function () {

                       Ext.getCmp('communication_navigation_view').push(
                                          {
                                            xtype: 'communicationdetailview',
                                            title: 'Detail'
                                          }
                                        );  
                       
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