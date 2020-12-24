import React from 'react';
import {useSelector , useDispatch} from "react-redux";
import {buyBook} from "../redux";

const HookBookContainer = () => {
    const numberOfBook = useSelector(state => state.numberOfBook);
    const dispatch = useDispatch()
    return (
        <>
            <div>
                <h1> Hook Container </h1>
                <h2>Number Of Book - {numberOfBook}</h2>
                <button onClick={() => dispatch(buyBook())}>BuyBook</button>
            </div>
        </>
    )
};

export default HookBookContainer;
