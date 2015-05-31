 
Ext.define("RecetteDIY.view.AstuceList", {
   extend: 'Ext.Container',
   alias: "widget.astucelist",   
   config: {
     id: 'astuceslist',
        Cls: 'astucelist',
        
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
                store: 'astucesstore',
                listeners: {
                             itemtap: function ( element, index, target, record, e, eOpts ) {
                                
                                         Ext.getCmp('astuces_navigation_view').push(
                                         {
                                            xtype: 'astucedetailview',
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
