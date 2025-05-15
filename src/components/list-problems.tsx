import { ChevronRight } from "lucide-react";

interface ListItemProps {
  title: string;
  subtitle1: string;
  subtitle2: string;
}

function ListItem({ title, subtitle1, subtitle2 }: ListItemProps) {
  return (
    <li className="flex gap-4">
      <ChevronRight className="mt-1 text-gray-500" />
      <div>
        <h1 className="text-[19px] font-semibold text-gray-500">{title}</h1>
        <h2 className="text-[19px] text-gray-500">{subtitle1}</h2>
        <h2 className="text-[19px] text-gray-500">{subtitle2}</h2>
      </div>
    </li>
  );
}

export default function ListProblems() {
  return (
    <div>
      <h1 className="mb-12 text-3xl text-gray-800">
        — Geralmente, Os Maiores Problemas São:
      </h1>
      <ul className="flex flex-col gap-6">
        <ListItem
          title="💬 Falar sobre dinheiro ainda é difícil — e tudo bem."
          subtitle1="Ambiente seguro, profissional e sem julgamentos."
          subtitle2="Cada informação é tratada com total sigilo."
        />
        <ListItem
          title="🧭 Não sabe por onde começar? Essa é a minha especialidade."
          subtitle1="Transformo confusão em estratégia."
          subtitle2="Você não precisa chegar pronto — só disposto(a) a mudar."
        />
        <ListItem
          title="🔒 Transparência e sigilo vêm em primeiro lugar."
          subtitle1="Seu planejamento é conduzido com ética e confidencialidade."
          subtitle2="Respeito absoluto à sua história financeira."
        />
        <ListItem
          title="⏱️ Sem tempo? O plano é pensado pra sua rotina."
          subtitle1="Metodologia objetiva e funcional."
          subtitle2="Soluções práticas, sem fórmulas complicadas."
        />
        <ListItem
          title="📉 Está endividado(a)? Isso não te define."
          subtitle1="Recomeços são possíveis e fazem parte da jornada."
          subtitle2="Soluções práticas, sem fórmulas complicadas"
        />
        <ListItem
          title="🧩 Mesmo os casos mais difíceis têm solução."
          subtitle1="O planejamento se adapta à sua realidade."
          subtitle2="Toda situação tem um caminho — e a gente constrói juntos."
        />
      </ul>
    </div>
  );
}
