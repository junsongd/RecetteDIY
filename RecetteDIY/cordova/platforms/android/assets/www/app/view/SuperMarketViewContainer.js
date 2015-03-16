 
Ext.define("RecetteDIY.view.SuperMarketViewContainer", {
  extend: 'Ext.Container',
  xtype: 'supermarketviewcontainer',
  config: {
    layout:'fit', 
    showAnimation:{
               type:'slide',
               direction:'right',
               // duration:5000,
            },  
    items: [
      {  
        xtype : 'supermarketlist', 
        flex:'1',
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
 