function SvgBars(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 448 512' width='1em' height='1em' {...props}>
      <path
        d='M16 288h416a16 16 0 0016-16v-32a16 16 0 00-16-16H16a16 16 0 00-16 16v32a16 16 0 0016 16z'
        opacity={0.4}
      />
      <path
        d='M432 384H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-320H16A16 16 0 000 80v32a16 16 0 0016 16h416a16 16 0 0016-16V80a16 16 0 00-16-16z'
        className='prefix__fa-primary'
      />
    </svg>
  );
}

export default SvgBars;
