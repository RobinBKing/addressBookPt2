describe('Contact', function() {
  it("creates a new contact with given properties", function() {
    var testContact = new Contact("John","Doe");
    expect(testContact.firstName).to.equal("John");
    expect(testContact.lastName).to.equal("Doe");
    expect(testContact.addresses).to.eql([]);
  });
  it("adds the fullName mathod to all contacts", function() {
    var testContact = new Contact("Jesse", "James");
    expect(testContact.fullName()).to.equal("Jesse James");
  });
  it("creates a new address with given properties.", function() {
    var testAddress = new Address("123 madison st", "Portland", "Oregon", "97210");
    expect(testAddress.street).to.equal("123 madison st");
    expect(testAddress.city).to.equal("Portland");
    expect(testAddress.state).to.equal("Oregon");
    expect(testAddress.zipCode).to.equal("97210");
  });
  it("add the fullAddress method to all addresses", function() {
    var testAddress = new Address("123 madison st", "Portland", "Oregon", "97210");
    expect(testAddress.fullAddress()).to.equal("123 madison st, Portland, Oregon 97210");
  });
});
