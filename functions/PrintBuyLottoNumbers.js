import { Console } from "@woowacourse/mission-utils";

function printBuyLottoNumbers(buyLottoNumbers) {
    Console.print('');
    Console.print(buyLottoNumbers.length+'개를 구매했습니다.');
    for(let lottoNumber of buyLottoNumbers) {
        Console.print(lottoNumber);
    }
}

export default printBuyLottoNumbers;