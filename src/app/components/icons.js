import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faAddressBook, 
  faShoppingCart, 
  faBars, 
  faTimes,
  faArrowAltCircleUp,
  faPhone,
  faMailBulk,
  faRoute,
  faShop,
  faInfo,
  faAdd,
  faUpDown,
  faDownLong,
  faDiagramNext,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook,
  faInstagram,
  faTelegram,
  faWhatsapp,
  faFacebookMessenger,
  faTwitter,
  faXTwitter,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const iconComponents = {
  home: () => <FontAwesomeIcon icon={faHome} />,
  addressBook: () => <FontAwesomeIcon icon={faAddressBook} />,
  shoppingCart: () => <FontAwesomeIcon icon={faShoppingCart} />,
  bars: () => <FontAwesomeIcon icon={faBars} />,
  close: () => <FontAwesomeIcon icon={faTimes} />,
  top: () => <FontAwesomeIcon icon={faArrowAltCircleUp} />,
  phone: () => <FontAwesomeIcon icon={faPhone} />,
  mail: () => <FontAwesomeIcon icon={faMailBulk} />,
  route: () => <FontAwesomeIcon icon={faRoute} />,
  shop: () => <FontAwesomeIcon icon={faShop} />,
  servizi: () => <FontAwesomeIcon icon={faShop} />,
  info: () => <FontAwesomeIcon icon={faInfo} />,
  add: () => <FontAwesomeIcon icon={faAdd} />,
  facebook: () => <FontAwesomeIcon icon={faFacebook} />,
  messenger: () => <FontAwesomeIcon icon={faFacebookMessenger} />,
  instagram: () => <FontAwesomeIcon icon={faInstagram} />,
  telegram: () => <FontAwesomeIcon icon={faTelegram} />,
  whatsapp: () => <FontAwesomeIcon icon={faWhatsapp} />,
  twitter: () => <FontAwesomeIcon icon={faTwitter} />,
  Xtwitter: () => <FontAwesomeIcon icon={faXTwitter} />,
  linkedin: () => <FontAwesomeIcon icon={faLinkedin} />,
  Youtube: () => <FontAwesomeIcon icon={faYoutube} />,
  down: () => <FontAwesomeIcon icon={faDownLong} />,
  next: () => <FontAwesomeIcon icon={faArrowRight} />,

};

export default iconComponents;
