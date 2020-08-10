export interface MementoInterface<MomentType> {
  hydrate(): MomentType;
  dehydrate(moment: MomentType): any;
}