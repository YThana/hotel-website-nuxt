export interface CardData {
   id: number;
   img: string;
   title: string;
   about: string;
   tag?: string;
   type?: 'swiper-dish' | 'base';
}
