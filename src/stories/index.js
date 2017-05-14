import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs'
import TaggyJr from '../index.js'

const stories = storiesOf('React Taggy Jr', module)

stories.addDecorator(withKnobs)

stories.add('All props', () => (
    <Taggy
        text='John'
        type='NAME'
        color={{r: 120, g: 240, b: 90}}
    />
))

stories.add('No props', () => (
    <Taggy />
))

stories.add('No Color', () => (
    <Taggy
        text='John'
        type='NAME'
    />
))
