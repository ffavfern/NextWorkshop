import Link from "next/link";
import Image from "next/image";

const Nav = () => (
  <>
    <nav className="navbar {globals.profile}">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image
            src="/profile.jpeg"
            alt
            width={50}
            height={50}
            className="profile"
          />
        </a>
        <ul>
          <li>
            <a href>หน้าแรก</a>
          </li>
          <li>
            <a href>บริการของเรา</a>
          </li>
          <li>
            <a href>เกี่ยวกับเรา</a>
          </li>
        </ul>
      </div>
    </nav>
  </>
);
export default Nav;
