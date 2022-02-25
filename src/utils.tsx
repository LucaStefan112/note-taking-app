// JSON request builder:
export const createJSONRequestObject = (method: string, payload?: object) => ({method: method,headers:{'Content-Type': 'application/json'},body: JSON.stringify(payload)})

export const defaultNote = {
    id: -1,
    name: "",
    content: ""
}

// Function that verifies if string has at least one alfanumeric character:
export const hasAlphanum = (str: string) => {
    for(let i = 0; i < str.length; i++)
        if(('a' <= str[i] && str[i] <= 'z') || ('A' <= str[i] && str[i] <= 'Z') || ('0' <= str[i] && str[i] <= '9'))
            return true;
    return false;
}

export interface noteInterface{
    id: number,
    name: string,
    content: string
}

// Counter of new-line character in a string:
export function countLinesOf(str: string){
    let cnt = 0;
    for(let i = 0; i < str.length; i++) 
        if(str[i] == '\n') cnt++;
    return cnt;
}