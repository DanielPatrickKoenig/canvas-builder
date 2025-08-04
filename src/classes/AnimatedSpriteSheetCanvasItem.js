import ImageCanvasItem from "./ImageCanvasItem";
export default class AnimatedSpriteSheetCanvasItem extends ImageCanvasItem {
    constructor({ id, width, height, x, y, z, scale, manager, source, data }){
        super({ id, width, height, x, y, z, scale, manager, source });
        this.data = data;
        this.step = 0;
        this.paused = false;
    }
    redraw(){
        if (this.loaded) {
            const { width, height } = this.getScaledSize();
            const currentStep = this.step;
            const { x, y, w, h } = this.data.frames[currentStep].frame;
            const sourceSize = this.data.frames[currentStep].spriteSourceSize;
            this.manager.context.drawImage(this.image, x, y, w, h, this.x, this.y, width, height);
            if (!this.paused) {
                this.step++;
                if (this.step >= this.data.frames.length){
                    this.step = 0;
                }
            }
        }
    }
}