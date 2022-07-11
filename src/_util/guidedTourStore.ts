import { ITourItem } from 'src/GuidedTour/TourItem/props';

type Iitems = ITourItem[];

interface ItemInfo {
  items?: Iitems;
  currentIndex?: number;
}

const buttonGroupKeys = [
  'nextButtonVisible',
  'lastButtonVisible',
  'jumpButtonVisible',
  'konwButtonVisible',
];

export class GuidedTourStore {
  protected itemsMap: ItemInfo;

  constructor() {
    this.itemsMap = {};
  }

  getGroup(key: string): ItemInfo | void {
    if (this.itemsMap[key]) {
      return this.itemsMap[key];
    }
  }

  addGroup(key: string): void {
    if (!this.itemsMap[key]) {
      this.itemsMap[key] = {
        items: [],
        onChange: null,
      };
    }
  }

  setCurrentIndex(key: string, index: number): void {
    if (this.itemsMap[key]) {
      this.itemsMap[key].currentIndex = index;
      this.itemsMap[key].items.forEach((i) => {
        i.setItemIndex(index);
      });
      if (this.itemsMap[key].setData) {
        const _index = this.getItems(key).findIndex((i) => i.index === index);
        if (this.getItems(key).length === 1) {
          this.itemsMap[key].setData(
            changeButtonVisible(['konwButtonVisible'])
          );
        } else {
          switch (_index) {
            case 0:
              this.itemsMap[key].setData(
                changeButtonVisible(['jumpButtonVisible', 'nextButtonVisible'])
              );
              break;

            case this.getItems(key).length - 1:
              this.itemsMap[key].setData(
                changeButtonVisible(['lastButtonVisible', 'konwButtonVisible'])
              );
              break;
            default:
              this.itemsMap[key].setData(
                changeButtonVisible(['lastButtonVisible', 'nextButtonVisible'])
              );
              break;
          }
        }
        this.itemsMap[key].setData({
          currentIndex: _index,
          items: this.getItems(key),
        });
      }
      if (this.itemsMap[key].onChange) {
        this.itemsMap[key].onChange(index);
      }
    }
  }
  setSteps(
    key: string,
    props: ITourItem & { setItemIndex: (index: number) => void }
  ): void {
    this.addGroup(key);
    if (this.itemsMap[key]) {
      if (!this.itemsMap[key].items) {
        this.itemsMap[key].items = [];
      }
      this.itemsMap[key].items.push(props);
    }
  }
  setButtons(
    key: string,
    setData: (res: Record<string, boolean>) => void,
    onChange: (index: number) => void
  ) {
    if (this.itemsMap[key]) {
      this.itemsMap[key].setData = setData;
      this.itemsMap[key].onChange = onChange;
    }
  }
  getItems(key: string): Iitems {
    return this.itemsMap[key].items || [];
  }
  getCurrentIndex(key: string): number {
    return this.itemsMap[key].currentIndex;
  }
  removeItem(key: string, index: number): void {
    if (this.itemsMap[key] && this.itemsMap[key].items) {
      const _index = this.itemsMap[key].items.findIndex(({ index: _index }) => {
        return index === _index;
      });
      this.itemsMap[key].items.splice(_index, 1);
      if (index === this.itemsMap[key].items.currentIndex) {
        this.itemsMap[key].items.currentIndex = null;
      }
    }
  }
  removeGroup(key: string): void {
    if (this.itemsMap[key]) {
      this.itemsMap[key] = null;
    }
  }
}
const changeButtonVisible = (v: string[]) => {
  const newData = {};
  buttonGroupKeys.forEach((key) => {
    if (v.includes(key)) {
      newData[key] = true;
    } else {
      newData[key] = false;
    }
  });
  return newData;
};
