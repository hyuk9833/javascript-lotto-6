function buyLottoCount(payMoney){
    if(isNaN(payMoney)){
        throw new Error('[ERROR] 숫자가 아닙니다.');
    }

    if(payMoney % 1000 > 0) {
        throw new Error('[ERROR] 잔돈이 발생합니다.');
    }

    return payMoney / 1000;
}

export default buyLottoCount;