
'use client';

import Image from 'next/image';
import { Button } from '../ui/button';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Eye } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const allImages = [
  { id: 'amigurumi-1', imageUrl: 'https://i.imgur.com/uzZfldw.png', description: 'Amigurumi 1', imageHint: 'amigurumi crochet', category: 'amigurumis' },
  { id: 'amigurumi-2', imageUrl: 'https://i.imgur.com/iNzQrU6.png', description: 'Amigurumi 2', imageHint: 'amigurumi crochet', category: 'amigurumis' },
  { id: 'amigurumi-3', imageUrl: 'https://i.imgur.com/vabjCPq.png', description: 'Amigurumi 3', imageHint: 'amigurumi crochet', category: 'amigurumis' },
  { id: 'amigurumi-4', imageUrl: 'https://i.imgur.com/bi2TmGS.jpeg', description: 'Amigurumi 4', imageHint: 'amigurumi crochet', category: 'amigurumis' },
  { id: 'amigurumi-5', imageUrl: 'https://i.imgur.com/02ifk7U.png', description: 'Amigurumi 5', imageHint: 'amigurumi crochet', category: 'amigurumis' },
  { id: 'amigurumi-6', imageUrl: 'https://i.imgur.com/JmP7CCO.png', description: 'Amigurumi 6', imageHint: 'amigurumi crochet', category: 'amigurumis' },
  { id: 'amigurumi-7', imageUrl: 'https://i.imgur.com/u6z3ljd.png', description: 'Amigurumi 7', imageHint: 'amigurumi crochet', category: 'amigurumis' },
  { id: 'amigurumi-8', imageUrl: 'https://i.imgur.com/ae7NVqx.png', description: 'Amigurumi 8', imageHint: 'amigurumi crochet', category: 'amigurumis' },
  { id: 'amigurumi-9', imageUrl: 'https://i.imgur.com/yvGWYev.jpeg', description: 'Amigurumi 9', imageHint: 'amigurumi crochet', category: 'amigurumis' },
  { id: 'amigurumi-10', imageUrl: 'https://i.imgur.com/VWGEAKt.png', description: 'Amigurumi 10', imageHint: 'amigurumi crochet', category: 'amigurumis' },
  { id: 'praia-1', imageUrl: 'https://i.imgur.com/VGoHZJl.png', description: 'Amigurumi que brilha no escuro 1', imageHint: 'glow in the dark amigurumi', category: 'praia' },
  { id: 'praia-2', imageUrl: 'https://i.imgur.com/UmX2kzR.png', description: 'Amigurumi que brilha no escuro 2', imageHint: 'glow in the dark amigurumi', category: 'praia' },
  { id: 'praia-3', imageUrl: 'https://i.imgur.com/7rKAJ0x.png', description: 'Amigurumi que brilha no escuro 3', imageHint: 'glow in the dark amigurumi', category: 'praia' },
  { id: 'praia-4', imageUrl: 'https://i.imgur.com/dajBpSw.png', description: 'Amigurumi que brilha no escuro 4', imageHint: 'glow in the dark amigurumi', category: 'praia' },
  { id: 'praia-5', imageUrl: 'https://i.imgur.com/Tc64IjR.png', description: 'Amigurumi que brilha no escuro 5', imageHint: 'glow in the dark amigurumi', category: 'praia' },
  { id: 'praia-6', imageUrl: 'https://i.imgur.com/WdUSQaQ.png', description: 'Amigurumi que brilha no escuro 6', imageHint: 'glow in the dark amigurumi', category: 'praia' },
  { id: 'praia-7', imageUrl: 'https://i.imgur.com/S4nww9o.png', description: 'Amigurumi que brilha no escuro 7', imageHint: 'glow in the dark amigurumi', category: 'praia' },
  { id: 'abraca-cortina-1', imageUrl: 'https://i.imgur.com/A8J5eJ6.png', description: 'Abraça Cortina 1', imageHint: 'curtain tieback crochet', category: 'abraca-cortina' },
  { id: 'abraca-cortina-2', imageUrl: 'https://i.imgur.com/foMxRYy.png', description: 'Abraça Cortina 2', imageHint: 'curtain tieback crochet', category: 'abraca-cortina' },
  { id: 'abraca-cortina-3', imageUrl: 'https://i.imgur.com/727QwWR.png', description: 'Abraça Cortina 3', imageHint: 'curtain tieback crochet', category: 'abraca-cortina' },
  { id: 'abraca-cortina-4', imageUrl: 'https://i.imgur.com/oFHFWxA.png', description: 'Abraça Cortina 4', imageHint: 'curtain tieback crochet', category: 'abraca-cortina' },
  { id: 'abraca-cortina-5', imageUrl: 'https://i.imgur.com/DdOZBLm.png', description: 'Abraça Cortina 5', imageHint: 'curtain tieback crochet', category: 'abraca-cortina' },
  { id: 'abraca-cortina-6', imageUrl: 'https://i.imgur.com/FmYlmHw.png', description: 'Abraça Cortina 6', imageHint: 'curtain tieback crochet', category: 'abraca-cortina' },
];


export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const renderGalleryGrid = (category: 'amigurumis' | 'praia' | 'abraca-cortina') => {
    const images = allImages.filter(img => img.category === category);
    if (images.length === 0 && (category === 'praia' || category === 'abraca-cortina')) {
      return (
        <div className="text-center py-10 text-foreground/70">
          <p>As fotos para esta seção serão adicionadas em breve!</p>
        </div>
      )
    }
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mt-8">
        {images.map((image) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group bg-card cursor-pointer"
              onClick={() => setSelectedImage(image.imageUrl)}
            >
              <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full aspect-square transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={image.imageHint}
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/80 backdrop-blur-sm rounded-full p-3">
                  <Eye className="w-6 h-6 text-[#AE5A32]" />
                </div>
              </div>
            </div>
        ))}
      </div>
    );
  };


  return (
    <section id="gallery" className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto text-center px-4">
        <div className="inline-block bg-card text-accent-foreground px-3 py-1 rounded-lg text-sm font-semibold border border-border shadow-sm">
          Galeria de Amigurumis
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-headline mt-4 text-[#563209]">
          + de 2.000 Modelos Incríveis
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-foreground text-lg">
          Todos os modelos foram criados para serem <b>lindos, vendáveis</b> e ideais para quem ama artesanato.
        </p>

        <Tabs defaultValue="amigurumis" className="w-full max-w-lg mx-auto mt-8">
          <TabsList className="h-auto p-2">
            <TabsTrigger value="amigurumis" className="text-base">AMIGURUMIS</TabsTrigger>
            <TabsTrigger value="praia" className="text-base">BRILHAM NO ESCURO</TabsTrigger>
            <TabsTrigger value="abraca-cortina" className="text-base">ABRAÇA CORTINA</TabsTrigger>
          </TabsList>
          <TabsContent value="amigurumis">
            {renderGalleryGrid('amigurumis')}
          </TabsContent>
          <TabsContent value="praia">
            {renderGalleryGrid('praia')}
          </TabsContent>
          <TabsContent value="abraca-cortina">
            {renderGalleryGrid('abraca-cortina')}
          </TabsContent>
        </Tabs>
        
        {selectedImage && (
          <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
            <DialogContent className="max-w-3xl p-4 sm:p-6 border-0">
               <DialogTitle className="sr-only">Visualização da imagem da bolsa de crochê</DialogTitle>
               <DialogDescription className="text-center text-foreground/80 -mb-2 sm:mb-0">
                Um dos mais de 2000 padrões exclusivos que você vai aprender no Acervo.
               </DialogDescription>
              <Image 
                src={selectedImage}
                alt="Visualização da bolsa de crochê"
                width={800}
                height={800}
                className="object-contain w-full h-full rounded-md"
              />
            </DialogContent>
          </Dialog>
        )}

        <div className="mt-12 text-lg space-y-2">
          <p><b>Um único gráfico resolve pouco.</b><br/><b>Um acervo completo muda tudo.</b></p>
          <p>Enquanto <b>muitos vendem UMA receita por R$20,</b> aqui você acessa + de 2.000 receitas por <span className="text-xl font-bold">menos de R$0,03 cada modelo.</span></p>
        </div>
        <Button size="lg" className="mt-4 h-14 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium" asChild>
          <a href="#pricing">
            QUERO A COLEÇÃO COMPLETA
          </a>
        </Button>
      </div>
    </section>
  );
}
