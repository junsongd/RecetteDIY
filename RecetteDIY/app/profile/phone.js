Ext.define('RecetteDIY.profile.phone', {
   extend: 'Ext.app.Profile',

   config: {
      name: 'phone',
       views: [
         'RecetteList' ,
        'RecetteRechercheResultList',
        'RestaurantList'
           
    ] 
   },

   isActive: function() {
      
      return Ext.os.is.Phone || Ext.os.is.Desktop;
   },

   launch: function() {
     
      //Ext.Viewport.add(Ext.create('Project.view.phone.Main')); 
      // Initialize the main view
      Ext.Viewport.add(Ext.create('RecetteDIY.view.MainView'));
      this.callParent(arguments);
   }
});
