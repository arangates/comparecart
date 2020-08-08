function SvgBell(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width='1em' height='1em' viewBox='0 0 16 16' fill='none' {...props}>
      <path
        d='M7 16a2 2 0 002-2H5a2 2 0 002 2zM12.25 10.637V6.7a4.87 4.87 0 00-3.938-4.979v-.539a1.32 1.32 0 00-2.625 0v.535A4.871 4.871 0 001.75 6.7v3.94L0 12.214V13h14v-.788l-1.75-1.575zm-1.75.788h-7V6.7a3.5 3.5 0 017 0v4.725z'
        fill='#607D8B'
      />
      <circle cx={13} cy={3} r={3} fill='#FF8C5A' />
    </svg>
  );
}

export default SvgBell;
