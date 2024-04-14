import { ElementType } from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { IoNewspaperOutline } from 'react-icons/io5';
import { MdOutlineRateReview } from 'react-icons/md';
import { TbHeartHandshake } from 'react-icons/tb';

const bullets = [
  {
    icon: IoNewspaperOutline,
    value: 'Journey Documentation',
  },
  {
    icon: MdOutlineRateReview,
    value: 'Personalized Music Profiles',
  },
  {
    icon: TbHeartHandshake,
    value: 'Collaborative Opportunities',
  },
  {
    icon: FaUserFriends,
    value: 'Community Engagement',
  },
];

export default function BulletList() {
  return (
    <div className="grid gap-sm lg:grid-cols-2">
      {bullets.map((item) => (
        <BulletItem key={item.value} {...item} />
      ))}
    </div>
  );
}

function BulletItem({
  icon: Icon,
  value,
}: {
  icon: ElementType;
  value: string;
}) {
  return (
    <div className="flex items-center gap-sm font-semibold">
      <Icon size={20} className="text-primary" />
      {value}
    </div>
  );
}
