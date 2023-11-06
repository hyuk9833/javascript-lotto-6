import { Console } from "@woowacourse/mission-utils";
import buyLottoCount from "../functions/buyLottoCount.js";

class App {
  #lottoCount;

  constructor(){
    this.#lottoCount = 0;
  }

  set lottoCount(lottoCount){
    this.#lottoCount = lottoCount
  } 

  get lottoCount(){
    return this.#lottoCount;
  }
  
  async play() {
    this.#lottoCount = buyLottoCount(await Console.readLineAsync('구입금액을 입력해주세요.\n'));
  }
}

export default App;
