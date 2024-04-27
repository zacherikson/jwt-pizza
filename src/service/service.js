import httpPizzaService from './httpPizzaService';
import memoryPizzaService from './memoryPizzaService';

let pizzaService = httpPizzaService;
if (true) {
  pizzaService = memoryPizzaService;
}

export { pizzaService };
