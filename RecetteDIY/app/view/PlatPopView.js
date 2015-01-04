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
                store: 'platpopstore'
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