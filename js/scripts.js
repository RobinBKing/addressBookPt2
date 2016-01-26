//business logic
function Contact(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
//interface
$(document).ready(function() {
  $("form#newContact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#newFirstname").val();
    var inputtedLastName = $("input#newLastname").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("input#newFirstname").val("");
    $("input#newLastname").val("");

    $(".contact").last().click(function() {
      $("#showContact").show();
      $("#showContact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });
  });
});
