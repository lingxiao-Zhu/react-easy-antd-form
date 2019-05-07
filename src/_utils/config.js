const Config = item => {
  const cfg = {
    initialValue: item.initialValue,
    rules: [
      {
        required: !item.notRequired,
        message: `请输入${item.label}!`
      }
    ]
  };

  if (typeof item.validator === "function") {
    cfg.rules.push({
      validator: item.validator
    });
  }

  return cfg;
};

export default Config;
