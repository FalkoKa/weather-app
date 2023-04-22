import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const Warn = () => {
  const [open, setOpen] = useState(true);
  return (
    <Stack sx={{ width: "100%", marginTop: "15px" }} spacing={2}>
      {open && (
        <Alert onClose={() => setOpen(false)}>
          You have reached a total of 5 locations!
        </Alert>
      )}
    </Stack>
  );
};
export default Warn;
