export class Heart {
  constructor(
    public isFull: boolean,
    public fullHeart: string = '../assets/full-heart.svg',
    public emptyHeart: string = '../assets/empty-heart.svg'
  ) {}

  public showHeart: string = this.isFull ? this.fullHeart : this.emptyHeart;
}
