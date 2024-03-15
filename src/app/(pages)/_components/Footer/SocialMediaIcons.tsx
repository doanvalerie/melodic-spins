import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export default function SocialMediaIcons() {
  const iconSize = 32;

  return (
    <div className="flex gap-base">
      <FaFacebook size={iconSize} />
      <FaInstagram size={iconSize} />
      <FaXTwitter size={iconSize} />
      <FaLinkedin size={iconSize} />
    </div>
  );
}
