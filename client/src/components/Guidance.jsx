import styled from "styled-components";
import BasicButton from "./button/BasicButton";

const Layout = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index:10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  .container {
    margin:0;
    padding: 30px;
    background-color : white;
    display:flex;
    flex-direction:  column;
    align-items:center;
    justify-content: space-around;
    border-radius: 10px;
    height: 120px;

    .guidance_btns{
      margin-top: 20px;
      display:flex;
      justify-content: space-around;
      gap:10px;
    }
  }
`;

function Guidance({ text, close, ok}) {
  return (
    <Layout>
      <div className="container">
        <div>
          <p>{text}</p>
        </div>
        <div className="guidance_btns">
          {ok === undefined ? null : <div onClick={ok}><BasicButton>확인</BasicButton></div>}
          <div onClick={close}><BasicButton>취소</BasicButton></div>
        </div>
      </div>
    </Layout>
  );
}

export default Guidance;
