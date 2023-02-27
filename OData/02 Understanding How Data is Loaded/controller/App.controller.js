sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, MessageToast, MessageBox, JSONModel) {
    "use strict";

    return Controller.extend("sap.ui.core.tutorial.odatav4.controller.App", {
      /**
       *  Hook for initializing the controller
       */
      onInit: function () {
        var oJSONData = {
            busy: false,
          },
          oModel = new JSONModel(oJSONData);

        this.getView().setModel(oModel, "appView");
      },

      onRefresh: function () {
        var oBinding = this.byId("peopleList").getBinding("items");

        if (oBinding.hasPendingChanges()) {
          MessageBox.error(this._getText("refreshNotPossibleMessage"));
          return;
        }
        oBinding.refresh();
        MessageToast.show(this._getText("refreshSuccessMessage"));
      },

      _getText: function (sTextId, aArgs) {
        return this.getOwnerComponent()
          .getModel("i18n")
          .getResourceBundle()
          .getText(sTextId, aArgs);
      },
    });
  }
);
