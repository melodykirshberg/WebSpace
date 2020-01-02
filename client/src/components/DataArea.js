import React from "react";
import DataTable from "./DataTable";
import Nav from "./Nav";

 function DataArea({ users, handleSearch, search }) {
        return (
            <>
                <Nav handleSearch={handleSearch} search={search} />
                <div className="data-area">
                    <DataTable users={users} />
                </div>
            </>
        );
    }

export default DataArea;