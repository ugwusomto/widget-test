import React from "react";
import { storiesOf } from "@storybook/react";
import App from "../components/App"

const stories = storiesOf('App Test',module);

stories.add('App',()=>{
    return (<App  name={"welcom"} />)
})