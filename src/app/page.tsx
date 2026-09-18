export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 text-slate-800 dark:text-zinc-100 flex items-center justify-center p-6">
      <main className="w-full max-w-md bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-3xl border border-slate-200/80 dark:border-zinc-800 shadow-xl shadow-slate-200/50 dark:shadow-none p-8 sm:p-10 flex flex-col items-center text-center transition-all duration-300">
        {/* 프로필 아바타 */}
        <div className="relative mb-6">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-linear-to-tr from-blue-500 via-indigo-500 to-violet-500 flex items-center justify-center text-white text-3xl sm:text-4xl font-bold shadow-lg shadow-indigo-500/25 ring-4 ring-white dark:ring-zinc-800">
            고
          </div>
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-zinc-900 rounded-full" title="Online" />
        </div>

        {/* 이름 및 역할 태그 */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          대학생 &bull; 바이브 코더
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
          고은빈
        </h1>

        {/* 소개글 */}
        <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed break-keep mb-8 max-w-xs">
          안녕하세요! 바이브 코딩을 배우고 있는 대학생입니다!
        </p>

        {/* 구분선 */}
        <div className="w-full h-px bg-slate-100 dark:bg-zinc-800 mb-6" />

        {/* 관심사 및 태그 */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <span className="px-3 py-1 text-xs rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-medium">
            🌱 Vibe Coding
          </span>
          <span className="px-3 py-1 text-xs rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-medium">
            ⚛️ Next.js &amp; React
          </span>
          <span className="px-3 py-1 text-xs rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-medium">
            🎨 Web Design
          </span>
        </div>

        {/* 링크 목록 */}
        <div className="w-full space-y-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-medium text-sm text-slate-700 dark:text-zinc-200 bg-slate-50 dark:bg-zinc-800/80 hover:bg-slate-100 dark:hover:bg-zinc-800 border border-slate-200 dark:border-zinc-700/60 transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            GitHub 바로가기
          </a>

          <a
            href="mailto:example@email.com"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-500/20 transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            이메일 보내기
          </a>
        </div>
      </main>
    </div>
  );
}
