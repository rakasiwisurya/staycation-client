import React from "react";
import Button from "elements/Button";
import IconText from "parts/IconText";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div
            className="col-md-3 col-lg-4 col-sm-12 pr-5"
            // style={{ width: 350 }}
          >
            <IconText />
            <p className="brand-tagline">
              We kaboom your beauty holiday instantly and memorable
            </p>
          </div>
          <div className="col-md-auto col-sm-12 pr-xl-5 mb-3 mb-md-0">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>

          <div className="col-md-2 col-sm-12 pr-xl-5 mb-3 mb-md-0">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/careers">
                  Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-12">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:support@staycation.co.id"
                  target="_blank"
                >
                  support@staycation.co.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="tel:+6222081997"
                  target="_blank"
                >
                  021 - 2208 - 1997
                </Button>
              </li>
              <li className="list-group-item">
                <span>Staycation Kemang, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2020 • All right reserved • Staycation
          </div>
        </div>
      </div>
    </footer>
  );
}
