import GameItem from "../../../../components/molecules/GameItem";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Molecules/GameItem",
  component: GameItem,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Input {...args} />;

export const FirstStory = {
  args: {
    imgPath: "",
    title: "Clash of Clans",
    platform: "Mobile",
  },
};
