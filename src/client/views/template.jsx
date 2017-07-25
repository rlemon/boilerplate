import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class Template extends React.Component {
	@observable open = false;
	constructor(props) {
		super(props)
	}
	@action toggleNavigation(event) {
		this.open = !this.open;
		console.log('this.open', this.open);
	}

	componentDidMount() {
		this.toggleNavigation();
	}

	render() {
		const {open} = this;
		console.log('render');
		return <div>
			state is: {open ? 'open' : 'closed'}<br />
			<button onClick={_ => this.toggleNavigation() }>toggle</button>
		</div>
	}
}

/*
ignore this ::
		return <div className='app-wrapper'>
			<AppBar 
				title='main appbar' 
				onLeftIconButtonTouchTap={event => this.toggleNavigation(event)}/>
			<Drawer
				open={this.open}
				docked={false}
				onRequestChange={open => console.log('request change', open)}
			>
				<AppBar
					title='menu'
					showMenuIconButton={false} />

				<Link
					to='/'
					onTouchTap={event => this.toggleNavigation(event)}
					className='nav-link'
				>
					<MenuItem>Home</MenuItem>
				</Link>

				<Link
					to='/login'
					onTouchTap={event => this.toggleNavigation(event)}
					className='nav-link'
				>
					<MenuItem>Login</MenuItem>
				</Link>

			</Drawer>
			<div className='app-body'>
				{this.props.children}
			</div>
		</div>;
*/