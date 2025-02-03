import contactDetails from "../data/contactDetails.json";

const handleEmailClick = () => {
  window.location.href = `mailto:${contactDetails.email}`;
};

export default handleEmailClick;