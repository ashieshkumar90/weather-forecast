export default function IconDefinition() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={0} height={0}>
      <defs>
        <radialGradient
          id="gradYellow"
          cx="50%"
          cy="50%"
          r="80%"
          fx="90%"
          fy="80%"
        >
          <stop offset="0%" style={{ stopColor: "yellow", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "orange", stopOpacity: 1 }} />
        </radialGradient>
        <radialGradient
          id="gradDarkGray"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
          <stop offset="70%" style={{ stopColor: "gray", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "dimgray", stopOpacity: 1 }}
          />
        </radialGradient>
        <radialGradient
          id="gradGray"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "darkgray", stopOpacity: 1 }}
          />
        </radialGradient>
        <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
          <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "darkgray", topOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <symbol id="sun">
        <circle cx={50} cy={50} r={20} fill="url(#gradYellow)" />
        <line x1={50} y1={27} x2={50} y2={2} className="longRay" />
        <line x1={50} y1={73} x2={50} y2={98} className="longRay" />
        <line x1={27} y1={50} x2={2} y2={50} className="longRay" />
        <line x1={73} y1={50} x2={98} y2={50} className="longRay" />
        <line x1={34} y1={34} x2={16} y2={16} className="longRay" />
        <line x1={66} y1={66} x2={84} y2={84} className="longRay" />
        <line x1={34} y1={66} x2={16} y2={84} className="longRay" />
        <line x1={66} y1={34} x2={84} y2={16} className="longRay" />
        <line x1={59} y1={29} x2={66} y2={13} className="shortRay" />
        <line x1={71} y1={42} x2={87} y2={35} className="shortRay" />
        <line x1={71} y1="58.5" x2={87} y2={65} className="shortRay" />
        <line x1={59} y1={71} x2={66} y2={87} className="shortRay" />
        <line x1={41} y1={71} x2={34} y2={87} className="shortRay" />
        <line x1="29.5" y1="58.5" x2={13} y2={66} className="shortRay" />
        <line x1={29} y1={42} x2={13} y2={35} className="shortRay" />
        <line x1={41} y1={29} x2={35} y2={13} className="shortRay" />
      </symbol>
      <symbol id="moon">
        <path
          d="M60,20 A30,30 0 1,0 90,65 22,22 0 1,1 60,20z"
          fill="url(#gradYellow)"
        />
      </symbol>
      <symbol id="star">
        <polygon
          points="5,0 2,10 10,4 0,4 8,10"
          style={{
            fill: "url(index_1.html#gradYellow)",
            fillRule: "nonzero",
          }}
        />
      </symbol>
      <symbol id="grayCloud">
        <path d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z" />
      </symbol>
      <symbol id="whiteCloud">
        <path
          fill="url(#gradWhite)"
          d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z"
        />
      </symbol>
      <symbol id="rainDrop">
        <path
          fill="lightblue"
          d="M10 0 Q10,0 14,7 A5,5 0 1,1 6,7 Q10,0 10,0Z"
        />
      </symbol>
      <symbol id="rainDrizzle">
        <line x1={20} y1={2} x2={10} y2={40} />
      </symbol>
      <symbol id="thunderBolt">
        <path fill="black" d="M15,0 L1,23 L8,23 L0,40 L15,19 L8,19Z" />
      </symbol>
      <symbol id="snowFlake">
        <path d="M5,0 L5,10 M0,5 L10,5 M1.5,1.5 L8.5,8.5 M8.5,1.5 L1.5,8.5" />
        <path d="M3.5,0.25 L5,2 L6.5,0.25 M3.5,9.75 L5,8 L6.5,9.75" />
        <path d="M0.25,3.5 L2,5 L0.25,6.5 M9.75,3.5 L8,5 L9.75,6.5" />
        <path d="M0.75,2.90 L2.85,2.85 L2.90,0.75 M7.25,9.35 L7.15,7.15 L9.35,7.25" />
        <path d="M0.75,7.25 L2.85,7.15 L2.90,9.35 M7.15,0.75 L7.25,2.85 L9.35,2.90" />
      </symbol>
      <symbol id="icePellet">
        <circle cx={4} cy={4} r={4} fill="#e3fcff" />
      </symbol>
      <symbol id="mist">
        <path d="M5,34 L43,34" />
        <path d="M10,40 L40,40 Q51.5,40 50,35 T60,30 L80,30" />
        <path d="M15,45 L45,45 Q56.5,45 55,40 T65,35 L90,35" />
        <path d="M60,42 L85,42" />
      </symbol>
    </svg>
  );
}
