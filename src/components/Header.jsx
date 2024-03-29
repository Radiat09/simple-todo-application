/* eslint-disable */
import { Box, Typography } from "@mui/material";

const Header = ({ text, count, bg }) => {
  return (
    <Box className={`w-full ${bg} rounded-md`}>
      <Typography
        variant="h4"
        className="h-16 uppercase text-white font-medium flex justify-center items-center gap-1 "
      >
        {text}
        <span className="rounded-full py-1 px-2 bg-white text-black text-sm font-medium">
          {count}
        </span>
      </Typography>
    </Box>
  );
};
export default Header;
