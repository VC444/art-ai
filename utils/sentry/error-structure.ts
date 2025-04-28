export class ArtzieFrontendError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "ArtzieFrontendError";
  }
}
