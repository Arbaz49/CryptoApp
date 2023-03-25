import { AppBar, MenuItem, Select, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AuhtModal from './Authentication/AuhtModal'

const Header = () => {
    const [select,setselect]=useState("INR")
  return (
    <div>
    <AppBar color="transparent" position='static'>
        <Container>
            <Toolbar>
                <Typography className='title'><Link style={{textDecoration:"none", color:"gold"}} to="/">Crypto Hunter</Link></Typography>
                <Select
                variant='outlined'
                value={select}
                onChange={(e)=>setselect(e.target.value)}
                style={{
                    width:100,
                    height:30,
                    marginLeft:15,
                    color:"white"
                }}
                >
                    <MenuItem value={"USD"}>USD</MenuItem>
                    <MenuItem value={"INR"}>INR</MenuItem>

                </Select>
            </Toolbar>
        </Container>

    </AppBar>
    </div>
  )
}

export default Header
