const btn = document.querySelector('button');
let id = localStorage.length;
btn.addEventListener('click', e => {
    e.preventDefault();
    const startDate = document.querySelector('#startId');
    const endDate = document.querySelector('#endId');


    const firstDate = new Date(startDate.value); // yyyy-mm-dd
    const lastDate = new Date(endDate.value);
    if (startDate.value === "" && endDate.value === "") return confirm("Field cannot empty");

    if (firstDate.getTime() <= lastDate.getTime()) {
        // local storage
        let data = {
            start: startDate.value,
            end: endDate.value
        };

        localStorage.setItem('date' + id, JSON.stringify(data));

        id++;
    } else {
        confirm("Sorry first date must be smaller than last date");
    }

    startDate.value = "";
    endDate.value = "";

    location.reload();
});


function updateUI() {

    for (let i = 0; i < localStorage.length; i++) {

        let data = localStorage.getItem('date' + i);
        // parse data to object
        let datas = JSON.parse(data);

        const p = document.createElement('p');
        const spanFirst = document.createElement('span');
        const spanLast = document.createElement('span');
        spanFirst.textContent = "Start Date: " + datas.start ;
        spanLast.textContent = "End Date: " + datas.end;

        p.appendChild(spanFirst);
        p.appendChild(spanLast);

        output.appendChild(p);
    }
}

const output = document.querySelector('#output');

updateUI();