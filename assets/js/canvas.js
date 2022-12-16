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
        const bgCenter = {};
        bgCenter.x = ( firstLeftPoint.x + secondRightPoint.x ) / 2;
        const bgRadius = bgCenter.x - firstLeftPoint.x;
        bgCenter.y = firstLeftPoint.y; 
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = fillStyle;
        ctx.beginPath();
        ctx.arc(bgCenter.x, bgCenter.y, bgRadius, 0, Math.PI, false);
        ctx.fill()
}