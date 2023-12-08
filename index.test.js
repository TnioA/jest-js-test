import { fechSomething, fechSomethingMore } from "./index.js";

test('Testing fechSomething()', async () => {
    const data = await fechSomething("https://api.escuelajs.co/api/v1/products");

    expect(data !== null).toBe(true);
});

test('Testing fechSomethingMore()', () => {
    const data = fechSomethingMore(1);

    expect(data).toBe(2);
});
