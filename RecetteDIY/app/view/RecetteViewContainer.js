 
Ext.define("RecetteDIY.view.RecetteViewContainer", {
  extend: 'Ext.Container',
  xtype: 'recetteviewcontainer',
  config: {
    id:'recetteviewcontainer', 
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
                                            title: record.data.title
                                          }
                                        );  
                },
               painted: function()  {
            
                // Loading.hide();

               } 
            }
      },
       //Contenue a droite
     {
            xtype: "panel",
            id: "recetteDroite",
            cls: "",
            flex: "1",
            layout:'vbox',
            scrollable: 'vertical',
            style: 'margin: auto !important; text-align: center;',
            maskOnOpen: false,
            hidden:true,
            showAnimation:{
               type:'slide',
            }  
         },
    ],
       
  },
  initialize: function () {}
});   
 