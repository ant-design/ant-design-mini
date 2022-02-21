import { Context } from '../_util/context';

export const componentContext = new Context();
export const componentDisabled = new Context();

// 该值区别于 componentContext 的地方在于，
// componentContext 的值用于通知 controlled 更新，
// 而 componentValue 用于 item.checked 更新
export const componentValue = new Context();
