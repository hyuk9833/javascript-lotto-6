function buyLottoCount(payMoney){
    if(isNaN(payMoney)){
        throw new Error('[ERROR] 숫자가 아닙니다.');
    }

    return Math.floor(payMoney / 1000);
}

export default buyLottoCount;