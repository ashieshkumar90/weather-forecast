export default function SvgRain({ iconSize }) {
  return (
    <figure>
      <svg className={`icon ${iconSize}`} viewBox="0 0 100 100">
        <use
          xlinkHref="#grayCloud"
          className="small-cloud"
          fill="url(#gradGray)"
        />
        <use
          xlinkHref="#grayCloud"
          x={25}
          y={10}
          className="reverse-small-cloud"
          fill="url(#gradDarkGray)"
        />
        <use
          xlinkHref="#thunderBolt"
          x={30}
          y={61}
          className="lighting animated infinite flash"
        />
        <use xlinkHref="#whiteCloud" x={7} />
        <use
          xlinkHref="#thunderBolt"
          x={45}
          y={56}
          className="lighting animated infinite flash delay-1s"
        />
      </svg>
    </figure>
  );
}
