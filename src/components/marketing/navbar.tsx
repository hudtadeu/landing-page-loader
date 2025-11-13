"use client";

import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import MobileMenu from "./mobile-menu";

// Função para scroll suave até a seção
const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    }
};

const Navbar = () => {
    return (
        <header className="sticky top-0 w-full h-16 bg-background/80 backdrop-blur-sm z-50">
            <Wrapper className="h-full">
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <img src="/images/logo1.png" alt="XML Loader" className="w-16 h-auto" />
                        </Link>
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        <ul className="flex items-center gap-8">
                            {NAV_LINKS.map((link, index) => (
                                <li key={index} className="text-sm font-medium -1 link">
                                    <a
                                        href={link.href}
                                        onClick={e => {
                                            if (link.href.startsWith("#")) {
                                                e.preventDefault();
                                                scrollToSection(link.href);
                                            }
                                        }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/login" className="hidden lg:block">
                            <Button variant="outline">
                                Entrar
                            </Button>
                        </Link>
                        <Button
                            variant="blue"
                            className="hidden lg:block"
                            onClick={e => {
                                e.preventDefault();
                                scrollToSection("#contact");
                            }}
                        >
                            Cadastrar
                        </Button>
                        <MobileMenu />
                    </div>
                </div>
            </Wrapper>
        </header>
    )
};

export default Navbar
