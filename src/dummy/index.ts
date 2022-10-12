export interface Trip {
  link: string;
  imgSrc: string;
  description: {
    title: string;
    subTitle: string;
    information: string;
  };
}

export const trips: Trip[] = [
  {
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=DXB&cabin=Y&tripType=RT&duration=7',
    imgSrc:
      'https://www.koreanair.com/content/dam/koreanair/ko/airport-img/DXB-list-pc.jpg',
    description: {
      title: '서울/인천 - 두바이',
      subTitle: '일반석 왕복',
      information: 'KRW 1,158,000 ~',
    },
  },
  {
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=FUK&duration=7&cabin=Y',
    imgSrc:
      'https://www.koreanair.com/content/dam/koreanair/ko/airport-img/FUK-list-pc.jpg',
    description: {
      title: '서울/인천 - 후쿠오카',
      subTitle: '일반석 왕복',
      information: 'KRW 340,400 ~',
    },
  },
  {
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HKT&cabin=Y&tripType=RT&duration=7',
    imgSrc:
      'https://www.koreanair.com/content/dam/koreanair/ko/airport-img/HKT-list-pc.jpg',
    description: {
      title: '서울/인천 - 푸껫',
      subTitle: '일반석 왕복',
      information: 'KRW 704,100 ~',
    },
  },
  {
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=CNX&duration=7&cabin=Y',
    imgSrc:
      'https://www.koreanair.com/content/dam/koreanair/ko/airport-img/CNX-list-pc.jpg',
    description: {
      title: '서울/인천 - 치앙마이',
      subTitle: '일반석 왕복',
      information: 'KRW 839,100 ~',
    },
  },
  {
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=BCN&cabin=Y&tripType=RT&duration=7',
    imgSrc:
      'https://www.koreanair.com/content/dam/koreanair/ko/airport-img/BCN-list-pc.jpg',
    description: {
      title: '서울/인천 - 바르셀로나',
      subTitle: '일반석 왕복',
      information: 'KRW 1,546,300 ~',
    },
  },
  {
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HAN&duration=7&cabin=Y',
    imgSrc:
      'https://www.koreanair.com/content/dam/koreanair/ko/airport-img/HAN-list-pc.jpg',
    description: {
      title: '서울/인천 - 하노이',
      subTitle: '일반석 왕복',
      information: 'KRW 527,500 ~',
    },
  },
  {
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=FCO&duration=7&cabin=Y',
    imgSrc:
      'https://www.koreanair.com/content/dam/koreanair/ko/airport-img/FCO-list-pc.jpg',
    description: {
      title: '서울/인천 - 로마/레오나르도 다빈치',
      subTitle: '일반석 왕복',
      information: 'KRW 1,454,200 ~',
    },
  },
  {
    link: 'https://www.koreanair.com/booking/best-prices?departureCode=ICN&destinationCode=HNL&cabin=Y&tripType=RT&duration=7',
    imgSrc:
      'https://www.koreanair.com/content/dam/koreanair/ko/airport-img/HNL-list-pc.jpg',
    description: {
      title: '서울/인천 - 호놀룰루 (하와이)',
      subTitle: '일반석 왕복',
      information: 'KRW 1,244,900 ~',
    },
  },
];
