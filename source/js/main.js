import {ieFix} from './utils/ie-fix';

import {initModals} from './modules/init-modals';
import {openMenu} from './modules/openMenu';

// Utils
// ---------------------------------

ieFix();

// Modules
// ---------------------------------

initModals();
openMenu();
