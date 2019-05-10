/**
 * 将moment对象处理成日期字符串
 * @param {*} fields 表单字段数组
 * @param {*} values 返回的value
 */
const DateFormat = (fields, values) => {
  const temp = { ...values };

  fields
    && Array.isArray(fields)
    && fields.forEach(({ type: t, field: f, format: fmt }) => {
      // 如果传了format，就使用自定义格式
      const Format = fmt || 'YYYY-MM-DD';
      switch (t) {
        case 'RangePicker':
          temp[f]
            && (temp[f] = [temp[f][0].format(Format), temp[f][1].format(Format)]);
          break;
        case 'DatePicker':
          temp[f] && (temp[f] = temp[f].format(Format));
          break;
        default:
          break;
      }
    });

  return temp;
};

export default DateFormat;
