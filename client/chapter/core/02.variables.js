/* ------------------ */
/* Variables          */
/* ------------------ */

// 1. 변수 가지고 놀기
let admin;
let name;
name = 'John';
admin = name;
// console.log(admin);

// 참조에 의한 복사
name = 'tiger';
admin = name;
name = 'beom';
// console.log(admin);

// 2. 올바른 이름 선택하기
const ourPlanetName = 'Earth';
const currentOnlineUserName = 'tiger';

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
// - 구매 제품 가격의 총 합
// - 1년 기준 일(day)자 수
// - 구매 결제 여부(했어 안했어 / 있어 없어 - is)
// - 구매 결제 내역
// - 브랜드 접두사
// - 오늘의 운세
// - 상품 정보

/* variables ----------------------------------------------------------- */
// 은빈
- 개수별 상품 가격 계산하기 productPriceCount;
- 구매 제품 가격의 총합 productPriceTotal;
- 구매 결제 내역 listPayment;
- 오늘의 운세 todayHoroscope;

// 범쌤
let calcProductPriceQuantity;
let totalProductPrice;
// is, has
let isPayment = false;
let isPayment = true;
let hasClassName = true;

let pamentHistory;
let fortuneOfToday;


/* constant variables -------------------------------------------------- */
// 은빈
- 1년 기준 일(day)자 수 dateOfYear;
- 구매 결제 여부 purchasePayment;
- 상품 정보 productInfo;

// 범쌤
const DAYS_PER_YEAR = 365;
const BRAND_PREFIX = 'NIKE';
const priductInfomation = "";


//react 등에서의 찐상수로 사용되는 사례
const PADING = 'api/pading';
const LOADING = 'api/loading';
const FULFILLED = 'api/fulfilled';
const RESOLVED = 'api/resolved';
const REJECTED = 'api/rejected';