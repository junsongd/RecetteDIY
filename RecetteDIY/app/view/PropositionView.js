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
        id: "propositionview_tabbar",
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
            title: 'SuperMarche' ,
            xtype:'navigationview',
            id: "supermarket_navigation_view",
             defaultBackButtonText: ' ', 
            navigationBar : {
              docked : 'top',
              cls: 'supermarket-navigation-bar',
              
            },
            items:[
              { 
                  xtype: 'supermarketview', 
              } 
            ]
          },
          {
            title: 'Restaurant',
            xtype:'navigationview',
            id: "restaurant_navigation_view", 
            defaultBackButtonText: ' ',
            navigationBar : {
              docked : 'top',
              cls: 'supermarket-navigation-bar', 
               
            },
            items : [ 
              { 
                  xtype: 'restaurantview' 
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