export default class BaseCanvasItem {
    constructor({ id, width, height, x, y, z, scale, manager }) {
        this.id = id;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.z = z;
        this.scale = scale;
        this._width = this.width * this.scale;
        this._height = this.height * this.scale;
        this.manager = manager;
        this.loaded = true;
        this.hidden = false;
        this.registerItem();
    }
    setPosition (x, y) {
        this.x = x;
        this.y = y;
    }
    getScaledSize () {
        return {
            width: this.width * this.scale,
            height: this.height * this.scale,
        }
    }
    registerItem () {
        this.manager.canvasItems.push(this);
    }
    remove (id) {
        this.manager.canvasItems = this.manager.canvasItems.filter(item => item.id !== id);
    }
    redraw(){

    }
    shouldRender(){
        return !this.hidden;
    }
}