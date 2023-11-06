function inputBonusNo(inputBonusNo) {
    if(isNaN(inputBonusNo)) {
        throw new Error('[ERROR] 숫자가 아닙니다.');
    }

    return inputBonusNo;
}

export default inputBonusNo;