import '../_util/assert-component2';
import { triggerComponentEvent } from '../_util/triggerComonentEvent';
/**
 *
 * @param instance 组件实例
 * @param e 事件
 * @returns 格式化后的事件
 */
function formatComponentEvent(instance, e) {
    // 微信自带 dataset
    return e;
}
Component({
    properties: {
        type: {
            value: '',
            type: String,
        },
        color: {
            type: String,
        },
        style: {
            type: String,
        },
        className: {
            type: String,
        },
    },
    options: {
        //@ts-ignore
        styleIsolation: 'apply-shared',
    },
    methods: {
        onTap: function (e) {
            triggerComponentEvent(this, 'onTap', formatComponentEvent(this, e));
        },
        catchTap: function (e) {
            triggerComponentEvent(this, 'catchTap', formatComponentEvent(this, e));
        },
    },
});
