 
Ext.define("RecetteDIY.view.RestaurantViewContainer", {
  extend: 'Ext.Container',
  xtype: 'restaurantviewcontainer',
  config: {
    layout:'hbox', 
    showAnimation:{
               type:'slide',
               direction:'right',
               // duration:5000,
            },  
    items: [
      {  
        xtype : 'restaurantlist', 
         layout:'fit', 
        listeners: {
               itemtap: function(element, index, target, record, e, eOpts ) { 
                                         Ext.getCmp('accueil_navigation_view').push(
                                         {
                                            xtype: 'recettedetailview',
                                            title: record.data.title
                                          }
                                        );  
                },
               painted: function()  {
            
                // Loading.hide();

               } 
            }
      }
      
    ],
       
  },
  initialize: function () {}
});   
 