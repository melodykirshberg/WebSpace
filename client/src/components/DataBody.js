import React from "react";

function DataBody({ users }) {
    return (
        <tbody>
            {users.length === 0 ? <tr><td>No users to display</td></tr> :
                users.map(user => (
                    <tr>
                        <td><img src={user.picture.thumbnail} alt="smiley face"/></td>
                        <td>{user.name.first} {user.name.last}</td>
                        <td>{user.email}</td>
                        <td>{user.bio}</td>
                    </tr>
                ))}
            <tr>
                <td>

                </td>
            </tr>
        </tbody>
    )
}

export default DataBody;