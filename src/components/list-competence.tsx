import { ChevronRight } from "lucide-react";

interface ListItemProps {
  title: string;
}

function ListItem({ title }: ListItemProps) {
  return (
    <li className="flex gap-4">
      <ChevronRight className="mt-1 text-gray-500" />
      <div>
        <h2 className="text-[19px] text-gray-500">{title}</h2>
      </div>
    </li>
  );
}

export default function ListCompetence() {
  return (
    <div>
      <h1 className="mb-4 text-3xl text-gray-800">— Competências</h1>
      <ul className="flex flex-col gap-2">
        <ListItem title="Planejamento Financeiro Feito Sob Medida para Você." />
        <ListItem title="Apoio Para Todos os Tipos de Situação Financeira ." />
        <ListItem title="Mudando Seus Hábitos Financeiros Para o Futuro." />
        <ListItem title="Explicações Simples, Sem Complicação." />
        <ListItem title="Soluções que Funcionam." />
      </ul>
    </div>
  );
}
