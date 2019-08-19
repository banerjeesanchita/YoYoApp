import React from 'react'

export default function Hero({children,hero}) {
     console.log("hero",{hero});
    return (
      
        <header className={hero}>
            {children}
        </header>
    )
}
