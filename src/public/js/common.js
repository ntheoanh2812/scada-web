//import SCADA from '../../libs/scada.min.js';
// config SCADA
const scd = new SCADA();
scd.src = './src/public/img/symbol/';

// run SCADA
let data = {
    cambien : false,
    run: false,
    bangtai : false,
    vanxa: false,
    vitri: document.getElementById('bangtai').style.left,
}

let t1 = new Timer(3); // timer t1 đếm 3s
setInterval(() => {
    data['bangtai'] = (data['run'] && !data['cambien']) || t1.q;
    data['cambien'] = (data['vitri'] >= 400) && (data['vitri'] <= 420);
    data['vanxa'] = data['run'] && data['cambien'] && !t1.q;
    t1.run(data['run'] && data['cambien']);
    scd.read(data);
    scd.onSymbolStatus('van', 'valve', 'vanxa'); // id , name , tag
    scd.onSymbolStatus('bangtai', 'bangtai', 'bangtai'); // id , name , tag
    if (data['bangtai']){
        data['vitri'] += 3;
        if(data['vitri'] >= 520){
            data['vitri'] = 91;
        }
    }
    scd.setLeft('bia', data['vitri']);
}, 50);

function Start(){
    data['run'] = true;
}

function Stop(){
    data['run'] = false;
}
