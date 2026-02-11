import Header from './Header';

type BaseContainerProps = {
  children: React.ReactNode;
};

export default function BaseContainer({ children }: BaseContainerProps) {
  return (
    <div
      className="
        bg-linear-to-br from-indigo-500 via-purple-500 to-indigo-500
        bg-size-[200%_200%]
        min-h-screen w-full pt-32"
    >
      <Header />
      {children}
    </div>
  );
}
