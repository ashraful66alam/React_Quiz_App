// eslint-disable-next-line react/prop-types
function Checkbox({ labelClass, text, ...rest }) {
  return (
    <label className={labelClass}>
      <input type="checkbox" {...rest} />
      <span> {text}</span>
    </label>
  );
}

export default Checkbox;
