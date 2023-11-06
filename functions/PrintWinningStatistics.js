import { Console } from "@woowacourse/mission-utils";

function printWinningStatistics(winningStatistics) {
    Console.print('당첨 통계');
    Console.print('---');
    Console.print('3개 일치 (5,000원) ' + winningStatistics[0] + '개');
    Console.print('4개 일치 (50,000원) - ' + winningStatistics[1] + '개');
    Console.print('5개 일치 (1,500,000원) - ' + winningStatistics[2] + '개');
    Console.print('5개 일치, 보너스 볼 일치 (30,000,000원) - ' + winningStatistics[3] + '개');
    Console.print('6개 일치 (2,000,000,000원) - ' + winningStatistics[4] + '개');
}

export default printWinningStatistics;