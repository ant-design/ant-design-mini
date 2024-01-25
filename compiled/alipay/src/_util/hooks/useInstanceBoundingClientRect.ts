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

  return {
    getBoundingClientRectWithId,
  };
};
