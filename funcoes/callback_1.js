// CALLBACK
const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (x ,y) => console.log(x - y)

function exec(func, x, y) {
    func(x, y)
}

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)
