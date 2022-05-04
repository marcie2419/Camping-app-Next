import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Contact - Camping app</title>
          <meta property="og:title" content="Contact - Camping app" />
        </Head>
        <div className="contact-hero">
          <div className="contact-container1">
            <div className="contact-container2">
              <h1 className="contact-text">We gaan het oplossen.</h1>
              <span className="contact-text1">
                Heb je een fout ontdekt? Of heb je een suggestie voor een nieuwe
                funtie? Neem dan contact op met ons via marc.horstra@gmail.com
                of SMS/MMS naar 06-83919623
              </span>
              <div className="contact-btn-group">
                <a
                  href="mailto:marc.horstra@gmail.com?subject=Vraag/suggestie/opmerking"
                  className="contact-link button"
                >
                  E-mail
                </a>
                <a href="tel:+31683919623" className="contact-link1 button">
                  Telefoon
                </a>
                <span>Alleen SMS/MMS</span>
              </div>
            </div>
            <Link href="/">
              <a className="contact-link2">
                &lt;- Keer terug naar de homepagina
              </a>
            </Link>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&amp;ixlib=rb-1.2.1&amp;h=1200"
            className="contact-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .contact-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .contact-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .contact-container2 {
            display: flex;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .contact-text {
            font-size: 3rem;
            max-width: 450px;
          }
          .contact-text1 {
            width: var(--dl-size-size-xxlarge);
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .contact-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .contact-link {
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .contact-link:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .contact-link1 {
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .contact-link1:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .contact-link2 {
            width: var(--dl-size-size-xxlarge);
            text-decoration: none;
          }
          .contact-image {
            width: 400px;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .contact-hero {
              flex-direction: column;
            }
            .contact-container2 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .contact-text {
              text-align: center;
            }
            .contact-text1 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .contact-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .contact-text1 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .contact-image {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .contact-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .contact-container2 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .contact-btn-group {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
