const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [19, 45, 51, 36, 25];
const allAges = ages.concat(ages2).concat([2]).concat(ages3);
const allAges2 = [...ages, ...ages2, 2, ...ages3]
// console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(business, minister, sochib);
// console.log(maximum);

const takaPoisa = [400, 500, 850, 350];
const maximum2 = Math.max(...takaPoisa);
console.log(maximum2);