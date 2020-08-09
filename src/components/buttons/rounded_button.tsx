import style from '../../variables.module.scss';

import React, { Component } from 'react';

export default class RoundedButton extends Component<IRoundedButtonProps> {
	public static defaultProps: Partial<IRoundedButtonProps> = {
		color: style.deimosPrimary,
		textColor: 'black',
	};
	render() {
		return (
			<div
				className='m-3 p-2 rounded cursor-pointer font-normal'
				style={{
					backgroundColor: this.props.color,
					color: this.props.textColor,
				}}
				onClick={this.props.onClick}
			>
				{this.props.text}
			</div>
		);
	}
}

export interface IRoundedButtonProps {
	text: string;
	color?: string;
	textColor?: string;
	onClick?: () => void;
}
