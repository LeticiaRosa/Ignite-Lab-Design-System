import { TextInput, TextInputProps, TextInputRootProps } from "./TextInput";
import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from 'phosphor-react'
export default {
  title: "component/TextInput", component: TextInput.Root,
  args: {
    children: <>
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>
      <TextInput.Input placeholder="Escreve seu e-mail" />
    </>
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputProps> = {};
export const WithOutIcon: StoryObj<TextInputProps> = {
  args: {
    children: <TextInput.Input placeholder="Escreve seu e-mail" />
  }
};