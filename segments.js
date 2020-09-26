const numberStructures = require('./numberStructures');
const numberBuilders = require('./numberBuilders');
const buildTop = numberBuilders.buildTop;
const buildMiddle = numberBuilders.buildMiddle;
const buildBottom = numberBuilders.buildBottom;
const buildUpperFiller = numberBuilders.buildUpperFiller;
const buildLowerFiller = numberBuilders.buildLowerFiller;


// build all of the numbers parts at the correct scale
const buildNumberParts = (num, size) => {
    
    // pull back the matching number structure Object 
    const numberObject = numberStructures[num]
    
    const builtNumber = {}
    builtNumber[num] = {
        'top': buildTop(numberObject, size),
        'middle': buildMiddle(numberObject, size),
        'bottom': buildBottom(numberObject, size),
        'upperFiller': buildUpperFiller(numberObject, size),
        'lowerFiller': buildLowerFiller(numberObject, size)
    }
    return builtNumber;
}

module.exports = buildNumberParts;