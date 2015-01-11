Ext.define("RecetteDIY.view.CommunicationViewContainer", {
  extend: 'Ext.Container',
  xtype: 'communicationviewcontainer',
  config: {
    id:'communicationviewcontainer', 
    layout:'hbox', 
    showAnimation:{
               type:'slide',
               direction:'right',
               // duration:5000,
            },  
    items: [
      {  
        xtype : 'communicationlist', 
        flex:'1',
        listeners: {
               itemtap: function(a, b, c, d, e) { 
                  
                     Ext.getCmp('communication_navigation_view').push(
                                          {
                                            xtype: 'communicationdetailview',
                                            title: 'Detail'
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
            id: "communicationDroite",
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