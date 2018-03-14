import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'
import ItemTypes from './ItemTypes'
import update from 'immutability-helper'

const style = {
	height: '12rem',
	width: '12rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	color: 'white',
	padding: '1rem',
	textAlign: 'center',
	fontSize: '1rem',
	lineHeight: 'normal',
	float: 'left',
}

const boxTarget = {
	drop() {
		return { name: 'Dustbin' }
	},
}

function collect(connect, monitor) {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver()
    };
  }

  
  
class Dustbin extends Component {
    constructor(props){
        super(props);
        this.state= {box: props.name}
    }

    pushBox(box){
        this.setState(update(this.state, {
            boxes: {
                $push: [box]
            }
        }));
    }

    removeBox(index){
        this.setState(update(this.state, {
            boxes: {
                $splice: [
                    [index, 1]
                ]
            }
        }));
    }

    static propTypes = {
		connectDropTarget: PropTypes.func.isRequired,
		isOver: PropTypes.bool.isRequired,
		canDrop: PropTypes.bool.isRequired,
    }

	render() {
		const { canDrop, isOver, connectDropTarget } = this.props
		const isActive = canDrop && isOver

		let backgroundColor = '#222'
		if (isActive) {
			backgroundColor = 'darkgreen'
		} else if (canDrop) {
			backgroundColor = 'darkkhaki'
		}

		return connectDropTarget(
			<div style={{ ...style, backgroundColor }}>
				{isActive ? 'Release to drop' : 'Drag a box here'}
			</div>,
		)
	}
}
export default DropTarget(ItemTypes.BOX, boxTarget, collect)(Dustbin)