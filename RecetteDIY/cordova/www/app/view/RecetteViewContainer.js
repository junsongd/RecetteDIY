 
Ext.define("RecetteDIY.view.RecetteViewContainer", {
  extend: 'Ext.Container',
  xtype: 'recetteviewcontainer',
  config: {
    layout:'hbox', 
    showAnimation:{
               type:'slide',
               direction:'right',
               // duration:5000,
            },  
    items: [
      {  
        xtype : 'recettelist', 
        flex:'1',
        listeners: {
               itemtap: function(element, index, target, record, e, eOpts ) { 
                                         Ext.getCmp('accueil_navigation_view').push(
                                         {
                                            xtype: 'recettedetailview',
                                            title: record.data.title,
                                             record:record
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
 