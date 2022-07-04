import { ProgressDefaultProps } from './props';
import { compareVersion } from '../_util/compareVersion';

const useNewApi = compareVersion(my.SDKVersion, '2.7.9') > 0

Component({
  props: ProgressDefaultProps,
  data: {
    
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
      return new Promise((resolve, reject) => {
        if (useNewApi) {
          const query = my.createSelectorQuery();
          query.select(`#${this.props.id}`).node().exec((res) => {
            this.canvas = res[0].node
            this.ctx = res[0].node.getContext('2d');
            resolve()
          })
        } else {
          this.ctx = my.createCanvasContext(this.props.id)
        }
      })
    },
    async updateProgress (prev) {
      await this.getCanvasContext()
      this.drawOrbit()
      
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
        this.requestAnimationFrame(draw)
      }

      draw()
    },
    requestAnimationFrame (fn) {
      if (useNewApi) {
        this.canvas.requestAnimationFrame(fn)
      } else {
        setTimeout(fn, 16)
      }
    },
    drawProgress (rad = 0) {
      const ctx = this.ctx
      const { width, height } = this.props
      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = (this.props.progressColor);
      ctx.lineWidth = this.props.progressWidth;
      ctx.arc(width / 2, height / 2, width / 2 - this.props.progressWidth, -Math.PI / 2, -Math.PI / 2 + rad / 360 * 2 * Math.PI, false);
      ctx.stroke();
    },
    drawOrbit () {
      const ctx = this.ctx
      const { width, height } = this.props     
      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = (this.props.orbitColor);
      ctx.lineWidth = this.props.progressWidth;
      ctx.arc(width / 2, height / 2, width / 2 - this.props.progressWidth, 0, Math.PI * 2, false);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    },
    clearCanvas () {
      const ctx = this.ctx
      const { width, height } = this.props     
      ctx.clearRect(0, 0, width, height);
    }
  }
})
