const sayHello = (name) => {
    console.log(`Hello ${name},\nGood to see you again!!`);
};

const meetUp = (name1, name2) => {
    console.log(`${name1} and ${name2} are in a meeting rn...`);
};

module.exports = { sayHello, meetUp };
