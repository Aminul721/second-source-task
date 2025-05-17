import React, { useState, useEffect } from "react";

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    return (
        <div className="container mx-auto mb-5">
            <h2 className="font-bold text-5xl mb-2">User List</h2>
            <ul className="list-disc grid grid-cols-3 gap-3">
                {users.map((user) => (
                    <li key={user.id} className="font-semibold">
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;