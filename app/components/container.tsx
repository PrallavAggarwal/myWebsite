import { Scale } from "./scale";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div
      className={`mx-auto mt-10 h-full w-screen max-w-4xl overflow-x-hidden md:mt-1 md:w-full ${className} bg-background`}
    >
      {children}
    </div>
  );
};
