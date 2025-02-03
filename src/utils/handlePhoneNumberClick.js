import contactDetails from "../data/contactDetails.json";

const handlePhoneNumberClick = () => {
  window.location.href = `tel:${contactDetails.phoneNumber}`;
};

export default handlePhoneNumberClick;