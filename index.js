export async function fechSomething(url) {
    var result = await fetch(url).then(x => x.status === 200 ? x.json() : null);
    if (!result)
        return "Error";

    return result;
}


export function fechBosta(number) {
    return number + 1;
}