import React from 'react'
import './About.css'
const About = () => {
    return (
        <div className='aboutcontainer'>
            <h1 className='about'>ABOUT</h1>
            <div>
            <h2>How this file can be used</h2>
            <p className='borderL'>
                Feel free to use this file in any way you want, you can edit a copy of this file as much as you
                want for non-commercial or commercial purposes. Its not necessary, but if you want, you
                can ping me at @mikamatikainen on Twitter when using this file. Would be just nice to see
                how this evolves :-)

                Images: Copyright © Unsplash or Mika Matikainen.
            </p>
            </div>
            <div>
            <h2>A note about typefaces</h2>
            <p className='borderL'>
                This file is using platform-native typefaces for iOS & macOS, designed by Apple.
                To make texts editable, you can download the typefaces at https://developer.apple.com/fonts/
            </p>
            </div>
           <div>
           <h2>Fonts used on the live site</h2>
           <div className='borderL'>
           <p>Just for reference or if youre interested, I list here the typefaces Im using in on
                the live site at https://www.nordicrose.net. If youd like to use them in your own
                project, I added links for you as well to make it easier to purchase the required
                license.
            </p>
            <h2>GTF Chapter</h2>
            <p>
                used in the logo as a vector outline
                by Good Type Foundry (https://www.goodtypefoundry.com/chapter)
            </p>
            <h2>Mackay Bold</h2>
            <p>
                large headlines
                by Rene Gieder (https://www.myfonts.com/fonts/rene-bieder/mackay/)
            </p>
            <h2>Harriet Text</h2>
            <p>
                body copy
                by Okay Type (https://okaytype.com/typefaces/harriet)
            </p>
            <h2>Basis Groesque Pro</h2>
            <p>
                UI elements, some subtitles and some body copy
                by Colophon Foundry (https://www.colophon-foundry.org/typefaces/basis-grotesque/)
            </p>
            <h2>Nokia CellPhone</h2>
            <p>
                some playful elements at some point, maybe
                by Zeh Fernando, available for free at Dafont (https://www.dafont.com/nokia-cellphone.font)
            </p>
           </div>
           </div>
           
         
        </div>
    )
}

export default About;