const unitWeitghtList = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function makeError2(unitWeitghtList: string) {
    throw new Error(`A unidade ${unitWeitghtList} não é uma unidade válida.`)
}

function convert2(value: number, forUnity: string, toUnity: string): number {

    if (!unitWeitghtList.includes(forUnity)) makeError(forUnity); 
    if (!unitWeitghtList.includes(toUnity)) makeError(toUnity); 

    const forIndex = unitWeitghtList.indexOf(forUnity); 
    const toIndex = unitWeitghtList.indexOf(toUnity); 
    const exponent = (toIndex - forIndex);

    return value * Math.pow(10, exponent);
}

console.log(convert2(5, "kg", "hg"));

