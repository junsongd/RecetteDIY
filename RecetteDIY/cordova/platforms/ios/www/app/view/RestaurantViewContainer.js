 
Ext.define("RecetteDIY.view.RestaurantViewContainer", {
  extend: 'Ext.Container',
  xtype: 'restaurantviewcontainer',
  config: {
    layout:'fit',  
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
                                            xtype: 'restaurantdetailview',
                                            title: record.data.title,
                                            record:record
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
 