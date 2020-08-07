export const Layout = ({ children }: any) => {
  return (
    <div
      id='app'
      className='min-h-screen bg-white-200 antialiased xl:flex xl:flex-col xl:h-screen'
    >
      {children}
    </div>
  );
};
