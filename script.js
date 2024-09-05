const months = [
    "Január", "Február", "Március", "Április", "Május", "Június",
    "Július", "Augusztus", "Szeptember", "Október", "November", "December"
];

const daysInMonth = {
    "Január": 31, "Február": 28, "Március": 31, "Április": 30,
    "Május": 31, "Június": 30, "Július": 31, "Augusztus": 31,
    "Szeptember": 30, "Október": 31, "November": 30, "December": 31
};

document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('months');
    const container = document.getElementById('days-container');

    for(let i = 0; i < months.length; i++){
        const option = document.createElement('option');
        option.value = months[i];
        option.textContent = months[i];
        select.appendChild(option);
    }

    select.addEventListener('change', () => {
        const selectedMonth = select.value;
        const days = daysInMonth[selectedMonth];

        container.innerHTML = '';

        for (let i = 1; i <= days; i++) {
            const row = document.createElement('div');
            const input = document.createElement("input");
            input.type = "text";
            row.textContent = `Nap ${i}: `;
            row.appendChild(input);
            container.appendChild(row);
        }
    });
});
