import { Download, X } from 'lucide-react';
import { useEffect } from 'react';
import { POSTER_IMAGE_PATH } from '../data/curriculumData';

interface PosterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PosterModal({ isOpen, onClose }: PosterModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="poster-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3.5">
          <h2 id="poster-modal-title" className="text-sm font-semibold text-white">
            조코디(AXCody) 2027 대학 AI 교육 안내 포스터
          </h2>
          <div className="flex items-center gap-2">
            <a
              href={POSTER_IMAGE_PATH}
              download="AXCody_2027_대학_AI_교육_안내_포스터.png"
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-200 whitespace-nowrap transition-colors hover:bg-slate-800"
            >
              <Download className="h-4 w-4" />
              이미지 저장
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="포스터 창 닫기"
              className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-auto bg-slate-950 p-4 sm:p-6">
          <img
            src={POSTER_IMAGE_PATH}
            alt="조코디 2027년 대학교 AI 교육 체계 안내 포스터"
            referrerPolicy="no-referrer"
            className="mx-auto max-h-[75vh] w-auto rounded-lg object-contain"
          />
        </div>
      </div>
    </div>
  );
}
