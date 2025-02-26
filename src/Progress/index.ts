import deepEqual from 'fast-deep-equal';
import { createCanvasContext } from '../_util/jsapi/create-canvas-context';
import { getSystemInfo } from '../_util/jsapi/get-system-info';
import { Component, getValueFromProps } from '../_util/simply';
import { ProgressBarDefaultProps } from './props';

const animationFrameDuration = 16;

Component({
  props: ProgressBarDefaultProps,
  data: {
    curProgress: 0,
    canvasWidth: 100,
  },
  methods: {
    requestAnimationFrame(fn, duration = animationFrameDuration) {
      setTimeout(fn, duration);
    },
    getDrawColor() {
      const [strokeColor, trailColor] = getValueFromProps(this, [
        'strokeColor',
        'trailColor',
      ]);
      const drawColor = {
        strokeColor: strokeColor || '#1677ff',
        trailColor: trailColor || '#F5F5F5',
      };
      return drawColor;
    },
    async getCanvasContext() {
      if (this.ctx) return;
      const systemInfo = await getSystemInfo();
      let { pixelRatio } = systemInfo;
      const width = getValueFromProps(this, 'width');
      this.ctx = await createCanvasContext([this.canvasId, this]);
      this.ctx.imageSmoothingEnabled = true;
      this.ctx.imageSmoothingQuality = 'high';
      /// #if WECHAT
      // 微信小程序不支持 CanvasWidth 参数，此时 pixelRatio 默认为 1
      pixelRatio = 1;
      /// #endif
      this.setData({
        canvasWidth: width * pixelRatio,
      });
    },
    clearCanvas() {
      const ctx = this.ctx;
      const { canvasWidth } = this.data;
      ctx.clearRect(0, 0, canvasWidth, canvasWidth);
    },
    async updateCanvasProgress(prev) {
      const drawColor = this.getDrawColor();
      await this.getCanvasContext();
      let curRad = Math.floor((prev / 100) * 360);
      const targetRad = Math.floor((this.data.curProgress / 100) * 360);
      const direction = curRad < targetRad ? 1 : -1;
      const draw = () => {
        if (curRad == targetRad) return;
        const [speed, animation] = getValueFromProps(this, [
          'speed',
          'animation',
        ]);
        curRad = direction * speed + curRad;
        if (direction == -1) {
          curRad = Math.max(curRad, targetRad);
        } else {
          curRad = Math.min(curRad, targetRad);
        }
        this.clearCanvas();
        this.drawOrbit(drawColor.trailColor);
        this.drawProgress(drawColor.strokeColor, curRad);
        this.ctx.draw(true);
        this.requestAnimationFrame(
          draw,
          animation ? animationFrameDuration : 0
        );
      };

      draw();
    },
    drawProgress(color, rad) {
      const ctx = this.ctx;
      const { canvasWidth } = this.data;
      const strokeWidth = Number(getValueFromProps(this, 'strokeWidth'));
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = strokeWidth;
      ctx.setLineCap('round');
      ctx.arc(
        canvasWidth / 2,
        canvasWidth / 2,
        canvasWidth / 2 - strokeWidth,
        -Math.PI / 2,
        -Math.PI / 2 + (rad / 360) * 2 * Math.PI,
        false
      );
      ctx.stroke();
    },
    drawOrbit(color) {
      const ctx = this.ctx;
      const { canvasWidth } = this.data;
      const strokeWidth = Number(getValueFromProps(this, 'strokeWidth'));
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = strokeWidth;
      ctx.arc(
        canvasWidth / 2,
        canvasWidth / 2,
        canvasWidth / 2 - strokeWidth,
        0,
        Math.PI * 2,
        false
      );
      ctx.stroke();
    },
    calProgress() {
      const [p, type] = getValueFromProps(this, ['percent', 'type']);
      const percent = +p;
      if (isNaN(percent)) {
        return this.setData({ curProgress: 0 });
      }
      const prevProgress = this.data.curProgress;
      if (percent === prevProgress) {
        return;
      }
      this.setData({
        curProgress: percent > 100 ? 100 : percent < 0 ? 0 : percent,
      });
      if (type === 'circle') {
        this.setCanvasId();
        this.updateCanvasProgress(prevProgress);
      }
    },
    setCanvasId() {
      this.canvasId = this.$id
        ? `ant-progress-canvas-${this.$id}`
        : `ant-progress-canvas`;
    },
  },

  ctx: null as any,
  drawColor: null as any,
  canvas: null,
  /// #if ALIPAY
  didMount() {
    this.calProgress();
  },
  didUpdate(prevProps) {
    if (deepEqual(this.props, prevProps)) return;
    this.calProgress();
  },
  /// #endif

  /// #if WECHAT
  attached() {
    this.calProgress();
  },
  observers: {
    '**': function () {
      this.calProgress();
    },
  },
  /// #endif
});
