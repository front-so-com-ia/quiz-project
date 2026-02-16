type BaseLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export default function BaseLayout({
  children,
  className = '',
}: BaseLayoutProps) {
  return (
    <div className="min-h-full flex items-center justify-center p-4">
      <div className={`w-full max-w-2xl ${className}`}>{children}</div>
    </div>
  );
}
