class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  get numbers(){
    return this.#numbers;
  }

  countWinningLotto(  inputWinningNo, inputBonusNo) {
    let count = 0;

    for(let number of inputWinningNo) {
      this.#numbers.includes(number) ? count += 1 : '';
    }

    if(count === 5 && this.#numbers.includes(inputBonusNo)) count = -1;

    switch (count) {
      case -1:
        return [0, 0, 0, 1, 0];
      case 3:
        return [1, 0, 0, 0, 0];
      case 4:
        return [0, 1, 0, 0, 0];
      case 5:
        return [0, 0, 1, 0, 0];
      case 6:
        return [0, 0, 0, 0, 1];
      default:
        return [0, 0, 0, 0, 0];
    }
  }
}

export default Lotto;
