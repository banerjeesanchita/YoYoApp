import React from 'react'

export default function Banner({children,title }) {
    return (
        <div>
          <p> {title}</p> 
            {children}
        </div>
    )
}
