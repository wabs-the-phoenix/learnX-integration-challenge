/**
 * 
 * @param {Element} canvas 
 * @param {number} height 
 * @param {number} width 
 */
export const setCanvasRightSize = (canvas, width) => {
    canvas.setAttribute('width', `${width}px`);
    canvas.setAttribute('height', `${width}px`)
}
/**
 * 
 * @param {Element} canvas 
 * @param {string} fillStyle 
 * @param {Object} center 
 *  @param {number} radius 
 */

export const drawCircle = (canvas, fillStyle, center, radius) => {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = fillStyle;
    ctx.beginPath();
    ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI);
    ctx.fill();
}

/**
 * 
 * @param {Element} canvas 
 * @param {string} fillStyle 
 * @param {Object} firstLeftPoint 
 * @param {Object} secondLeftPoint 
 * @param {Object} firstRightPoint 
 * @param {Object} secondRightPoint 
 */
export const drawSnake = (
    canvas,
    fillStyle,
    firstLeftPoint,
    secondLeftPoint,
    firstRightPoint,
    secondRightPoint
    ) => {
        const y = firstLeftPoint.y;
        const bgCenter = {};
        bgCenter.x = ( firstLeftPoint.x + secondRightPoint.x ) / 2;
        const bgRadius = bgCenter.x - firstLeftPoint.x;
        bgCenter.y = firstLeftPoint.y; 
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = fillStyle;
        ctx.beginPath();
        ctx.moveTo(firstLeftPoint.x, firstLeftPoint.y);
        ctx.bezierCurveTo(firstLeftPoint.x , y + 300, secondRightPoint.x, y + 300, secondRightPoint.x, secondRightPoint.y);
        ctx.moveTo(secondRightPoint.x, secondRightPoint.y);
        ctx.bezierCurveTo(secondRightPoint.x , y - 30, firstRightPoint.x, y - 30, firstRightPoint.x, firstRightPoint.y);
        ctx.moveTo(firstRightPoint.x, firstRightPoint.y);
        ctx.bezierCurveTo(firstRightPoint.x, y + 250, secondLeftPoint.x, y + 250, secondLeftPoint.x, secondLeftPoint.y);
        ctx.moveTo(secondLeftPoint.x, secondLeftPoint.y);
        ctx.bezierCurveTo(secondLeftPoint.x , y - 30, firstLeftPoint.x, y - 30, firstLeftPoint.x, secondLeftPoint.y);
        ctx.fill()
}