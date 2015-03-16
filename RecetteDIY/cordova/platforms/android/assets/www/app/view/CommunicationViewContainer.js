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
               itemtap: function(element, index, target, record, e, eOpts) { 

                     Ext.getCmp('communication_navigation_view').push(
                                          {
                                            xtype: 'communicationdetailview',
                                            title: 'Detail',
                                           }
                                        );   
                  RecetteDIY.app.getController('DisscutionController')._currentRecord = record;


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