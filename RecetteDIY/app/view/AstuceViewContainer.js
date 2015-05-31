 
Ext.define("RecetteDIY.view.AstuceViewContainer", {
  extend: 'Ext.Container',
  xtype: 'astuceviewcontainer',
  config: {
    layout:'fit', 
    showAnimation:{
               type:'slide',
               direction:'right',
               // duration:5000,
            },  
    items: [
      {  
        xtype : 'astucelist', 
       }
      
    ],
       
  },
  initialize: function () {}
});   
 