'use client';

import exProfilePicture from '/public/dashboard/ex_profile_picture.jpg';
import Image from 'next/image';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { useAuthContext } from '@contexts/AuthContext';
import { userQuery, UserQueryData } from '@graphql/queries/users/user';

export default function UserInfo() {
  const { user } = useAuthContext();
  const { data } = useSuspenseQuery<UserQueryData>(userQuery, {
    variables: { id: user!.uid },
  });
  const pictureSize = 50;

  return (
    <div className="flex items-center gap-base p-base">
      <Image
        src={exProfilePicture}
        width={pictureSize}
        height={pictureSize}
        className="rounded-full"
        alt="profile picture"
      />
      <div>
        <div className="font-semibold">
          {data.user.firstName} {data.user.lastName}
        </div>
      </div>
    </div>
  );
}
