import moment from 'moment';

const IsDateStrReg = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

/**
 * 区分字符串和时间戳
 * @param {*} d
 */
function isDateStr(d, fmt) {
  let t = d;
  const f = fmt || 'YYYY-MM-DD';
  if (!IsDateStrReg.test(t)) {
    t = moment(Number(t)).format(f);
  }
  return moment(t, f);
}

/**
 * 把日期类型的初始值改为moment对象，支持字符串和时间戳，字符串‘-’分割
 * @param {*} item
 */
function transform(item) {
  switch (item.type) {
    case 'DatePicker':
      return item.initialValue && isDateStr(item.initialValue, item.format);
    case 'RangePicker':
      return (
        Array.isArray(item.initialValue) && [
          isDateStr(item.initialValue[0], item.format),
          isDateStr(item.initialValue[1], item.format)
        ]
      );
    default:
      return item.initialValue;
  }
}

const Config = (item) => {
  const cfg = {
    initialValue: transform(item),
    rules: [
      {
        required: typeof item.required === 'boolean' ? item.required : true,
        message: `请输入${item.label}!`
      }
    ]
  };

  if (typeof item.validator === 'function') {
    cfg.rules.push({
      validator: item.validator
    });
  }

  return cfg;
};

export default Config;
