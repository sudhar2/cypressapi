import { StatusCodes } from "http-status-codes";

export const doApiCall = (method, url, body, statusCode) => {
  let headers = {
    'Authorization': 'Bearer <token>',
    'Content-Type': 'application/json'
  }

  return cy
    .request({
      method,
      url,
      body,
      headers,
      failOnStatusCode: false
    })
    .then(function (response) {
      console.log('response for api call', response);
      expect(response.status).to.eq(statusCode);
      return response.body;
    });
}


export const get = (url, statusCode = StatusCodes.OK) => {
  return doApiCall('GET', url, null, statusCode);
}

export const post = (url, body, statusCode = StatusCodes.CREATED) => {
  return doApiCall('POST', url, body, statusCode);
}