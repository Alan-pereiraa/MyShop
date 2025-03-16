interface User {
    name: string,
    email: string,
    senha: string,
}

interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: null,
}

// Reducer: Guarda o estado que desejamos compartilhar na aplicação
//          Manipula/Altera o estado

interface userAction {
    type: string,
    payload?: User,
}

export function userReducer(state = initialState, action: userAction): UserState {
    if(action.type === "user/login") {
        return {
            ...state,
            user: action.payload as User,
        }
    } else if (action.type == "user/logout") {
        return {
            ...state,
            user: null,
        }
    }

    return state;
}