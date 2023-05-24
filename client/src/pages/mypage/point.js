import Mypagehead from "../../components/MypageHead";
import styled from "styled-components";
import preparing from "../../assets/preparing.png"
const Layout = styled.div`
    img{
        width:100%;
    }
`;

function Point() {
  return (
    <Mypagehead title={"내 포인트"} subtitle={"준비 중 입니다..."}>
      <Layout>
        <img
          src={preparing}
          alt="페이지 준비중입니다"
        ></img>
      </Layout>
    </Mypagehead>
  );
}

export default Point;
