import React, { useState } from "react";
import Card from "../ui/Card";
import classes from "./AddUser.module.css";
import Button from "../ui/Button";
import ErrorModal from "../ui/ErrorModal";

const AddUser = (props) => {
    const [userName, setUserName] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState();

    const userNameHandler = (e) => {
        setUserName(e.target.value);
    };

    const ageHandler = (e) => {
        setAge(e.target.value);
    };

    const addUserHandler = (e) => {
        e.preventDefault();
        if (userName.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: "Invalid Username and Age",
                message: "Enter Valid Name and Age",
            });
            return;
        }

        if (parseInt(age) <= 0) {
            setError({
                title: "Invalid Age",
                message: "Enter Valid Age",
            });
            return;
        }
        // console.log(userName, age);
        props.onAddUser(userName, age);
        setUserName("");
        setAge("");
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onClick={errorHandler}
                />
            )}
            (
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        onChange={userNameHandler}
                        value={userName}
                    />
                    <label htmlFor="age">Age(Years)</label>
                    <input
                        type="number"
                        id="age"
                        onChange={ageHandler}
                        value={age}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Card>
            )
        </div>
    );
};

export default AddUser;
