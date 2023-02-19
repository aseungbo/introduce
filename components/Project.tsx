import Image from "next/image";
import populmap from "@/public/populmap.gif";
import cabi from "@/public/42cabi.png";
import Title from "./Title";
import { sizes } from "@/types/globals";

const Project = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full p-4">
      <Title title="Project" />
      <div className="grid-cols-1 gap-4 p-8 gird md:grid-cols-3">
        <div className="flex gap-4 p-4">
          <Image src={populmap} width={sizes.project} alt="populmap" />
          <p>
            서울시 실시간 인구 밀집도, 도로 현황과 전국의 행사 정보를 제공하는
            지도 서비스
          </p>
        </div>
        <div className="flex gap-4 p-4">
          <Image src={cabi} width={sizes.project} alt="cabi" />
          <p>42 Seoul 사물함 관리 플랫폼</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
