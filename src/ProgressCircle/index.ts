import { ProgressDefaultProps } from './props';

Component({
  props: ProgressDefaultProps,
  data: {
    canvasWidth: 100,
    canvasHeight: 100,
  },
  ctx: null,
  canvas: null,
  async didMount () {
    this.updateProgress(0)
  },
  async didUpdate (prev) {
    if (this.props.percent !== prev.percent) {
      this.updateProgress(prev.percent)
    }
  },
  methods: {
    async getCanvasContext () {
      if (this.ctx) return
      const systemInfo = await my.getSystemInfo()
      const { pixelRatio } = systemInfo
      return new Promise((resolve, reject) => {
        this.ctx = my.createCanvasContext(`progressbar-canvas-${this.$id}`)
        this.ctx.imageSmoothingEnabled = true
        this.ctx.imageSmoothingQuality = 'high'
        
        my.createSelectorQuery().select(".amd-progressbar-wrapper").boundingClientRect().exec(res => {
          const { width, height } = res[0]

          this.setData({
            canvasHeight: height * pixelRatio,
            canvasWidth: width * pixelRatio,
            pixelRatio
          })
          resolve()
        })
      })
    },
    async updateProgress (prev) {
      await this.getCanvasContext()
      
      let curRad = Math.floor(prev / 100 * 360)
      const targetRad = Math.floor(this.props.percent / 100 * 360)
      const direction = curRad < targetRad ? 1 : -1 

      const draw = () => {
        if (curRad == targetRad) return
        curRad = direction * this.props.speed + curRad
        if (direction == -1) {
          curRad = Math.max(curRad, targetRad)
        } else {
          curRad = Math.min(curRad, targetRad)
        }
        this.clearCanvas()
        this.drawOrbit()
        this.drawProgress(curRad)
        this.ctx.draw(true)
        this.requestAnimationFrame(draw)
      }

      draw()
    },
    requestAnimationFrame (fn) {
      setTimeout(fn, 16)
    },
    drawProgress (rad = 0) {
      const ctx = this.ctx
      const { canvasWidth, canvasHeight } = this.data
      ctx.beginPath();
      ctx.strokeStyle = (this.props.progressColor);
      ctx.lineWidth = (this.props.progressWidth);
      ctx.setLineCap("round");
      ctx.arc(canvasWidth / 2, canvasHeight / 2, canvasWidth / 2 - this.props.progressWidth, -Math.PI / 2, -Math.PI / 2 + rad / 360 * 2 * Math.PI, false);
      ctx.stroke();
    },
    drawOrbit () {
      const ctx = this.ctx
      const { canvasWidth, canvasHeight } = this.data    
      ctx.beginPath();
      ctx.strokeStyle = (this.props.orbitColor);
      ctx.lineWidth = (this.props.progressWidth);
      ctx.arc(canvasWidth / 2, canvasHeight / 2, canvasWidth / 2 - this.props.progressWidth, 0, Math.PI * 2, false);
      ctx.stroke();
    },
    clearCanvas () {
      const ctx = this.ctx
      const { canvasWidth, canvasHeight } = this.data
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    }
  }
})
