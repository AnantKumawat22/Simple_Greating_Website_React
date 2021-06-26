import React from 'react';

let greet;
let greetcss = {
    color: 'green',
}
let date = new Date();
date = date.getHours();
if (date >= 1 && date < 12) {
    greet = "Good Morning.";
    greetcss.color = 'green';
}
else if (date >= 12 && date < 16) {
    greet = "Good Afternoon.";
    greetcss.color = 'orange';
}
else if (date >= 16 && date < 20) {
    greet = "Good Evening.";
    greetcss.color = 'blue';
}
else {
    greet = "Good Night.";
    greetcss.color = 'purple';
}

function App() {

    return (
        <div>
            <h1>Hello Sir, <span style={greetcss}>{greet}</span></h1>
        </div>
    );
}

export default App;