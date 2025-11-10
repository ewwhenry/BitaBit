export class SuccessResponse<T> {
  constructor(public data: T, public message: string = "Success") {}

  toJSON() {
    return {
      status: "success",
      message: this.message,
      data: this.data,
    };
  }
}
