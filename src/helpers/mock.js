// MOCK DATA

export const generValues = ["men", "women", "boys", "girls"];

export const categoryValues = [
  "tshirts",
  "shirts",
  "jeans",
  "jackets",
  "sweaters",
  "sweatshirts",
];

export const brandValues = [
  "puma",
  "roadster",
  "bata",
  "flite",
  "crocs",
  "redtape",
  "woodland",
];

export const colorValues = {
  white: "rgb(255, 255, 255)",
  black: "rgb(54, 69, 79)",
  grey: "rgb(159, 168, 171)",
  brown: "rgb(145, 80, 57)",
  tan: "rgb(210, 180, 140)",
  blue: "rgb(0, 116, 217)",
};

export const discountValues = [11, 22, 33, 44, 55, 66, 77, 88, 92];

export const PRICE = {
  "Upto Rs.500": 0,
  "Rs.500 - Rs.1000": 500,
  "Rs.1000 - Rs.1500": 1000,
  "Rs.1500 - Rs.2000": 1500,
  "Rs.2000 - Rs.2500": 2000,
  "Rs.2500+": 2500,
};

export const getUpperLimit = (lowerLimit) => {
  if (lowerLimit === 2500) {
    return Number.MAX_SAFE_INTEGER;
  }

  return lowerLimit + 500;
};

export const getListData = () => {
  return new Promise((resolve) => {
    let imageValues = [
      "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19043284/2022/7/11/d1835e4d-e075-49a9-ac37-f235eea9e3cb1657506593191SHEETALAssociatesBlackSheathMidiDress1.jpg",
      "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/9838377/2019/7/12/78179e92-0f78-4fca-8eb5-b0ca44a060b01562927656990-HIGHLANDER-Men-Black-Solid-Slim-Fit-Track-Pants-270156292765-1.jpg",
      "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23315980/2023/5/21/464130b7-aab7-42c0-96f0-d39e525f8ad01684693390188DEKLOOKBlackFloralStripedCrepeFitFlareDress1.jpg",
      "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19783356/2022/9/3/f6d0c561-600d-4bde-be0a-ef5732ecc8061662188687046ASIANMenBlackMeshRunningNon-MarkingShoes1.jpg",
      "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2499229/2018/4/9/11523274349300-Roadster-Men-Navy-Blue-Solid-Henley-Neck-T-shirt-4911523274349105-1.jpg",
      "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17579998/2022/3/18/61a7c929-a034-4cd6-babb-c9fc3d7ac0981647598680747HIGHLANDERMenBlackPrintedExtendedSleevesSlimFitT-shirt1.jpg",
      "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19507684/2022/8/15/43782b9d-05e3-44be-a772-9b75fedc990d1660564095532WomenSolidBlackSleevelessBodyconDress1.jpg",
      "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23184024/2023/5/15/a92a004c-a00a-42de-9c14-29c1b0c50db51684148273532WuxiWomenBlackRelaxedStraightLegStraightFitHigh-RiseEasyWash1.jpg",
    ];

    let response = [];

    for (let i = 0; i < 300; i++) {
      let obj = {
        gener: generValues[Math.floor(Math.random() * generValues.length)],
        category:
          categoryValues[Math.floor(Math.random() * categoryValues.length)],
        brand: brandValues[Math.floor(Math.random() * brandValues.length)],
        price: Math.floor(Math.random() * (5000 - 500 + 1)) + 500,
        color:
          Object.keys(colorValues)[
            Math.floor(Math.random() * Object.keys(colorValues).length)
          ],
        discount:
          discountValues[Math.floor(Math.random() * discountValues.length)],
        image: imageValues[Math.floor(Math.random() * imageValues.length)],
        popularityScore: Math.floor(Math.random() * 10) + 1,
        trendingScore: Math.floor(Math.random() * 10) + 1,
        recommendationScore: Math.floor(Math.random() * 10) + 1,
        rating: parseFloat((Math.random() * 4 + 1).toFixed(1)),
      };
      response.push(obj);
    }

    resolve(response);
  });
};
