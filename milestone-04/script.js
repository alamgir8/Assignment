
/*==============================function for total calculation=====================================*/
function totalPrice(isIncrease, ticketName) {
    const ticket = document.getElementById(ticketName + 'Price').value;
        const ticketQuantity =  parseInt(ticket);

        let totalTicket = ticketQuantity;
        if (isIncrease == true ) {
            totalTicket = ticketQuantity + 1;
        }
        if (isIncrease == false && totalTicket > 0) {
            totalTicket = ticketQuantity - 1;
        }
       
        let subTotal = 0;
        if (ticketName == 'firstClass') {
            subTotal = totalTicket * 150;
        }
        if (ticketName == 'economyClass') {
            subTotal = totalTicket * 100;
        }

        document.getElementById(ticketName + 'Price').value = totalTicket;      
        totalTicketPrice();
        }



/*====================Function for total ticket price calculation===============================*/ 
function totalTicketPrice() {
        const firstClassTicket = numberOfTicket('firstClass');
        const economyClassTicket = numberOfTicket('economyClass');
        subTotal = firstClassTicket * 150 + economyClassTicket * 100;
        document.getElementById('sub-total').innerText =  subTotal;

        const tax = subTotal * .1;              // As tax 10% on subtotal
        document.getElementById('tax').innerText = tax;

        const totalTicketPrice = subTotal + tax ;
        document.getElementById('total-price').innerText = totalTicketPrice;
        }




/*====================function for number of ticket counting============================*/
function numberOfTicket(ticketName) {
        const ticket = document.getElementById(ticketName+'Price').value;
        const ticketQuantity = parseInt(ticket);
        return ticketQuantity;
        
        }   



/*====================function form validation============================*/        
function validateForm() {
            let Departure = document.forms["myForm"]["departure"].value;
            let Return = document.forms["myForm"]["return"].value;
            let First_Class_Ticket = document.forms["myForm"]["firstClassTicket"].value;   //one firstClass ticket must be taken
            if (Departure == "" || Return == "" || First_Class_Ticket <1 ) {
              alert("Please fill all input area with valid information");
              return false;
            }
          }
          