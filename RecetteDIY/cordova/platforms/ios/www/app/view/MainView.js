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
            docked: 'top',
            xtype: 'toolbar',
            title: 'Accueil',
            id:'actualite-nav-bar',
            cls:'apptopbar'
          },
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
            docked: 'top',
            xtype: 'titlebar',
            title: 'Recherche',
            id:'disccusion-nav-bar',
            cls:'apptopbar' ,
            items: [ 
                      {
                          xtype:'button',
                          id:'messageBackButton',
                          iconCls:'icon-arrow-left',
                          align: 'left',
                          hidden:true, 
                          listeners: {
                              tap: function() {
                                 
                                  
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

                                         } 
                                      }
                         }
                   ] 
          }, 
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
            docked: 'top',
            xtype: 'titlebar',
            title: 'Communication',
            cls:'apptopbar'
          },
          {
            xtype: "disscutionview" 
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
            xtype: 'contactview',
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
                    Ext.select("#actualiteBackButton").applyStyles("bottom: 10px;"); 
                    Ext.select(".apptopbar").applyStyles("height: 64px; padding-top:10px"); 
                 }
                 else
                 {
                    // if not ios7+
                   Ext.select("#actualiteBackButton").applyStyles("bottom: 6px;");  
                 }   
       }
    }
  }
});