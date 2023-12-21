import styled from "styled-components";
import { Button, Dropdown, Space } from "antd";
import Bg from "../assets/images/pc_header_img_sprite.png";
import { items } from "../mocks/cate";

export default function HeaderCategory() {
  return (
    <>
      <Wrapper>
        <Dropdown menu={{ items }} placement="bottom">
          <Button>카테고리</Button>
        </Dropdown>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 110px;
  height: 115px;

  .ant-btn {
    background: url(${Bg});
    height: 100%;
    width: 100%;
    border-radius: 0;
    > span {
      margin-top: 40px;
      color: white;
    }
  }
`;
