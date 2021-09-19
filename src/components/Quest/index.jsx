import { Button, makeStyles, Modal } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";

import SwordIcon from "../../assets/sword.png";
import CircleIcon from "../../assets/circle.png";
import { useInfoQuests } from "../../provider/quests";

const Container = styled.div`
  max-width: 300px;
  border: 1px solid var(--brown);
  border-radius: 15px;
  text-align: center;
  background: var(--gradient-blue-dark);
  color: white;
  margin: 10px;
  padding: 10px;
  font-family: var(--font);
  animation: 1s vanish ease-in-out;
  transition: 1s;

  @keyframes fromSide {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  h4 {
    background: var(--gradient-brown-dark);
    padding: 5px;
    font-size: 1.2rem;
    font-family: var(--font);
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    margin: 5px;
    font-family: var(--font);
  }
`;

const useStyles = makeStyles({
  E: {
    color: "#6de256",
  },
  D: {
    color: "green",
  },
  C: {
    color: "#b8d836",
  },
  B: {
    color: "orange",
  },
  A: {
    color: "red",
  },
  S: {
    color: "red",
  },
  modal: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    background: "var(--gradient-brown-dark)",
    padding: "20px",
    borderRadius: "10px",
    color: "white",
    border: "1px solid var(--darkblue)",
  },
  container: {
    border: "2px solid green",
  },
  btn: {
    marginRight: "10px",
  },
  yesBtn: {
    color: "white",
    borderColor: "white",
  },
});

const Quest = ({ name, rank, quest, type, id }) => {
  const [isShowing, setIsShowing] = useState(false);
  const {
    removeQuest,
    addCompletedQuest,
    removeCurrentQuest,
    getQuests,
    removeDaily,
    completeQuest,
  } = useInfoQuests();

  const classes = useStyles();

  const handleShow = () => {
    setIsShowing(!isShowing);
  };

  const handleAdd = () => {
    const data = {
      title: name,
      difficulty: rank,
      achieved: true,
    };

    removeCurrentQuest(quest);
    addCompletedQuest(data);
  };

  const handleRemove = () => {
    removeCurrentQuest(quest);
    handleShow();
  };

  const handleRemoveDaily = () => {
    removeQuest(quest.id);
    removeDaily(quest.title);
    handleShow();
    getQuests();
  };

  const handleComplete = () => {
    completeQuest(id);
  };

  return (
    <Container>
      <h4>{name}</h4>
      <p>
        Rank <label className={classes[rank]}>{rank}</label>
      </p>

      <Button onClick={handleShow}>
        <img
          src={CircleIcon}
          alt="circle"
          style={{
            backgroundColor: "transparent",
            width: "50px",
            marginTop: "-5px",
          }}
        />
      </Button>
      <Button onClick={type === "ranked" ? handleAdd : handleComplete}>
        <img
          src={SwordIcon}
          alt="sword"
          style={{ backgroundColor: "transparent", width: "50px" }}
        />
      </Button>
      <Modal open={isShowing} onClose={handleShow}>
        <div className={classes.modal}>
          <p>Do you really want do abandon this quest?</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              onClick={handleShow}
              className={classes.btn}
            >
              No
            </Button>
            <Button
              variant="outlined"
              onClick={type === "ranked" ? handleRemove : handleRemoveDaily}
              className={classes.yesBtn}
            >
              Yes
            </Button>
          </div>
        </div>
      </Modal>
    </Container>
  );
};

export default Quest;
