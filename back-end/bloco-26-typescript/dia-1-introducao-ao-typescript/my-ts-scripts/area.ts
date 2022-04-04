const unitAreaList = ["km2", "hm2", "dam2", "m2", "dm2", "cm2", "mm2"];

function makeError3(unitAreaList: string) {
    throw new Error(`A unidade ${unitAreaList} não é uma unidade válida.`)
}

function convert3(value: number, forUnity: string, toUnity: string): number {

    if (!unitAreaList.includes(forUnity)) makeError(forUnity); 
    if (!unitAreaList.includes(toUnity)) makeError(toUnity); 

    const forIndex = unitAreaList.indexOf(forUnity); 
    const toIndex = unitAreaList.indexOf(toUnity); 
    const exponent = (toIndex - forIndex);

    return value * Math.pow(10, exponent);
}

console.log(convert2(5, "kg", "hg"));

