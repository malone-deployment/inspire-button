import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

export function BoxAndQoutes() {
  let [qoutes, setQoutes] = useState("");
  let [colorbox, setColorBox] = useState("");
  let [counter, setCounter] = useState(0);
  let [inspirationalText, setInspirationalText] = useState("");

  function changeMe(num: number) {
    setCounter((counter = counter + num));

    if (counter === Number(1)) {
      setColorBox((colorbox = "#256622"));
      setInspirationalText((inspirationalText = "color is:"));
    }
    if (counter === Number(2)) {
      setQoutes((qoutes = "Ambition is putting a ladder against the sky."));
      setInspirationalText((inspirationalText = "qoutes is:"));
    }

    if (counter === Number(3)) {
      setColorBox((colorbox = "#B73636"));
      setInspirationalText((inspirationalText = "color is:"));
    }

    if (counter === Number(4)) {
      setQoutes((qoutes = "A joy that's shared is a joy made double."));
      setInspirationalText((inspirationalText = "qoutes is:"));
    }

    if (counter === Number(5)) {
      setColorBox((colorbox = "#F9F2B4"));
      setInspirationalText((inspirationalText = "color is:"));
    }

    if (counter === Number(6)) {
      setQoutes(
        (qoutes =
          "Don’t let yesterday take up too much of today.” — Will Rogers")
      );
      setInspirationalText((inspirationalText = "qoutes is:"));

      setCounter((counter = 0));
    }
  }

  const finalBox = (
    <Stack sx={{ backgroundColor: colorbox, height: 200, width: 200 }}></Stack>
  );

  const finalContent = [qoutes, finalBox, qoutes, finalBox, qoutes, finalBox];

  return (
    <>
      <Typography
        sx={{
          paddingTop: 3,
          fontFamily: "Roboto",
          fontSize: 15,
        }}
      >
        Your inspirational {inspirationalText}
      </Typography>

      {finalContent[counter]}
      <Button
        onClick={() => changeMe(1)}
        sx={{
          backgroundColor: "#757575",
          color: "white",
          fontSize: 13,
          padding: 5,
        }}
      >
        Inspire me again
      </Button>
    </>
  );
}
