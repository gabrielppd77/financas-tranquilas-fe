import Button from "./button";

export default function ContactMe() {
  return (
    <div className="py-20">
      <div className="flex gap-4">
        <div className="w-full">
          <h1 className="px-5 py-3 text-4xl">Contate-me</h1>
          <div className="flex flex-col items-center gap-4 py-5">
            <div className="flex w-full items-center justify-center gap-4">
              <label
                htmlFor="nome-input"
                className="w-32 text-end text-slate-500"
              >
                Nome
              </label>
              <input
                id="nome-input"
                className="h-10 w-96 rounded border border-slate-300 px-4"
              />
            </div>

            <div className="flex w-full items-center justify-center gap-4">
              <label
                htmlFor="email-input"
                className="w-32 text-end text-slate-500"
              >
                E-mail
              </label>
              <input
                id="email-input"
                placeholder="@"
                className="h-10 w-96 rounded border border-slate-300 px-4"
              />
            </div>

            <div className="flex w-full justify-center gap-4">
              <label
                htmlFor="mensagem-input"
                className="w-32 text-end text-slate-500"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem-input"
                className="w-96 resize-none rounded border border-slate-300 px-4 py-4"
                rows={5}
              />
            </div>

            <Button>Envie uma mensagem</Button>
          </div>
        </div>

        <img
          src="profile.webp"
          alt="Foto de perfil"
          className="h-[624px] w-[468px] rounded-2xl"
        />
      </div>
    </div>
  );
}
