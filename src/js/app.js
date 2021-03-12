import Gui from './Gui.js';
import Logic from './Logic.js';

const gui = new Gui();
gui.init();
const logic = new Logic(gui);
logic.init();
