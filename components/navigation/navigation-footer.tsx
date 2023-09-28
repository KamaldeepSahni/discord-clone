'use client';

import { UserButton } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';

import { ModeToggle } from '@/components/mode-toggle';

export const NavigationFooter = () => {
  const { theme } = useTheme();

  return (
    <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
      <ModeToggle />
      <UserButton
        afterSignOutUrl="/"
        appearance={{
          userProfile:
            theme === 'dark'
              ? {
                  baseTheme: dark,
                }
              : {},
          elements: {
            avatarBox: 'h-[48px] w-[48px]',
          },
          ...(theme === 'dark'
            ? {
                baseTheme: dark,
              }
            : {}),
        }}
      />
    </div>
  );
};
