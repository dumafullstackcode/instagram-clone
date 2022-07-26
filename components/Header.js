import Image from "next/image";
import {
  searchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState } from "../atoms/modalAtoms";

function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className="shadow-sm bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        {/* Left */}
        <div
          onClick={() => router.push("/")}
          className="relative hidden lg:inline-grid h-24 w-24 cursor-pointer"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
            alt="al"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div
          onClick={() => router.push("/")}
          className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Instagram_font_awesome.svg/2048px-Instagram_font_awesome.svg.png"
            alt="icon"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle */}
        <div className="max-w-xs mt-5 mb-0">
          <div className="relative mt-1 p-3 rounded-md ">
            <div className=" absolute inset-y-0 pl-3 flex items-center pointer-events-none ">
              <SearchIcon className="h-3 w-3 text-gray-500 " />
            </div>
            <input
              className="bg-gray-50 block w-full h-7 pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push("/")} className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />

          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center text-center animated-pulse text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navBtn"
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />

              <img
                onClick={signOut}
                src={session.user.image}
                alt="Profile"
                className="h-10 w-10 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button onClick={signIn}>sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
