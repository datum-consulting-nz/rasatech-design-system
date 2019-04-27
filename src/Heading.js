import Text from "./Text";
import theme from "./theme";

const Heading = Text.withComponent("h3");

Heading.displayName = "Heading";

Heading.defaultProps = {
  textStyle: "display5",
  m: 0,
  theme
};

Heading.h1 = Heading.withComponent("h1");
Heading.h1.defaultProps = {
  textStyle: "display7",
  theme
};

Heading.h2 = Heading.withComponent("h2");
Heading.h2.defaultProps = {
  textStyle: "display6",
  theme
};

Heading.h3 = Heading.withComponent("h3");
Heading.h3.defaultProps = {
  textStyle: "display5",
  theme
};

Heading.h4 = Heading.withComponent("h4");
Heading.h4.defaultProps = {
  textStyle: "display4",
  theme
};

Heading.h5 = Heading.withComponent("h5");
Heading.h5.defaultProps = {
  textStyle: "display3",
  theme
};

Heading.h6 = Heading.withComponent("h6");
Heading.h6.defaultProps = {
  textStyle: "display2",
  theme
};

export default Heading;
