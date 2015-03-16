Ext.define("RecetteDIY.view.PubDetailView", {
   extend: 'Ext.Container',
   xtype: 'pubdetailview',
   config: {
    xtype: "panel",
    id: 'pubdetailview', width: '100%',  
    scrollable: 'vertical',
     maskOnOpen: false,
     showAnimation:{
      type:'slide',
    },
    listeners: {
                
               painted: function()  { 

                                  // go to top 
                                 setTimeout(function(){ Ext.getCmp('pubdetailview').getScrollable().getScroller().scrollTo(0, 0);},50);   
                                 var desc=this.getRecord().data.content;  
                                 Ext.getCmp('pubdetailview').setHtml(desc); 
                                
                              } 
            }
  },
   
   initialize: function() {
     
   }

});