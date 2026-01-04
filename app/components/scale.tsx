export const Scale = (props: {}) => {
  return (
    <>
      <div className="absolute top-0 -right-[8px] z-40 h-full w-8 border border-x border-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed md:w-12"></div>
      <div className="absolute top-0 -left-[8px] z-40 h-full w-8 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed md:w-12"></div>
    </>
  );
};
