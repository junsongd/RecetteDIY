Ext.define("RecetteDIY.view.IngredientView", {
   extend: 'Ext.Container',
   xtype: 'ingredientview',
   config: {
      id: 'ingredientview', 
      width: '100%',
      flex:1, 
      layout:'fit',
      items:[
               {
                  xtype: 'tdltabpanel',
                  id: "calculatorview_tabbar",
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
                      title: 'Astuces' ,
                      xtype:'navigationview',
                      id: "astuces_navigation_view",
                      scrollable: true,
                      defaultBackButtonText: ' ', 
                      navigationBar : {
                        docked : 'top',
                        cls: 'astuces-navigation-bar',
                        items : [
                            
                        ]
                      },
                      items:[
                        { 
                           
                        } 
                      ]
                    },
                    // Ingrédients
                    {
                      title: 'Ingrédients' ,
                      xtype:'navigationview',
                      id: "ingredients_navigation_view",
                      scrollable: true,
                      defaultBackButtonText: ' ', 
                      navigationBar : {
                        docked : 'top',
                        cls: 'ingredients-navigation-bar',
                        items : [
                           
                        ]
                      },
                      items:[
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