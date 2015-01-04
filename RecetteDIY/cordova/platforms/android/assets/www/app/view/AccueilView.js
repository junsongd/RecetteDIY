Ext.define("RecetteDIY.view.AccueilView", {
   extend: 'Ext.Container',
   xtype: 'accueilview',
   config: {
      id: 'accueilview',   
      width: '100%',
      flex: 1, 
      layout: 'fit',
      items: [ 
          
          {
                 xtype:'navigationview',
                 id: "accueil_navigation_view",
                 navigationBar : {
                  docked : 'top',
                  title:'Accueil',
                  items : [
                    /**
                      {
                        xtype: 'button',
                        html: 'i',
                        cls:'buttoninfo',
                        align : 'right',
                        listeners:{
                          tap : function () {

                            
                          } 
                        }
                      } **/
                  ]
                },
                items : [ 
                  { 
                    xtype: 'accueilviewcontainer',
                    title: 'Accueil'
                  } 
                ]
          }  
      ],
    listeners:{ 
      painted : function () { // update the list height   
// ios 7   
                if (window.device &&
                    window.device.platform.toLowerCase() == "ios" &&
                    parseFloat(window.device.version) >= 7.0) {
                     Ext.select(".x-navigation-bar").applyStyles("height:64px;padding-top:15px"); 
                 }  
       }
    }
   },
   initialize: function() {
     
     
   }

});
