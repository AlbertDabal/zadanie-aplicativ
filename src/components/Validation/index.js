import React from "react";
import { Button, Box } from "@material-ui/core";
// todo
const Validation = () => {
  const onClick = () => {
    let isValid = false;
    if (isValid) {
      alert("Gratulacje!");
    } else {
      alert("Coś poszło nie tak!");
    }
  };
  return (
    <Box>
      <Button style={{ marginTop: 20 }} onClick={onClick} variant="contained" color="primary">
        Sprawdź
      </Button>
    </Box>
  );
};

export default Validation;
