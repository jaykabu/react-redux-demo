import React, { useState }from 'react';
import {connect} from 'react-redux';
import {buyBook} from '../redux';

const BookContainer = (props) => {

    const [number , setNumber] = useState(1);

    const handleChange = (e) => {
        setNumber(e.target.value);
    }

    return (
        <div>
            <h1>Book Conatiner</h1>
            <h2>Number Of Books - {props.numberOfBook}</h2>
            <input type="text" value={number} onChange={handleChange}/>
            <button onClick={()=>props.buyBook(number)}>Buy {number} Book</button>
        </div>
    )
};

const mapStatetoProps = (state) => {
    return {
        numberOfBook: state.numberOfBook
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        buyBook: function (number) {
            dispatch(buyBook(number) );
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(BookContainer);
