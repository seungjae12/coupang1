import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Dropdown, Space } from "antd";
import { items } from "../mocks/mycoupang";
import Bg from "../assets/images/pc_header_img_sprite.png";

export default function UtilMenu() {
  return (
    <>
      <Wrapper>
        <Mycoupang>
          <Dropdown menu={{ items }} placement="bottom">
            <Button>
              <Link to="mypage">
                <span className="mypage-btn"></span>
                <span>마이쿠팡</span>
              </Link>
            </Button>
          </Dropdown>
          변경사항
        </Mycoupang>
        <Cart>
          <Link to="cart">장바구니</Link>
        </Cart>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.ul`
  background: green;
  width: 120px;
  display: flex;
  gap: 20px;
`;
const Mycoupang = styled.li`
  width: 50px;
  display: flex;
  flex-direction: column;

  .ant-btn {
    border: 0;
    background-color: transparent;
  }
  .mypage-btn {
    background: url(${Bg}) no-repeat -112px -42px;
    height: 50px;
    width: 30px;
    border-radius: 0;
    display: inline-block;
  }
`;
const Cart = styled.li`
  width: 50px;
`;
