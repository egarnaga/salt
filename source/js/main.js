import {ieFix} from './utils/ie-fix';

import {initModals} from './modules/init-modals';
import {openMenu} from './modules/openMenu';
import {sliderHeader} from './modules/sliderHeader';
import {videoPopUp} from './modules/videoPopUp';
import {smoothScroll} from './modules/smoothScroll';

// Utils
// ---------------------------------

ieFix();

// Modules
// ---------------------------------

initModals();
openMenu();
sliderHeader();
videoPopUp();
smoothScroll();
