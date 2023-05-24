import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const Blog = () => {
  return (
    <>
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch',display:"block",margin:"15px auto" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Title" variant="outlined" />

    </Box>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch',display:"block",margin:"15px auto" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Text" variant="outlined" />

    </Box>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch',display:"block",margin:"15px auto" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Image" variant="outlined" />

    </Box>
    </>
  )
}

export default Blog