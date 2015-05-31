Ext.define("RecetteDIY.view.IngredientDetailView", {
   extend: 'Ext.Container',
   xtype: 'ingredientdetailview',
   config: {
    xtype: "panel",
    id: 'ingredientdetailview', width: '100%',  
    scrollable: 'vertical',
     maskOnOpen: false,
     showAnimation:{
      type:'slide',
    },
    listeners: {
                
               painted: function()  { 

                                  // go to top 
                                 setTimeout(function(){ Ext.getCmp('ingredientdetailview').getScrollable().getScroller().scrollTo(0, 0);},50);   
                                 var desc=this.getRecord().data.content;  
                                 Ext.getCmp('ingredientdetailview').setHtml(desc); 
                                
                              } 
            }
  },
   
   initialize: function() {
     
   }

});