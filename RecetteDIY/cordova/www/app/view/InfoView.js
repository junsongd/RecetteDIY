Ext.define("RecetteDIY.view.InfoView", {
   extend: 'Ext.Container',
   xtype: 'infotview',
   config: {
      id: 'infotview', 
      width: '100%',
      flex:1, 
      layout:'fit',
      items:[
               {
                  xtype: 'tdltabpanel',
                  id: "calculatorview_tabbar", 
                  items: [
                    {
                      title: 'Astuce' ,
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
                           xtype : 'astuceview',
                            title: 'Astuces',
                        } 
                      ]
                    },
                    // Ingrédients
                    {
                      title: 'Ingrédient' ,
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
                            xtype : 'ingredientview',
                              title: 'Ingrédients',
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