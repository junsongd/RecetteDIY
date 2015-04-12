 
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
       }
      
    ],
       
  },
  initialize: function () {}
});   
 