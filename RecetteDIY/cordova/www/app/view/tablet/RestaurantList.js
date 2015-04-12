 
Ext.define("RecetteDIY.view.tablet.RestaurantList", {
   extend: 'Ext.Container',
   alias: "widget.restaurantlist",   
   config: {
     id: 'restaurantlist',
        Cls: 'restaurantlist', 
        items: [
            {
                xtype: 'dataview',
                height: '100%',
                styleHtmlContent: true,
                width: '100%',
                inline: {
                    wrap: true
                }, 
                itemCls: 'platpop-item-tablet',
                itemTpl: [ 
                    '<div class="platpopimage">',
                    '   <img src= "{thumbnail_url} "> </img>',
                    '</div>',
                    '<div class="platpoptitle">',
                    '    {title}',
                    '</div>'
                ],
                store: 'restostore',
                listeners: {
                             itemtap: function ( element, index, target, record, e, eOpts ) {
                                
                                         Ext.getCmp('recherche_navigation_view').push(
                                         {
                                            xtype: 'recetterecherchedetailview',
                                            title: record.data.title
                                          }
                                        );  
                                   
                           },
                },
            } 
        ]
    },






});
