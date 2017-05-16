import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs'
import TaggyJr from '../index.js'

const stories = storiesOf('React Taggy Jr', module)

stories.addDecorator(withKnobs)

stories.add('All props', () => (
    <TaggyJr
        text='React'
        type='TAGGY JR'
        color={{r: 250, g: 128, b: 114}}
    />
))

stories.add('No type', () => (
    <TaggyJr
        text='React'
        color={{r: 250, g: 128, b: 114}}
    />
))

stories.add('No props', () => (
    <TaggyJr />
))

stories.add('No Color', () => (
    <TaggyJr
        text='John'
        type='NAME'
    />
))
