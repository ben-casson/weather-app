export function convertEpochToNormalTime(seconds) {
    let myDate = '' + new Date(seconds * 1000);
    return myDate.substring(16, 21);
}