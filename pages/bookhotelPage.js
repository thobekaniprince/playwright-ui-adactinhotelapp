export class BookHotel {

    constructor(page) {
        this.totalPrice = page.locator('#total_price_dis');
    }


    async calculateTotalPrice(pricePerNight, numberOfRooms, numberOfDays) {
        let pricePerNight, numberOfRooms, numberOfDays

        return (pricePerNight) * (numberOfRooms) * (numberOfDays)

    }
}