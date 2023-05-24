import { useState } from "react";
import './Header.css';

export default function Header() {
  const [menuSlide, setMenuSlide] = useState('fa-house');

  function slide() {
    if (menuSlide === 'fa-house') {
      setMenuSlide('fa-bars');
    } else {
      setMenuSlide('fa-house');
    }
  }

  return (
    <>
      <button 
        className={`menu-bar`} 
        onClick={() => slide()}
      >
        <i className={`fa-solid ${menuSlide}`}></i>
      </button>
      <nav className={`topNav ${menuSlide === 'fa-bars' && 'show-menu'}`}>
        <a href="#biography" className="topNav__link">Biography</a>
        <a href="#albums" className="topNav__link">Albums</a>
        <a href="#favorites" className="topNav__link">Favorite Songs</a>
        <a href="#socials" className="topNav__link">Social Media</a>
      </nav>
      <hgroup className="title">
        <h1 className="title__heading">EMIN<span className="title__backwardsE">E</span>M</h1>
        <p className="title__subTitle">The Real Slim Shady</p>
      </hgroup>

    </>
  )
}