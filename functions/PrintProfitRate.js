import { Console } from "@woowacourse/mission-utils";

function printProfitRate(lottoCount, winningStatistics){
    const PROFIT = (winningStatistics[0] * 5000 
    + winningStatistics[1] * 50000 
    + winningStatistics[2] * 1500000 
    + winningStatistics[3] * 30000000 
    + winningStatistics[4] * 2000000000);
    Console.print('총 수익률은 ' + (Math.round(PROFIT / lottoCount*10) / 100) + '%');
}

export default printProfitRate