const segments = require('./segments');

function buildTop(char, size) {
    return ` ${char.repeat(parseInt(size))} `
}
function buildLeft(char, size) {
    return ` ${char}${' '.repeat(parseInt(size-1))} `
}
function buildRight(char, size) {
    return ` ${' '.repeat(parseInt(size-1))}${char} `
}
function buildMid(left, middle, right, size) {
    const repeatSize = (size-2 < 3) ? 2 : size-2
    return ` ${left}${middle.repeat(parseInt(repeatSize))}${right}`
}

const charValues = { 'A': "_", 'B': "|", 'C': "|", 'D': "_", "E": '|', "F": '|', "G": '_' }

const builtSections = (num) => {
    const numberSections = { 'A': ``, 'B': ``, 'C': ``, 'D': ``, 'E': ``, 'F': ``, 'G': `` }
    const numberStructure = segments(num)
    for ( const item in numberStructure ) {
        numberStructure[item] === 1 ? numberSections[item] = charValues[item] : numberSections[item] = ' '
    }
    return numberSections
}

const buildNumber = (num, scale) => {
    const sections = builtSections(num)
    const totalLines = (scale * 2)
    const midLine = parseInt(scale)
    let builtNumber = {
        'A': `${buildTop(sections['A'],scale)}`,
        'B': `${buildRight(sections['B'],scale)}`,
        'C': `${buildRight(sections['C'],scale)}`,
        'D': `${buildMid(sections['E'],sections['D'],sections['C'],scale)}`,
        'E': `${buildLeft(sections['E'],scale)}`,
        'F': `${buildLeft(sections['F'],scale)}`,
        'G': `${buildMid(sections['F'],sections['G'],sections['E'],scale)}`,
    
    }

    return builtNumber
}

console.log(buildNumber(4,3))
// module.exports = buildNumber