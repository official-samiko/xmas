jQuery(function($) {
    "use strict";

    $(document).on('click', '.copybtn', function(e) {
        var input = document.getElementById('getText');
        input.select();
        navigator.clipboard.writeText(input.value);
        $(this).find('span').html('Copied');
    })
    setTimeout(function() {
        $('.copybtn').find('span').html('Copy')
    }, 3000);

    var unMute = `    
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.8145 6.88096L16.0978 10.9554C15.5832 11.4 14.9258 11.6446 14.2457 11.6447L12.0416 11.6447C10.0856 11.6447 8.5 13.2303 8.5 15.1863V19.8514C8.5 21.8074 10.0857 23.3931 12.0417 23.3931H13.0448C13.7655 23.3931 14.4591 23.1184 14.9844 22.6251L25.5 12.75V9.02506C25.5 6.59926 22.6502 5.29518 20.8145 6.88096Z" fill="currentColor"/>
            <path d="M25.5 26.0126V20.5417V18.4509C25.5 18.4383 25.4847 18.432 25.4758 18.4409L18.5097 25.407C18.4573 25.4594 18.4542 25.5435 18.5027 25.5997L20.4 27.7987L20.8145 28.1567C22.6502 29.7425 25.5 28.4384 25.5 26.0126Z" fill="currentColor"/>
            <path d="M20.8145 6.88096L16.0978 10.9554C15.5832 11.4 14.9258 11.6446 14.2457 11.6447L12.0416 11.6447C10.0856 11.6447 8.5 13.2303 8.5 15.1863V19.8514C8.5 21.8074 10.0857 23.3931 12.0417 23.3931H13.0448C13.7655 23.3931 14.4591 23.1184 14.9844 22.6251L25.5 12.75V9.02506C25.5 6.59926 22.6502 5.29518 20.8145 6.88096Z" stroke="currentColor" stroke-width="2.125"/>
            <path d="M25.5 26.0126V20.5417V18.4509C25.5 18.4383 25.4847 18.432 25.4758 18.4409L18.5097 25.407C18.4573 25.4594 18.4542 25.5435 18.5027 25.5997L20.4 27.7987L20.8145 28.1567C22.6502 29.7425 25.5 28.4384 25.5 26.0126Z" stroke="currentColor" stroke-width="2.125"/>
            <path d="M31.1667 7.08337L9.91666 28.3334" stroke="currentColor" stroke-width="2.125" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
    var mute = `<svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.25 7.025C18.25 4.5992 15.4002 3.29512 13.5645 4.8809L8.84783 8.95536C8.33317 9.39995 7.67576 9.64459 6.99567 9.64459L4.79164 9.64461C2.83564 9.64462 1.25 11.2303 1.25 13.1863V17.8513C1.25 19.8073 2.83566 21.393 4.79166 21.393H6.99571C7.67582 21.393 8.33323 21.6376 8.8479 22.0822L13.5645 26.1566C15.4002 27.7424 18.25 26.4383 18.25 24.0125V15.5188V7.025Z" fill="currentColor" stroke="currentColor" stroke-width="2.125"></path>
            <path d="M22.5 19.7695C23.3896 18.5856 23.9167 17.1141 23.9167 15.5195C23.9167 13.9249 23.3896 12.4533 22.5 11.2695" stroke="currentColor" stroke-width="2.125" stroke-linecap="round"></path>
            <path d="M25.3333 24.0195C27.1124 21.6518 28.1666 18.7087 28.1666 15.5195C28.1666 12.3303 27.1124 9.38717 25.3333 7.01947" stroke="currentColor" stroke-width="2.125" stroke-linecap="round"></path>
        </svg>`;

    var audio = document.getElementById('playBackAudio');

    let count = 0;
    $(document).on('click', '.audiobtn', function(e) {
        if (count == 0) {
            count = 1;
            audio.play();
            $(this).html(unMute)
        } else {
            count = 0;
            audio.pause();
            $(this).html(mute)
        }
    })


    $(document).on('click', '.menu-treger', function(e) {
        e.stopPropagation()
        $('.nav-mobile').addClass('active');
    })

    $(document).on('click', function(e) {
        if (!$(e.target).is('.nav-mobile *')) {
            $('.nav-mobile').removeClass('active');
        }
    })

});

const ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['LEQUIDITY', 'CEX LISTING'],
        datasets: [{
            label: '# of Votes',
            data: [90, 10],
            borderWidth: 4,
            backgroundColor: ['#ff760a', '#ffe534'],
            hoverBorderColor: ['#d9660b', '#e7cb0e'],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 2 / 2,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
            tooltip: {
                enabled: false,
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                display: false,
            },
            x: {
                beginAtZero: true,
                display: false,
            }
        }
    }
});


var snow = new Snowfall({
    maxSize: 80
})