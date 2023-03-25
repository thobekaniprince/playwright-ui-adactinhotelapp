export class HotelSelect {

    constructor(page) {
        this.Location = page.locator('//td/strong[contains(text(),"Location")]//following::input[4]');
        this.ArrivalDate =	page.locator('//td/strong[contains(text(),"Arrival Date")]//following::input[6]');
        this.DepartureDate = page.locator('//td/strong[contains(text(),"Departure Date")]//following::input[7]');
        this.Rooms = page.locator('//td/strong[contains(text(),"Rooms")]//following::input[5]');
        this.RoomTypes = page.locator('//td/strong[contains(text(),"Rooms Type")]//following::input[9]');
        this.Select = page.locator('//td/strong[contains(text(),"Select")]//following::input[1]');
        this.Continue = page.locator('#continue');
    }

    async selectHotel() {
        await this.Select.click();
    }

    async clickContinueButton() {
        await this.Continue.click();
    }
}