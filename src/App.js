import { Console } from "@woowacourse/mission-utils";
import buyLottoCount from "../functions/buyLottoCount.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import printBuyLottoNumbers from "../functions/PrintBuyLottoNumbers.js";

class App {
  #lottoCount;
  #lottoNumbers;

  constructor(){
    this.#lottoCount = 0;
    this.#lottoNumbers = [];
  }

  set lottoCount(lottoCount){
    this.#lottoCount = lottoCount
  } 

  get lottoCount(){
    return this.#lottoCount;
  }

  addLottoNumbers(lottoNo){
    this.#lottoNumbers.push(lottoNo);
  }
  
  get lottoNumbers(){
    return this.#lottoNumbers;
  }

  async play() {
    this.#lottoCount = buyLottoCount(await Console.readLineAsync('구입금액을 입력해주세요.\n'));

    for(let index = 0; index < this.#lottoCount; index++){
      this.addLottoNumbers(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
    }

    printBuyLottoNumbers(this.#lottoNumbers);
    
    // for(let lottoNo of this.#lottoNumbers){
    //   const lotto = new Lotto(lottoNo);

    // }
  }
}

export default App;
