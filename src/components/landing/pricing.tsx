
'use client';

import { Check, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';

export function Pricing() {
  const features = [
    { icon: '✅', text: '<b>Acesso vitalício</b> ao Acervo Completo + futuras atualizações' },
    { icon: '🧸', text: 'Mais de <b>2.000 receitas</b> de amigurumis, organizadas e prontas para uso' },
    { icon: '🧶', text: '<b>Passo a passo detalhado</b>, para acompanhar no seu ritmo, quantas vezes quiser' },
    { icon: '📚', text: '<b>PDFs completos</b> com todas as receitas e instruções' },
    { icon: '🧵', text: 'Modelos ideais para <b>iniciantes e artesãs experientes</b>' },
    { icon: '💬', text: '<b>Comunidade exclusiva</b> para trocar experiências e tirar dúvidas' },
    { icon: '🚀', text: '<b>Novas receitas</b> adicionadas sem custo sempre que disponíveis' },
    { icon: '🔒', text: 'Acesso garantido ao acervo por <b>tempo ilimitado</b>' },
  ];
  
  const bonusFeature = { icon: '🎁', text: '<b>Bônus especiais</b> para ajudar você a evoluir e lucrar com amigurumis' };


  return (
    <section id="pricing" className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <div className="inline-flex items-center gap-2 bg-card border border-border px-3 py-1 rounded-lg text-sm font-semibold text-foreground shadow-sm">
            <Star className="w-4 h-4 text-primary" />
            <span>Inscrição</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-headline mt-4 text-[#4D4237]"><b>Garanta Sua Vaga</b></h2>
        <p className="mt-4 text-lg text-foreground">
          💎 Conteúdo avaliado em mais de R$187<br/>
          <b className="text-black">Hoje disponível por um Valor Simbólico.</b>
        </p>
        <Card className="max-w-md mt-12 w-full shadow-2xl border-2 border-primary/50 bg-card relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
            <div className="bg-primary text-primary-foreground rounded-full px-4 py-1.5 text-sm font-semibold whitespace-nowrap flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                Acesso Vitalício
            </div>
          </div>
          <CardHeader className="items-center pt-12">
            <CardTitle className="font-bold font-headline text-primary">Plano Completo</CardTitle>
            <CardDescription className="text-base text-center max-w-xs text-foreground">Aproveite <b>acesso total e para sempre</b> a todas as aulas, bônus e atualizações!</CardDescription>
            <div className="mt-4 text-center">
                <p className="text-lg text-black">💰De <span className="line-through">R$199</span> por</p>
                <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-extrabold text-black"><b>R$29</b></span>
                    <span className="text-3xl font-extrabold text-black"><b>,99</b></span>
                </div>
                 <p className="text-sm text-black flex items-center gap-2 justify-center mt-2 font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <b>Oferta exclusiva por tempo limitado!</b>
                </p>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            
            <div className="w-full text-left my-6 border-t border-border/50 pt-6">
                <h3 className="font-bold text-center mb-4 font-headline text-black"><b>Você vai receber:</b></h3>
                <ul className="space-y-4">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <span className="text-xl">{feature.icon}</span>
                        <span className="text-base text-foreground mt-px" dangerouslySetInnerHTML={{ __html: feature.text }}></span>
                    </li>
                ))}
                </ul>
                <div className="text-left mt-4 bg-primary/10 p-4 rounded-md flex items-start gap-3">
                  <span className="text-xl">{bonusFeature.icon}</span>
                  <p className="font-bold text-black mt-px" dangerouslySetInnerHTML={{ __html: bonusFeature.text }}></p>
                </div>
            </div>
            <Button
              asChild
              size="lg"
              className='w-full h-14 text-lg font-medium text-white'
              style={{ backgroundColor: '#478552' }}
            >
              <a href="https://checkout.bolsasdesucesso.com/VCCL1O8SCRE5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles mr-2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
                QUERO ACESSO VITALÍCIO
              </a>
            </Button>
          </CardContent>
          <CardFooter className="flex-col gap-2 px-6 pb-6">
            <Image
              src="https://i.imgur.com/YH11xZr.png"
              alt="Compra segura e garantia"
              width={300}
              height={46}
              className="mt-4"
              data-ai-hint='secure payment'
            />
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
