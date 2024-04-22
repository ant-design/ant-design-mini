import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import dayjs from 'dayjs';
import { describe, expect, it } from 'vitest';
import { createDatePicker } from './utils';
import { sleep } from 'tests/utils';

const date = [
  dayjs().get('year'),
  dayjs().get('month') + 1,
  dayjs().get('date'),
];

describe('DatePicker', () => {
  it('测试 onCancel 事件', async () => {
    const { onCancel, callMethod } = createDatePicker({
      'data-test': '123',
    } as any);
    callMethod('onCancel');
    expect(onCancel).toBeCalledWith(
      fmtEvent({
        'data-test': '123',
      })
    );
  });

  it('测试 onVisibleChange 事件', async () => {
    const { onVisibleChange, callVisibleChange } = createDatePicker();
    await callVisibleChange(true);
    expect(onVisibleChange.mock.lastCall).toEqual([true, fmtEvent({})]);
    await callVisibleChange(false);
    expect(onVisibleChange.mock.lastCall).toEqual([false, fmtEvent({})]);
  });

  it('测试 onOk 事件', async () => {
    const { onOk, callMethod, callVisibleChange } = createDatePicker();
    await callVisibleChange(true);
    await callMethod('onChange', [2023, 1, 2]);
    await callMethod('onOk');
    expect(onOk.mock.lastCall).toEqual([
      dayjs('2023-01-02').toDate(),
      '2023/01/02',
      fmtEvent({}),
    ]);
  });

  it('当前时间不在 min max 范围', async () => {
    const { instance, callVisibleChange } = createDatePicker({
      min: new Date('2020-01-01'),
      max: new Date('2021-01-01'),
    });
    await callVisibleChange(true);
    expect(instance.getData().currentValue).toEqual([2020, 1, 1]);
  });

  it('测试 columns', async () => {
    const { instance, callVisibleChange } = createDatePicker();
    await callVisibleChange(true);
    expect(instance.getData().currentValue).toEqual(date);
    expect(instance.getData().columns.length).toEqual(3);
    expect(instance.getData().columns[0]).toEqual(
      new Array(21).fill(1).map((_, i) => {
        const value = dayjs().subtract(10, 'year').add(i, 'year').get('year');
        return {
          label: `${value}年`,
          value: value,
        };
      })
    );
    expect(instance.getData().columns[1]).toEqual(
      new Array(12).fill(1).map((_, i) => {
        return {
          label: `${i + 1}月`,
          value: i + 1,
        };
      })
    );
    expect(instance.getData().columns[2]).toEqual(
      new Array(dayjs().endOf('month').date()).fill(1).map((_, i) => {
        return {
          label: `${i + 1}日`,
          value: i + 1,
        };
      })
    );
  });

  it('非受控模式修改', async () => {
    const { instance, changeSelect, callOk, callVisibleChange } = createDatePicker({
      defaultValue: dayjs('2023-01-01').toDate(),
    });
    await callVisibleChange(true);
    expect(instance.getData().formattedValueText).toEqual('2023/01/01');
    await changeSelect([2023, 2, 1]);
    await callOk();
    expect(instance.getData().formattedValueText).toEqual('2023/02/01');
  });

  it('测试当 defaultValue 为字符串格式化的问题', async () => {
    const { instance, callVisibleChange } = createDatePicker({
      defaultValue: '2023-01-01',
    });
    expect(instance.getData().formattedValueText).toEqual('2023/01/01');
    await callVisibleChange(true);
    expect(instance.getData().columns.length).toEqual(3);
  });

  it('测试 onFormat', async () => {
    let x = '';
    const { instance } = createDatePicker({
      defaultValue: dayjs('2023-01-01').toDate(),
      format: 'YYYY / MM / DD',
      onFormat: (v, datestr) => {
        x = datestr;
        return dayjs(v).format('YYYY--MM--DD');
      },
    });
    expect(instance.getData().formattedValueText).toEqual('2023--01--01');
    expect(x).toEqual('2023 / 01 / 01');
  });

  it('测试 min max', async () => {
    const { instance, changeSelect, callOk, callVisibleChange } = createDatePicker({
      min: dayjs('2023-01-20').toDate(),
      max: dayjs('2023-05-15').toDate(),
      defaultValue: dayjs('2023-02-01').toDate(),
    });
    expect(instance.getData().formattedValueText).toEqual('2023/02/01');
    await callVisibleChange(true);
    expect(
      instance.getData().columns.map((o) => {
        return o.map((p) => `${p.label}`).join(',');
      })
    ).toMatchInlineSnapshot(
      `
      [
        "2023年",
        "1月,2月,3月,4月,5月",
        "1日,2日,3日,4日,5日,6日,7日,8日,9日,10日,11日,12日,13日,14日,15日,16日,17日,18日,19日,20日,21日,22日,23日,24日,25日,26日,27日,28日",
      ]
    `
    );
    await changeSelect([2023, 1, 1]);
    expect(
      instance.getData().columns.map((o) => {
        return o.map((p) => `${p.label}`).join(',');
      })
    ).toMatchInlineSnapshot(
      `
      [
        "2023年",
        "1月,2月,3月,4月,5月",
        "20日,21日,22日,23日,24日,25日,26日,27日,28日,29日,30日,31日",
      ]
    `
    );
    expect(instance.getData().currentValue).toEqual([2023, 1, 20]);

    await changeSelect([2023, 5, 30]);
    expect(instance.getData().currentValue).toEqual([2023, 5, 15]);

    await changeSelect([2023, 5, 12]);
    expect(instance.getData().currentValue).toEqual([2023, 5, 12]);

    await callOk();
    expect(instance.getData().formattedValueText).toEqual('2023/05/12');
  });
});

describe('受控模式', () => {
  it('测试', async () => {
    const { callVisibleChange, instance, changeSelect, callOk, onOk } =
      createDatePicker({
        value: '2023-01-01',
        defaultValue: dayjs('2023-01-02').toDate(),
      });
    await callVisibleChange(true);
    expect(instance.getData().formattedValueText).toEqual('2023/01/01');
    await changeSelect([2023, 2, 1]);
    expect(instance.getData().currentValue).toEqual([2023, 2, 1]);
    await callOk();
    // 数据应该不变
    expect(instance.getData().formattedValueText).toEqual('2023/01/01');
    expect(onOk.mock.calls[0]).toEqual([
      dayjs('2023-02-01').toDate(),
      '2023/02/01',
      fmtEvent({}),
    ]);
  });
});

describe('visible 受控模式', () => {
  it('visible 优先级大于 defaultVisible', async () => {
    const { instance, onVisibleChange, callVisibleChange } = createDatePicker({
      visible: false,
      defaultVisible: true,
    });
    expect(instance.getData().state.visible).toEqual(false);
    await callVisibleChange(true);
    expect(instance.getData().state.visible).toEqual(false);
    expect(onVisibleChange).toBeCalledWith(true, fmtEvent({}));
  });
  it('visible 受控', async () => {
    const { instance } = createDatePicker({
      visible: false,
    });
    expect(instance.getData().state.visible).toEqual(false);
    instance.setProps({
      visible: true,
    });
    await sleep(100);
    expect(instance.getData().state.visible).toEqual(true);
  });
});

describe('各个精度', () => {
  async function getColumnText(precision: string) {
    const { instance, callVisibleChange } = createDatePicker({
      defaultValue: dayjs('2023-01-01').toDate(),
      min: dayjs('2023-01-20').toDate(),
      max: dayjs('2024-12-10').toDate(),
      precision: precision as any,
    });
    await callVisibleChange(true);
    return instance
      .getData()
      .columns.map((o) => {
        return o.map((p) => `${p.label}`).join(',');
      })
      .join('\n');
  }

  it('测试 onFormatLabel', async () => {
    const { instance, callVisibleChange } = createDatePicker({
      defaultValue: dayjs('2023-01-01').toDate(),
      min: '2023-01-20',
      max: dayjs('2024-12-10').toDate(),
      onFormatLabel: (v, v2) => `${v} ${v2}`,
      precision: 'year',
    });
    await callVisibleChange(true);
    expect(
      instance
        .getData()
        .columns.map((o) => {
          return o.map((p) => `${p.label}`).join(',');
        })
        .join('\n')
    ).toEqual(`year 2023,year 2024`);
  });

  it('精度为年', async () => {
    expect(await getColumnText('year')).toEqual('2023年,2024年');
  });

  it('精度为月', async () => {
    expect(await getColumnText('month')).toEqual(
      `2023年,2024年\n1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月`
    );
  });

  it('精度为小时', async () => {
    expect(await getColumnText('hour')).toEqual(
      `2023年,2024年
1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月
20日,21日,22日,23日,24日,25日,26日,27日,28日,29日,30日,31日
0时,1时,2时,3时,4时,5时,6时,7时,8时,9时,10时,11时,12时,13时,14时,15时,16时,17时,18时,19时,20时,21时,22时,23时`
    );
  });

  it('精度为分', async () => {
    expect(await getColumnText('minute')).toEqual(
      `2023年,2024年
1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月
20日,21日,22日,23日,24日,25日,26日,27日,28日,29日,30日,31日
0时,1时,2时,3时,4时,5时,6时,7时,8时,9时,10时,11时,12时,13时,14时,15时,16时,17时,18时,19时,20时,21时,22时,23时
0分,1分,2分,3分,4分,5分,6分,7分,8分,9分,10分,11分,12分,13分,14分,15分,16分,17分,18分,19分,20分,21分,22分,23分,24分,25分,26分,27分,28分,29分,30分,31分,32分,33分,34分,35分,36分,37分,38分,39分,40分,41分,42分,43分,44分,45分,46分,47分,48分,49分,50分,51分,52分,53分,54分,55分,56分,57分,58分,59分`
    );
  });

  it('精度为秒', async () => {
    expect(await getColumnText('second')).toEqual(
      `2023年,2024年
1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月
20日,21日,22日,23日,24日,25日,26日,27日,28日,29日,30日,31日
0时,1时,2时,3时,4时,5时,6时,7时,8时,9时,10时,11时,12时,13时,14时,15时,16时,17时,18时,19时,20时,21时,22时,23时
0分,1分,2分,3分,4分,5分,6分,7分,8分,9分,10分,11分,12分,13分,14分,15分,16分,17分,18分,19分,20分,21分,22分,23分,24分,25分,26分,27分,28分,29分,30分,31分,32分,33分,34分,35分,36分,37分,38分,39分,40分,41分,42分,43分,44分,45分,46分,47分,48分,49分,50分,51分,52分,53分,54分,55分,56分,57分,58分,59分
0秒,1秒,2秒,3秒,4秒,5秒,6秒,7秒,8秒,9秒,10秒,11秒,12秒,13秒,14秒,15秒,16秒,17秒,18秒,19秒,20秒,21秒,22秒,23秒,24秒,25秒,26秒,27秒,28秒,29秒,30秒,31秒,32秒,33秒,34秒,35秒,36秒,37秒,38秒,39秒,40秒,41秒,42秒,43秒,44秒,45秒,46秒,47秒,48秒,49秒,50秒,51秒,52秒,53秒,54秒,55秒,56秒,57秒,58秒,59秒`
    );
  });
});
