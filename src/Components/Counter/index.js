const Counter = (props) => {
  const { each, onIncrement, onDecrement } = props;
  const { id, value } = each;
  const onDec = () => {
    onDecrement(id);
  };
  const onInc = () => {
    onIncrement(id);
  };

  return (
    <div className="counter">
      <b>{value}</b>
      <div className="counter-controls">
        <button className="button is-danger is-small" onClick={onDec}>
          -
        </button>
        <button className="button is-success is-small" onClick={onInc}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
