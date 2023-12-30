// import React, { useCallback, useEffect, useRef } from 'react';

// const useScrollFadeIn = () => {
//     const dom = useRef();

//     const handleScroll = useCallback(() => {
//         const { current } = dom;
//         const currentScrollPosition = window.pageYOffset;
//         const currentDomScrollPosition = currentScrollPosition.current.getBoundingClientRect().top - 800;
//     })
//     useEffect(() => {
//         if (element.current) {
//             window.addEventListener('scroll', handleScroll);
//         }

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         }
//     }, [handleScroll]);
//     return {
//         ref: dom
//     };
// };

// export default useScrollFadeIn;