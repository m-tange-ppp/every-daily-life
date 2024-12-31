import Link from "next/link";
import React from "react";
import { FaHeart, FaHome, FaUser } from "react-icons/fa";

function Sidebar() {
  return (
    <div>
      <nav>
        <ul className="space-y-2 w-40">
          <li>
            <Link href={"/"} className="inline-flex items-center gap-2">
              <FaHome />
              <span>ホーム</span>
            </Link>
          </li>
          <li>
            <Link href={"/profile"} className="inline-flex items-center gap-2">
              <FaUser />
              <span>プロフィール</span>
            </Link>
          </li>
          <li>
            <Link href={"/suki"} className="inline-flex items-center gap-2">
              <FaHeart />
              <span>私のSuki</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
