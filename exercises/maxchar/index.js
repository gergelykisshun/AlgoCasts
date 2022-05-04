// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const strArr = str.split('');
    const strObj = {}
    strArr.forEach(char => {
        if(strObj.hasOwnProperty(char)){
            strObj[char] = strObj[char] + 1;
        } else {
            strObj[char] = 1;
        }
    });
    return Object.keys(strObj).reduce((prev, cur) => {
        return strObj[cur] > strObj[prev] ? cur : prev
    })
}

module.exports = maxChar;
