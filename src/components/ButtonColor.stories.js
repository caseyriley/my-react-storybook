import React from "react";
import ButtonColor from "./ButtonColor";

export default {
  component: ButtonColor,
  title: "ButtonColor",
};

const Template = (args) => <ButtonColor {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test ColorButton",
    color: "red",
    updatedAt: new Date(2021, 5, 21, 9, 48),
  },
};
