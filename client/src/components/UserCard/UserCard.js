import React, { useReducer } from "react";
import Card from 'react-bootstrap/Card';
import styles from "./Usercard.module.css";




function UserCard(props) {

  return (
    <div className="container">
      <div className="row">
        {
          props.results.map(user => (


            <Card className={styles["userCard"] + " " + styles["flip-box"]} style={{ width: '14rem' }} >
                <div className={styles["flip-box-inner"]}>
                  <div className={styles["flip-box-front"]}>
                    <div className={styles["col text-center"]}>
                      <img className={styles["user-card-img"]} src="https://via.placeholder.com/180x160" width="" />
                    <h6 className={styles["user-name"] + " " + styles["text-center"]}>{user.name}</h6>
                    </div>
                  </div>

                  <Card.Body className={styles["flip-box-back"]}>
                      <h6 className={styles["user-name"] + " " + styles["text-center"]}>{user.name}</h6>
                      <Card.Text>
                        <p className={styles["bio"] + " " + styles["text-center"]}>{user.bio}</p>
                        <div className={styles["profile-info"]}>
                          <p className={styles["email"]}> <small>Email:</small> <a href="mailto:">{user.email}</a> </p>
                          <p className={styles["site"]}><small>Website:</small>{user.website}</p>
                          <p className={styles["company"]}><small>Company:</small> {user.company}</p>
                          <small className={styles["text-center"]}>What brings {user.name} here today?</small>
                          <p className={styles["motives"]}>{user.motives}</p>
                        </div>
                      </Card.Text>
                  </Card.Body>
                </div>
            </Card>
          ))
        }
      </div>
    </div>

  )
}

export default UserCard