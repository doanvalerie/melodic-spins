import aboutUsLinks from '@data/footer/aboutLinks.json';
import contactLinks from '@data/footer/contactLinks.json';
import policyLinks from '@data/footer/policyLinks.json';

import BrandHeader from './BrandHeader';
import LinkGrouping from './LinkGrouping';
import MailSubscription from './MailSubscription';
import SocialMediaIcons from './SocialMediaIcons';

export default function Footer() {
  return (
    <div className="bg-charcoal text-light w-full px-med py-med">
      <div className="flex flex-col items-center justify-between gap-med lg:flex-row lg:items-start lg:gap-sm">
        <div className="flex w-full flex-col gap-base lg:w-1/3">
          <BrandHeader />
          <MailSubscription />
          <SocialMediaIcons />
        </div>
        <div className="flex gap-lg">
          <LinkGrouping name="About Us" links={aboutUsLinks} />
          <LinkGrouping name="Contact Us" links={contactLinks} />
          <LinkGrouping name="Policies" links={policyLinks} />
        </div>
      </div>
    </div>
  );
}
