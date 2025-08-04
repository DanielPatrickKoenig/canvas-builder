<template>
    <div class="canvas-builder">
        <table>
            <tr>
                <td></td>
                <td><button @click="moveItem(0, -5)">up</button></td>
                <td></td>
            </tr>
            <tr>
                <td><button @click="moveItem(-5, 0)">left</button></td>
                <td></td>
                <td><button @click="moveItem(5, 0)">right</button></td>
            </tr>
            <tr>
                <td></td>
                <td><button @click="moveItem(0, 5)">down</button></td>
                <td></td>
            </tr>
        </table>
        <canvas ref="canvas" />
    </div>
</template>

<script setup>

import { useTemplateRef, onMounted, ref } from 'vue';
import CanvasManager from '../classes/CanvasManager';
import ImageCanvasItem from '../classes/ImageCanvasItem';
import AnimatedSpriteSheetCanvasItem from '../classes/AnimatedSpriteSheetCanvasItem';
import dp from '../assets/dr-pepper-logo.png';
import loafImage from '../assets/loaf.png';
import loafData from '../assets/loaf.json';
const canvasRef = useTemplateRef('canvas');
const canvasManager = ref({});
const testImage = ref({});
const testAnimation = ref({});
const moveItem = (x, y) => {
    testAnimation.value.setPosition(testAnimation.value.x + x, testAnimation.value.y + y);
}
onMounted(() => {
    canvasManager.value = new CanvasManager({ canvas: canvasRef.value, width: 500, height: 800 });
    testImage.value = new ImageCanvasItem({ id: 'a', width: 120, height: 80, x: 20, y: 40, z: 11, scale: 1, manager: canvasManager.value, source: dp });
    testAnimation.value = new AnimatedSpriteSheetCanvasItem({ id: 'a', width: 110, height: 110, x: 20, y: 60, z: 12, scale: 1, manager: canvasManager.value, source: loafImage, data: loafData });
});

</script>