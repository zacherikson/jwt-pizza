import httpPizzaService from './httpPizzaService';
import memoryPizzaService from './memoryPizzaService';

let pizzaService = httpPizzaService;
if (false) {
  pizzaService = memoryPizzaService;
}

export { pizzaService };
