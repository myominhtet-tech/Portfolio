var City = function(name, state) {
    this.name = name || 'Portland';
    this.state = state || 'Oregon';
    this.printMyCityAndState = function() {
        console.log("My city is" + this.name + ",any my state is " + this.state);
    };
};

portland = new City();
seattle = new City('Seattle', 'Washington');
yangon = new City('San Chaung');
mandalya = new City('ChanMyaTharSi', 'Mandalay');

portland.printMyCityAndState();
seattle.printMyCityAndState();
yangon.printMyCityAndState();
mandalya.printMyCityAndState();