import React from "react";
import UserCard from "../UserCard/UserCard";






function Container(props) {




    return (



        <div className="container">
            <div className="row">
                <div className="col">
                    <UserCard {...props} />
                </div>


            </div>
        </div >


    )

}

export default Container