// create a es6 singleton class  called GroceryService

export class GroceryService {
  // initialize the instance
  static instance = new GroceryService();

  // static method to get the instance
  static getInstance() {
    return GroceryService.instance;
  }
  constructor() {}

  groceryList() {
    return [];
  }

  groceryDetail(id) {
    return {};
  }

  addGrocery(grocery) {
    return {};
  }

  deleteGrocery(id) {
    return {};
  }

  updateGrocery(grocery) {
    return {};
  }

  deleteAllGrocery() {
    return {};
  }
}
