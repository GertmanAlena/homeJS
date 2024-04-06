// экспорт
export const name = 'square';

export function draw(ctx, length, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, length, length);

    return {
        length: length,
        x: x,
        y: y,
        color: color
    };
}

//Импорт

import { name, draw, reportArea, reportPerimeter } from './modules/square.js';

// import * as Square from './modules/square.js'; // импортировать всё что можно