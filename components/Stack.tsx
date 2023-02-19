import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import reactIcon from "@/public/react.png";
import typescriptIcon from "@/public/typescript.png";
import reduxIcon from "@/public/redux.svg";
import styledComponentsIcon from "@/public/styledComponents.svg";
import { sizes } from "@/types/globals";
import Title from "./Title";

/**
 * TODO
 * - 애니메이션 translateX 수정
 * @returns
 */
const Stack = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full">
      <Title title="Stack" />
      <div className="flex justify-center w-full gap-8 p-16">
        <Image
          width={sizes.stack}
          height={sizes.stack}
          src={reactIcon}
          alt="react"
          placeholder="blur"
        />
        <Image
          width={sizes.stack}
          height={sizes.stack}
          src={typescriptIcon}
          alt="typescript"
          placeholder="blur"
        />
        <Image
          width={sizes.stack}
          height={sizes.stack}
          src={reduxIcon}
          alt="redux"
        />
        <Image
          width={sizes.stack}
          height={sizes.stack}
          src={styledComponentsIcon}
          alt="styledComponents"
        />
        <BsGithub className="" size={sizes.stack} />
      </div>
    </div>
  );
};

export default Stack;
