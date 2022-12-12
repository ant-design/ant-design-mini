import { ProgressBarDefaultProps } from './props';

Component({
  props: ProgressBarDefaultProps,
  data: {
    curProgress: 0,
    canvasWidth: 100,
  },
  ctx: null as any,
  drawColor: null as any,
  canvas: null,
  didMount() {
    this.calProgress();
  },
  didUpdate() {
    this.calProgress();
  },
  methods: {
    requestAnimationFrame(fn) {
      setTimeout(fn, 16);
    },
    async getDrawColor() {
      const { strokeColor, trailColor } = this.props;
      const drawColor = {
        strokeColor: strokeColor || '#1677ff',
        trailColor: trailColor || '#F5F5F5',
      };
      return drawColor;
    },
    async getCanvasContext() {
      if (this.ctx) return;
      const systemInfo = await my.getSystemInfo();
      const { pixelRatio } = systemInfo;
      return new Promise<void>((resolve) => {
        this.ctx = my.createCanvasContext(`progress-canvas-${this.$id}`);
        this.ctx.imageSmoothingEnabled = true;
        this.ctx.imageSmoothingQuality = 'high';
        my.createSelectorQuery()
          .select('.ant-progress')
          .boundingClientRect()
          .exec((res) => {
            const { width } = res[0];
            this.setData({
              canvasWidth: width * pixelRatio,
            });
            resolve();
          });
      });
    },
    clearCanvas() {
      const ctx = this.ctx;
      const { canvasWidth } = this.data;
      ctx.clearRect(0, 0, canvasWidth, canvasWidth);
    },
    async updateCanvasProgress(prev) {
      const drawColor = await this.getDrawColor();
      await this.getCanvasContext();
      let curRad = Math.floor((prev / 100) * 360);
      const targetRad = Math.floor((this.data.curProgress / 100) * 360);
      const direction = curRad < targetRad ? 1 : -1;

      const draw = () => {
        if (curRad == targetRad) return;
        curRad = direction * this.props.speed + curRad;
        if (direction == -1) {
          curRad = Math.max(curRad, targetRad);
        } else {
          curRad = Math.min(curRad, targetRad);
        }
        this.clearCanvas();
        this.drawOrbit(drawColor.trailColor);
        this.drawProgress(drawColor.strokeColor, curRad);
        this.ctx.draw(true);
        this.requestAnimationFrame(draw);
      };

      draw();
    },
    drawProgress(color, rad) {
      const ctx = this.ctx;
      const { canvasWidth } = this.data;
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = this.props.strokeWidth;
      ctx.setLineCap('round');
      ctx.arc(
        canvasWidth / 2,
        canvasWidth / 2,
        canvasWidth / 2 - this.props.strokeWidth,
        -Math.PI / 2,
        -Math.PI / 2 + (rad / 360) * 2 * Math.PI,
        false
      );
      ctx.stroke();
    },
    drawOrbit(color) {
      const ctx = this.ctx;
      const { canvasWidth } = this.data;
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = this.props.strokeWidth;
      ctx.arc(
        canvasWidth / 2,
        canvasWidth / 2,
        canvasWidth / 2 - this.props.strokeWidth,
        0,
        Math.PI * 2,
        false
      );
      ctx.stroke();
    },
    calProgress() {
      const percent = +this.props.percent;
      if (isNaN(percent)) {
        return this.setData({ curProgress: 0 });
      }
      const prevProgress = this.data.curProgress;
      this.setData({
        curProgress: percent > 100 ? 100 : percent < 0 ? 0 : percent,
      });
      if (this.props.type === 'circle') {
        this.updateCanvasProgress(prevProgress);
      }
    },
  },
});
