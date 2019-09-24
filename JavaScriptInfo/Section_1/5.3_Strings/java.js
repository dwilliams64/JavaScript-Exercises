let str = 'As sly as a fox, as strong as an ox';

let pos = 0;
let target = 'as';

while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos === -1) break;

    console.log(`Found at ${foundPos}`);
    pos = foundPos + 1;
}