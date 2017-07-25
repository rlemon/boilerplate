import React from 'react'; 
import ReactDOM from 'react-dom';
import AppRouter from './router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const container = document.createElement('div');
container.id = 'app-react-container';

/*
 darkBaseTheme object
{
   "spacing":{
      "iconSize":24,
      "desktopGutter":24,
      "desktopGutterMore":32,
      "desktopGutterLess":16,
      "desktopGutterMini":8,
      "desktopKeylineIncrement":64,
      "desktopDropDownMenuItemHeight":32,
      "desktopDropDownMenuFontSize":15,
      "desktopDrawerMenuItemHeight":48,
      "desktopSubheaderHeight":48,
      "desktopToolbarHeight":56
   },
   "fontFamily":"Roboto, sans-serif",
   "borderRadius":2,
   "palette":{
      "primary1Color":"#0097a7",
      "primary2Color":"#0097a7",
      "primary3Color":"#757575",
      "accent1Color":"#ff4081",
      "accent2Color":"#f50057",
      "accent3Color":"#ff80ab",
      "textColor":"rgba(255, 255, 255, 1)",
      "secondaryTextColor":"rgba(255, 255, 255, 0.7)",
      "alternateTextColor":"#303030",
      "canvasColor":"#303030",
      "borderColor":"rgba(255, 255, 255, 0.3)",
      "disabledColor":"rgba(255, 255, 255, 0.3)",
      "pickerHeaderColor":"rgba(255, 255, 255, 0.12)",
      "clockCircleColor":"rgba(255, 255, 255, 0.12)"
   }
}

*/

document.body.appendChild(container);

import './styles/styles.scss';

//muiTheme={getMuiTheme(darkBaseTheme)}
ReactDOM.render(<MuiThemeProvider >{AppRouter()}</MuiThemeProvider>, container);