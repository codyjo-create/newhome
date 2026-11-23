import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { AUDIENCE_TRACKS, type AudienceTrack } from '../data/curriculumData';

interface AudienceTracksSectionProps {
  onSelectTrackForInquiry: (trackLabel: string) => void;
}

export default function AudienceTracksSection({
  onSelectTrackForInquiry,
}: AudienceTracksSectionProps) {
  const [activeTrackId, setActiveTrackId] = useState<AudienceTrack['id']>('freshmen');

  const activeTrack =
    AUDIENCE_TRACKS.find((track) => track.id === activeTrackId) ?? AUDIENCE_TRACKS[0];

  return (
    <section id="tracks" className="border-b border-slate-200 bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-blue-700">
              01. AI 교육 대상별 체계
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              신입생부터 교직원, 교수님까지 대학 전 구성원 맞춤 설계
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              역할과 수준이 다른 대학 구성원에게 동일한 특강을 반복하지 않습니다. 대상별 학습 목표와
              현장 활용 시나리오에 맞춘 4대 교육 트랙을 확인해 보세요.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="교육 대상 선택"
            className="inline-flex flex-wrap items-center gap-1 rounded-lg border border-slate-200 bg-white p-1"
          >
            {AUDIENCE_TRACKS.map((track) => {
              const isActive = track.id === activeTrack.id;
              return (
                <button
                  key={track.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTrackId(track.id)}
                  className={`min-h-[40px] rounded-md px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 sm:text-sm ${
                    isActive
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                  }`}
                >
                  <span className="mr-1.5 font-mono text-[11px] opacity-75 tabular-nums">
                    {track.index}
                  </span>
                  {track.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          role="tabpanel"
          className="mt-8 grid grid-cols-1 gap-8 rounded-xl border border-slate-200 bg-white p-6 sm:p-8 lg:grid-cols-12 lg:gap-10"
        >
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="font-mono text-blue-700 tabular-nums">TRACK {activeTrack.index}</span>
                <span aria-hidden="true">·</span>
                <span>{activeTrack.linkedCourse}</span>
              </div>

              <h3 className="mt-3 font-display text-2xl font-bold text-slate-950">
                {activeTrack.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-blue-700">
                {activeTrack.subtitle}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                {activeTrack.targetDescription}
              </p>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-5">
              <p className="text-xs font-semibold text-slate-500">기대 도입 성과</p>
              <p className="mt-1.5 flex items-start gap-2 text-sm font-medium text-slate-900">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                <span>{activeTrack.expectedOutcome}</span>
              </p>

              <button
                type="button"
                onClick={() => onSelectTrackForInquiry(activeTrack.label)}
                className="mt-5 inline-flex min-h-[42px] items-center gap-1.5 text-sm font-semibold text-blue-700 whitespace-nowrap transition-colors hover:text-blue-800"
              >
                {activeTrack.label} 과정 설명회 신청하기
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="divide-y divide-slate-200 border-t border-slate-200 lg:col-span-7 lg:border-t-0 lg:border-l lg:pl-10">
            {activeTrack.keyModules.map((mod, idx) => (
              <div key={mod.title} className="py-5 first:pt-0 last:pb-0">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs font-semibold text-slate-400 tabular-nums">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h4 className="text-base font-bold text-slate-950">{mod.title}</h4>
                </div>
                <p className="mt-2 pl-7 text-sm leading-relaxed text-slate-600">
                  {mod.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[680px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600">
                <th className="px-5 py-3.5">구분</th>
                <th className="px-5 py-3.5">대상</th>
                <th className="px-5 py-3.5">핵심 교육 내용</th>
                <th className="px-5 py-3.5">연계 과목 및 도구</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {AUDIENCE_TRACKS.map((track) => (
                <tr
                  key={track.id}
                  onClick={() => setActiveTrackId(track.id)}
                  className={`cursor-pointer transition-colors hover:bg-slate-50 ${
                    track.id === activeTrackId ? 'bg-blue-50/50' : ''
                  }`}
                >
                  <td className="px-5 py-4 font-mono text-xs font-semibold text-blue-700 tabular-nums">
                    {track.index}
                  </td>
                  <td className="px-5 py-4 font-semibold text-slate-950 whitespace-nowrap">
                    {track.label}
                  </td>
                  <td className="px-5 py-4 text-slate-600">{track.subtitle}</td>
                  <td className="px-5 py-4 text-xs font-medium text-slate-700">
                    {track.linkedCourse}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
