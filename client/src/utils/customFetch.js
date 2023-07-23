import axios from "axios";

const customFetch = axios.create({
  baseURL: "/api/v1",
});

export default customFetch;

/*
Axios is a popular JavaScript library that simplifies the process of making HTTP requests from web browsers or Node.js.
It provides a simple and elegant API for performing asynchronous HTTP requests, supporting features such as making GET, POST, PUT, and DELETE requests, handling request and response headers, handling request cancellation, and more.
*/
