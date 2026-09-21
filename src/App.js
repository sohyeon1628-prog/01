import React, { useEffect, useState } from "react";
import "./App.css";

/*
============================================================
동아일보 기자 업무용 Workspace
============================================================

주요 구조

1. 상단 긴 Pill Navigation
   - 동아일보
   - 날짜 / 시간
   - 통합검색
   - 나의 기사
   - 프로필

2. 좌측 Workspace Menu
   - 홈
   - 기사 작성
   - 취재 일정
   - 나의 기사
   - 스크랩

3. 기사 작성 클릭
   → 기사 작성 전용 Workspace로 이동

4. 기사 작성 Workspace
   - 기사 작성 서브바
   - 제목 / 본문 작성
   - 기사 작성 툴
   - AI Assistant
   - 기사 검증률
   - 자료 / 출처
   - 미리보기
============================================================
*/


/* =========================================================
   기사 작성 화면
   ========================================================= */

function ArticleWrite({ onBack }) {

  const [title, setTitle] = useState(
    "생성형 AI 시대, 기자의 업무는 어떻게 달라지고 있을까"
  );

  const [content, setContent] = useState(
`생성형 AI의 등장으로 기자의 업무 방식이 빠르게 변화하고 있다.

자료 조사와 기사 작성 과정에서 AI를 활용하는 기자들이 늘어나면서 뉴스룸의 업무 방식 역시 달라지고 있다.

하지만 AI가 생성한 정보의 정확성과 출처를 어떻게 검증할 것인지에 대한 문제도 함께 제기되고 있다.

기자는 AI를 단순한 작성 도구가 아니라 자료를 탐색하고 정보를 검증하는 보조 도구로 활용할 필요가 있다.`
  );

  const [activeTool, setActiveTool] = useState("write");

  return (
    <div className="article-workspace">

      {/* ==================================================
          기사 작성 서브 네비게이션
          ================================================== */}

      <div className="article-subbar">

        <div className="article-subbar-left">

          <button
            className="back-button"
            onClick={onBack}
          >
            ←
          </button>

          <div className="article-page-title">
            <span>ARTICLE WORKSPACE</span>
            <strong>기사 작성</strong>
          </div>

        </div>


        <nav className="article-tools-nav">

          <button
            className={activeTool === "write" ? "active" : ""}
            onClick={() => setActiveTool("write")}
          >
            기사 작성
          </button>

          <button
            className={activeTool === "source" ? "active" : ""}
            onClick={() => setActiveTool("source")}
          >
            자료 / 출처
          </button>

          <button
            className={activeTool === "ai" ? "active" : ""}
            onClick={() => setActiveTool("ai")}
          >
            AI 보조
          </button>

          <button
            className={activeTool === "verify" ? "active" : ""}
            onClick={() => setActiveTool("verify")}
          >
            검증
          </button>

          <button
            className={activeTool === "preview" ? "active" : ""}
            onClick={() => setActiveTool("preview")}
          >
            미리보기
          </button>

        </nav>


        <div className="article-save-area">

          <span className="saved-time">
            자동 저장됨 · 방금 전
          </span>

          <button className="temporary-save">
            임시저장
          </button>

          <button className="publish-button">
            기사 제출 →
          </button>

        </div>

      </div>


      {/* ==================================================
          기사 작성 본문
          ================================================== */}

      <div className="article-main-area">


        {/* =================================================
            왼쪽 기사 작성 영역
            ================================================= */}

        <section className="editor-area">

          <div className="editor-top">

            <div>
              <span className="editor-category">
                사회 · 저널리즘
              </span>

              <span className="editor-status">
                작성중
              </span>
            </div>

            <span className="word-count">
              {content.length}자
            </span>

          </div>


          {/* 제목 */}

          <input
            className="article-title-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="기사 제목을 입력하세요"
          />


          {/* 부제 */}

          <input
            className="article-subtitle-input"
            placeholder="기사의 핵심 내용을 설명하는 부제를 입력하세요"
          />


          {/* =================================================
              기사 작성 Toolbar
              ================================================= */}

          <div className="editor-toolbar">

            <button>
              <strong>B</strong>
            </button>

            <button>
              <em>I</em>
            </button>

            <button>
              <u>U</u>
            </button>

            <span className="toolbar-divider"></span>

            <button>
              제목
            </button>

            <button>
              인용
            </button>

            <button>
              링크
            </button>

            <button>
              이미지
            </button>

            <button>
              표
            </button>

            <span className="toolbar-divider"></span>

            <button>
              ↶
            </button>

            <button>
              ↷
            </button>

          </div>


          {/* =================================================
              본문 Editor
              ================================================= */}

          <textarea
            className="article-editor"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="기사 내용을 작성하세요."
          />


          {/* =================================================
              기사 하단 정보
              ================================================= */}

          <div className="editor-footer">

            <div className="editor-info">

              <span>
                기자 · 박소현
              </span>

              <span>
                최종 수정 11:59
              </span>

            </div>

            <div className="editor-actions">

              <button>
                자료 첨부
              </button>

              <button>
                AI에게 검토 요청
              </button>

            </div>

          </div>

        </section>


        {/* =================================================
            오른쪽 AI / 검증 영역
            ================================================= */}

        <aside className="article-side-panel">


          {/* AI Assistant */}

          <section className="assistant-card">

            <div className="assistant-header">

              <div className="assistant-icon">
                ✦
              </div>

              <div>
                <span>
                  AI ASSISTANT
                </span>

                <strong>
                  기사 작성 도우미
                </strong>
              </div>

            </div>


            <p>
              작성 중인 기사를 분석하고
              기사 구조와 문장을 개선할 수 있습니다.
            </p>


            <div className="ai-action-list">

              <button>
                <span>✦</span>
                기사 구조 분석
                <span>→</span>
              </button>

              <button>
                <span>⌁</span>
                문장 다듬기
                <span>→</span>
              </button>

              <button>
                <span>◈</span>
                핵심 내용 요약
                <span>→</span>
              </button>

              <button>
                <span>?</span>
                추가 취재 질문
                <span>→</span>
              </button>

            </div>


            <button className="open-ai-button">
              AI 기사 보조 열기
              <span>→</span>
            </button>

          </section>


          {/* =================================================
              검증률
              ================================================= */}

          <section className="verification-card">

            <div className="verification-header">

              <div>
                <span>
                  ARTICLE CHECK
                </span>

                <strong>
                  기사 검증률
                </strong>
              </div>

              <button>
                ⋯
              </button>

            </div>


            <div className="verification-score">

              <div className="score-circle">

                <strong>
                  86
                </strong>

                <span>
                  %
                </span>

              </div>


              <div className="score-description">

                <strong>
                  검토가 필요합니다
                </strong>

                <span>
                  3개의 항목을 확인해주세요.
                </span>

              </div>

            </div>


            <div className="check-list">

              <div className="check-item complete">

                <span>✓</span>

                <div>
                  <strong>
                    맞춤법 및 문장
                  </strong>

                  <small>
                    문제가 발견되지 않았습니다.
                  </small>
                </div>

              </div>


              <div className="check-item complete">

                <span>✓</span>

                <div>
                  <strong>
                    기사 구조
                  </strong>

                  <small>
                    제목과 본문 구조가 적절합니다.
                  </small>
                </div>

              </div>


              <div className="check-item warning">

                <span>!</span>

                <div>
                  <strong>
                    출처 확인
                  </strong>

                  <small>
                    출처가 필요한 문장이 2개 있습니다.
                  </small>
                </div>

              </div>


              <div className="check-item warning">

                <span>!</span>

                <div>
                  <strong>
                    사실관계 검증
                  </strong>

                  <small>
                    확인이 필요한 내용이 있습니다.
                  </small>
                </div>

              </div>

            </div>


            <button className="verification-button">
              전체 검증 실행 →
            </button>

          </section>


          {/* =================================================
              참고 자료
              ================================================= */}

          <section className="source-card">

            <div className="source-header">

              <div>
                <span>
                  SOURCES
                </span>

                <strong>
                  참고 자료
                </strong>
              </div>

              <button>
                +
              </button>

            </div>


            <div className="source-item">

              <div className="source-number">
                01
              </div>

              <div>
                <strong>
                  AI 저널리즘 관련 조사
                </strong>

                <span>
                  PDF · 참고자료
                </span>
              </div>

              <span>
                ↗
              </span>

            </div>


            <div className="source-item">

              <div className="source-number">
                02
              </div>

              <div>
                <strong>
                  기자 AI 활용 설문
                </strong>

                <span>
                  DATA · 조사자료
                </span>
              </div>

              <span>
                ↗
              </span>

            </div>

          </section>

        </aside>

      </div>

    </div>
  );
}


/* =========================================================
   메인 App
   ========================================================= */

function App() {

  /*
  ----------------------------------------------------------
  현재 날짜 / 시간
  ----------------------------------------------------------
  */

  const [now, setNow] = useState(new Date());

  /*
  ----------------------------------------------------------
  현재 페이지
  dashboard = 대시보드
  article = 기사 작성
  ----------------------------------------------------------
  */

  const [currentPage, setCurrentPage] = useState("dashboard");


  /*
  ----------------------------------------------------------
  1분마다 시간 업데이트
  ----------------------------------------------------------
  */

  useEffect(() => {

    const timer = setInterval(() => {
      setNow(new Date());
    }, 60000);

    return () => clearInterval(timer);

  }, []);


  /*
  ----------------------------------------------------------
  날짜
  ----------------------------------------------------------
  */

  const dateText = now.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });


  /*
  ----------------------------------------------------------
  요일
  ----------------------------------------------------------
  */

  const dayText = now.toLocaleDateString("ko-KR", {
    weekday: "long",
  });


  /*
  ----------------------------------------------------------
  시간
  ----------------------------------------------------------
  */

  const timeText = now.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });


  /*
  ==========================================================
  기사 작성 페이지라면
  ==========================================================
  */

  if (currentPage === "article") {

    return (

      <div className="app">

        {/* 상단 긴 타원형 네비게이션 */}

        <header className="top-header">


          {/* 동아일보 */}

          <button
            className="dongA-button"
            onClick={() => setCurrentPage("dashboard")}
          >

            <span className="dongA-mark">
              東
            </span>

            <span className="dongA-text">
              동아일보
            </span>

            <span className="dongA-arrow">
              →
            </span>

          </button>


          {/* 날짜 */}

          <div className="date-area">

            <div className="date-icon">
              ◷
            </div>

            <div className="date-info">

              <span className="today-label">
                TODAY
              </span>

              <strong>
                {dateText}
              </strong>

              <span className="weekday">
                {dayText}
              </span>

            </div>

            <div className="time-info">
              {timeText}
            </div>

          </div>


          {/* 통합 검색 */}

          <div className="global-search">

            <span className="search-icon">
              ⌕
            </span>

            <input
              type="text"
              placeholder="통합검색 · 기사 · 기자 · 자료 검색"
            />

            <span className="search-shortcut">
              ⌘ K
            </span>

          </div>


          {/* 오른쪽 상단 */}

          <div className="top-actions">

            <button
              className="top-action"
              onClick={() => setCurrentPage("article")}
            >
              <span>
                ▤
              </span>

              나의 기사
            </button>


            {/* 기존 하트 제거 */}

            <button className="profile-button">

              <div className="profile-avatar">
                소
              </div>

              <div className="profile-text">

                <strong>
                  박소현
                </strong>

                <span>
                  기자
                </span>

              </div>

              <span className="profile-arrow">
                ˅
              </span>

            </button>

          </div>

        </header>


        {/* 기사 작성 화면 */}

        <ArticleWrite
          onBack={() => setCurrentPage("dashboard")}
        />

      </div>

    );
  }


  /*
  ==========================================================
  대시보드
  ==========================================================
  */

  return (

    <div className="app">


      {/* ====================================================
          상단 긴 타원형 Navigation
          ==================================================== */}

      <header className="top-header">


        {/* 동아일보 */}

        {/* 동아일보 로고 / 홈 버튼 */}
<button className="dongA-button">
  <span className="dongA-text">
    동아일보
  </span>
  <span className="dongA-arrow">
            →
          </span>

</button>

      


        {/* 날짜 / 시간 */}

        <div className="date-area">

          <div className="date-icon">
            ◷
          </div>

          <div className="date-info">

            <span className="today-label">
              TODAY
            </span>

            <strong>
              {dateText}
            </strong>

            <span className="weekday">
              {dayText}
            </span>

          </div>

          <div className="time-info">
            {timeText}
          </div>

        </div>


        {/* 통합 검색 */}

        <div className="global-search">

          <span className="search-icon">
            ⌕
          </span>

          <input
            type="text"
            placeholder="통합검색 · 기사 · 기자 · 자료 검색"
          />

          <span className="search-shortcut">
            ⌘ K
          </span>

        </div>


        {/* 오른쪽 */}

        <div className="top-actions">

          <button
            className="top-action"
            onClick={() => setCurrentPage("article")}
          >

            <span className="action-icon">
              ▤
            </span>

            <span>
              나의 기사
            </span>

          </button>


          <button
            className="profile-button"
            onClick={() => setCurrentPage("dashboard")}
          >

            <div className="profile-avatar">
              소
            </div>

            <div className="profile-text">

              <strong>
                박소현
              </strong>

              <span>
                기자
              </span>

            </div>

            <span className="profile-arrow">
              ˅
            </span>

          </button>

        </div>

      </header>


      {/* ====================================================
          메인 영역
          ==================================================== */}

      <main className="main-layout">


        {/* ==================================================
            왼쪽 Sidebar
            ================================================== */}

        <aside className="sidebar">

          <div className="sidebar-title">
            WORKSPACE
          </div>


          <nav className="side-menu">


            {/* 홈 */}

            <button
              className="side-menu-item active"
              onClick={() => setCurrentPage("dashboard")}
            >

              <span>
                ⌂
              </span>

              <strong>
                홈
              </strong>

            </button>


            {/* =================================================
                ★ 기사 작성
                홈 바로 아래 배치
                ================================================= */}

            <button
              className="side-menu-item article-menu"
              onClick={() => setCurrentPage("article")}
            >

              <span>
                ✎
              </span>

              <strong>
                기사 작성
              </strong>

              <span className="menu-arrow">
                →
              </span>

            </button>


            {/* 취재 일정 */}

            <button className="side-menu-item">

              <span>
                ◷
              </span>

              <span>
                취재 일정
              </span>

            </button>


            {/* 나의 기사 */}

            <button
              className="side-menu-item"
              onClick={() => setCurrentPage("article")}
            >

              <span>
                ▤
              </span>

              <span>
                나의 기사
              </span>

            </button>


            {/* 스크랩 */}

            <button className="side-menu-item">

              <span>
                ☆
              </span>

              <span>
                스크랩
              </span>

            </button>

          </nav>


          {/* AI Tools */}

          <div className="sidebar-section">

            <span className="section-label">
              AI TOOLS
            </span>


            <button
              className="side-menu-item"
              onClick={() => setCurrentPage("article")}
            >

              <span>
                ✦
              </span>

              <span>
                AI 기사 보조
              </span>

            </button>


            <button className="side-menu-item">

              <span>
                ⌁
              </span>

              <span>
                자료 분석
              </span>

            </button>

          </div>


          {/* 설정 */}

          <div className="sidebar-bottom">

            <button className="side-menu-item">

              <span>
                ⚙
              </span>

              <span>
                설정
              </span>

            </button>

          </div>

        </aside>


        {/* ==================================================
            중앙 Dashboard
            ================================================== */}

        <section className="content">


          {/* 타이틀 */}

          <div className="page-heading">

            <div>

              <span className="eyebrow">
                JOURNALIST WORKSPACE
              </span>

              <h1>

                좋은 기사를 위한
                <br />

                <span>
                  오늘의 업무
                </span>

              </h1>

            </div>


            {/* 새 기사 작성 */}

            <button
              className="new-article-button"
              onClick={() => setCurrentPage("article")}
            >

              <span>
                ＋
              </span>

              새 기사 작성

            </button>

          </div>


          {/* ==================================================
              통계
              ================================================== */}

          <div className="stats-grid">


            <div className="stat-card">

              <span className="stat-label">
                작성 중인 기사
              </span>

              <strong className="stat-number">
                4
              </strong>

              <span className="stat-description">
                지난주보다 2건 증가
              </span>

            </div>


            <div className="stat-card">

              <span className="stat-label">
                오늘 마감
              </span>

              <strong className="stat-number">
                2
              </strong>

              <span className="stat-description">
                오후 6시 마감 예정
              </span>

            </div>


            <div className="stat-card highlight">

              <span className="stat-label">
                AI 활용 기사
              </span>

              <strong className="stat-number">
                7
              </strong>

              <span className="stat-description">
                이번 주 활용 횟수
              </span>

            </div>

          </div>


          {/* ==================================================
              오늘의 기사
              ================================================== */}

          <section className="section-block">

            <div className="section-header">

              <div>

                <h2>
                  오늘의 기사
                </h2>

                <span>
                  현재 작업 중인 기사입니다.
                </span>

              </div>

              <button className="more-button">
                전체보기 →
              </button>

            </div>


            <div className="article-list">


              {/* 기사 1 */}

              <article className="article-card">

                <div className="article-status writing">
                  작성중
                </div>

                <div className="article-main">

                  <h3>

                    생성형 AI 시대,
                    <br />

                    기자의 업무는 어떻게 달라지고 있을까

                  </h3>

                  <p>

                    AI 활용 현황과 기자들의 실제 업무 변화를
                    조사하고 새로운 저널리즘의 가능성을 살펴본다.

                  </p>

                </div>

                <div className="article-meta">

                  <span>
                    최근 수정 09:32
                  </span>

                  <span>
                    72%
                  </span>

                </div>

                <div className="progress-bar">

                  <div
                    className="progress-value"
                    style={{ width: "72%" }}
                  />

                </div>

              </article>


              {/* 기사 2 */}

              <article className="article-card">

                <div className="article-status research">
                  취재중
                </div>

                <div className="article-main">

                  <h3>

                    사라진 동네,
                    <br />

                    지역 소외 현상을 데이터로 보다

                  </h3>

                  <p>

                    지역별 인구와 생활 인프라 데이터를 통해
                    변화하고 있는 지역의 모습을 분석한다.

                  </p>

                </div>

                <div className="article-meta">

                  <span>
                    최근 수정 어제
                  </span>

                  <span>
                    45%
                  </span>

                </div>

                <div className="progress-bar">

                  <div
                    className="progress-value research-progress"
                    style={{ width: "45%" }}
                  />

                </div>

              </article>


              {/* 기사 3 */}

              <article className="article-card">

                <div className="article-status complete">
                  검토완료
                </div>

                <div className="article-main">

                  <h3>

                    뉴스룸의 AI 활용,
                    <br />

                    어디까지 왔나

                  </h3>

                  <p>

                    국내 언론사의 AI 활용 사례와
                    기자 업무 변화에 대한 조사 결과.

                  </p>

                </div>

                <div className="article-meta">

                  <span>
                    최근 수정 09.20
                  </span>

                  <span>
                    100%
                  </span>

                </div>

                <div className="progress-bar">

                  <div
                    className="progress-value complete-progress"
                    style={{ width: "100%" }}
                  />

                </div>

              </article>

            </div>

          </section>


          {/* ==================================================
              아래 업무 영역
              ================================================== */}

          <div className="bottom-grid">


            {/* 일정 */}

            <section className="panel">

              <div className="panel-header">

                <div>

                  <span className="panel-label">
                    SCHEDULE
                  </span>

                  <h2>
                    오늘의 일정
                  </h2>

                </div>

                <button>
                  +
                </button>

              </div>


              <div className="schedule-list">


                <div className="schedule-item">

                  <span className="schedule-time">
                    10:00
                  </span>

                  <div className="schedule-line"></div>

                  <div>

                    <strong>
                      편집회의
                    </strong>

                    <span>
                      뉴스룸 회의실
                    </span>

                  </div>

                </div>


                <div className="schedule-item">

                  <span className="schedule-time">
                    14:00
                  </span>

                  <div className="schedule-line"></div>

                  <div>

                    <strong>
                      취재원 인터뷰
                    </strong>

                    <span>
                      온라인 미팅
                    </span>

                  </div>

                </div>


                <div className="schedule-item">

                  <span className="schedule-time">
                    18:00
                  </span>

                  <div className="schedule-line"></div>

                  <div>

                    <strong>
                      기사 마감
                    </strong>

                    <span>
                      AI 저널리즘 기획기사
                    </span>

                  </div>

                </div>

              </div>

            </section>


            {/* AI */}

            <section className="panel ai-panel">

              <div className="ai-symbol">
                ✦
              </div>

              <span className="panel-label">
                AI ASSISTANT
              </span>

              <h2>

                기사 작성에
                <br />

                도움이 필요하신가요?

              </h2>

              <p>

                작성 중인 기사의 자료를 분석하거나
                문장을 다듬고 아이디어를 정리할 수 있어요.

              </p>

              <button
                className="ai-button"
                onClick={() => setCurrentPage("article")}
              >

                AI 기사 보조 열기

                <span>
                  →
                </span>

              </button>

            </section>

          </div>

        </section>


        {/* ==================================================
            오른쪽 나의 기사
            ================================================== */}

        <aside className="right-panel">


          <div className="right-header">

            <div>

              <span>
                MY WORK
              </span>

              <h2>
                나의 기사
              </h2>

            </div>

            <button>
              ⋯
            </button>

          </div>


          {/* 프로필 */}

          <div className="mini-profile">

            <div className="large-avatar">
              소
            </div>

            <div>

              <strong>
                박소현
              </strong>

              <span>
                기자 · 콘텐츠팀
              </span>

            </div>

          </div>


          {/* 기사 */}

          <div className="my-article-list">


            <div className="my-article">

              <div className="my-article-number">
                01
              </div>

              <div>

                <strong>
                  생성형 AI와 기자의 업무 변화
                </strong>

                <span>
                  작성중 · 72%
                </span>

              </div>

            </div>


            <div className="my-article">

              <div className="my-article-number">
                02
              </div>

              <div>

                <strong>
                  사라진 동네
                </strong>

                <span>
                  취재중 · 45%
                </span>

              </div>

            </div>


            <div className="my-article">

              <div className="my-article-number">
                03
              </div>

              <div>

                <strong>
                  AI 저널리즘 조사
                </strong>

                <span>
                  검토완료
                </span>

              </div>

            </div>

          </div>


          {/* 전체보기 */}

          <button
            className="all-articles-button"
            onClick={() => setCurrentPage("article")}
          >

            나의 기사 전체보기

            <span>
              →
            </span>

          </button>

        </aside>

      </main>

    </div>
  );
}

export default App;