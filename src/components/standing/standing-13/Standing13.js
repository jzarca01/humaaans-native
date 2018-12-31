import React from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

import Wrapper from '../../common/wrapper/Wrapper';
import { darken } from '../../utils/colors';

const Standing13 = ({
  className,
  height,
  skinColor,
  hairColor,
  shoeColor,
  pantColor,
  coatColor
}) => (
  <Wrapper className={className}>
    <Svg width={0.8 * height} height={height} viewBox={`0 0 380 480`}>
      <G
        id="humaaans/standing-13"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <G id="humaaan-5" transform="translate(28.000000, 1.000000)">
          <G
            id="Head/Front/Long"
            transform="translate(133.250000, 73.538462) rotate(-15.000000) translate(-133.250000, -73.538462) translate(59.583333, 17.303167)"
          >
            <Path
              d="M103.665775,48.3858028 C107.407875,61.9003805 112.360802,92.8883258 107.366193,97.7251632 L75.9527004,97.7251632 C75.9494678,97.6694963 75.9462989,97.613972 75.9431935,97.5585899 C64.3000308,96.2700629 55.2444182,86.398422 55.2444182,74.4117294 L55.2444182,52.2775351 C55.2444182,39.4152024 65.6713991,28.9882215 78.5337318,28.9882215 L80.7001796,28.9882215 C92.2364646,28.9882215 101.813661,37.3760793 103.665775,48.3858028 Z"
              id="Hair-Back"
              fill={hairColor}
            />
            <G
              id="Head"
              stroke-width="1"
              transform="translate(58.494090, 33.282773)"
              fill={skinColor}
            >
              <Path d="M8.94989243,37.029905 C3.95849475,31.2228654 0.580212404,24.1062584 1.14472537,16.1318958 C2.77124441,-6.84446329 35.0407011,-1.78995704 41.3177785,9.80653596 C47.5948559,21.403029 46.8489759,50.8184952 38.7364127,52.8911119 C35.5011336,53.7176686 28.6090274,51.6929357 21.5944711,47.5023609 L25.9973733,78.3755619 L0,78.3755619 L8.94989243,37.029905 Z" />
            </G>
            <Path
              d="M74.4716038,66.4311628 C75.6694084,79.1838395 75.1895321,93.7471192 71.6198048,97.2040849 L40.2063121,97.2040849 C38.4560457,67.0631605 55.3714465,78.7350757 55.3714465,50.3566127 C56.4260561,49.3353164 57.4225769,48.3244663 58.4086429,47.4527086 L58.3737188,46.6181068 C63.8133158,35.5806085 70.7143696,30.0618594 79.0768801,30.0618594 C91.6206459,30.0618594 95.5799769,35.846966 98.9510732,40.7586052 C96.4302397,49.3316995 86.6475448,50.6028989 77.9550093,55.9467434 C76.9304022,55.1216447 75.6238841,54.6271365 74.2008362,54.6271365 C70.9104721,54.6271365 68.2431049,57.2708987 68.2431049,60.5321446 C68.2431049,63.7933905 70.9104721,66.4371527 74.2008362,66.4371527 C74.2915802,66.4371527 74.3818504,66.4351419 74.4716038,66.4311628 Z"
              id="Hair-Front"
              fill={hairColor}
            />
          </G>
          <G
            id="Bottom/Standing/Skirt"
            transform="translate(0.000000, 218.452489)"
          >
            <Path
              d="M105.514483,105.841108 C131.500318,113.081315 153.920111,116.701419 172.773862,116.701419 C191.627613,116.701419 209.139848,111.126523 225.310568,99.9767324 C199.881065,92.5453188 178.938737,88.829612 162.483583,88.829612 C146.028429,88.829612 127.038729,94.5001106 105.514483,105.841108 Z"
              id="Skirt-Shadow"
              fill={darken(pantColor)}
            />
            <Path
              d="M195.269342,127.137345 C195.018777,126.762117 194.807173,126.353944 194.639335,125.911796 C191.165875,116.761455 135.529598,18.0475458 129.986866,0 L192.625465,0 C196.839683,13.7218039 215.807465,99.8326652 218.476856,117.013051 C226.899277,144.11325 244.240199,231.880899 246.45391,237.961173 C248.782697,244.357519 235.679387,251.020857 232.187663,243.157344 C226.631741,230.645166 213.393642,196.024194 207.499265,174.88487 C201.973299,155.066799 197.473687,137.237362 195.269342,127.137345 Z"
              id="Leg"
              fill={darken(skinColor)}
            />
            <Path
              d="M144.022265,139.18945 C118.586274,145.59343 25.5467833,157.170694 19.1620059,158.986558 C12.594062,160.854516 6.83523189,147.368783 14.9535653,144.447544 C27.8712045,139.799361 63.4651473,129.059534 85.0458835,124.676822 C102.404121,121.151635 118.243726,118.275086 128.878019,116.590611 C127.977106,86.8341861 123.858804,15.4233296 126.558124,1.42108547e-14 L181.981613,1.42108547e-14 C179.393147,14.789936 157.511707,122.706139 153.444729,133.508246 C152.15407,137.36467 148.303011,139.068925 144.022265,139.18945 Z"
              id="Leg"
              fill={skinColor}
            />
            <G
              id="Accessories/Shoe/Flat-Sneaker"
              transform="translate(26.538985, 169.409524) rotate(80.000000) translate(-26.538985, -169.409524) translate(-6.499343, 147.828693)"
              fill={shoeColor}
            >
              <Path
                d="M2.90101634,27.5159711 C1.68915471,30.7510048 1.08322389,33.1715576 1.08322389,34.7776295 C1.08322389,36.7309922 1.40863973,39.5814342 2.05947141,43.3289555 C4.32550923,43.3289555 24.6907726,43.3289555 63.1552616,43.3289555 C64.7429247,38.080202 63.8264335,35.2465689 60.4057881,34.8280561 C56.9851428,34.4095434 54.1435546,34.0316599 51.8810236,33.6944057 L23.4842859,21.0349984 C22.9378762,20.7914062 22.2974531,21.0368884 22.053861,21.5832981 C22.0496938,21.5926456 22.0456593,21.6020518 22.0417587,21.6115137 L20.2164382,26.0392887 C17.0498153,27.5167596 14.4766054,28.2554951 12.4968086,28.2554951 C10.8882707,28.2554951 8.66686616,27.6058583 5.8325951,26.3065849 L5.83260102,26.3065719 C4.74493521,25.8079692 3.45901046,26.2854991 2.96040771,27.373165 C2.9389172,27.420045 2.91910746,27.4676773 2.90101634,27.5159711 Z"
                id="shoe"
              />
            </G>
            <G
              id="Accessories/Shoe/Flat-Sneaker"
              transform="translate(225.310568, 214.729269)"
              fill={shoeColor}
            >
              <Path
                d="M2.90101634,27.5159711 C1.68915471,30.7510048 1.08322389,33.1715576 1.08322389,34.7776295 C1.08322389,36.7309922 1.40863973,39.5814342 2.05947141,43.3289555 C4.32550923,43.3289555 24.6907726,43.3289555 63.1552616,43.3289555 C64.7429247,38.080202 63.8264335,35.2465689 60.4057881,34.8280561 C56.9851428,34.4095434 54.1435546,34.0316599 51.8810236,33.6944057 L23.4842859,21.0349984 C22.9378762,20.7914062 22.2974531,21.0368884 22.053861,21.5832981 C22.0496938,21.5926456 22.0456593,21.6020518 22.0417587,21.6115137 L20.2164382,26.0392887 C17.0498153,27.5167596 14.4766054,28.2554951 12.4968086,28.2554951 C10.8882707,28.2554951 8.66686616,27.6058583 5.8325951,26.3065849 L5.83260102,26.3065719 C4.74493521,25.8079692 3.45901046,26.2854991 2.96040771,27.373165 C2.9389172,27.420045 2.91910746,27.4676773 2.90101634,27.5159711 Z"
                id="shoe"
              />
            </G>
            <Path
              d="M126.737195,3.55271368e-15 C151.16047,-6.96061551 174.269246,-6.96061551 196.063524,3.55271368e-15 C203.646091,34.4618553 222.070581,48.1397925 225.310568,100.97555 C188.480956,119.20466 142.985553,87.9747512 105.072717,105.751803 C94.2404781,80.8861498 109.405613,21.0030239 126.737195,3.55271368e-15 Z"
              id="Skirt"
              fill={pantColor}
            />
          </G>
          <G
            id="Body/Pointing-Forward"
            transform="translate(161.416667, 207.097285) rotate(-10.000000) translate(-161.416667, -207.097285) translate(22.750000, 105.981900)"
          >
            <Path
              d="M171.840514,46.0260602 L209.438978,25.5349701 C215.691373,18.1468042 221.851723,12.4088581 227.920029,8.32113207 C229.774307,7.55081443 233.016972,7.08456316 229.984464,12.4404497 C226.951957,17.7963362 224.004281,23.5656363 225.549224,25.2156691 C227.094167,26.8657018 230.946621,24.5606788 232.789715,27.3022222 C234.018444,29.1299178 227.436831,32.0171623 213.044876,35.9639557 L185.72501,60.8550042 L171.840514,46.0260602 Z M230.726688,63.3149571 L247.242086,54.2869642 C249.55943,45.5126386 252.329532,41.0979787 255.552393,41.0429845 C258.028221,39.8966816 253.716584,50.9838614 258.40997,50.0223831 C263.103356,49.0609048 274.558569,40.5832184 276.53236,42.3045091 C279.452455,44.8510477 276.848719,52.670397 273.780898,56.5601046 C268.047146,63.8299632 263.299846,66.3160355 251.566158,69.5715621 C245.43118,71.2737195 238.798183,74.6855474 231.667169,79.8070459 L230.726688,63.3149571 Z"
              id="Skin"
              fill={skinColor}
            />
            <Path
              d="M154.743613,37.4365449 C167.772534,39.3599591 185.550743,39.3734922 205.909736,30.6148239 L210.623445,47.8948945 C195.860715,58.4797614 176.269964,65.9947596 160.644094,63.0702554 C148.330047,60.7655848 144.366493,44.8769319 154.743613,37.4365449 Z"
              id="Sleeve"
              fill={darken(coatColor)}
              transform="translate(179.706745, 47.160725) rotate(-9.000000) translate(-179.706745, -47.160725) "
            />
            <Path
              d="M171.262319,67.6495692 C185.243262,71.1191505 208.68844,67.0275554 241.597851,55.374784 C249.760744,72.1791606 253.534246,84.1593923 252.918354,91.3154792 C224.686928,105.989839 200.490158,112.532387 180.555253,112.964294 C181.188757,124.734654 179.749,135.934422 174.912421,146.168018 C164.969236,167.206554 106.746361,147.722523 87.1700457,151.557457 C74.9107818,111.940072 98.6144396,95.8397269 98.6335119,70.4902148 C98.6543981,42.7297979 121.055046,-1.42108547e-13 124.350853,-1.42108547e-13 L154.406795,1.35205358e-13 C156.065157,21.2009961 164.412155,44.5663307 171.262319,67.6495692 Z"
              id="Clothes"
              fill={coatColor}
            />
          </G>
        </G>
      </G>
    </Svg>
  </Wrapper>
);

Standing13.propTypes = {
  height: PropTypes.number,
  skinColor: PropTypes.string,
  hairColor: PropTypes.string,
  shoeColor: PropTypes.string,
  coatColor: PropTypes.string,
  pantColor: PropTypes.string
};

Standing13.defaultProps = {
  height: 480,
  skinColor: '#57331F',
  hairColor: '#191847',
  shoeColor: '#E4E4E4',
  coatColor: '#89C5CC',
  pantColor: '#2F3676'
};

export default Standing13;