//business logic
function Contact(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
};
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

function Address(street, city, state, zipCode) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.zipCode = zipCode;
};
Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state + " " + this.zipCode;
};

// interface
$(document).ready(function() {
  $("#addAddress").click(function() {
    $("#newAddresses").append('<div class="newAddress">' +
                                 '<div class="form-group">' +
                                   '<label for="newStreet">Street</label>' +                                    '<input id="newStreet" type="text" class="form-control">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="newCity">City</label>' +
                                   '<input id="newCity" type="text" class="form-control">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="newState">State</label>' +
                                   '<input id="newState" type="text" class="form-control">' +
                                   '</div>' +
                                   '<div class="form-group">' +
                                     '<label for="newZip">State</label>' +
                                     '<input id="newZip" type="text" class="form-control">' +
                                 '</div>' +
                               '</div>');
  });

  function resetFields(){
    $("input#newFirstname").val("");
    $("input#newLastname").val("");
    $("input#newStreet").val("");
    $("input#newCity").val("");
    $("input#newState").val("");
    $("input#newZip").val("");
  };

  $("form#newContact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#newFirstname").val();
    var inputtedLastName = $("input#newLastname").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".newAddress").each(function() {
      var inputtedStreet = $(this).find("input#newStreet").val();
      var inputtedCity = $(this).find("input#newCity").val();
      var inputtedState = $(this).find("input#newState").val();
      var inputtedZip = $(this).find("input#newZip").val();
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState, inputtedZip);
      newContact.addresses.push(newAddress);
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

      $(".contact").last().click(function() {
        $("#showContact").toggle();
        $("#showContact h2").text(newContact.fullName());
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);
        $("ul#addresses").empty();
        newContact.addresses.forEach(function(address) {
           $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
        });
     });
     resetFields();
  });
});
