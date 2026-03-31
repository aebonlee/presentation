export const toolsData = [
  {
    id: 'powerpoint',
    name: 'Microsoft PowerPoint',
    shortName: 'PowerPoint',
    company: 'Microsoft',
    icon: 'P',
    iconClass: 'tool-icon-ppt',
    color: '#D24726',
    gradient: 'linear-gradient(135deg, #D24726, #B7472A)',
    description: '세계에서 가장 많이 사용되는 프레젠테이션 도구. 풍부한 기능과 넓은 호환성으로 비즈니스 환경에서 표준으로 자리잡았습니다.',
    fullDescription: 'Microsoft PowerPoint는 1987년 출시 이후 전 세계 프레젠테이션의 표준이 된 소프트웨어입니다. Office 365 제품군의 일부로, 풍부한 기능, 다양한 템플릿, 강력한 애니메이션 도구를 제공합니다. 비즈니스 환경에서 가장 높은 호환성을 자랑하며, 공동 작업 기능도 지원합니다.',
    tags: ['데스크톱', '클라우드', '비즈니스', 'Office 365'],
    pricing: [
      { plan: '무료 (웹 버전)', price: '₩0', period: '', features: ['기본 편집 기능', '온라인 공동 작업', '제한된 템플릿', '5GB OneDrive 저장소'], featured: false },
      { plan: 'Microsoft 365 Personal', price: '₩8,900', period: '/월', features: ['전체 데스크톱 앱', '1TB OneDrive', '프리미엄 템플릿', 'AI Copilot 기능'], featured: true },
      { plan: 'Microsoft 365 Family', price: '₩11,900', period: '/월', features: ['최대 6명 사용', '6TB OneDrive', '가족 안전 기능', '모든 프리미엄 기능'], featured: false }
    ],
    features: [
      '슬라이드 마스터와 레이아웃 시스템',
      '강력한 애니메이션 및 전환 효과',
      '발표자 보기 (Presenter View)',
      '실시간 공동 작업 (Office 365)',
      'AI Copilot 기반 디자인 제안',
      '매크로와 VBA 자동화',
      '다양한 내보내기 형식 (PDF, 비디오, 이미지)',
      '광범위한 플러그인 생태계'
    ],
    pros: ['업계 표준 호환성', '풍부한 기능과 세밀한 제어', '강력한 애니메이션 도구', '오프라인 작업 가능', '기업 환경에 최적화'],
    cons: ['유료 라이선스 필요', '학습 곡선이 있음', '디자인 감각 필요', '파일 용량이 커질 수 있음'],
    useCases: ['비즈니스 보고서', '기업 프레젠테이션', '학술 발표', '교육 자료'],
    officialUrl: 'https://www.microsoft.com/ko-kr/microsoft-365/powerpoint',
    tips: [
      '슬라이드 마스터를 먼저 설정하면 일관된 디자인을 유지할 수 있습니다',
      '디자인 아이디어 기능을 활용하면 AI가 레이아웃을 자동으로 제안합니다',
      'Alt+F5로 발표자 보기 모드를 빠르게 시작할 수 있습니다',
      '모프 전환 효과로 부드러운 애니메이션을 만들 수 있습니다',
      '섹션 기능으로 슬라이드를 그룹화하면 관리가 편리합니다'
    ]
  },
  {
    id: 'google-slides',
    name: 'Google Slides',
    shortName: 'Google Slides',
    company: 'Google',
    icon: 'G',
    iconClass: 'tool-icon-google',
    color: '#FBBC04',
    gradient: 'linear-gradient(135deg, #4285F4, #FBBC04)',
    description: '무료로 사용 가능한 클라우드 기반 프레젠테이션 도구. 실시간 공동 작업이 가장 큰 강점입니다.',
    fullDescription: 'Google Slides는 Google Workspace의 일부로, 웹 브라우저만 있으면 어디서든 프레젠테이션을 제작하고 편집할 수 있습니다. 실시간 공동 작업, 자동 저장, Google Drive 연동이 핵심 장점이며, 무료로 대부분의 기능을 사용할 수 있습니다.',
    tags: ['클라우드', '무료', '공동작업', 'Google Workspace'],
    pricing: [
      { plan: '무료', price: '₩0', period: '', features: ['전체 기능 사용', '15GB Google Drive', '실시간 공동 작업', '무제한 프레젠테이션'], featured: true },
      { plan: 'Google Workspace Starter', price: '₩7,200', period: '/월/사용자', features: ['30GB 저장소', '비즈니스 이메일', '관리 콘솔', '기술 지원'], featured: false },
      { plan: 'Google Workspace Business', price: '₩14,400', period: '/월/사용자', features: ['2TB 저장소', '고급 보안', 'Vault 아카이브', '앱 관리'], featured: false }
    ],
    features: [
      '완전 무료 사용',
      '실시간 다중 사용자 공동 편집',
      '자동 저장 및 버전 기록',
      '웹 기반 - 설치 불필요',
      'Google Drive 연동',
      'PowerPoint 파일 호환',
      '댓글 및 제안 기능',
      '다양한 애드온 지원'
    ],
    pros: ['완전 무료', '최고의 공동 작업 기능', '자동 저장과 버전 관리', '크로스 플랫폼', '쉬운 공유 기능'],
    cons: ['오프라인 기능 제한', '고급 애니메이션 부족', '디자인 템플릿 제한적', '인터넷 연결 필요'],
    useCases: ['팀 프로젝트', '교육 자료', '스타트업 피치', '비영리 프레젠테이션'],
    officialUrl: 'https://slides.google.com',
    tips: [
      'Ctrl+Alt+M으로 댓글을 빠르게 추가할 수 있습니다',
      '마스터 슬라이드 편집으로 전체 디자인을 한번에 변경하세요',
      '탐색 기능(Ctrl+Alt+F)으로 관련 콘텐츠를 검색할 수 있습니다',
      'Google Keep 연동으로 메모를 슬라이드에 드래그할 수 있습니다',
      'Q&A 기능으로 청중과 실시간으로 소통할 수 있습니다'
    ]
  },
  {
    id: 'canva',
    name: 'Canva',
    shortName: 'Canva',
    company: 'Canva Pty Ltd',
    icon: 'C',
    iconClass: 'tool-icon-canva',
    color: '#00C4CC',
    gradient: 'linear-gradient(135deg, #00C4CC, #7B2FF7)',
    description: '직관적인 드래그 앤 드롭 인터페이스로 디자인 경험 없이도 아름다운 프레젠테이션을 만들 수 있는 온라인 디자인 플랫폼.',
    fullDescription: 'Canva는 2013년 호주에서 시작된 온라인 디자인 플랫폼으로, 프레젠테이션뿐 아니라 소셜 미디어 콘텐츠, 포스터, 명함 등 다양한 디자인을 쉽게 만들 수 있습니다. 수천 개의 전문 템플릿, 수백만 개의 스톡 이미지, AI 기반 디자인 도구를 제공합니다.',
    tags: ['클라우드', '드래그앤드롭', '템플릿', 'AI 디자인'],
    pricing: [
      { plan: 'Canva Free', price: '₩0', period: '', features: ['25만+ 무료 템플릿', '100+ 디자인 유형', '5GB 클라우드 저장소', '기본 편집 도구'], featured: false },
      { plan: 'Canva Pro', price: '₩15,000', period: '/월', features: ['1억+ 프리미엄 스톡', '브랜드 키트', '100GB 저장소', 'Magic Resize, AI 도구'], featured: true },
      { plan: 'Canva Teams', price: '₩12,500', period: '/월/사용자', features: ['모든 Pro 기능', '팀 관리 도구', '무제한 저장소', '브랜드 제어'], featured: false }
    ],
    features: [
      '직관적인 드래그 앤 드롭 에디터',
      '25만+ 전문 디자인 템플릿',
      '수백만 스톡 이미지, 동영상, 오디오',
      'AI 기반 디자인 제안 (Magic Design)',
      '브랜드 키트로 일관성 유지',
      '실시간 공동 작업',
      '다양한 내보내기 형식',
      '프레젠테이션 녹화 기능'
    ],
    pros: ['매우 쉬운 사용법', '풍부한 템플릿과 소스', 'AI 디자인 도구', '다양한 미디어 형식 지원', '프레젠테이션 녹화 가능'],
    cons: ['고급 편집 제한', '일부 기능 유료', '오프라인 사용 제한', 'PPT 변환 시 호환성 이슈'],
    useCases: ['소셜 미디어 콘텐츠', '마케팅 프레젠테이션', '교육 자료', '비디오 프레젠테이션'],
    officialUrl: 'https://www.canva.com',
    tips: [
      '브랜드 키트에 회사 컬러와 폰트를 등록하면 일관된 디자인이 가능합니다',
      'Magic Design으로 텍스트만 입력하면 AI가 슬라이드를 자동 생성합니다',
      '프레젠테이션 모드에서 직접 녹화하여 비디오로 공유할 수 있습니다',
      'Ctrl+D로 요소를 빠르게 복제할 수 있습니다',
      '그리드와 가이드 라인을 활용하면 정확한 정렬이 가능합니다'
    ]
  },
  {
    id: 'miricanvas',
    name: '미리캔버스',
    shortName: '미리캔버스',
    company: '미리디 (Miridi)',
    icon: 'M',
    iconClass: 'tool-icon-miri',
    color: '#4A90D9',
    gradient: 'linear-gradient(135deg, #4A90D9, #6FB3F2)',
    description: '한국형 디자인 플랫폼으로, 한글 콘텐츠에 최적화된 템플릿과 한국 비즈니스 환경에 맞는 디자인 소스를 제공합니다.',
    fullDescription: '미리캔버스는 한국에서 개발된 온라인 디자인 플랫폼으로, 한글 폰트와 한국형 디자인 템플릿에 특화되어 있습니다. 프레젠테이션, 카드뉴스, 인포그래픽, 포스터 등 다양한 디자인을 쉽게 제작할 수 있으며, 한국 비즈니스 문화에 맞는 양식과 서식을 제공합니다.',
    tags: ['한국형', '한글 최적화', '클라우드', '무료'],
    pricing: [
      { plan: '무료', price: '₩0', period: '', features: ['기본 템플릿', '한글 폰트', '기본 편집', '워터마크 포함'], featured: false },
      { plan: 'Pro', price: '₩8,900', period: '/월', features: ['프리미엄 템플릿', '워터마크 제거', 'AI 디자인 도구', '브랜드 키트'], featured: true },
      { plan: 'Enterprise', price: '문의', period: '', features: ['팀 관리', '맞춤형 템플릿', '전담 지원', 'API 연동'], featured: false }
    ],
    features: [
      '한글 폰트 500+ 종 무료 제공',
      '한국형 비즈니스 템플릿',
      '카드뉴스 제작 특화',
      'AI 이미지 생성 및 편집',
      '한국어 UI/UX 최적화',
      '다양한 출력 형식 지원',
      '팀 공유 및 협업 기능',
      '인쇄물 주문 서비스'
    ],
    pros: ['한글 콘텐츠 최적화', '무료 한글 폰트 다수', '한국형 템플릿 풍부', '직관적 인터페이스', '인쇄 연계 서비스'],
    cons: ['해외 서비스 대비 기능 제한', '영문 자료 부족', '고급 애니메이션 제한', '기업용 기능 보완 필요'],
    useCases: ['한국어 프레젠테이션', '카드뉴스', '인포그래픽', '교육 자료', '인쇄물 제작'],
    officialUrl: 'https://www.miricanvas.com',
    tips: [
      '카드뉴스 템플릿을 활용하면 SNS용 프레젠테이션을 빠르게 만들 수 있습니다',
      'AI 이미지 기능으로 텍스트 설명만으로 이미지를 생성할 수 있습니다',
      '한글 폰트 미리보기로 텍스트에 어울리는 폰트를 쉽게 찾을 수 있습니다',
      '그리드 레이아웃을 활용하면 전문적인 정보 배치가 가능합니다',
      '템플릿 검색 시 업종별 카테고리를 활용하면 적합한 디자인을 찾기 쉽습니다'
    ]
  },
  {
    id: 'figma',
    name: 'Figma',
    shortName: 'Figma',
    company: 'Figma, Inc.',
    icon: 'F',
    iconClass: 'tool-icon-figma',
    color: '#F24E1E',
    gradient: 'linear-gradient(135deg, #F24E1E, #A259FF)',
    description: 'UI/UX 디자인 도구로 출발하여, 고급 디자인 프레젠테이션 제작에 활용되는 전문 협업 디자인 플랫폼입니다.',
    fullDescription: 'Figma는 원래 UI/UX 디자인 도구이지만, 강력한 디자인 자유도와 실시간 협업 기능 덕분에 프레젠테이션 제작에도 많이 사용됩니다. 벡터 기반 편집, 컴포넌트 시스템, 프로토타이핑 기능을 활용하면 일반 PPT 도구로는 구현하기 어려운 고급 디자인 프레젠테이션을 만들 수 있습니다.',
    tags: ['디자인 도구', '클라우드', '협업', '벡터'],
    pricing: [
      { plan: 'Starter', price: '₩0', period: '', features: ['3개 파일', '무제한 개인 파일', '기본 라이브러리', '30일 버전 기록'], featured: false },
      { plan: 'Professional', price: '$15', period: '/월/에디터', features: ['무제한 프로젝트', '팀 라이브러리', '무제한 버전 기록', '공유 컴포넌트'], featured: true },
      { plan: 'Organization', price: '$45', period: '/월/에디터', features: ['조직 라이브러리', '디자인 시스템', '분석 도구', 'SSO 인증'], featured: false }
    ],
    features: [
      '완전한 벡터 기반 디자인',
      '실시간 다중 사용자 협업',
      '컴포넌트와 디자인 시스템',
      '프로토타이핑 및 인터랙션',
      'Auto Layout 자동 레이아웃',
      '플러그인 생태계',
      'FigJam 화이트보드',
      'Dev Mode 개발자 협업'
    ],
    pros: ['최고 수준의 디자인 자유도', '강력한 실시간 협업', '컴포넌트 재사용 시스템', '프로토타이핑 가능', '무료 버전 충분'],
    cons: ['프레젠테이션 전용 기능 부족', '학습 곡선 높음', '발표 모드 제한적', '디자인 전문가 향'],
    useCases: ['디자인 포트폴리오', '제품 발표', '스타트업 피치덱', 'UI/UX 프레젠테이션'],
    officialUrl: 'https://www.figma.com',
    tips: [
      'Auto Layout을 활용하면 반응형 슬라이드를 쉽게 만들 수 있습니다',
      '컴포넌트로 반복 요소를 만들면 일괄 수정이 가능합니다',
      'Figma Community에서 프레젠테이션 템플릿을 무료로 다운로드할 수 있습니다',
      '프로토타입 모드로 인터랙티브한 프레젠테이션을 만들 수 있습니다',
      'Frame 크기를 1920x1080으로 설정하면 표준 프레젠테이션 비율이 됩니다'
    ]
  },
  {
    id: 'genially',
    name: 'Genially (젠리)',
    shortName: 'Genially',
    company: 'Genially Web S.L.',
    icon: 'Ge',
    iconClass: 'tool-icon-genially',
    color: '#FF6B35',
    gradient: 'linear-gradient(135deg, #FF6B35, #FF3366)',
    description: '인터랙티브 콘텐츠에 특화된 프레젠테이션 도구. 클릭, 호버, 팝업 등 인터랙션 요소를 쉽게 추가할 수 있습니다.',
    fullDescription: 'Genially는 스페인에서 시작된 인터랙티브 콘텐츠 제작 플랫폼으로, 프레젠테이션에 인터랙션 요소를 쉽게 추가할 수 있는 것이 최대 장점입니다. 일반적인 슬라이드 형식뿐 아니라 인포그래픽, 이스케이프 룸, 퀴즈 등 다양한 인터랙티브 콘텐츠를 만들 수 있어 교육 분야에서 특히 인기가 높습니다.',
    tags: ['인터랙티브', '교육', '클라우드', '게이미피케이션'],
    pricing: [
      { plan: 'Free', price: '₩0', period: '', features: ['무제한 제작', '기본 템플릿', '인터랙션 기능', 'Genially 로고'], featured: false },
      { plan: 'Pro', price: '€7.49', period: '/월', features: ['프리미엄 템플릿', '로고 제거', '다운로드 가능', '분석 도구'], featured: true },
      { plan: 'Master', price: '€20.82', period: '/월', features: ['모든 Pro 기능', '외부 콘텐츠 삽입', 'SCORM 내보내기', '우선 지원'], featured: false }
    ],
    features: [
      '인터랙티브 요소 (클릭, 호버, 팝업)',
      '애니메이션 라이브러리',
      '게이미피케이션 (퀴즈, 이스케이프 룸)',
      '인포그래픽 전문 템플릿',
      '외부 콘텐츠 임베드',
      '실시간 공동 작업',
      '웹 기반 공유 및 임베드',
      'SCORM 내보내기 (LMS 호환)'
    ],
    pros: ['최고의 인터랙티브 기능', '교육 콘텐츠에 최적화', '풍부한 애니메이션', '게이미피케이션 지원', '쉬운 웹 공유'],
    cons: ['무료 버전 로고 삽입', '오프라인 발표 제한', 'PPT 호환성 낮음', '한국어 지원 부족'],
    useCases: ['교육 프레젠테이션', '인터랙티브 인포그래픽', '온라인 퀴즈', '디지털 보고서'],
    officialUrl: 'https://genially.com',
    tips: [
      '인터랙티브 버튼으로 비선형적 프레젠테이션을 만들 수 있습니다',
      '호버 효과를 활용하면 추가 정보를 깔끔하게 보여줄 수 있습니다',
      '이스케이프 룸 템플릿으로 교육용 게임형 콘텐츠를 만들어 보세요',
      '외부 웹사이트, YouTube, Google Maps 등을 직접 삽입할 수 있습니다',
      '링크 공유로 별도 소프트웨어 없이 브라우저에서 발표할 수 있습니다'
    ]
  }
];

export const getToolById = (id: string | undefined) => {
  return toolsData.find(t => t.id === id);
};

export const toolComparison = {
  headers: ['기능', 'PowerPoint', 'Google Slides', 'Canva', '미리캔버스', 'Figma', 'Genially'],
  rows: [
    ['가격', '₩8,900~/월', '무료', '무료/₩15,000~', '무료/₩8,900~', '무료/$15~', '무료/€7.49~'],
    ['오프라인 사용', 'O', '제한적', 'X', 'X', 'X', 'X'],
    ['공동 작업', 'O', 'O 최고', 'O', 'O', 'O 최고', 'O'],
    ['디자인 난이도', '중간', '쉬움', '매우 쉬움', '매우 쉬움', '어려움', '쉬움'],
    ['템플릿 수', '많음', '보통', '매우 많음', '많음 (한국형)', '커뮤니티', '많음'],
    ['애니메이션', '매우 강력', '기본', '보통', '기본', '프로토타입', '인터랙티브'],
    ['한글 지원', 'O', 'O', '보통', 'O 최고', '보통', '제한적'],
    ['인터랙티브', '제한적', '제한적', '제한적', '제한적', '프로토타입', 'O 최고'],
    ['비디오 내보내기', 'O', 'X', 'O', '제한적', 'X', 'X'],
    ['AI 기능', 'Copilot', 'Gemini', 'Magic Design', 'AI 이미지', 'O', 'X'],
    ['추천 대상', '비즈니스', '학생/팀', '초보자', '한국 사용자', '디자이너', '교육자']
  ]
};
