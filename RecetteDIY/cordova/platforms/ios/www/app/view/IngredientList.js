 
Ext.define("RecetteDIY.view.IngredientList", {
   extend: 'Ext.Container',
   alias: "widget.ingredientlist",   
   config: {
     id: 'ingredientlist',
        Cls: 'ingredientlist',
        
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
                store: 'ingredientstore',
                listeners: {
                             itemtap: function ( element, index, target, record, e, eOpts ) {
                                
                                         Ext.getCmp('ingredients_navigation_view').push(
                                         {
                                            xtype: 'ingredientdetailview',
                                            title: record.data.title,
                                            record:record
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
