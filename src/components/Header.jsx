import { Link } from "react-router-dom";
import Search from "./Search";
import logoCoupang from "../assets/images/logo-coupang.png";
import HeaderCategory from "./HeaderCategory";
import Nav from "./Nav";
import styled from "styled-components";

import HighMenu from "./HighMenu";
import UtilMenu from "./UtilMenu";

export default function Header() {
  return (
    <HeaderWrapper>
      <HighMenu />
      <HeaderCategory />
      <Link to="/">
        <img src={logoCoupang} alt="coupang logo" />
      </Link>
      <Search />
      <UtilMenu />
      <Nav />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  background: #ccc;
  height: 147px;
  width: 1500px;
  margin: auto;
`;
