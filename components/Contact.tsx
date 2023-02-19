import { CiMail } from "react-icons/ci";
import { BsGithub, BsTelephone } from "react-icons/bs";
import Title from "./Title";
import { sizes } from "@/types/globals";

const Contact = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-full">
      <Title title="Contact" />
      <div className="flex gap-8 p-16">
        <div className="cursor-pointer hover:text-green-500">
          <CiMail size={sizes.contact} />
        </div>
        <div className="cursor-pointer hover:text-green-500">
          <BsGithub size={sizes.contact} />
        </div>
        <div className="cursor-pointer hover:text-green-500">
          <BsTelephone size={sizes.contact} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
