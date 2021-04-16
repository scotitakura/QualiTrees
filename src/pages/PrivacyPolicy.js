import React from "react";
import styled from "styled-components";

const PrivacyPolicySection = styled.div`
  max-width: 100vw;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;
const PrivacyPolicyParagraph = styled.p`
  text-align: justify;
  text-justify: inter-word;
  overflow-wrap: break-word;
  margin: 3vw 10vw 10vw 10vw !important;
`;

function PrivacyPolicy() {
  return (
    <PrivacyPolicySection>
      <hr className="fade-in-hrdelay" />
      <PrivacyPolicyParagraph className="fade-in-delay">
        QUALITREES PRIVACY POLICY
        <br></br>
        <br></br>
        This Privacy Policy describes how your personal information is
        collected, used, and shared when you visit or make a purchase from this
        website (the “Site”).
        <br></br>
        <br></br>
        PERSONAL INFORMATION WE COLLECT
        <br></br>
        When you visit the Site, we automatically collect certain information
        about your device, including information about your web browser, IP
        address, time zone, and some of the cookies that are installed on your
        device. Additionally, as you browse the Site, we collect information
        about the individual web pages or products that you view, what websites
        or search terms referred you to the Site, and information about how you
        interact with the Site. We refer to this automatically-collected
        information as “Device Information.”
        <br></br>
        <br></br>
        We collect Device Information using the following technologies:<br></br>
        <br></br>- “Cookies” are data files that are placed on your device or
        computer and often include an anonymous unique identifier. For more
        information about cookies, and how to disable cookies, visit&nbsp;
        <a href="http://www.allaboutcookies.org" target="__blank">
          http://www.allaboutcookies.org
        </a>
        .<br></br>- “Log files” track actions occurring on the Site, and collect
        data including your IP address, browser type, Internet service provider,
        referring/exit pages, and date/time stamps.<br></br>- “Web beacons,”
        “tags,” and “pixels” are electronic files used to record information
        about how you browse the Site.
        <br></br>
        <br></br>
        Additionally when you make a purchase or attempt to make a purchase
        through the Site, we collect certain information from you, including
        your name, billing address, shipping address, payment information
        (including credit card numbers), email address, and phone number. We
        refer to this information as “Order Information.”<br></br>
        <br></br>
        When we talk about “Personal Information” in this Privacy Policy, we are
        talking both about Device Information and Order Information.
        <br></br>
        <br></br>
        HOW DO WE USE YOUR PERSONAL INFORMATION?<br></br>
        We use the Order Information that we collect generally to fulfill any
        orders placed through the Site (including processing your payment
        information, arranging for shipping, and providing you with invoices
        and/or order confirmations). Additionally, we use this Order Information
        to: Communicate with you; Screen our orders for potential risk or fraud;
        and When in line with the preferences you have shared with us, provide
        you with information or advertising relating to our products or
        services. We use the Device Information that we collect to help us
        screen for potential risk and fraud (in particular, your IP address),
        and more generally to improve and optimize our Site (for example, by
        generating analytics about how our customers browse and interact with
        the Site, and to assess the success of our marketing and advertising
        campaigns).
        <br></br>
        <br></br>
        SHARING YOUR PERSONAL INFORMATION<br></br>
        We share your Personal Information with third parties to help us use
        your Personal Information, as described above. For example, we use
        Shopify to power our online store--you can read more about how Shopify
        uses your Personal Information here:&nbsp;
        <a href="https://www.shopify.com/legal/privacy" target="__blank">
          https://www.shopify.com/legal/privacy
        </a>
        . We also use Google Analytics to help us understand how our customers
        use the Site--you can read more about how Google uses your Personal
        Information here:&nbsp;
        <a
          href="https://www.google.com/intl/en/policies/privacy/"
          target="__blank"
        >
          https://www.google.com/intl/en/policies/privacy/
        </a>
        . You can also opt-out of Google Analytics here:&nbsp;
        <a href="https://tools.google.com/dlpage/gaoptout" target="__blank">
          https://tools.google.com/dlpage/gaoptout
        </a>
        .<br></br>
        <br></br>
        Finally, we may also share your Personal Information to comply with
        applicable laws and regulations, to respond to a subpoena, search
        warrant or other lawful request for information we receive, or to
        otherwise protect our rights.
        <br></br>
        <br></br>
        DO NOT TRACK<br></br>
        Please note that we do not alter our Site’s data collection and use
        practices when we see a Do Not Track signal from your browser.
        <br></br>
        <br></br>
        YOUR RIGHTS<br></br>
        If you are a European resident, you have the right to access personal
        information we hold about you and to ask that your personal information
        be corrected, updated, or deleted. If you would like to exercise this
        right, please contact us through the contact information below.
        <br></br>
        <br></br>
        Additionally, if you are a European resident we note that we are
        processing your information in order to fulfill contracts we might have
        with you (for example if you make an order through the Site), or
        otherwise to pursue our legitimate business interests listed above.
        Additionally, please note that your information will be transferred
        outside of Europe, including to Canada and the United States.
        <br></br>
        <br></br>
        DATA RETENTION<br></br>
        When you place an order through the Site, we will maintain your Order
        Information for our records unless and until you ask us to delete this
        information.
        <br></br>
        <br></br>
        AGE RESTRICTION IS REQUIRED<br></br>
        The Site is not intended for individuals under the age of 21.
        <br></br>
        <br></br>
        CHANGES<br></br>
        We may update this privacy policy from time to time in order to reflect,
        for example, changes to our practices or for other operational, legal or
        regulatory reasons.
        <br></br>
        <br></br>
        CONTACT US<br></br>
        For more information about our privacy practices, if you have questions,
        or if you would like to make a complaint, please contact us by e-mail at
        qualitreescollective@gmail.com or text 909-551-5046.
      </PrivacyPolicyParagraph>
    </PrivacyPolicySection>
  );
}

export default PrivacyPolicy;
