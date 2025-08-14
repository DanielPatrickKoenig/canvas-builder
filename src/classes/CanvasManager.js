export default class CanvasManager {
    constructor({ canvas, width, height }) {
        this.canvasElement = canvas;
        this.context = this.canvasElement.getContext('2d');

        this.width = width;
        this.height = height;

        this.canvasElement.setAttribute('width', width);
        this.canvasElement.setAttribute('height', height);

        this.canvasItems = [];
        this.active = true;
        this.renderLoop();
    }
    renderCanvas () {
        this.context.clearRect(0, 0, this.width, this.height);
        this.canvasItems
            .filter(item => item.shouldRender())
            .sort((a, b) => a.z - b.z)
            .map(item => item.redraw());
    }
    async renderLoop () {
        while (this.active) {
            await new Promise(resolve => setTimeout(resolve, 25));
            this.renderCanvas();
        }
    }
}
