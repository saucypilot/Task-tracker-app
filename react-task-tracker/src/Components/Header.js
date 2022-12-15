import PropTypes from "prop-types";
import Button from "./Button";

// Header component
const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };

  return (
    <header class="header">
      <h1>{title}</h1>
      <Button color="green" text="Hello" onClick={onClick} />
    </header>
  );
};

// Default props
Header.defaultProps = {
  title: "Task Tracker",
};

// Only allow a string to be passed in as a prop and it must be required
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
