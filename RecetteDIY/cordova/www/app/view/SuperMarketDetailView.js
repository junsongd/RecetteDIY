Ext.define("RecetteDIY.view.SuperMarketDetailView", {
   extend: 'Ext.Container',
   xtype: 'supermarketdetailview',
   config: {
    xtype: "panel",
    id: 'supermarketdetailview', width: '100%',  
    scrollable: 'vertical',
     maskOnOpen: false,
     showAnimation:{
      type:'slide',
    },
    listeners: {
                
               painted: function()  { 

                                  // go to top 
                                 setTimeout(function(){ Ext.getCmp('supermarketdetailview').getScrollable().getScroller().scrollTo(0, 0);},50);   
                                 var desc=this.getRecord().data.content;  
                                 Ext.getCmp('supermarketdetailview').setHtml(desc); 
                                
                              } 
            }
  },
   
   initialize: function() {
     
   }

});