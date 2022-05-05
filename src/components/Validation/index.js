import React from "react";
import { Button, Box } from "@material-ui/core";
import products from "../../data/products";
// todo
const Validation = ({ data }) => {
  const onClick = () => {
    let isValid = true;
    let isEmpty = false;

    for (let i = 0; i < data.length; i++) {
      if (!data[i].value) {
        isEmpty = true;
      }
    }

    for (let i = 0; i < data.length; i++) {
      let filter = products[i].validAnswer.filter(
        (item) => item === data[i].value
      );
      if (filter.length === 0) {
        isValid = false;
      }
    }
    if (isEmpty) {
      alert("Uwaga, nie wybrałeś wszystkich dopowiedzi");
    } else if (isValid) {
      alert("Gratulacje!");
    } else {
      alert("Coś poszło nie tak!");
    }
  };
  return (
    <Box>
      <Button
        style={{ marginTop: 20 }}
        onClick={onClick}
        variant="contained"
        color="primary"
      >
        Sprawdź
      </Button>
    </Box>
  );
};

export default Validation;
