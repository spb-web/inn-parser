declare type InnInformation = {
    /**
     * Код иностранной организации (КИО) — номер налогоплательщика,
     * присваиваемый иностранной организации налоговым органом при
     * постановке на налоговый учёт в Российской Федерации. Является
     * составной частью идентификационного номера налогоплательщика
     * (ИНН) и занимает в этом номере цифры с пятой по девятую (первые
     * четыре заняты индексом, десятая — контрольное число).
     *
     * Будет являться строкой если значения полей `isForeign` и
     * `isValid` равно `true`
     */
    kio: string;
    /**
     * Указывает принадлежит ли ИНН иностранному юридического лицу
     */
    isForeign: true;
    /**
     * Указывает принадлежит ли ИНН индивидуальному предпринимателю
     */
    isIp: false;
    /**
     * Будет являться строкой если значение поля `isForeign` будет
     * равно `false`, и значение поля `isValid` будет равно `true`
     */
    ifns: null;
    /**
     * Будет являться строкой если значение поля `isForeign` будет
     * равно `false`, и значение поля `isValid` будет равно `true`
     */
    region: null;
    /**
     * Указывает был ли передан валидный ИНН
     */
    isValid: true;
    inn: string;
} | {
    kio: null;
    isForeign: false;
    isIp: boolean;
    ifns: string;
    region: string;
    isValid: true;
    inn: string;
} | {
    kio: null;
    isForeign: null;
    isIp: null;
    ifns: null;
    region: null;
    isValid: false;
    inn: string;
};
declare const innParser: (inn: string | number) => InnInformation;
export default innParser;
//# sourceMappingURL=inn-parser.d.ts.map