document.addEventListener('DOMContentLoaded', (event) => {
    const div1 = document.getElementById('b1');
    const div2 = document.getElementById('b2');
    const div3 = document.getElementById('b3');
    const div4 = document.getElementById('b4');
    const div5 = document.getElementById('d1');
    const div6 = document.getElementById('d2');
    const div7 = document.getElementById('d3');
    const div8 = document.getElementById('d4');

    // Initialize opacity to 1 for all target divs
    div5.style.opacity = '0';
    div6.style.opacity = '0';
    div7.style.opacity = '0';
    div8.style.opacity = '0';

    function handleClick(targetDiv) {
        return () => {
            // Toggle opacity between 0 and 1
            if (targetDiv.style.opacity === '0') {
                targetDiv.style.opacity = '1'; // Change opacity to 1 on click if currently 0
            } else {
                targetDiv.style.opacity = '0'; // Change opacity to 0 on click if currently 1
            }
        };
    }

    // Add click event listeners to toggle opacity
    div1.addEventListener('click', handleClick(div5));
    div2.addEventListener('click', handleClick(div6));
    div3.addEventListener('click', handleClick(div7));
    div4.addEventListener('click', handleClick(div8));
});
