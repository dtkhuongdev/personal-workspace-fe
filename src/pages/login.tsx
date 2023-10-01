import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import logo from "../assets/logo.svg";
import ButtonGoogle from "src/components/Button/ButtonGoogle/ButtonGoogle";

export const Login: React.FC = () => {
  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        display="flex"
        gap="36px"
        justifyContent="center"
        flexDirection="column"
      >
        <div>
          <img src={logo} />
        </div>

        <ButtonGoogle />
      </Box>
    </Container>
  );
};
