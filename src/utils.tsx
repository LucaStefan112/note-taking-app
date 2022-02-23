// JSON request builder:
export const createJSONRequestObject = (method: string, payload?: object) => ({method: "POST",headers:{'Content-Type': 'application/json'},body: JSON.stringify(payload)})

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