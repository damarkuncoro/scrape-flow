import type { FC, ReactNode } from 'react';
import { Logo } from '@/components/layout';

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
      <Logo />
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
};

export default AuthLayout;
