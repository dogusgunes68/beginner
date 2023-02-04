function FunctionalComponent(props) {
  const { name, lastname } = props;
  return (
    <div>
      <h1>
        This is functional component:{name} {lastname}
      </h1>
    </div>
  );
}

export default FunctionalComponent;
