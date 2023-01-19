import TimePicker from "react-time-picker";
import { useFormikContext, useField } from "formik";

export const TimePickerField = (props) => {
    const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <TimePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={val => {
        setFieldValue(field.name, val);
      }}
    />
  );
}