import Input from "../../../../components/atoms/Input";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Atoms/Input",
  component: Input,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Input {...args} />;

export const FirstStory = {
  args: {
    label: "Nama lengkap",
  },
};
