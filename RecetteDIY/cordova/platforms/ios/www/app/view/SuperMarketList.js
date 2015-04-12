 
Ext.define("RecetteDIY.view.SuperMarketList", {
   extend: 'Ext.Container',
   alias: "widget.supermarketlist",   
   config: {
     id: 'supermarketlist',
        Cls: 'supermarketlist',
        
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
                store: 'supermarketstore',
                listeners: {
                             itemtap: function ( element, index, target, record, e, eOpts ) {
                                
                                         Ext.getCmp('supermarket_navigation_view').push(
                                         {
                                            xtype: 'recettedetailview',
                                            title: record.data.title
                                          }
                                        );  

                                   
                           },
                            painted: function()  { 

                             
                       }
                },
            } 
        ]
    },






});
