import React from 'react'

const TaggyJr = ({ text = '', type = '', color = {r: 220, g: 220, b: 220} }) => (
    <mark
        style={{
            padding: '0.25em 0.35em',
            margin: '0px 0.25em',
            lineHeight: '1',
            display: 'inline-block',
            borderRadius: '0.25em',
            border: '1px solid',
            background: `rgba(
                ${color.r},
                ${color.g},
                ${color.b},
                0.2
            )`,
            borderColor: `rgb(
                ${color.r},
                ${color.g},
                ${color.b}
            )`
        }}
    >
        {text}
        <span
            style={{
                boxSizing: 'border-box',
                fontSize: '0.6em',
                lineHeight: '1',
                padding: '0.35em',
                borderRadius: '0.35em',
                textTransform: 'uppercase',
                display: 'inline-block',
                verticalAlign: 'middle',
                margin: '0px 0px 0.1rem 0.5rem',
                background: `rgb(
                    ${color.r},
                    ${color.g},
                    ${color.b}
                )`
            }}
        >
            {type}
        </span>
    </mark>
)

export default TaggyJr
