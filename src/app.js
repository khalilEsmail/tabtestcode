import './index.css';
import './styles/responsive.css';
import anime from 'animejs';
import data from '../jsTask/data.json';
import getUniqeTags from '../jsTask';


function notify(el, message) {
    if(!el instanceof HTMLElement) return ;
    return el.insertAdjacentHTML('afterbegin', message)
}

function clouser() {
    // first time content load want to animate 
    // Bio content to come from left , image translate from Y top 
    // Profile info name to fade in wiht address and to translate caption fro Y bottom 

    const bioContent = document.querySelector('.bio .content');
    const bioImage = document.querySelector('.bio .profile-img');
    const profileName = document.querySelector('.profile-info-personal_name');
    const address = document.querySelector('address');
    const caption = document.querySelector('.profile-info-social');

    // animate bio content to translate form X axios left side to right side 
    anime({
        targets: bioContent,
        translateX: [
            -100, 0
            // {value:0}
        ],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutCubic'

    })


    anime({
        targets: bioImage,
        top: [-300, 0],
        easing: 'easeOutCubic'
    })

    anime({
        targets: [profileName, address],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutCubic'


    })
    anime({
        targets: caption,
        translateY: [100, 0],
        easing: 'easeOutCubic'

    });


    function styleBefore(selector) {
        // if(!selector) return ;
        let width = 100;
        let unit = '%'
        if (window.outerWidth > 992) {

            // dont applay this to smal screen devices 
            const el = document.querySelector(selector);

            // grap container width
            const [boundingReact] = el.getClientRects();

            // to set the element height as mockup we need to set its container right and left rect to width so its cover all space nneded in all window from lg & up
            unit = 'px'
            width = el.offsetWidth + ((boundingReact.width - el.offsetWidth) + boundingReact.left);

        }
        document.querySelector('.profile-info').style.setProperty('--before-width', `${width}${unit}`)

    }


    styleBefore('.container');

    window.addEventListener('resize', (e) => {
        styleBefore('.container')
    })

    
    notify(
        document.querySelector('#header > h6'),
        '<b>Check console for js Task</b>'
    )


    console.log(getUniqeTags(data))



}

document.addEventListener('DOMContentLoaded', clouser)
