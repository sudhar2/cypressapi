import { StatusCodes } from "http-status-codes";

export const doApiCall = (method, url, qs, body, statusCode) => {
  let headers = {
    'Authorization': 'Bearer <token>',
  }

  return cy
    .request({
      method,
      url,
      body,
      headers,
      qs,
      failOnStatusCode: false
    })
    .then(function (response) {
      console.log('response for api call', response);
      expect(response.status).to.eq(statusCode);
      return response.body;
    });
}


export const get = (url, qs, statusCode=StatusCodes.OK) => {
  return doApiCall('GET', url, qs, null, statusCode);
}