const fs = require('fs');

var texto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel mauris diam. In hac habitasse platea dictumst. Nam at lacinia eros. Proin ut facilisis tellus. Phasellus eget scelerisque ipsum. Donec hendrerit neque id consequat pretium. Aenean vel enim dignissim, venenatis risus auctor, semper lectus. Aenean massa elit, congue quis enim nec, fermentum aliquet risus. Mauris at enim et felis lobortis sollicitudin.';

var texto2 = 'Aenean non est arcu. Curabitur volutpat pellentesque dolor eu euismod. Etiam quis vulputate nunc. Quisque ac commodo tortor, vel fermentum metus. Aliquam auctor, quam sit amet rutrum feugiat, massa elit rhoncus felis, quis dictum ante mi in velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Ut consectetur augue ullamcorper felis consequat vulputate. Phasellus vehicula, massa et hendrerit congue, ligula lacus consequat augue, bibendum maximus ipsum felis vel ex. Aliquam erat volutpat. Curabitur pulvinar sagittis ligula, a finibus tellus tempor et. Maecenas leo mi, iaculis vitae porttitor vel, tincidunt et erat. Cras non scelerisque dui.';

var texto3 = 'In et consequat justo. Nulla vel porta eros, non consectetur ligula. Pellentesque arcu massa, interdum a elementum et, ultricies in felis. Duis laoreet mi turpis, eu luctus urna viverra sed. Donec quis cursus nibh. Suspendisse potenti. Vivamus laoreet nisl sed augue mattis, efficitur semper diam tincidunt. Nullam iaculis, metus quis varius aliquam, velit eros rutrum erat, et finibus nunc quam at ex. Suspendisse cursus ullamcorper erat eget rhoncus. Ut eu sollicitudin dui. Donec auctor eleifend dolor pharetra tempus. Phasellus ac commodo ipsum.';

// call back

console.log("\nPasso 1\n");

function funcaoAssinc(){
    fs.writeFile('teste.txt', `${texto}`, () => {
        console.log(texto);
        console.log("");
        fs.writeFile('teste2.txt', `${texto2}`, () => {
            console.log(texto2);
            console.log("");
            fs.writeFile('teste3.txt', `${texto3}`, () => {
                console.log(texto3);
                console.log("");
            })    
        });
    }); 
}

funcaoAssinc();

console.log("Passo 2\n");

console.log("Passo 3\n");
