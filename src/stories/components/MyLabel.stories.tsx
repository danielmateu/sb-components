// import { MyLabel } from "../../components/MyLabel";

import { Meta, StoryFn } from "@storybook/react"
import { MyLabel } from "../../components/MyLabel"

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes : {
        size : {control: 'select'},
        color : {control: 'select'},
        fontColor : {control: 'color'},
        backgroundColor: {control: 'color'},
    },
    tags: ['autodocs'], 
} as Meta<typeof MyLabel> 

const Template: StoryFn<typeof MyLabel> = (args) => <MyLabel {...args}/>

export const Basic: any = Template.bind({})
Basic.args = {
    label: 'Basic Label',
    size: 'normal',
    // allCaps: false,
    // color: 'primary'
}

export const AllCaps: any = Template.bind({})
AllCaps.args = {
    label: 'All Caps',
    size: 'normal',
    allCaps: true,
    color: 'primary'

}

export const Secondary: any = Template.bind({})
Secondary.args = {
    label: 'Secondary',
    size: 'normal',
    allCaps: false,
    color: 'secondary'

}

export const Tertiary: any = Template.bind({})
Tertiary.args = {
    label: 'Tertiary',
    size: 'normal',
    allCaps: false,
    color: 'tertiary'
}

// CustomFontColor
export const CustomFontColor: any = Template.bind({})
CustomFontColor.args = {
    label: 'Custom Font Color',
    size: 'h1',
    fontColor: '',
}

export const customBackgroundColor: any = Template.bind({})
customBackgroundColor.args = {
    label: 'Custom Background Color',
    size: 'h1',
    backgroundColor: 'red',
}


