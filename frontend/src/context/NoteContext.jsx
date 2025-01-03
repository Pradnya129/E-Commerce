// import { createContext } from "react";
// import React from "react";
// export const NoteContext=createContext()


// const Notestate=(props)=>{
//     const user={
//         name:'harry',
//         std:'5b'
//     }
// return(
// <NoteContext.Provider value={user}>
// {props.children}
// </NoteContext.Provider>
// )
// }

// export default Notestate

import React from "react";
import { createContext } from "react";
export const NoteContext=createContext()

const NoteState=(props)=>{
    const user={
        name:"pradnya"
    }
    return(
        <NoteContext.Provider value={user}>
         {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState

