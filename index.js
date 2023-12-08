export async function fechSomething(url) {
    var result = await fetch(url).then(x => x.status === 200 ? x.json() : null);
    if (!result)
        return "Error";

    return result;
}

export function fechSomethingMore(number) {
    return number + 1;
}