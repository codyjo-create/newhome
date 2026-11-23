import { ArrowRight, Check, Copy, Maximize2, Mail } from 'lucide-react';
import { useState } from 'react';
import { CONTACT_EMAIL, HERO_METRICS, POSTER_IMAGE_PATH } from '../data/curriculumData';

interface HeroSectionProps {
  onOpenPoster: () => void;
}

export default function HeroSection({ onOpenPoster }: HeroSectionProps) {
  const [imageError, setImageError] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    }
  };

  return (
    <section id="top" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 pt-10 pb-12 sm:px-6 lg:px-8 lg:pt-14 lg:pb-16">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <p className="text-xs font-semibold tracking-wide text-blue-700 sm:text-sm">
                2027학년도 대학 AI 교육 체계 도입 가이드 · 교수학습센터 · AX센터 · RISE · AXE · 앵커사업단
              </p>

              <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-[2.85rem] lg:leading-[1.18]">
                2027년 대학교 AI 교육 체계, 조코디와 함께 준비하세요
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                신입생부터 재학생, 대학교 직원과 교수님·강사까지 한 번에 연결하는 단계별 AI 커리큘럼입니다.
                신청하시면 담당자가 대학에 <strong className="font-semibold text-slate-900">무료로 직접 방문</strong>하거나{' '}
                <strong className="font-semibold text-slate-900">Zoom 비대면 미팅</strong>으로 2027 AI 교육 트렌드와 맞춤형 교육 체계를 상세히 설명해 드립니다.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#consultation"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                >
                  무료 방문 설명회 신청하기
                  <ArrowRight className="h-4 w-4" />
                </a>

                <button
                  type="button"
                  onClick={onOpenPoster}
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                >
                  <Maximize2 className="h-4 w-4 text-slate-500" />
                  안내 포스터 크게 보기
                </button>
              </div>
            </div>

            <div className="mt-10 border-t border-slate-200 pt-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">직접 문의</span>
                  <span className="mx-2 text-slate-300" aria-hidden="true">/</span>
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('[AXCody] 2027년 대학교 AI 교육 체계 무료 설명회 문의')}`}
                    className="font-mono text-sm font-medium text-blue-700 hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex min-h-[38px] items-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 whitespace-nowrap transition-colors hover:bg-slate-100"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      이메일 복사됨
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-slate-500" />
                      메일 주소 복사
                    </>
                  )}
                </button>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                11년 현장 경험 엔지니어 · 구글 코리아 변화관리 과목 강사 · 대학 맞춤형 AI 교육 컨설팅
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-slate-100 p-3">
              {!imageError ? (
                <button
                  type="button"
                  onClick={onOpenPoster}
                  aria-label="조코디 2027 대학 AI 교육 안내 포스터 확대 보기"
                  className="group relative block h-full w-full overflow-hidden rounded-lg bg-white text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                >
                  <img
                    src={POSTER_IMAGE_PATH}
                    alt="2027년 대학교 AI 교육 체계 조코디(AXCody) 안내 포스터"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.015] lg:min-h-[420px]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent p-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-xs font-medium tracking-wide">
                        조코디 2027 대학 AI 교육 안내 포스터
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-200">
                        <Maximize2 className="h-3.5 w-3.5" />
                        원본 확대
                      </span>
                    </div>
                  </div>
                </button>
              ) : (
                <div className="flex min-h-[360px] h-full flex-col items-center justify-center rounded-lg border border-slate-200 bg-slate-900 p-8 text-center text-white">
                  <Mail className="h-8 w-8 text-blue-400" />
                  <p className="mt-3 font-display text-lg font-bold">
                    2027년 대학교 AI 교육 체계
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    신입생 · 재학생 · 교직원 · 교수진 맞춤형 무료 방문 설명회
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-slate-50 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {HERO_METRICS.map((item) => (
            <div key={item.index} className="p-5 sm:p-6">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-xs font-semibold text-slate-500">{item.label}</span>
                <span className="font-mono text-xs font-semibold text-blue-700 tabular-nums">
                  {item.index}
                </span>
              </div>
              <p className="mt-2 font-display text-base font-bold text-slate-950">
                {item.value}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
