import contactDetails from "../data/contactDetails.json";

const handleGoogleMapLocationClick = () => {
  window.open(contactDetails.googleMapsURL.externalLink, "_blank");
};

export default handleGoogleMapLocationClick;