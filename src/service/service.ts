import httpPizzaService from './httpPizzaService';
import memoryPizzaService from './memoryPizzaService';
import { PizzaService } from './pizzaService';

let pizzaService: PizzaService = httpPizzaService;
if (false) {
  pizzaService = memoryPizzaService;
}

export { pizzaService };
