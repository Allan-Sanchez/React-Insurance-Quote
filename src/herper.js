

export function getDiferentYear (year){
    return new Date().getFullYear() - year;
};


export function getCalcModel(model){
    let increment;

    switch (model) {
        case 'european':
        increment =1.30;
        break;
        case 'asian':
        increment =1.05;
        break;
        case 'american':
        increment =1.15;
        break;
    
        default:
            break;
    }

    return increment;
};

export function getPlan(plan) {
    return (plan === 'basic')? 1.20 : 1.50;
}

export function getCapitalLetter(letter) {
    return letter.charAt(0).toUpperCase() + letter.slice(1);
}