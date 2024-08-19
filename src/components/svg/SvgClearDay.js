export default function SvgClearDay({ iconSize }) {
  return (
    <figure>
      <svg className={`icon ${iconSize}`} viewBox="0 0 100 100">
        <use xlinkHref="#sun" />
      </svg>
    </figure>
  );
}
