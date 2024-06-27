document.addEventListener('DOMContentLoaded', (event) => {
    const div1 = document.getElementById('b1');
    const div2 = document.getElementById('b2');
    const div3 = document.getElementById('b3');
    const div4 = document.getElementById('b4');
    const div5 = document.getElementById('d1');
    const div6 = document.getElementById('d2');
    const div7 = document.getElementById('d3');
    const div8 = document.getElementById('d4');

    function handleMouseEnter(targetDiv) {
        return () => {
            targetDiv.style.opacity = '10.5'; // Change the opacity to 0.5
        };
    }

    function handleMouseLeave(targetDiv) {
        return () => {
            targetDiv.style.opacity = '0'; // Reset the opacity to 1
        };
    }

    div1.addEventListener('mouseenter', handleMouseEnter(div5));
    div1.addEventListener('mouseleave', handleMouseLeave(div5));
    div2.addEventListener('mouseenter', handleMouseEnter(div6));
    div2.addEventListener('mouseleave', handleMouseLeave(div6));
    div3.addEventListener('mouseenter', handleMouseEnter(div7));
    div3.addEventListener('mouseleave', handleMouseLeave(div7));
    div4.addEventListener('mouseenter', handleMouseEnter(div8));
    div4.addEventListener('mouseleave', handleMouseLeave(div8));


});