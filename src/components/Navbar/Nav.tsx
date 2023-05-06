import React from "react";

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
        <nav>
            <ul>
                {navItems.map((item) => (
                    <li key={item.id}>
                        <a href={item.url}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
