import { CONTACT_EMAIL, FOOTER_TOPICS } from '../data/curriculumData';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 border-b border-slate-800 pb-8 md:flex-row md:items-start">
          <div>
            <a href="#top" className="font-display text-xl font-extrabold tracking-tight text-white">
              AXCody
            </a>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
              조코디(AXCody) 2027년 대학교 AI 교육 체계 · 신입생부터 재학생, 교직원, 교수진까지
              대학 맞춤형 AI 교육 및 Google Workspace Studio 업무 자동화 컨설팅
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <a href="#tracks" className="hover:text-white">
              대상별 과정
            </a>
            <a href="#curriculum" className="hover:text-white">
              교육 구성
            </a>
            <a href="#courses" className="hover:text-white">
              개설 과목
            </a>
            <a href="#why-axcody" className="hover:text-white">
              전문가 소개
            </a>
            <a href="#consultation" className="hover:text-white">
              무료 설명회 신청
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>
            문의{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-mono text-slate-200 hover:text-white hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            <span className="mx-2 text-slate-700" aria-hidden="true">·</span>
            <span>© 2026 AXCody (조코디). All rights reserved.</span>
          </p>

          <p className="text-slate-500">
            {FOOTER_TOPICS.map((topic, idx) => (
              <span key={topic}>
                #{topic}
                {idx < FOOTER_TOPICS.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
