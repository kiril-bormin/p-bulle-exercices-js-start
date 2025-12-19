//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  #thebalance
  #isOpen

  constructor() {
    this.#thebalance = 0;
    this.#isOpen = false;
  }

  open() {
    if (this.#isOpen) {
      throw new ValueError();
    }
      this.#isOpen = true;
      this.#thebalance = 0;

  }

  close() {
    if (!this.#isOpen) {
      throw new ValueError();
    }
      this.#isOpen = false;
      this.#thebalance = 0;
  }

  deposit(moneyToAdd) {
    if (moneyToAdd <= 0 || !this.#isOpen) {
      throw new ValueError();
    }
      this.#thebalance += moneyToAdd;

  }

  withdraw(moneyToTake) {
    if (moneyToTake <= 0 || !this.#isOpen || moneyToTake > this.#thebalance) {
      throw new ValueError();
    }
      this.#thebalance -= moneyToTake;
  }

  get balance() {
    if (!this.#isOpen) {
      throw new ValueError();
    }
      return this.#thebalance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}