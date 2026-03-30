# 디자인 전면 점검 및 학습 사이트 리뉴얼

**작업일**: 2026-03-31
**작업 범위**: 21개 파일 (CSS 7, Data 3, Pages 8, Components 2, Docs 1)
**커밋**: 3건 (`fb3ea69`, `0a2057b`, `1a32af8`)

---

## 문제 진단

| 항목 | 문제 | 해결 |
|------|------|------|
| 이모지 과다 | 23개+ 이모지 사용 → 프로모션 사이트 느낌 | 모든 이모지를 숫자/텍스트 라벨로 교체 |
| 컨테이너 너비 불일치 | 5종류+ (900px, 860px, 800px, 760px, 700px...) | 3단계 표준화 (1200/860/640) |
| 인라인 스타일 과다 | Enrollment, Practice, ToolDetail, ToolsOverview, About 등 | CSS 클래스로 이동 |
| 불필요한 애니메이션 | 파티클, 스크롤 인디케이터 | 삭제 |
| CSS 변수 오류 | `--color-primary`, `--color-text-secondary` 등 | `--accent`, `--text-secondary` 등으로 통일 |
| 서브 페이지 흰 배경 | Enrollment, Glossary, Practice 히어로 없음 → 네비바 안 보임 | `.about-hero` 다크 헤더 추가 |
| 레이아웃 쏠림 | enrollment-section 패딩/갭 없음, 카드 간격 없음 | 섹션 패딩 + flex gap 추가 |

---

## 커밋 1: 디자인 전면 점검 (`fb3ea69`)

### Phase 1: CSS 기초 시스템 정비 (6개 파일)

#### base.css
- `--container-max`: 1280px → **1200px**
- `--container-content`: **860px** 신규 추가
- `--container-narrow`: 960px → **640px**
- 유틸리티 클래스 추가: `.container-content`, `.icon-num`, `.icon-num-sm`, `.flex-center-wrap`

#### hero.css
- 파티클 애니메이션 CSS 전체 삭제 (`.hero-particles`, `.hero-particle`, `@keyframes particleFloat`)
- 스크롤 인디케이터 CSS 전체 삭제 (`.hero-scroll`, `.hero-scroll-mouse`, `@keyframes scrollBounce`, `@keyframes scrollDot`)
- `.hero` min-height: 100vh → **80vh**
- `.hero-title-accent`: 골드 그래디언트 → accent-light/primary-lighter 기반
- `.hero-description` max-width → `var(--container-narrow)`
- `.hero-content` max-width → `var(--container-content)`

#### pages.css
- `.audience-icon`: 이모지 48px → 텍스트 기반 아이콘 컨테이너 (48x48, 배경색, 텍스트)
- `.feature-icon-emoji` brightness 필터 삭제 → `.feature-icon-text` 추가
- `.cta-desc`, `.about-hero-desc` max-width → `var(--container-narrow)`

#### learning.css
- `.learning-content` max-width: 900px → `var(--container-content)`
- Enrollment 클래스 13개 추가
- Quiz 클래스 10개 추가

#### tools.css
- 신규 클래스 8개 추가: `.tool-usecase-grid`, `.tool-usecase-card`, `.tool-usecase-num`, `.tool-usecase-label`, `.tool-tip-card`, `.tool-tip-text`, `.tool-detail-visual`, `.tool-detail-visual-box`

#### responsive.css
- 768px / 1024px 반응형 규칙 추가

### Phase 2: 데이터 파일 이모지 제거 (3개 파일)

#### curriculum.js — icon 필드
`📋`→`1`, `🎨`→`2`, `🎤`→`3`, `📊`→`4`, `🏆`→`5`

#### tools.js — icon 필드 + 비교표
`📊`→`P`, `📝`→`G`, `🎭`→`C`, `🖼️`→`M`, `✏️`→`F`, `✨`→`Ge`
`✅`→`O`, `❌`→`X` (비교표 전체)

#### learning.js — icon 필드 + 마크다운 내 이모지
`📋`→`1`, `🎨`→`2`, `🎤`→`3`, `📊`→`4`, `📖`→`5`, `🌍`→`6`
마크다운 내 `💡`, `✅`, `❌`, `⚠️`, `🎯` 등 모든 이모지 제거

### Phase 3: 페이지 컴포넌트 수정 (10개 파일)

#### Home.jsx
- 파티클 배열 + 렌더링 JSX 삭제
- 스크롤 인디케이터 JSX 삭제
- 히어로 배지: `🎯 DreamIT...` → `DreamIT...`
- 피처 카드: `📖🌍🎯` → `01`, `02`, `03` (`.feature-icon-text`)
- 오디언스 카드: `🎓💼📚🚀` → `학생`, `직장`, `교육`, `창업`
- CTA 인라인 스타일 → `.flex-center-wrap`

#### About.jsx
- 카드 이모지 → `01`~`04` (`.icon-num-sm`)
- 로드맵 이모지 → `.icon-num` 번호
- CTA/로드맵 인라인 스타일 → CSS 클래스

#### Enrollment.jsx
- 13개 그룹 인라인 스타일 → CSS 클래스
- CSS 변수명 수정: `--color-primary` → `--accent`

#### Glossary.jsx
- `maxWidth: 860` 인라인 → `.container-content`

#### Practice.jsx
- 점수 이모지 → 퍼센트 텍스트
- 프로그레스 바/결과 화면 인라인 → CSS 클래스

#### CourseDetail.jsx
- `📅📈📚📝` → 텍스트 라벨

#### ToolDetail.jsx
- 섹션 헤더/유즈케이스/팁 인라인 → CSS 클래스

#### ToolsOverview.jsx
- 추천 카드 이모지 제거

#### Navbar.jsx
- 테마 토글: `☀️🌙🔄` → `Light`, `Dark`, `Auto`
- 컬러 피커: `🎨` → `Color`

#### Footer.jsx
- 연락처: `✉📞💬🕐` → `Email`, `Tel`, `Chat`, `Hours`

---

## 커밋 2: 서브 페이지 히어로 헤더 추가 (`0a2057b`)

### 문제
Enrollment, Glossary, Practice 페이지가 흰 배경으로 시작 → 투명 네비바(흰 글씨)가 보이지 않음

### 수정 파일 (4개)

#### Enrollment.jsx
- 미정의 `.hero-section` → `.about-hero` 다크 그래디언트 헤더 적용
- `.hero-title` → `.about-hero-title`, `.hero-subtitle` → `.about-hero-desc`

#### Glossary.jsx
- 상단에 `.about-hero` 섹션 추가 (제목/부제목 분리)
- `useAOS` 훅 import 및 호출 추가
- `paddingTop: calc(var(--nav-height) + 48px)` 인라인 스타일 제거

#### Practice.jsx
- 상단에 `.about-hero` 섹션 추가 (제목/부제목 분리)
- `useAOS` 훅 import 및 호출 추가
- `paddingTop` 인라인 스타일 제거

#### Navbar.jsx
- `/learn/*`, `/login` 경로에서 네비바 항상 `navbar-scrolled` (글래스) 스타일 적용
- `noHeroPage` 감지 로직 추가: `location.pathname.startsWith('/learn') || location.pathname === '/login'`

---

## 커밋 3: 레이아웃 쏠림 수정 (`1a32af8`)

### 문제
- `.enrollment-section`에 padding 없음 → 섹션 간격 없음
- `.enrollment-card` 사이에 gap 없음 → 카드가 붙어 있음
- ToolsOverview 추천카드, About 로드맵에 인라인 스타일 과다

### 수정 파일 (5개)

#### learning.css
- `.enrollment-section`: `padding: var(--section-padding) 0` 추가
- `.enrollment-section > .container`: `display: flex; flex-direction: column; gap: 24px` 추가

#### pages.css — 신규 CSS 클래스 추가
- `.recommend-card-title`: 추천 카드 제목 (font-size-lg, fw 700)
- `.recommend-card-desc`: 추천 카드 설명 (font-size-sm, text-secondary)
- `.recommend-card-badges`: 추천 카드 배지 래퍼 (flex, gap 8, wrap)
- `.roadmap-card`: 로드맵 카드 (flex, gap 20, center)
- `.roadmap-card-body`: 로드맵 내용 (flex 1)
- `.roadmap-week`: 주차 라벨 (xs, accent, fw 600)
- `.roadmap-title`: 로드맵 제목 (lg, fw 700)
- `.roadmap-desc`: 로드맵 설명 (sm, text-secondary)

#### ToolsOverview.jsx
- 6개 추천 카드의 인라인 `style={{ fontSize, fontWeight, marginBottom, color, lineHeight, display, gap, flexWrap }}` 모두 제거
- → `.recommend-card-title`, `.recommend-card-desc`, `.recommend-card-badges` 클래스 적용

#### About.jsx
- 로드맵 카드의 인라인 `style={{ display: 'flex', gap: 20, ... }}` 제거
- → `.roadmap-card`, `.roadmap-card-body`, `.roadmap-week`, `.roadmap-title`, `.roadmap-desc` 클래스 적용

#### Enrollment.jsx
- `style={{ paddingBottom: "4rem" }}` 인라인 스타일 제거 (CSS padding으로 대체)

---

## 전체 수정 파일 목록 (21개)

**CSS (7개)**
| 파일 | 커밋 | 주요 변경 |
|------|------|----------|
| `src/styles/base.css` | 1 | 컨테이너 너비 표준화, 유틸리티 클래스 |
| `src/styles/hero.css` | 1 | 파티클/스크롤 삭제, 높이/색상 변경 |
| `src/styles/pages.css` | 1, 3 | 아이콘/CTA 정비, 추천카드/로드맵 클래스 추가 |
| `src/styles/learning.css` | 1, 3 | Enrollment/Quiz 클래스, 섹션 패딩/갭 |
| `src/styles/tools.css` | 1 | 유즈케이스/팁/비주얼 클래스 |
| `src/styles/responsive.css` | 1 | 신규 클래스 반응형 규칙 |

**데이터 (3개)**
| 파일 | 커밋 | 주요 변경 |
|------|------|----------|
| `src/data/curriculum.js` | 1 | icon 이모지 → 숫자 |
| `src/data/tools.js` | 1 | icon 이모지 → 약자, ✅/❌ → O/X |
| `src/data/learning.js` | 1 | icon 이모지 → 숫자, 마크다운 이모지 제거 |

**페이지 (8개)**
| 파일 | 커밋 | 주요 변경 |
|------|------|----------|
| `src/pages/Home.jsx` | 1 | 파티클/스크롤 삭제, 이모지 → 텍스트 |
| `src/pages/About.jsx` | 1, 3 | 이모지 → 번호, 로드맵 인라인 → CSS |
| `src/pages/Enrollment.jsx` | 1, 2, 3 | 인라인 → CSS, 히어로 헤더 추가, 패딩 정리 |
| `src/pages/Glossary.jsx` | 1, 2 | 너비 표준화, 히어로 헤더 추가 |
| `src/pages/Practice.jsx` | 1, 2 | 이모지/인라인 제거, 히어로 헤더 추가 |
| `src/pages/courses/CourseDetail.jsx` | 1 | 이모지 → 텍스트 라벨 |
| `src/pages/tools/ToolDetail.jsx` | 1 | 인라인 → CSS 클래스 |
| `src/pages/tools/ToolsOverview.jsx` | 1, 3 | 이모지 제거, 추천카드 인라인 → CSS |

**컴포넌트 (2개)**
| 파일 | 커밋 | 주요 변경 |
|------|------|----------|
| `src/components/layout/Navbar.jsx` | 1, 2 | 이모지 → 텍스트, noHeroPage 감지 |
| `src/components/layout/Footer.jsx` | 1 | 이모지 → 텍스트 라벨 |

---

## 페이지별 레이아웃 패턴

| 페이지 | 히어로 | 컨텐츠 레이아웃 | 네비바 모드 |
|--------|--------|----------------|-------------|
| Home | `.hero` (80vh, 다크 그래디언트) | 중앙 정렬 | transparent → scrolled |
| About | `.about-hero` (다크 그래디언트) | 2컬럼 카드 + 로드맵 리스트 | transparent → scrolled |
| Enrollment | `.about-hero` (다크 그래디언트) | 수직 카드 리스트 + 프로세스 그리드 | transparent → scrolled |
| Glossary | `.about-hero` (다크 그래디언트) | 검색 + 필터 + 카드 리스트 | transparent → scrolled |
| Practice | `.about-hero` (다크 그래디언트) | 퀴즈 카드 + 결과 화면 | transparent → scrolled |
| CourseDetail | `.course-hero` (좌우 분할) | 2fr+1fr 그리드 (메인+사이드바) | transparent → scrolled |
| ToolDetail | `.tool-detail-hero` (좌우 분할) | 3컬럼 정보 + 유즈케이스 + 팁 | transparent → scrolled |
| ToolsOverview | `.about-hero` (다크 그래디언트) | 카드 그리드 + 비교표 + 추천 3컬럼 | transparent → scrolled |
| Learning | 없음 (사이드바 레이아웃) | 사이드바 + 마크다운 콘텐츠 | 항상 scrolled |
| Login | 없음 (인증 페이지) | 중앙 카드 | 항상 scrolled |

---

## 빌드 결과
- `npm run build` 성공 (4.95s)
- CSS: 52.92kB (gzip 9.13kB)
- JS 총: ~560kB (gzip ~174kB)
- gh-pages 배포 완료
