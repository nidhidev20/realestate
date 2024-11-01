
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')
    alertPlaceholder.append(wrapper)
}
const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        appendAlert("We'll let you know!", 'success')
    })
}

flatpickr("#datePicker", {
    dateFormat: "Y-m-d", 
    enableTime: false, 
    onChange: function(selectedDates, dateStr, instance) {
        console.log(dateStr); 
    }
});

const calendarEl = document.getElementById('calendar');
const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth', 
    headerToolbar: {
        left: 'prev,next today', 
        center: 'title', 
        right: 'dayGridMonth,dayGridWeek,dayGridDay' 
    },
    events: [ 
        {
            title: 'Event 1',
            start: '2024-10-16'
        },
        {
            title: 'Event 2',
            start: '2024-10-20',
            end: '2024-10-22'
        },
        {
            title: 'Event 3',
            start: '2024-10-24T12:00:00',
            allDay: false 
        }
    ]
});

document.getElementById('show-calendar').addEventListener('click', function() {
    if (calendarEl.style.display === "none" || calendarEl.style.display === "") {
        calendarEl.style.display = "block";
        calendar.render(); 
    } else {
        calendarEl.style.display = "none"; 
    }
});