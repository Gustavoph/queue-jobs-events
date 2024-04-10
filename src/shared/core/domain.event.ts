export abstract class DomainEvent<T> {
  #ocurredAt: Date;
  abstract payload: T;

  constructor() {
    this.#ocurredAt = new Date();
  }
}
