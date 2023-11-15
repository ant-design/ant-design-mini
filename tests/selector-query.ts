export type SelectorQueryCommand =
  | {
      type: 'boundingClientRect';
    }
  | {
      type: 'select';
      selector: string;
    };

export type MockSelect = (selector: string, index: number) => any;

export class SelectorQuery {
  get commands(): SelectorQueryCommand[] {
    return this._commands;
  }
  private constructor(
    private _commands: SelectorQueryCommand[],
    public readonly data: MockSelect
  ) {}

  select(selector) {
    return SelectorQuery.extends(this, {
      type: 'select',
      selector,
    });
  }
  boundingClientRect() {
    return SelectorQuery.extends(this, {
      type: 'boundingClientRect',
    });
  }

  exec(callback) {
    (async () => {
      const result = [];
      const index = new Map<string, number>();
      let selector: string | null = null;
      for (const command of this.commands) {
        switch (command.type) {
          case 'boundingClientRect': {
            if (selector === null) {
              throw new Error(
                `createSelectorQuery().boundingClientRect() must be called after createSelectQuery().select()`
              );
            }
            const currentIndex = index.get(selector) || 0;
            result.push((await this.data(selector, currentIndex)) ?? null);
            selector = null;
            index.set(selector, currentIndex + 1);
            break;
          }
          case 'select': {
            if (selector !== null) {
              throw new Error(
                `createSelectorQuery().select(${selector}).select(${command.selector}) is not supported.`
              );
            }
            selector = command.selector;
            break;
          }
          default:
            break;
        }
      }
      callback(result);
    })();
  }

  static extends(selector: SelectorQuery, command: SelectorQueryCommand) {
    const newCommands = selector.commands.concat(command);
    return new SelectorQuery(newCommands, selector.data);
  }
  static create(data: MockSelect) {
    return new SelectorQuery([], data);
  }
}

export const createSelectorQueryFactory = (data?: MockSelect) => {
  const defaultMock = () => {
    return null;
  };
  return () => {
    return SelectorQuery.create(data || defaultMock);
  };
};
