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
            cls:'apptopbar'
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
        scrollable: true,
        items: [
          {
            docked: 'top',
            xtype: 'titlebar',
            title: 'Autre',
            cls:'apptopbar'
          },
          { 
            xtype: 'plusview',
          }
        ]
      }
    ],
    listeners:{ 
      painted : function () { // update the list height   
// ios 7   
                if (window.device &&
                    window.device.platform.toLowerCase() == "ios" &&
                    parseFloat(window.device.version) >= 7.0) {
                     Ext.select(".x-navigation-bar").applyStyles("height:64px;padding-top:15px"); 
                 }  
       }
    }
  }
});