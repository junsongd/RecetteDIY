Ext.define("RecetteDIY.view.RestaurantDetailView", {
   extend: 'Ext.Container',
   xtype: 'restaurantdetailview',
   config: {
    xtype: "panel",
    id: 'restaurantdetailview', width: '100%',  
    scrollable: 'vertical',
     maskOnOpen: false,
     showAnimation:{
      type:'slide',
    },
    listeners: {
                
               painted: function()  { 

                                  // go to top 
                                 setTimeout(function(){ Ext.getCmp('restaurantdetailview').getScrollable().getScroller().scrollTo(0, 0);},50);   
                                 var desc=this.getRecord().data.content;  
                                 Ext.getCmp('restaurantdetailview').setHtml(desc); 
                                
                              } 
            }
  },
   
   initialize: function() {
     
   }

});