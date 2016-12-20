import React from 'react';
import { Link } from 'react-router';
import { Grid, GridColumn } from '../../src/components/Grid';

export default function LandingPage() {
  const Blocks = () => (
    <svg width="392px" height="345px" viewBox="-1 -1 392 345">
      <g id="Group-2">
        <g id="react" transform="translate(101.000000, 0.000000)" fill="#8383AC">
          <g id="svg_1">
            <g id="svg_2">
              <path d="M94.035645,4.26325709e-14 C79.809357,4.26325709e-14 68.285614,5.098721 68.285614,11.375 C68.285614,12.56464 68.70462,13.703552 69.473114,14.78125 L69.410614,14.812439 C83.954102,26.687561 112.359985,23.323578 119.035645,13.687439 L119.035645,14.156189 C119.543946,13.27039 119.816895,12.3298 119.816895,11.374939 L119.785645,11.249943 C119.641724,5.019169 108.159485,-5.9e-05 94.035645,-5.9e-05 L94.035645,3.55271368e-14 L94.035645,4.26325709e-14 Z M119.004334,15.21875 L118.660645,27.09375 C109.434449,38.105652 80.739472,40.18005 67.941864,26.90625 L68.285614,15.5 L53.004364,24.4375 C51.629517,24.337402 50.224304,24.25 48.785614,24.25 C34.559357,24.25 23.035614,29.348721 23.035614,35.625 C23.035614,37.127838 23.732513,38.563171 24.941864,39.875 C39.668274,51.127228 67.334595,47.74234 73.910614,38.25 L73.566864,51.625 C64.340668,62.636902 35.645721,64.711304 22.848114,51.4375 L23.098114,42 L3.348114,53.5625 L94.816895,106.09375 L186.223145,53.25 L165.191895,41.34375 L164.910645,51.09375 C155.684449,62.105652 126.989502,64.180054 114.191895,50.90625 L114.566895,37.875 C128.630799,50.75708 158.006592,47.619873 165.129395,37.906189 C165.140748,37.88501 165.149476,37.864899 165.160523,37.843689 C165.577881,37.049591 165.816773,36.230381 165.816773,35.374939 L165.785584,35.249939 C165.641724,29.019173 154.159424,23.999939 140.035645,23.999939 C138.289673,23.999939 136.590332,24.103882 134.941895,24.249943 L119.004334,15.218689 L119.004334,15.21875 L119.004334,15.21875 Z M120.160645,64.25 L119.816895,77.65625 C110.590699,88.668152 81.895722,90.742554 69.098114,77.46875 L69.441864,64.4375 C83.608551,77.413696 113.315369,74.130951 120.160645,64.25 Z" id="svg_3" />
              <polygon id="svg_4" points="0.505066 70.181152 85.671326 120.7294 85.671326 197.500976 -2.99999999e-05 149.478118 0.505066 70.181151" />
              <polygon id="svg_5" points="188.207031 68.370064 102.535705 121.443695 102.535705 198.215271 188.207031 150.192413 188.207031 68.370063" />
            </g>
          </g>
        </g>
        <g id="react" transform="translate(0.418239, 144.000000)" fill="#001755">
          <g id="svg_1">
            <g id="svg_2">
              <path d="M94.035645,4.26325709e-14 C79.809357,4.26325709e-14 68.285614,5.098721 68.285614,11.375 C68.285614,12.56464 68.70462,13.703552 69.473114,14.78125 L69.410614,14.812439 C83.954102,26.687561 112.359985,23.323578 119.035645,13.687439 L119.035645,14.156189 C119.543946,13.27039 119.816895,12.3298 119.816895,11.374939 L119.785645,11.249943 C119.641724,5.019169 108.159485,-5.9e-05 94.035645,-5.9e-05 L94.035645,3.55271368e-14 L94.035645,4.26325709e-14 Z M119.004334,15.21875 L118.660645,27.09375 C109.434449,38.105652 80.739472,40.18005 67.941864,26.90625 L68.285614,15.5 L53.004364,24.4375 C51.629517,24.337402 50.224304,24.25 48.785614,24.25 C34.559357,24.25 23.035614,29.348721 23.035614,35.625 C23.035614,37.127838 23.732513,38.563171 24.941864,39.875 C39.668274,51.127228 67.334595,47.74234 73.910614,38.25 L73.566864,51.625 C64.340668,62.636902 35.645721,64.711304 22.848114,51.4375 L23.098114,42 L3.348114,53.5625 L94.816895,106.09375 L186.223145,53.25 L165.191895,41.34375 L164.910645,51.09375 C155.684449,62.105652 126.989502,64.180054 114.191895,50.90625 L114.566895,37.875 C128.630799,50.75708 158.006592,47.619873 165.129395,37.906189 C165.140748,37.88501 165.149476,37.864899 165.160523,37.843689 C165.577881,37.049591 165.816773,36.230381 165.816773,35.374939 L165.785584,35.249939 C165.641724,29.019173 154.159424,23.999939 140.035645,23.999939 C138.289673,23.999939 136.590332,24.103882 134.941895,24.249943 L119.004334,15.218689 L119.004334,15.21875 L119.004334,15.21875 Z M120.160645,64.25 L119.816895,77.65625 C110.590699,88.668152 81.895722,90.742554 69.098114,77.46875 L69.441864,64.4375 C83.608551,77.413696 113.315369,74.130951 120.160645,64.25 Z" id="svg_3" />
              <polygon id="svg_4" points="0.505066 70.181152 85.671326 120.7294 85.671326 197.500976 -2.99999999e-05 149.478118 0.505066 70.181151" />
              <polygon id="svg_5" points="188.207031 68.370064 102.535705 121.443695 102.535705 198.215271 188.207031 150.192413 188.207031 68.370063" />
            </g>
          </g>
        </g>
        <g id="block" transform="translate(295.500000, 244.500000) scale(-1, 1) translate(-295.500000, -244.500000) translate(201.000000, 145.000000)" fill="#001755">
          <g id="react">
            <g id="svg_1">
              <g id="svg_2">
                <path d="M94.035645,4.26325709e-14 C79.809357,4.26325709e-14 68.285614,5.098721 68.285614,11.375 C68.285614,12.56464 68.70462,13.703552 69.473114,14.78125 L69.410614,14.812439 C83.954102,26.687561 112.359985,23.323578 119.035645,13.687439 L119.035645,14.156189 C119.543946,13.27039 119.816895,12.3298 119.816895,11.374939 L119.785645,11.249943 C119.641724,5.019169 108.159485,-5.9e-05 94.035645,-5.9e-05 L94.035645,3.55271368e-14 L94.035645,4.26325709e-14 Z M119.004334,15.21875 L118.660645,27.09375 C109.434449,38.105652 80.739472,40.18005 67.941864,26.90625 L68.285614,15.5 L53.004364,24.4375 C51.629517,24.337402 50.224304,24.25 48.785614,24.25 C34.559357,24.25 23.035614,29.348721 23.035614,35.625 C23.035614,37.127838 23.732513,38.563171 24.941864,39.875 C39.668274,51.127228 67.334595,47.74234 73.910614,38.25 L73.566864,51.625 C64.340668,62.636902 35.645721,64.711304 22.848114,51.4375 L23.098114,42 L3.348114,53.5625 L94.816895,106.09375 L186.223145,53.25 L165.191895,41.34375 L164.910645,51.09375 C155.684449,62.105652 126.989502,64.180054 114.191895,50.90625 L114.566895,37.875 C128.630799,50.75708 158.006592,47.619873 165.129395,37.906189 C165.140748,37.88501 165.149476,37.864899 165.160523,37.843689 C165.577881,37.049591 165.816773,36.230381 165.816773,35.374939 L165.785584,35.249939 C165.641724,29.019173 154.159424,23.999939 140.035645,23.999939 C138.289673,23.999939 136.590332,24.103882 134.941895,24.249943 L119.004334,15.218689 L119.004334,15.21875 L119.004334,15.21875 Z M120.160645,64.25 L119.816895,77.65625 C110.590699,88.668152 81.895722,90.742554 69.098114,77.46875 L69.441864,64.4375 C83.608551,77.413696 113.315369,74.130951 120.160645,64.25 Z" id="svg_3" />
                <polygon id="svg_4" points="0.505066 70.181152 85.671326 120.7294 85.671326 197.500976 -2.99999999e-05 149.478118 0.505066 70.181151" />
                <polygon id="svg_5" points="188.207031 68.370064 102.535705 121.443695 102.535705 198.215271 188.207031 150.192413 188.207031 68.370063" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );

  const Pallete = () => (
    <svg viewBox="659 634 339 311">
      <g id="28538" stroke="none" transform="translate(659.000000, 634.000000)">
        <path d="M95.412,217.474 C91.906,217.474 88.609,218.837 86.131,221.315 C83.648,223.803 82.283,227.09 82.283,230.602 C82.283,234.108 83.648,237.395 86.131,239.873 C91.086,244.839 99.726,244.839 104.682,239.873 C109.794,234.76 109.794,226.439 104.687,221.321 C102.21,218.837 98.914,217.474 95.412,217.474 Z" id="Shape" fill="#8383AC" />
        <path d="M60.551,156.469 C57.044,156.469 53.759,157.828 51.28,160.307 C48.792,162.789 47.427,166.085 47.427,169.586 C47.427,173.083 48.792,176.385 51.28,178.862 C56.241,183.822 64.866,183.811 69.827,178.862 C74.934,173.749 74.934,165.423 69.832,160.311 C67.354,157.835 64.058,156.469 60.551,156.469 Z" id="Shape" fill="#8383AC" />
        <path d="M336.443,2.336 C335.142,1.04 333.231,0.488 331.463,0.903 L307.389,6.304 C305.783,6.703 297.588,8.881 293.592,12.929 C287.336,19.264 285.599,28.383 288.159,36.367 C286.632,36.047 285.006,36.309 283.708,37.348 L245.541,67.915 C244.339,68.876 243.619,70.293 243.534,71.821 C243.523,71.931 243.588,72.042 243.588,72.151 C243.524,72.151 243.477,72.12 243.409,72.12 C241.955,72.151 240.557,72.782 239.56,73.857 L216.305,99.133 C208.238,102.34 201.034,106.997 194.935,113.091 C190.694,117.338 185.045,119.674 179.04,119.674 C173.034,119.674 167.386,117.338 163.139,113.091 C158.582,108.534 156.2,102.225 156.598,95.794 C156.624,95.338 156.593,94.891 156.493,94.45 L156.493,94.445 C156.551,93.663 156.593,92.892 156.593,92.114 C156.604,91.93 156.604,91.757 156.598,91.568 C156.588,91.416 156.577,91.263 156.556,91.122 C155.968,75.038 149.427,59.972 138.093,48.644 C126.135,36.691 110.24,30.108 93.337,30.108 C80.14,30.108 67.489,34.118 56.749,41.714 C53.558,43.972 50.838,46.239 48.429,48.654 C47.558,49.53 46.749,50.445 45.951,51.363 L45.652,51.704 C45.505,51.819 45.352,51.956 45.216,52.098 C-13.741,111.054 -13.741,206.987 45.216,265.948 C73.778,294.511 111.757,310.244 152.152,310.244 C192.547,310.244 230.519,294.512 259.083,265.948 C288.265,236.772 303.991,197.973 303.355,156.714 C303.344,156.163 303.235,155.633 303.041,155.118 C302.343,139.212 295.818,124.33 284.574,113.091 C278.747,107.259 271.797,102.698 264.19,99.527 L264.731,99.033 C265.801,98.041 266.426,96.655 266.458,95.19 C266.458,95.148 266.437,95.112 266.437,95.069 C266.447,95.069 266.453,95.079 266.462,95.079 C266.566,95.079 266.662,95.079 266.767,95.069 C268.284,94.985 269.706,94.261 270.667,93.064 L301.24,54.896 C302.163,53.746 302.489,52.329 302.342,50.959 C304.71,51.777 307.193,52.302 309.777,52.302 C315.896,52.302 321.65,49.893 325.965,45.52 C328.958,42.497 332.973,29.641 337.892,7.321 C338.276,5.512 337.734,3.638 336.443,2.336 Z M160.951,175.173 L223.467,107.23 L223.472,107.225 L243.687,85.262 L253.345,94.916 L163.424,177.652 L160.4,178.21 L160.951,175.173 Z M43.673,186.453 C39.159,181.95 36.671,175.96 36.671,169.582 C36.671,163.203 39.16,157.209 43.673,152.7 C48.177,148.196 54.167,145.713 60.545,145.713 C66.918,145.713 72.913,148.196 77.427,152.7 C86.728,161.998 86.728,177.146 77.427,186.448 C72.918,190.969 66.923,193.452 60.545,193.452 C54.167,193.457 48.178,190.969 43.673,186.453 Z M112.289,247.468 C107.774,251.977 101.785,254.459 95.412,254.459 C89.029,254.459 83.039,251.977 78.53,247.468 C74.021,242.965 71.532,236.969 71.532,230.596 C71.532,224.218 74.021,218.214 78.53,213.708 C83.039,209.205 89.029,206.723 95.412,206.723 C101.779,206.723 107.774,209.205 112.289,213.708 C121.586,223.021 121.586,238.161 112.289,247.468 Z M122.699,104.826 C118.714,108.815 113.181,111.014 107.124,111.014 C99.507,111.014 91.737,107.608 85.806,101.676 C74.762,90.636 73.349,74.08 82.651,64.773 C86.636,60.784 92.174,58.589 98.236,58.589 C105.853,58.589 113.623,61.991 119.549,67.922 C124.751,73.113 128.011,79.696 128.736,86.452 C129.512,93.634 127.365,100.159 122.699,104.826 Z M171.519,280.545 C167.004,285.054 161.009,287.536 154.636,287.536 C148.263,287.536 142.268,285.054 137.759,280.545 C133.245,276.029 130.761,270.046 130.761,263.662 C130.761,257.284 133.245,251.29 137.759,246.785 C142.268,242.282 148.263,239.794 154.636,239.794 C161.014,239.794 167.009,242.276 171.519,246.785 C180.815,256.093 180.815,271.237 171.519,280.545 Z M231.183,247.032 C226.68,251.537 220.684,254.019 214.3,254.019 C207.922,254.019 201.934,251.537 197.423,247.032 C192.909,242.528 190.432,236.538 190.432,230.16 C190.432,223.776 192.91,217.782 197.423,213.279 C201.934,208.763 207.922,206.281 214.3,206.281 C220.684,206.281 226.68,208.763 231.183,213.279 C235.687,217.772 238.176,223.766 238.176,230.154 C238.171,236.527 235.681,242.528 231.183,247.032 Z M264.862,153.435 C269.373,157.944 271.855,163.938 271.855,170.311 C271.855,176.694 269.373,182.69 264.862,187.199 C260.353,191.709 254.359,194.186 247.987,194.186 C241.608,194.186 235.618,191.704 231.104,187.193 C226.593,182.685 224.106,176.689 224.106,170.311 C224.106,163.933 226.593,157.933 231.104,153.429 C235.618,148.925 241.603,146.442 247.987,146.442 C254.359,146.443 260.354,148.926 264.862,153.435 Z M266.033,81.649 L256.957,72.557 L286.669,48.751 L289.85,51.922 L266.033,81.649 Z M318.312,37.948 C313.75,42.567 305.807,42.572 301.242,37.948 C296.479,33.134 296.479,25.296 301.242,20.478 C302.471,19.239 306.743,17.543 309.861,16.767 L325.484,13.26 C322.717,24.798 319.587,35.996 318.312,37.948 Z" id="Shape" fill="#001755" />
        <path d="M154.636,250.55 C151.13,250.55 147.839,251.914 145.36,254.392 C142.877,256.87 141.512,260.167 141.512,263.668 C141.512,267.174 142.877,270.472 145.36,272.949 C150.316,277.904 158.956,277.904 163.912,272.949 C169.024,267.836 169.024,259.515 163.917,254.396 C161.435,251.914 158.143,250.55 154.636,250.55 Z" id="Shape" fill="#8383AC" />
        <path d="M238.716,161.035 C236.234,163.514 234.873,166.81 234.873,170.311 C234.873,173.819 236.238,177.12 238.722,179.597 C243.687,184.552 252.312,184.547 257.267,179.597 C259.745,177.119 261.11,173.824 261.11,170.311 C261.11,166.815 259.745,163.514 257.267,161.035 C254.789,158.557 251.494,157.194 247.988,157.194 C244.484,157.194 241.193,158.558 238.716,161.035 Z" id="Shape" fill="#8383AC" />
        <path d="M214.3,217.037 C210.805,217.037 207.504,218.406 205.025,220.886 C202.547,223.364 201.183,226.649 201.183,230.165 C201.183,233.662 202.547,236.958 205.025,239.436 C209.987,244.386 218.622,244.386 223.566,239.436 C226.054,236.954 227.42,233.658 227.42,230.161 C227.42,226.654 226.054,223.364 223.576,220.887 C221.099,218.406 217.808,217.037 214.3,217.037 Z" id="Shape" fill="#8383AC" />
      </g>
    </svg>
  );
  return (
    <div className="landing-page">
      <Grid>
        <GridColumn span={3}>
          <Link to="components">
            <div className="big-nav-button">
              <Blocks />
              <div className="nav-title">Components</div>
            </div>
          </Link>
        </GridColumn>
        <GridColumn span={3}>
          <div className="big-nav-button">
            <Pallete />
            <div className="nav-title">Style Guide</div>
          </div>
        </GridColumn>
      </Grid>
    </div>
  );
}
