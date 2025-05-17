interface InstructionItemProps {
  title: string;
  subtitle: string;
  description: string;
}

function InstructionItem({
  title,
  subtitle,
  description,
}: InstructionItemProps) {
  return (
    <li className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <h1 className="text-3xl text-gray-800">{title}</h1>
      <div className="col-span-2 flex flex-col gap-6">
        <p className="text-2xl text-gray-500">{subtitle}</p>
        <p className="text-2xl text-gray-500">{description}</p>
      </div>
    </li>
  );
}

export default function Instructions() {
  return (
    <ul className="flex flex-col gap-20 px-4 py-14">
      <InstructionItem
        title="— Anamnese Financeira"
        subtitle="Entendendo o ponto de partida."
        description="Diagnóstico financeiro completo (renda, despesas, dívidas, patrimônio), mapeamento de hábitos e comportamento financeiro, controle orçamentário."
      />
      <InstructionItem
        title="— Estruturação e Blindagem"
        subtitle="Organizar, estabilizar e proteger."
        description="Planejamento mensal e categorização de gastos, gestão e eliminação de dívidas, formação de reserva de emergência, educação financeira, planejamento de metas (curto, médio e longo prazo)."
      />
      <InstructionItem
        title="— Crescimento e Liberdade"
        subtitle="Construir, investir e prosperar e proteger."
        description="Crescimento patrimonial, investimentos e liberdade financeira, planejamento da aposentadoria, proteção com seguros, e sucessão."
      />
    </ul>
  );
}
