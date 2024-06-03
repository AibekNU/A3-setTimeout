const text = document.querySelector('.text');

function sayHI () {
    text.textContent = 'Hello, Aibek Nurzhuma';
};

function sayHIAlert () {
    text.textContent = 'How are you?';
};

function sayHIGood () {
    text.textContent = 'Қашан үйленесің =) ?';
};

setTimeout(sayHI, 1000);
setTimeout(sayHIAlert, 3000);   
setTimeout(sayHIGood, 5000); 

//----------------------------------------------------------------

// const text = document.querySelector(".text");

// const sayHI = () => (text.textContent = "Hello, Aibek Nurzhuma");
// const sayHIAlert = () => (text.textContent = "How are you?");
// const sayHIGood = () => (text.textContent = "Бәрі жақсыма =) ?");

// setTimeout(sayHI, 1000);
// setTimeout(sayHIAlert, 3000);
// setTimeout(sayHIGood, 5000); 