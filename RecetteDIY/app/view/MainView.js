Ext.define('RecetteDIY.view.MainView', {
  extend: 'RecetteDIY.view.TDLTabPanel',
  xtype: 'main',
  requires: [
    'Ext.TitleBar',
  ],
  config: {
    id: 'mainview',
    tabBarPosition: 'bottom',
    fullscreen: true,
    tabBar: {
      cls:'footer-tabbar'  
    }, 
    items: [
      {
        title: 'Accueil',
        iconCls: 'accueil-icon',
        cls:'appcontent',
        layout:'fit',
        items: [  
          {
            xtype: 'accueilview'   
          }  
        ]
      },
      {
        title: 'Recherche',
        iconCls: 'recherche-icon', 
        cls:'appcontent', 
         layout:'fit',
        items: [  
          {
            xtype: 'rechercheview'
          }
        ]
      },
      {
        title: 'Communication',
        iconCls: 'communaute-icon', 
        cls:'appcontent', 
        layout:
        {
          type: 'vbox'
        },
        items: [ 
          {
            xtype: "communicationview" 
          },
        ]
      },
      {
        title: 'Propositions',
        iconCls: 'suggestions-icon',
        cls:'appcontent', 
        layout:
        {
          type: 'vbox'
        },
        items: [
          {
            docked: 'top',
            xtype: 'titlebar',
            title: 'Propositions',
            cls:'apptopbar',
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
                      } 
                     ]
          },
          {
            xtype: "propositionview" 
          },
        ]
      },
      {
        title: 'Autre',
        iconCls: 'plus-icon', 
        cls:'appcontent',
         layout:'fit',
         items: [ 
          {
            xtype: "plusview" 
          } 
        ]
      }
    ],
    listeners:{ 
      painted : function () { // update the list height  
         RecetteDIY.app.getController('AccueilController').loadAdvertise();  
          Loading.hide();
       }
    }
  }
});