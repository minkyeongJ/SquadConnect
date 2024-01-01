import { useRef, useState } from "react";
import connectIcon from "../../assets/connect-icon.png";
import "./Home.css";
import NameTag from "../atom/NameTag";

const teamMemberList = {
  js: ["강수암", "우승미", "이수아", "전서희", "조민경"],
  java: ["최소영"],
};

const Home = () => {
  const [matchMemberList, setMatchMemberList] = useState<string[]>([]);
  const [teamMembers, setTeamMembers] = useState(teamMemberList);
  const inputName = useRef<HTMLInputElement | null>(null);

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
          `${shuffledNames[i]}`,
        ]);
      }
    }
  };

  const enterMember = () => {
    const name = inputName.current?.value;
    name && setTeamMembers((state) => ({ ...state, js: [...state.js, name] }));
    inputName.current && (inputName.current.value = "");
  };

  const deleteMember = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    const name = target.innerText;
    const filteredMember = teamMembers.js.filter((member) => member !== name);
    setTeamMembers((state) => ({ ...state, js: filteredMember }));
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
      <div className="member-enter">
        <p>멤버 등록:</p>
        <input type="text" ref={(el) => (inputName.current = el)} />
        <button onClick={enterMember}>추가하기</button>
      </div>
      <div className="member-contents">
        <div className="member-intro">
          {teamMembers.js.map((member: string) => (
            <NameTag key={member} name={member} handleClick={deleteMember} />
          ))}

          <NameTag
            name={teamMembers.java[0]}
            handleClick={deleteMember}
            readonly={true}
          />
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
