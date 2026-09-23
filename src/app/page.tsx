"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Mail,
  ExternalLink,
  Code2,
  Sparkles,
  MapPin,
  Layers,
  Copy,
  Check,
  BookOpen,
  ArrowUpRight,
  Briefcase,
  Share2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/SocialIcons";
import { PROFILE_DATA } from "@/data/profile";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"projects" | "skills" | "links">("projects");
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    showToast("이메일 주소가 복사되었습니다! 💌");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareProfile = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      showToast("프로필 링크가 복사되었습니다! ✨");
    }
  };

  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <GithubIcon className="w-4 h-4" />;
      case "linkedin":
        return <LinkedinIcon className="w-4 h-4" />;
      case "instagram":
        return <InstagramIcon className="w-4 h-4" />;
      case "book-open":
        return <BookOpen className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50/60 dark:bg-[#0c0d0e] text-slate-800 dark:text-zinc-100 selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      {/* 앰비언트 오로라 배경 블러 효과 */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-600/15 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-violet-400/20 dark:bg-purple-600/15 rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-sky-400/15 dark:bg-sky-600/10 rounded-full blur-[130px]" />
      </div>

      {/* 미세 격자 패턴 배경 */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1f242d_1px,transparent_1px)] [background-size:24px_24px] opacity-60 z-0" />

      {/* 토스트 알림창 */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/90 dark:bg-white/95 text-white dark:text-slate-900 text-sm font-medium shadow-2xl backdrop-blur-md animate-bounce">
          <Check className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 메인 반응형 컨테이너 */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ======================================================== */}
          {/* 좌측: 프로필 아이덴티티 카드 (데스크톱 Sticky) */}
          {/* ======================================================== */}
          <aside className="lg:col-span-5 lg:sticky lg:top-8 w-full">
            <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-3xl border border-slate-200/80 dark:border-zinc-800 shadow-xl shadow-slate-200/40 dark:shadow-none overflow-hidden transition-all duration-300">
              
              {/* 커버 배너 이미지 */}
              <div className="relative h-36 sm:h-44 w-full overflow-hidden group">
                <Image
                  src={PROFILE_DATA.coverImage}
                  alt="Cover Banner"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* 상단 퀵 공유 버튼 */}
                <button
                  onClick={handleShareProfile}
                  aria-label="프로필 링크 복사"
                  className="absolute top-3 right-3 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all duration-200"
                  title="프로필 링크 복사"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              {/* 프로필 정보 본문 */}
              <div className="px-6 sm:px-8 pb-8 pt-0">
                {/* 아바타 영역 */}
                <div className="flex justify-between items-end -mt-16 mb-4 relative z-10">
                  <div className="relative group">
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden ring-4 ring-white dark:ring-zinc-900 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
                      <Image
                        src={PROFILE_DATA.avatarImage}
                        alt={PROFILE_DATA.name}
                        fill
                        priority
                        className="object-cover"
                        sizes="128px"
                      />
                    </div>
                    {/* 온라인 상태 펄스 배지 */}
                    <span
                      className="absolute -bottom-1 -right-1 flex h-4 w-4"
                      title={PROFILE_DATA.availability}
                    >
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 ring-2 ring-white dark:ring-zinc-900" />
                    </span>
                  </div>

                  {/* 활동 상태 태그 */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60 shadow-xs mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {PROFILE_DATA.availability}
                  </div>
                </div>

                {/* 이름 및 직무 */}
                <div className="space-y-1 mb-3">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                      {PROFILE_DATA.name}
                    </h1>
                    <span className="text-xs text-slate-400 dark:text-zinc-500 font-medium">
                      ({PROFILE_DATA.englishName})
                    </span>
                  </div>
                  <p className="text-sm font-semibold bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:via-violet-400 dark:to-purple-400">
                    {PROFILE_DATA.role}
                  </p>
                </div>

                {/* 위치 정보 */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-zinc-400 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-zinc-500" />
                  <span>{PROFILE_DATA.location}</span>
                </div>

                {/* 바이오 소개글 */}
                <p className="text-sm leading-relaxed text-slate-600 dark:text-zinc-300 break-keep mb-6">
                  {PROFILE_DATA.bio}
                </p>

                {/* 통계 지표 박스 */}
                <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-100 dark:border-zinc-800/80 mb-6 text-center">
                  {PROFILE_DATA.stats.map((stat, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {stat.value}
                      </p>
                      <p className="text-[11px] font-medium text-slate-500 dark:text-zinc-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* 액션 버튼군: 이메일 복사 & 바로 보내기 */}
                <div className="space-y-2 mb-6">
                  <button
                    onClick={handleCopyEmail}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] shadow-lg shadow-indigo-600/25 transition-all duration-200"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        복사 완료!
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4" />
                        이메일 문의하기 ({PROFILE_DATA.email})
                      </>
                    )}
                  </button>

                  <div className="flex gap-2">
                    <button
                      onClick={handleCopyEmail}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-medium text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700/80 transition-colors"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      이메일 주소 복사
                    </button>
                    <a
                      href={`mailto:${PROFILE_DATA.email}`}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-medium text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700/80 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      메일 앱 열기
                    </a>
                  </div>
                </div>

                {/* 소셜 링크 그리드 */}
                <div className="pt-4 border-t border-slate-100 dark:border-zinc-800">
                  <p className="text-xs font-medium text-slate-400 dark:text-zinc-500 mb-3">
                    소셜 &amp; 채널
                  </p>
                  <div className="flex items-center gap-2">
                    {PROFILE_DATA.socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-800/80 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-950/60 dark:hover:text-indigo-400 text-slate-600 dark:text-zinc-300 transition-all duration-200"
                        title={social.label}
                      >
                        {renderSocialIcon(social.icon)}
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </aside>

          {/* ======================================================== */}
          {/* 우측: 메인 쇼케이스 (탭 네비게이션 & 컨텐츠 영역) */}
          {/* ======================================================== */}
          <main className="lg:col-span-7 w-full space-y-6">
            
            {/* 반응형 탭 전환 네비게이션 바 */}
            <div className="flex p-1.5 rounded-2xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-slate-200/80 dark:border-zinc-800 shadow-sm">
              <button
                onClick={() => setActiveTab("projects")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  activeTab === "projects"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Sparkles className="w-4 h-4" />
                프로젝트
              </button>

              <button
                onClick={() => setActiveTab("skills")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  activeTab === "skills"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Code2 className="w-4 h-4" />
                기술 스택
              </button>

              <button
                onClick={() => setActiveTab("links")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  activeTab === "links"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Layers className="w-4 h-4" />
                링크 모음
              </button>
            </div>

            {/* 탭 1: 하이라이트 프로젝트 쇼케이스 */}
            {activeTab === "projects" && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between px-1">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span>주요 프로젝트</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-semibold">
                      {PROFILE_DATA.projects.length}
                    </span>
                  </h2>
                  <span className="text-xs text-slate-400 dark:text-zinc-500">
                    최신 순 정렬
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PROFILE_DATA.projects.map((project) => (
                    <article
                      key={project.id}
                      className="group bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-300 dark:hover:border-indigo-800/80 transition-all duration-300 flex flex-col overflow-hidden"
                    >
                      {/* 프로젝트 썸네일 이미지 */}
                      <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-zinc-800">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, 400px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {project.featured && (
                          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-indigo-600/90 text-white backdrop-blur-md shadow-xs">
                            Featured
                          </span>
                        )}

                        {/* 호버 시 나타나는 빠른 액션 링크 버튼 */}
                        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-black/70 hover:bg-black text-white backdrop-blur-md transition-colors"
                              title="GitHub 저장소"
                            >
                              <GithubIcon className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white backdrop-blur-md transition-colors"
                              title="라이브 데모 보기"
                            >
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* 프로젝트 상세 내용 */}
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-1.5 flex items-center justify-between">
                            <span>{project.title}</span>
                            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500" />
                          </h3>
                          <p className="text-xs leading-relaxed text-slate-600 dark:text-zinc-400 line-clamp-2 mb-4">
                            {project.description}
                          </p>
                        </div>

                        {/* 기술 스택 태그 */}
                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-zinc-800/80">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* 탭 2: 기술 스택 및 역량 */}
            {activeTab === "skills" && (
              <div className="space-y-4 animate-fadeIn">
                <div className="px-1">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    기술 스택 &amp; 개발 역량
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                    효율적이고 직관적인 웹 서비스를 만들기 위해 활용하는 기술들입니다.
                  </p>
                </div>

                <div className="space-y-4">
                  {PROFILE_DATA.skills.map((category) => (
                    <div
                      key={category.category}
                      className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-zinc-800 p-5 shadow-sm"
                    >
                      <div className="flex items-center gap-2 mb-3.5">
                        <Briefcase className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        <h3 className="font-bold text-sm text-slate-800 dark:text-zinc-200">
                          {category.category}
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-zinc-800/70 border border-slate-200/70 dark:border-zinc-700/60 text-xs font-semibold text-slate-700 dark:text-zinc-200 hover:border-indigo-400 dark:hover:border-indigo-500/80 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/30 transition-all duration-200 cursor-default"
                          >
                            {skill.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 탭 3: 링크 & SNS 모음 */}
            {activeTab === "links" && (
              <div className="space-y-4 animate-fadeIn">
                <div className="px-1">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    추천 링크 및 소셜 채널
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                    자주 찾는 채널과 작업물을 모아두었습니다.
                  </p>
                </div>

                <div className="space-y-3">
                  {PROFILE_DATA.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-4 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-slate-200/80 dark:border-zinc-800 hover:border-indigo-400 dark:hover:border-indigo-600 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                          {renderSocialIcon(social.icon)}
                        </div>
                        <div>
                          <p className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {social.name}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-zinc-400">
                            {social.label}
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  ))}

                  {/* 이메일 바로가기 링크 카드 */}
                  <a
                    href={`mailto:${PROFILE_DATA.email}`}
                    className="group flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-transparent border border-indigo-200/80 dark:border-indigo-900/50 hover:border-indigo-400 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/30">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-slate-900 dark:text-white">
                          직접 이메일 문의하기
                        </p>
                        <p className="text-xs text-slate-500 dark:text-zinc-400">
                          {PROFILE_DATA.email}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-indigo-600 dark:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </div>
              </div>
            )}

            {/* 하단 푸터 */}
            <footer className="pt-6 pb-2 text-center text-xs text-slate-400 dark:text-zinc-600">
              <p>© {new Date().getFullYear()} {PROFILE_DATA.name}. Crafted with Next.js &amp; Tailwind CSS.</p>
            </footer>

          </main>

        </div>
      </div>
    </div>
  );
}
