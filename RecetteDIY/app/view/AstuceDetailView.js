Ext.define("RecetteDIY.view.AstuceDetailView", {
   extend: 'Ext.Container',
   xtype: 'astucedetailview',
   config: {
    xtype: "panel",
    id: 'astucedetailview', width: '100%',  
    scrollable: 'vertical',
     maskOnOpen: false,
     showAnimation:{
      type:'slide',
    },
    listeners: {
                
               painted: function()  { 

                                  // go to top 
                                 setTimeout(function(){ Ext.getCmp('astucedetailview').getScrollable().getScroller().scrollTo(0, 0);},50);   
                                 var desc=this.getRecord().data.content;  
                                 Ext.getCmp('astucedetailview').setHtml(desc); 
                                
                              } 
            }
  },
   
   initialize: function() {
     
   }

});