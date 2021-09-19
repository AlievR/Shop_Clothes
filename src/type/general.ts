export interface Ibutton {
    onClick: () => void,
    type ?: string,
    size ?: string, 
    toggle ?: boolean,
    style ?: object
}


export interface Ipagination {
    onClick: (page: number) => void,
} 
