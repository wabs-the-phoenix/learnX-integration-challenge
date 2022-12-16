//#region : imports
import { setCanvasRightSize, drawCircle, drawSnake } from "./canvas.js";
//#endregion
(() => {

    //#region : constants
    const state = {};
    const BG_IMG_COLOR = 'rgba(255,255,255,0.5)';
    const SNAKE_COLOR = 'rgba(76,63,175,0.9)';
    //#endregion

    //#region : usuals functions
    /**
     * 
     * @param {number} width 
     */
    const calculateSnakePoints = (width) => {
        const y = width / 2;
        const x1 = 5 * width / 100;
        const x2 = x1 * 1.2;
        const x4 = width - x1;
        const x3 = width - 1.2 * x4;
        return {
            firstLeftPoint : {x: x1, y},
            secondLeftPoint : {x: x2, y},
            firstRightPoint : {x: x3, y},
            secondRightPoint : {x: x4, y}

        }

    }
    //#endregion

    //#region : listenners
    //#endregion

    //#region : selections
    const bgCanvas = document.querySelector('#bg-img');
    const imgContainer = document.querySelector('.img-container');
    const snake = document.querySelector('#snake');
    //#endregion

    //#region : start
    let canvasWidth = imgContainer.clientWidth;
    let radius = canvasWidth / 2;
     setCanvasRightSize(bgCanvas, canvasWidth );
     setCanvasRightSize(snake, canvasWidth );
     drawCircle(bgCanvas, BG_IMG_COLOR, { x: radius, y: radius}, canvasWidth / 2);
     const coordinate = calculateSnakePoints(canvasWidth);
     const { firstLeftPoint , secondLeftPoint, firstRightPoint, secondRightPoint } = coordinate;
     drawSnake(snake,SNAKE_COLOR , firstLeftPoint, secondLeftPoint, firstRightPoint, secondRightPoint);
    //#endregion
})()