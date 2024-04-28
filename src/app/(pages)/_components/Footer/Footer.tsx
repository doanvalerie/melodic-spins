import BrandLogo from '@components/BrandLogo/BrandLogo';
import aboutUsLinks from '@data/footer/aboutLinks.json';
import contactLinks from '@data/footer/contactLinks.json';
import policyLinks from '@data/footer/policyLinks.json';

import LinkGrouping from './LinkGrouping';
import MailSubscription from './MailSubscription';
import SocialMediaIcons from './SocialMediaIcons';

export default function Footer() {
  return (
    <div className="w-full bg-charcoal text-light">
      <div className="flex flex-col items-center justify-between gap-med px-med py-med lg:flex-row lg:items-start lg:gap-sm">
        <div className="flex w-full flex-col gap-base lg:w-1/3">
          <BrandLogo />
          <MailSubscription />
          <SocialMediaIcons />
        </div>
        <div className="flex gap-lg">
          <LinkGrouping name="About Us" links={aboutUsLinks} />
          <LinkGrouping name="Contact Us" links={contactLinks} />
          <LinkGrouping name="Policies" links={policyLinks} />
        </div>
      </div>
      <div className="bg-charcoal-dark flex justify-center p-sm">
        created with <span className="px-xs text-primary">❤</span> by
        doanvalerie
      </div>
    </div>
  );
}
