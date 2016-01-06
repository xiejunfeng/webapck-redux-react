import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class Information extends Component {
    render() {
        return (
            <div>
                test
            </div>
        );
    }
}



Information.propTypes = {
    children: PropTypes.object
};