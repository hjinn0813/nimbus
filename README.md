# Nimbus ☁

## 1. 프로젝트 소개 & 기획 의도
- 글로벌 날씨 정보 웹 애플리케이션
- React 실력 유지 및 포트폴리오 활용
- API 연동 및 UI/UX 경험 강화

<br>

## 2. 개발 기간 & 단계
### 1차 개발 (Initial Release)
- **기간**: 2025.06 ~ 2025.12
- **내용**
  - 전세계 도시 검색 기반 날씨 조회 기능 구현 (OpenWeatherMap API)
  - Geolocation API를 활용한 현재 위치 기반 날씨 위젯 구현
  - TanStack Query를 사용한 비동기 데이터 요청, 캐싱 및 로딩 상태 관리
  - 데이터 로딩 전 Skeleton UI 적용으로 사용자 경험 개선
  - Zustand를 활용한 다크모드 전역 상태 관리 및 LocalStorage 연동
  - 검색 결과(도시명)에 따른 상세 페이지 동적 라우팅 및 404 페이지 예외 처리

### 2차 개선 (Migration & Enhancement)
- **기간**: 2026.02 ~ 진행 중
- **내용**
  - CRA → Vite 마이그레이션으로 빌드 속도 및 구조 최적화
  - Github Actions 기반 CI 환경 구성 (코드 품질 검사, TypeScript type check & ESLint 실행)
  - 전체 프로젝트 구조 안정화 및 디렉토리 정리

<br>

## [3. 주요 기능 및 페이지 구성](https://github.com/hjinn0813/nimbus/wiki/Step-01.-%EA%B8%B0%ED%9A%8D-%EB%B0%8F-%EC%B4%88%EA%B8%B0-%EC%84%B8%ED%8C%85)

<br>

## 4. 사용 기술 스택

| 스택/패키지  | 용도  |
| --- | --- |
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) | 프로젝트 생성, 컴포넌트 기반 개발 |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white) | 정적 타입 검사, 안정적인 코드 작성 |
| ![ReactQuery](https://img.shields.io/badge/React_Query-FF4154?style=flat&logo=reactquery&logoColor=white) | API 데이터 캐싱, 상태 관리  |
| ![axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white) | API 통신  |
| ![tailwind](https://img.shields.io/badge/Tailwind-06B6D4?style=flat&logo=TailwindCSS&logoColor=white) | 빠른 UI 스타일링  |
| ![vite](https://img.shields.io/badge/vite-646CFF?style=flat&logo=vite&logoColor=white) | 빠른 빌드, 개발 서버 제공 |
| `react-router-dom` | 라우팅 (메인 페이지 ↔ 상세 페이지) |
| `react-icons`  | 메인+상세 페이지 - 아이콘  |
| `date-fns`  | 상세 페이지 - 날짜 포맷팅 및 비교 (오늘 날짜, 5일치 예보용) |
| `react-loading-skeleton` | 상세 페이지 - 스켈레톤 UI |
| `OpenWeatherMap API` | 날씨 데이터 출력 |
| `Geolocation API` | 현재 위치 받아오기 |
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white) | 배포 |

<br>

## [5. 개발 기록 아카이빙](https://github.com/hjinn0813/nimbus/wiki/Step-01.-%EA%B8%B0%ED%9A%8D-%EB%B0%8F-%EC%B4%88%EA%B8%B0-%EC%84%B8%ED%8C%85)

<br>

## 6. 디렉토리 구조
```
📦nimbus
 ┣ 📂public
 ┃ ┣ 📂favicon
 ┃ ┃ ┣ 📜android-chrome-192x192.png
 ┃ ┃ ┣ 📜android-chrome-512x512.png
 ┃ ┃ ┣ 📜apple-touch-icon.png
 ┃ ┃ ┣ 📜favicon-16x16.png
 ┃ ┃ ┣ 📜favicon-32x32.png
 ┃ ┃ ┗ 📜favicon.ico
 ┃ ┗ 📂fonts
 ┃ ┃ ┗ 📜PretendardStdVariable.woff2
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┗ 📜crying-face.png
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜DarkMode.tsx
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┣ 📜ForecastSection.tsx
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜SearchBar.tsx
 ┃ ┃ ┗ 📜WeatherCard.tsx
 ┃ ┣ 📂constants
 ┃ ┃ ┣ 📜cities.ts
 ┃ ┃ ┗ 📜default.ts
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜useForecast.tsx
 ┃ ┃ ┗ 📜useWeather.tsx
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜Detail.tsx
 ┃ ┃ ┣ 📜Main.tsx
 ┃ ┃ ┗ 📜NotFound.tsx
 ┃ ┣ 📂styles
 ┃ ┃ ┗ 📜global.css
 ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜formatDate.ts
 ┃ ┣ 📜App.tsx
 ┃ ┣ 📜images.d.ts
 ┃ ┣ 📜main.tsx
 ┃ ┗ 📜queryClient.tsx
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜postcss.config.js
 ┣ 📜tailwind.config.js
 ┣ 📜tsconfig.json
 ┗ 📜vite.config.ts
```