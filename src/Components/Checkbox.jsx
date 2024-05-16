// eslint-disable-next-line react/prop-types
function Checkbox({ text, ...rest }) {
  return (
    <label>
      <input type="checkbox" {...rest} />
      <span> {text}</span>
    </label>
  );
}

export default Checkbox;
