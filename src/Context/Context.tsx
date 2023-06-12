import React, { createContext, useState } from 'react';



export interface User {
    id?: string,
    email: string
}

export const UserContext = createContext<{
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
}>({
    user: { id: "", email: "" },
    setUser: () => { },
});


interface ContextProps {
    children: React.ReactNode;
}

const UserContextProvider = ({ children }: ContextProps) => {
    const [user, setUser] = useState<User>({
        id: "",
        email: ""
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;