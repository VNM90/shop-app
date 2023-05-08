import React from "react";
import { AppBar, Toolbar, Link, Box } from "@mui/material";

interface NavItem {
    id: number;
    name: string;
    url: string;
}

const navItems: NavItem[] = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Product", url: "/product" },
    { id: 3, name: "Cart", url: "/cart" }
]

const Nav: React.FC = () => {
    return (
        <AppBar sx={{position: "sticky"}}>
            <Toolbar>
                {navItems.map((item) => (
                    <Box key={item.id} sx={{ margin: 2}}>
                        <Link href={item.url} sx={{ textDecoration: "none", color: "inherit", typography: "h6"}}>
                            {item.name}</Link>
                    </Box>
                ))}
            </Toolbar>
        </AppBar>
    );
};

export default Nav;
