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
    <div className="mb-10 flex flex-col items-center justify-between gap-2 px-6 py-4 xl:flex-row xl:items-start">
      <div className="my-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl sm:text-5xl sm:text-nowrap">
            Olá! Prazer, Laura.
          </h1>
          <h1 className="text-4xl sm:text-5xl sm:text-nowrap">
            Sua Planejadora Financeira.
          </h1>
        </div>

        <Button className="h-16 w-64 text-xl" onClick={() => gotToContactMe()}>
          Envie uma mensagem
        </Button>

        <div className="flex flex-col gap-6">
          <a
            className="flex w-28 items-center justify-center gap-2"
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
      </div>
      <img
        src="presentation.webp"
        alt="Foto de apresentação"
        className="rounded-2xl sm:h-[900px] sm:w-[700px]"
      />
    </div>
  );
}
