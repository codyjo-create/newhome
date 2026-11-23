import { Award, Check, MapPin, Video } from 'lucide-react';
import { WHY_AXCODY_REASONS } from '../data/curriculumData';

export default function WhyAxCodySection() {
  return (
    <section id="why-axcody" className="border-b border-slate-200 bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-wide text-blue-700">
              03. 왜 조코디(AXCody)와 상의해야 할까요?
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              대학 현장의 언어와 구글 AI 기술력을 동시에 이해하는 파트너
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              교육 기획부터 실제 시스템 구현과 변화관리까지, 대학이 2027년 AI 교육 체계를 안정적으로
              안착시키는 데 필요한 실전 역량을 제공합니다.
            </p>

            <div className="mt-8 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
              {WHY_AXCODY_REASONS.map((reason) => (
                <div key={reason.index} className="flex gap-4 p-5 sm:p-6">
                  <span className="font-mono text-sm font-semibold text-blue-700 tabular-nums">
                    {reason.index}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-950">{reason.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <Award className="h-4 w-4 text-blue-700" />
                <span>구글 AI 최고 전문가 프로필</span>
              </div>

              <h3 className="mt-3 font-display text-2xl font-bold text-slate-950">
                조코디 (AXCody)
              </h3>
              <p className="mt-1 text-sm font-medium text-blue-700">
                11년 현장 경험 전문 엔지니어 · 구글 코리아 변화관리 과목 강사
              </p>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                단순한 툴 안내 강사가 아닌, 11년간의 IT·엔지니어링 현장 경험과 구글 코리아 변화관리
                강의 노하우를 바탕으로 대학 조직이 새로운 AI 체계를 거부감 없이 도입하도록 안내합니다.
              </p>

              <ul className="mt-6 space-y-3 border-t border-slate-200 pt-5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                  <span>11년 실무 경력의 전문 엔지니어 직접 기획 및 설명</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                  <span>구글 코리아 변화관리(Change Management) 과목 강사</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                  <span>Google Workspace &amp; Gemini · Workspace Studio 에이전트 실무 설계</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                  <span>2027 대학 AI 기본교육과정 · AI Skills Set 로드맵 자문</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-900">설명회 진행 방식 (전액 무료)</p>
              <div className="mt-2.5 grid grid-cols-1 gap-2.5 text-xs text-slate-600 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-blue-700" />
                  <span>전국 대학 무료 직접 방문</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="h-4 w-4 shrink-0 text-blue-700" />
                  <span>일정·거리 맞춤 Zoom 미팅</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
