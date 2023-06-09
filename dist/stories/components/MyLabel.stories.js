import { jsx as _jsx } from "react/jsx-runtime";
import { MyLabel } from "../../components/MyLabel";
export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: 'color' },
        backgroundColor: { control: 'color' },
    },
    tags: ['autodocs'],
};
const Template = (args) => _jsx(MyLabel, { ...args });
export const Basic = Template.bind({});
Basic.args = {
    label: 'Basic Label',
    size: 'normal',
    // allCaps: false,
    // color: 'primary'
};
export const AllCaps = Template.bind({});
AllCaps.args = {
    label: 'All Caps',
    size: 'normal',
    allCaps: true,
    color: 'primary'
};
export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary',
    size: 'normal',
    allCaps: false,
    color: 'secondary'
};
export const Tertiary = Template.bind({});
Tertiary.args = {
    label: 'Tertiary',
    size: 'normal',
    allCaps: false,
    color: 'tertiary'
};
// CustomFontColor
export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    label: 'Custom Font Color',
    size: 'h1',
    fontColor: '',
};
export const customBackgroundColor = Template.bind({});
customBackgroundColor.args = {
    label: 'Custom Background Color',
    size: 'h1',
    backgroundColor: 'red',
};
