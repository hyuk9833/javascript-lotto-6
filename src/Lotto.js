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

  countWinningLotto(inputWinningNo, inputBonusNo) {
    let count = 0;
    for(let number of inputWinningNo) {
      this.#numbers.includes(number) ? count += 1 : '';
    }
    return count+'개 일치';
  }
}

export default Lotto;
