export const learningCategories = [
  {
    id: 'basics',
    title: '프레젠테이션 기초',
    icon: '1',
    description: '프레젠테이션의 기본 개념과 기획 방법을 배웁니다',
    topics: [
      {
        id: 'what-is-presentation',
        title: '프레젠테이션이란?',
        sections: [
          {
            title: '프레젠테이션의 정의',
            content: `프레젠테이션(Presentation)은 특정 청중에게 정보, 아이디어, 제안 등을 효과적으로 전달하는 커뮤니케이션 활동입니다.

단순히 "발표"라는 의미를 넘어, **시각 자료 + 구두 설명 + 비언어적 표현**이 결합된 종합적인 소통 방식입니다.

### 프레젠테이션의 3요소

| 요소 | 설명 | 비중 |
|------|------|------|
| **콘텐츠** | 전달할 핵심 메시지와 정보 | 40% |
| **시각 자료** | 슬라이드, 차트, 이미지 등 | 30% |
| **전달력** | 목소리, 제스처, 시선 처리 | 30% |

> **핵심**: 좋은 프레젠테이션은 "무엇을 말하는가"보다 "어떻게 전달하는가"가 더 중요합니다.`
          },
          {
            title: '프레젠테이션의 유형',
            content: `### 목적에 따른 분류

**1. 정보 전달형 (Informative)**
- 교육, 연구 발표, 기술 세미나
- 객관적 데이터와 사실 중심
- 예: 신기술 소개, 연구 결과 발표

**2. 설득형 (Persuasive)**
- 투자 피칭, 영업 프레젠테이션, 제안서 발표
- 논리적 근거 + 감성적 호소
- 예: 투자 유치 피칭, 사업 제안

**3. 동기부여형 (Motivational)**
- 키노트, TED 토크, 졸업식 연설
- 스토리텔링 중심, 감동과 영감 전달
- 예: TED 발표, 리더십 강연

**4. 보고형 (Reporting)**
- 실적 보고, 프로젝트 진행 상황, 분기 리뷰
- 데이터와 수치 중심
- 예: 분기 실적 발표, 프로젝트 완료 보고

### 형식에 따른 분류

| 형식 | 특징 | 청중 규모 |
|------|------|----------|
| 대규모 발표 | 무대, 마이크, 프로젝터 | 50명+ |
| 소규모 미팅 | 회의실, 모니터 공유 | 5~20명 |
| 온라인 발표 | Zoom, Teams, Meet | 다양 |
| 하이브리드 | 현장 + 온라인 동시 | 다양 |`
          },
          {
            title: '좋은 발표 vs 나쁜 발표',
            content: `### 좋은 발표의 특징

1. **명확한 목적** - 발표가 끝난 후 청중이 무엇을 해야 하는지 분명함
2. **청중 맞춤** - 청중의 수준과 관심사에 맞춘 내용
3. **간결한 메시지** - 핵심 메시지 3개 이내
4. **시각적 명확성** - 슬라이드가 말을 보조 (텍스트 과다 X)
5. **자연스러운 전달** - 원고를 읽지 않고 대화하듯 전달
6. **적절한 시간 관리** - 주어진 시간 내 완료

### 나쁜 발표의 특징

1. **목적 불분명** - "오늘 여러 가지를 말씀드리겠습니다"
2. **텍스트 과다** - 슬라이드를 그대로 읽기
3. **청중 무시** - 일방적 정보 전달
4. **시간 초과** - 준비 부족으로 시간 관리 실패
5. **단조로운 톤** - 변화 없는 목소리와 표정
6. **데이터 남용** - 맥락 없이 숫자만 나열

### 개선 포인트

> **10-20-30 Rule** (가이 가와사키)
> - **10장** 이내의 슬라이드
> - **20분** 이내의 발표
> - **30pt** 이상의 폰트 크기

> **KISS 원칙**: Keep It Simple, Stupid
> - 하나의 슬라이드 = 하나의 메시지`
          }
        ]
      },
      {
        id: 'planning',
        title: '기획과 구성',
        sections: [
          {
            title: '목적과 목표 설정',
            content: `### 발표 목적 명확히 하기

발표를 준비하기 전, 반드시 다음 질문에 답하세요:

1. **왜 발표하는가?** (Why)
   - 정보 전달? 설득? 동기부여?
2. **누구에게?** (Who)
   - 청중의 배경, 지식 수준, 관심사
3. **무엇을?** (What)
   - 핵심 메시지 1~3개
4. **어떻게?** (How)
   - 발표 형식, 도구, 시간

### 청중 분석 프레임워크

<div class="design-diagram st-checklist">
<div class="st-checklist-header">청중 분석 체크리스트</div>
<div class="st-checklist-items">
<div class="st-checklist-item"><div class="st-checklist-box"></div>연령대와 직업/역할</div>
<div class="st-checklist-item"><div class="st-checklist-box"></div>주제에 대한 사전 지식 수준</div>
<div class="st-checklist-item"><div class="st-checklist-box"></div>발표를 듣는 이유/동기</div>
<div class="st-checklist-item"><div class="st-checklist-box"></div>기대하는 결과</div>
<div class="st-checklist-item"><div class="st-checklist-box"></div>의사결정 권한 여부</div>
<div class="st-checklist-item"><div class="st-checklist-box"></div>문화적 배경과 선호 커뮤니케이션 방식</div>
</div>
</div>

### SMART 목표 설정

| 항목 | 설명 | 예시 |
|------|------|------|
| **S**pecific | 구체적 | "투자 유치를 위한 피칭" |
| **M**easurable | 측정 가능 | "5억 투자 약속 받기" |
| **A**chievable | 달성 가능 | "현실적인 사업 모델 제시" |
| **R**elevant | 관련성 | "투자자 관심 분야와 연결" |
| **T**ime-bound | 시간 제한 | "15분 발표 + 10분 Q&A" |`
          },
          {
            title: '스토리보드 작성법',
            content: `### 스토리보드란?

발표의 전체 흐름을 시각적으로 기획하는 것입니다. 본격적인 슬라이드 제작 전에 구조를 잡는 단계입니다.

### 3막 구조

**1막: 오프닝 (15%)**
- 주의 끌기 (Hook)
- 주제 소개
- 발표 목적과 구조 안내

**2막: 본론 (70%)**
- 핵심 메시지 전달
- 근거와 사례 제시
- 데이터와 시각 자료

**3막: 클로징 (15%)**
- 핵심 요약
- CTA (Call to Action)
- Q&A

### 오프닝 기법 5가지

1. **질문**: "여러분은 하루에 몇 번 프레젠테이션을 하시나요?"
2. **통계**: "직장인의 75%가 발표 공포증을 경험합니다"
3. **스토리**: "제가 처음 발표에 실패했을 때..."
4. **인용**: "스티브 잡스는 이렇게 말했습니다..."
5. **시각 자료**: 인상적인 이미지나 동영상

### 본론 구성 패턴

| 패턴 | 설명 | 적합한 상황 |
|------|------|------------|
| **문제-원인-해결** | 문제 정의 → 원인 분석 → 해결 방안 | 제안서, 기획안 |
| **시간순** | 과거 → 현재 → 미래 | 보고서, 역사 |
| **비교대조** | A vs B 비교 | 제품 소개, 기술 비교 |
| **PREP** | Point → Reason → Example → Point | 설득, 논증 |
| **STAR** | Situation → Task → Action → Result | 사례 발표 |

### 클로징 기법

- **요약 반복**: 핵심 3가지를 다시 강조
- **CTA**: "지금 바로 ~해 주세요"
- **미래 비전**: "이것이 실현되면..."
- **질문**: "여러분은 어떤 선택을 하시겠습니까?"
- **감동 마무리**: 짧은 스토리나 인용구`
          },
          {
            title: '시간 관리와 리허설',
            content: `### 발표 시간 배분 원칙

**15분 발표 기준:**

| 파트 | 시간 | 슬라이드 |
|------|------|---------|
| 오프닝 | 2분 | 1~2장 |
| 본론 1 | 4분 | 3~5장 |
| 본론 2 | 4분 | 3~5장 |
| 본론 3 | 3분 | 2~3장 |
| 클로징 | 2분 | 1~2장 |
| **합계** | **15분** | **10~17장** |

### 리허설 체크리스트

**1차 리허설 (혼자)**
- □ 전체 발표를 소리 내어 읽기
- □ 시간 측정 (목표 시간의 80~90%)
- □ 어색한 부분 표시
- □ 슬라이드 전환 타이밍 확인

**2차 리허설 (동료/거울)**
- □ 시선 처리 연습
- □ 제스처 확인
- □ 목소리 크기와 속도
- □ 피드백 수집

**3차 리허설 (실제 환경)**
- □ 발표 장소에서 실습
- □ 장비 점검 (프로젝터, 마이크)
- □ 비상 상황 대비 (파일 백업)
- □ 최종 시간 확인

> **팁**: 발표 시간의 3배를 리허설에 투자하세요. 15분 발표 = 최소 45분 리허설`
          }
        ]
      },
      {
        id: 'audience-analysis',
        title: '청중 분석',
        sections: [
          {
            title: '청중 유형 이해하기',
            content: `### 4가지 청중 유형

**1. 분석형 (Analytical)**
- 데이터와 수치를 중시
- 논리적 근거를 요구
- **전략**: 차트, 통계, 출처 명시

**2. 주도형 (Driver)**
- 결론과 행동을 중시
- 빠른 의사결정 선호
- **전략**: 핵심부터, 행동 계획 제시

**3. 우호형 (Amiable)**
- 관계와 팀워크 중시
- 사례와 스토리 선호
- **전략**: 공감, 팀 성과 강조

**4. 표현형 (Expressive)**
- 비전과 창의성 중시
- 열정과 에너지 선호
- **전략**: 큰 그림, 미래 비전 제시

### 상황별 청중 대응

| 청중 | 핵심 접근법 | 피해야 할 것 |
|------|-----------|------------|
| 임원진 | 결론 먼저, ROI 강조 | 기술 세부사항 과다 |
| 투자자 | 시장 기회, 성장성 | 기술 용어 남용 |
| 엔지니어 | 기술 상세, 아키텍처 | 과도한 마케팅 표현 |
| 일반 대중 | 쉬운 용어, 스토리 | 전문 용어 과다 |
| 학생 | 사례, 실습 연계 | 일방적 강의 |`
          }
        ]
      }
    ]
  },
  {
    id: 'slide-design',
    title: '슬라이드 디자인',
    icon: '2',
    description: '전문적인 프레젠테이션 슬라이드 디자인 원칙을 학습합니다',
    topics: [
      {
        id: 'design-principles',
        title: '디자인 기본 원칙',
        sections: [
          {
            title: 'CARP 디자인 원칙',
            content: `### 4가지 기본 디자인 원칙

프레젠테이션 디자인의 핵심이 되는 CARP 원칙을 시각적으로 확인하세요.

<div class="design-diagram dp-carp">
<div class="dp-carp-card"><div class="dp-carp-letter">C</div><div class="dp-carp-name">Contrast</div><div class="dp-carp-ko">대비</div><div class="dp-carp-desc">크기, 색상, 굵기로 중요한 요소를 강조</div></div>
<div class="dp-carp-card"><div class="dp-carp-letter">A</div><div class="dp-carp-name">Alignment</div><div class="dp-carp-ko">정렬</div><div class="dp-carp-desc">보이지 않는 선에 맞춰 깔끔하게 배치</div></div>
<div class="dp-carp-card"><div class="dp-carp-letter">R</div><div class="dp-carp-name">Repetition</div><div class="dp-carp-ko">반복</div><div class="dp-carp-desc">일관된 색상, 폰트, 레이아웃 유지</div></div>
<div class="dp-carp-card"><div class="dp-carp-letter">P</div><div class="dp-carp-name">Proximity</div><div class="dp-carp-ko">근접</div><div class="dp-carp-desc">관련 정보는 가까이, 그룹 간 여백 확보</div></div>
</div>

### Contrast (대비) — 시각적 계층 만들기

모든 요소가 같은 크기와 색상이면 아무것도 눈에 띄지 않습니다. 대비를 통해 시각적 계층을 만드세요.

<div class="design-diagram dp-contrast">
<div class="dp-contrast-side dp-contrast-bad"><div class="dp-contrast-label">X 대비 없음</div><div class="dp-contrast-demo"><div class="dp-contrast-line heading"></div><div class="dp-contrast-line"></div><div class="dp-contrast-line"></div><div class="dp-contrast-line"></div><div class="dp-contrast-line heading"></div><div class="dp-contrast-line"></div><div class="dp-contrast-line"></div></div></div>
<div class="dp-contrast-side dp-contrast-good"><div class="dp-contrast-label">O 명확한 대비</div><div class="dp-contrast-demo"><div class="dp-contrast-line heading"></div><div class="dp-contrast-line subtitle"></div><div class="dp-contrast-line body"></div><div class="dp-contrast-line body"></div><div class="dp-contrast-line body"></div></div></div>
</div>

### Alignment (정렬) — 보이지 않는 질서

무작위 배치는 혼란을 주고, 일관된 정렬은 전문성을 전달합니다.

<div class="design-diagram dp-alignment">
<div class="dp-alignment-side dp-alignment-bad"><div class="dp-alignment-label">X 정렬 없음</div><div class="dp-alignment-items"><div class="dp-align-bar"></div><div class="dp-align-bar"></div><div class="dp-align-bar"></div><div class="dp-align-bar"></div><div class="dp-align-bar"></div></div></div>
<div class="dp-alignment-side dp-alignment-good"><div class="dp-alignment-label">O 좌측 정렬</div><div class="dp-alignment-items"><div class="dp-align-bar"></div><div class="dp-align-bar"></div><div class="dp-align-bar"></div><div class="dp-align-bar"></div><div class="dp-align-bar"></div></div></div>
</div>

### 여백(White Space)의 힘

> **좋은 디자인의 50%는 여백에서 나옵니다.**

빽빽한 슬라이드보다 여유 있는 슬라이드가 더 강한 인상을 줍니다.

<div class="design-diagram dp-whitespace">
<div class="dp-whitespace-side dp-whitespace-cluttered"><div class="dp-whitespace-label">X 여백 부족</div><div class="dp-ws-block"><div class="dp-ws-heading"></div><div class="dp-ws-text"></div><div class="dp-ws-text"></div></div><div class="dp-ws-block"><div class="dp-ws-heading"></div><div class="dp-ws-text"></div><div class="dp-ws-text"></div></div><div class="dp-ws-block"><div class="dp-ws-heading"></div><div class="dp-ws-text"></div><div class="dp-ws-text"></div></div><div class="dp-ws-block"><div class="dp-ws-heading"></div><div class="dp-ws-text"></div></div></div>
<div class="dp-whitespace-side dp-whitespace-spacious"><div class="dp-whitespace-label">O 충분한 여백</div><div class="dp-ws-block"><div class="dp-ws-heading"></div><div class="dp-ws-text"></div><div class="dp-ws-text"></div></div><div class="dp-ws-block"><div class="dp-ws-heading"></div><div class="dp-ws-text"></div><div class="dp-ws-text"></div></div></div>
</div>

- 슬라이드 가장자리에 최소 10% 여백
- 요소 간 충분한 간격
- 텍스트가 적을수록 임팩트 증가`
          },
          {
            title: '색상 이론과 활용',
            content: `### 60-30-10 색상 규칙

프레젠테이션에서 가장 중요한 색상 비율 법칙입니다. 배경 60%, 보조색 30%, 강조색 10%로 구성하세요.

<div class="design-diagram dp-color-rule">
<div class="dp-color-60"><div class="dp-color-60-label">60%</div><div class="dp-color-60-name">배경색 (흰색, 밝은 회색)</div></div>
<div class="dp-color-30"><div class="dp-color-30-label">30%</div><div class="dp-color-30-name">보조색 (텍스트, 구조)</div></div>
<div class="dp-color-10">10%</div>
</div>

### 목적별 추천 색상

색상은 심리적 효과를 가집니다. 발표 목적에 맞는 색상을 선택하세요.

<div class="design-diagram dp-color-psych">
<div class="dp-color-psych-item"><div class="dp-color-swatch navy"></div><div class="dp-color-psych-purpose">신뢰/전문성</div><div class="dp-color-psych-effect">안정감, 신뢰</div></div>
<div class="dp-color-psych-item"><div class="dp-color-swatch red"></div><div class="dp-color-psych-purpose">에너지/행동</div><div class="dp-color-psych-effect">긴급함, 열정</div></div>
<div class="dp-color-psych-item"><div class="dp-color-swatch green"></div><div class="dp-color-psych-purpose">성장/자연</div><div class="dp-color-psych-effect">안정, 성장</div></div>
<div class="dp-color-psych-item"><div class="dp-color-swatch purple"></div><div class="dp-color-psych-purpose">창의/혁신</div><div class="dp-color-psych-effect">창의성, 프리미엄</div></div>
<div class="dp-color-psych-item"><div class="dp-color-swatch gold"></div><div class="dp-color-psych-purpose">주의/경고</div><div class="dp-color-psych-effect">주의 환기</div></div>
</div>

### 접근성 고려사항
- 배경과 텍스트의 명도 대비 **4.5:1 이상**
- 색맹 고려: 빨강-초록 조합 피하기
- 색상만으로 정보 전달하지 않기 (아이콘, 텍스트 병행)

### 팔레트 생성 도구
- **Coolors.co** — 자동 팔레트 생성
- **Adobe Color** — 색상 조합 탐색
- **Color Hunt** — 트렌디한 팔레트`
          },
          {
            title: '타이포그래피',
            content: `### 폰트 크기 계층 구조

프레젠테이션의 가독성은 명확한 텍스트 계층에서 시작됩니다.

<div class="design-diagram dp-typo-scale">
<div class="dp-typo-row"><div class="dp-typo-size">36-44pt</div><div class="dp-typo-sample title">프레젠테이션 제목</div></div>
<div class="dp-typo-row"><div class="dp-typo-size">24-30pt</div><div class="dp-typo-sample subtitle">부제목 또는 섹션 타이틀</div></div>
<div class="dp-typo-row"><div class="dp-typo-size">18-24pt</div><div class="dp-typo-sample body">본문 텍스트 — 핵심 내용을 전달하는 문장입니다.</div></div>
<div class="dp-typo-row"><div class="dp-typo-size">14-16pt</div><div class="dp-typo-sample caption">캡션, 출처 표기, 부가 설명 (최소 14pt 이상)</div></div>
<div class="dp-typo-divider"></div>
<div class="dp-typo-rule">제목과 본문의 크기 차이가 클수록 시각적 계층이 명확해집니다.</div>
</div>

### 추천 폰트 조합 (한글)

| 제목 | 본문 | 스타일 |
|------|------|--------|
| Pretendard Bold | Pretendard Regular | 모던, 클린 |
| Noto Sans KR Bold | Noto Sans KR Regular | 범용, 안정 |
| 나눔스퀘어 ExtraBold | 나눔고딕 Regular | 깔끔, 한국적 |
| 에스코어드림 Bold | 에스코어드림 Light | 부드러운 |

### 좋은 타이포그래피 vs 나쁜 타이포그래피

<div class="design-diagram dp-typo-compare">
<div class="dp-typo-side dp-typo-bad"><div class="dp-typo-badge">X 나쁜 예</div><div class="dp-typo-preview"><div class="tp-title">밑줄 강조된 제목</div><div class="tp-body">폰트 3개 이상 혼용, 줄간격 좁음, 가독성 저하. 중요한 내용인데 읽기 어려운 슬라이드가 됩니다.</div></div></div>
<div class="dp-typo-side dp-typo-good"><div class="dp-typo-badge">O 좋은 예</div><div class="dp-typo-preview"><div class="tp-title">볼드로 강조한 제목</div><div class="tp-body">2가지 폰트만 사용, 충분한 줄간격, 왼쪽 정렬. 핵심 메시지가 명확히 전달됩니다.</div></div></div>
</div>

### 타이포그래피 규칙
1. **2가지 이내 폰트** 사용 (제목 + 본문)
2. **볼드**로 강조, ~~밑줄~~ 사용 금지
3. **행간(line-height)** 1.4~1.6배
4. **한 줄 최대** 10~15단어
5. **왼쪽 정렬**이 가독성 최고
6. **대문자 전체 사용** 지양 (영문)`
          },
          {
            title: '이미지와 아이콘 활용',
            content: `### 이미지 사용 Do / Don't

고품질 이미지는 슬라이드의 신뢰도를 높이고, 저품질 이미지는 전체 발표의 품질을 떨어뜨립니다.

<div class="design-diagram dp-image-compare">
<div class="dp-image-side dp-image-dont"><div class="dp-image-badge">X Don't</div><div class="dp-image-preview">저해상도 / 클립아트</div><div class="dp-image-caption">픽셀 깨짐, 워터마크, 관련 없는 장식</div></div>
<div class="dp-image-side dp-image-do"><div class="dp-image-badge">O Do</div><div class="dp-image-preview"><span>고해상도 + 오버레이</span></div><div class="dp-image-caption">Full HD 이상, 반투명 오버레이 + 텍스트</div></div>
</div>

**이미지 사용 원칙**
- 고해상도 이미지 사용 (최소 1920x1080)
- 전체 화면 이미지 + 반투명 오버레이 + 텍스트
- 이미지로 감정과 분위기 전달
- 일관된 스타일의 이미지 사용

### 무료 이미지 소스

| 사이트 | 특징 | URL |
|--------|------|-----|
| **Unsplash** | 고품질 무료 사진 | unsplash.com |
| **Pexels** | 무료 사진/영상 | pexels.com |
| **Pixabay** | 다양한 무료 소스 | pixabay.com |
| **Flaticon** | 무료 아이콘 | flaticon.com |
| **unDraw** | 일러스트레이션 | undraw.co |
| **Freepik** | 벡터/일러스트 | freepik.com |

### 아이콘 활용 팁
- **라인 아이콘 vs 솔리드 아이콘**: 한 가지만 통일
- **크기 통일**: 같은 행의 아이콘은 동일 크기
- **색상 통일**: 브랜드 컬러 1~2가지로 제한
- **의미 전달**: 아이콘은 텍스트를 보조, 대체하지 않음`
          }
        ]
      },
      {
        id: 'layout-patterns',
        title: '레이아웃 패턴',
        sections: [
          {
            title: '자주 쓰는 레이아웃 8가지',
            content: `### 1. 타이틀 슬라이드

발표의 첫인상을 결정하는 슬라이드입니다. 제목, 발표자, 날짜를 중앙 정렬로 깔끔하게 배치합니다.

<div class="layout-diagram ld-title">
<div class="ld-title-main">프레젠테이션 제목</div>
<div class="ld-title-sub">부제목 / 발표자 이름</div>
<div class="ld-title-meta">2026년 3월 · DreamIT Biz</div>
</div>

### 2. 텍스트 + 이미지 (좌우 분할)

가장 많이 사용되는 레이아웃입니다. 왼쪽에 텍스트, 오른쪽에 이미지를 배치하여 정보와 시각적 요소를 동시에 전달합니다.

<div class="layout-diagram ld-split">
<div class="ld-split-text">
<div class="ld-split-text-title">핵심 메시지 전달</div>
<div class="ld-split-text-body">간결한 텍스트로 핵심 내용을 전달하고, 오른쪽 이미지로 시각적 이해를 돕습니다. 한 슬라이드에 하나의 메시지만 담으세요.</div>
</div>
<div class="ld-split-image">IMAGE</div>
</div>

### 3. 전체 이미지 + 텍스트 오버레이

강렬한 비주얼이 필요할 때 사용합니다. 배경 이미지 위에 반투명 오버레이를 깔고 텍스트를 올립니다.

<div class="layout-diagram ld-overlay">
<div class="ld-overlay-bg"></div>
<div class="ld-overlay-content">
<div class="ld-overlay-content-title">강렬한 한 마디</div>
<div class="ld-overlay-content-sub">배경 이미지 위에 핵심 메시지를 오버레이</div>
</div>
</div>

### 4. 3분할 (Three Column)

3가지 항목을 나란히 비교하거나 나열할 때 효과적입니다. 아이콘 + 제목 + 설명 구조를 반복합니다.

<div class="layout-diagram ld-three-col">
<div class="ld-three-col-item">
<div class="ld-three-col-icon">A</div>
<div class="ld-three-col-title">첫 번째 항목</div>
<div class="ld-three-col-desc">간결한 설명 텍스트를 아이콘 아래에 배치</div>
</div>
<div class="ld-three-col-item">
<div class="ld-three-col-icon">B</div>
<div class="ld-three-col-title">두 번째 항목</div>
<div class="ld-three-col-desc">동일한 구조를 반복하여 일관성 유지</div>
</div>
<div class="ld-three-col-item">
<div class="ld-three-col-icon">C</div>
<div class="ld-three-col-title">세 번째 항목</div>
<div class="ld-three-col-desc">3개 이하로 유지하면 가독성이 높아짐</div>
</div>
</div>

### 5. 데이터/차트 중심

숫자와 데이터를 시각적으로 전달할 때 사용합니다. 제목 → 차트 → 핵심 인사이트 순서로 배치합니다.

<div class="layout-diagram ld-chart">
<div class="ld-chart-title">분기별 매출 추이</div>
<div class="ld-chart-area">
<div class="ld-chart-bar" style="height:45%"></div>
<div class="ld-chart-bar" style="height:65%"></div>
<div class="ld-chart-bar" style="height:55%"></div>
<div class="ld-chart-bar" style="height:80%"></div>
<div class="ld-chart-bar" style="height:90%"></div>
</div>
<div class="ld-chart-insight">3분기 대비 4분기 매출 28% 성장</div>
</div>

### 6. 인용문/강조

인상적인 말이나 핵심 메시지를 강조할 때 사용합니다. 여백을 충분히 두어 메시지에 집중하게 합니다.

<div class="layout-diagram ld-quote">
<div class="ld-quote-mark">"</div>
<div class="ld-quote-text">좋은 디자인은 가능한 적게 디자인하는 것이다.</div>
<div class="ld-quote-author">— Dieter Rams</div>
</div>

### 7. 비교/대조

두 가지 상태나 선택지를 나란히 놓고 비교할 때 효과적입니다. Before/After, 장점/단점 등에 활용합니다.

<div class="layout-diagram ld-compare">
<div class="ld-compare-side ld-compare-before">
<div class="ld-compare-label">Before</div>
<div class="ld-compare-items">
<div>글자가 너무 많음</div>
<div>시각 자료 없음</div>
<div>구조가 불분명</div>
</div>
</div>
<div class="ld-compare-divider"></div>
<div class="ld-compare-side ld-compare-after">
<div class="ld-compare-label">After</div>
<div class="ld-compare-items">
<div>핵심만 간결하게</div>
<div>차트와 이미지 활용</div>
<div>명확한 3단 구성</div>
</div>
</div>
</div>

### 8. 프로세스/타임라인

단계별 과정을 시각적으로 보여줄 때 사용합니다. 번호와 화살표로 순서를 명확히 합니다.

<div class="layout-diagram ld-process">
<div class="ld-process-step">
<div class="ld-process-num">1</div>
<div class="ld-process-label">기획</div>
</div>
<div class="ld-process-arrow">&rarr;</div>
<div class="ld-process-step">
<div class="ld-process-num">2</div>
<div class="ld-process-label">디자인</div>
</div>
<div class="ld-process-arrow">&rarr;</div>
<div class="ld-process-step">
<div class="ld-process-num">3</div>
<div class="ld-process-label">리허설</div>
</div>
<div class="ld-process-arrow">&rarr;</div>
<div class="ld-process-step">
<div class="ld-process-num">4</div>
<div class="ld-process-label">발표</div>
</div>
</div>`
          }
        ]
      }
    ]
  },
  {
    id: 'speech',
    title: '스피치와 전달력',
    icon: '3',
    description: '목소리, 제스처, 시선 처리 등 발표 전달력을 향상시킵니다',
    topics: [
      {
        id: 'voice-techniques',
        title: '음성 활용법',
        sections: [
          {
            title: '발성과 호흡',
            content: `### 복식호흡 연습

발표에서 목소리의 힘은 호흡에서 나옵니다.

**복식호흡 4단계:**
1. 코로 4초간 들이쉬기 (배가 나옴)
2. 2초간 멈추기
3. 입으로 6초간 내쉬기 (배가 들어감)
4. 10회 반복

> **팁**: 발표 5분 전 복식호흡을 하면 긴장이 완화됩니다.

### 음성의 4요소

| 요소 | 설명 | 활용법 |
|------|------|--------|
| **음량** | 소리의 크기 | 핵심 포인트에서 높이기 |
| **음높이** | 높낮이 | 질문은 올리고, 결론은 내리기 |
| **속도** | 빠르기 | 중요한 부분은 천천히 |
| **포즈** | 멈춤 | 강조 전후에 2~3초 멈추기 |

### 속도 조절 가이드

\`\`\`
일반 설명:  분당 150~180단어 (한국어 약 300음절)
핵심 강조:  분당 100~120단어 (천천히)
에너지 UP:  분당 200+ 단어 (빠르게)
\`\`\`

### 발음 연습

**한국어 발음 교정 문장:**
- "간장 공장 공장장은 강 공장장이고..."
- "저 콩깍지는 깐 콩깍지인가 안 깐 콩깍지인가"
- "경찰청 쇠창살 외철창살"

**영문 발음 연습 (Tongue Twisters):**
- "She sells seashells by the seashore"
- "Peter Piper picked a peck of pickled peppers"
- "How much wood would a woodchuck chuck"`
          },
          {
            title: '강약 조절과 멈춤',
            content: `### 전략적 멈춤 (Pause)

멈춤은 가장 강력한 스피치 도구입니다.

**멈춤의 3가지 유형:**

1. **강조 멈춤 (Emphasis Pause)**
   - 핵심 단어 직전에 2~3초
   - "이 프로젝트의 성과는... (멈춤) ...매출 200% 성장입니다"

2. **전환 멈춤 (Transition Pause)**
   - 주제가 바뀔 때 3~5초
   - 청중이 정보를 소화할 시간 제공

3. **질문 멈춤 (Question Pause)**
   - 질문 후 5~7초
   - "여러분은 어떻게 생각하시나요? (멈춤)"

### 멈춤 연습 방법

1. 원고의 멈춤 위치에 / (슬래시) 표시
2. / = 1초, // = 3초, /// = 5초
3. 녹음하고 들어보며 조절

### 강약 패턴

\`\`\`
  ↑ 강
  │    ╱╲       ╱╲
  │   ╱  ╲     ╱  ╲
  │  ╱    ╲   ╱    ╲
  │ ╱      ╲ ╱      ╲
  └─────────────────── 시간 →
  도입   핵심1  전환  핵심2  마무리
\`\`\`

- 도입: 중간 톤으로 시작
- 핵심: 에너지 UP → 강조
- 전환: 잠시 낮추기
- 마무리: 확신 있는 톤으로 종료`
          }
        ]
      },
      {
        id: 'body-language',
        title: '보디랭귀지',
        sections: [
          {
            title: '제스처와 시선 처리',
            content: `### 효과적인 제스처

**Do (O)**
- 오픈 팜(손바닥 위로): 신뢰감
- 숫자 표현: "세 가지입니다" + 손가락 3개
- 크기/범위 표현: 양손으로 크기 표현
- 방향 지시: 슬라이드의 특정 부분 가리키기

**Don't (X)**
- 주머니에 손 넣기
- 팔짱 끼기
- 볼펜 돌리기, 머리 만지기
- 과도하게 왔다 갔다 하기

### 시선 처리 (Eye Contact)

**Zone 기법:**
\`\`\`
┌─────────────────────┐
│  Zone1   Zone2  Zone3│  ← 뒷줄
│                     │
│  Zone4   Zone5  Zone6│  ← 중간
│                     │
│  Zone7   Zone8  Zone9│  ← 앞줄
└─────────────────────┘
   왼쪽    가운데   오른쪽
\`\`\`

- 한 Zone에 3~5초씩 시선 유지
- 무작위로 Zone 이동 (Z 패턴)
- 한 사람을 오래 보지 않기
- 발표자 노트를 보더라도 문장 단위로 끊어서

### 자세와 포지셔닝

**Power Position:**
- 어깨 넓이로 발 벌리기
- 어깨 펴고 가슴 열기
- 무게 중심은 약간 앞쪽
- 자연스러운 미소

**이동 전략:**
- 핵심 포인트 전달 시 → 앞으로 한 걸음
- 새로운 주제 전환 시 → 옆으로 이동
- Q&A 시 → 질문자 방향으로 이동
- 기본 포지션으로 항상 돌아오기`
          }
        ]
      },
      {
        id: 'anxiety-management',
        title: '긴장감 극복',
        sections: [
          {
            title: '발표 불안 극복법',
            content: `### 발표 불안의 원인

1. **준비 부족** → 충분한 리허설로 해결
2. **완벽주의** → "잘하자"보다 "전달하자"
3. **자기 의식** → 초점을 "나"에서 "청중"으로
4. **부정적 경험** → 작은 성공 경험 축적

### 긴장 완화 테크닉

**신체적 기법:**
1. **복식호흡**: 4-2-6 호흡법 (들이쉬기 4초, 멈춤 2초, 내쉬기 6초)
2. **근육 이완**: 주먹 꽉 쥐기 5초 → 이완 (전신 반복)
3. **파워 포즈**: 2분간 슈퍼맨 자세 (양손 허리)
4. **입 풀기**: 입술 떨기, 혀 굴리기

**심리적 기법:**
1. **시각화**: 성공적인 발표 장면 상상
2. **긍정 자기대화**: "나는 준비가 되었다"
3. **청중 우호화**: 청중은 나를 응원하고 있다
4. **불완전함 수용**: 실수는 자연스러운 것

### 발표 직전 5분 루틴

\`\`\`
5분 전: 복식호흡 5회
4분 전: 파워 포즈 2분
2분 전: 첫 문장 리허설
1분 전: 미소 + 물 한 모금
시작:   청중에게 인사, 시작
\`\`\``
          }
        ]
      }
    ]
  },
  {
    id: 'data-viz',
    title: '데이터 시각화',
    icon: '4',
    description: '데이터를 효과적으로 시각화하여 설득력 있는 슬라이드를 만듭니다',
    topics: [
      {
        id: 'chart-selection',
        title: '차트 유형 선택',
        sections: [
          {
            title: '목적별 차트 선택 가이드',
            content: `### 주요 차트 유형 한눈에 보기

각 차트의 형태와 용도를 시각적으로 확인하세요.

<div class="design-diagram dc-grid">
<div class="dc-card"><div class="dc-mini dc-mini-bar"><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div></div><div class="dc-card-name">막대 차트</div><div class="dc-card-use">항목 간 크기 비교</div></div>
<div class="dc-card"><div class="dc-mini dc-mini-hbar"><div class="hbar"></div><div class="hbar"></div><div class="hbar"></div><div class="hbar"></div></div><div class="dc-card-name">수평 막대 차트</div><div class="dc-card-use">긴 라벨, 순위 비교</div></div>
<div class="dc-card"><div class="dc-mini dc-mini-line"><svg viewBox="0 0 120 72" preserveAspectRatio="none"><path class="line-area" d="M0,62 L20,50 L40,55 L60,35 L80,25 L100,30 L120,10 L120,72 L0,72Z"/><path class="line-path" d="M0,62 L20,50 L40,55 L60,35 L80,25 L100,30 L120,10"/><circle class="dot" cx="60" cy="35" r="3"/><circle class="dot" cx="120" cy="10" r="3"/></svg></div><div class="dc-card-name">선 차트</div><div class="dc-card-use">시간에 따른 추세 변화</div></div>
<div class="dc-card"><div class="dc-mini dc-mini-pie"><div class="pie"></div></div><div class="dc-card-name">원형 차트</div><div class="dc-card-use">전체 대비 비율 (5개 이하)</div></div>
<div class="dc-card"><div class="dc-mini dc-mini-stacked"><div class="sbar" style="height:70%"><div class="seg seg-a" style="height:40%"></div><div class="seg seg-b" style="height:35%"></div><div class="seg seg-c" style="height:25%"></div></div><div class="sbar" style="height:85%"><div class="seg seg-a" style="height:30%"></div><div class="seg seg-b" style="height:45%"></div><div class="seg seg-c" style="height:25%"></div></div><div class="sbar" style="height:60%"><div class="seg seg-a" style="height:50%"></div><div class="seg seg-b" style="height:30%"></div><div class="seg seg-c" style="height:20%"></div></div><div class="sbar" style="height:90%"><div class="seg seg-a" style="height:35%"></div><div class="seg seg-b" style="height:40%"></div><div class="seg seg-c" style="height:25%"></div></div></div><div class="dc-card-name">누적 막대 차트</div><div class="dc-card-use">부분 vs 전체 구성 비교</div></div>
<div class="dc-card"><div class="dc-mini dc-mini-area"><svg viewBox="0 0 120 72" preserveAspectRatio="none"><path class="area-fill" d="M0,60 L24,48 L48,52 L72,30 L96,35 L120,15 L120,72 L0,72Z"/><path class="area-line" d="M0,60 L24,48 L48,52 L72,30 L96,35 L120,15"/></svg></div><div class="dc-card-name">영역 차트</div><div class="dc-card-use">누적 변화, 볼륨 강조</div></div>
<div class="dc-card"><div class="dc-mini dc-mini-scatter"><div class="scatter-area"><div class="sdot"></div><div class="sdot"></div><div class="sdot"></div><div class="sdot"></div><div class="sdot"></div><div class="sdot"></div><div class="sdot"></div><div class="sdot"></div></div></div><div class="dc-card-name">산점도</div><div class="dc-card-use">두 변수 간 관계/상관</div></div>
<div class="dc-card"><div class="dc-mini dc-mini-treemap"><div class="tblock">40%</div><div class="tblock">35%</div><div class="tblock">25%</div></div><div class="dc-card-name">트리맵</div><div class="dc-card-use">계층적 비율 시각화</div></div>
</div>

### 목적별 차트 추천

발표 목적에 따라 최적의 차트를 선택하세요.

<div class="design-diagram dc-purpose">
<div class="dc-purpose-card"><div class="dc-purpose-icon">VS</div><div class="dc-purpose-name">비교</div><div class="dc-purpose-best">1순위: 막대 차트</div><div class="dc-purpose-avoid">피하기: 원형</div></div>
<div class="dc-purpose-card"><div class="dc-purpose-icon">%</div><div class="dc-purpose-name">구성</div><div class="dc-purpose-best">1순위: 누적 막대</div><div class="dc-purpose-avoid">피하기: 3D 원형</div></div>
<div class="dc-purpose-card"><div class="dc-purpose-icon">/</div><div class="dc-purpose-name">추세</div><div class="dc-purpose-best">1순위: 선 차트</div><div class="dc-purpose-avoid">피하기: 원형</div></div>
<div class="dc-purpose-card"><div class="dc-purpose-icon">~</div><div class="dc-purpose-name">관계</div><div class="dc-purpose-best">1순위: 산점도</div><div class="dc-purpose-avoid">피하기: 막대</div></div>
</div>

> **절대 피할 것**: 3D 차트, 장식적 효과, 불필요한 범례`
          },
          {
            title: '차트 디자인 원칙',
            content: `### 나쁜 차트 vs 좋은 차트

같은 데이터라도 디자인에 따라 전달력이 완전히 달라집니다.

<div class="design-diagram dc-compare">
<div class="dc-compare-side dc-compare-bad"><div class="dc-compare-badge">X 나쁜 차트</div><div class="dc-compare-chart"><div class="dc-bad-chart"><div class="dc-bad-pie"></div></div><div class="dc-bad-title">2024년 분기별 매출</div></div></div>
<div class="dc-compare-side dc-compare-good"><div class="dc-compare-badge">O 좋은 차트</div><div class="dc-compare-chart"><div class="dc-good-chart"><div class="dc-good-title">3분기 매출 150% 성장</div><div class="dc-good-bars"><div class="gbar" style="height:35%"></div><div class="gbar" style="height:50%"></div><div class="gbar highlight" data-val="150%" style="height:90%"></div><div class="gbar" style="height:65%"></div></div><div class="dc-good-source">단위: 억원 | 출처: 내부 데이터</div></div></div></div>
</div>

### 차트 깔끔하게 만들기

**제거할 것 (Less is More):**
- X 3D 효과
- X 불필요한 격자선
- X 장식적 그림자
- X 과도한 색상 (6색 이상)
- X 회전된 텍스트

**추가할 것:**
- O 명확한 제목 (인사이트 포함)
- O 데이터 레이블 (핵심만)
- O 강조 색상 (핵심 데이터 1개만 컬러)
- O 출처 표기
- O 단위 표기

### 차트 제목 작성법

> **규칙**: 차트 제목은 데이터가 아닌 **인사이트**를 담으세요.

**나쁜 예:** "2024년 분기별 매출"

**좋은 예:**
- "3분기 매출 150% 성장, 역대 최고 기록"
- "모바일 매출이 전체의 70% 차지"

### 색상 활용 원칙
- **강조 데이터**: 브랜드 메인 컬러 (진한 색) 1개
- **일반 데이터**: 회색 또는 연한 색
- **비교 대상**: 보조 컬러 1개
- **배경**: 흰색 또는 아주 연한 회색`
          }
        ]
      }
    ]
  },
  {
    id: 'storytelling',
    title: '스토리텔링',
    icon: '5',
    description: '청중을 사로잡는 스토리텔링 기법을 배웁니다',
    topics: [
      {
        id: 'storytelling-basics',
        title: '스토리텔링 기법',
        sections: [
          {
            title: '프레젠테이션 스토리텔링',
            content: `### 왜 스토리텔링인가?

같은 내용이라도 스토리로 전달하면 기억 효과가 완전히 달라집니다.

<div class="design-diagram st-retention">
<div class="st-retention-side st-retention-data"><div class="st-retention-num">5~10%</div><div class="st-retention-bar"><div class="st-retention-bar-fill"></div></div><div class="st-retention-label">통계만 있는 발표</div><div class="st-retention-desc">데이터 나열 위주의 발표</div></div>
<div class="st-retention-side st-retention-story"><div class="st-retention-num">63~65%</div><div class="st-retention-bar"><div class="st-retention-bar-fill"></div></div><div class="st-retention-label">스토리가 있는 발표</div><div class="st-retention-desc">이야기 구조로 전달하는 발표</div></div>
</div>

> "사람들은 데이터를 잊지만, 이야기는 기억합니다."

### 1. 영웅의 여정 (Hero's Journey)

가장 보편적이고 강력한 스토리 구조입니다.

<div class="design-diagram st-hero">
<div class="st-hero-step"><div class="st-hero-dot">1</div><div class="st-hero-name">일상</div></div>
<div class="st-hero-arrow">→</div>
<div class="st-hero-step"><div class="st-hero-dot">2</div><div class="st-hero-name">문제 발생</div></div>
<div class="st-hero-arrow">→</div>
<div class="st-hero-step"><div class="st-hero-dot">3</div><div class="st-hero-name">해결 시도</div></div>
<div class="st-hero-arrow">→</div>
<div class="st-hero-step"><div class="st-hero-dot">4</div><div class="st-hero-name">시련</div></div>
<div class="st-hero-arrow">→</div>
<div class="st-hero-step"><div class="st-hero-dot">5</div><div class="st-hero-name">깨달음</div></div>
<div class="st-hero-arrow">→</div>
<div class="st-hero-step"><div class="st-hero-dot">6</div><div class="st-hero-name">변화된 결과</div></div>
</div>

- 비즈니스 예: "고객의 고통점 → 우리 솔루션 → 성공 사례"

### 2. Before-After-Bridge

문제 → 이상 → 해결책 순서로 청중을 설득하는 프레임워크입니다.

<div class="design-diagram st-bab">
<div class="st-bab-panel"><div class="st-bab-badge">Before</div><div class="st-bab-title">현재의 문제</div><div class="st-bab-desc">청중이 겪고 있는 고통점과 불편함을 생생하게 묘사</div></div>
<div class="st-bab-panel"><div class="st-bab-badge">After</div><div class="st-bab-title">이상적 모습</div><div class="st-bab-desc">문제가 해결된 후의 밝고 이상적인 미래를 제시</div></div>
<div class="st-bab-panel"><div class="st-bab-badge">Bridge</div><div class="st-bab-title">해결 방안</div><div class="st-bab-desc">Before에서 After로 가는 구체적인 방법을 제안</div></div>
</div>

### 3. STAR 기법

경험과 성과를 구조적으로 전달하는 프레임워크입니다.

<div class="design-diagram st-star">
<div class="st-star-card"><div class="st-star-letter">S</div><div class="st-star-name">Situation</div><div class="st-star-desc">상황 설명 — 배경과 맥락을 공유</div></div>
<div class="st-star-card"><div class="st-star-letter">T</div><div class="st-star-name">Task</div><div class="st-star-desc">과제 — 해결해야 할 목표를 제시</div></div>
<div class="st-star-card"><div class="st-star-letter">A</div><div class="st-star-name">Action</div><div class="st-star-desc">행동 — 실제로 취한 구체적 조치</div></div>
<div class="st-star-card"><div class="st-star-letter">R</div><div class="st-star-name">Result</div><div class="st-star-desc">결과 — 성과와 배운 점을 정리</div></div>
</div>

### 4. 3의 법칙

사람은 3개의 정보를 가장 잘 기억합니다.

<div class="design-diagram st-three">
<div class="st-three-item"><div class="st-three-num">1</div><div class="st-three-label">핵심 메시지</div><div class="st-three-sub">3개로 정리</div></div>
<div class="st-three-item"><div class="st-three-num">2</div><div class="st-three-label">사례/근거</div><div class="st-three-sub">3개씩 제시</div></div>
<div class="st-three-item"><div class="st-three-num">3</div><div class="st-three-label">실행 단계</div><div class="st-three-sub">3스텝으로 구성</div></div>
</div>

> "스티브 잡스는 항상 3가지로 발표했습니다: 'iPod, Phone, Internet communicator... 이 세 가지는 하나입니다.'"

### 감정을 움직이는 5가지 스토리 요소

<div class="design-diagram st-elements">
<div class="st-element-card"><div class="st-element-icon">인물</div><div class="st-element-name">구체적 인물</div><div class="st-element-effect">공감</div><div class="st-element-ex">"김대리가 매일 야근..."</div></div>
<div class="st-element-card"><div class="st-element-icon">갈등</div><div class="st-element-name">갈등과 긴장</div><div class="st-element-effect">몰입</div><div class="st-element-ex">"그때 예상치 못한 일이..."</div></div>
<div class="st-element-card"><div class="st-element-icon">묘사</div><div class="st-element-name">감각적 묘사</div><div class="st-element-effect">생생함</div><div class="st-element-ex">"손이 떨리고 목소리가..."</div></div>
<div class="st-element-card"><div class="st-element-icon">반전</div><div class="st-element-name">반전</div><div class="st-element-effect">놀라움</div><div class="st-element-ex">"결과는 정반대였습니다"</div></div>
<div class="st-element-card"><div class="st-element-icon">교훈</div><div class="st-element-name">교훈</div><div class="st-element-effect">인사이트</div><div class="st-element-ex">"이것이 알려주는 것은..."</div></div>
</div>`
          }
        ]
      }
    ]
  },
  {
    id: 'english-presentation',
    title: '영문 프레젠테이션',
    icon: '6',
    description: '영어로 프레젠테이션을 진행하는 핵심 노하우를 전달합니다',
    topics: [
      {
        id: 'english-basics',
        title: '영문 발표 기본 표현',
        sections: [
          {
            title: '오프닝 표현',
            content: `### Opening Expressions

**인사와 자기소개:**
- "Good morning/afternoon, everyone."
- "Thank you for being here today."
- "My name is [Name], and I'm the [Position] at [Company]."
- "I'm here today to talk about..."

**주제 소개:**
- "Today, I'd like to discuss..."
- "The purpose of this presentation is to..."
- "I'm going to cover three main points today."
- "By the end of this presentation, you'll understand..."

**구조 안내:**
- "I've divided my presentation into three parts."
- "First, I'll talk about... Then, I'll move on to... Finally, I'll conclude with..."
- "This presentation will take approximately 20 minutes."
- "Please feel free to ask questions at the end."

### 주의 끌기 (Hook)

**질문:**
- "Have you ever wondered why...?"
- "How many of you have experienced...?"
- "What if I told you that...?"

**통계:**
- "According to a recent study, 75% of..."
- "Did you know that...?"
- "The numbers speak for themselves..."

**인용:**
- "As Steve Jobs once said..."
- "There's a famous saying that goes..."
- "In the words of [Person]..."`
          },
          {
            title: '본론 전환 표현',
            content: `### Transition Expressions

**주제 전환:**
- "Moving on to my next point..."
- "Now, let's turn to..."
- "This brings me to my next topic..."
- "Let me now shift our focus to..."

**강조:**
- "I want to emphasize that..."
- "The key takeaway here is..."
- "What's particularly important is..."
- "Let me stress this point..."

**예시 제시:**
- "For example, ..."
- "Let me illustrate this with..."
- "To put this into perspective..."
- "A good example of this is..."

**데이터 설명:**
- "As you can see from this chart..."
- "This graph shows that..."
- "Looking at the numbers, we can see..."
- "The data clearly indicates..."

**비교:**
- "Compared to last year, ..."
- "In contrast to..."
- "On the other hand, ..."
- "While X does this, Y does that..."

### Useful Connectors

| 기능 | 영어 표현 |
|------|---------|
| 추가 | Furthermore, Moreover, In addition |
| 대조 | However, Nevertheless, On the other hand |
| 결과 | Therefore, As a result, Consequently |
| 예시 | For instance, Such as, Namely |
| 요약 | In summary, To sum up, Overall |`
          },
          {
            title: '클로징과 Q&A',
            content: `### Closing Expressions

**요약:**
- "To summarize the key points..."
- "In conclusion, I'd like to highlight three things..."
- "Let me wrap up by saying..."
- "To recap what we've discussed today..."

**행동 촉구 (CTA):**
- "I encourage you to..."
- "My recommendation is to..."
- "The next step would be to..."
- "I'd like to invite you to..."

**감사:**
- "Thank you for your time and attention."
- "I appreciate your interest in this topic."
- "Thank you for being such a great audience."

### Q&A Expressions

**Q&A 시작:**
- "I'd now be happy to take any questions."
- "Does anyone have any questions?"
- "I'll be glad to answer your questions."

**질문 받기:**
- "That's a great question."
- "Thank you for bringing that up."
- "I'm glad you asked that."

**시간 벌기:**
- "That's an interesting point. Let me think about that for a moment."
- "If I understand correctly, you're asking about..."
- "Could you clarify what you mean by...?"

**모를 때:**
- "That's a good question. I don't have the exact data right now, but I can follow up with you after the presentation."
- "I'd need to look into that further. Can I get back to you on that?"

**마무리:**
- "If there are no more questions, I'll end here."
- "Thank you once again. Feel free to reach out to me if you have any further questions."

### 영어 발표 핵심 팁

1. **천천히 말하기** - 영어 발표는 한국어보다 20% 느리게
2. **짧은 문장** - 한 문장에 15단어 이내
3. **능동태 사용** - "We achieved" > "It was achieved"
4. **숫자 반올림** - "About 30%" > "29.7%"
5. **필러 최소화** - "um", "uh" 대신 멈춤(pause)`
          }
        ]
      }
    ]
  }
];

export const getLearningCategory = (id) => {
  return learningCategories.find(c => c.id === id);
};

export const getLearningTopic = (categoryId, topicId) => {
  const category = getLearningCategory(categoryId);
  if (!category) return null;
  return category.topics.find(t => t.id === topicId);
};
