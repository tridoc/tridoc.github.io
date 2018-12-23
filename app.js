import {
    MDCRipple
} from '@material/ripple';
import {
    MDCTopAppBar
} from '@material/top-app-bar/index';

const buttonRipple = [].slice.call(document.querySelectorAll('button'));
buttonRipple.forEach((element) => new MDCRipple(element));

const iconButton = [].slice.call(document.querySelectorAll('button'));
const iconButtonRipple = iconButton.forEach((element) => new MDCRipple(element));
//iconButtonRipple.unbounded = true;

const topAppBarElement = [].slice.call(document.querySelectorAll('.mdc-top-app-bar'));
topAppBarElement.forEach((element) => new MDCTopAppBar(element));
