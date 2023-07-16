import React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

type AvatarProps = {
  imageUrl: string;
};

// TODO: size 별로 구별 예정.
const Avatar = ({ imageUrl }: AvatarProps) => (
  <AvatarPrimitive.Root className={'relative inline-flex h-10 w-10'}>
    <AvatarPrimitive.Image
      src={imageUrl}
      alt="avatar image"
      className={'h-full w-full object-cover rounded-full'}
    />
    <AvatarPrimitive.Fallback delayMs={600} />
  </AvatarPrimitive.Root>
);

export default Avatar;
