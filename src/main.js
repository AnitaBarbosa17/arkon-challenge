import './index.css';
import Swal from 'sweetalert2';

const $form = document.getElementById('form');
const $btn = document.getElementById('btn-submit');

// Functions
function emailSuccess() {
    Swal.fire({
        icon: 'success',
        title: 'Gracias por contactarnos',
        text: '¡Nos pondremos en contacto contigo pronto!',
        confirmButtonColor: '#009FDC',
        confirmButtonText: 'Cerrar :)',
        iconColor: '#009FDC'
    })
}

function handleSubmit(event) {
    event.preventDefault();

    $btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_ya87u0f';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            $btn.value = 'TRY ARKON NOW';
            emailSuccess();
        }, (err) => {
            $btn.value = 'TRY ARKON NOW';
            alert(JSON.stringify(err));
    });
}

// Events
$form.addEventListener('submit', handleSubmit);

// Trick for smoothScroll
window.smoothScroll = function(target) {
    let scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
    
    let targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);
    
    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
