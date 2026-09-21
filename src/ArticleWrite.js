import React, { useState } from "react";
import "./ArticleWrite.css";

/*
============================================================
ARTICLE WRITE PAGE
동아일보 기자 업무용 기사 작성 화면
============================================================

구성
1. 기사 작성 서브바
2. 기사 기본 정보
3. 기사 에디터
4. AI 어시스턴트
5. 검증률
6. 사실 확인
7. 출처 / 키워드
============================================================
*/

function ArticleWrite() {

  // 현재 선택된 서브 메뉴
  const [activeTool, setActiveTool] = useState("article");

  // 기사 제목
  const [title, setTitle] = useState("");

  // 기사 본문
  const [content, setContent] = useState("");

  // 기사 카테고리
  const [category, setCategory] = useState("사회");

  // 저장 상태
  const [saved, setSaved] = useState(false);

  /*
  ------------------------------------------------------------
  기사 작성 서브 메뉴
  ------------------------------------------------------------
  */

  const tools = [
    {
      id: "article",
      icon: "✎",
      label: "기사 작성"
    },
    {
      id: "memo",
      icon: "▤",
      label: "취재 메모"
    },
    {
      id: "source",
      icon: "⌕",
      label: "자료 관리"
    },
    {
      id: "ai",
      icon: "✦",
      label: "AI 어시스턴트"
    },
    {
      id: "verify",
      icon: "✓",
      label: "검증"
    },
    {
      id: "preview",
      icon: "□",
      label: "미리보기"
    }
  ];

  /*
  ------------------------------------------------------------
  기사 저장
  ------------------------------------------------------------
  */

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  /*
  ------------------------------------------------------------
  AI 어시스턴트 기능
  ------------------------------------------------------------
  */

  const aiSuggestions = [
    "기사 제목을 조금 더 구체적으로 만들어보세요.",
    "본문에 통계 자료를 추가하면 신뢰도가 높아집니다.",
    "첫 문장에서 핵심 내용을 먼저 제시해보세요."
  ];

  return (
    <div className="article-write-page">

      {/* ====================================================
          ARTICLE WRITE SUB BAR
      ==================================================== */}

      <div className="article-toolbar">

        <div className="article-tool-title">

          <span className="tool-eyebrow">
            JOURNALIST WORKSPACE
          </span>

          <strong>
            기사 작성
          </strong>

        </div>


        <div className="article-tools">

          {tools.map((tool) => (

            <button
              key={tool.id}
              className={
                activeTool === tool.id
                  ? "article-tool active"
                  : "article-tool"
              }
              onClick={() => setActiveTool(tool.id)}
            >

              <span className="tool-icon">
                {tool.icon}
              </span>

              <span>
                {tool.label}
              </span>

            </button>

          ))}

        </div>


        <div className="article-toolbar-actions">

          <span className={saved ? "save-status saved" : "save-status"}>
            {saved ? "저장되었습니다" : "자동 저장됨"}
          </span>

          <button
            className="save-button"
            onClick={handleSave}
          >
            저장
          </button>

        </div>

      </div>


      {/* ====================================================
          ARTICLE MAIN LAYOUT
      ==================================================== */}

      <div className="article-workspace">


        {/* ==================================================
            LEFT : ARTICLE EDITOR
        ================================================== */}

        <main className="article-editor">

          {/* 기사 정보 */}

          <div className="article-meta-top">

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>사회</option>
              <option>정치</option>
              <option>경제</option>
              <option>문화</option>
              <option>IT</option>
              <option>국제</option>
            </select>

            <span>
              기사 작성
            </span>

            <span className="dot">
              ·
            </span>

            <span>
              마지막 수정 12:01
            </span>

          </div>


          {/* 제목 */}

          <textarea
            className="article-title-input"
            placeholder="기사 제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            rows="2"
          />


          {/* 부제 */}

          <input
            className="article-subtitle-input"
            placeholder="부제목을 입력하세요"
          />


          {/* 기자 정보 */}

          <div className="writer-info">

            <div className="writer-avatar">
              소
            </div>

            <div>

              <strong>
                박소현 기자
              </strong>

              <span>
                콘텐츠팀
              </span>

            </div>

          </div>


          {/* 본문 */}

          <div className="editor-toolbar">

            <button>
              B
            </button>

            <button>
              I
            </button>

            <button>
              H1
            </button>

            <button>
              H2
            </button>

            <button>
              •
            </button>

            <button>
              ↗
            </button>

            <span className="editor-divider"></span>

            <button>
              이미지
            </button>

            <button>
              링크
            </button>

            <button>
              자료
            </button>

          </div>


          <textarea
            className="article-content-input"
            placeholder={
              "기사 본문을 작성하세요.\n\n취재한 내용을 자유롭게 입력하면 AI 어시스턴트가 문장 다듬기, 사실 확인, 관련 자료 검색 등을 도와줍니다."
            }
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />


          {/* 기사 하단 정보 */}

          <div className="article-footer">

            <span>
              글자 수 {content.length.toLocaleString()}
            </span>

            <span>
              예상 읽기 시간 2분
            </span>

            <span>
              자동 저장 활성화
            </span>

          </div>

        </main>



        {/* ==================================================
            RIGHT : AI ASSISTANT
        ================================================== */}

        <aside className="article-assistant">


          {/* AI HEADER */}

          <div className="assistant-header">

            <div>

              <span className="assistant-eyebrow">
                AI ASSISTANT
              </span>

              <h2>
                기사 보조
              </h2>

            </div>

            <div className="ai-status">
              <span></span>
              AI ON
            </div>

          </div>


          {/* AI QUICK ACTION */}

          <div className="ai-quick-actions">

            <button>
              <span>✦</span>
              문장 다듬기
            </button>

            <button>
              <span>⌕</span>
              자료 찾기
            </button>

            <button>
              <span>✓</span>
              사실 확인
            </button>

            <button>
              <span>↗</span>
              제목 추천
            </button>

          </div>


          {/* VERIFICATION */}

          <section className="verification-card">

            <div className="verification-header">

              <div>

                <span>
                  ARTICLE VERIFICATION
                </span>

                <h3>
                  기사 검증률
                </h3>

              </div>

              <strong>
                86%
              </strong>

            </div>


            <div className="verification-progress">

              <div
                className="verification-progress-value"
                style={{ width: "86%" }}
              ></div>

            </div>


            <div className="verification-items">

              <div>
                <span className="check">
                  ✓
                </span>

                <span>
                  출처 확인
                </span>

                <strong>
                  완료
                </strong>
              </div>


              <div>
                <span className="check">
                  ✓
                </span>

                <span>
                  숫자 및 통계
                </span>

                <strong>
                  완료
                </strong>
              </div>


              <div>
                <span className="warning">
                  !
                </span>

                <span>
                  추가 확인 필요
                </span>

                <strong>
                  2건
                </strong>
              </div>

            </div>

          </section>


          {/* AI SUGGESTION */}

          <section className="ai-suggestion">

            <div className="suggestion-title">

              <span>
                ✦
              </span>

              <strong>
                AI 제안
              </strong>

            </div>


            <p>
              현재 작성 중인 기사에서
              확인하면 좋은 부분입니다.
            </p>


            <div className="suggestion-list">

              {aiSuggestions.map((item, index) => (

                <button
                  key={index}
                  className="suggestion-item"
                >

                  <span>
                    {index + 1}
                  </span>

                  <p>
                    {item}
                  </p>

                  <strong>
                    →
                  </strong>

                </button>

              ))}

            </div>

          </section>


          {/* SOURCES */}

          <section className="source-card">

            <div className="source-header">

              <div>

                <span>
                  SOURCES
                </span>

                <h3>
                  참고 자료
                </h3>

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
                  통계청 인구동향
                </strong>

                <span>
                  공식 통계자료
                </span>

              </div>

              <span>
                ✓
              </span>

            </div>


            <div className="source-item">

              <div className="source-number">
                02
              </div>

              <div>

                <strong>
                  동아일보 기존 기사
                </strong>

                <span>
                  내부 자료
                </span>

              </div>

              <span>
                ✓
              </span>

            </div>

          </section>


          {/* KEYWORDS */}

          <section className="keyword-section">

            <span>
              RECOMMENDED KEYWORDS
            </span>

            <div className="keyword-list">

              <button>
                생성형 AI
              </button>

              <button>
                저널리즘
              </button>

              <button>
                기자 업무
              </button>

              <button>
                뉴스룸
              </button>

            </div>

          </section>


        </aside>

      </div>

    </div>
  );
}

export default ArticleWrite;