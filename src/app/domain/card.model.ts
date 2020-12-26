export class Card {
    id: string;
    image?: string;
    youTubeVideo?: string;
    title?: string;
    description?: string;
    uploadDate?: Date;
    type: CardType;
}

export enum CardType {
    Image = 'image',
    Video = 'video'
}
