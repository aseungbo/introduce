import Image from "next/image";
import profilePic from "@/public/me.png";
import Title from "./Title";
import { sizes } from "@/types/globals";

/**
 * TODO
 * - Notion API 활용해서 포트폴리오에 적힌 데이터 fetch해서 사용
 * @returns
 */
const Introduce = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full p-4">
      <Image
        width={sizes.profile}
        height={sizes.profile}
        src={profilePic}
        alt="profile"
        placeholder="blur"
      />
      <Title title="Introduce" />
      <div className="grid w-full gap-4 p-4 lg:grid-cols-5">
        <div className="flex justify-between w-full col-span-1 p-4 bg-gray-700 rounded-lg lg:col-span-2">
          <div className="flex flex-col w-full pb-4">
            <p className="font-bold text-green-600">새로움</p>
            <p>내용을 입력하세요.</p>
          </div>
        </div>
        <div className="flex justify-between w-full col-span-1 p-4 bg-gray-700 rounded-lg lg:col-span-2">
          <div className="flex flex-col w-full pb-4">
            <p className="font-bold text-green-600">커뮤니케이션</p>
            <p>내용을 입력하세요.</p>
          </div>
        </div>
        <div className="flex justify-between w-full p-4 bg-gray-700 rounded-lg ">
          <div className="flex flex-col w-full pb-4">
            <p className="font-bold text-green-600">성능 개선</p>
            <p>내용을 입력하세요.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
