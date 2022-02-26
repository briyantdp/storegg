import StepItem from "../../../../components/molecules/StepItem";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Molecules/StepItem",
  component: StepItem,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Input {...args} />;

export const FirstStory = {
  args: {
    SvgPath: "",
    title: "1. Start",
    desc1: "Pilih salah satu game",
    desc2: "yang ingin kamu top up",
  },
};
