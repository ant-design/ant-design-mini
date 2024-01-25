import { useMemo, useRef, useState } from 'functional-mini/compat';
import { useComponent, useEffect } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { createCanvasContext } from '../_util/jsapi/create-canvas-context';
import { getSystemInfo } from '../_util/jsapi/get-system-info';
import { IProgressBarProps, ProgressBarFunctionalProps } from './props';

function requestAnimationFrame(fn) {
  setTimeout(fn, 16);
}

function toNumber(value: string | number, defaultValue: number): number {
  if (typeof value === 'number') {
    return value;
  }
  if (typeof value === 'string') {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      return defaultValue;
    }
    return val;
  }
  return defaultValue;
}

const Progress = (props: IProgressBarProps) => {
  const [curProgress, setCurProgress] = useState(0);
  const canvasRequestRef = useRef<any>(null);
  const [canvasWidthState, setCanvasWidthState] = useState(100);
  async function getDrawColor() {
    const { strokeColor, trailColor } = props;
    const drawColor = {
      strokeColor: strokeColor || '#1677ff',
      trailColor: trailColor || '#F5F5F5',
    };
    return drawColor;
  }
  function drawProgress(
    ctx: any,
    canvasWidth: number,
    color: string,
    rad: number
  ) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = toNumber(props.strokeWidth, 8);
    ctx.setLineCap('round');
    ctx.arc(
      canvasWidth / 2,
      canvasWidth / 2,
      canvasWidth / 2 - toNumber(props.strokeWidth, 8),
      -Math.PI / 2,
      -Math.PI / 2 + (rad / 360) * 2 * Math.PI,
      false
    );
    ctx.stroke();
  }
  function drawOrbit(ctx: any, canvasWidth: number, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = toNumber(props.strokeWidth, 8);
    ctx.arc(
      canvasWidth / 2,
      canvasWidth / 2,
      canvasWidth / 2 - toNumber(props.strokeWidth, 8),
      0,
      Math.PI * 2,
      false
    );
    ctx.stroke();
  }
  function clearCanvas(ctx, canvasWidth: number) {
    ctx.clearRect(0, 0, canvasWidth, canvasWidth);
  }
  const instance = useComponent();

  const canvasId = useMemo(() => {
    if (instance.$id) {
      return `ant-progress-canvas-${instance.$id}`;
    }
    return `ant-progress-canvas`;
  }, []);

  async function getCanvasContext() {
    let ctx = canvasRequestRef.current;
    if (ctx) {
      return await ctx;
    }
    canvasRequestRef.current = createCanvasContext([canvasId, instance]);
    ctx = await canvasRequestRef.current;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    return ctx;
  }
  async function getCanvasWidth() {
    const systemInfo = await getSystemInfo();
    let { pixelRatio } = systemInfo;
    const { width } = props;
    return pixelRatio * width;
  }

  async function updateCanvasProgress(prev: number, targetPercent: number) {
    const drawColor = await getDrawColor();
    const ctx = await getCanvasContext();
    let curRad = Math.floor((prev / 100) * 360);
    const canvasWidth = await getCanvasWidth();
    setCanvasWidthState(canvasWidth);
    const targetRad = Math.floor((targetPercent / 100) * 360);
    const direction = curRad < targetRad ? 1 : -1;

    const draw = () => {
      if (curRad == targetRad) return;
      curRad = direction * props.speed + curRad;
      if (direction == -1) {
        curRad = Math.max(curRad, targetRad);
      } else {
        curRad = Math.min(curRad, targetRad);
      }
      clearCanvas(ctx, canvasWidth);
      drawOrbit(ctx, canvasWidth, drawColor.trailColor);
      drawProgress(ctx, canvasWidth, drawColor.strokeColor, curRad);
      ctx.draw(true);
      requestAnimationFrame(draw);
    };
    draw();
  }
  useEffect(() => {
    let percent = +props.percent;
    if (isNaN(percent)) {
      percent = 0;
    }
    if (percent !== curProgress) {
      setCurProgress(percent > 100 ? 100 : percent < 0 ? 0 : percent);
    }
    if (props.type === 'circle') {
      updateCanvasProgress(curProgress, percent);
    }
  }, [props.type, props.speed, props.percent]);

  return {
    curProgress,
    canvasWidth: canvasWidthState,
    canvasId,
  };
};

mountComponent(Progress, ProgressBarFunctionalProps);
