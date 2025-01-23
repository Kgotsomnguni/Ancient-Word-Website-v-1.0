function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    const dimBackground = document.querySelector('.dim-background');
    menu.classList.toggle('active');
    dimBackground.classList.toggle('active');
}

// Object with course details
const courseDetails = {
    'samtrac': {
        duration: '10 days',
        cpd: '5 points',
        cost: 'R5000'
    },
    'environmental': {
        duration: '7 days',
        cpd: '3 points',
        cost: 'R3500'
    },
    'iso-ohs': {
        duration: '5 days',
        cpd: '4 points',
        cost: 'R4000'
    },
    'iso-environmental': {
        duration: '6 days',
        cpd: '3 points',
        cost: 'R4200'
    },
    'iso-ims': {
        duration: '4 days',
        cpd: '2 points',
        cost: 'R3000'
    },
    'cco': {
        duration: '8 days',
        cpd: '4 points',
        cost: 'R4500'
    }
};

function populateCourseDetails() {
    const selectedCourse = document.getElementById('course').value;
    const details = courseDetails[selectedCourse];

    if (details) {
        // Update visible course details
        document.getElementById('duration').textContent = details.duration;
        document.getElementById('cpd-points').textContent = details.cpd;
        document.getElementById('cost').textContent = details.cost;

        // Update hidden fields with the same data
        document.getElementById('hiddenDuration').value = details.duration;
        document.getElementById('hiddenCPD').value = details.cpd;
        document.getElementById('hiddenCost').value = details.cost;
    }
}