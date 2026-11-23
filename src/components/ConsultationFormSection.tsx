import { Check, CheckCircle2, Copy, Mail, MapPin, Send, Video } from 'lucide-react';
import { type FormEvent, useEffect, useState } from 'react';
import { CONTACT_EMAIL } from '../data/curriculumData';

interface ConsultationFormSectionProps {
  preselectedTopic: string | null;
}

const DEPARTMENT_OPTIONS = [
  '교수학습센터 (CTL)',
  'AX센터 / AI 교육원',
  'AI 기본교육과정 개발팀',
  '앵커사업단',
  'RISE 사업단',
  'AXE 사업단',
  '교무처 / 기획처 / 행정실',
  '학과 / 기타 부서',
];

const TOPIC_OPTIONS = [
  '신입생 AI 기초 교육',
  '재학생 심화 · AI Skills Set',
  '교직원 업무자동화 · Workspace Studio',
  '교수진 AI 교육 방안 · 교수법',
  '개설 과목 · 2027 커리큘럼 설계',
];

interface SubmittedSummary {
  university: string;
  department: string;
  contactName: string;
  emailOrPhone: string;
  meetingType: 'visit' | 'zoom';
  topics: string[];
  message: string;
}

export default function ConsultationFormSection({
  preselectedTopic,
}: ConsultationFormSectionProps) {
  const [university, setUniversity] = useState('');
  const [department, setDepartment] = useState(DEPARTMENT_OPTIONS[0]);
  const [contactName, setContactName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [meetingType, setMeetingType] = useState<'visit' | 'zoom'>('visit');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([
    '개설 과목 · 2027 커리큘럼 설계',
  ]);
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState<SubmittedSummary | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [copiedDirectEmail, setCopiedDirectEmail] = useState(false);

  useEffect(() => {
    if (!preselectedTopic) return;
    const matched = TOPIC_OPTIONS.find((item) =>
      item.includes(preselectedTopic.split(' ')[0]),
    );
    if (matched) {
      setSelectedTopics((prev) =>
        prev.includes(matched) ? prev : [...prev, matched],
      );
      setSubmitted(null);
    }
  }, [preselectedTopic]);

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic)
        ? prev.filter((item) => item !== topic)
        : [...prev, topic],
    );
  };

  const buildFormattedText = (data: SubmittedSummary) => {
    const meetingLabel =
      data.meetingType === 'visit' ? '무료 직접 방문 설명회' : 'Zoom 비대면 미팅';
    return [
      '[조코디(AXCody) 2027 대학교 AI 교육 체계 무료 설명회 신청]',
      '',
      `• 대학/기관명: ${data.university}`,
      `• 소속 부서/사업단: ${data.department}`,
      `• 담당자 성함/직책: ${data.contactName}`,
      `• 연락처(이메일/전화): ${data.emailOrPhone}`,
      `• 희망 진행 방식: ${meetingLabel}`,
      `• 관심 교육 영역: ${data.topics.length > 0 ? data.topics.join(', ') : '전체 2027 AI 교육 체계'}`,
      `• 추가 문의 사항: ${data.message.trim() || '없음'}`,
    ].join('\n');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');

    const trimmedUni = university.trim();
    const trimmedName = contactName.trim();
    const trimmedContact = emailOrPhone.trim();

    if (!trimmedUni) {
      setErrorMessage('대학 또는 기관명을 입력해 주세요.');
      return;
    }
    if (!trimmedName) {
      setErrorMessage('담당자 성함과 직책을 입력해 주세요.');
      return;
    }
    const isEmailLike = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedContact);
    const isPhoneLike = /^[0-9+\-()\s]{8,}$/.test(trimmedContact);
    if (!isEmailLike && !isPhoneLike) {
      setErrorMessage('회신받으실 정확한 이메일 주소 또는 연락처를 입력해 주세요.');
      return;
    }

    setSubmitted({
      university: trimmedUni,
      department,
      contactName: trimmedName,
      emailOrPhone: trimmedContact,
      meetingType,
      topics: selectedTopics,
      message,
    });
  };

  const handleCopySummary = async () => {
    if (!submitted) return;
    try {
      await navigator.clipboard.writeText(buildFormattedText(submitted));
      setCopiedSummary(true);
      window.setTimeout(() => setCopiedSummary(false), 2000);
    } catch {
      setCopiedSummary(false);
    }
  };

  const handleCopyDirectEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopiedDirectEmail(true);
      window.setTimeout(() => setCopiedDirectEmail(false), 2000);
    } catch {
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    }
  };

  const mailtoHref = submitted
    ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        `[무료 설명회 신청] ${submitted.university} ${submitted.department} - 2027 AI 교육 체계`,
      )}&body=${encodeURIComponent(buildFormattedText(submitted))}`
    : `mailto:${CONTACT_EMAIL}`;

  return (
    <section id="consultation" className="border-b border-slate-200 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="text-xs font-semibold tracking-wide text-blue-700">
                04. 무료 방문 설명회 및 상담 안내
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                2027년 대학 AI 교육 도입, 지금 바로 조코디와 상의하세요
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                담당자가 무료로 직접 방문하여 2027년 대학 AI 교육 체계를 상세히 설명해 드립니다.
                거리나 일정이 부담스러우신 경우 Zoom 비대면 미팅으로도 동일하게 안내해 드립니다.
              </p>

              <div className="mt-8 space-y-4 border-t border-slate-200 pt-6">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                  <div>
                    <p className="text-sm font-bold text-slate-950">무료 방문 설명회</p>
                    <p className="mt-0.5 text-sm text-slate-600">
                      교수학습센터, AX센터, RISE·AXE·앵커사업단 회의실로 직접 방문해 브리핑을 진행합니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Video className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                  <div>
                    <p className="text-sm font-bold text-slate-950">Zoom 비대면 미팅 지원</p>
                    <p className="mt-0.5 text-sm text-slate-600">
                      다수 교수님·실무진이 함께 참여하시는 온라인 사전 검토 미팅도 자유롭게 조율 가능합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold text-slate-500">공식 문의 이메일</p>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 font-mono text-base font-semibold text-blue-700 hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  {CONTACT_EMAIL}
                </a>
                <button
                  type="button"
                  onClick={handleCopyDirectEmail}
                  className="inline-flex min-h-[38px] items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100"
                >
                  {copiedDirectEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      복사됨
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-slate-500" />
                      주소 복사
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-600" />
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-950">
                      설명회 신청 내용이 준비되었습니다
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      아래 <strong>이메일로 바로 발송하기</strong> 버튼을 누르시면 작성하신 내용이{' '}
                      <span className="font-mono font-semibold text-slate-900">{CONTACT_EMAIL}</span>
                      (으)로 즉시 연결됩니다. 웹메일을 사용 중이시면 신청 내역을 복사해 붙여넣어 주세요.
                    </p>
                  </div>
                </div>

                <pre className="mt-6 overflow-x-auto whitespace-pre-wrap rounded-lg border border-slate-200 bg-white p-4 font-sans text-sm leading-relaxed text-slate-800">
                  {buildFormattedText(submitted)}
                </pre>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={mailtoHref}
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap transition-colors hover:bg-blue-800"
                  >
                    <Send className="h-4 w-4" />
                    이메일 앱으로 바로 발송하기
                  </a>

                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 whitespace-nowrap transition-colors hover:bg-slate-100"
                  >
                    {copiedSummary ? (
                      <>
                        <Check className="h-4 w-4 text-emerald-600" />
                        신청 내역 복사 완료
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 text-slate-500" />
                        신청 내역 전체 복사
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setSubmitted(null)}
                    className="inline-flex min-h-[44px] items-center justify-center px-3 py-2.5 text-sm font-medium text-slate-600 underline-offset-4 hover:text-slate-950 hover:underline"
                  >
                    내용 수정하기
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8"
              >
                <div className="flex flex-col justify-between gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-950">
                      무료 설명회 신청서 작성
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-500">
                      방문 또는 Zoom 미팅 희망 일정을 조율하기 위한 기본 정보를 입력해 주세요.
                    </p>
                  </div>

                  <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1">
                    <button
                      type="button"
                      onClick={() => setMeetingType('visit')}
                      className={`min-h-[38px] rounded-md px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                        meetingType === 'visit'
                          ? 'bg-slate-900 text-white'
                          : 'text-slate-600 hover:text-slate-950'
                      }`}
                    >
                      직접 방문 설명회
                    </button>
                    <button
                      type="button"
                      onClick={() => setMeetingType('zoom')}
                      className={`min-h-[38px] rounded-md px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                        meetingType === 'zoom'
                          ? 'bg-slate-900 text-white'
                          : 'text-slate-600 hover:text-slate-950'
                      }`}
                    >
                      Zoom 비대면 미팅
                    </button>
                  </div>
                </div>

                {errorMessage && (
                  <div
                    role="alert"
                    className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
                  >
                    {errorMessage}
                  </div>
                )}

                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="university-input"
                      className="block text-xs font-semibold text-slate-800"
                    >
                      대학 / 기관명 <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="university-input"
                      type="text"
                      required
                      value={university}
                      onChange={(e) => setUniversity(e.target.value)}
                      placeholder="예: 한국대학교"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-950 placeholder:text-slate-400 focus:border-blue-700 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="department-select"
                      className="block text-xs font-semibold text-slate-800"
                    >
                      소속 부서 / 사업단
                    </label>
                    <select
                      id="department-select"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-950 focus:border-blue-700 focus:outline-none"
                    >
                      {DEPARTMENT_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-name-input"
                      className="block text-xs font-semibold text-slate-800"
                    >
                      담당자 성함 및 직책 <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="contact-name-input"
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="예: 김OO 교수 / 이OO 팀장"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-950 placeholder:text-slate-400 focus:border-blue-700 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-info-input"
                      className="block text-xs font-semibold text-slate-800"
                    >
                      이메일 또는 연락처 <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="contact-info-input"
                      type="text"
                      required
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                      placeholder="예: name@university.ac.kr 또는 010-0000-0000"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-950 placeholder:text-slate-400 focus:border-blue-700 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <span className="block text-xs font-semibold text-slate-800">
                    관심 교육 영역 (복수 선택 가능)
                  </span>
                  <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {TOPIC_OPTIONS.map((topic) => {
                      const checked = selectedTopics.includes(topic);
                      return (
                        <label
                          key={topic}
                          className={`flex min-h-[42px] cursor-pointer items-center gap-2.5 rounded-lg border px-3.5 py-2 text-xs font-medium transition-colors sm:text-sm ${
                            checked
                              ? 'border-blue-700 bg-blue-50/70 text-blue-900'
                              : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleTopic(topic)}
                            className="h-4 w-4 rounded border-slate-300 text-blue-700 focus:ring-blue-700"
                          />
                          <span>{topic}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="inquiry-message"
                    className="block text-xs font-semibold text-slate-800"
                  >
                    희망 일정 및 추가 문의 사항
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="방문/Zoom 희망 시기, 참석 예상 인원, 관심 사업단(RISE·AXE·CTL 등) 관련 요청 사항을 자유롭게 적어주세요."
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-950 placeholder:text-slate-400 focus:border-blue-700 focus:outline-none"
                  />
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-slate-500">
                    접수 후 <span className="font-mono font-medium text-slate-700">{CONTACT_EMAIL}</span>으로 바로 발송할 수 있습니다.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white whitespace-nowrap transition-colors hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                  >
                    신청 내용 생성 및 발송하기
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
