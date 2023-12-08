import fmtEvent from 'compiled-alipay/_util/fmtEvent';
import dayjs from 'dayjs';
import { describe, expect, it } from 'vitest';
import { createDateRangePicker } from './utils';

describe('非受控模式', () => {
  it('测试 onFormat', async () => {
    const x: unknown[] = [];
    const { instance } = createDateRangePicker({
      defaultValue: [
        dayjs('2023-01-01').toDate(),
        dayjs('2023-10-01').toDate(),
      ],
      format: 'YYYY / MM / DD',
      onFormat: (value, datestr) => {
        x.push(datestr);
        return value.map((v) => dayjs(v).format('YYYY--MM--DD')).join('-|-');
      },
    });
    expect(instance.callMethod('onFormat')).toEqual(
      '2023--01--01-|-2023--10--01'
    );
    expect(x).toEqual([['2023 / 01 / 01', '2023 / 10 / 01']]);
  });

  it('测试调整数据', async () => {
    const { instance, callMethod, onPickerChange } = createDateRangePicker({
      defaultValue: [
        dayjs('2023-01-01').toDate(),
        dayjs('2023-10-02').toDate(),
      ],
    });
    expect(instance.callMethod('onFormat')).toEqual('2023/01/01-2023/10/02');
    instance.callMethod('onVisibleChange', true);
    await callMethod('onChange', [2023, 9, 5]);
    expect(onPickerChange.mock.lastCall).toEqual([
      'start',
      dayjs('2023-09-05').toDate(),
      '2023/09/05',
      fmtEvent({}),
    ]);
    await callMethod('onChangeCurrentPickerType', {
      target: {
        dataset: {
          type: 'end',
        },
      },
    });
    await callMethod('onChange', [2023, 9, 10]);
    await callMethod('onChange', [2023, 9, 20]);
    await callMethod('onOk');
    expect(instance.callMethod('onFormat')).toEqual('2023/09/05-2023/09/20');
  });

  it('当 start 晚于 end , 或者 end 早于 start 时', async () => {
    const { instance, callMethod, currentDate } = createDateRangePicker({
      defaultValue: [
        dayjs('2023-01-01').toDate(),
        dayjs('2023-10-02').toDate(),
      ],
    });
    instance.callMethod('onVisibleChange', true);
    expect(currentDate()).toEqual({
      currentStartDate: dayjs('2023-01-01').toDate().toISOString(),
      currentEndDate: dayjs('2023-10-02').toDate().toISOString(),
    });
    await callMethod('onChange', [2023, 10, 3]);
    expect(currentDate()).toEqual({
      currentStartDate: dayjs('2023-10-03').toDate().toISOString(),
      currentEndDate: null,
    });
    await callMethod('onChangeCurrentPickerType', {
      target: {
        dataset: {
          type: 'end',
        },
      },
    });
    await callMethod('onChange', [2023, 10, 5]);
    expect(currentDate()).toEqual({
      currentStartDate: dayjs('2023-10-03').toDate().toISOString(),
      currentEndDate: dayjs('2023-10-05').toDate().toISOString(),
    });
    await callMethod('onChange', [2023, 9, 5]);
    expect(currentDate()).toEqual({
      currentStartDate: null,
      currentEndDate: dayjs('2023-09-05').toDate().toISOString(),
    });
  });

  it('测试 min 与 max', async () => {
    const { instance, callMethod, currentDate } = createDateRangePicker({
      defaultValue: [
        dayjs('2023-01-01').toDate(),
        dayjs('2023-10-02').toDate(),
      ],
      min: dayjs('2023-01-20').toDate(),
      max: dayjs('2024-12-10').toDate(),
    });
    instance.callMethod('onVisibleChange', true);
    expect(currentDate()).toEqual({
      currentStartDate: dayjs('2023-01-01').toDate().toISOString(),
      currentEndDate: dayjs('2023-10-02').toDate().toISOString(),
    });
    await callMethod('onChange', [2023, 1, 1]);
    expect(currentDate()).toEqual({
      currentStartDate: dayjs('2023-01-20').toDate().toISOString(),
      currentEndDate: dayjs('2023-10-02').toDate().toISOString(),
    });
    await callMethod('onChangeCurrentPickerType', {
      target: {
        dataset: {
          type: 'end',
        },
      },
    });
    await callMethod('onChange', [2025, 1, 1]);
    expect(currentDate()).toEqual({
      currentStartDate: dayjs('2023-01-20').toDate().toISOString(),
      currentEndDate: dayjs('2024-12-10').toDate().toISOString(),
    });
  });

  it('测试 oncancel', async () => {
    const { instance, onCancel } = createDateRangePicker({
      'data-test': '123',
    } as any);
    instance.callMethod('onCancel', true);
    expect(onCancel).toBeCalledWith(
      fmtEvent({
        'data-test': '123',
      })
    );
  });
});

describe('受控模式', () => {
  it('测试 onOk 事件', async () => {
    const { instance, callMethod, onOk } = createDateRangePicker({
      value: [dayjs('2023-01-01').toDate(), dayjs('2023-10-01').toDate()],
    });
    expect(instance.callMethod('onFormat')).toEqual('2023/01/01-2023/10/01');
    instance.callMethod('onVisibleChange', true);
    await callMethod('onChange', [2023, 1, 4]);

    await callMethod('onChangeCurrentPickerType', {
      target: {
        dataset: {
          type: 'end',
        },
      },
    });
    await callMethod('onChange', [2023, 10, 4]);
    await callMethod('onOk');
    expect(
      onOk.mock.calls[0][0].map((o) => dayjs(o).format('YYYY-MM-DD'))
    ).toEqual(['2023-01-04', '2023-10-04']);
    expect(onOk.mock.calls[0][1]).toEqual(['2023/01/04', '2023/10/04']);
    expect(onOk.mock.calls[0][2]).toEqual(fmtEvent({}));
  });
});

describe('测试各个精度', () => {
  function getColumnText(
    precision: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second'
  ) {
    const { instance } = createDateRangePicker({
      defaultValue: [
        dayjs('2023-01-01').toDate(),
        dayjs('2023-01-01').toDate(),
      ],
      min: dayjs('2023-01-20').toDate(),
      max: dayjs('2024-12-10').toDate(),
      precision: precision,
    });
    instance.callMethod('onVisibleChange', true);
    return instance
      .getData()
      .columns.map((o) => {
        return o.map((p) => `${p.label}`).join(',');
      })
      .join('\n');
  }

  it('精度为年', async () => {
    expect(getColumnText('year')).toEqual('2023年,2024年');
  });

  it('精度为月', async () => {
    expect(getColumnText('month')).toEqual(
      `2023年,2024年\n1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月`
    );
  });

  it('精度为小时', async () => {
    expect(getColumnText('hour')).toEqual(
      `2023年,2024年
1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月
20日,21日,22日,23日,24日,25日,26日,27日,28日,29日,30日,31日
0时,1时,2时,3时,4时,5时,6时,7时,8时,9时,10时,11时,12时,13时,14时,15时,16时,17时,18时,19时,20时,21时,22时,23时`
    );
  });

  it('精度为分', async () => {
    expect(getColumnText('minute')).toEqual(
      `2023年,2024年
1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月
20日,21日,22日,23日,24日,25日,26日,27日,28日,29日,30日,31日
0时,1时,2时,3时,4时,5时,6时,7时,8时,9时,10时,11时,12时,13时,14时,15时,16时,17时,18时,19时,20时,21时,22时,23时
0分,1分,2分,3分,4分,5分,6分,7分,8分,9分,10分,11分,12分,13分,14分,15分,16分,17分,18分,19分,20分,21分,22分,23分,24分,25分,26分,27分,28分,29分,30分,31分,32分,33分,34分,35分,36分,37分,38分,39分,40分,41分,42分,43分,44分,45分,46分,47分,48分,49分,50分,51分,52分,53分,54分,55分,56分,57分,58分,59分`
    );
  });

  it('精度为秒', async () => {
    expect(getColumnText('second')).toEqual(
      `2023年,2024年
1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月
20日,21日,22日,23日,24日,25日,26日,27日,28日,29日,30日,31日
0时,1时,2时,3时,4时,5时,6时,7时,8时,9时,10时,11时,12时,13时,14时,15时,16时,17时,18时,19时,20时,21时,22时,23时
0分,1分,2分,3分,4分,5分,6分,7分,8分,9分,10分,11分,12分,13分,14分,15分,16分,17分,18分,19分,20分,21分,22分,23分,24分,25分,26分,27分,28分,29分,30分,31分,32分,33分,34分,35分,36分,37分,38分,39分,40分,41分,42分,43分,44分,45分,46分,47分,48分,49分,50分,51分,52分,53分,54分,55分,56分,57分,58分,59分
0秒,1秒,2秒,3秒,4秒,5秒,6秒,7秒,8秒,9秒,10秒,11秒,12秒,13秒,14秒,15秒,16秒,17秒,18秒,19秒,20秒,21秒,22秒,23秒,24秒,25秒,26秒,27秒,28秒,29秒,30秒,31秒,32秒,33秒,34秒,35秒,36秒,37秒,38秒,39秒,40秒,41秒,42秒,43秒,44秒,45秒,46秒,47秒,48秒,49秒,50秒,51秒,52秒,53秒,54秒,55秒,56秒,57秒,58秒,59秒`
    );
  });
});
