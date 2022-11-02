//hotel registration
var test = {
    hotelName: "Marriot",
    room: 384,
    booked: 128,
    display: function() {
        return this.hotelName;
    }
};
console.clear();
console.log(test.room);

//event handler
function reservation() {
    var guest = {
        name: $('#name').val(),
        checkIn: $('#checkin').val(),
        checkOut: $('#checkOut').val(),
        guestCount: $('#num').val(),
        room: $('#room').val()
        display: function() {
            return "name: " + this.name +
                "\nCheck in: " + this.checkIn +
        }
    }
};

//event
$(function() {
    $('#submit').click(reservation);
});