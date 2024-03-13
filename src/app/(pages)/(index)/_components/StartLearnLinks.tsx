import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';

export default function StartLearnLinks() {
  return (
    <div className="my-sm flex items-center gap-base">
      <GetStartedLink />
      <LearnMoreLink />
    </div>
  );
}

function GetStartedLink() {
  return (
    <Link href="/auth/sign-up">
      <button className="bg-primary text-white">Get Started Today</button>
    </Link>
  );
}

function LearnMoreLink() {
  return (
    <Link href="/about">
      <div className="flex cursor-pointer items-center gap-xs font-semibold">
        Learn More <IoMdArrowForward />
      </div>
    </Link>
  );
}
