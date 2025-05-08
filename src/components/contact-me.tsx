import { useState } from "react";

import Button from "./button";

import emailjs from "@emailjs/browser";

const initialDataForm = {
  name: "",
  email: "",
  message: "",
};

export default function ContactMe() {
  const [dataForm, setDataForm] = useState(initialDataForm);
  const [isLoading, setLoading] = useState(false);

  async function handleSendEmail(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      setLoading(true);

      const templateParams = {
        from_name: dataForm.name,
        email: dataForm.email,
        message: dataForm.message,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setDataForm(initialDataForm);
    } catch (e) {
      console.error(e);
      alert("Ocorreu um problema inesperado");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="py-20">
      <div className="flex gap-4">
        <div className="w-full">
          <h1 className="px-5 py-3 text-4xl">Contate-me</h1>
          <form
            className="flex flex-col items-center gap-4 py-5"
            onSubmit={handleSendEmail}
          >
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
                required
                value={dataForm.name}
                onChange={(e) =>
                  setDataForm((prev) => ({ ...prev, name: e.target.value }))
                }
                maxLength={255}
                autoComplete="name"
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
                required
                value={dataForm.email}
                onChange={(e) =>
                  setDataForm((prev) => ({ ...prev, email: e.target.value }))
                }
                maxLength={255}
                autoComplete="email"
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
                required
                value={dataForm.message}
                onChange={(e) =>
                  setDataForm((prev) => ({ ...prev, message: e.target.value }))
                }
                maxLength={500}
              />
            </div>

            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Carregando..." : "Envie uma mensagem"}
            </Button>
          </form>
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
