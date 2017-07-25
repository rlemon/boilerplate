import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

//const state = observable({open:false})

@observer
export default class Template extends React.Component {
	@observable isRed = false;
	constructor(props) {
		super(props)
		console.log(this.isRed);
	}
	@action toggleNavigation(event) {
		this.isRed = !this.isRed;
	}

	render() {
		return <div style={{backgroundColor: this.isRed ? 'red' : 'blue'}}>
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