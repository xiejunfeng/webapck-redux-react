import React, { Component, PropTypes } from 'react'
import { List, ListItem } from 'amazeui-react'

export default class ListInstance extends Component {

    render() {
        return (
            <List>
                {this.props.listdatas.map(cell =>
                <ListItem key={cell.id}>
                    {cell.content}
                </ListItem>
                    )}
            </List>

        )
    }
}

ListInstance.propTypes = {
    listdatas:PropTypes.array
}