import React from "react";
import { Story, Meta } from "@storybook/react";
import Stretch from "./Stretch";

export default {
  component: Stretch,
  title: "Stretch",
};

const Template = (args) => <Stretch {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Stretchy",
};
