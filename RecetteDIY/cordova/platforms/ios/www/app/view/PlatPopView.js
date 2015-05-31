Ext.define("RecetteDIY.view.PlatPopView", {
   extend: 'Ext.Container',
   xtype: 'platpopview',
     config: {
        items: [
            {
                xtype: 'dataview', 
                styleHtmlContent: true,
                id:'plat-pop-list',
                scrollable: false, 
                width: '100%',
                loadMask: false,
                inline: {
                    wrap: true
                }, 
                itemCls: 'platpop-item',
                itemTpl: [ 
                    '<div class="platpopimage">',
                    '   <img src= "{thumbnail_url}">',
                    '</div>',
                    '<div class="platpoptitle">',
                    '    {title}',
                    '</div>'
                ],
                store: 'platstore',
                listeners: {
                             itemtap: function ( element, index, target, record, e, eOpts ) {
                                
                                         Ext.getCmp('accueil_navigation_view').push(
                                         {
                                            xtype: 'recettedetailview',
                                            title: record.data.title,
                                            record:record
                                          }
                                        );  

                                   
                           },
                            painted: function()  { 

                             RecetteDIY.app.getController('AccueilController').displayPupularPlats(); 
                              setTimeout(function(){
                                 var list = Ext.getCmp('plat-pop-list'); 
                                 var storeitems = Ext.getCmp('plat-pop-list').getStore().data.items; 
                                if(storeitems.length != 0)
                                list.setHeight(  Math.ceil(storeitems.length/2) * 202 );
                              },0);
                       }
                },
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                id:'platpopbar',
                title: 'Les plats populaires'
            }
        ]
    },
   initialize: function() {
     
   }

});