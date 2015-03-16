Ext.define("RecetteDIY.view.PlatPopView", {
   extend: 'Ext.Container',
   xtype: 'platpopview',
     config: {
        items: [
            {
                xtype: 'dataview',
                height: '100%',
                styleHtmlContent: true,
                width: '100%',
                inline: {
                    wrap: true
                }, 
                itemCls: 'platpop-item',
                itemTpl: [ 
                    '<div class="platpopimage">',
                    '   <img src= "{thumbnail_url} "> </img>',
                    '</div>',
                    '<div class="platpoptitle">',
                    '    {title}',
                    '</div>'
                ],
                store: 'platpopstore',
                listeners: {
                             itemtap: function ( element, index, target, record, e, eOpts ) {
                                
                                         Ext.getCmp('accueil_navigation_view').push(
                                         {
                                            xtype: 'recettedetailview',
                                            title: record.data.title
                                          }
                                        );  
                                   
                           },
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