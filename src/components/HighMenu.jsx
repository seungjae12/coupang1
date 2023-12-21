import styled from "styled-components";
import Favorite from "./Favorite";
import Launching from "./Launching";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";
import CustomerService from "../pages/CustomerService";
import { Link } from "react-router-dom";

export default function HighMenu() {
  return (
    <>
      <Wrapper>
        <ul className="high-menu-left">
          <li>
            <Favorite />
          </li>
          <li>
            <Launching />
          </li>
        </ul>
        <ul className="high-menu-right">
          <li>
            <Link to="login">
              <Login />
            </Link>
          </li>
          <li>
            <Link to="createaccount">
              <CreateAccount />
            </Link>
          </li>
          <li>
            <Link to="customerservice">
              <CustomerService />
            </Link>
          </li>
        </ul>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background: red;
  height: 35px;
  display: flex;
  justify-content: space-between;

  .high-menu-left {
    background: yellow;
    display: flex;
    height: 100%;
  }
  .high-menu-right {
    background: blue;
    display: flex;
  }
`;
