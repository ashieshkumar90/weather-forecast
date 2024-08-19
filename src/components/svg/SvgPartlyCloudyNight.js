export default function SvgPartlyCloudyNight({ iconSize }) {
  return (
    <figure>
      <svg className={`icon ${iconSize}`} viewBox="0 0 100 100">
        <use xlinkHref="#moon" x={-20} y={-15} />
        <use
          xlinkHref="#grayCloud"
          className="small-cloud"
          fill="url(#gradGray)"
        />
        <use id="snowFlake2" xlinkHref="#snowFlake" x={35} y={65} />
        <use id="snowFlake4" xlinkHref="#snowFlake" x={50} y={65} />
        <use xlinkHref="#rainDrizzle" x={25} y={65} />
        <use xlinkHref="#rainDrizzle" x={40} y={65} />
        <use xlinkHref="#whiteCloud" x={7} />
      </svg>
    </figure>
  );
}
