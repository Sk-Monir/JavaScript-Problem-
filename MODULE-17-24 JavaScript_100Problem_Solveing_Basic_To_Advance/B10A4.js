// 51
function calculateTax(income, expenses) {
    if (typeof income !== 'number' ||
        typeof expenses !== 'number' ||
        income < 0 || expenses < 0 ||
        expenses > income) {
        return 'Invalid Input'
    }
    const totalSavings = income - expenses;
    const totalTax = totalSavings * 0.2;
    return totalTax;
}
//52
function sendNotification(email) {
    if (typeof email !== 'string' || !email.includes('@')) {
        return 'Invalid Email';
    }
    const divided = email.split('@');

    const parts1 = divided[0];
    const parts2 = divided[1];

    return `${parts1} sent you an email from ${parts2}`;

}
//53
function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return 'Invalid Input';
    }
    for (let i = 0; i < name.length; i++) {
        let char = name.charAt(i)
        if (char >= '0' && char <= '9') {
            return true;
        }
    }
    return false;
}
//54
function calculateFinalScore(obj) {
    if (typeof obj !== 'object' ||
        typeof obj.name !== 'string' ||
        typeof obj.testScore !== 'number' ||
        typeof obj.schoolGrade !== 'number' ||
        typeof obj.isFFamily !== 'boolean' ||
        obj.testScore < 0 || obj.testScore > 50 ||
        obj.schoolGrade < 0 || obj.schoolGrade > 30
    ) {
        return 'Invalid Input';
    }

    let finalScore = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily === true) {
        finalScore += 20;
    }

    if (finalScore >= 80) {
        return true;
    }
    return false;
}
//55
function waitingTime(waitingTimes, serialNumber) {
    if (
        !Array.isArray(waitingTimes) ||
        typeof serialNumber !== 'number' ||
        serialNumber <= waitingTimes.length
    ) {
        return 'Invalid Input'
    }

    let totalWaitingTimes = 0;
    for (const waitingTime of waitingTimes) {
        totalWaitingTimes += waitingTime;
    }

    const averageTime = Math.round(totalWaitingTimes / waitingTimes.length);

    const serial = serialNumber - 1 - waitingTimes.length;

    const isratWaitingTime = averageTime * serial;

    return isratWaitingTime;

}

