//import react into the bundle
import React, { createContext, useState } from "react";

const MyContext = createContext(null);

const store = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            todos: ['Drink Water', 'Make Dinner'],
            userProfile: { name: 'Nikhil', phoneNumber: '0123456789'},
            contactList: []
        },
        actions: {
            addTask: (newTask) => {
                setStore({
                    ...store,
                    todos: [...getStore().todos, newTask]
                })
            },
            removeTask: (id) => {
                let newTodos = [...getStore().todos];
                newTodos.splice(id, 1);
                setStore({
                    ...store,
                    todos: newTodos
                })
            },
            changeUsername: (newUsername) => {
                setStore({
                    ...store,
                    userProfile: {
                        ...getStore().userProfile,
                        name: newUsername
                    }
                })
            }
        }
    }
}

export const ThemeProvider = ({children}) => {
    const [state, setState] = useState(
        store({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: (updatedStore) => {
                setState({
                    store: Object.assign(state.store, updatedStore),
                    actions: {...state.actions},
                })
            }
        })
    )

    return (
        <MyContext.Provider value={state}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContext