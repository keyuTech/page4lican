import { Block, Link } from "framework7-react";

const Contact = () => {
  const onClick = () => {
    location = "mailto:";
  };

  return (
    <Block className="block">
      <div>Contact me by email: licanccc@gmail.com</div>
    </Block>
  );
};

export default Contact;
