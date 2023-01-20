export default class InvalidUuidError extends Error {
  constructor(message?: string) {
    super(message || "Id must be a valid UUID"); //constructor proprio do Error
    this.name = "InvalidUuidError";
  }
}
