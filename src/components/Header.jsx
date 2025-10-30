import Button from '@mui/material/Button';
import logo from '../images/Logo.png'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    return (
        <>
            <div className='flex items-center justify-between p-5'>
                <div className='flex items-center'>
                    <img src={logo} alt="Not Found" className='md:w-auto w-[100px]'/>
                    <div className='hidden md:flex items-center gap-5 ml-10'>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label" sx={{
                                color: "#FCD54C",
                                "&.Mui-focused": {
                                    color: "#FCD54C",
                                },
                            }}>BUY</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="BUY"
                            >
                                <MenuItem>Category number one</MenuItem>
                                <MenuItem>Apartments in Dubai</MenuItem>
                                <MenuItem>Category number twenty five</MenuItem>
                            </Select>
                        </FormControl>
                        <Link to={"/"}>
                        <p>MAIN</p>
                        </Link>
                        <Link to={"/blog"}>
                        <p>BLOG</p>
                        </Link>
                        <Link to={"/about"}>
                        <p>ABOUT</p>
                        </Link>
                        <Link to={"/contact"}>
                        <p>CONTACT</p>
                        </Link>
                    </div>
                </div>
                <div className='hidden md:flex gap-5'>
                    <Button sx={{backgroundColor:"#FCD54C", color:"black", fontWeight:"600"}}>Book a consultation</Button>
                    <div>
                        <Button sx={{color:"#FCD54C"}}>EN</Button>
                        <Button sx={{color:"#929292"}}>RU</Button>
                    </div>
                    <p>+7 (212) 674-25-10</p>
                </div>
                <div className='md:hidden flex'>
                <MenuIcon />
                </div>
            </div>
        </>
    )
}
