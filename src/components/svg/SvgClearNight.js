export default function SvgClearNight({ iconSize }) {
  return (
    <figure>
      <svg className={`icon ${iconSize}`} viewBox="0 0 100 100">
        <use xlinkHref="#moon" x={-15} />
        <use
          xlinkHref="#star"
          x={42}
          y={30}
          className="stars animated infinite flash"
        />
        <use
          xlinkHref="#star"
          x={61}
          y={32}
          className="stars animated infinite flash delay-1s"
        />
        <use
          xlinkHref="#star"
          x={55}
          y={50}
          className="stars animated infinite flash delay-2s"
        />
      </svg>
    </figure>
  );
}
