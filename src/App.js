import Table from "./components/Table";
import Validation from "./components/Validation";
import { Box, Grid } from "@material-ui/core";
import { Typography } from "@mui/material";

const App = () => {
  return (
    <Grid style={{ width: "100%", display: "flex", textAlign: "center", justifyContent: "center" }}>
      <Box style={{ width: 900 }}>
        <Typography mt={4} mb={2} sx={{ fontWeight: 600, fontSize: 12 }} component={"p"}>
          Stwórz walidację dla tabeli produktów
        </Typography>
        <Table />
        <Validation />
      </Box>
    </Grid>
  );
};

export default App;
