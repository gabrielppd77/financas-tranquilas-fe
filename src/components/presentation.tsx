import Button from "./button";
import Instagram from "../assets/instagram.svg?react";
import sections from "../consts/sections";

export default function Presentation() {
  return (
    <div className="flex justify-between px-6 py-16">
      <div className="flex flex-col gap-4">
        <h1 className="mt-10 text-5xl">Olá! Prazer, Laura.</h1>
        <h1 className="text-5xl">Sua Planejadora Financeira.</h1>
        <Button
          className="mt-10 h-16 w-64 text-xl"
          onClick={() => window.open(sections.ContactMe)}
        >
          Envie uma mensagem
        </Button>
        <a
          className="mt-52 flex w-28 items-center justify-center gap-2"
          href=""
          onClick={(e) => {
            e.preventDefault();
            window.open("https://www.instagram.com/lauraalvesoficial/");
          }}
        >
          <div>Instagram</div>
          <Instagram width={25} height={25} />
        </a>
      </div>
      <img
        src="src/assets/presentation.webp"
        alt="Foto de apresentação"
        className="h-[900px] w-[700px] rounded-2xl"
      />
    </div>
  );
}
