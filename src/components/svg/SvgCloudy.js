export default function SvgCloudy({ iconSize }) {
  return (
    <figure>
      <svg className={`icon ${iconSize}`} viewBox="0 0 100 100">
        <use
          xlinkHref="#grayCloud"
          className="small-cloud"
          fill="url(#gradGray)"
        />
        <use xlinkHref="#whiteCloud" x={7} />
      </svg>
    </figure>
  );
}
