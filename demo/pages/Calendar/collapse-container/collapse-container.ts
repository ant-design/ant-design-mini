import { alipayComponent, useEvent, useState } from 'functional-mini/component'

interface Props {
  defaultCollapse?: boolean
  title: string
  handleClick(id: string): void
}

const CollapseContainer = (props: Props) => {
  const [collapse, setCollapse] = useState(props.defaultCollapse ?? true)

  useEvent('handleToggle', () => {
    setCollapse(v => !v)
  }, [setCollapse])

  return {
    collapse,
    containerTitle: props.title
  }
}

Component(alipayComponent(CollapseContainer))