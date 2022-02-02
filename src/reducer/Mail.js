  const Mail=(state={},action)=>{
    switch (action.type) {
        case "MAIL": 
        return {...state,mail:action.data}

        default: return state;
    }
}

export  default Mail;