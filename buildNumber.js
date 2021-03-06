const segments = require('./segments');

function buildTop(char, size) {
    const repeatSize = (size-1 < 2) ? 2 : size
    return `  ${char.repeat(parseInt(repeatSize))}  `
}

function buildSegment(left, middle, right, size) {
    const repeatSize = (size-1 < 2) ? 2 : size
    let output = ``
    for (let index = 0; index < repeatSize; index++) {
        if(index === repeatSize-1) {
            output += `\n ${left}${middle.repeat(parseInt(repeatSize))}${right} `
        } else {
            output += `${index===0? '':'\n'} ${left}${' '.repeat(parseInt(repeatSize))}${right} `
        }
    }
    return output
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
    let builtNumber = {
        '1': `${buildTop(sections['A'],scale)}`,
        '2': `${buildSegment(sections['F'],sections['G'],sections['B'],scale)}`,
        '3': `${buildSegment(sections['E'],sections['D'],sections['C'],scale)}`,
    }
    return builtNumber
}

module.exports = buildNumber