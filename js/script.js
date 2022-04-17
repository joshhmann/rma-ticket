
//want to make sure that dom content is loaded before we submit our form
document.addEventListener('DOMContentLoaded', ()=> {
document.getElementById('btn').addEventListener('click', makeLabel);
});
const makeLabel = (ev) => {
        //prevent the page from reloading after submitting
        ev.preventDefault();
        //I want to reduce these somehow. using an object maybe? 
        let ticketId = document.getElementById('ticketId').value;
        let hub = document.getElementById('hub').value;
        let date = document.getElementById('date').value;
        let techName = document.getElementById('techName').value;
        let partId = document.getElementById('partId').value;
        let description = document.getElementById('description').value;
        let partBarcode = document.getElementById('barcode');
        //selecting our empty tds 
        let ticketId1 = document.getElementById('ticketId1');
        let hub1 = document.getElementById('hub1');
        let date1 = document.getElementById('date1');
        let techName1 = document.getElementById('techName1');
        let partId1 = document.getElementById('partId1');
        
        let description1 = document.getElementById('description1');

        //we input the form data into the tds
        ticketId1.innerHTML = ticketId;
        hub1.innerHTML = hub;
        date1.innerHTML = date;
        techName1.innerHTML = techName;
        JsBarcode(partBarcode, partId, {
            width: 3,
            height: 25,
            textPosition: "top",
            fontSize: 16
        });
        description1.innerHTML = description;
        document.forms[0].reset;

    //once the form is submitted a window will appear with the label    
    let divContents = document.getElementById('createdTicket').innerHTML;
    let a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
};

