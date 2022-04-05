export interface SchemeInterface {
    id: number,
    name: string,
    status: string
    modifyBy: string,
    modifyDate: Date,
    description: string,//null
    triggerdateLbman: boolean,
    triggerdateSvcscat: string, // null
    triggerdateItem: boolean,
    isinterimtrigger: boolean,
    constraintLbman: boolean,
    constraintSvcscat: boolean, //null
    constraintItem: boolean,
    purma: boolean,
    nntm: boolean,
    pdbtm: boolean,
    ssart: boolean,
    triger: number,
    interimtrigger: number, // null
    constraint: number,// null
    lbmanEffectivedeadlineinfo: number,
    lbmanProcbasisref: number,
    editable: boolean,

}