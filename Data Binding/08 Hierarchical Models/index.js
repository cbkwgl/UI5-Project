sap.ui.require(
  [
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (JSONModel, XMLView, ResourceModel) {
    "use strict";

    // Attach an anonymous function to the SAPUI5 'init' event
    sap.ui.getCore().attachInit(function () {
      // Create a JSON model from an object literal
      var oModel = new JSONModel({
        firstName: "Who",
        lastName: "are you",
        enabled: true,
        panelHeaderText: "Data Binding Basics",
        address: {
          street: "Where is it?",
          city: "Do I really care?",
          country: "Forget it.",
          zip: "Waste of time.",
        },
      });

      // Assign the model object to the SAPUI5 core
      sap.ui.getCore().setModel(oModel);

      // Create a resource bundle
      var oResourceModel = new ResourceModel({
        bundleName: "sap.ui.demo.db.i18n.i18n",
        supportedLocales: ["", "de"],
        fallbackLocale: "",
      });

      // Assign the model object to the SAPUI5 core using the name "i18n"
      sap.ui.getCore().setModel(oResourceModel, "i18n");

      // Display the XML view called "App"
      new XMLView({
        viewName: "sap.ui.demo.db.view.App",
      }).placeAt("content");
    });
  }
);
