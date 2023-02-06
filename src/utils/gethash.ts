export const gethash=()=>
    location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/"