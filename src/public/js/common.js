import SCADA from '../../libs/scada.min.js';
const scd = new SCADA();

scd.read({
    den1: true,
});