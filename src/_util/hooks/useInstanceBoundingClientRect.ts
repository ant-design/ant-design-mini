import { useComponent } from 'functional-mini/component';
import { getInstanceBoundingClientRect } from '../jsapi/get-instance-bounding-client-rect';

export const useInstanceBoundingClientRect = () => {
  const instance = useComponent();
  function getInstance() {
    if (instance.$id) {
      return my;
    }
    return instance;
  }

  async function getBoundingClientRectWithId(prefix: string) {
    return await getInstanceBoundingClientRect(
      getInstance(),
      `${prefix}${instance.$id ? `-${instance.$id}` : ''}`
    );
  }
  async function getBoundingClientRect(query: string) {
    return await getInstanceBoundingClientRect(getInstance(), query);
  }

  async function getBoundingClientRectWithBuilder(
    builder: (id: string) => string
  ) {
    return await getInstanceBoundingClientRect(
      getInstance(),
      builder(instance.$id ? `-${instance.$id}` : '')
    );
  }

  return {
    getBoundingClientRect,
    getBoundingClientRectWithId,
    getBoundingClientRectWithBuilder,
  };
};
