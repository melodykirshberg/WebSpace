import React from "react";
import DataBody from "./DataBody";

function DataTable({ users }) {
    return (
        <table className="table" id="employees">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Bio</th>
                </tr>
            </thead>

                <DataBody users={users}/>

        </table>
    );
};

export default DataTable;
