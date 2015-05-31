Ext.define("RecetteDIY.view.RecetteDetailView", {
   extend: 'Ext.Container',
   xtype: 'recettedetailview',
   config: {
    xtype: "panel",
    id: 'recettedetailview', width: '100%',  
    scrollable: 'vertical',
     maskOnOpen: false,
     showAnimation:{
      type:'slide',
    },
        
      items: [ 
           
      ],
      listeners: {
                
               painted: function()  { 
                     // go to top 
                                 setTimeout(function(){ Ext.getCmp('recettedetailview').getScrollable().getScroller().scrollTo(0, 0);},50);   
                                 var desc=this.getRecord().data.content;  
                                 Ext.getCmp('recettedetailview').setHtml(desc); 



                 
               } 
            }
   },
   initialize: function() {
     
   }

});