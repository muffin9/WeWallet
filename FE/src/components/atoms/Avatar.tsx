import React from 'react';
import { clsx } from 'clsx';
import * as Avatar from '@radix-ui/react-avatar';

const AvatarDemo = () => (
  <div style={{ display: 'flex', gap: 20 }}>
    <Avatar.Root>
      <Avatar.Image
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
        className={clsx('h-full w-full object-cover rounded-full')}
      />
      <Avatar.Fallback
        className="AvatarFallback"
        delayMs={600}
      >
        CT
      </Avatar.Fallback>
    </Avatar.Root>
    <Avatar.Root>
      <Avatar.Image
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
        alt="Pedro Duarte"
        className={clsx('h-full w-full object-cover rounded-full')}
      />
    </Avatar.Root>
  </div>
);

export default AvatarDemo;
