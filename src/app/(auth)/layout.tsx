import { AuthLayoutProps } from '~/types/types'

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <div className="min-h-screen">{children}</div>
}