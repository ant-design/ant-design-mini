import useLocaleValue from "../../../../../theme/hooks/useLocaleValue";

export default ({ config }) => {
  const lang = useLocaleValue('frameLocales');

  return <div>
    Users - 是否是移动端: {config.isMobile + ''} - 主题模式：{config.theme}
    <button>
      {lang.button}
    </button>
    <div>
      ----------------------------
    </div>
  </div>
}
