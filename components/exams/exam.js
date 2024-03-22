import Link from "next/link";
import styles from "./exam.module.css";
export default function Exam({ examCode, examName }) {
  return (
    <Link
      className="rounded-md grid grid-cols-12 bg-dark-blue shadow p-3 m-2 gap-2 items-center transition-transform delay-50 duration-200 ease-in-out hover:scale-105 transform"
      href={`/exams/${examCode}`
    }
    >
      <div className="col-span-12 md:col-span-1">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
          className="h-8 w-8"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#080d0e"
            stroke=""
          >
            <path
              d="M132 4849 c-45 -13 -109 -80 -122 -127 -7 -28 -9 -695 -8 -2183 l3
-2144 24 -38 c13 -21 42 -50 64 -65 l41 -27 1666 0 1666 0 41 27 c22 15 51 44
64 65 l24 38 3 550 3 551 524 524 524 524 48 -3 c42 -2 52 2 76 27 24 25 28
37 26 76 l-3 46 141 143 c185 186 212 246 163 356 -25 55 -184 215 -233 236
-51 21 -130 19 -175 -4 -20 -11 -102 -85 -181 -165 -126 -126 -147 -143 -164
-134 -66 35 -156 -51 -128 -123 9 -24 -8 -43 -305 -340 l-314 -314 -2 1191 -3
1190 -27 41 c-15 22 -44 51 -65 64 l-38 24 -1650 2 c-1023 1 -1662 -2 -1683
-8z m3268 -1446 l0 -1258 -360 -360 -360 -360 -100 -250 c-55 -137 -100 -263
-100 -280 1 -46 49 -95 96 -95 10 0 133 46 273 101 l256 102 148 146 147 145
0 -417 0 -417 -1600 0 -1600 0 0 2100 0 2100 1600 0 1600 0 0 -1257z m1453
-231 l67 -67 -135 -135 -135 -135 -70 70 -70 70 132 132 c73 73 135 133 138
133 3 0 36 -30 73 -68z m-1107 -1241 l-758 -758 -114 -46 c-63 -25 -114 -43
-114 -41 0 2 20 55 45 117 l45 112 758 757 757 758 70 -70 70 -70 -759 -759z"
            />
            <path
              d="M534 4286 c-37 -37 -43 -70 -20 -115 8 -15 26 -32 41 -39 19 -9 198
-12 695 -12 497 0 676 3 695 12 15 7 33 24 41 39 23 45 17 78 -20 115 l-34 34
-682 0 -682 0 -34 -34z"
            />
            <path
              d="M3050 4304 c-14 -9 -102 -93 -195 -185 l-170 -169 -65 66 c-36 36
-77 72 -92 80 -92 48 -182 -42 -134 -134 24 -45 229 -241 261 -250 17 -5 43
-5 60 -1 32 9 445 413 471 461 23 44 17 77 -20 114 -38 38 -76 44 -116 18z"
            />
            <path
              d="M535 3878 c-56 -49 -40 -134 30 -164 50 -21 670 -21 720 0 70 30 86
115 30 164 -26 22 -27 22 -390 22 -363 0 -364 0 -390 -22z"
            />
            <path
              d="M548 3473 c-65 -40 -61 -140 7 -171 51 -23 107 -7 131 39 48 93 -50
186 -138 132z"
            />
            <path
              d="M998 3473 c-46 -29 -60 -81 -34 -132 26 -50 34 -51 511 -51 323 0
451 3 470 12 29 13 55 55 55 88 0 31 -29 76 -57 89 -16 7 -170 11 -471 11
-399 -1 -450 -2 -474 -17z"
            />
            <path
              d="M3050 3474 c-14 -9 -102 -93 -195 -185 l-170 -169 -65 66 c-36 36
-77 72 -92 80 -92 48 -182 -41 -134 -134 8 -15 66 -78 129 -139 114 -112 116
-113 163 -113 l47 0 219 218 c218 215 248 251 248 292 0 75 -89 124 -150 84z"
            />
            <path
              d="M535 3047 c-60 -51 -36 -145 43 -167 48 -13 645 -13 693 0 52 15 74
43 74 97 0 37 -5 49 -28 69 l-28 24 -364 0 c-363 0 -364 0 -390 -23z"
            />
            <path
              d="M551 2646 c-67 -37 -65 -143 4 -174 37 -17 1353 -17 1390 0 29 13 55
55 55 88 0 33 -26 75 -55 88 -40 18 -1361 16 -1394 -2z"
            />
            <path
              d="M3045 2641 c-16 -10 -104 -93 -194 -184 l-165 -166 -83 79 c-76 73
-86 80 -124 80 -78 0 -122 -77 -85 -148 8 -15 66 -78 129 -139 114 -112 116
-113 163 -113 l47 0 219 218 c121 119 226 229 234 244 26 51 10 109 -37 134
-38 19 -68 18 -104 -5z"
            />
            <path
              d="M573 2239 c-17 -5 -41 -22 -53 -37 -29 -36 -22 -98 15 -129 26 -23
27 -23 390 -23 l364 0 28 24 c23 20 28 32 28 69 0 54 -22 82 -74 97 -45 12
-654 12 -698 -1z"
            />
            <path
              d="M551 1816 c-66 -37 -67 -131 -1 -169 25 -15 91 -17 699 -17 460 0
678 3 694 11 28 13 57 58 57 89 0 33 -26 75 -55 88 -40 18 -1361 16 -1394 -2z"
            />
            <path
              d="M563 1405 c-68 -29 -83 -115 -28 -162 26 -23 27 -23 390 -23 363 0
364 0 390 23 56 48 40 133 -30 163 -49 20 -675 20 -722 -1z"
            />
            <path
              d="M551 986 c-59 -33 -67 -102 -17 -152 l34 -34 682 0 682 0 34 34 c37
37 43 70 20 115 -8 15 -26 32 -41 39 -40 18 -1361 16 -1394 -2z"
            />
          </g>
        </svg>
      </div>

      <div className="col-span-11 xl:-ml-5">
        <p className="text-primary-text font-semibold">{examCode}</p>
      </div>

      <div className="md:col-start-2 col-span-11 xl:-ml-5">
        <p className="text-sm text-dark-bg">{examName}</p>
      </div>
    </Link>
  );
}