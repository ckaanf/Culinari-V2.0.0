import styled from "styled-components";
import BasicButton from "./button/BasicButton";

const Layout = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index:10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: #783CB7;

  .container {
    margin:0;
    padding: 10px;
    border: 1px solid #783CB7;
    display:flex;
    flex-direction:  column;
    align-items:center;
    justify-content: space-around;
    font-size: 15px;
    border-radius: 5px;
    height: 100px;

    .guidance_btns{
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
