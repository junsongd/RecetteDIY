 
Ext.define("RecetteDIY.view.RestaurantList", {
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
                itemCls: 'market-item',
                itemTpl: [ 
                    '<div class="marketimage">',
                    '   <img src= "{thumbnail_url}">',
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
