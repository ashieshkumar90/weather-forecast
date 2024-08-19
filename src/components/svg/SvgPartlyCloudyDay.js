export default function SvgPartlyCloudyDay({ iconSize }) {
  return (
    <figure>
      <svg className={`icon ${iconSize}`} viewBox="0 0 100 100">
        <use xlinkHref="#sun" x={-12} y={-18} />
        <use
          xlinkHref="#grayCloud"
          className="small-cloud"
          fill="url(#gradGray)"
        />
        <use xlinkHref="#rainDrizzle" x={25} y={65} />
        <use xlinkHref="#rainDrizzle" x={40} y={65} />
        <use xlinkHref="#whiteCloud" x={7} />
      </svg>
    </figure>
  );
}
