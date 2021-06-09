import React, { useState } from "react";
import AddUser from "./components/user/AddUser";
import UsersList from "./components/user/UsersList";

function App() {
    const [user, setUser] = useState([]);

    const addUserHandler = (name, age) => {
        setUser((prev) => [
            ...prev,
            {
                name: name,
                age: age,
                id: Math.floor(Math.random() * 1000000).toString(),
            },
        ]);
    };

    return (
        <React.Fragment>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={user} />
        </React.Fragment>
    );
}

export default App;
