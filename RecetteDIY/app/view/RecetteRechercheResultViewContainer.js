 
Ext.define("RecetteDIY.view.RecetteRechercheResultViewContainer", {
  extend: 'Ext.Container',
  xtype: 'recetterechercheresultviewcontainer',
  config: {
    layout:'hbox', 
    showAnimation:{
               type:'slide',
               direction:'right',
               // duration:5000,
            },  
    items: [
      {  
        xtype : 'recetterechercheresultlist', 
        flex:'1',
        listeners: {
               itemtap: function(element, index, target, record, e, eOpts ) { 
                                         Ext.getCmp('recherche_navigation_view').push(
                                         {
                                            xtype: 'recetterecherchedetailview',
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
 