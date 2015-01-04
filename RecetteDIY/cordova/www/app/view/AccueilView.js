Ext.define("RecetteDIY.view.AccueilView", {
   extend: 'Ext.Container',
   xtype: 'accueilview',
   config: {
      id: 'accueilview',  
      layout:'vbox', 
      items: [
        {
            xtype: "container",
            id : "carousel_container",
            layout:'fit',
               flex:2,
            items: [
                {//give it an xtype of list for the list component
                    xtype: 'carousel',
                    id: "pub-image-list",
                    defaults: {
                        styleHtmlContent: true
                    },
                    layout: {type: "fit"},
                    items: [
                                {
                                    html : '<img src="images/appel_sponsor.jpg"></img>',
                                     
                                },
                                {
                                    html : '<img src="images/appel_sponsor2.jpg"></img>',
                                     
                                },
                                {
                                    html : '<img src="images/plat_boeuf_sauce_piquante.jpg"></img>',
                                     
                                },
                          ]
               }

                        ],
          },

             {
                    xtype:'panel',
                    flex:1,
                    cls:'category-menu-panel',
                    layout: {
                      pack: 'center',
                      type: 'hbox'
                    },
                    items:[ 
                      {
                        xtype: 'button',
                        html: 'Entré',
                         cls:'category-menu-button entre',
                         listeners:{
                                    tap : function () {
                                         
                                    } 
                                  } 
                      },
                      {
                        xtype: 'button',
                        html: 'Plat',
                         cls:'category-menu-button plat',
                         listeners:{
                                    tap : function () {
                                         
                                    } 
                                  } 
                      },
                      {
                        xtype: 'button',
                        html: 'Dessert',
                         cls:'category-menu-button dessert',
                         listeners:{
                                    tap : function () {
                                         
                                    } 
                                  } 
                      },
                       {
                        xtype: 'button',
                        html: 'Autres',
                        cls:'category-menu-button autre',
                         listeners:{
                                    tap : function () {
                                         
                                    } 
                                  } 
                      }
                    ]
                  }, 
                  {
                    xtype: 'platpopview' ,
                    flex:4

                  }, 





      ],
   },
   initialize: function() {
     
     
   }

});
