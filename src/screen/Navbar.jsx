import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
// import { Link } from "react-router-dom";

const Link = ({ page, selectedPage, setSelectedPage, onLinkClick }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      offset={80}
      onClick={() => {
        // Update state after a small delay to allow scroll to start
        setTimeout(() => {
          setSelectedPage(lowerCasePage);
          if (onLinkClick) {
            onLinkClick();
          }
        }, 100);
      }}
    >
      {page}
    </AnchorLink>
  );
};

export const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red navbar-blur";
  return (
    <div>
      <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-3 transition-all duration-300 shadow-lg`}>
        <div className="flex items-center justify-between mx-auto w-5/6">
          <h4 className="font-playfair text-3xl font-bold">
            T<span className="text-xl">arik </span>
          </h4>

          {isAboveSmallScreens ? (
            <div className="flex justify-between gap-12 font-opensans text-sm font-semibold">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Experience"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Education"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Achievements"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          ) : (
            <button
              className="rounded-full bg-red p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img alt="menu-icon" src="../assets/menu-icon.svg" />
            </button>
          )}

          {/* MOBILE MENU POPUP */}
          {!isAboveSmallScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
              {/* CLOSE ICON */}
              <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <img alt="close-icon" src="../assets/close-icon.svg" />
                </button>
              </div>

              {/* MENU ITEMS */}
              <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  onLinkClick={() => setIsMenuToggled(false)}
                />
                <Link
                  page="Skills"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  onLinkClick={() => setIsMenuToggled(false)}
                />
                <Link
                  page="Experience"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  onLinkClick={() => setIsMenuToggled(false)}
                />
                <Link
                  page="Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  onLinkClick={() => setIsMenuToggled(false)}
                />
                <Link
                  page="Education"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  onLinkClick={() => setIsMenuToggled(false)}
                />
                <Link
                  page="Achievements"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  onLinkClick={() => setIsMenuToggled(false)}
                />
                <Link
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  onLinkClick={() => setIsMenuToggled(false)}
                />
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
