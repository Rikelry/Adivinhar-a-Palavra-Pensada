export class SelectionModel {
  private counts = new Map<number, number>();

  add(col: number) {
    this.counts.set(col, (this.counts.get(col) || 0) + 1);
  }

  clear() {
    this.counts.clear();
  }

  toArray(): number[] {
    const result: number[] = [];

    this.counts.forEach((count, key) => {
      for (let i = 0; i < count; i++) result.push(key);
    });

    return result;
  }

  getCount(col: number): number {
    return this.counts.get(col) || 0;
  }
}