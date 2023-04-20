# Delivery

Delivery is a library for handling errors when making API requests using the `axios` and `fetch` libraries.

## Installation

To install Delivery, run the following command:

```
npm install @boring-devs/delivery
```

## Usage

To use Delivery in your project, first import the library:

```javascript
import axios from 'axios';
import fetch from 'node-fetch';
import { fromAxios, fromFetch } from '@boring-devs/delivery';
```

### Axios Example

You can make API requests using `axios` as follows:

```javascript
const url = 'https://api.github.com/users/nicasiomarques';

fromAxios(axios.get(url))
  .notFound(console.log)
  .unauthorized(console.log)
  .forbidden(console.log)
  .internalServerError(console.log)
  .clientError(console.log)
  .success(console.log)
  .json((hasError, data) => {
    if (!hasError) console.log(data);
  });
```

### Fetch Example

You can make API requests using `fetch` as follows:

```javascript
const url = 'https://api.github.com/users/nicasiomarques';

fromFetch(fetch(url, { method: 'get' }))
  .notFound(console.log)
  .unauthorized(console.log)
  .forbidden(console.log)
  .internalServerError(console.log)
  .clientError(console.log)
  .success(console.log)
  .json((hasError, data) => {
    if (!hasError) console.log(data);
  });
```

## Cheat Sheet

- `success(handler: TSuccess): DeliveryApi`: This method takes a success handler as a parameter and sets it as a callback function to be executed when the API request is successful. The success handler can be used to process the response data and perform any necessary operations.

- `notFound(handler: TError): DeliveryApi`: This method takes an error handler as a parameter and sets it as a callback function to be executed when the requested resource is not found (HTTP status code 404). The error handler can be used to display a message to the user or perform any necessary error handling.

- `unauthorized(handler: TError): DeliveryApi`: This method takes an error handler as a parameter and sets it as a callback function to be executed when the user is not authorized to access the requested resource (HTTP status code 401). The error handler can be used to display a message to the user or perform any necessary error handling.

- `forbidden(handler: TError): DeliveryApi`: This method takes an error handler as a parameter and sets it as a callback function to be executed when the user is forbidden from accessing the requested resource (HTTP status code 403). The error handler can be used to display a message to the user or perform any necessary error handling.

- `badRequest(handler: TError): DeliveryApi`: This method takes an error handler as a parameter and sets it as a callback function to be executed when the request is invalid (HTTP status code 400). The error handler can be used to display a message to the user or perform any necessary error handling.

- `internalServerError(handler: TError): DeliveryApi`: This method takes an error handler as a parameter and sets it as a callback function to be executed when an internal server error occurs (HTTP status code 500). The error handler can be used to display a message to the user or perform any necessary error handling.

- `clientError(handler: TError): DeliveryApi`: This method takes an error handler as a parameter and sets it as a callback function to be executed when a client error occurs (HTTP status codes between 400 and 499). The error handler can be used to display a message to the user or perform any necessary error handling.

- `json<T>(handler: TJson<T>): void`: This method takes a JSON handler as a parameter and sets it as a callback function to be executed when the API request returns a JSON response. The JSON handler can be used to process the response data and perform any necessary operations. The generic type T is used to define the type of the response data.

## Contributing

If you would like to contribute to Delivery, please follow these guidelines:

1. Fork the repository to your own Github account.
2. Make any changes you would like to contribute.
3. Submit a pull request with a clear description of the changes you have made.

## License

This project is licensed under the MIT license.
