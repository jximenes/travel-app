(function(){
    "use strict";

    angular
        .module("travelApp")
        .service("travelService", [function(){
            return {
                getData: getData
            };

            function getData(){
                var data = {
                    featured:
                    {
                        name: "Featured",
                        products: [
                            {
                                city: "Monte Gordo",
                                description: "Lorem ipsum dolor sit amet, eu nec brute vocibus qualisque, ut affert appetere recusabo vim, decore ancillae recteque ea mea. Dicunt disputationi vim in, id sit fabulas adipisci.",
                                price_single: "15€",
                                price_group: "10",
                                price_inc: "8",
                                image: "assets/images/places/monte_gordo_1024w.jpg"
                            },
                            {
                                city: "Albufeira",
                                description: "Lorem ipsum dolor sit amet",
                                price_single: "15€",
                                price_group: "10",
                                price_inc: "8",
                                image: "assets/images/places/albufeira_1024w.jpg"
                            },
                            {
                                city: "Sagres",
                                description: "Lorem ipsum dolor sit amet, eu nec brute vocibus qualisque",
                                price_single: "15€",
                                price_group: "10",
                                price_inc: "8",
                                image: "assets/images/places/sagres_1024w.jpg"
                            },
                            {
                                city: "Odeceixe",
                                description: "Lorem ipsum dolor sit amet, eu nec brute vocibus qualisque, ut affert appetere recusabo vim, decore ancillae recteque ea mea. ",
                                price_single: "15€",
                                price_group: "10",
                                price_inc: "8",
                                image: "assets/images/places/odeceixe_1024w.jpg"
                            },
                            {
                                city: "Porto Covo",
                                description: "Lorem ipsum",
                                price_single: "15€",
                                price_group: "10",
                                price_inc: "8",
                                image: "assets/images/places/porto_covo_1024w.jpg"
                            }
                        ]
                    },
                    algarve: {
                        name: "Algarve",
                        products: [
                            {
                                city: "Monte Gordo",
                                description: "Lorem ipsum dolor sit amet, eu nec brute vocibus qualisque, ut affert appetere recusabo vim, decore ancillae recteque ea mea. Dicunt disputationi vim in, id sit fabulas adipisci.",
                                price_single: "15€",
                                price_group: "10",
                                price_inc: "8",
                                image: "assets/images/places/monte_gordo_1024w.jpg"
                            },
                            {
                                city: "Albufeira",
                                description: "Lorem ipsum dolor sit amet",
                                price_single: "15€",
                                price_group: "10",
                                price_inc: "8",
                                image: "assets/images/places/albufeira_1024w.jpg"
                            },
                            {
                                city: "Sagres",
                                description: "Lorem ipsum dolor sit amet, eu nec brute vocibus qualisque",
                                price_single: "15€",
                                price_group: "10",
                                price_inc: "8",
                                image: "assets/images/places/sagres_1024w.jpg"
                            },
                            {
                                city: "Odeceixe",
                                description: "Lorem ipsum dolor sit amet, eu nec brute vocibus qualisque, ut affert appetere recusabo vim, decore ancillae recteque ea mea. ",
                                price_single: "15€",
                                price_group: "10",
                                price_inc: "8",
                                image: "assets/images/places/odeceixe_1024w.jpg"
                            },
                            {
                                city: "Porto Covo",
                                description: "Lorem ipsum",
                                price_single: "15€",
                                price_group: "10",
                                price_inc: "8",
                                image: "assets/images/places/porto_covo_1024w.jpg"
                            }
                        ]
                    }
                };

                return data;
            }
        }]);
})();