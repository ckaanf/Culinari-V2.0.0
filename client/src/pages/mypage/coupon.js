import Mypagehead from "../../components/MypageHead";
import styled from "styled-components";
import preparing from "../../assets/preparing.png"

const Layout = styled.div`
  img {
    width: 100%;
  }
`;

function Coupon() {
  return (
    <Mypagehead title={"내 쿠폰"} subtitle={"준비 중 입니다.."}>
      <Layout>
        <img
          src={preparing}
          alt="준비중 페이지"
        ></img>
      </Layout>
    </Mypagehead>
  );
}

export default Coupon;
