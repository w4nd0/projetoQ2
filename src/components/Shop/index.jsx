import styled from "styled-components";
import Header from "../Header";
import Nav from "../Navigation/Nav";
import { Button } from "@material-ui/core";

import Expansion1 from "../../assets/expansion1.png";
import Expansion2 from "../../assets/expansion2.png";
import Expansion3 from "../../assets/expansion3.png";
import { useState } from "react";
import { useInfoUser } from "../../provider/user";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background: var(--gradient-purple-dark);
  padding-top: 100px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    max-width: 300px;
    margin: 0 auto;
  }
`;

const ExpansionCard = styled.div`
  background: var(--gradient-blue-dark);
  padding: 1rem;
  border-radius: 15px;
  width: 320px;
  text-align: center;
  font-family: var(--font);
  border: 1px solid var(--brown);
  margin: 1rem;

  p {
    background: var(--gradient-brown-dark);
    padding: 10px;
    border-radius: 10px;
    color: white;
    font-family: var(--font);
    font-size: 1.2rem;
    border: 1px solid var(--brown);

    label {
      color: lightgreen;
      font-family: var(--font);
    }
  }

  img {
    width: 300px;
  }

  button {
    background: var(--gradient-brown-dark);
    width: 180px;
    height: 50px;
    color: lightgreen;
    border-radius: 10px;
    border: 1px solid var(--brown);

    &:hover {
      background: var(--gradient-blue-dark);
      border-color: var(--darkblue);
      color: white;
    }

    &:disabled {
      color: gray;
    }
  }

  span {
    font-family: var(--font);
    font-size: 1.2rem;
  }

  @media (max-width: 800px) {
    max-width: 300px;
    margin: 0 auto;
  }
`;

const StyledCart = styled.div`
  background: var(--gradient-brown-dark);
  border: 1px solid var(--brown);
  border-radius: 10px;
  width: 300px;
  color: white;
  font-family: var(--font);
  text-align: center;
  padding: 11px;
  min-height: 542px;
  font-family: var(--font);

  h3 {
    background: var(--gradient-blue-dark);
    border: 1px solid var(--darkblue);
    padding: 1rem;
    border-radius: 15px;
    font-family: var(--font);
    font-size: 1.2rem;
  }

  p {
    width: 100%;
    background: var(--gradient-blue-dark);
    padding: 0.5rem 0;
    border-radius: 15px;
    border: 1px solid var(--darkblue);
    color: lightgreen;
    font-family: var(--font);
    font-size: 1.1rem;
  }
`;

const CartProduct = styled.div`
  background: var(--gradient-purple-dark);
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 15px;
  border: 1px solid var(--brown);
  animation: vanish 1s ease;

  @keyframes vanish {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  p {
    background: var(--gradient-blue-dark);
    color: white;
    margin: 0.6rem auto;
    padding: 0.5rem 1rem;
    border: none;
    font-family: var(--font);
  }

  button {
    background: var(--gradient-brown-dark);
    border: 1px solid var(--brown);
    color: red;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    font-family: var(--font);

    &:hover {
      background: var(--gradient-blue-dark);
      border-color: var(--darkblue);
      color: white;
    }
  }

  span {
    font-family: var(--font);
  }
`;

const products = [
  {
    name: "Shadows of the Realm",
    price: 499,
  },
  {
    name: "The Last King",
    price: 399,
  },
  {
    name: "Dungeon of Nightmares",
    price: 799,
  },
];

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [disabled, setDisabled] = useState([false, false, false]);

  const { infoUser } = useInfoUser();

  const history = useHistory();

  if (!infoUser.authenticated) {
    history.push("/login");
  }

  const handleAdd = (index) => {
    setCart([...cart, products[index]]);
    const newDisabled = disabled;
    newDisabled[index] = true;
    setDisabled(newDisabled);
  };

  const handleRemove = (product) => {
    const newCart = cart.filter((x) => product.name !== x.name);
    setCart(newCart);

    const newDisabled = disabled;
    newDisabled[products.indexOf(product)] = false;
    setDisabled(newDisabled);
    console.log(disabled);
  };

  return (
    <Container>
      <Header>
        <Nav>
          <Content>
            <ExpansionCard>
              <p>Shadows of the Realm</p>
              <img src={Expansion1} alt="expansion" />
              <p>
                Price:
                <label> $499</label>
              </p>
              <Button
                variant="contained"
                onClick={() => handleAdd(0)}
                disabled={disabled[0]}
              >
                BUY
              </Button>
            </ExpansionCard>
            <ExpansionCard>
              <p>The Last King</p>
              <img src={Expansion2} alt="expansion" />
              <p>
                Price:
                <label> $399</label>
              </p>
              <Button
                variant="contained"
                onClick={() => handleAdd(1)}
                disabled={disabled[1]}
              >
                BUY
              </Button>
            </ExpansionCard>
            <ExpansionCard>
              <p>Dungeon of Nightmares</p>
              <img src={Expansion3} alt="expansion" />
              <p>
                Price:
                <label> $799</label>
              </p>
              <Button
                variant="contained"
                onClick={() => handleAdd(2)}
                disabled={disabled[2]}
              >
                BUY
              </Button>
            </ExpansionCard>
            <StyledCart>
              <h3>Your Cart</h3>
              {cart.map((product, i) => (
                <CartProduct key={i}>
                  <p>{product.name}</p>
                  <Button
                    variant="contained"
                    onClick={() => handleRemove(product)}
                  >
                    Remove
                  </Button>
                </CartProduct>
              ))}
              <p>
                Total Cost: $
                {cart.reduce((acc, product) => acc + product.price, 0)}
              </p>
            </StyledCart>
          </Content>
        </Nav>
      </Header>
    </Container>
  );
};

export default Shop;
