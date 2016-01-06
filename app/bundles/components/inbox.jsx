import React, { PropTypes, Component } from 'react';

export default class Information extends Component {
    shouldComponentUpdate(){
        return false;
    }
    render() {
        return (
            <div>
                inboxtest
            </div>
        );
    }
}



Information.propTypes = {
    children: PropTypes.object
};