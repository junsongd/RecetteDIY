Ext.define("RecetteDIY.view.PropositionView", {
  extend: 'Ext.Container',
  xtype: 'propositionview',
  config: {
    id: 'propositionview',
    width: '100%',
    flex: 1, 
    layout: 'fit',
    items:[
      {
        xtype: 'tdltabpanel',
        id: "decisionview_tabbar",
        tabBarPosition: 'top',
        tabBar: {
          cls:'tabbarmenu',
          layout:  {
            pack : 'center',
            align: 'center'  
          }, 

        },
        items: [
          {
            title: 'Variétés' ,
            xtype:'navigationview',
            id: "variety_navigation_view",
            scrollable: true,
            defaultBackButtonText: ' ', 
            navigationBar : {
              docked : 'top',
              cls: 'variety-navigation-bar',
              items : [
                {
                  xtype: 'button',
                  html: 'i',
                  cls:'buttoninfo',
                  align : 'right',
                  listeners:{
                    tap : function () {

                     } 
                  }
                }
              ]
            },
            items:[
              { 
                
              } 
            ]
          },
          {
            title: 'Maladies',
            xtype:'navigationview',
            id: "disease_navigation_view", 
            defaultBackButtonText: ' ',
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
                     } 
                  }
                }
              ]
            },
            items : [ 
              { 
                 
              } 
            ]
          }
        ]
      }
    ]
  },

  initialize: function() {
  }
});