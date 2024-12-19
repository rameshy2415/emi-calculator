import { Box } from "@mui/material"


const Wrapper  = ({children}) =>{
    return (
        <>
        <Box
              sx={{
                maxWidth: 600,
                md: { minWidth: 600 },
                margin: "auto",
              }}
            >
            {children}
        </Box>
        </>
    )
}

export default  Wrapper;