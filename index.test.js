import { fechBosta, fechSomething } from "./index.js";

test('Testing fechBosta()', () => {
    const data = fechBosta(1);

    expect(data).toBe(2);
});



test('Testing fechSomething()', async () => {
    const data = await fechSomething("http://192.168.0.12:30000/bets/bestnumber");

    expect(data !== null).toBe(true);
});
