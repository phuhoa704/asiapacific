import { useEffect } from "react";

const CustomHook = (refList: any = null) => {
    const divs = refList;
    useEffect(() => {
        if (divs !== null) {
            divs.current.forEach((div: any) => {
                div.classList.add('animation');
            });
            const handleScroll = () => {
                const scrollPosition = window.scrollY;
                divs.current.forEach((div: any) => {
                    const offsetTop = div.getBoundingClientRect().top + scrollPosition;
                    if(scrollPosition >= offsetTop - (window.innerHeight / (1.5))) {
                        div.classList.add('active');
                    } else {
                        div.classList.remove('active');
                    }
                })
            }
            window.addEventListener('scroll', handleScroll);
        }
    }, [])
}

export default CustomHook;