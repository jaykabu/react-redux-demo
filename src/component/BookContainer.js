import React from 'react';
import {connect} from 'react-redux';
import {buyBook} from '../redux';

const BookContainer = (props) => {
    return (
        <div>
            <h1>Number Of Books - {props.numberOfBook}</h1>
            <button onClick={props.buyBook}>Buy Book</button>
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
        buyBook: function () {
            dispatch(buyBook());
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(BookContainer);
