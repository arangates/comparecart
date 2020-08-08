export const MainContainer = ({ children }: any) => {
  return (
    <main className='py-1 xl:flex-1 xl:overflow-auto px-5'>
      {children}
    </main>
  );
};
