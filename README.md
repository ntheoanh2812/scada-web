# **This is example for SCADA UI**

- Add folder 'libs' to your project then add code:

HTML:
```html
<script src="./src/libs/scada.js"></script>
```
Javascript:
```javascript
// Define SCADA object
const scd = new SCADA();
scd.src = './src/public/img/symbol/';
// Define tag
let data = {
    tag1 : false,
    tag2: 0,
    tag3: 102,
}

await scd.read(data); // read data
await scd.showInputData('id', data['tag2'], 1); // show input data
await scd.showIOData('id', data['tag2'], false, 1); // show, edit data
await scd.onSymbolStatus('id', 'img_name', data['tag1']); // change color image object
await scd.onChangeColor('id', data['tag1'], 'green', 'red'); // change color button
await scd.onSymbolDisplay('idOn', 'idOff', data['tag1']); // show/hide 2 object
await scd.setLeft('id', data['tag2']);  // move the object to the left/right
await scd.setTop('id', data['tag3']); // move the object to the top/bottom
```

# **Git**
 - commit : ```scada project example```
