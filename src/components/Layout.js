 //rafce
 import React,{ useEffect , useRef } from 'react'

 const Layout = () => {
    const texttitleRef = useRef(null)
    const background = useRef(null)
    const mountain1 = useRef(null)
    const mountain2 = useRef(null)
    const sun = useRef(null)
    const leaf = useRef(null)
    
    useEffect(() => {
        const handleScroll = () => {
            const value = window.scrollY

            texttitleRef.current.style.marginTop = `${value * 1.25}px `

            sun.current.style.top =`${value * -1}px`
            sun.current.style.left =`${value * -1}px`
            

            leaf.current.style.top =`${value * -1}px`
            leaf.current.style.left =`${value * 1}px`

            if(value > 100 && value < 150){
                mountain1.current.style.left = `${value * 1.5}px`
            }
            mountain2.current.style.left = `${value * -1.5}px`

            console.log("value = ",value)
        }

        window.addEventListener('scroll',handleScroll)

        return () => {
            window.removeEventListener('scroll',handleScroll)
        }

    }, [])

    return (
        <div>

            <section className='parallax'>
                    <img src='/Images/background.png' ref={background} />
                    <img src='/Images/mountain1.png' ref={mountain1}/>                   
                    <img src='/Images/mountain2.png' ref={mountain2}/>    
                    <h2 className='texttitle' ref={texttitleRef}>One day with my dog</h2>
                    <img src='/Images/sun.png' ref={sun}/>
                    <img src='/Images/leaf2.png' ref={leaf}/>
                    <img src='/Images/plant.png' />                   
            </section>

            <section className='section' id='Content'>
                <h2>Content</h2>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.v</p>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 

            </section>
        </div>
    )
 }

 export default Layout

