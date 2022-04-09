


        

document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('btn').addEventListener('click', makeLabel);
});
const makeLabel = (ev) => {
        ev.preventDefault();
        let ticketId = document.getElementById('ticketId').value;
        let hub = document.getElementById('hub').value;
        let date = document.getElementById('date').value;
        let techName = document.getElementById('techName').value;
        let partId = document.getElementById('partId').value;
        let description = document.getElementById('description').value;
        let table = document.getElementById('tg');

        let ticketId1 = document.getElementById('ticketId1');
        let hub1 = document.getElementById('hub1');
        let date1 = document.getElementById('date1');
        let techName1 = document.getElementById('techName1');
        let partId1 = document.getElementById('partId1');
        let description1 = document.getElementById('description1');

        ticketId1.innerHTML = ticketId;
        hub1.innerHTML = hub;
        date1.innerHTML = date;
        techName1.innerHTML = techName;
        partId1.innerHTML = partId;
        description1.innerHTML = description;
        document.forms[0].reset;
    let divContents = document.getElementById('createdTicket').innerHTML;
    let a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
};

const printLabel = (ev) => {
    ev.preventDefault();
    let divContents = document.getElementById('createdTicket').innerHTML;
    let a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    document.forms[0].reset;
};
