import React from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path, Polygon } from 'react-native-svg';

import Wrapper from '../common/wrapper/Wrapper';
import { darken } from '../../utils/colors';

const Sitting4 = ({
  className,
  height,
  skinColor,
  hairColor,
  shoeColor,
  pantColor,
  shirtColor,
  coatColor,
  objectColor
}) => (
  <Wrapper className={className}>
    <Svg width={0.95 * height} height={height} viewBox="0 0 380 400">
      <G
        id="humaaans/sitting-4"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <G
          id="A-Human/Sitting"
          transform="translate(190.000000, 200.500000) scale(-1, 1) translate(-190.000000, -200.500000) translate(40.000000, 24.000000)"
        >
          <G id="Head/Front/Curly" transform="translate(82.000000, 0.000000)">
            <G
              id="Head"
              stroke-width="1"
              transform="translate(54.000000, 31.000000)"
              fill={skinColor}
            >
              <Path d="M8.26227388,34.4901268 C3.65436435,29.0813759 0.535634794,22.4528771 1.05677633,15.0254539 C2.55833022,-6.37502057 32.3485306,-1.66718886 38.1433414,9.13393292 C43.9381521,19.9350547 43.249578,47.3329958 35.7603014,49.2634576 C32.7735882,50.033323 26.4110012,48.1474609 19.935372,44.244306 L24,73 L0,73 L8.26227388,34.4901268 Z" />
            </G>
            <Path
              d="M102.7757,25.1604378 C102.27871,23.413499 100.941932,21.9177553 99.1403997,21.4740102 C98.7035309,21.3663739 98.2523568,21.3228991 97.8028308,21.3410245 C97.6415842,21.3474604 97.5963613,21.3939561 97.5210118,21.2811974 C97.4651095,21.197597 97.463857,20.9933574 97.44085,20.8951122 C97.3692581,20.5896064 97.2797352,20.2879096 97.169249,19.9940277 C96.7923038,18.9916772 96.1588538,18.1045809 95.3952068,17.3573001 C93.9668625,15.9592762 92.0369134,14.9944243 90.0318126,14.8198684 C88.9343996,14.7243814 87.8449632,14.9026807 86.8074738,15.2596732 C86.2703367,15.444474 85.7494825,15.6745884 85.2422083,15.9290015 C85.0894658,16.0055749 84.5939258,16.3806273 84.4406558,16.3563287 C84.2713667,16.3295345 83.9311403,15.9088402 83.793494,15.8032397 C82.0920984,14.4978789 79.9910802,13.9846529 77.8718674,14.0003485 C75.4798671,14.0180142 73.1765325,14.1375371 71.1815838,15.5957165 C70.7592838,15.9044402 70.3570902,16.2424535 69.974146,16.5983297 C69.7724889,16.7856917 69.5771603,16.9800806 69.3908631,17.1825471 C69.2784651,17.3046969 69.1690337,17.4296049 69.0636894,17.5578621 C68.8849074,17.7755645 68.9135837,17.8470813 68.6633416,17.6951821 C67.7032454,17.1118841 66.5906702,16.8390829 65.4700524,16.976797 C64.80463,17.0586242 64.1572045,17.2583982 63.5424765,17.5213485 C63.3331724,17.6108594 62.8487074,17.9679176 62.6256255,17.9713982 C62.4043234,17.9748132 61.9266485,17.6438267 61.6986882,17.5597009 C60.4674524,17.1051856 59.1403652,16.9931493 57.8462393,17.2031681 C56.5113072,17.4198854 55.1999755,17.9524847 54.068942,18.6884699 C53.524949,19.0425073 53.0503065,19.4347656 52.6690763,19.9611918 C52.5044676,20.1884823 52.3556804,20.4289072 52.1691195,20.6396484 C52.0598858,20.7630459 51.8435939,20.8896614 51.7849887,21.0458292 C51.8200595,20.9523124 50.3250675,20.3759756 50.1839932,20.3391337 C49.43241,20.1428403 48.6671149,20.1826375 47.9311554,20.4248355 C46.5472429,20.8802703 45.3570768,21.9016 44.3789178,22.9487388 C43.8765219,23.4865919 43.4368843,24.0811198 43.0636966,24.7145254 C42.8848487,25.0179297 42.7212948,25.3300027 42.5716506,25.6487085 C42.4991357,25.8031032 42.4510782,25.9962443 42.3555564,26.1353375 C42.232413,26.3145561 42.1496802,26.3179711 41.9266642,26.3961207 C40.7940485,26.7929104 39.7615692,27.4645372 38.9753108,28.3720574 C38.1800209,29.2902166 37.663979,30.42089 37.4476212,31.6115877 C37.4348981,31.6817253 37.427317,31.9723892 37.3862473,32.0103476 C37.3299494,32.0626224 37.1021869,32.0395059 37.0160261,32.0496194 C36.7176606,32.0846225 36.4214046,32.1367003 36.1291039,32.2059185 C35.5902528,32.3334534 35.0657729,32.5211438 34.5696396,32.7666254 C32.6356033,33.723531 31.2525478,35.5174909 30.5756549,37.5361144 C29.8654051,39.6545592 29.8779963,42.0815964 30.7268813,44.1605068 C30.8640002,44.4962873 31.0271586,44.8222171 31.2187955,45.1305467 C31.3364672,45.3198132 31.3744386,45.3202729 31.2980344,45.5188648 C31.2128624,45.7397851 31.0572852,45.9544667 30.9561599,46.1703303 C30.6262175,46.874793 30.3955544,47.6219424 30.2498656,48.3850501 C30.0108303,49.6368226 29.8923675,50.9522969 30.1281725,52.2135918 C30.2376699,52.799254 30.4284498,53.3717818 30.7194979,53.8934139 C30.8678896,54.1593852 31.0415297,54.411631 31.2375834,54.6449634 C31.3393678,54.7661281 31.4474808,54.881842 31.5605381,54.9926962 C31.6252081,55.0560039 31.7099845,55.111431 31.7649639,55.1821597 C31.8991823,55.3546142 31.9273971,55.2128285 31.8581785,55.4660594 C31.7614041,55.8200967 31.5420138,56.1694057 31.4076636,56.5139206 C31.2692262,56.868943 31.1441052,57.2288251 31.0296636,57.5922535 C30.7978799,58.3281731 30.6018921,59.077424 30.479342,59.8395467 C30.2439984,61.3027828 30.2853319,62.8618999 30.9774529,64.204825 C31.2733793,64.7792573 31.6979207,65.2831579 32.2128419,65.6751536 C32.4648638,65.8669157 32.7378492,66.0322119 33.0242168,66.1679557 C33.171356,66.2378307 33.3592353,66.2677771 33.4263445,66.4100881 C33.4985956,66.5631037 33.3913396,66.8669677 33.3668823,67.038043 C33.1540843,68.5263001 33.0473557,70.0888978 33.489762,71.5473398 C33.8972294,72.890659 34.7943696,74.0766939 35.9591555,74.8619331 C38.2187834,76.3851933 41.2646697,76.2992944 43.6389369,75.0798325 C44.257818,74.7619147 44.8368159,74.3672265 45.3533193,73.9016782 C46.6685404,75.6721932 49.3749915,75.6161751 51.2972276,75.1116834 C53.6920627,74.4832031 55.6137056,72.8179602 56.7208751,70.6300344 C58.2347869,72.4729856 61.411991,71.8750427 62.4618079,69.8757268 C62.718774,69.3864053 62.871187,68.8471075 62.9462069,68.3013738 C62.9856945,68.0143875 62.9605121,67.7249057 62.9901773,67.4402179 C63.0280168,67.0774462 63.2703482,66.7249193 63.4096426,66.3739686 C63.6809139,65.6909806 63.8493461,64.9854671 63.8565976,64.2487595 C63.8603552,63.8641191 63.8116384,63.4892637 63.7750514,63.1077099 C63.742156,62.7642457 63.8374141,62.4442264 63.8915365,62.105228 C63.277336,62.2063627 62.5290489,62.0407382 61.9503806,61.8626359 C61.3825236,61.6878829 60.8506603,61.2275884 60.4498511,60.8072225 C59.5192222,59.831075 58.950706,58.5514576 58.5618947,57.2778821 C57.7083952,54.4826224 58.0582462,51.1289544 60.8697779,49.5948583 C62.1795274,48.8802164 66.1033718,48.8825605 67.6633416,49.2357609 C69.3035816,49.6071356 71.1630595,53.2263842 71.25456,53.5665648 C71.3111875,53.7771089 71.282709,54.0376951 71.4761258,54.1779703 C71.9011945,54.4864314 72.6022151,53.9511395 72.9157428,53.6869414 C73.4567694,53.2309812 73.8426801,52.624304 74.1769075,52.0093522 C74.9051541,50.669645 75.4922605,49.2329403 75.9069794,47.7662893 C76.2267038,46.6355502 76.4311297,45.4695452 76.8490129,44.367636 C77.2648524,43.2711776 77.9203865,42.2911555 78.9396153,41.6700305 C80.048367,40.9943321 81.3192882,40.638456 82.5364825,40.2138213 C83.7429973,39.7929956 84.9286806,39.2786532 85.8639241,38.385712 C86.0695366,38.189353 86.269282,37.9807133 86.4348135,37.7495481 C86.5654721,37.5670459 86.6946144,37.2176712 86.8937005,37.1019573 C87.203207,36.9219506 87.6549084,37.39006 87.9225541,37.560019 C89.2429831,38.3986494 90.3446151,39.5682663 91.2331195,40.8459792 C92.1166797,42.1167309 92.841683,43.3394764 93.430833,44.7584496 C93.8678337,45.8108422 94.1405685,47.158627 94.9091597,48.0210964 C95.2522867,48.4061965 97.8028308,48.6391716 98.6289725,48.3029602 C99.4551141,47.9667489 100.380997,47.0937432 100.658267,46.5466304 C100.942129,45.9866459 101.009964,45.371497 100.888666,44.7584496 C100.817338,44.3977794 100.671649,44.0608825 100.591949,43.7066481 C100.52484,43.4090887 100.463927,43.1278158 100.319095,42.8552117 C100.044594,42.3386363 99.5756205,41.9673273 99.0100708,41.8120789 C99.5986275,41.2694318 100.086323,40.6202648 100.42378,39.8945901 C100.774422,39.1406764 101.071601,38.2238307 101.155916,37.3963645 C101.224476,36.7242781 101.11867,36.0279587 100.750756,35.4503742 C100.36478,34.844485 99.6810307,34.4492057 99.0894416,34.0712638 C99.9931082,33.3642399 100.766512,32.5043974 101.402335,31.5524173 C102.638845,29.7011258 103.403678,27.3675397 102.7757,25.1604378 Z"
              id="hair"
              fill={hairColor}
            />
          </G>
          <G
            id="Bottom/Sitting/Sweat-Pants"
            transform="translate(0.000000, 187.000000)"
          >
            <G
              id="Objects/Seat/Cube-2"
              transform="translate(10.000000, 42.000000)"
              fill={objectColor}
            >
              <Path
                d="M59,0 L174,0 C182.836556,-1.623249e-15 190,7.163444 190,16 L190,108 C190,116.836556 182.836556,124 174,124 L59,124 C50.163444,124 43,116.836556 43,108 L43,16 C43,7.163444 50.163444,1.623249e-15 59,0 Z M75,28 C72.790861,28 71,29.790861 71,32 L71,92 C71,94.209139 72.790861,96 75,96 L158,96 C160.209139,96 162,94.209139 162,92 L162,32 C162,29.790861 160.209139,28 158,28 L75,28 Z"
                id="Seat"
              />
            </G>
            <Path
              d="M271.509253,162.659849 C258.696468,134.301545 249.430392,109.608281 245.711023,96.5800564 C239.34256,74.2725728 234.497817,54.6432898 233.273327,47.3127766 C230.353374,29.8322277 255.735275,28.8143004 259.090229,37.5018287 C264.168086,50.6507477 273.032873,93.8526085 283.684593,159.107411 L271.509253,162.659849 Z M122.888346,73.6635414 C134.644063,69.0168268 175.811956,54.4748802 195.66723,50.3612296 C201.37284,49.1791314 206.902884,48.0808288 212.102095,47.0882686 C227.555991,44.1380286 235.56256,72.0174283 220.678573,74.1595557 C183.611563,79.4942994 131.062816,85.0032894 126.565792,85.6215241 C120.26302,86.4880065 115.500245,76.5838567 122.888346,73.6635414 Z"
              id="Skin"
              fill={skinColor}
            />
            <Path
              d="M221.587121,39.4162575 L158,7.04671741 L158,0 L165.562186,0 C227.079876,15.6757222 258.515366,25.7216696 259.868655,30.1378423 C259.883215,30.1853551 259.896564,30.2329302 259.908703,30.2805675 C259.939662,30.3212022 259.970097,30.3620825 260,30.4032083 C272.191506,47.1700257 279.49295,129.026966 281.889416,135.156136 L258.52773,138.641377 C249.591265,105.503295 221,82.4181007 221.759487,42.7290106 C221.554409,41.5647756 221.502591,40.4606967 221.587121,39.4162575 Z"
              id="Leg-Back"
              fill={darken(pantColor)}
            />
            <Path
              d="M163.283174,58.6404762 C157.4651,57.4758245 152.107279,56.4363908 147.522705,55.6322592 C117.90929,50.4380832 109.273766,34.5862504 114.379549,4.7745025e-14 L168.941763,-4.97379915e-14 C177.854593,2.56031807 224.174037,21.9848377 248.206622,32.316337 C264.112618,39.1542526 259.098531,63.8044803 250.090957,70.2194819 C250.042044,70.6130299 249.879937,70.8803556 249.591265,71 C201.136867,91.0826527 162.804991,80.5453361 150,83.9121674 L144.07712,65.2284164 L163.283174,58.6404762 Z"
              id="Leg-Front"
              fill={pantColor}
            />
            <G
              id="Accessories/Shoe/Flat-Sneaker"
              transform="translate(143.959294, 93.331820) rotate(64.000000) translate(-143.959294, -93.331820) translate(113.459294, 73.331820)"
              fill={shoeColor}
            >
              <Path
                d="M2.67813181,25.4019242 C1.55937727,28.3884109 1,30.6229931 1,32.1056708 C1,33.908957 1.3004142,36.5404001 1.90124261,40 C3.99318117,40 22.7937852,40 58.3030548,40 C59.768738,35.1545073 58.9226607,32.5385816 55.7648228,32.1522232 C52.606985,31.7658647 49.9837155,31.4170139 47.8950143,31.1056708 L21.6799926,19.4188835 C21.1755635,19.1940064 20.584344,19.4206282 20.359467,19.9250573 C20.35562,19.9336867 20.3518954,19.9423702 20.3482945,19.9511052 L18.6632131,24.038695 C15.7398812,25.4026522 13.3643706,26.0846307 11.5366811,26.0846307 C10.0517269,26.0846307 8.00099246,25.4849054 5.38447792,24.2854549 L5.38448339,24.285443 C4.38038273,23.8251478 3.19325534,24.2659892 2.73296014,25.2700899 C2.71312074,25.3133681 2.69483298,25.3573409 2.67813181,25.4019242 Z"
                id="shoe"
              />
            </G>
            <G
              id="Accessories/Shoe/Flat-Sneaker"
              transform="translate(263.000000, 132.000000)"
              fill={shoeColor}
            >
              <Path
                d="M2.67813181,25.4019242 C1.55937727,28.3884109 1,30.6229931 1,32.1056708 C1,33.908957 1.3004142,36.5404001 1.90124261,40 C3.99318117,40 22.7937852,40 58.3030548,40 C59.768738,35.1545073 58.9226607,32.5385816 55.7648228,32.1522232 C52.606985,31.7658647 49.9837155,31.4170139 47.8950143,31.1056708 L21.6799926,19.4188835 C21.1755635,19.1940064 20.584344,19.4206282 20.359467,19.9250573 C20.35562,19.9336867 20.3518954,19.9423702 20.3482945,19.9511052 L18.6632131,24.038695 C15.7398812,25.4026522 13.3643706,26.0846307 11.5366811,26.0846307 C10.0517269,26.0846307 8.00099246,25.4849054 5.38447792,24.2854549 L5.38448339,24.285443 C4.38038273,23.8251478 3.19325534,24.2659892 2.73296014,25.2700899 C2.71312074,25.3133681 2.69483298,25.3573409 2.67813181,25.4019242 Z"
                id="shoe"
              />
            </G>
          </G>
          <G id="Body/Jacket" transform="translate(22.000000, 82.000000)">
            <Path
              d="M194.04441,89.1225115 L222.372314,116.757535 C230.61469,120.273345 237.368143,124.155511 242.632673,128.40403 C243.816587,129.832102 245.10547,132.568362 239.535214,131.343925 C233.964957,130.119488 228.050816,129.082079 227.003896,130.893567 C225.956977,132.705055 229.041811,135.480899 227.106974,137.851671 C225.817082,139.432186 221.479076,134.404878 214.092956,122.769747 L184.635682,105.402467 L194.04441,89.1225115 Z M68.3079281,93.0198914 L89.2053198,93.1020711 C76.3021447,134.755739 69.3363474,156.856914 68.3079281,159.405597 C65.9939846,165.140133 70.8906002,173.873732 72.9845874,178.567103 C66.1645409,181.61887 66.8912241,170.316929 58.2879189,174.319492 C50.4352209,177.972846 44.4616931,184.59248 35.3890352,178.994371 C34.2736052,178.306117 33.0512757,175.714714 36.0045784,173.68967 C43.3623323,168.644547 53.9653015,159.814672 55.3979297,156.908251 C57.3515741,152.944826 61.6549068,131.648706 68.3079281,93.0198914 Z"
              id="Skin"
              fill={skinColor}
            />
            <Path
              d="M122.01899,9.23199981 L130.503942,7.00082913 C148.576175,42.7520052 177.414525,74.1501034 217.01899,101.195124 L192.061793,137.56505 C151.33882,97.6857553 124.670571,55.1985909 122.01899,9.23199981 Z"
              id="Coat-Back"
              fill={darken(coatColor)}
              transform="translate(169.518990, 72.282940) rotate(5.000000) translate(-169.518990, -72.282940) "
            />
            <Path
              d="M90,114 L167,114 C149.16087,70.6251468 140.241304,33.7787236 140.241304,3.4607303 L117.014208,0 C98.7598929,29.3584068 93.6048263,65.5045499 90,114 Z"
              id="Shirt"
              fill={shirtColor}
            />
            <Path
              d="M116.522435,0.0164198669 C116.525484,0.0109456263 116.528534,0.00547233727 116.531583,-1.73374996e-14 L118.047752,-4.26343884e-14 C119.86198,0.0624731357 122.625282,0.175030894 126.337658,0.337673275 L131.950158,16.3768801 C132.543836,35.9324229 136.010826,75.3421183 142.351127,134.605966 L91.8760816,134.605966 C92.0084015,138.699076 92.2265759,142.83042 92.5306047,147 L55,147 C60.6139164,83.6639633 81.1152373,34.6639633 116.503963,1.42108547e-14 L116.522435,0.0164198605 Z"
              id="Coat-Front"
              fill={coatColor}
            />
            <Path
              d="M95.2102301,82.2331012 C96.6467433,107.747892 100.243333,125.336858 106,135 L91.889081,135 C91.27131,116.642855 92.3783599,99.0539088 95.2102289,82.2331082 Z"
              id="Shade"
              fill-opacity="0.1"
              fill="#000000"
            />
            <Polygon
              id="Light"
              fill-opacity="0.2"
              fill="#FFFFFF"
              points="103.110899 104 128 92.4292718 128 104"
            />
          </G>
        </G>
      </G>
    </Svg>
  </Wrapper>
);

Sitting4.propTypes = {
  height: PropTypes.number,
  skinColor: PropTypes.string,
  hairColor: PropTypes.string,
  shoeColor: PropTypes.string,
  shirtColor: PropTypes.string,
  coatColor: PropTypes.string,
  pantColor: PropTypes.string,
  objectColor: PropTypes.string
};

Sitting4.defaultProps = {
  height: 480,
  skinColor: '#57331F',
  hairColor: '#191847',
  shoeColor: '#E4E4E4',
  shirtColor: '#DDE3E9',
  coatColor: '#FF4133',
  pantColor: '#2F3676',
  objectColor: '#C5CFD6'
};

export default Sitting4;
