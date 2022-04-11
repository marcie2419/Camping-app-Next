import React from 'react'
import Head from 'next/head'

const Contact = (props) => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Contact - Camping app</title>
          <meta property="og:title" content="Contact - Camping app" />
        </Head>
        <div className="hero">
          <div className="container1">
            <h1 className="text">We gaan het oplossen.</h1>
            <span className="text1">
              Heb je een fout ontdekt? Of heb je een suggestie voor een nieuwe
              funtie? Neem dan contact op met ons via marc.horstra@gmail.com of
              SMS/MMS naar 06-83919623
            </span>
            <div className="btn-group">
              <a
                href="mailto:marc.horstra@gmail.com?subject=Vraag/suggestie/opmerking"
                className="link button"
              >
                E-mail
              </a>
              <a href="tel:+31683919623" className="link1 button">
                Telefoon
              </a>
              <span>Alleen SMS/MMS</span>
            </div>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&amp;ixlib=rb-1.2.1&amp;h=1200"
            className="image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .container1 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .text {
            font-size: 3rem;
            max-width: 450px;
          }
          .text1 {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .link {
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .link:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .link1 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            border-color: transparent;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .link1:hover {
            border-color: var(--dl-color-gray-black);
          }
          .image {
            width: 400px;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .hero {
              flex-direction: column;
            }
            .container1 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .text {
              text-align: center;
            }
            .text1 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .text1 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .image {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .btn-group {
              flex-direction: column;
            }
            .link1 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
