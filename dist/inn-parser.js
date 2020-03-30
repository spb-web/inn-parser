"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getNumber = (inn, pos) => {
    return Number(inn.charAt(pos));
};
const isValid = (inn) => {
    if (typeof inn === 'string' || typeof inn === 'number') {
        inn = inn.toString();
        if ((/^\d+$/).test(inn) === false) {
            return false;
        }
        // Проверка контрольных цифр
        if (inn.length === 10) {
            // Для 10-значного ИНН
            return getNumber(inn, 9) == ((2 * getNumber(inn, 0) +
                4 * getNumber(inn, 1) +
                10 * getNumber(inn, 2) +
                3 * getNumber(inn, 3) +
                5 * getNumber(inn, 4) +
                9 * getNumber(inn, 5) +
                4 * getNumber(inn, 6) +
                6 * getNumber(inn, 7) +
                8 * getNumber(inn, 8)) % 11) % 10;
        }
        else if (inn.length === 12) {
            // Для 12-значного ИНН
            return (getNumber(inn, 10) == ((7 * getNumber(inn, 0) +
                2 * getNumber(inn, 1) +
                4 * getNumber(inn, 2) +
                10 * getNumber(inn, 3) +
                3 * getNumber(inn, 4) +
                5 * getNumber(inn, 5) +
                9 * getNumber(inn, 6) +
                4 * getNumber(inn, 7) +
                6 * getNumber(inn, 8) +
                8 * getNumber(inn, 9)) % 11) % 10) &&
                (getNumber(inn, 11) == ((3 * getNumber(inn, 0) +
                    7 * getNumber(inn, 1) +
                    2 * getNumber(inn, 2) +
                    4 * getNumber(inn, 3) +
                    10 * getNumber(inn, 4) +
                    3 * getNumber(inn, 5) +
                    5 * getNumber(inn, 6) +
                    9 * getNumber(inn, 7) +
                    4 * getNumber(inn, 8) +
                    6 * getNumber(inn, 9) +
                    8 * getNumber(inn, 10)) % 11) % 10);
        }
        return false;
    }
    return false;
};
const innParser = (inn) => {
    const innStr = inn.toString(10);
    if (isValid(innStr)) {
        if (innStr.length === 12) {
            return {
                kio: null,
                isForeign: false,
                isIp: true,
                ifns: innStr.substr(0, 4),
                region: innStr.substr(0, 2),
                isValid: true,
                inn: innStr,
            };
        }
        if (innStr.indexOf('9909') === 0) {
            return {
                kio: innStr.substr(4, 4),
                isForeign: true,
                isIp: false,
                ifns: null,
                region: null,
                isValid: true,
                inn: innStr,
            };
        }
        return {
            kio: null,
            isForeign: false,
            isIp: false,
            ifns: innStr.substr(0, 4),
            region: innStr.substr(0, 2),
            isValid: true,
            inn: innStr,
        };
    }
    return {
        kio: null,
        isForeign: null,
        isIp: null,
        ifns: null,
        region: null,
        isValid: false,
        inn: innStr,
    };
};
exports.default = innParser;
