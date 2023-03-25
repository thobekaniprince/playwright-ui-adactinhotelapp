export class HotelSearch {

    constructor(page) {
        this.locationList = page.locator('//select[@id="location"]');
        this.hotelsList = page.locator('//select[@id="hotels"]');
        this.roomTypes = page.locator('//select[@id="room_type"]');
        this.numberOfRooms = page.locator('//select[@id="room_nos"]');
        this.checkInDate = page.locator('//input[@id="datepick_in"]');
        this.checkOutDate = page.locator('//input[@id="datepick_out"]');
        this.adultPerRoom = page.locator('//select[@id="adult_room"]');
        this.childrenPerRoom = page.locator('//select[@id="child_room"]');

        this.searchButtom = page.locator('//input[@id="Submit"]');
        this.resetButton = page.locator('Reset');

        this.checkInError = page.locator('//span[@id="checkin_span"]');
        this.checkOutError = page.locator('//span[@id="checkout_span"]');
    }
    async selectLocation(location) {
        await this.locationList.selectOption({ label: location });
    }

    async selectHotels(hotel) {
        await this.hotelsList.selectOption({ label: hotel });
    }

    async selectRoomtype(roomtype) {
        await this.roomTypes.selectOption({ label: roomtype });
    }

    async selectNumberOfRooms(numberofrooms) {
        await this.numberOfRooms.selectOption({ index: numberofrooms });
    }

    async selectAdultsPerRoom(adultsperroom) {
        await this.adultPerRoom.selectOption({ index: adultsperroom });
    }

    async enterCheckInDate(day = 0) {
        let data = this.getDate(day);
        await this.checkInDate.fill(data);
    }

    async enterCheckOutDate(day = 0) {
        let data = this.getDate(day);
         await this.checkOutDate.fill(data);
    }

    async clickSearchButton() {
        await this.searchButtom.click();
    }

    getDate(value = 0) {
        const date = new Date();
        let day = date.getDate() + (value);
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let currentDate = `${day}/${month}/${year}`;
        return currentDate;
    }
}