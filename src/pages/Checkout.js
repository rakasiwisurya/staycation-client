import React, { Component } from "react";
import { connect } from "react-redux";
import { Fade } from "react-awesome-reveal";

import Header from "parts/Header";
import Button from "elements/Button";
import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from "elements/Stepper";
import BookingInformation from "parts/Checkout/BookingInformation";
import Payment from "parts/Checkout/Payment";
import Completed from "parts/Checkout/Completed";

import ItemDetails from "json/itemDetails.json";

class Checkout extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  goesToPage = (link) => {
    this.props.history.push(link);
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const { data } = this.state;
    const { checkout } = this.props;

    if (!checkout)
      return (
        <div className="container">
          <div
            className="row align-items-center justify-content-center text-center"
            style={{ height: "100vh" }}
          >
            <div className="col-4">
              Mohon agar pilih kamar terlebih dahulu
              <div>
                <Button className="btn mt-5" type="link" href="/" isLight>
                  Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      );

    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields below",
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            ItemDetails={ItemDetails}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the instructions below",
        content: (
          <Payment
            data={data}
            ItemDetails={ItemDetails}
            checkout={checkout}
            onChange={this.onChange}
          />
        ),
      },
      completed: {
        title: "Yeay! Completed",
        description: null,
        content: <Completed />,
      },
    };

    return (
      <>
        <Header isCentered />

        <Stepper steps={steps}>
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Numbering
                data={steps}
                current={CurrentStep}
                style={{ marginBottom: 50 }}
              />
              <Meta data={steps} current={CurrentStep} />
              <MainContent data={steps} current={CurrentStep} />
              {CurrentStep === "bookingInformation" && (
                <Controller>
                  {data.firstName !== "" &&
                    data.email !== "" &&
                    data.email !== "" &&
                    data.phone !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    type="button"
                    isBlock
                    isLight
                    onClick={() =>
                      this.goesToPage(`/properties/${ItemDetails._id}`)
                    }
                  >
                    Cancel
                  </Button>
                </Controller>
              )}
              {CurrentStep === "payment" && (
                <Controller>
                  {data.proofPayment !== "" &&
                    data.bankName !== "" &&
                    data.bankHolder !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    type="button"
                    isBlock
                    isLight
                    onClick={prevStep}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}
              {CurrentStep === "completed" && (
                <Controller>
                  <Button
                    className="btn"
                    type="button"
                    isBlock
                    isPrimary
                    hasShadow
                    onClick={() => this.goesToPage("/")}
                  >
                    Back to Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  checkout: state.checkout,
});

export default connect(mapStateToProps)(Checkout);
