import BaseCanvasItem from "./BaseCanvasItem";
export default class ImageCanvasItem extends BaseCanvasItem {
    constructor({ id, width, height, x, y, z, scale, manager, source }){
        super({ id, width, height, x, y, z, scale, manager });
        this.image = new Image();
        this.image.src = source;
        this.loaded = false;
        this.image.onload = () => {
            this.onImageLoaded();
        };
    }
    onImageLoaded () {
        this.loaded = true;
    }
    redraw(){
        if (this.loaded) {
            const { width, height } = this.getScaledSize();
            this.manager.context.drawImage(this.image, this.x, this.y, width, height);
        }
    }
}