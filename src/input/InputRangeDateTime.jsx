import { DatePicker } from "antd";
import React from "react";

const { RangePicker } = DatePicker;

export default function InputRangeDateTime({
  label,
  name,
  onChange,
  value,
  placeholder,
  disabled,
  readOnly,
  size,
  labelStyle,
  err,
}) {
  const onOk = (val) => console.log("ok");
  return (
    <>
      <div className="label" style={{ ...labelStyle }}>
        {label}
      </div>
      <RangePicker
        showTime={{ format: "HH:mm" }}
        format="YYYY-MM-DD HH:mm"
        onChange={onChange}
        onOk={onOk}
        style={{ width: "100%" }}
        
      />
    </>
  );
}
