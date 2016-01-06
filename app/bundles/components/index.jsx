import React, { PropTypes, Component } from 'react';
export default class Information extends Component {
    render() {
        const {articleListDatas} = this.props
        console.log(this.props)
        return (
            <div>
                test
                <div>
                    <AticleList listdatas = {articleListDatas}></AticleList>
                </div>
            </div>
        );
    }
}



Information.propTypes = {
    articleListDatas:PropTypes.array
};