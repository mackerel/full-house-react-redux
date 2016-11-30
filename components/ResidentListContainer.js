import { Component } from 'react';
import { render, connect } from 'react-redux';
import ResidentList from './ResidentList';

const mapStateToProps = (state) => {
    return {
        residents: state.residents
    }
}

const ResidentListContainer = connect(mapStateToProps)(ResidentList)

export default ResidentListContainer;