import { useState } from "react";
import connectIcon from "../../assets/connect-icon.png";
import "./Home.css";

const Home = () => {
  const [matchMemberList, setMatchMemberList] = useState<string[]>([]);
  const teamMembers = {
    js: ["강수암", "우승미", "이수아", "이현걸", "전서희", "조민경"],
    java: ["최소영"],
  };

  // 매칭 함수
  const matchNames = () => {
    setMatchMemberList([]);
    // 리스트를 복사하여 새로운 배열 생성
    const shuffledNames = [...teamMembers.js];

    // 배열을 무작위로 섞기
    for (let i = shuffledNames.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledNames[i], shuffledNames[j]] = [
        shuffledNames[j],
        shuffledNames[i],
      ];
    }

    // 매칭된 결과 출력
    for (let i = 0; i < shuffledNames.length; i += 2) {
      if (i + 1 < shuffledNames.length) {
        setMatchMemberList((state: string[]) => [
          ...state,
          `${shuffledNames[i]} - ${shuffledNames[i + 1]}`,
        ]);
      } else {
        setMatchMemberList((state: string[]) => [
          ...state,
          `${shuffledNames[i]}}`,
        ]);
      }
    }
  };

  return (
    <>
      <div>
        <a
          href="https://school.programmers.co.kr/learn/challenges?tab=algorithm_practice_kit"
          target="_blank"
        >
          <img src={connectIcon} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Where Is Your Pair?</h1>
      <div className="member-contents">
        <div className="member-intro">
          팀 멤버:{" "}
          {teamMembers.js.join(", ") + ", " + teamMembers.java.join(", ")}
        </div>
        <div className="member-btn-area">
          <button className="click-btn" onClick={matchNames}>
            Click!!
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="member-pair">
          <ul className="pair-list">
            {matchMemberList.map((pair) => (
              <li key={pair}>{pair}</li>
            ))}
          </ul>
        </div>
      </div>
      <a href="https://github.com/minkyeongJ" target="_blank">
        <p className="read-the-docs">&copy; 2023 SquadConnet minkyeongJ</p>
      </a>
    </>
  );
};
export default Home;
