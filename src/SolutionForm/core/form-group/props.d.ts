interface FormGroupProps {
  /**
    * @description 表单组的标题
  */
  title: string;

  /**
  * @description 表单组的配置
  */
  groupConfig: {
    cardExpand?: {
      /**
       * @description 是否启用
       */
      enable: boolean;

      /**
       * @description 是否位展开状态
       */
      expand: boolean;

      /**
       * @description 点击展开的回调
       */
      onExpand: (expand: boolean) => void
    }
  }
}

export declare const FormGroupDefaultProps: Partial<FormGroupProps>;
