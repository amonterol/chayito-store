const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 1,
      marginLeft: 20,
      marginRight: 20,
    }}
  />
);

export default ColoredLine;
