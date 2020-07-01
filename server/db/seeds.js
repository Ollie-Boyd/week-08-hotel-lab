use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Harrison Booth",
        email: "harrison@codeclan.com",
        isCheckedIn: false

    },
    {
        name: "Alex Bazlinton",
        email: "alex@codeclan.com",
        isCheckedIn: true
    },
    {name: "John Harper",
    email: "john@codeclan.com",
    isCheckedIn: true
    },
    {
        name: "Louise Camlin",
        email: "louise@codeclan.com",
        isCheckedIn: true
    }
]);