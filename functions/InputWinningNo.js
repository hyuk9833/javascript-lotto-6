function inputWinningNo(inputWinningNo) {
    let inputWinningNoTest = inputWinningNo.split(',').map(Number);
    console.log(inputWinningNoTest);

    inputWinningNoTest.forEach(element => {
        if(isNaN(element)){
            throw new Error('[ERROR] 숫자가 아닙니다.');
        }
    });

    if(inputWinningNoTest.length != 6) {
        throw new Error('[ERROR] 개수가 6개가 아닙니다.');
    }

    return inputWinningNoTest;
}

export default inputWinningNo;