 
Ext.define("RecetteDIY.view.tablet.RecetteList", {
   extend: 'Ext.Container',
   alias: "widget.recettelist",  

   config: {
     id: 'recette_list',
        Cls: 'recette_list',
           plugins: [
        {
            xclass: 'Ext.plugin.PullRefresh',
            pullText: 'Mise à jour!',
            loadedText :'Le chargement est fini',
            loadingText :'Chargement...',
            pullRefreshText: 'Pull-down pour Mise à jour!',
            releaseText: 'Lâcher pour Mise à jour...',
            lastUpdatedText:'Dernière mise à jour'
         }
      ], 
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
            } 
        ]
    },






});
