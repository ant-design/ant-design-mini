export var EComponents;
(function (EComponents) {
    EComponents["Alphabet"] = "Alphabet";
    EComponents["AmountInput"] = "AmountInput";
    EComponents["Badge"] = "Badge";
    EComponents["Button"] = "Button";
    EComponents["Checkbox"] = "Checkbox";
    EComponents["CheckboxGroup"] = "CheckboxGroup";
    EComponents["CheckboxItem"] = "CheckboxItem";
    EComponents["Collapse"] = "Collapse";
    EComponents["CollapseItem"] = "CollapseItem";
    EComponents["Container"] = "Container";
    EComponents["DatePicker"] = "DatePicker";
    EComponents["Filter"] = "Filter";
    EComponents["Footer"] = "Footer";
    EComponents["FooterEnd"] = "FooterEnd";
    EComponents["FooterImage"] = "FooterImage";
    EComponents["FooterLink"] = "FooterLink";
    EComponents["FooterTag"] = "FooterTag";
    EComponents["FooterText"] = "FooterText";
    EComponents["Form"] = "Form";
    EComponents["FormItem"] = "FormItem";
    EComponents["Grid"] = "Grid";
    EComponents["GuideModal"] = "GuideModal";
    EComponents["GuideItem"] = "GuideItem";
    EComponents["HorizontalScrollbar"] = "HorizontalScrollbar";
    EComponents["Icon"] = "Icon";
    EComponents["Input"] = "Input";
    EComponents["List"] = "List";
    EComponents["ListItem"] = "ListItem";
    EComponents["Loading"] = "Loading";
    EComponents["Mask"] = "Mask";
    EComponents["Modal"] = "Modal";
    EComponents["NoticeBar"] = "NoticeBar";
    EComponents["NoticeBarCapsule"] = "NoticeBarCapsule";
    EComponents["Pagination"] = "Pagination";
    EComponents["Picker"] = "Picker";
    EComponents["Popover"] = "Popover";
    EComponents["PopoverItem"] = "PopoverItem";
    EComponents["Popup"] = "Popup";
    EComponents["RadioGroup"] = "RadioGroup";
    EComponents["Radio"] = "Radio";
    EComponents["Result"] = "Result";
    EComponents["SafeArea"] = "SafeArea";
    EComponents["SearchBar"] = "SearchBar";
    EComponents["Selector"] = "Selector";
    EComponents["Stepper"] = "Stepper";
    EComponents["Steps"] = "Steps";
    EComponents["StepItem"] = "StepItem";
    EComponents["SwipeAction"] = "SwipeAction";
    EComponents["Switch"] = "Switch";
    EComponents["Tabs"] = "Tabs";
    EComponents["TabItem"] = "TabItem";
    EComponents["Tag"] = "Tag";
    EComponents["Terms"] = "Terms";
    EComponents["Textarea"] = "Textarea";
    EComponents["Tips"] = "Tips";
    EComponents["Title"] = "Title";
    EComponents["VerifyCode"] = "VerifyCode";
    EComponents["WhiteSpace"] = "WhiteSpace";
    EComponents["GuideTour"] = "GuideTour";
})(EComponents || (EComponents = {}));
export var log = {
    warn: function (component, message) {
        var info = "[antd-mini: ".concat(component, "] \uD83D\uDCE1 ").concat(message);
        // eslint-disable-next-line no-console
        console.warn(info);
    },
    error: function (component, message) {
        var info = "[antd-mini: ".concat(component, "] \uD83D\uDCE1 ").concat(message);
        // eslint-disable-next-line no-console
        console.error(info);
    },
};
