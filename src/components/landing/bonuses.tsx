
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export function Bonuses() {
  const bonuses = [
    {
      icon: '💰',
      title: 'Curso de Precificação',
      price: 'De R$97 por Grátis',
      description: 'Nunca mais cobre errado: saiba <b>exatamente quanto cobrar pra lucrar de verdade</b> com suas bolsas de crochê.',
    },
    {
      icon: '📝',
      title: 'Kit Papelaria Digital',
      price: 'De R$59 por Grátis',
      description: 'Organize seus pedidos e produção <b>sem perder tempo</b> — <b>mais vendas, menos dor de cabeça</b>.',
    },
    {
      icon: '🧶',
      title: 'Coleção Completa Croche Geral',
      price: 'De R$97 por Grátis',
      description: 'Acesse uma coleção completa de <b style="color: #000">Modelos Gerais de Croche de Sucesso</b> de 2024.',
    },
  ];

  return (
    <section id="bonuses" className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto text-center px-4">
        <p className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
          🎁 Bônus Exclusivos
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold font-headline mt-4 text-[#4D4237]">
          Inscreva-se Hoje e Leve Estes Presentes!
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-[#4D4237] text-lg">
          Estes bônus foram criados para <b>acelerar seu sucesso</b> e estão inclusos <b>gratuitamente</b> na sua inscrição.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {bonuses.map((bonus, index) => (
            <Card key={index} className={cn("border-0 shadow-lg text-center p-6 flex flex-col items-center", index === 0 ? "bg-green-50 border border-green-200" : "bg-card")}>
              <div className="text-5xl mb-4">
                {bonus.icon}
              </div>
              <h3 className="text-xl font-bold font-headline text-[#AE5A32] mt-1">{bonus.title}</h3>
              <p className="font-semibold text-sm text-foreground/70 mt-2">{bonus.price}</p>
              <p className="text-foreground mt-2 text-sm flex-grow" dangerouslySetInnerHTML={{ __html: bonus.description }}></p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
