import { ChevronRight } from "lucide-react";

export default function Pricing() {
  return (
    <div className="px-4 py-20">
      <h1 className="mb-10 max-w-4xl text-4xl text-gray-800">
        O valor de investimento para iniciarmos o seu Planejamento Financeiro.
      </h1>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-12 xl:flex-row">
          <img
            src="stacks-coins-arranged-bar-graph.webp"
            alt="Pilhas de moedas organizadas como um gráfico de barra"
            className="w-2xl rounded-2xl"
          />
          <div className="py-8">
            <h1 className="mb-4 text-3xl text-gray-800">
              — Fase de Integração
            </h1>
            <p className="mb-8 text-[19px] text-gray-500">
              O investimento para essa fase é de{" "}
              <strong className="font-semibold">R$ 200 por mês</strong>, que
              inclui:
            </p>
            <ul className="flex flex-col gap-2 text-[19px] text-gray-500">
              <li className="mt-1 flex gap-4">
                <ChevronRight className="text-gray-500" />
                <div>
                  <strong className="font-semibold">
                    Duas reuniões mensais
                  </strong>{" "}
                  (45 a 60 minutos de duração cada).
                </div>
              </li>

              <li className="mt-1 flex gap-4">
                <ChevronRight className="text-gray-500" />
                <div>
                  Durante as reuniões, abordaremos:
                  <ul className="ml-6 list-disc">
                    <li>Planejamento financeiro</li>
                    <li>Avaliação das estratégias</li>
                    <li>Gestão das finanças</li>
                    <li>Demonstração de resultados</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-12 xl:flex-row">
          <img
            className="w-2xl rounded-2xl"
            src="close-up-virtual-classroom.webp"
            alt="Home assistindo uma aula"
          />
          <div className="py-8">
            <h1 className="mb-4 text-3xl text-gray-800">— Após a integração</h1>
            <ul className="flex flex-col gap-2 text-[19px] text-gray-500">
              <li className="mt-1 flex gap-4">
                <ChevronRight className="text-gray-500" />
                <div>
                  <strong className="font-semibold">R$ 250 por mês</strong> para{" "}
                  <strong className="font-semibold">uma reunião mensal</strong>
                </div>
              </li>

              <li className="mt-1 flex gap-4">
                <ChevronRight className="text-gray-500" />
                <div>
                  <strong className="font-semibold">
                    Suporte de 30 minutos via WhatsApp
                  </strong>
                  , que pode ser feito por vídeo ou mensagens, para tirar
                  dúvidas ou receber orientações.
                </div>
              </li>

              <li className="mt-10 flex gap-4 font-semibold">
                <span>Suporte Contínuo</span>
              </li>

              <li className="mt-1 flex gap-4 font-bold">
                <span>
                  Você terá atendimento contínuo via WhatsApp, para esclarecer
                  dúvidas sempre que precisar.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
