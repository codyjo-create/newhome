import { Building2, Compass, Layers, ShieldCheck, Workflow } from 'lucide-react';
import { CORE_COURSES, PARTNER_DEPARTMENTS } from '../data/curriculumData';

export default function CurriculumBentoSection() {
  return (
    <section id="curriculum" className="border-b border-slate-200 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wide text-blue-700">
            02. 조코디(AXCody) 2027 대학 AI 교육 핵심 구성
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            과목 설계부터 교직원 업무 자동화까지 5대 핵심 체계
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            단편적인 1회성 특강이 아닌, 2027년 대학 정규 교과과정과 행정 실무에 바로 안착할 수 있는
            5가지 핵심 영역을 통합 설계합니다.
          </p>
        </div>

        <div id="courses" className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* 01. 개설 AI 과목 (col-span-2) */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:col-span-2">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <Layers className="h-5 w-5 text-blue-700" />
                <h3 className="font-display text-xl font-bold text-slate-950">
                  01. 개설 AI 과목 체계
                </h3>
              </div>
              <span className="text-xs font-medium text-slate-500">교양 · 전공 연계</span>
            </div>

            <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
              원리 이해부터 생성형 AI 실무 프로젝트, 사회적 윤리 탐구까지 대학 교육에 필요한 핵심 과목을 체계적으로 개설합니다.
            </p>

            <div className="mt-6 grid grid-cols-1 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {CORE_COURSES.map((course) => (
                <div key={course.code} className="p-5">
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                    <span className="font-mono font-semibold text-blue-700">{course.code}</span>
                    <span>{course.stage}</span>
                  </div>
                  <h4 className="mt-2.5 font-display text-base font-bold text-slate-950">
                    {course.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 02. 교육 커리큘럼 (col-span-1) */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
            <div>
              <div className="flex items-center gap-2.5">
                <Compass className="h-5 w-5 text-blue-700" />
                <h3 className="font-display text-xl font-bold text-slate-950">
                  02. 교육 커리큘럼
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                모든 학생이 공통 기초에서 출발해 전공별 실무 역량까지 도달하도록 단계별 로드맵을 설계합니다.
              </p>

              <ol className="mt-6 space-y-4 border-t border-slate-200 pt-5">
                <li className="flex gap-3">
                  <span className="font-mono text-xs font-semibold text-blue-700 tabular-nums">01</span>
                  <div>
                    <p className="text-sm font-bold text-slate-950">기초 → 심화 → 실무 단계별 로드맵</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
                      학년 및 수준별 연속성 있는 학습 경로 구축
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs font-semibold text-blue-700 tabular-nums">02</span>
                  <div>
                    <p className="text-sm font-bold text-slate-950">학과 특성 반영 전공별 맞춤형 과정</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
                      인문·공학·경영·예체능 각 학과 과제에 최적화
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs font-semibold text-blue-700 tabular-nums">03</span>
                  <div>
                    <p className="text-sm font-bold text-slate-950">학생 AI Skills Set 및 교과목 연계</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
                      졸업 전 반드시 갖춰야 할 대학 표준 AI 스킬셋 정의
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          {/* 03. AI 리터러시 (col-span-1) */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
            <div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-5 w-5 text-blue-700" />
                <h3 className="font-display text-xl font-bold text-slate-950">
                  03. AI 리터러시
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                도구 사용법을 외우는 데 그치지 않고, AI의 한계와 가능성을 판단하는 사고력과 안전 기준을 함께 기릅니다.
              </p>

              <ul className="mt-6 space-y-4 border-t border-slate-200 pt-5">
                <li>
                  <p className="text-sm font-bold text-slate-950">단순 툴 사용을 넘어선 AI 이해·활용 능력</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    결과물 검증(Hallucination 판별), 비판적 사고, 데이터 문해력 배양
                  </p>
                </li>
                <li>
                  <p className="text-sm font-bold text-slate-950">윤리 및 안전 교육 필수 포함</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    개인정보 보호, 학술 윤리, 저작권 준수 등 대학 내 안전한 AI 활용 가이드라인 내재화
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* 04. 직원 업무 자동화 (col-span-2, deep navy structural contrast) */}
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-white sm:p-8 lg:col-span-2">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <Workflow className="h-5 w-5 text-amber-400" />
                <h3 className="font-display text-xl font-bold tracking-wide text-white">
                  04. 직원 업무 자동화 (교직원 역량 강화)
                </h3>
              </div>
              <span className="text-xs font-medium text-slate-300">
                Google Workspace · Gemini · Workspace Studio
              </span>
            </div>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
              대학 행정 현장의 반복 업무를 줄이고 교직원이 직접 노코딩 에이전트를 구축할 수 있도록 실전 중심 워크숍을 제공합니다.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-slate-700/80 bg-slate-800/70 p-4">
                <p className="font-mono text-xs font-semibold text-amber-400">STEP 01</p>
                <h4 className="mt-1.5 text-sm font-bold text-white">
                  Google Workspace 및 Gemini 활용법
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                  문서·스프레드시트·메일·프레젠테이션 업무에 Gemini를 즉시 접목하는 실무 스킬 습득
                </p>
              </div>

              <div className="rounded-lg border border-slate-700/80 bg-slate-800/70 p-4">
                <p className="font-mono text-xs font-semibold text-amber-400">STEP 02</p>
                <h4 className="mt-1.5 text-sm font-bold text-white">
                  Google Workspace Studio Agent 개발
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                  코딩 없이 부서별 행정 문의 응답 및 데이터 취합을 수행하는 노코딩 에이전트 직접 제작
                </p>
              </div>

              <div className="rounded-lg border border-slate-700/80 bg-slate-800/70 p-4">
                <p className="font-mono text-xs font-semibold text-amber-400">STEP 03</p>
                <h4 className="mt-1.5 text-sm font-bold text-white">
                  행정 효율 극대화 실전 자동화 실습
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                  실제 대학 공문·학사·사업단 관리 데이터를 활용한 현장 맞춤형 자동화 프로세스 완성
                </p>
              </div>
            </div>
          </div>

          {/* 05. 설명회 대상 대학 조직 (col-span-3) */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:col-span-3">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
              <div className="flex items-center gap-2.5">
                <Building2 className="h-5 w-5 text-blue-700" />
                <h3 className="font-display text-xl font-bold text-slate-950">
                  05. 함께 논의하는 대학 내 핵심 조직 및 사업단
                </h3>
              </div>
              <p className="text-xs text-slate-500">
                각 부서·사업단 담당자분들과 2027 AI 교육 인사이트 및 트렌드를 함께 설명·논의합니다
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PARTNER_DEPARTMENTS.map((dept) => (
                <div
                  key={dept.name}
                  className="rounded-lg border border-slate-200 bg-white p-4"
                >
                  <p className="text-sm font-bold text-slate-950">{dept.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">{dept.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
