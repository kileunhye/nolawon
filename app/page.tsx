"use client";

import { useState } from "react";

const choices = ["봄바람 왈츠", "별빛 행진곡", "구름 위의 멜로디", "숲속 친구들"];

export default function Home() {
  const [mode, setMode] = useState<"student" | "teacher">("student");
  const [code, setCode] = useState("");
  const [nickname, setNickname] = useState("");
  const [joined, setJoined] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [showTeacher, setShowTeacher] = useState(false);

  const joinClass = () => {
    if (code.trim() && nickname.trim()) setJoined(true);
  };

  return (
    <main className="game-shell">
      <div className="scanlines" aria-hidden="true" />
      <nav className="topbar">
        <a className="brand" href="#home" aria-label="놀라운 음악교실 홈">
          <span className="brand-music">♫</span>
          <span>놀라운<br /><b>음악교실</b></span>
        </a>
        <div className="coin-counter"><span className="coin">●</span> 오늘의 음악 코인 <strong>128</strong></div>
        <button className="pixel-button tiny" onClick={() => setShowTeacher((value) => !value)}>
          {showTeacher ? "학생 화면" : "교사 화면"}
        </button>
      </nav>

      <section className="hero" id="home">
        <div className="cloud cloud-one" /><div className="cloud cloud-two" />
        <div className="hero-copy">
          <p className="eyebrow">WORLD 1-1 · MUSIC QUEST</p>
          <h1>음악을 듣고,<br /><span>신나게 맞혀요!</span></h1>
          <p className="hero-text">선생님이 만든 음악 퀴즈에 입장하고<br />친구들과 함께 최고 점수에 도전해 보세요.</p>
          <div className="mode-switch" role="tablist" aria-label="사용자 모드">
            <button className={mode === "student" ? "active" : ""} onClick={() => setMode("student")}>학생 입장</button>
            <button className={mode === "teacher" ? "active" : ""} onClick={() => setMode("teacher")}>교사 모드</button>
          </div>
        </div>
        <div className="hero-art" aria-label="픽셀 음악 모험 캐릭터 장식">
          <div className="pixel-sun">♪</div>
          <div className="mountain mountain-back" /><div className="mountain mountain-front" />
          <div className="music-note note-one">♪</div><div className="music-note note-two">♫</div>
          <div className="player-character"><div className="cap" /><div className="face" /><div className="body" /><div className="shoe left" /><div className="shoe right" /></div>
          <div className="flag"><span>음악</span></div>
        </div>
      </section>

      <section className="quest-card" aria-label={mode === "student" ? "학생 세션 입장" : "교사 세션 만들기"}>
        <div className="card-rivet rivet-left" /><div className="card-rivet rivet-right" />
        {mode === "student" ? (
          <>
            <div className="card-heading"><span className="pixel-icon">▶</span><div><p className="card-kicker">READY PLAYER ONE</p><h2>수업에 입장하기</h2></div></div>
            <p className="card-subtitle">선생님에게 받은 6자리 코드를 입력하세요.</p>
            {joined ? (
              <div className="joined-panel"><div className="check-badge">✓</div><div><strong>{nickname}님, 입장 완료!</strong><p>선생님이 게임을 시작할 때까지 기다려 주세요.</p></div><span className="loading-dots">•••</span></div>
            ) : (
              <div className="join-form">
                <label><span>SESSION CODE</span><input value={code} onChange={(event) => setCode(event.target.value.toUpperCase())} placeholder="예: MUS123" maxLength={6} /></label>
                <label><span>NICKNAME</span><input value={nickname} onChange={(event) => setNickname(event.target.value)} placeholder="내 이름을 지어주세요" maxLength={12} /></label>
                <button className="pixel-button primary" onClick={joinClass}>게임 입장 <span>→</span></button>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="card-heading"><span className="pixel-icon purple">★</span><div><p className="card-kicker">TEACHER CONTROL ROOM</p><h2>오늘의 음악 퀘스트</h2></div></div>
            <p className="card-subtitle">수업을 만들고 학생들과 음악 모험을 시작하세요.</p>
            <div className="teacher-dashboard"><div><span className="status-dot" /> 진행 중인 수업 <strong>2개</strong></div><div>참여 학생 <strong>18명</strong></div><button className="pixel-button primary">새 수업 만들기 <span>+</span></button></div>
          </>
        )}
      </section>

      <section className="demo-zone">
        <div className="section-title"><span className="level-badge">1-1</span><div><p className="card-kicker">LIVE CLASS PREVIEW</p><h2>지금 진행 중인 음악 퀘스트</h2></div><span className="live-pill"><i /> LIVE</span></div>
        <div className="quiz-layout">
          <div className="player-panel">
            <div className="panel-top"><span>♪ LEVEL 01</span><span className="timer">00:18</span></div>
            <div className="album-art"><span className="vinyl">♫</span><span className="pixel-eq">▂▅▇▅▂</span></div>
            <h3>무슨 노래일까요?</h3><p className="song-hint">음악을 잘 듣고 정답을 골라보세요!</p>
            <div className="progress"><span /></div><div className="play-row"><button className="play-button">▶</button><span>00:12 / 00:30</span><span className="volume">▮▮▮</span></div>
          </div>
          <div className="answers-panel">
            <div className="answer-header"><span>QUIZ TIME!</span><strong>점수 × 100</strong></div>
            <div className="choice-grid">{choices.map((choice, index) => <button key={choice} className={`choice choice-${index + 1} ${selected === choice ? "selected" : ""}`} onClick={() => setSelected(choice)}><span>{String.fromCharCode(65 + index)}</span>{choice}</button>)}</div>
            <button className="submit-answer" onClick={() => setSelected(selected)}>정답 제출 <span>↗</span></button>
            <div className="hint-line">💡 힌트를 사용하면 점수가 조금 줄어들어요!</div>
          </div>
        </div>
      </section>

      <footer><span>© 놀라운 음악교실</span><span>PLAY · LISTEN · LEARN</span><span>v1.0 MVP</span></footer>
    </main>
  );
}
