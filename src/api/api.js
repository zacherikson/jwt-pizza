import apiService from './apiService';
import apiMock from './apiMock';

let Api = apiService;
if (true) {
  Api = apiMock;
}

export { Api };
