import Image from "next/image";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}
const SideBarMenuitems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "BookMarks",
    icon: <BsBookmark />,
  },
  {
    title: "profile",
    icon: <BiUser />,
  },
];
export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 w-screen mx-auto max-w-screen-xl h-screen">
        <div className="col-span-3 pt-8">
          <div className="text-4xl h-fit w-fit hover:bg-gray-600 rounded-full p-2 cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-4 text-xl font-semibold pr-4 ">
            <ul>
              {SideBarMenuitems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer"
                  key={item.title}>
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 px-2">
              <button className="bg-[#1d9bf0] p-4 rounded-full text-lg w-full mt-4 ">Tweet</button>
            </div>
          </div>
        </div>
        <div className="col-span-6  border-r-[1px] border-l-[1px] border-gray-400"></div>
        <div className="col-span-3">hi</div>
      </div>
    </div>
  );
}
