export default class StringUtils {

    static toId(source) {
        // If there's numbers or special characters in the first element
        let firstElement;

        let parts = source.split(/[, ]/);

        parts = parts.filter( p => !!p);

        parts = parts.map( p => p.trim());

        parts = parts.map( p => p.toLowerCase());

        if (this.isNumber(parts[0])){
            firstElement = parts.shift();
            parts.push(firstElement);
        }

        let id = parts.join('-');

        console.log(id);
        
        return id;
    }

    static isNumber(str) {
        return /^\d+$/.test(str);
    }

}