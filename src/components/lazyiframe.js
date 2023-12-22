import * as React from "react";
import { useRef } from 'react'
import useIntersectionObserver from '@react-hook/intersection-observer'

const LazyIframe = ({ url, title }) => {
    const containerRef = useRef()
    const lockRef = useRef(false)
    const { isIntersecting } = useIntersectionObserver(containerRef)
    if (isIntersecting) {
        lockRef.current = true
    }
    return (
        <div
            style={{
                overflow: 'hidden',
                paddingTop: '56.25%',
                position: 'relative',
                width: '100%',
            }}
            ref={containerRef}
        >
            {lockRef.current && (
                <iframe  credentialless="true" 
                    title={title}
                    style={{
                        bottom: 0,
                        height: '100%',
                        left: 0,
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        width: '100%',
                    }}
                    src={url}
                    frameborder="0"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="allowfullscreen"
                ></iframe>
            )}
        </div>
    )
}

export default LazyIframe

