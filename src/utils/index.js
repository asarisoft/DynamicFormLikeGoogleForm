export * from './screensize'
export * from './colors'


export function removeHTMlTag(str) {
    if ((str===null) || (str===''))
        return "";
    else
        str = str.toString();
    return str.replace( /(<([^>]+)>)/ig, '');
}