export default class Response {
  constructor(data = {}, errors = [], message = "") {
    this.data = data;
    this.errors = errors;
    this.message = message;
  }
}
