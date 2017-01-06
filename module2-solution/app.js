(function (){ //IFFE Immediately Invoked Fucntion Expression

'use strict'; //No local variables bleed into the global scope

angular.module('ShoppingListCheckOff', []) //Angular Module with no ependencies
.controller ('AlreadyBoughtController', AlreadyBoughtController)
.controller ('ToBuyController', ToBuyController)
.service ('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController (ShoppingListCheckOffService) {
  var buyList = this;
  buyList.items =   ShoppingListCheckOffService.getBuyItems();
  buyList.boughtItem = function(index) {
    ShoppingListCheckOffService.boughtItem(index);
    buyList.error = ShoppingListCheckOffService.checkIfAllItemsBought();
  }
}

function AlreadyBoughtController (ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.checkError =  function() {
    return ShoppingListCheckOffService.checkIfNoItemBought();
  }
  boughtList.items =  ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;
  var toBuyItems = [{ name : "Cookies", quantity : "10"}, { name : "Chocolates", quantity : "15"}, { name : "Cake", quantity : "20"}, { name : "Curry", quantity : "10"}, { name : "Corn", quantity : "15"} ];
  var boughtItems = [];

  service.getBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

  service.boughtItem = function (index) {
    var item = toBuyItems[index];
    boughtItems.push(item);
    toBuyItems.splice(index, 1);
  }

  service.checkIfAllItemsBought = function () {
    if (!toBuyItems.length)
      return 1;
    else
      return 0;
  }

  service.checkIfNoItemBought = function () {
    if (!boughtItems.length)
      return 1;
    else
      return 0;
  }

}

})();
