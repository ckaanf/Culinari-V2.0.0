import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import ColorButton from "../../../components/button/ColorButton";
import QuantityBox from "../../../components/QuantityBox";

const HeaderContainer = styled.div`
  padding-bottom: 40px;

  .data_list_wrapper {
    border-bottom: 1px solid #f4f4f4;
  }

  dl {
    width: 100%;
    padding: 10px 0px 10px;
    border-top: 1px solid #f4f4f4;
    display: flex;
    align-items: flex-start;
    letter-spacing: -0.5px;
  }

  dt {
    width: 128px;
    height: 100%;
    line-height: 19px;
    font-weight: 400;
    color: #666;
  }

  dd {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .cart_option {
    width: 100%;
    font-size : 15px;
    padding: 11px 10px 11px 15px;
    border: 1px solid #f4f4f4;
    letter-spacing: -0.5px;
  }

  .cart_option_item {
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    

    span {
      font-weight: bold;
      font-size : 18px;
    }
  }

  .total_price_wrapper {
    padding-top: 30px;
    letter-spacing: -0.5px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  .total_price_text {
    padding-right: 12px;
    font-weight: 500;
    color: #333;
    line-height: 20px;
    font-size : 16px;
  }

  .total_price_number {
    font-weight: bold;
    font-size: 28px;
    line-height: 28px;
    font-family: Tahoma;
  }

  .total_price_unit {
    padding-left: 3px;
    font-size: 20px;
    font-weight: 600;
    line-height: 27px;
  }

  .add_cart_button_wrapper {
    margin-top: 20px;
    font-weight: bold;
    display: flex;

    a {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  .cart_option_wrapper {
    width: 300px;
    margin-left: 10px;
    padding: 15px;
    border: 3px solid #C8BBE1;
    font-size: 15px;
    border-radius : 10px;
    position: sticky;
    top: 10px;
  }

  .cart_option_title {
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: bold;
  }
`;

function ProductSelection({ position, data, quantity, setQuantity, totalPrice }) {
  const navigate = useNavigate();

  const handleAddCartClick = async () => {
    const accessToken = JSON.parse(localStorage.getItem("token"))?.authorization;

    if (!accessToken) {
      if (window.confirm("해당 기능은 로그인 후에 사용할 수 있습니다. 로그인 페이지으로 이동하시겠습니까?")) {
        navigate("/login");

        return;
      }

      return;
    }

    const body = {
      cartItems: [
        {
          productId: data.data.id,
          quantity,
        },
      ],
    };
    const config = {
      headers: {
        "Content-Type": `application/json`,
        authorization: accessToken,
      },
    };

    try {
      const response = await axios.post(`${process.env.REACT_APP_URL}/carts`, body, config);

      if (response.status === 201 && window.confirm("해당 상품이 장바구니에 담겼습니다. 장바구니 페이지로 이동하시겠습니까?")) {
        navigate("/cart");
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <HeaderContainer>
      {position === "header" ? (
        <div className="data_list_wrapper">
          <dl>
            <dt>상품선택</dt>
            <dd>
              <div className="cart_option">
                <div>
                  <span>{data.data && data.data.name}</span>
                </div>
                <div className="cart_option_item">
                  <QuantityBox quantity={quantity} setQuantity={setQuantity} />
                  <span>{data.data && data.data.price.toLocaleString()}원</span>
                </div>
              </div>
            </dd>
          </dl>

          <div className="total_price_wrapper">
            <span className="total_price_text">총 상품금액 : </span>
            <span className="total_price_number">{totalPrice}</span>
            <span className="total_price_unit">원</span>
          </div>
          <div className="add_cart_button_wrapper" onClick={handleAddCartClick}>
            <ColorButton children="장바구니 담기" font="16" radius="3" p_height="19" />
          </div>
        </div>
      ) : (
        <div className="cart_option_wrapper">
          <div className="cart_option_title">상품선택</div>
          <div className="cart_option">
            <div>
              <span>{data.data && data.data.name}</span>
            </div>
            <div className="cart_option_item">
              <QuantityBox quantity={quantity} setQuantity={setQuantity} />
              <span>{data.data && data.data.price.toLocaleString()}원</span>
            </div>
          </div>

          <div className="total_price_wrapper">
            <span className="total_price_text">총 상품금액 : </span>
            <span className="total_price_number">{totalPrice}</span>
            <span className="total_price_unit">원</span>
          </div>
          <div className="add_cart_button_wrapper" onClick={handleAddCartClick}>
            <ColorButton children="장바구니 담기" font="16" radius="3" p_height="19" />
          </div>
        </div>
      )}
    </HeaderContainer>
  );
}

export default ProductSelection;
