# Nimbus ☁

#### 1. 프로젝트 목적
- 리액트 실력 유지 및 포트폴리오 활용
- API 연동 및 UI/UX 경험 강화

#### 2. 주요 기능 및 페이지 구성
- 메인 페이지
  - 도시 이름 검색 (입력 + 엔터; 검색 버튼 클릭)
  - 현재 위치 기반 날씨 위젯 (Geolocation API + OpenWeatherMap API)
  - 심플한 디자인 (검색 중심)
  - Skeleton UI 적용 (데이터 불러오기 전 상태)
  - 에러 메시지 UI 적용 (검색 실패시 예외처리)
  - 헤더: 다크모드 토글 기능 (로컬스토리지 저장)

- 상세 페이지
  - 페이지 제목에 도시 이름 동적 출력
  - 현재 날씨 정보: 날씨 상태(맑음,흐림 등), 현재 온도, 체감 온도, 습도, 풍속
  - 날씨 아이콘 (OpenWeather API 제공): 현재 날씨에 따라 변경됨
  - 5일 예보: 버튼 클릭 시 아코디언처럼 펼쳐지는 구조
  - Skeleton UI 적용 (로딩 상태 고려)

- 404 페이지: 잘못된 경로 접근 시 에러 처리

#### 3. 사용 기술 스택
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![tailwind](https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white)
![zustand](https://img.shields.io/badge/Zustand-433E38?style=for-the-badge&logo=Zustand&logoColor=white)
![ReactQuery](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
- OpenWeatherMap API (날씨 데이터)
- Geolocation API (현재 위치)