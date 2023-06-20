import styled from "@emotion/styled";
import { Banner, Logo, Menu, Popup } from "Components/HeaderComponents";
import { useEffect, useRef, useState } from "react";

const HeaderBg = styled.div`
  width: 100%;
  height: 10%;
  min-height: 100px;
  min-width: 900px;
  display: grid;
  grid-template-columns: 400px;
  grid-template-rows: 50% 50%;
`;

const Header = () => {
  const modalRef = useRef();
  const openRef = useRef();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleCloseModal = (e) => {
      if (
        !openRef.current.contains(e.target) &&
        !modalRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener("mousedown", handleCloseModal);
    return () => window.removeEventListener("mousedown", handleCloseModal);
  }, [modalRef]);

  return (
    <HeaderBg>
      <Logo />
      <Banner open={open} setOpen={setOpen} openRef={openRef} />
      <Popup open={open} setOpen={setOpen} modalRef={modalRef} />
      <Menu />
    </HeaderBg>
  );
};

export default Header;
