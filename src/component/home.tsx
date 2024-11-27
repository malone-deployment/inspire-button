import { Stack, Typography } from "@mui/material";
import { BoxAndQoutes } from "./box-and-qoutes";

export default function Home() {
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            backgroundColor: "#e0e0e0",
            width: 400,
            height: 400,
            borderRadius: 2,
            gap: 4,
            padding: 5,
          }}
        >
          <Typography sx={{ fontFamily: "Roboto", fontSize: 23 }}>
            Get Inspired App
          </Typography>

          <BoxAndQoutes />
        </Stack>
      </Stack>
    </>
  );
}
