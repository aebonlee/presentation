# 디자인 전면 점검 및 학습 사이트 리뉴얼

**작업일**: 2026-03-31
**작업 범위**: 19개 파일 (CSS 6, Data 3, Pages 8, Components 2)

---

## 문제 진단

| 항목 | 문제 | 해결 |
|------|------|------|
| 이모지 과다 | 23개+ 이모지 사용 → 프로모션 사이트 느낌 | 모든 이모지를 숫자/텍스트 라벨로 교체 |
| 컨테이너 너비 불일치 | 5종류+ (900px, 860px, 800px, 760px, 700px...) | 3단계 표준화 (1200/860/640) |
| 인라인 스타일 과다 | Enrollment, Practice, ToolDetail 등 | CSS 클래스로 이동 |
| 불필요한 애니메이션 | 파티클, 스크롤 인디케이터 | 삭제 |
| CSS 변수 오류 | `--color-primary`, `--color-text-secondary` 등 | `--accent`, `--text-secondary` 등으로 통일 |

---

## Phase 1: CSS 기초 시스템 정비

### base.css
- `--container-max`: 1280px → **1200px**
- `--container-content`: **860px** 신규 추가
- `--container-narrow`: 960px → **640px**
- 유틸리티 클래스 추가: `.container-content`, `.icon-num`, `.icon-num-sm`, `.flex-center-wrap`

### hero.css
- 파티클 애니메이션 CSS 전체 삭제 (`.hero-particles`, `.hero-particle`, `@keyframes particleFloat`)
- 스크롤 인디케이터 CSS 전체 삭제 (`.hero-scroll`, `.hero-scroll-mouse`, `@keyframes scrollBounce`, `@keyframes scrollDot`)
- `.hero` min-height: 100vh → **80vh**
- `.hero-title-accent`: 골드 그래디언트 → accent-light/primary-lighter 기반
- `.hero-description` max-width → `var(--container-narrow)`
- `.hero-content` max-width → `var(--container-content)`

### pages.css
- `.audience-icon`: 이모지 48px → 텍스트 기반 아이콘 컨테이너 (48x48, 배경색, 텍스트)
- `.feature-icon-emoji` brightness 필터 삭제 → `.feature-icon-text` 추가
- `.cta-desc`, `.about-hero-desc` max-width → `var(--container-narrow)`

### learning.css
- `.learning-content` max-width: 900px → `var(--container-content)`
- Enrollment 클래스 13개 추가: `.enrollment-card-module-toggle`, `.enrollment-module-list`, `.enrollment-module-item`, `.enrollment-module-topics`, `.enrollment-module-topic`, `.enrollment-process-grid`, `.enrollment-process-num`, `.enrollment-process-title`, `.enrollment-process-desc`, `.enrollment-contact-box`, `.enrollment-contact-label`, `.enrollment-contact-info`, `.enrollment-section-heading`
- Quiz 클래스 9개 추가: `.quiz-progress-bar`, `.quiz-progress-fill`, `.quiz-meta`, `.quiz-meta-score`, `.quiz-result`, `.quiz-result-icon`, `.quiz-result-title`, `.quiz-result-score`, `.quiz-result-pct`, `.quiz-result-msg`

### tools.css
- 신규 클래스 추가: `.tool-usecase-grid`, `.tool-usecase-card`, `.tool-usecase-num`, `.tool-usecase-label`, `.tool-tip-card`, `.tool-tip-text`, `.tool-detail-visual`, `.tool-detail-visual-box`

### responsive.css
- 768px: `.container-content`, `.quiz-meta`, `.icon-num`, `.tool-usecase-grid/card` 반응형 추가
- 1024px: `.enrollment-process-grid`, `.tool-usecase-grid` 반응형 추가

---

## Phase 2: 데이터 파일 이모지 제거

### curriculum.js — icon 필드
| 기존 | 변경 |
|------|------|
| `📋` → `1`, `🎨` → `2`, `🎤` → `3`, `📊` → `4`, `🏆` → `5` |

### tools.js — icon 필드 + 비교표
| 기존 | 변경 |
|------|------|
| `📊` → `P`, `📝` → `G`, `🎭` → `C`, `🖼️` → `M`, `✏️` → `F`, `✨` → `Ge` |
| `✅` → `O`, `❌` → `X` (비교표 전체) |

### learning.js — icon 필드 + 마크다운 내 이모지
| 기존 | 변경 |
|------|------|
| `📋` → `1`, `🎨` → `2`, `🎤` → `3`, `📊` → `4`, `📖` → `5`, `🌍` → `6` |
| `> 💡 **핵심**:` → `> **핵심**:` |
| `### ✅ 좋은 발표` → `### 좋은 발표` |
| `### ❌ 나쁜 발표` → `### 나쁜 발표` |
| `> ⚠️ **절대 피할 것**:` → `> **절대 피할 것**:` |
| `> 💡 **팁**:` → `> **팁**:` |
| `> 💡 **규칙**:` → `> **규칙**:` |
| `### 🎯 개선 포인트` → `### 개선 포인트` |
| `- ❌` → `- X`, `- ✅` → `- O` |

---

## Phase 3: 페이지 컴포넌트 수정

### Home.jsx
- 파티클 배열(`particles`) + 렌더링 JSX 삭제
- 스크롤 인디케이터 JSX 삭제
- 히어로 배지: `🎯 DreamIT...` → `DreamIT...`
- 피처 카드: `📖🌍🎯` → `01`, `02`, `03` (숫자 아이콘, `.feature-icon-text`)
- 오디언스 카드: `🎓💼📚🚀` → `학생`, `직장`, `교육`, `창업`
- CTA 인라인 스타일 → `.flex-center-wrap`

### About.jsx
- 카드 이모지 `📋🛠️🎥🏆` → `01`~`04` (`.icon-num-sm`)
- 로드맵 이모지 → `.icon-num` 번호
- CTA 인라인 스타일 → `.flex-center-wrap`
- 로드맵 maxWidth 인라인 → `.container-content`

### Enrollment.jsx
- 13개 그룹 인라인 스타일 → CSS 클래스로 이동
- `--color-primary` → `--accent`, `--color-text-secondary` → `--text-secondary`
- 수강 신청 프로세스 그리드: 인라인 → `.enrollment-process-grid`
- 연락처 박스: 인라인 → `.enrollment-contact-box`

### Glossary.jsx
- `maxWidth: 860` 인라인 → `.container-content`

### Practice.jsx
- 점수 이모지 `🎉👏💪` → 퍼센트 텍스트
- `maxWidth: 760` 인라인 → `.container-content`
- 프로그레스 바: 인라인 → `.quiz-progress-bar` / `.quiz-progress-fill`
- 결과 화면: 인라인 → `.quiz-result`, `.quiz-result-score` 등
- CTA 버튼: 인라인 → `.flex-center-wrap`

### CourseDetail.jsx
- `📅📈📚📝` → 텍스트 라벨 (`기간:`, `난이도:`, `모듈:`, `토픽:`)
- 커리큘럼 사이드바: 이모지 아이콘 → 번호 + `.`
- 네비게이션: 인라인 → `.flex-center-wrap`

### ToolDetail.jsx
- `⚡👍⚠️` 섹션 헤더 이모지 → 텍스트 (`주요 기능`, `장점`, `단점`)
- 유즈케이스 이모지 → 번호 (`.tool-usecase-num`)
- 유즈케이스 그리드: 인라인 → `.tool-usecase-grid` / `.tool-usecase-card`
- 팁 카드: 인라인 → `.tool-tip-card` / `.icon-num-sm`
- 히어로 비주얼: 인라인 → `.tool-detail-visual` / `.tool-detail-visual-box`
- 네비게이션: 인라인 → `.flex-center-wrap`

### ToolsOverview.jsx
- 추천 카드 이모지 `💼🎓🇰🇷🎨🎮🚀` → 텍스트만 유지

### Navbar.jsx
- 테마 토글: `☀️🌙🔄` → `Light`, `Dark`, `Auto`
- 컬러 피커: `🎨` → `Color`

### Footer.jsx
- 연락처: `✉📞💬🕐` → `Email`, `Tel`, `Chat`, `Hours`

---

## 수정 파일 목록 (19개)

**CSS (6개)**: `base.css`, `hero.css`, `pages.css`, `learning.css`, `tools.css`, `responsive.css`
**데이터 (3개)**: `curriculum.js`, `tools.js`, `learning.js`
**페이지 (8개)**: `Home.jsx`, `About.jsx`, `Enrollment.jsx`, `Glossary.jsx`, `Practice.jsx`, `CourseDetail.jsx`, `ToolDetail.jsx`, `ToolsOverview.jsx`
**컴포넌트 (2개)**: `Navbar.jsx`, `Footer.jsx`

---

## 빌드 결과
- `npm run build` 성공 (4.57s)
- 번들 크기: CSS 52.15kB (gzip 9.02kB), JS 총 ~554kB (gzip ~170kB)
