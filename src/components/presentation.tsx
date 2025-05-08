import Button from "./button";

import Instagram from "../assets/instagram.svg?react";
import WhatsApp from "../assets//whatsapp.svg?react";

import sections from "../consts/sections";

export default function Presentation() {
  function gotToContactMe() {
    document
      .getElementById(sections.ContactMe)
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="flex justify-between px-6 py-16">
      <div className="flex flex-col gap-4">
        <h1 className="mt-10 text-5xl">Olá! Prazer, Laura.</h1>
        <h1 className="text-5xl">Sua Planejadora Financeira.</h1>
        <Button
          className="mt-10 h-16 w-64 text-xl"
          onClick={() => gotToContactMe()}
        >
          Envie uma mensagem
        </Button>
        <a
          className="mt-40 flex w-28 items-center justify-center gap-2"
          href=""
          onClick={(e) => {
            e.preventDefault();
            window.open("https://www.instagram.com/lauraalvesoficial/");
          }}
        >
          <div>Instagram</div>
          <Instagram width={25} height={25} />
        </a>

        <a
          className="flex w-28 items-center justify-center gap-2"
          href=""
          onClick={(e) => {
            e.preventDefault();
            window.open("https://wa.me/553298319365");
          }}
        >
          <div>WhatsApp</div>
          <WhatsApp width={25} height={25} />
        </a>
      </div>
      <img
        src="presentation.webp"
        alt="Foto de apresentação"
        className="h-[900px] w-[700px] rounded-2xl"
      />
    </div>
  );
}
