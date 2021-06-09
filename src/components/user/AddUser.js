import React, { useState } from "react";
import Card from "../ui/Card";
import classes from "./AddUser.module.css";
import Button from "../ui/Button";
import ErrorModal from "../ui/ErrorModal";
import Wrapper from "../Helper/Wrapper";

const AddUser = (props) => {
    // const nameRef = useRef();
    // const ageRef = useRef();

    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState();

    const usernameHandler = (e) => {
        setUsername(e.target.value);
    };

    const ageHandler = (e) => {
        setAge(e.target.value);
    };

    const addUserHandler = (e) => {
        e.preventDefault();
        // const enteredName = nameRef.current.value;
        // const enteredAge = ageRef.current.value;
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: "Invalid username and Age",
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
        // console.log(username, age);
        props.onAddUser(username, age);
        setUsername("");
        setAge("");
        // nameRef.current.value = '';
        // ageRef.current.value = '';
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
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
                    <label htmlFor="username">username</label>
                    <input
                        type="text"
                        id="username"
                        onChange={usernameHandler}
                        value={username}
                        // ref={nameRef}
                    />
                    <label htmlFor="age">Age(Years)</label>
                    <input
                        type="number"
                        id="age"
                        onChange={ageHandler}
                        value={age}
                        // ref={ageRef}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Card>
            )
        </Wrapper>
    );
};

export default AddUser;
