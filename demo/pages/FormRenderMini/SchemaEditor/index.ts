Page({
  data: {
    schema: {
      "type": "object",
      "radius": false,
      "requiredMarkStyle": "text-required",
      "displayType": "row",
      "properties": {
        "group1": {
          "title": "Group 1",
          "type": "group-card",
          "widget": "group-card",
          "order": 1,
          "properties": {
            "input": {
              "title": "Input",
              "widget": "input",
              "required": true,
              "props": {
                "placeholder": "Enter text"
              }
            }
          }
        }
      }
    }
  },
  updateSchema(schema) {
    this.setData({ schema });
  },
});
