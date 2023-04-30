import Image from 'next/image';
import {AiOutlineSearch} from "react-icons/ai";
import {VscAccount} from 'react-icons/vsc'
import {BiBellMinus} from "react-icons/bi";
import Link from "next/link";
import {useEffect, useState} from "react";

const Header = () => {
	const [scrolled, setScrolled] = useState<boolean>(false);
	useEffect(() => {
		const handleScroll = ()=>{
			if(window.scrollY > 0){
				setScrolled(true)
			}
			else{setScrolled(false)}
		}
		window.addEventListener("scroll",handleScroll);

		return ()=>window.removeEventListener("scroll", handleScroll)
	}, []);
	return (
		<header className={`${scrolled && "bg-slate-700 backdrop-filter backdrop-blur-lg bg-opacity-30 "}`}>
			<div className='flex items-center space-x-2 md:space-x-10'>
				<Image src={'/logo.svg'} alt={'logo'} width={56} height={56} className={'cursor-pointer object-contain'} />
				<ul className='space-x-4 md:flex hidden'>
					<li className='navLink'>Home</li>
					<li className='navLink'>Movies</li>
					<li className='navLink'>TV Shows</li>
					<li className='navLink'>New</li>
					<li className='navLink'>Popular</li>
				</ul>
			</div>
			<div className="flex items-center text-sm space-x-4 font-light">
				<AiOutlineSearch className="svg"/>
				<p className="hidden lg:inline">Kids</p>
				<BiBellMinus className="svg minus"/>
				<Link href={"/account"}>
					<VscAccount className="svg"/>
				</Link>
			</div>
		</header>
	);
};

export default Header;
