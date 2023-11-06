import { Console } from "@woowacourse/mission-utils";
import buyLottoCount from "../functions/buyLottoCount.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import printBuyLottoNumbers from "../functions/PrintBuyLottoNumbers.js";
import Lotto from "./Lotto.js";
import inputWinningNo from "../functions/InputWinningNo.js";
import inputBonusNo from "../functions/inputBonusNo.js";

class App {
  #lottoCount;
  #lottoNumbers;
  #inputWinningNo;
  #inputBonusNo;
  #winningStatics;

  constructor() {
    this.#lottoCount = 0;
    this.#lottoNumbers = [];
    this.#inputWinningNo = [];
    this.#winningStatics = {
      threeCorrect : 0,
      fourCorrect : 0,
      fiveCorrect : 0,
      fiveAndBonusCorrect : 0,
      sixCorrect : 0
    }
  }

  set lottoCount(lottoCount) {
    this.#lottoCount = lottoCount
  } 

  get lottoCount() {
    return this.#lottoCount;
  }

  addLottoNumbers(lottoNo) {
    this.#lottoNumbers.push(lottoNo);
  }
  
  get lottoNumbers() {
    return this.#lottoNumbers;
  }

  set inputWinningNo(inputWinningNo) {
    this.#inputWinningNo = inputWinningNo;
  }

  get inputWinningNo() {
    return this.#inputWinningNo;
  }

  set inputBonusNo(inputBonusNo) {
    this.#inputBonusNo = inputBonusNo
  }

  get inputBonusNo() {
    return this.#inputBonusNo;
  }

  set winningStatics(winningStatics) {
    this.#winningStatics.threeCorrect += winningStatics.threeCorrect;
    this.#winningStatics.fourCorrect += winningStatics.fourCorrect;
    this.#winningStatics.fiveCorrect += winningStatics.fiveCorrect;
    this.#winningStatics.fiveAndBonusCorrect += winningStatics.fiveAndBonusCorrect;
    this.#winningStatics.sixCorrect += winningStatics.sixCorrect;
  }

  get winningStatics() {
    return this.#winningStatics;
  }

  async play() {
    this.#lottoCount = buyLottoCount(await Console.readLineAsync('구입금액을 입력해주세요.\n'));

    for(let index = 0; index < this.#lottoCount; index++){
      this.addLottoNumbers(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
    }

    printBuyLottoNumbers(this.#lottoNumbers);
    
    this.#inputWinningNo = inputWinningNo(await Console.readLineAsync('당첨 번호를 입력해 주세요.'));
    this.#inputBonusNo = inputBonusNo(await Console.readLineAsync('보너스 번호를 입력해 주세요.'));

    for(let i of this.#lottoNumbers){
      const lotto = new Lotto(i);
      lotto.countWinningLotto(this.#inputWinningNo, this.#inputBonusNo);
    }
  }
}

export default App;
