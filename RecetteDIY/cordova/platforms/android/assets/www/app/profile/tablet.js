Ext.define('RecetteDIY.profile.tablet',
 {
    extend: 'Ext.app.Profile',

   config: {
       views: [ 
        'RecetteList' ,
        'RecetteRechercheResultList',
        'RestaurantList'
       ] 
   },

   isActive: function() {
      
      return Ext.os.is.Tablet || Ext.os.is.Desktop; 
   },

   launch: function() {
     
    // Initialize the main view
       Ext.Viewport.add(Ext.create('RecetteDIY.view.MainView'));
        
      this.callParent(arguments);
   },
                                  
});
