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
});
