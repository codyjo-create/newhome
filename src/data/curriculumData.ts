export interface AudienceTrack {
  id: 'freshmen' | 'undergrad' | 'staff' | 'faculty';
  index: string;
  label: string;
  title: string;
  subtitle: string;
  targetDescription: string;
  keyModules: {
    title: string;
    detail: string;
  }[];
  expectedOutcome: string;
  linkedCourse: string;
}

export const POSTER_IMAGE_PATH = '/assets/aistudio/____2027____AI___________655341d8.png';
export const CONTACT_EMAIL = 'edu@axcody.com';

export const HERO_METRICS = [
  {
    index: '01',
    label: '전 구성원 로드맵',
    value: '신입생 · 재학생 · 교직원 · 교수진',
    detail: '대학 내 모든 구성원을 아우르는 통합 AI 교육 체계',
  },
  {
    index: '02',
    label: '사업단 맞춤 설계',
    value: 'CTL · AX센터 · RISE · AXE · 앵커',
    detail: '각 대학 사업단 목표와 학과 특성에 맞춘 교육 기획',
  },
  {
    index: '03',
    label: '검증된 구글 AI 전문가',
    value: '11년 현장경험 · 구글 코리아 강사',
    detail: '전문 엔지니어 및 변화관리 과목 강사의 실무 중심 솔루션',
  },
  {
    index: '04',
    label: '설명회 진행 비용',
    value: '무료 방문 · Zoom 비대면 지원',
    detail: '일정과 거리에 맞춰 직접 방문 또는 온라인 설명회 진행',
  },
] as const;

export const AUDIENCE_TRACKS: AudienceTrack[] = [
  {
    id: 'freshmen',
    index: '01',
    label: '신입생 AI 기초',
    title: '신입생 AI 기초 교육',
    subtitle: '대학 생활의 첫걸음을 떼는 신입생을 위한 탄탄한 AI 기본기 다지기',
    targetDescription:
      '입학 직후 모든 신입생이 AI 원리와 올바른 활용법을 체계적으로 익혀 전공 학습과 대학 생활 전반에 AI를 안전하게 활용할 수 있도록 기초 체력을 구축합니다.',
    keyModules: [
      {
        title: 'AI 기본 원리와 리터러시 입문',
        detail: '생성형 AI의 작동 원리를 이해하고 단순 검색을 넘어 문제 정의와 질문 설계 역량을 배양합니다.',
      },
      {
        title: '대학생 필수 AI 윤리 및 안전 교육',
        detail: '저작권, 표절 예방, 사실 검증(Fact-checking), 데이터 보안 등 학술적 윤리 기준을 확립합니다.',
      },
      {
        title: '학습 생산성 도구 실전 활용',
        detail: '리포트 구조화, 외국어 자료 분석, 발표 자료 설계 등 대학 기초 학습에 즉시 적용하는 실습을 진행합니다.',
      },
    ],
    expectedOutcome: '전교생 공통 AI 기본역량 확보 및 올바른 학술 AI 활용 문화 정착',
    linkedCourse: 'AI 개론 및 활용 · AI와 사회 (교양 필수 권장)',
  },
  {
    id: 'undergrad',
    index: '02',
    label: '재학생 심화',
    title: '재학생 전공 심화 및 AI Skills Set',
    subtitle: '전공 역량을 한 단계 끌어올리는 심화 과정 및 학과 과목 연계',
    targetDescription:
      '기초를 마친 재학생이 자신의 전공 도메인에 최신 생성형 AI 도구를 결합하여 실질적인 프로젝트 성과를 도출하고 졸업 후 경쟁력을 갖추도록 설계합니다.',
    keyModules: [
      {
        title: '전공별 맞춤형 AI 심화 트랙',
        detail: '인문·사회, 이공·자연, 예체능 등 학과 특성을 반영한 전공 연계형 AI 활용 시나리오를 구축합니다.',
      },
      {
        title: '생성형 AI 실무 프로젝트',
        detail: '실제 산업·연구 과제를 바탕으로 프롬프트 엔지니어링, 데이터 분석, 프로토타이핑 프로젝트를 수행합니다.',
      },
      {
        title: '대학생 AI Skills Set 체계화',
        detail: '학과 교과목과 연계된 단계별 AI 스킬셋을 정의해 포트폴리오와 취업·창업 역량으로 연결합니다.',
      },
    ],
    expectedOutcome: '전공 문제 해결력 강화 및 학과별 차별화된 AI 실무 인재 양성',
    linkedCourse: '생성형 AI 실무 · 전공별 AI 연계 캡스톤',
  },
  {
    id: 'staff',
    index: '03',
    label: '대학교 교직원',
    title: '직원 업무 자동화 및 노코딩 에이전트',
    subtitle: 'Google Workspace와 Gemini, Workspace Studio를 활용한 행정 혁신',
    targetDescription:
      '반복적인 대학 행정 업무를 자동화하고 코딩 없이도 부서별 맞춤 AI 에이전트를 직접 제작해 운영할 수 있는 실전 중심의 교직원 역량 강화 과정입니다.',
    keyModules: [
      {
        title: 'Google Workspace 및 Gemini 활용법',
        detail: 'Gmail, Docs, Sheets, Slides 등 일상 행정 문서와 회의록·공문 작성을 Gemini로 고속화합니다.',
      },
      {
        title: 'Google Workspace Studio Agent 개발',
        detail: '코딩 지식 없이도 학사 안내, 문서 취합, 결재 요약 등을 자동 처리하는 노코딩 에이전트를 구현합니다.',
      },
      {
        title: '행정 효율 극대화 실전 자동화 실습',
        detail: '입학·교무·산학·장학 등 실제 대학 행정 시나리오를 기반으로 즉시 적용 가능한 워크플로우를 완성합니다.',
      },
    ],
    expectedOutcome: '행정 업무 처리 시간 단축 및 교직원 주도의 자체 업무 자동화 역량 내재화',
    linkedCourse: '교직원 AI 업무 자동화 워크숍 · Workspace Studio 실습',
  },
  {
    id: 'faculty',
    index: '04',
    label: '교수님 · 강사',
    title: '교수진 AI 활용 신교수법 및 수업 체계',
    subtitle: 'AI를 이용한 새로운 교육 방안 설계와 연구·강의 혁신',
    targetDescription:
      '교수님과 강사진이 AI 시대에 부합하는 새로운 평가 방식과 강의 설계 체계를 수립하고, 교수학습센터(CTL)와 함께 수업 혁신 모델을 정착시키도록 지원합니다.',
    keyModules: [
      {
        title: 'AI 기반 수업 설계 및 교수법(Pedagogy)',
        detail: '강의안 구조화, 맞춤형 학습 자료 생성, 학생 참여형 AI 활용 과제 설계 방법론을 공유합니다.',
      },
      {
        title: 'AI 시대 평가 체계 및 가이드라인',
        detail: 'AI 대필 이슈를 넘어 학생의 사고력과 문제 해결 과정을 평가하는 실효성 있는 루브릭을 수립합니다.',
      },
      {
        title: '교수 연구·행정 지원 AI 워크플로우',
        detail: '문헌 조사, 연구 데이터 정리, 학사 피드백 자동화 등 교수자의 연구·강의 몰입도를 높이는 도구를 익힙니다.',
      },
    ],
    expectedOutcome: '교수진의 AI 교육 수용성 제고 및 학과 단위 지속 가능한 교육 혁신 모델 구축',
    linkedCourse: '교수학습센터(CTL) 교수법 특강 · AI 수업 설계 컨설팅',
  },
];

export const CORE_COURSES = [
  {
    code: 'COURSE 01',
    title: 'AI 개론 및 활용',
    stage: '기초 · 전 학년 교양',
    description: '인공지능의 핵심 원리부터 대학 생활과 실생활 적용 사례까지 폭넓은 이해를 형성하는 입문 과정입니다.',
  },
  {
    code: 'COURSE 02',
    title: '생성형 AI 실무',
    stage: '심화 · 전공 연계',
    description: '최신 생성형 AI 도구를 활용해 실제 과제를 해결하고 산출물을 완성하는 프로젝트 기반 실무 과정입니다.',
  },
  {
    code: 'COURSE 03',
    title: 'AI와 사회',
    stage: '소양 · 윤리 및 비전',
    description: 'AI 기술의 발전이 산업, 고용, 윤리, 사회 구조에 미치는 영향을 탐구하고 미래 대응 비전을 세웁니다.',
  },
] as const;

export const PARTNER_DEPARTMENTS = [
  {
    name: '교수학습센터 (CTL)',
    focus: '교수법 혁신, 학생 AI 기초·심화 학습 지원 체계 수립',
  },
  {
    name: 'AX센터 · AI 교육원',
    focus: '전교적 AI 전환(AX) 마스터플랜 및 실무 인프라 연계',
  },
  {
    name: 'AI 기본교육과정 개발팀',
    focus: '2027학년도 신입생 공통 필수 교양 및 AI Skills Set 설계',
  },
  {
    name: '앵커사업단',
    focus: '대학 핵심 특성화 분야와 AI 실무 교육의 전략적 결합',
  },
  {
    name: 'RISE 사업단',
    focus: '지역 혁신과 연계한 대학 맞춤형 AI 인재 양성 로드맵',
  },
  {
    name: 'AXE 사업단',
    focus: '대학 교육·행정의 전면적 AI 전환 실행 프로그램 기획',
  },
] as const;

export const WHY_AXCODY_REASONS = [
  {
    index: '01',
    title: '대학 맞춤형 AI 교육 기획',
    description: '일률적인 패키지가 아니라 각 대학의 학사 구조, 사업단 목표, 학과 특성에 꼭 맞는 교육 과정을 설계합니다.',
  },
  {
    index: '02',
    title: '최신 AI 트렌드 및 교육 사례 공유',
    description: '2027년을 겨냥한 글로벌 AI 기술 흐름과 국내외 대학·기업 현장에서 검증된 교육 노하우를 투명하게 전달합니다.',
  },
  {
    index: '03',
    title: '실무 중심의 교육 솔루션 제공',
    description: '이론 설명에 그치지 않고 학생의 AI Skills Set부터 교직원의 Workspace Studio 에이전트까지 즉시 활용 가능한 교육을 제공합니다.',
  },
  {
    index: '04',
    title: '구글 AI 최고 전문가의 직접 설명',
    description: '11년의 현장 경험을 보유한 전문 엔지니어이자 구글 코리아 변화관리 과목 강사가 직접 기획·설명하여 높은 실행력을 보장합니다.',
  },
] as const;

export const FOOTER_TOPICS = [
  '2027대학AI교육',
  '대학교AI교육',
  '조코디',
  'AXCody',
  'AI커리큘럼',
  '생성형AI실무',
  'AI리터러시',
  '교직원업무자동화',
  'Gemini활용',
  '대학맞춤형교육',
] as const;
