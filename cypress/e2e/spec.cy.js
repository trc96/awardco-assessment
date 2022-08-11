var firstName = "Todd";
var lastName = "Crandall";
var workEmail = "toddcrandall1996@gmail.com";
var phoneNumber = "530-301-9224";
var companyName = "Awardco";
var referal = "Chandler May";

describe("navigate to platform dropdown then to recognition menu option", () => {
  beforeEach(() => {
    cy.visit("https://www.award.co");
  });
  it("navigates to the Platform drop down menu, selects the Recognition option, and navigates to the new page", () => {
    cy.get("div").contains("Platform").click();

    cy.get("div").contains("Recognition").click();
  });

  it("Navigates to the Get a Demo button, then inputs the correct info into the input fields on the new page", () => {
    cy.get(".navigation-right").contains("Get a Demo").click();

    cy.get("input#firstname-f64fb9d6-c61a-4f1e-be12-0b51b44aa5d1")
      .type(firstName)
      .should("have.value", firstName);
    cy.get("input#lastname-f64fb9d6-c61a-4f1e-be12-0b51b44aa5d1")
      .type(lastName)
      .should("have.value", lastName);
    cy.get("input#email-f64fb9d6-c61a-4f1e-be12-0b51b44aa5d1")
      .type(workEmail)
      .should("have.value", workEmail);
    cy.get("input#phone-f64fb9d6-c61a-4f1e-be12-0b51b44aa5d1")
      .type(phoneNumber)
      .should("have.value", phoneNumber);
    cy.get("input#company-f64fb9d6-c61a-4f1e-be12-0b51b44aa5d1")
      .type(companyName)
      .should("have.value", companyName);
    cy.get(
      "input#how_did_you_hear_about_us___free_response_-f64fb9d6-c61a-4f1e-be12-0b51b44aa5d1"
    )
      .type(referal)
      .should("have.value", referal);
  });

  it("Navigates to the About a href at the bottom of the page", () => {
    cy.scrollTo(0, 10500);

    cy.get("div.footer-column").contains("About").click();
  });
});
